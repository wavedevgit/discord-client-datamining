/** chunk id: 62218, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    s = n(64700),
    a = n(397927),
    r = n(723702),
    l = n(837921),
    o = n(332191),
    c = n(985018);
class d extends s.PureComponent {
    constructor(e) {
        super(e), this.state = {
            openOnStartup: !0,
            startMinimized: !1,
            minimizeToTray: !0
        }
    }
    async componentDidMount() {
        this.setState({
            openOnStartup: await l.Ay.getOpenOnStart(),
            startMinimized: await l.Ay.getSetting("START_MINIMIZED", !1),
            minimizeToTray: await l.Ay.getSetting("MINIMIZE_TO_TRAY", !0)
        })
    }
    handleToggleOpenOnStartup = () => {
        let e = !this.state.openOnStartup;
        this.setState({
            openOnStartup: e
        }), l.Ay.send("TOGGLE_OPEN_ON_STARTUP", e)
    };
    handleToggleStartMinimized = () => {
        let e = !this.state.startMinimized;
        this.setState({
            startMinimized: e
        }), l.Ay.send("TOGGLE_START_MINIMIZED", e)
    };
    handleToggleMinimizeToTray = () => {
        let e = !this.state.minimizeToTray;
        this.setState({
            minimizeToTray: e
        }), l.Ay.send("TOGGLE_MINIMIZE_TO_TRAY", e)
    };
    render() {
        let {
            openOnStartup: e,
            startMinimized: t,
            minimizeToTray: n
        } = this.state, s = (0, r.isLinux)() ? c.intl.string(c.t["7pPjTW"]) : c.intl.string(c.t.ZkDZov);
        return (0, i.jsxs)(a.BJc, {
            gap: 16,
            children: [(0, i.jsx)(a.Heading, {
                variant: "heading-lg/semibold",
                color: "text-strong",
                children: s
            }), (0, i.jsxs)(a.nVY, {
                children: [(0, i.jsx)(a.dOG, {
                    label: c.intl.string(c.t.WQm4p1),
                    description: c.intl.string(c.t["s/cQrU"]),
                    checked: e,
                    onChange: this.handleToggleOpenOnStartup
                }), (0, r.isWindows)() ? (0, i.jsx)(a.dOG, {
                    label: c.intl.string(c.t.n7Yjes),
                    description: c.intl.string(c.t.o2FSjB),
                    checked: !!e && t,
                    disabled: !e,
                    onChange: this.handleToggleStartMinimized
                }) : null, (0, i.jsx)(a.dOG, {
                    label: c.intl.string(c.t.abLFes),
                    description: c.intl.string(c.t["mVuX+j"]),
                    checked: n,
                    onChange: this.handleToggleMinimizeToTray
                }), (0, i.jsx)(o.J, {})]
            })]
        })
    }
}
let u = d