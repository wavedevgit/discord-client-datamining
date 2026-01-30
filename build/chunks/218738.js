/** chunk id: 218738, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => p
});
var r = n(627968),
    i = n(64700),
    o = n(110259),
    a = n(397927),
    l = n(930932),
    _ = n(382935),
    c = n(835806),
    s = n(954571),
    u = n(652215),
    d = n(670455),
    b = n(985018),
    m = n(716829);

function p(e) {
    let {
        isStreamer: t,
        stream: p,
        streamApplication: f,
        onClose: g,
        transitionState: O,
        analyticsData: j
    } = e;
    i.useEffect(() => {
        s.default.track(u.HAw.OPEN_MODAL, {
            type: "Stream Problem Report",
            other_user_id: p.ownerId,
            application_id: null != f ? f.id : null,
            application_name: null != f ? f.name : null,
            game_id: null != f ? f.id : null,
            source: "Stream End"
        })
    }, [p.ownerId, f]);
    let y = b.intl.string(b.t["5smP3R"]),
        E = b.intl.string(b.t["0uxA2V"]),
        v = b.intl.string(b.t.CqjnLN),
        S = {
            impressionName: o.ImpressionNames.STREAM_FEEDBACK_MODAL,
            impressionProperties: {
                media_session_id: j.media_session_id,
                rtc_connection_id: j.rtc_connection_id,
                parent_media_session_id: j.parent_media_session_id
            }
        },
        w = {
            value: t ? d.Eq.STREAMING : d.Eq.STREAM_WATCHING,
            label: b.intl.string(t ? m.default["0ZBLiZ"] : m.default.TVTIT1),
            problemsHeader: b.intl.string(b.t["6Y1t5P"]),
            problemOptions: (0, l.wq)({
                isStreamer: t
            }),
            freeformConfig: {
                value: d.j6.FREEFORM,
                label: b.intl.string(b.t.emlT91)
            }
        };
    return (0, r.jsx)(_.A, {
        onSubmit: function(e) {
            var t, i;
            let {
                dontShowAgain: o,
                rating: _,
                feedback: s,
                category: u,
                problem: m
            } = e;
            o && (0, l.n3)({
                feedbackType: d.MW.STREAM,
                location: "StreamFeedback"
            }), null == _ || ((0, c.A)({
                problem: null != (t = null == m ? void 0 : m.value) ? t : null,
                category: u,
                variant: null != (i = null == m ? void 0 : m.variant) ? i : null,
                stream: p,
                feedback: s,
                streamApplication: f,
                analyticsData: j,
                location: "Stream End",
                rating: _
            }), null != m && (0, a.mMO)(async () => {
                let {
                    default: e
                } = await n.e("37836").then(n.bind(n, 845671));
                return t => (0, r.jsx)(e, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), r.forEach(function(t) {
                            var r;
                            r = n[t], t in e ? Object.defineProperty(e, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[t] = r
                        })
                    }
                    return e
                }({
                    body: b.intl.string(b.t.mMTVnv)
                }, t))
            }))
        },
        onClose: g,
        ratingHeader: y,
        ratingEmojiKind: "face",
        ratingBody: t ? E : v,
        categoriesHeader: b.intl.string(m.default.tq8598),
        optionsTree: [w],
        impression: S,
        transitionState: O
    })
}