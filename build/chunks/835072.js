/** Chunk was on web.js **/
/** chunk id: 835072, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var r = n(627968);
n(64700);
var i = n(934551),
    a = n(765379),
    o = n(126904),
    s = n(82149),
    l = n(412242),
    c = n(566903),
    u = n(864436),
    d = n(200041),
    f = n(652215);
let p = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, s.Cy)(e) ? i.StageIcon : (0, a.A)(e) ? t ? i.GameControllerIcon : i.AppsIcon : e.type === f.$pd.PLAYING ? i.GameControllerIcon : e.type === f.$pd.LISTENING ? i.MusicIcon : e.type === f.$pd.WATCHING || e.type === f.$pd.STREAMING ? i.TvIcon : e.type === f.$pd.COMPETING ? i.GameControllerIcon : null
};

function _(e) {
    let {
        activity: t,
        textVariant: n,
        textClassName: i,
        iconClassName: a,
        hideIcon: s = !1,
        hideText: f = !1,
        hideTooltip: _ = !1,
        canTruncate: h = !0
    } = e, {
        descriptiveTextEnabled: m
    } = (0, l.n)({
        location: "PresenceActivityStatusWithCombinedTooltip"
    }), {
        enableTopNavButton: g
    } = (0, o.tR)({
        location: "PresenceActivityStatusWithCombinedTooltip"
    }), {
        text: E,
        tooltip: y
    } = (0, c.A)(t, m || g), b = p(t), O = null != b && !s;
    return (0, r.jsx)(d.A, {
        icon: O ? (0, r.jsx)(u.A, {
            icon: b,
            className: a
        }) : void 0,
        text: null != E ? E : "",
        textVariant: n,
        textClassName: i,
        hideTooltip: _,
        canTruncate: h,
        "aria-label": null != y ? y : "",
        hideText: f
    })
}