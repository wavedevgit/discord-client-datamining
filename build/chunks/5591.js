/** chunk id: 5591, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(397927),
    r = n(73153),
    l = n(272355),
    a = n(480900),
    s = n(293260);
class o extends l.A {
    _initialize() {
        r.h.subscribe("GUILD_ROLE_CONNECTIONS_MODAL_SHOW", this.handleShow)
    }
    _terminate() {
        r.h.unsubscribe("GUILD_ROLE_CONNECTIONS_MODAL_SHOW", this.handleShow)
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