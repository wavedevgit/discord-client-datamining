/** Chunk was on web.js **/
/** chunk id: 571694, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Y: () => s
}), n(896048);
var r = n(287809),
    i = n(486020),
    a = n(403362),
    o = n(652215);

function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
        n = arguments.length > 2 ? arguments[2] : void 0;
    switch (e.type) {
        case o.rbe.DM:
            let [s] = e.recipients.map(r.default.getUser).filter(a.Vq);
            if (null == s) return null;
            return s.getAvatarURL(void 0, t, n);
        case o.rbe.GROUP_DM:
            return i.Ay.getChannelIconURL({
                id: e.id,
                icon: e.icon,
                applicationId: e.getApplicationId(),
                size: t
            })
    }
}