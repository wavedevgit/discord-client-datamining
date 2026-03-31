/** chunk id: 71071 params = (module,exports,require) **/
"use strict";
var i = n(627968),
    s = n(136722),
    a = n(397927),
    l = n(73153),
    r = n(488926);
__OVERLAY__ && l.h.subscribe("OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN", function(e) {
    let {
        clientId: t,
        authorizeProps: {
            authorizations: o,
            permissions: d,
            ...c
        }
    } = e, u = `OAuth2Authorize_${t}_${c.guildId}_${c.channelId}`;

    function h(e) {
        let {
            location: n
        } = e;
        l.h.dispatch({
            type: "OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE",
            clientId: t,
            location: n
        })
    }
    let p = r.x3;
    try {
        p = s.iu(d ?? 0)
    } catch (e) {}(0, a.mMO)(async () => {
        let {
            OAuth2AuthorizeModal: e
        } = await Promise.resolve().then(n.bind(n, 200330));
        return t => (0, i.jsx)(e, {
            ...t,
            ...c,
            authorizations: new Map(o),
            permissions: p,
            callback: h
        })
    }, {
        modalKey: u,
        onCloseRequest: () => {
            (0, a.OoC)(u), h({})
        }
    })
})