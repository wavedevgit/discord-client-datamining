/** Chunk was on 39048 **/
/** chunk id: 251838, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    y: () => u
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(357758),
    s = n(311907),
    a = n(36525),
    o = n(997509),
    c = n(555337),
    d = n(927573);

function u() {
    let {
        guild: e,
        originalGuild: t,
        submitting: n,
        errors: u
    } = (0, s.cf)([c.A], () => c.A.getProps()), g = i.useMemo(() => (0, d.$s)(u), [u]), m = i.useCallback(async () => {
        if (null == e) return Promise.resolve();
        let n = {
            systemChannelFlags: e.systemChannelFlags,
            systemChannelId: e.systemChannelId,
            afkChannelId: e.afkChannelId,
            afkTimeout: e.afkTimeout,
            defaultMessageNotifications: e.defaultMessageNotifications
        };
        if ((0, l._)(new Set(e.features), new Set(t.features)) || (n.features = e.features), c.A.hasChanges() && await o.A.saveGuild(e.id, n), c.A.widgetHasChanges()) {
            let {
                enabled: t,
                channelId: n
            } = c.A.getWidget();
            await o.A.updateEmbed(e.id, t, n)
        }
        return Promise.resolve()
    }, [e, t]), p = i.useCallback(() => {
        null != e && o.A.init(e.id)
    }, [e]);
    return (0, r.jsx)(a.A, {
        submitting: n,
        errorMessage: g,
        onSave: m,
        onReset: p
    })
}