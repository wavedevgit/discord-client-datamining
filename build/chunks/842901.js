/** chunk id: 842901 params = (module,exports,require) **/
n.d(t, {
    E: () => r,
    T: () => s
}), n(801541);
var i = n(889137),
    a = n(966974),
    l = n(617754);

function r(e, t) {
    let n = (0, i.YW)(t).with(a.Z.IMAGE_ONLY_ANSWERS, () => l.EK).otherwise(() => l.fD);
    return {
        styles: {
            loserSelected: n,
            normal: n,
            notVoted: n,
            selected: n,
            voted: l.pq,
            victorSelected: l.iu,
            victorNotSelected: l.iu,
            normalVote: n
        }
    }
}

function s(e, t) {
    return e.getAvatarURL(t, 20, !1)
}