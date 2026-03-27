/** chunk id: 927573 params = (module,exports,require) **/
s.d(t, {
    $s: () => d,
    Qy: () => l,
    T$: () => o,
    Ug: () => i,
    _4: () => r,
    mu: () => u
});
var n, a = s(985018);
let r = 5,
    l = 10,
    i = 30;
var o = ((n = {})[n.DISPLAY = 0] = "DISPLAY", n[n.PERMISSIONS = 1] = "PERMISSIONS", n[n.MEMBERS = 2] = "MEMBERS", n[n.VERIFICATIONS = 3] = "VERIFICATIONS", n);
let c = {
    afk_channel_id: () => a.intl.string(a.t.KuYcnU),
    public_updates_channel_id: () => a.intl.string(a.t.vAyDGU),
    safety_alerts_channel_id: () => a.intl.string(a.t.sMkYE8),
    system_channel_id: () => a.intl.string(a.t.NASFnq)
};

function d(e) {
    if (0 === Object.keys(e).length) return null;
    let t = Object.keys(e)[0],
        s = c[t]?.();
    return null != s ? `(${s}) ${e[t]}` : e[t]
}
let u = "https://discord.gg"