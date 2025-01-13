// NOTE: Has to be compiled to a .wasm file.
// zig build-exe canvas.zig -target wasm32-freestanding -fno-entry --export=add

const web = struct {
    extern "web" fn log(ptr: [*]const u8, len: u32) void;
};

export fn add(a: i32, b: i32) i32 {
    const msg: []const u8 = "adding two numbers together";
    web.log(msg.ptr, msg.len);
    return a + b;
}
