/** chunk id: 758378 params = (module,exports,require) **/
n.d(t, {
    J: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(15285),
    o = n(942405),
    d = n(403362),
    c = n(975571),
    u = n(652215),
    m = n(985018),
    g = n(752546);

function _() {
    let [e, t] = s.useState(!1), [n, _] = s.useState(() => (0, o.TC)()), A = (0, l.bG)([r.Ay], () => r.Ay.getSystemServiceStatus("input-service")), x = s.useCallback(async () => {
        t(!0), n ? await (0, o.z8)("windows-settings") : await (0, o.sL)("windows-settings"), t(!1), _((0, o.TC)())
    }, [n]), h = "running" === A.state;
    return (0, i.jsxs)("div", {
        className: g.q,
        children: [(0, i.jsxs)("div", {
            className: g.L,
            children: [(0, i.jsx)(a.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                children: m.intl.string(m.t.roHq80)
            }), (0, i.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: m.intl.format(m.t["8CAL+D"], {
                    helpCenterLink: c.A.getArticleURL(u.MVz.SYSTEM_SERVICE)
                })
            }), n ? (0, i.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: h ? "text-feedback-positive" : "text-feedback-warning",
                children: h ? m.intl.string(m.t.KHVMkW) : m.intl.format(m.t["5Rlr0b"], {
                    status: function(e) {
                        switch (e.state) {
                            case "unknown":
                                return m.intl.string(m.t["KW+nqT"]);
                            case "disabled":
                                return m.intl.string(m.t["Q/wAF7"]);
                            case "disconnected":
                                return m.intl.string(m.t.Xvs9IM);
                            case "initializing":
                                return m.intl.string(m.t.h4qz8W);
                            case "connecting":
                                return m.intl.string(m.t.fSu9XF);
                            case "handshaking":
                                return m.intl.string(m.t["00aYLJ"]);
                            case "running":
                                return m.intl.string(m.t["54TB7Z"]);
                            case "waiting-for-retry":
                                return m.intl.string(m.t["0FONwi"]);
                            case "failure":
                                return m.intl.string(m.t.Ic0nkd);
                            default:
                                (0, d.xb)(e.state)
                        }
                    }(A)
                })
            }) : null]
        }), (0, i.jsx)(a.Button, {
            variant: n ? "critical-secondary" : "primary",
            loading: e,
            onClick: x,
            text: n ? m.intl.string(m.t.pAwbdL) : m.intl.string(m.t["1iI46O"])
        })]
    })
}