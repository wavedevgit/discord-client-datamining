/** Chunk was on 32502 **/
/** chunk id: 62218, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968),
    l = n(64700),
    s = n(397927),
    r = n(723702),
    a = n(837921),
    o = n(332191),
    c = n(985018);

function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
class u extends l.PureComponent {
    async componentDidMount() {
        this.setState({
            openOnStartup: await a.Ay.getOpenOnStart(),
            startMinimized: await a.Ay.getSetting("START_MINIMIZED", !1),
            minimizeToTray: await a.Ay.getSetting("MINIMIZE_TO_TRAY", !0)
        })
    }
    render() {
        let {
            openOnStartup: e,
            startMinimized: t,
            minimizeToTray: n
        } = this.state, l = (0, r.isLinux)() ? c.intl.string(c.t["7pPjTW"]) : c.intl.string(c.t.ZkDZov);
        return (0, i.jsxs)(s.BJc, {
            gap: 16,
            children: [(0, i.jsx)(s.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: l
            }), (0, i.jsxs)(s.nVY, {
                children: [(0, i.jsx)(s.dOG, {
                    label: c.intl.string(c.t.WQm4p1),
                    description: c.intl.string(c.t["s/cQrU"]),
                    checked: e,
                    onChange: this.handleToggleOpenOnStartup
                }), (0, r.isWindows)() ? (0, i.jsx)(s.dOG, {
                    label: c.intl.string(c.t.n7Yjes),
                    description: c.intl.string(c.t.o2FSjB),
                    checked: !!e && t,
                    disabled: !e,
                    onChange: this.handleToggleStartMinimized
                }) : null, (0, i.jsx)(s.dOG, {
                    label: c.intl.string(c.t.abLFes),
                    description: c.intl.string(c.t["mVuX+j"]),
                    checked: n,
                    onChange: this.handleToggleMinimizeToTray
                }), (0, i.jsx)(o.J, {})]
            })]
        })
    }
    constructor(e) {
        super(e), d(this, "handleToggleOpenOnStartup", () => {
            let e = !this.state.openOnStartup;
            this.setState({
                openOnStartup: e
            }), a.Ay.send("TOGGLE_OPEN_ON_STARTUP", e)
        }), d(this, "handleToggleStartMinimized", () => {
            let e = !this.state.startMinimized;
            this.setState({
                startMinimized: e
            }), a.Ay.send("TOGGLE_START_MINIMIZED", e)
        }), d(this, "handleToggleMinimizeToTray", () => {
            let e = !this.state.minimizeToTray;
            this.setState({
                minimizeToTray: e
            }), a.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e)
        }), this.state = {
            openOnStartup: !0,
            startMinimized: !1,
            minimizeToTray: !0
        }
    }
}
let h = u