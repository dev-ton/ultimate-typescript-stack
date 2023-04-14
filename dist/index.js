"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _express = /*#__PURE__*/ _interop_require_default(require("express"));
const _morgan = /*#__PURE__*/ _interop_require_default(require("morgan"));
const _db = /*#__PURE__*/ _interop_require_default(require("./modules/db"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const app = (0, _express.default)();
app.use((0, _morgan.default)("dev"));
app.get("/", async (req, res)=>{
    const posts = await _db.default.post.findMany({
        where: {
            publishedAt: {
                not: null
            }
        }
    });
    res.json(posts);
});
const port = Number(process.env.PORT || 8080);
// 0.0.0.0 host is a must when we run the app in docker
app.listen(port, "0.0.0.0", ()=>{
    console.log(`Server is listening on port ${port}`);
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcbmltcG9ydCBkYiBmcm9tICcuL21vZHVsZXMvZGInO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5hcHAudXNlKG1vcmdhbignZGV2JykpO1xuXG5hcHAuZ2V0KCcvJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZGIucG9zdC5maW5kTWFueSh7XG4gICAgd2hlcmU6IHtcbiAgICAgIHB1Ymxpc2hlZEF0OiB7XG4gICAgICAgIG5vdDogbnVsbCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSk7XG4gIHJlcy5qc29uKHBvc3RzKTtcbn0pO1xuXG5jb25zdCBwb3J0ID0gTnVtYmVyKHByb2Nlc3MuZW52LlBPUlQgfHwgODA4MCk7XG5cbi8vIDAuMC4wLjAgaG9zdCBpcyBhIG11c3Qgd2hlbiB3ZSBydW4gdGhlIGFwcCBpbiBkb2NrZXJcbmFwcC5saXN0ZW4ocG9ydCwgJzAuMC4wLjAnLCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBTZXJ2ZXIgaXMgbGlzdGVuaW5nIG9uIHBvcnQgJHtwb3J0fWApO1xufSk7XG4iXSwibmFtZXMiOlsiYXBwIiwiZXhwcmVzcyIsInVzZSIsIm1vcmdhbiIsImdldCIsInJlcSIsInJlcyIsInBvc3RzIiwiZGIiLCJwb3N0IiwiZmluZE1hbnkiLCJ3aGVyZSIsInB1Ymxpc2hlZEF0Iiwibm90IiwianNvbiIsInBvcnQiLCJOdW1iZXIiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImxpc3RlbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Z0VBQW9COytEQUNEOzJEQUNKOzs7Ozs7QUFFZixNQUFNQSxNQUFNQyxJQUFBQSxnQkFBTztBQUNuQkQsSUFBSUUsR0FBRyxDQUFDQyxJQUFBQSxlQUFNLEVBQUM7QUFFZkgsSUFBSUksR0FBRyxDQUFDLEtBQUssT0FBT0MsS0FBS0MsTUFBUTtJQUMvQixNQUFNQyxRQUFRLE1BQU1DLFdBQUUsQ0FBQ0MsSUFBSSxDQUFDQyxRQUFRLENBQUM7UUFDbkNDLE9BQU87WUFDTEMsYUFBYTtnQkFDWEMsS0FBSyxJQUFJO1lBQ1g7UUFDRjtJQUNGO0lBQ0FQLElBQUlRLElBQUksQ0FBQ1A7QUFDWDtBQUVBLE1BQU1RLE9BQU9DLE9BQU9DLFFBQVFDLEdBQUcsQ0FBQ0MsSUFBSSxJQUFJO0FBRXhDLHVEQUF1RDtBQUN2RG5CLElBQUlvQixNQUFNLENBQUNMLE1BQU0sV0FBVyxJQUFNO0lBQ2hDTSxRQUFRQyxHQUFHLENBQUMsQ0FBQyw0QkFBNEIsRUFBRVAsS0FBSyxDQUFDO0FBQ25EIn0=