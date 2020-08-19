define(["require", "exports"], function (require, exports) {
    var Feedback = (function () {
        function Feedback(name, email, subject, message) {
            this.name = name;
            this.email = email;
            this.subject = subject;
            this.message = message;
        }
        return Feedback;
    })();
    exports.Feedback = Feedback;
});
