/** Chunk was on 77870 **/
/** chunk id: 530484, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(554146),
    s = n(397927),
    a = n(442433),
    o = n(826673),
    c = n(508654),
    u = n(222823),
    d = n(543465),
    p = n(652793),
    h = n(790782),
    f = n(985018),
    g = n(811094);

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function b(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}

function A(e) {
    let {
        guild: t,
        selected: A
    } = e, {
        hasUnread: y,
        mentionCount: _
    } = (0, l.cf)([u.Ay], () => ({
        hasUnread: u.Ay.hasUnread(t.id, h.P.GUILD_EVENT),
        mentionCount: u.Ay.getMentionCount(t.id, h.P.GUILD_EVENT)
    }), [t.id]), O = (0, l.bG)([d.Ay], () => d.Ay.isMuteScheduledEventsEnabled(t.id));
    async function j() {
        await (0, s.mMO)(async () => {
            let {
                default: e
            } = await Promise.all([n.e("51354"), n.e("7453"), n.e("90041")]).then(n.bind(n, 926956));
            return n => (0, r.jsx)(e, b(m({}, n), {
                guildId: t.id
            }))
        }), (0, o.Dr)(i.M.GUILD_HEADER_EVENT_UPSELL)
    }
    let v = (0, c.Ay)(t.id),
        x = v.length > 0 ? f.intl.formatToPlainString(f.t.IBdqSu, {
            number: v.length
        }) : f.intl.string(f.t.tlopTM);
    return (0, r.jsx)(p.G, {
        id: "upcoming-events-".concat(t.id),
        renderIcon: e => (0, r.jsx)(s.CTc, {
            size: "md",
            color: "currentColor",
            className: e
        }),
        text: x,
        selected: A,
        onClick: j,
        onContextMenu: e => {
            (0, a.L3)(e, async () => {
                let {
                    default: e
                } = await n.e("71742").then(n.bind(n, 502029));
                return n => (0, r.jsx)(e, b(m({}, n), {
                    guildId: t.id
                }))
            })
        },
        showUnread: y && !O,
        trailing: !O && _ > 0 ? (0, r.jsx)(s.hVq, {
            className: g.Do,
            disableColor: !0,
            count: _
        }) : null
    })
}