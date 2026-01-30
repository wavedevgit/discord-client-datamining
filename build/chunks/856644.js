/** chunk id: 856644, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    EF: () => O,
    K5: () => j,
    L9: () => v,
    SB: () => x,
    Vh: () => y,
    cG: () => _,
    gz: () => b,
    uc: () => h
}), n(321073), n(896048), n(733351);
var r = n(64700),
    i = n(91871),
    l = n.n(i),
    s = n(311907),
    a = n(696451),
    o = n(287809),
    c = n(954571),
    d = n(403362),
    u = n(695184),
    g = n(427262),
    m = n(545868),
    p = n(927573),
    f = n(652215);
let h = 50,
    b = 1e3;

function x(e, t) {
    let n = (0, s.yK)([a.Ay], () => {
            let n = a.Ay.getMembers(e);
            return null == t ? n : n.filter(t)
        }, [e, t]),
        i = (0, s.cf)([o.default], () => n.reduce((e, t) => {
            let n = o.default.getUser(t.userId);
            return null == n || (e[t.userId] = n), e
        }, {}), [n]);
    return r.useMemo(() => {
        let t = [];
        for (let l of n) {
            var r;
            let n = i[l.userId];
            null != n && t.push({
                name: null != (r = l.nick) ? r : g.Ay.getName(n),
                userTag: g.Ay.getUserTag(n),
                id: l.userId,
                avatarSource: n.getAvatarSource(e),
                avatarURL: n.getAvatarURL(e, 80),
                bot: n.bot,
                verifiedBot: n.isVerifiedBot(),
                roles: l.roles,
                key: l.userId,
                user: n
            })
        }
        return t
    }, [n, i, e])
}

function j(e, t, n) {
    let i = r.useRef(n);
    return r.useEffect(() => {
        i.current = n
    }), r.useEffect(() => {
        (0, m.a)(e, t).catch(i.current)
    }, [e, t]), x(e, r.useCallback(e => e.roles.includes(t), [t]))
}

function _(e, t) {
    let n = r.useRef(!1);
    r.useEffect(() => {
        u.A.requestMembers(e, t, 200), "" === t || n.current || (c.default.track(f.HAw.SEARCH_STARTED, {
            search_type: "Role Members"
        }), n.current = !0)
    }, [e, t])
}

function O(e, t) {
    let n = e.trim().toLowerCase();
    return t.id === n || l()(n, t.name.toLowerCase()) || l()(n, t.userTag.toLowerCase())
}

function v(e) {
    switch (e) {
        case p.T$.MEMBERS:
            return "Members";
        case p.T$.PERMISSIONS:
            return "Permissions";
        case p.T$.DISPLAY:
            return "Role Settings";
        case p.T$.VERIFICATIONS:
            return "Connections";
        default:
            (0, d.xb)(e)
    }
}

function y(e, t) {
    return "" === t || e.name.toLowerCase().includes(t.toLowerCase())
}