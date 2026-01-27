/** Chunk was on web.js **/
/** chunk id: 147025, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => k
}), n(321073);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(735438),
    l = n(607399),
    c = n(311907),
    u = n(155718),
    d = n(775602),
    f = n(33659),
    p = n(861382),
    _ = n(86379),
    h = n(670655),
    m = n(151271),
    g = n(412260),
    E = n(852218),
    y = n(931664),
    b = n(522602),
    O = n(287809),
    v = n(927578),
    A = n(184761),
    I = n(355622),
    S = n(838324),
    T = n(184264),
    C = n(743477),
    N = n(336618),
    w = n(437839),
    R = n(559775),
    P = n(584905),
    D = n(698279),
    L = n(111314);

function x(e) {
    let {
        disabled: t,
        channel: n
    } = e;
    return (0, c.bG)([g.A], () => Object.keys(g.A.promotionsByType[E.pt.GIFT_PROMOTION]).length > 0) ? (0, r.jsx)(N.A, {
        disabled: t,
        channel: n
    }) : (0, r.jsx)(C.A, {
        disabled: t,
        channel: n
    })
}

function M(e) {
    var t, n, i, a, g, E, y, b;
    let {
        type: C,
        disabled: N,
        channel: M,
        handleSubmit: k,
        isEmpty: U,
        showAllButtons: G
    } = e, F = (0, c.bG)([d.A], () => d.A.isSubmitButtonEnabled), V = j(M.id, C, U), {
        activeCommand: B,
        activeCommandOption: H
    } = (0, c.cf)([p.A], () => ({
        activeCommand: p.A.getActiveCommand(M.id),
        activeCommandOption: p.A.getActiveOption(M.id)
    })), {
        paymentsBlocked: Y
    } = _.A.useExperiment({
        location: "dc120b_3"
    }, {
        autoTrackExposure: !1
    }), {
        iconOrder: W,
        expressionsCombinedIntoEmojiButton: K,
        reducedGap: z
    } = A.C.useConfig({
        location: "ChannelTextAreaButtons"
    }), q = (0, m.RQ)(e => e.lastActiveView), Z = (null == (t = C.gifs) ? void 0 : t.button) != null && (null == (n = C.stickers) ? void 0 : n.button) != null && null != q ? q : D.kx.EMOJI, Q = [], X = !M.isDM() || void 0 === M.recipients || M.recipients.length > 1, J = (0, c.bG)([O.default], () => X ? null : O.default.getUser(M.recipients[0])), $ = (0, f.H)({
        channel: M,
        chatInputType: C
    }), ee = (null == (i = C.submit) ? void 0 : i.button) != null && ((null == (a = C.submit) ? void 0 : a.ignorePreference) || F);
    if (!l.Fr && ((null == (E = C.gifts) ? void 0 : E.button) != null && null == B && !Y && (null == J || v.Ay.isPremiumEligible(J)) && Q.push({
            key: "gift",
            node: (0, r.jsx)(x, {
                disabled: N,
                channel: M
            }, "gift")
        }), (null == (y = C.gifs) ? void 0 : y.button) != null && null == B && G && Q.push({
            key: "gif",
            node: (0, r.jsx)(T.A, {
                disabled: N,
                type: C,
                channel: M
            }, "gif")
        }), (null == (b = C.stickers) ? void 0 : b.button) != null && null == B && G && Q.push({
            key: "sticker",
            node: (0, r.jsx)(R.A, {
                disabled: N,
                type: C,
                channel: M
            }, "sticker")
        }), Q.push({
            key: "upload",
            node: (0, r.jsx)(P.n, {
                disabled: N,
                inputType: C,
                channel: M
            }, "upload")
        }), C !== I.oU.NORMAL || ee || Q.push({
            key: "spacer",
            node: (0, r.jsx)("div", {
                className: L.jH
            }, "spacer")
        })), (null == (g = C.emojis) ? void 0 : g.button) != null && (null == B || null != H && H.type !== u.n4.ATTACHMENT)) {
        let e = K ? Z : D.kx.EMOJI;
        Q.push({
            key: "emoji",
            node: (0, r.jsx)(S.A, {
                disabled: N,
                type: C,
                pickerView: e,
                channelId: M.id
            }, "emoji")
        })
    }
    $ && Q.push({
        key: "appLauncher",
        node: (0, r.jsx)(h.A, {
            channelId: M.id,
            type: C
        }, "appLauncher")
    }), ee && Q.push({
        key: "submit",
        node: (0, r.jsx)(w.A, {
            onClick: k,
            disabled: N || V
        }, "submit")
    });
    let et = (0, s.chain)(Q).filter(e => null != W[e.key]).sortBy(e => W[e.key]).map(e => e.node).value();
    return 0 === et.length ? null : (0, r.jsx)("div", {
        className: o()(L.Uo, {
            [L.d5]: z
        }),
        children: et
    })
}

function j(e, t, n) {
    return (0, c.bG)([y.A, b.A], () => {
        let r = y.A.getStickerPreview(e, t.drafts.type),
            i = null != r && r.length > 0;
        return 0 === b.A.getUploads(e, t.drafts.type).length && n && !i
    })
}
let k = i.memo(M)