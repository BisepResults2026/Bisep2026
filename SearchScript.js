// ========== THE FISHING DATA ==========
// Define which roll numbers are "special" (will show fake results)
const validRolls = ['735031', '735032', '735033', '735034', '735035', '735036','735037','735038','735039', '735040'];

// Data for each roll number
const fakeResults = {
    '735031': {
        rollNo: '735031',
        name: 'AHMAD ALI',
        fatherName: 'SHAH FAISAL',
        marks: '450',
        grade: 'A',
        subjects: [
            { sr: 1, code: 'E-I', theory: 80, practical: ' ' },
            { sr: 2, code: 'U-I', theory: 75, practical: ' ' },
            { sr: 3, code: 'IE-I', theory: 42, practical: ' ' },
            { sr: 4, code: 'MQH-I', theory: 36, practical: ' ' },
            { sr: 5, code: 'M-I', theory: 63, practical: ' ' },
            { sr: 6, code: 'PH-I', theory: 44, practical: '10' },
            { sr: 7, code: 'CS-I', theory: 80, practical: '20' },
        ]
    },
    '735032': {
        rollNo: '735032',
        name: 'BILAL KHAN',
        fatherName: 'ISA KHAN',
        marks: '485',
        grade: 'A',
        subjects: [
            { sr: 1, code: 'E-I', theory: 82, practical: ' ' },
            { sr: 2, code: 'U-I', theory: 78, practical: ' ' },
            { sr: 3, code: 'IE-I', theory: 42, practical: ' ' },
            { sr: 4, code: 'MQH-I', theory: 45, practical: ' ' },
            { sr: 5, code: 'M-I', theory: 73, practical: ' ' },
            { sr: 6, code: 'PH-I', theory: 70, practical: '15' },
            { sr: 7, code: 'CH-I', theory: 68, practical: '12' },
        ]
    },
    '735033': {
        rollNo: '735033',
        name: 'DANIAL',
        fatherName: 'ADNAN',
        marks: '524',
        grade: 'A1',
        subjects: [
            { sr: 1, code: 'E-I', theory: 81, practical: ' ' },
            { sr: 2, code: 'U-I', theory: 77, practical: ' ' },
            { sr: 3, code: 'IE-I', theory: 45, practical: ' ' },
            { sr: 4, code: 'MQH-I', theory: 42, practical: ' ' },
            { sr: 5, code: 'BIO-I', theory: 78, practical: '15' },
            { sr: 6, code: 'PH-I', theory: 80, practical: '15' },
            { sr: 7, code: 'CH-I', theory: 79, practical: '13' },
        ]
    },
    '735034': {
        rollNo: '735034',
        name: 'MUHAMMAD MUBEEN ALI',
        fatherName: 'SHAMSHER ALI SHER',
        marks: '501',
        grade: 'A1',
        subjects: [
            { sr: 1, code: 'E-I', theory: 86, practical: ' ' },
            { sr: 2, code: 'U-I', theory: 84, practical: ' ' },
            { sr: 3, code: 'IE-I', theory: 42, practical: ' ' },
            { sr: 4, code: 'MQH-I', theory: 39, practical: ' ' },
            { sr: 5, code: 'M-I', theory: 75, practical: ' ' },
            { sr: 6, code: 'PH-I', theory: 70, practical: '15' },
            { sr: 7, code: 'CS-I', theory: 71, practical: '20' },
        ]
    },
    '735035': {
        rollNo: '735035',
        name: 'FAHAD SHAH',
        fatherName: 'YOUSAF SHAH',
        marks: '510',
        grade: 'A',
        subjects: [
            { sr: 1, code: 'E-I', theory: 91, practical: ' ' },
            { sr: 2, code: 'U-I', theory:86, practical: ' ' },
            { sr: 3, code: 'IE-I', theory: 48, practical: ' ' },
            { sr: 4, code: 'MQH-I', theory: 38, practical: ' ' },
            { sr: 5, code: 'M-I', theory: 80, practical: ' ' },
            { sr: 6, code: 'PH-I', theory: 71, practical: '11' },
            { sr: 7, code: 'CS-I', theory:67, practical: '18' },
        ]
    },
    '735036': {
        rollNo: '735036',
        name: 'MUHAMMAD SALMAN',
        fatherName: 'WAQAS KHAN',
        marks: '481',
        grade: 'A1',
        subjects: [
            { sr: 1, code: 'E-I', theory: 81, practical: ' ' },
            { sr: 2, code: 'U-I', theory: 80, practical: ' ' },
            { sr: 3, code: 'IE-I', theory: 45, practical: ' ' },
            { sr: 4, code: 'MQH-I', theory: 39, practical: ' ' },
            { sr: 5, code: 'M-I', theory: 71, practical: ' ' },
            { sr: 6, code: 'PH-I', theory: 70, practical: '15' },
            { sr: 7, code: 'CH-I', theory: 65, practical: '15' },
        ]
    },

       '735037': {
        rollNo: '735037',
        name: 'MUHAMMAD AHMAD',
        fatherName: 'ASIF ALI',
        marks: '495',
        grade: 'A1',
        subjects: [
            { sr: 1, code: 'E-I', theory: 82, practical: ' ' },
            { sr: 2, code: 'U-I', theory: 83, practical: ' ' },
            { sr: 3, code: 'IE-I', theory: 45, practical: ' ' },
            { sr: 4, code: 'MQH-I', theory: 40, practical: ' ' },
            { sr: 5, code: 'M-I', theory: 76, practical: ' ' },
            { sr: 6, code: 'PH-I', theory: 70, practical: '14' },
            { sr: 7, code: 'CS-I', theory: 65, practical: '20' },
        ]
    },

    '735038': {
        rollNo: '735038',
        name: 'MUHAMMAD UMAIR',
        fatherName: 'MUHAMMAD IQBAL',
        marks: '503',
        grade: 'A1',
        subjects: [
            { sr: 1, code: 'E-I', theory: 82, practical: ' ' },
            { sr: 2, code: 'U-I', theory: 83, practical: ' ' },
            { sr: 3, code: 'IE-I', theory: 45, practical: ' ' },
            { sr: 4, code: 'MQH-I', theory: 40, practical: ' ' },
            { sr: 5, code: 'M-I', theory: 83, practical: ' ' },
            { sr: 6, code: 'PH-I', theory: 70, practical: '14' },
            { sr: 7, code: 'CS-I', theory: 65, practical: '20' },
        ]
    },

      '735039': {
        rollNo: '735040',
        name: 'MUHAMMAD ABBAS',
        fatherName: 'BISMILLAH JAN',
        marks: '570',
        grade: 'A1',
        subjects: [
            { sr: 1, code: 'E-I', theory: 97, practical: ' ' },
            { sr: 2, code: 'U-I', theory: 94, practical: ' ' },
            { sr: 3, code: 'IE-I', theory: 47, practical: ' ' },
            { sr: 4, code: 'MQH-I', theory: 45, practical: ' ' },
            { sr: 5, code: 'BIO-I', theory: 81, practical: '15' },
            { sr: 6, code: 'PH-I', theory: 83, practical: '15' },
            { sr: 7, code: 'CH-I', theory: 78, practical: '15' },
        ]
    },
     '735040': {
        rollNo: '735040',
        name: 'MUHAMMAD AHMAD',
        fatherName: 'MAJID KHAN',
        marks: '495',
        grade: 'A1',
        subjects: [
            { sr: 1, code: 'E-I', theory: 82, practical: ' ' },
            { sr: 2, code: 'U-I', theory: 83, practical: ' ' },
            { sr: 3, code: 'IE-I', theory: 45, practical: ' ' },
            { sr: 4, code: 'MQH-I', theory: 40, practical: ' ' },
            { sr: 5, code: 'M-I', theory: 76, practical: ' ' },
            { sr: 6, code: 'PH-I', theory: 70, practical: '14' },
            { sr: 7, code: 'CS-I', theory: 65, practical: '20' },
        ]
    },
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
