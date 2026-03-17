/** chunk id: 327866 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(64700),
    a = n(311907),
    r = n(827343),
    l = n(800828),
    s = n(912309),
    o = n(780964),
    d = n(840065),
    c = n(458294),
    u = n(430452),
    A = n(803224),
    h = n(383501),
    _ = n(994500),
    m = n(485296),
    g = n(723702),
    p = n(837921),
    E = n(652215);
let I = (0, g.isMac)() ? null : "DEFAULT";
class f extends i.PureComponent {
    getIcon = () => {
        let {
            deafened: e,
            muted: t,
            speaking: n,
            connected: i,
            unread: a
        } = this.props, r = I;
        return (0, g.isMac)() && !i ? r : (0, g.isLinux)() || !i ? (a && (r = "UNREAD"), r) : r = e ? "DEAFENED" : t ? "MUTED" : n ? "SPEAKING" : "CONNECTED"
    };
    componentDidMount() {
        p.Ay.setSystemTrayIcon(this.getIcon())
    }
    componentDidUpdate() {
        p.Ay.setSystemTrayIcon(this.getIcon())
    }
    componentWillUnmount() {
        p.Ay.setSystemTrayIcon(I)
    }
    render() {
        return null
    }
}
let C = () => null;
g.isPlatformEmbedded && (p.Ay.on("SYSTEM_TRAY_TOGGLE_MUTE", () => r.A.toggleSelfMute({
    location: "System Tray"
})), p.Ay.on("SYSTEM_TRAY_TOGGLE_DEAFEN", () => r.A.toggleSelfDeaf()), p.Ay.on("SYSTEM_TRAY_OPEN_VOICE_SETTINGS", () => {
    (0, d.openUserSettings)(o.X.VOICE_AND_VIDEO_PANEL, {
        section: E.nc_.VOICE
    })
}), C = a.Ay.connectStores([h.A, u.Ay, m.A, c.default, _.A, A.A, l.A], () => {
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
})(f));
let T = C