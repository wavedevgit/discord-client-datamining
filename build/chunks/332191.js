/** Chunk was on 5606 **/
/** chunk id: 332191, original params: e,t,n (module,exports,require) **/
n.d(t, {
    J: () => m
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    s = n(397927),
    a = n(15285),
    o = n(942405),
    c = n(403362),
    d = n(975571),
    u = n(652215),
    p = n(985018),
    _ = n(476555);

function m() {
    let e = (0, o.XQ)(),
        [t, n] = i.useState(!1),
        [m, g] = i.useState(() => (0, o.TC)()),
        f = (0, l.bG)([a.Ay], () => a.Ay.getSystemServiceStatus("input-service")),
        b = i.useCallback(async () => {
            n(!0), m ? await (0, o.z8)("windows-settings") : await (0, o.sL)("windows-settings"), n(!1), g((0, o.TC)())
        }, [m]);
    if (!e) return null;
    let h = "running" === f.state;
    return (0, r.jsxs)("div", {
        className: _.q,
        children: [(0, r.jsxs)("div", {
            className: _.L,
            children: [(0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                color: "text-strong",
                children: p.intl.string(p.t.roHq80)
            }), (0, r.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "text-subtle",
                children: p.intl.format(p.t["8CAL+D"], {
                    helpCenterLink: d.A.getArticleURL(u.MVz.SYSTEM_SERVICE)
                })
            }), m ? (0, r.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: h ? "text-feedback-positive" : "text-feedback-warning",
                children: h ? p.intl.string(p.t.KHVMkW) : p.intl.format(p.t["5Rlr0b"], {
                    status: function(e) {
                        switch (e.state) {
                            case "unknown":
                                return p.intl.string(p.t["KW+nqT"]);
                            case "disabled":
                                return p.intl.string(p.t["Q/wAF7"]);
                            case "disconnected":
                                return p.intl.string(p.t.Xvs9IM);
                            case "initializing":
                                return p.intl.string(p.t.h4qz8W);
                            case "connecting":
                                return p.intl.string(p.t.fSu9XF);
                            case "handshaking":
                                return p.intl.string(p.t["00aYLJ"]);
                            case "running":
                                return p.intl.string(p.t["54TB7Z"]);
                            case "waiting-for-retry":
                                return p.intl.string(p.t["0FONwi"]);
                            case "failure":
                                return p.intl.string(p.t.Ic0nkd);
                            default:
                                (0, c.xb)(e.state)
                        }
                    }(f)
                })
            }) : null]
        }), (0, r.jsx)(s.Button, {
            variant: m ? "critical-secondary" : "primary",
            loading: t,
            onClick: b,
            text: m ? p.intl.string(p.t.pAwbdL) : p.intl.string(p.t["1iI46O"])
        })]
    })
}