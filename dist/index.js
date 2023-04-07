"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _express = /*#__PURE__*/ _interop_require_default(require("express"));
const _morgan = /*#__PURE__*/ _interop_require_default(require("morgan"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const app = (0, _express.default)();
app.use((0, _morgan.default)("dev"));
app.get("/", (req, res)=>{
    res.json({
        hello: "tonyleejonesii"
    });
});
const port = Number(process.env.PORT || 8080);
// 0.0.0.0 host is a must when we run the app in docker
app.listen(port, "0.0.0.0", ()=>{
    console.log(`Server is listening on port ${port}`);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IG1vcmdhbiBmcm9tICdtb3JnYW4nXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuYXBwLnVzZShtb3JnYW4oJ2RldicpKVxuXG5hcHAuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLmpzb24oe1xuICAgICAgICBoZWxsbzogJ3RvbnlsZWVqb25lc2lpJ1xuICAgIH0pXG59KVxuXG5jb25zdCBwb3J0ID0gTnVtYmVyKHByb2Nlc3MuZW52LlBPUlQgfHwgODA4MClcbi8vIDAuMC4wLjAgaG9zdCBpcyBhIG11c3Qgd2hlbiB3ZSBydW4gdGhlIGFwcCBpbiBkb2NrZXJcbmFwcC5saXN0ZW4ocG9ydCwgJzAuMC4wLjAnLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYFNlcnZlciBpcyBsaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YClcbn0pIl0sIm5hbWVzIjpbImFwcCIsImV4cHJlc3MiLCJ1c2UiLCJtb3JnYW4iLCJnZXQiLCJyZXEiLCJyZXMiLCJqc29uIiwiaGVsbG8iLCJwb3J0IiwiTnVtYmVyIiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7O2dFQUFvQjsrREFDRDs7Ozs7O0FBRW5CLE1BQU1BLE1BQU1DLElBQUFBLGdCQUFPO0FBQ25CRCxJQUFJRSxHQUFHLENBQUNDLElBQUFBLGVBQU0sRUFBQztBQUVmSCxJQUFJSSxHQUFHLENBQUMsS0FBSyxDQUFDQyxLQUFLQyxNQUFRO0lBQ3ZCQSxJQUFJQyxJQUFJLENBQUM7UUFDTEMsT0FBTztJQUNYO0FBQ0o7QUFFQSxNQUFNQyxPQUFPQyxPQUFPQyxRQUFRQyxHQUFHLENBQUNDLElBQUksSUFBSTtBQUN4Qyx1REFBdUQ7QUFDdkRiLElBQUljLE1BQU0sQ0FBQ0wsTUFBTSxXQUFXLElBQU07SUFDOUJNLFFBQVFDLEdBQUcsQ0FBQyxDQUFDLDRCQUE0QixFQUFFUCxLQUFLLENBQUM7QUFDckQifQ==