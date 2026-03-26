/** chunk id: 602461 params = (module,exports,require) **/
i.d(t, {
    A: () => d
}), i(321073);
var l = i(64700),
    n = i(805739),
    a = i(500345),
    s = i(320137),
    r = i(985018);

function d(e) {
    let {
        includeFlairAsBenefit: t,
        listing: i,
        guildId: d
    } = e, c = 0, o = 0;
    for (let e of i.role_benefits.benefits)(0, a.B1)(e) ? c += 1 : (0, a.b1)(e) && (o += 1);
    let u = i.role_id,
        m = (0, s.A)(d).filter(e => e.roles.includes(u)).length;
    return l.useMemo(() => {
        let e = [];
        return !0 === t && e.push(r.intl.string(r.t.EhdV2x)), 0 !== c && e.push(r.intl.formatToPlainString(r.t["p/l+BI"], {
            channelCount: c
        })), 0 !== o && e.push(r.intl.formatToPlainString(r.t.eXP5vt, {
            benefitCount: o
        })), 0 !== m && e.push(r.intl.formatToPlainString(r.t.YjmQwW, {
            emojiCount: m
        })), new n.A(e)
    }, [c, o, m, t])
}