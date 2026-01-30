/** chunk id: 927766, original params: e,t,i (module,exports,require) **/
i.d(t, {
    X: () => a
});
var n = i(627968),
    l = i(64700),
    s = i(574381),
    r = i(732955);
let a = e => {
        let {
            onClick: t
        } = e, i = (0, s.R0)(), a = (0, l.useMemo)(() => u(i), [i]);
        return (0, n.jsx)(r.$nd, {
            text: "Get the Discord App",
            onClick: () => {
                null == t || t(), window.location.href = "https://discord.com/api/download?platform=" + a
            }
        })
    },
    u = e => "macos" === e ? "osx" : "win"