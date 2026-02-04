/** chunk id: 327866, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
}), n(896048);
var r = n(64700),
    i = n(311907),
    l = n(827343),
    a = n(800828),
    s = n(912309),
    o = n(780964),
    c = n(840065),
    u = n(458294),
    d = n(430452),
    p = n(803224),
    h = n(383501),
    f = n(994500),
    g = n(485296),
    m = n(723702),
    A = n(837921),
    _ = n(652215);
let b = (0, m.isMac)() ? null : "DEFAULT";
class E extends r.PureComponent {
    componentDidMount() {
        A.Ay.setSystemTrayIcon(this.getIcon())
    }
    componentDidUpdate() {
        A.Ay.setSystemTrayIcon(this.getIcon())
    }
    componentWillUnmount() {
        A.Ay.setSystemTrayIcon(b)
    }
    render() {
        return null
    }
    constructor(...e) {
        super(...e),
            function(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n
            }(this, "getIcon", () => {
                let {
                    deafened: e,
                    muted: t,
                    speaking: n,
                    connected: r,
                    unread: i
                } = this.props, l = b;
                return (0, m.isMac)() && !r ? l : (0, m.isLinux)() || !r ? (i && (l = "UNREAD"), l) : l = e ? "DEAFENED" : t ? "MUTED" : n ? "SPEAKING" : "CONNECTED"
            })
    }
}
let O = () => null;
m.isPlatformEmbedded && (A.Ay.on("SYSTEM_TRAY_TOGGLE_MUTE", () => l.A.toggleSelfMute({
    location: "System Tray"
})), A.Ay.on("SYSTEM_TRAY_TOGGLE_DEAFEN", () => l.A.toggleSelfDeaf()), A.Ay.on("SYSTEM_TRAY_OPEN_VOICE_SETTINGS", () => {
    (0, c.openUserSettings)(o.X.VOICE_AND_VIDEO_PANEL, {
        section: _.nc_.VOICE
    })
}), O = i.Ay.connectStores([h.A, d.A, g.A, u.default, f.A, p.A, a.A], () => {
    let e = u.default.getTotalMentionCount(),
        t = u.default.hasAnyUnread(),
        n = (0, s.dH)([f.A, a.A]),
        r = !p.A.getDisableUnreadBadge() && !!(t || e + n > 0);
    return {
        connected: h.A.isConnected(),
        speaking: g.A.isCurrentUserSpeaking(),
        muted: d.A.isSelfMute() || d.A.isSelfMutedTemporarily(),
        deafened: d.A.isSelfDeaf(),
        unread: r
    }
})(E));
let y = O