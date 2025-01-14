const std = @import("std");

const web = struct {
    extern "web" fn log(ptr: [*]const u8, len: u32) void;
};
