const std = @import("std");

// zig build -p ./public

pub fn build(b: *std.Build) void {
    const optimize = b.standardOptimizeOption(.{});

    const exe = b.addExecutable(.{
        .name = "canvas",
        .root_source_file = b.path("src/canvas.zig"),
        .optimize = optimize,
        .target = b.resolveTargetQuery(.{
            .cpu_arch = .wasm32,
            .os_tag = .freestanding,
            .abi = .none,
        }),
    });

    exe.entry = .disabled;
    exe.root_module.export_symbol_names = &.{""};

    b.install_path = "public";
    b.installArtifact(exe);
}
