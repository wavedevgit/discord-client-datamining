/** chunk id: 802116 params = (module,exports,require) **/
i.d(t, {
    i: () => m
});
var n = i(735438),
    a = i.n(n),
    l = i(815807),
    o = i(734057),
    r = i(956703),
    s = i(994500),
    c = i(562153),
    d = i(505527),
    u = i(985018);
let h = {
    standard: {
        reactionTooltip1NInteractive: u.t.dgtYDJ,
        reactionTooltip1N: u.t.mXild1,
        reactionTooltip1: u.t.Oro30L,
        reactionTooltip2NInteractive: u.t["0GBwVR"],
        reactionTooltip2N: u.t.UWGs2n,
        reactionTooltip2: u.t["p+0jvt"],
        reactionTooltip3NInteractive: u.t["dK6/7W"],
        reactionTooltip3N: u.t["UnXdX/"],
        reactionTooltip3: u.t.bbPMcR,
        reactionTooltipNInteractive: u.t.Thj7LX,
        reactionTooltipN: u.t.CRrc7c
    },
    burst: {
        reactionTooltip1NInteractive: u.t.G98B0W,
        reactionTooltip1N: u.t["u/03eN"],
        reactionTooltip1: u.t["z4q3+w"],
        reactionTooltip2NInteractive: u.t.wkcffp,
        reactionTooltip2N: u.t.T4EYUu,
        reactionTooltip2: u.t.R2HykW,
        reactionTooltip3NInteractive: u.t.OhtGxz,
        reactionTooltip3N: u.t["M8bwl+"],
        reactionTooltip3: u.t.sNl6XR,
        reactionTooltipNInteractive: u.t.nsITOq,
        reactionTooltipN: u.t.dkieH5
    }
};

function m(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : d.v.NORMAL,
        n = arguments.length > 3 ? arguments[3] : void 0,
        m = r.A.getReactions(e.getChannelId(), e.id, t, 3, i),
        p = o.A.getChannel(e.getChannelId()),
        g = null == p || p.isPrivate() ? null : p.getGuildId(),
        f = e.getReaction(t),
        _ = i === d.v.BURST,
        A = a()(Array.from(m?.values() ?? [])).reject(e => s.A.isBlockedOrIgnored(e.id)).take(3).map(e => c.Ay.getName(g, p?.id, e)).value();
    if (0 === A.length) return "";
    let T = _ ? h.burst : h.standard,
        b = Math.max(0, ((_ ? f?.burst_count : f?.count) ?? 0) - A.length),
        E = (0, l.b3)(t);
    if (1 === A.length)
        if (!(b > 0)) return u.intl.formatToPlainString(T.reactionTooltip1, {
            a: A[0],
            emojiName: E
        });
        else if (null != n) return u.intl.format(T.reactionTooltip1NInteractive, {
        a: A[0],
        n: b,
        emojiName: E,
        onClick: n
    });
    else return u.intl.formatToPlainString(T.reactionTooltip1N, {
        a: A[0],
        n: b,
        emojiName: E
    });
    if (2 === A.length)
        if (!(b > 0)) return u.intl.formatToPlainString(T.reactionTooltip2, {
            a: A[0],
            b: A[1],
            emojiName: E
        });
        else if (null != n) return u.intl.format(T.reactionTooltip2NInteractive, {
        a: A[0],
        b: A[1],
        n: b,
        emojiName: E,
        onClick: n
    });
    else return u.intl.formatToPlainString(T.reactionTooltip2N, {
        a: A[0],
        b: A[1],
        n: b,
        emojiName: E
    });
    return 3 !== A.length ? null != n ? u.intl.format(T.reactionTooltipNInteractive, {
        n: b,
        emojiName: E,
        onClick: n
    }) : u.intl.formatToPlainString(T.reactionTooltipN, {
        n: b,
        emojiName: E
    }) : b > 0 ? null != n ? u.intl.format(T.reactionTooltip3NInteractive, {
        a: A[0],
        b: A[1],
        c: A[2],
        n: b,
        emojiName: E,
        onClick: n
    }) : u.intl.formatToPlainString(T.reactionTooltip3N, {
        a: A[0],
        b: A[1],
        c: A[2],
        n: b,
        emojiName: E
    }) : u.intl.formatToPlainString(T.reactionTooltip3, {
        a: A[0],
        b: A[1],
        c: A[2],
        emojiName: E
    })
}