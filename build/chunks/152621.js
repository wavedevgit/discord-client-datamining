/** chunk id: 152621 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(417597),
    a = n(760751),
    l = n(486020),
    s = n(885151),
    r = n(985018);

function o(e, t) {
    let {
        data: n,
        isLoading: o
    } = (0, s.k)(e), d = (0, i.bG)([a.A], () => a.A.getDetectableGame(e));
    return {
        coverImageUrl: null != e ? n?.supplementalData?.coverImageUrl ?? l.Ay.getGameAssetURL({
            id: e,
            hash: d?.cover_image_hash,
            keepAspectRatio: !0
        }) : void 0,
        gameName: n?.supplementalData?.name ?? n?.name ?? d?.name ?? t ?? r.intl.string(r.t.GIWFlF),
        isLoading: o
    }
}