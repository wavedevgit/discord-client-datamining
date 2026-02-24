/** chunk id: 327866, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(64700),
    r = n(311907),
    l = n(827343),
    a = n(800828),
    s = n(912309),
    o = n(780964),
    d = n(840065),
    c = n(458294),
    u = n(430452),
    A = n(803224),
    h = n(383501),
    _ = n(994500),
    m = n(485296),
    p = n(723702),
    g = n(837921),
    E = n(652215);
let I = (0, p.isMac)() ? null : "DEFAULT";
class f extends i.PureComponent {
    getIcon = () => {
        let {
            deafened: e,
            muted: t,
            speaking: n,
            connected: i,
            unread: r
        } = this.props, l = I;
        return (0, p.isMac)() && !i ? l : (0, p.isLinux)() || !i ? (r && (l = "UNREAD"), l) : l = e ? "DEAFENED" : t ? "MUTED" : n ? "SPEAKING" : "CONNECTED"
    };
    componentDidMount() {
        g.Ay.setSystemTrayIcon(this.getIcon())
    }
    componentDidUpdate() {
        g.Ay.setSystemTrayIcon(this.getIcon())
    }
    componentWillUnmount() {
        g.Ay.setSystemTrayIcon(I)
    }
    render() {
        return null
    }
}
let C = () => null;
p.isPlatformEmbedded && (g.Ay.on("SYSTEM_TRAY_TOGGLE_MUTE", () => l.A.toggleSelfMute({
    location: "System Tray"
})), g.Ay.on("SYSTEM_TRAY_TOGGLE_DEAFEN", () => l.A.toggleSelfDeaf()), g.Ay.on("SYSTEM_TRAY_OPEN_VOICE_SETTINGS", () => {
    (0, d.openUserSettings)(o.X.VOICE_AND_VIDEO_PANEL, {
        section: E.nc_.VOICE
    })
}), C = r.Ay.connectStores([h.A, u.Ay, m.A, c.default, _.A, A.A, a.A], () => {
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
})(f));
let T = C