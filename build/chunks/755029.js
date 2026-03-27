/** chunk id: 755029 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => _
});
var n = i(627968);
i(64700);
var s = i(311907),
    a = i(528772),
    l = i(944775),
    r = i(927421),
    o = i(734057),
    d = i(309010),
    c = i(427603),
    u = i(980504),
    h = i(546299);

function _() {
    let [e, t] = (0, s.yK)([a.A], () => [a.A.enabled, a.A.keepOpen]), i = (0, s.bG)([d.A], () => d.A.getVoiceChannelId()), _ = (0, s.bG)([o.A], () => o.A.getChannel(i), [i]), p = _?.getGuildId();
    return e && null != _ ? (0, n.jsx)("div", {
        className: h.H,
        children: (0, n.jsx)(r.A, {
            width: u.ed.width,
            height: u.ed.height,
            guildId: p,
            channel: _,
            keepOpen: t,
            onClose: function() {
                let e = (0, c.A)();
                null != e && (0, l.Lk)(e)
            },
            analyticsSource: "overlay"
        })
    }) : null
}