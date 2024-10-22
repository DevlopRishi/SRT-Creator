let subtitles = [];
let index = 1;

// Function to add a subtitle entry
document.getElementById('addSubtitle').addEventListener('click', function() {
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    const text = document.getElementById('text').value;

    if (startTime && endTime && text) {
        subtitles.push({
            index: index,
            startTime: startTime,
            endTime: endTime,
            text: text
        });

        index++;
        document.getElementById('subtitleForm').reset(); // Clear the form for the next entry
        alert('Subtitle added!');
    } else {
        alert('Please fill all fields');
    }
});

// Function to generate SRT file
document.getElementById('generateSRT').addEventListener('click', function() {
    let srtContent = "";

    subtitles.forEach(subtitle => {
        srtContent += `${subtitle.index}\n`;
        srtContent += `${subtitle.startTime} --> ${subtitle.endTime}\n`;
        srtContent += `${subtitle.text}\n\n`;
    });

    // Display the output
    document.getElementById('srtOutput').innerText = srtContent;

    // Download the SRT file
    const blob = new Blob([srtContent], { type: 'text/srt' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'subtitles.srt';
    link.click();
});