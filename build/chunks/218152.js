/** chunk id: 218152, original params: e,t,s (module,exports,require) **/
s.d(t, {
    Cp: () => x,
    ST: () => b,
    kU: () => A
}), s(896048), s(733351);
var i = s(627968),
    n = s(64700),
    r = s(284009),
    l = s.n(r),
    a = s(265690),
    o = s(121894),
    d = s(465532),
    h = s(408018),
    c = s(734057),
    u = s(31717),
    g = s(919577),
    m = s(853742);

function v(e, t, s) {
    return t in e ? Object.defineProperty(e, t, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = s, e
}
class p {
    constructor(e, t, s) {
        var i, n, r;
        v(this, "channelId", void 0), v(this, "_set", void 0), v(this, "get", void 0), v(this, "editorHeight", void 0), v(this, "editorAdditionRowHeight", void 0), v(this, "listViewCardHeights", void 0), v(this, "cardHeightVersion", void 0), v(this, "nameError", void 0), v(this, "messageError", void 0), v(this, "appliedTags", void 0), v(this, "popoutOpen", void 0), v(this, "guidelinesOpen", void 0), v(this, "previewing", void 0), v(this, "onboardingExpanded", void 0), v(this, "submitting", void 0), v(this, "formOpen", void 0), v(this, "name", void 0), v(this, "textAreaState", void 0), v(this, "hasClickedForm", void 0), v(this, "titleFocused", void 0), v(this, "bodyFocused", void 0), v(this, "set", void 0), v(this, "setEditorHeight", void 0), v(this, "setEditorAdditionRowHeight", void 0), v(this, "setCardHeight", void 0), v(this, "setNameError", void 0), v(this, "setMessageError", void 0), v(this, "toggleAppliedTag", void 0), v(this, "setPopoutOpen", void 0), v(this, "setGuidelinesOpen", void 0), v(this, "setPreviewing", void 0), v(this, "setSubmitting", void 0), v(this, "setFormOpen", void 0), v(this, "setOnboardingExpanded", void 0), v(this, "setTitleFocused", void 0), v(this, "setBodyFocused", void 0), v(this, "setName", void 0), v(this, "setTextAreaState", void 0), v(this, "setHasClickedForm", void 0), v(this, "resetFormState", void 0), v(this, "setFormOpenFromUserAction", void 0), this.channelId = e, this._set = t, this.get = s, this.editorHeight = 64, this.editorAdditionRowHeight = 0, this.listViewCardHeights = {}, this.cardHeightVersion = 0, this.nameError = null, this.messageError = null, this.appliedTags = new Set, this.popoutOpen = !1, this.guidelinesOpen = !1, this.previewing = !1, this.onboardingExpanded = !1, this.submitting = !1, this.formOpen = !1, this.name = "", this.textAreaState = (0, h.ur)(""), this.hasClickedForm = !1, this.titleFocused = !1, this.bodyFocused = !1, this.set = e => {
            (0, o.r)(() => this._set(e))
        }, this.setEditorHeight = e => {
            this.set({
                editorHeight: e
            })
        }, this.setEditorAdditionRowHeight = e => {
            this.set({
                editorAdditionRowHeight: e
            })
        }, this.setCardHeight = (e, t) => {
            let {
                listViewCardHeights: s,
                cardHeightVersion: i
            } = this.get();
            s[e] !== t && (s[e] = t, this.set({
                cardHeightVersion: i + 1
            }))
        }, this.setNameError = e => {
            this.set({
                nameError: e
            })
        }, this.setMessageError = e => {
            this.set({
                messageError: e
            })
        }, this.toggleAppliedTag = e => {
            let {
                appliedTags: t
            } = this.get();
            (t = new Set(t)).has(e) ? t.delete(e) : t.add(e), this.set({
                appliedTags: t
            }), d.A.changeThreadSettings(this.channelId, {
                appliedTags: t
            })
        }, this.setPopoutOpen = e => {
            this.set({
                popoutOpen: e
            })
        }, this.setGuidelinesOpen = e => {
            this.set({
                guidelinesOpen: e
            })
        }, this.setPreviewing = e => {
            this.set({
                previewing: e
            })
        }, this.setSubmitting = e => {
            this.set({
                submitting: e
            })
        }, this.setFormOpen = e => {
            this.set({
                formOpen: e
            }), g.A.clearForumSearch(this.channelId)
        }, this.setOnboardingExpanded = e => {
            this.set({
                onboardingExpanded: e
            })
        }, this.setTitleFocused = e => {
            this.set({
                titleFocused: e
            })
        }, this.setBodyFocused = e => {
            this.set({
                bodyFocused: e
            })
        }, this.setName = e => {
            this.set({
                name: e
            }), d.A.changeThreadSettings(this.channelId, {
                name: e
            })
        }, this.setTextAreaState = e => {
            this.set({
                textAreaState: e
            }), d.A.saveDraft(this.channelId, e.textValue, u.C.FirstThreadMessage)
        }, this.setHasClickedForm = e => {
            this.set({
                hasClickedForm: e
            })
        }, this.resetFormState = () => {
            let e = c.A.getChannel(this.channelId),
                t = null == e || null == e.template ? "" : e.template.trim();
            this.set({
                name: "",
                textAreaState: (0, h.ur)(t),
                appliedTags: new Set,
                hasClickedForm: !1
            }), g.A.clearForumSearch(this.channelId)
        }, this.setFormOpenFromUserAction = () => {
            if (this.hasClickedForm) return;
            let e = c.A.getChannel(this.channelId);
            null != e && (0, m.OG)({
                guildId: e.guild_id,
                channelId: this.channelId
            }), this.set({
                hasClickedForm: !0,
                formOpen: !0
            }), g.A.clearForumSearch(this.channelId)
        };
        const l = c.A.getChannel(e);
        if (null == l) return;
        const a = null != (i = u.A.getThreadSettings(l.id)) ? i : {},
            p = null == l.template ? "" : l.template.trim(),
            f = u.A.getDraft(l.id, u.C.FirstThreadMessage),
            x = (0, h.ur)(null != f && "" !== f.trim() ? f : p);
        this.name = null != (n = a.name) ? n : "", r = new Set(a.appliedTags), this.appliedTags = void 0 !== r ? r : new Set, this.textAreaState = x, this.formOpen = x.textValue !== p
    }
}
let f = n.createContext(null);

function x(e) {
    let {
        children: t,
        channel: s
    } = e, r = n.useMemo(() => (0, a.h)((e, t) => new p(s.id, e, t)), [s]);
    return (0, i.jsx)(f.Provider, {
        value: r,
        children: t
    })
}

function A(e, t) {
    let s = n.useContext(f);
    return l()(null != s, "[useForumPostComposerStore] Context should not be null"), s(e, t)
}

function b() {
    let e = n.useContext(f);
    return l()(null != e, "[useForumPostComposerStore] Context should not be null"), e
}