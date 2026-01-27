/** Chunk was on web.js **/
/** chunk id: 363670, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => m,
    hh: () => p,
    u7: () => _
}), n(896048), n(747238), n(812715);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    o = n(287809),
    s = n(939341),
    l = n(574520),
    c = n(263577),
    u = n(506326),
    d = n(868065),
    f = n(332225);
let p = [u.R_];

function _(e) {
    var t, n, r, i;
    let s = (0, a.bG)([l.A], () => l.A.getMatchingActivity(e)),
        c = (0, a.bG)([o.default], () => o.default.getUser(e.author_id));
    if (null == s || null == c) return {};
    let u = e.extra.entries[0],
        d = null != (t = null != (n = s.state) ? n : null == (i = u.media.artists[0]) ? void 0 : i.name) ? t : u.media.title,
        f = null != (r = s.details) ? r : u.media.title;
    return {
        activity: s,
        artist: d,
        currentEntry: u,
        title: f,
        user: c
    }
}

function h(e) {
    let {
        entry: t,
        channel: n,
        selected: i,
        hovered: a
    } = e, {
        activity: o,
        artist: l
    } = _(t), {
        largeImage: h
    } = (0, s.nO)({
        entry: t
    });
    return null == o ? (0, r.jsx)(d.eG, {}) : (0, r.jsxs)(d.Zp, {
        selected: i,
        children: [(0, r.jsxs)(d.UA, {
            children: [(0, r.jsx)(d.Hp, {
                entry: t,
                channelId: n.id,
                guildId: n.guild_id
            }), (0, r.jsx)(d.ZB, {
                children: l.replace(/; /g, ", ")
            }), (0, r.jsx)(u.mG, {
                location: u.N5.CARD,
                children: p.map((e, n) => (0, r.jsx)(e, {
                    entry: t,
                    hovered: a
                }, n))
            })]
        }), (0, r.jsx)(c.V, {
            src: null == h ? void 0 : h.src,
            size: 48,
            className: f.xn
        })]
    })
}
let m = i.memo(h)