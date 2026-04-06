/** chunk id: 327866 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(64700),
    a = n(311907),
    r = n(827343),
    l = n(800828),
    s = n(912309),
    o = n(780964),
    d = n(858897),
    c = n(458294),
    u = n(430452),
    A = n(803224),
    h = n(383501),
    _ = n(994500),
    m = n(485296),
    p = n(723702),
    g = n(837921);
let E = (0, p.isMac)() ? null : "DEFAULT";
class I extends i.PureComponent {
    getIcon = () => {
        let {
            deafened: e,
            muted: t,
            speaking: n,
            connected: i,
            unread: a
        } = this.props, r = E;
        return (0, p.isMac)() && !i ? r : (0, p.isLinux)() || !i ? (a && (r = "UNREAD"), r) : r = e ? "DEAFENED" : t ? "MUTED" : n ? "SPEAKING" : "CONNECTED"
    };
    componentDidMount() {
        g.Ay.setSystemTrayIcon(this.getIcon())
    }
    componentDidUpdate() {
        g.Ay.setSystemTrayIcon(this.getIcon())
    }
    componentWillUnmount() {
        g.Ay.setSystemTrayIcon(E)
    }
    render() {
        return null
    }
}
let f = () => null;
p.isPlatformEmbedded && (g.Ay.on("SYSTEM_TRAY_TOGGLE_MUTE", () => r.A.toggleSelfMute({
    location: "System Tray"
})), g.Ay.on("SYSTEM_TRAY_TOGGLE_DEAFEN", () => r.A.toggleSelfDeaf()), g.Ay.on("SYSTEM_TRAY_OPEN_VOICE_SETTINGS", () => {
    (0, d.openUserSettings)(o.X.VOICE_CATEGORY)
}), f = a.Ay.connectStores([h.A, u.Ay, m.A, c.default, _.A, A.A, l.A], () => {
    let e = c.default.getTotalMentionCount(),
        t = c.default.hasAnyUnread(),
        n = (0, s.dH)([_.A, l.A]),
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