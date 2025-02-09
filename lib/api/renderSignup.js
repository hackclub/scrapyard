export default function renderSignup (signup) {
    let json;
    try {
        json = JSON.parse(signup.fields['Organizer Notes']);
    } catch (e) {
        json = {};
    }
    return {
        id: signup.id,
        createdAt: signup.createdTime,
        email: signup.fields['Email'],
        fullName: signup.fields['Full Name'],
        preferredName: signup.fields['Preferred Name'],
        pronouns: signup.fields['Pronouns'],
        address: signup.fields['Address'],
        phoneNumber: signup.fields['Phone'],
        dateOfBirth: signup.fields['DOB'],
        parentName: signup.fields['Parent Name'],
        parentEmail: signup.fields['Parent Email'],
        emergencyPhone: signup.fields['Emergency Phone'],
        allergiesAndMedicalConcerns: signup.fields['Medical allergies/concerns'],
        reference: signup.fields['Reference'],
        tShirtSize: signup.fields['T-shirt Size'],
        organizerNotes: json,
    }
}