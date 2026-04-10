/** chunk id: 327866 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(64700),
    r = n(311907),
    l = n(827343),
    a = n(800828),
    s = n(912309),
    o = n(780964),
    d = n(858897),
    c = n(458294),
    u = n(430452),
    A = n(803224),
    h = n(383501),
    _ = n(994500),
    m = n(485296),
    g = n(723702),
    p = n(837921);
let E = (0, g.isMac)() ? null : "DEFAULT";
class I extends i.PureComponent {
    getIcon = () => {
        let {
            deafened: e,
            muted: t,
            speaking: n,
            connected: i,
            unread: r
        } = this.props, l = E;
        return (0, g.isMac)() && !i ? l : (0, g.isLinux)() || !i ? (r && (l = "UNREAD"), l) : l = e ? "DEAFENED" : t ? "MUTED" : n ? "SPEAKING" : "CONNECTED"
    };
    componentDidMount() {
        p.Ay.setSystemTrayIcon(this.getIcon())
    }
    componentDidUpdate() {
        p.Ay.setSystemTrayIcon(this.getIcon())
    }
    componentWillUnmount() {
        p.Ay.setSystemTrayIcon(E)
    }
    render() {
        return null
    }
}
let f = () => null;
g.isPlatformEmbedded && (p.Ay.on("SYSTEM_TRAY_TOGGLE_MUTE", () => l.A.toggleSelfMute({
    location: "System Tray"
})), p.Ay.on("SYSTEM_TRAY_TOGGLE_DEAFEN", () => l.A.toggleSelfDeaf()), p.Ay.on("SYSTEM_TRAY_OPEN_VOICE_SETTINGS", () => {
    (0, d.openUserSettings)(o.X.VOICE_CATEGORY)
}), f = r.Ay.connectStores([h.A, u.Ay, m.A, c.default, _.A, A.A, a.A], () => {
    let e = c.default.getTotalMentionCount(),
        t = c.default.hasAnyUnread(),
        n = (0, s.dH)([_.A, a.A]),
        i = !A.A.getDisableUnreadBadge() && !!(t || e + n > 0);
    return {
        connected: h.A.isConnected(),
        speaking: m.A.isCurrentUserSpeaking(),
        muted: u.Ay.isSelfMute() || u.Ay.isSelfMutedTemporarily(),
        deafened: u.Ay.isSelfDeaf(),
        unread: i
    }
})(I));
let C = f