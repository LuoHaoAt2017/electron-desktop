# electron-desktop
基于 electron 构建桌面端应用

因为 Electron 将 Node.js 嵌入到其二进制文件中，你应用运行时的 Node.js 版本与你系统中运行的 Node.js 版本无关。

任何 Electron 应用程序的入口都是 main 文件。 这个文件控制了主进程，它运行在一个完整的Node.js环境中，
负责控制您应用的生命周期，显示原生界面，执行特殊操作并管理渲染器进程