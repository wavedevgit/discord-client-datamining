/** chunk id: 513520 params = (module,exports,require) **/
n.d(t, {
    I: () => o
});
var a = n(562465),
    i = n(73153),
    l = n(153488),
    s = n(209390),
    r = n(652215);

function o() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    return s.A.shouldFetch() && l.A.hasConsented(r.YAq.PERSONALIZATION) ? (i.h.dispatch({
        type: "LOAD_CHANNEL_AFFINITIES_V2"
    }), a.Bo.get({
        url: r.Rsh.CHANNEL_AFFINITIES_V2,
        retries: 3 * !!e,
        oldFormErrors: !0,
        rejectWithError: !1
    }).then(e => {
        let {
            body: t
        } = e;
        i.h.dispatch({
            type: "LOAD_CHANNEL_AFFINITIES_V2_SUCCESS",
            affineChannels: t.channel_affinities.map(e => ({
                channelId: e.channel_id,
                score: e.score ?? 0
            }))
        })
    }, () => {
        i.h.dispatch({
            type: "LOAD_CHANNEL_AFFINITIES_V2_FAILURE"
        })
    })) : Promise.resolve()
}