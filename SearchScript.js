// ========== THE FISHING DATA ==========
// Define which roll numbers are "special" (will show fake results)
const validRolls = ['735031', '735032', '735033', '735034', '735035', '735036'];

// Data for each roll number
const fakeResults = {
    '735031': {
        rollNo: '735031',
        name: 'AHMAD ALI',
        fatherName: 'MUHAMMAD ALI',
        marks: '450',
        grade: 'A',
        subjects: [
            { sr: 1, code: 'E-I', theory: 80, practical: ' ' },
            { sr: 2, code: 'U-I', theory: 75, practical: ' ' },
            { sr: 3, code: 'IE-I', theory: 35, practical: ' ' },
            { sr: 4, code: 'MQH-I', theory: 40, practical: ' ' },
            { sr: 5, code: 'M-I', theory: 70, practical: ' ' },
            { sr: 6, code: 'PH-I', theory: 78, practical: ' ' },
            { sr: 7, code: 'CS-I', theory: 72, practical: ' ' },
        ]
    },
    '735032': {
        rollNo: '735032',
        name: 'BILAL KHAN',
        fatherName: 'GHULAM KHAN',
        marks: '480',
        grade: 'A',
        subjects: [
            { sr: 1, code: 'E-I', theory: 82, practical: ' ' },
            { sr: 2, code: 'U-I', theory: 78, practical: ' ' },
            { sr: 3, code: 'IE-I', theory: 42, practical: ' ' },
            { sr: 4, code: 'MQH-I', theory: 45, practical: ' ' },
            { sr: 5, code: 'M-I', theory: 73, practical: ' ' },
            { sr: 6, code: 'PH-I', theory: 80, practical: ' ' },
            { sr: 7, code: 'CS-I', theory: 80, practical: ' ' },
        ]
    },
    '735033': {
        rollNo: '735033',
        name: 'DANIAL AHMED',
        fatherName: 'AHMED HASSAN',
        marks: '510',
        grade: 'A1',
        subjects: [
            { sr: 1, code: 'E-I', theory: 88, practical: ' ' },
            { sr: 2, code: 'U-I', theory: 85, practical: ' ' },
            { sr: 3, code: 'IE-I', theory: 48, practical: ' ' },
            { sr: 4, code: 'MQH-I', theory: 50, practical: ' ' },
            { sr: 5, code: 'M-I', theory: 78, practical: ' ' },
            { sr: 6, code: 'PH-I', theory: 82, practical: ' ' },
            { sr: 7, code: 'CS-I', theory: 79, practical: ' ' },
        ]
    },
    '735034': {
        rollNo: '735034',
        name: 'MUHAMMAD MUBEEN ALI',
        fatherName: 'SHAMSHER ALI SHER',
        marks: '502',
        grade: 'A1',
        subjects: [
            { sr: 1, code: 'E-I', theory: 90, practical: ' ' },
            { sr: 2, code: 'U-I', theory: 90, practical: ' ' },
            { sr: 3, code: 'IE-I', theory: 40, practical: ' ' },
            { sr: 4, code: 'MQH-I', theory: 42, practical: ' ' },
            { sr: 5, code: 'M-I', theory: 75, practical: ' ' },
            { sr: 6, code: 'PH-I', theory: 80, practical: ' ' },
            { sr: 7, code: 'CS-I', theory: 95, practical: ' ' },
        ]
    },
    '735035': {
        rollNo: '735035',
        name: 'FAHAD HUSSAIN',
        fatherName: 'HUSSAIN ALI',
        marks: '465',
        grade: 'A',
        subjects: [
            { sr: 1, code: 'E-I', theory: 76, practical: ' ' },
            { sr: 2, code: 'U-I', theory: 72, practical: ' ' },
            { sr: 3, code: 'IE-I', theory: 38, practical: ' ' },
            { sr: 4, code: 'MQH-I', theory: 43, practical: ' ' },
            { sr: 5, code: 'M-I', theory: 68, practical: ' ' },
            { sr: 6, code: 'PH-I', theory: 74, practical: ' ' },
            { sr: 7, code: 'CS-I', theory: 94, practical: ' ' },
        ]
    },
    '735036': {
        rollNo: '735036',
        name: 'SALMAN YOUSAF',
        fatherName: 'YOUSAF KHAN',
        marks: '520',
        grade: 'A1',
        subjects: [
            { sr: 1, code: 'E-I', theory: 92, practical: ' ' },
            { sr: 2, code: 'U-I', theory: 87, practical: ' ' },
            { sr: 3, code: 'IE-I', theory: 49, practical: ' ' },
            { sr: 4, code: 'MQH-I', theory: 51, practical: ' ' },
            { sr: 5, code: 'M-I', theory: 80, practical: ' ' },
            { sr: 6, code: 'PH-I', theory: 85, practical: ' ' },
            { sr: 7, code: 'CS-I', theory: 76, practical: ' ' },
        ]
    }
};

// ========== MAIN FUNCTION ==========
function SearchResultbyRoll(rollNo) {
    const input = rollNo.trim();
    const resultDiv = document.getElementById('ShowResult');

    // If empty, show warning and stop
    if (input === '') {
        resultDiv.innerHTML = `
            <div class="alert alert-warning">
                <strong>Please enter your Roll No.</strong>
            </div>
        `;
        resultDiv.style.visibility = 'visible';
        return;
    }

    // Check if input is in our valid list
    if (validRolls.includes(input)) {
        const student = fakeResults[input];

        // --- Student details (vertical table) ---
        let detailsHtml = `
            <div class="result-card">
                <div class="result-header">Student Result Details</div>
                <table class="table table-bordered detail-table">
                    <tbody>
                        <tr><td><strong>Roll No</strong></td><td>${student.rollNo}</td></tr>
                        <tr><td><strong>Name</strong></td><td>${student.name}</td></tr>
                        <tr><td><strong>Father Name</strong></td><td>${student.fatherName}</td></tr>
                        <tr><td><strong>Marks</strong></td><td>${student.marks}</td></tr>
                        <tr><td><strong>Grade</strong></td><td>${student.grade}</td></tr>
                        <tr><td><strong>Remarks</strong></td><td></td></tr>
                        <tr><td style="color: red;"><strong>Collect DMC From</strong></td><td>—</td></tr>
                    </tbody>
                </table>
        `;

        // --- Subject table ---
        let subjectHtml = `
                <table class="table table-bordered subject-table">
                    <thead>
                        <tr>
                            <th>Sr.#</th>
                            <th>Subject</th>
                            <th>Theory Marks</th>
                            <th>Practical Marks</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        student.subjects.forEach(sub => {
            subjectHtml += `
                <tr>
                    <td>${sub.sr}</td>
                    <td>${sub.code}</td>
                    <td>${sub.theory}</td>
                    <td>${sub.practical}</td>
                </tr>
            `;
        });

        subjectHtml += `
                    </tbody>
                </table>
                <div class="search-another">
                    <a href="#" onclick="resetSearch(); return false;">Search Another Result</a>
                </div>
            </div>
        `;

        resultDiv.innerHTML = detailsHtml + subjectHtml;
        resultDiv.style.visibility = 'visible';

    } else {
        // Unknown roll → redirect
        resultDiv.innerHTML = `
            <div class="alert alert-info">
                <strong>Redirecting to BISE Peshawar official results…</strong>
            </div>
        `;
        resultDiv.style.visibility = 'visible';

        setTimeout(function() {
            window.location.href = 'https://share.google/w2WtyQKe3af2mRfsi';
        }, 1500);
    }
}

// ========== RESET FUNCTION ==========
function resetSearch() {
    document.getElementById('RollNo').value = '';
    document.getElementById('RollNo').focus();
    const resultDiv = document.getElementById('ShowResult');
    resultDiv.innerHTML = '';
    resultDiv.style.visibility = 'hidden';
}