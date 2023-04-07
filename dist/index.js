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
        hello: "tony"
    });
});
const port = Number(process.env.PORT || 8080);
// 0.0.0.0 host is a must when we run the app in docker
app.listen(port, "0.0.0.0", ()=>{
    console.log(`Server is listening on port ${port}`);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IG1vcmdhbiBmcm9tICdtb3JnYW4nXG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKVxuYXBwLnVzZShtb3JnYW4oJ2RldicpKVxuXG5hcHAuZ2V0KCcvJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgcmVzLmpzb24oe1xuICAgICAgICBoZWxsbzogJ3RvbnknXG4gICAgfSlcbn0pXG5cbmNvbnN0IHBvcnQgPSBOdW1iZXIocHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDgwKVxuXG4vLyAwLjAuMC4wIGhvc3QgaXMgYSBtdXN0IHdoZW4gd2UgcnVuIHRoZSBhcHAgaW4gZG9ja2VyXG5hcHAubGlzdGVuKHBvcnQsICcwLjAuMC4wJywgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgaXMgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApXG59KSJdLCJuYW1lcyI6WyJhcHAiLCJleHByZXNzIiwidXNlIiwibW9yZ2FuIiwiZ2V0IiwicmVxIiwicmVzIiwianNvbiIsImhlbGxvIiwicG9ydCIsIk51bWJlciIsInByb2Nlc3MiLCJlbnYiLCJQT1JUIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7OztnRUFBb0I7K0RBQ0Q7Ozs7OztBQUVuQixNQUFNQSxNQUFNQyxJQUFBQSxnQkFBTztBQUNuQkQsSUFBSUUsR0FBRyxDQUFDQyxJQUFBQSxlQUFNLEVBQUM7QUFFZkgsSUFBSUksR0FBRyxDQUFDLEtBQUssQ0FBQ0MsS0FBS0MsTUFBUTtJQUN2QkEsSUFBSUMsSUFBSSxDQUFDO1FBQ0xDLE9BQU87SUFDWDtBQUNKO0FBRUEsTUFBTUMsT0FBT0MsT0FBT0MsUUFBUUMsR0FBRyxDQUFDQyxJQUFJLElBQUk7QUFFeEMsdURBQXVEO0FBQ3ZEYixJQUFJYyxNQUFNLENBQUNMLE1BQU0sV0FBVyxJQUFNO0lBQzlCTSxRQUFRQyxHQUFHLENBQUMsQ0FBQyw0QkFBNEIsRUFBRVAsS0FBSyxDQUFDO0FBQ3JEIn0=