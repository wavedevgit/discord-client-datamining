/** Chunk was on 59735 **/
/** chunk id: 36942, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => b
});
var n = r(627968);
r(64700);
var i = r(311907),
    o = r(397927),
    c = r(71393),
    l = r(287809),
    a = r(234053),
    u = r(395504),
    s = r(652215),
    p = r(985018);

function b(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = (0, u.jN)(e),
        b = (0, i.bG)([c.A], () => c.A.getGuild(e)),
        O = (0, i.bG)([l.default], () => l.default.getCurrentUser());
    return null != O && null != b && (b.features.has(s.GuildFeatures.COMMUNITY) || O.isStaff()) ? (0, n.jsx)(o.sLh, {
        id: "opt-in",
        label: p.intl.string(p.t.FB2ZZV),
        leadingAccessory: t ? {
            type: "icon",
            icon: o.bMW
        } : void 0,
        checked: !r,
        action: () => {
            (0, a.Lu)(e)
        }
    }) : null
}