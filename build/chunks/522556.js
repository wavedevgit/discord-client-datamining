/** chunk id: 522556 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(397927),
    o = n(686956),
    c = n(935649),
    d = n(847599),
    u = n(36149),
    h = n(323073),
    A = n(506164),
    m = n(204925),
    g = n(985018),
    p = n(570328);

function _(e) {
    let {
        guild: t,
        channelId: n
    } = e, {
        modalType: l,
        ...a
    } = (0, h.k$)(t), r = s.useCallback(() => {
        null != t && o.A.nsfwReturnToSafety(t.id)
    }, [t]), p = s.useCallback(() => {
        null != t && o.A.nsfwAgree(t.id)
    }, [t]), _ = s.useCallback(() => {
        c.A.showAgeVerificationGetStartedModal({
            entryPoint: d.q1.NSFW_GUILD
        })
    }, []);
    (0, u.I7)(m.w_.NSFW_SERVER);
    let f = {
        ...a,
        guildId: t?.id,
        channelId: n,
        disagreement: g.intl.string(g.t["/g10LC"])
    };
    switch (l) {
        case d.A5.NSFW_CHANNEL_AGE_VERIFY:
        case d.A5.GUILD_LARGE_SERVER:
            return (0, i.jsx)(A.A, {
                onAgree: _,
                onDisagree: r,
                modalType: l,
                ...f
            });
        default:
            return (0, i.jsx)(A.A, {
                onAgree: p,
                onDisagree: r,
                modalType: l,
                ...f
            })
    }
}
let f = function(e) {
    let {
        guild: t,
        channelId: n,
        className: l
    } = e, o = s.useRef(null);
    return s.useEffect(() => {
        let {
            current: e
        } = o;
        e?.scrollToBottom()
    }, []), (0, i.jsx)(r.T7Y, {
        ref: o,
        className: p.X,
        children: (0, i.jsx)("div", {
            className: a()(l, p.i),
            children: (0, i.jsx)(_, {
                guild: t,
                channelId: n
            })
        })
    })
}