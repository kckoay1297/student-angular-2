export class StudentResponse {
    constructor(
        public studentId: string,
        public studentName: string,
        public nric: string,
        public gender: string, 
        public email: string, 
        public phoneNumber: string
      ) {  }
}

