/** chunk id: 602461, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
}), n(896048), n(321073);
var r = n(64700),
    i = n(805739),
    a = n(500345),
    o = n(320137),
    s = n(985018);

function l(e) {
    let {
        includeFlairAsBenefit: t,
        listing: n,
        guildId: l
    } = e, c = 0, u = 0;
    for (let e of n.role_benefits.benefits)(0, a.B1)(e) ? c += 1 : (0, a.b1)(e) && (u += 1);
    let d = n.role_id,
        f = (0, o.A)(l).filter(e => e.roles.includes(d)).length;
    return r.useMemo(() => {
        let e = [];
        return !0 === t && e.push(s.intl.string(s.t.EhdV2x)), 0 !== c && e.push(s.intl.formatToPlainString(s.t["p/l+BI"], {
            channelCount: c
        })), 0 !== u && e.push(s.intl.formatToPlainString(s.t.eXP5vt, {
            benefitCount: u
        })), 0 !== f && e.push(s.intl.formatToPlainString(s.t.YjmQwW, {
            emojiCount: f
        })), new i.A(e)
    }, [c, u, f, t])
}