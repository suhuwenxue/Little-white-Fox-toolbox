/*
 * @Author: xiehuqiqi shenming26@outlook.con
 * @Date: 2024-10-17 20:22:04
 * @LastEditors: xiehuqiqi shenming26@outlook.con
 * @LastEditTime: 2024-10-19 13:41:27
 * @FilePath: \Time-literature-club\src-tauri\src\lib.rs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

// use tauri_plugin_log::{Target, TargetKind};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_process::init())
        //  插件  日志  为您的 Tauri 应用程序配置日志记录。
        //  https://tauri.app/plugin/logging/
        //  windows macOS linux
        .plugin(tauri_plugin_log::Builder::new().build())
        //  插件  自动启动  在系统启动时自动启动应用程序。
        //  https://tauri.app/plugin/autostart/
        //  windows macOS linux
        //.plugin(tauri_plugin_autostart::init(/* MacosLauncher */ /* Option<Vec<&'static str>> */))
        //  插件  剪贴板  使用 clipboard 插件读取和写入系统剪贴板。
        //  https://tauri.app/plugin/clipboard/
        //  windows macOS linux android ios
        .plugin(tauri_plugin_clipboard_manager::init())
        //  插件  文件系统  访问文件系统。
        //  https://tauri.app/plugin/file-system/#supported-platforms
        //  windows macOS linux android ios
        .plugin(tauri_plugin_fs::init())
        //  插件  通知  使用通知插件向用户发送本机通知。
        //  https://tauri.app/plugin/notification/
        //  windows macOS linux android ios
        .plugin(tauri_plugin_notification::init())
        //  插件  OS 信息  使用 OS Information 插件阅读有关操作系统的信息。
        //  https://tauri.app/plugin/os-info/
        //  windows macOS linux android ios
        .plugin(tauri_plugin_os::init())
        //  插件	 更新  使用更新服务器或静态 JSON 自动更新您的 Tauri 应用程序。
        //  https://tauri.app/plugin/updater/
        //  windows macOS linux
        .plugin(tauri_plugin_updater::Builder::new().build())
        // 插件 上传   通过 HTTP 将文件从磁盘上传到远程服务器。将文件从远程 HTTP 服务器下载到磁盘。
        //  https://tauri.app/plugin/upload/
        //  windows macOS linux android ios
        .plugin(tauri_plugin_upload::init())
        // 插件  Websocket 浏览器   在 JavaScript 中使用 Rust 客户端打开 WebSocket 连接。
        // https://tauri.app/plugin/websocket/
        //  windows macOS linux android ios
        .plugin(tauri_plugin_websocket::init())
        // 插件  窗口状态控制  保存窗口位置和大小，并在重新打开应用程序时恢复它们
        // https://tauri.app/plugin/window-state/
        //  windows macOS linux
        .plugin(tauri_plugin_window_state::Builder::new().build())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
