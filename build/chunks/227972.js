/** chunk id: 227972 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(397927),
    l = n(73153),
    r = n(272355),
    a = n(480900),
    s = n(293260);
class o extends r.A {
    _initialize() {
        l.h.subscribe("GUILD_ROLE_CONNECTIONS_MODAL_SHOW", this.handleShow)
    }
    _terminate() {
        l.h.unsubscribe("GUILD_ROLE_CONNECTIONS_MODAL_SHOW", this.handleShow)
    }
    handleShow(e) {
        let {
            role: t,
            guildId: n
        } = e;
        (0, i.kBI)("GUILD_ROLE_CONNECTIONS_MODAL_KEY") || (null != t && t.tags?.guild_connections === null ? (0, a.b)(t, n) : (0, s.c0)(n))
    }
}
let d = new o