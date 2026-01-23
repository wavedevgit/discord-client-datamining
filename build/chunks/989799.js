/** Chunk was on web.js **/
/** chunk id: 989799, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(793574),
    c = n(688810),
    u = n(151271),
    d = n(756349),
    f = n(237248),
    p = n(338821),
    _ = n(732611);

function h(e) {
    let {
        guildId: t,
        channel: n,
        containerWidth: a,
        onClose: h,
        onSelect: m,
        analyticsSource: g,
        suppressPlaySound: E,
        shouldValidateSelectedSound: y,
        shouldShowUpsell: b = !0,
        gridNotice: O,
        inExpressionPicker: v,
        soundButtonOverlay: A,
        listPadding: I,
        renderHeader: S,
        defaultSoundsOnly: T
    } = e, {
        fetching: C,
        maybeFetchData: N
    } = (0, f.A)(), w = (0, d.A)({
        location: "SoundboardSoundPicker"
    }), {
        analyticsLocations: R
    } = (0, c.Ay)(l.A.SOUNDBOARD_POPOUT);
    return i.useEffect(() => {
        N()
    }, [N]), i.useEffect(() => {
        v || (0, u.Ri)("")
    }, [v]), (0, r.jsx)(c.f5, {
        value: R,
        children: (0, r.jsx)(o.lGe, {
            className: s()(_.Nz, {
                [_.Bg]: C,
                [_.yV]: v
            }),
            children: C ? (0, r.jsx)(o.y$y, {}) : (0, r.jsx)(p.A, {
                guildId: t,
                channel: n,
                onClose: h,
                onSelect: m,
                shouldValidateSelectedSound: y,
                containerWidth: a,
                suppressPlaySound: E,
                shouldShowUpsell: b,
                gridNotice: O,
                soundButtonOverlay: A,
                listPadding: I,
                renderHeader: S,
                defaultSoundsOnly: T,
                inExpressionPicker: v,
                analyticsSource: g,
                enablePickerUpsellPremiumBrandRefresh: w
            })
        })
    })
}