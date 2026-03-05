/** chunk id: 351001 params = (module,exports,require) **/
n.d(t, {
    EZ: () => f,
    HU: () => A,
    KX: () => g,
    Kd: () => p,
    L7: () => h,
    fJ: () => E
}), n(938796);
var l = n(665260),
    i = n(311907),
    r = n(696451),
    a = n(71393),
    o = n(576705),
    u = n(287809),
    s = n(661191),
    d = n(340837),
    c = n(652215);
let A = (e, t) => {
    var n;
    let o = (0, i.bG)([r.Ay], () => (0, l.Lt)(r.Ay.getMember(e, t)?.flags ?? 0, d.D.DID_REJOIN)),
        c = (0, i.bG)([a.A], () => {
            let t = a.A.getGuild(e);
            return null != t && function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
                    n = s.default.extractTimestamp(e.id);
                return Date.now() - n < 864e5 * t
            }(t)
        }),
        A = (0, i.bG)([u.default], () => u.default.getUser(t)?.bot);
    return n = {
        maxDaysOld: 7
    }, (0, i.bG)([], () => (function(e, t, n) {
        let {
            maxDaysOld: l,
            minDaysOld: i = 0
        } = t, o = a.A.getGuild(e), u = o?.joinedAt;
        if (null != n) {
            let t = r.Ay.getMember(e, n);
            u = t?.joinedAt == null ? null : new Date(t.joinedAt)
        }
        if (null == u) return !1;
        let s = Date.now() - u.getTime();
        return (null == l || s <= 864e5 * l) && s >= 864e5 * i
    })(e, n, t), [n, e, t]) && !c && !A && !o
};

function h(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != t && g(e, t, [n]) && !e.isProvisional
}

function g(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != t && n.canManageUser(c.xBc.KICK_MEMBERS, e, t) && !e.isNonUserBot()
}

function f(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != t && E(e, t, [n]) && !e.isProvisional
}

function E(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != t && n.canManageUser(c.xBc.BAN_MEMBERS, e, t) && !e.isNonUserBot() && !e.bot
}

function p(e, t) {
    let [n] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.A];
    return null != e && null != t && n.canManageUser(c.xBc.MANAGE_MESSAGES, e, t) && !e.isNonUserBot()
}