/** Chunk was on web.js **/
/** chunk id: 567367, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => b
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(990078),
    s = n(397927),
    o = n(849269),
    l = n(392054),
    c = n(207371),
    u = n(954571),
    d = n(211401),
    f = n(989837),
    p = n(500049),
    _ = n(228965),
    h = n(735991),
    m = n(698141),
    g = n(297486),
    E = n(652215),
    y = n(985018);

function b(e) {
    let {
        context: t,
        application: n,
        sectionName: b,
        primaryEntryPointCommand: O
    } = e, v = i.useId(), A = i.useCallback(() => {
        d.k(p.Se.ACTIVITY)
    }, []), I = i.useCallback(() => {
        f.A.shouldShowModal() && A()
    }, [A]), {
        submitting: S,
        wasSubmitting: T
    } = (0, m.A)({
        applicationId: n.id,
        context: t,
        launchingComponentId: v,
        onSubmissionComplete: A
    }), [C, N] = i.useState(!1), w = (0, o.Hq)({
        applicationId: n.id,
        context: t
    }), R = i.useMemo(() => (0, h.kF)(O.displayName), [O.displayName]), {
        onActivityItemSelected: P,
        buttonVariant: D,
        buttonText: x
    } = (0, g.dn)({
        context: t,
        application: n,
        location: l.Oh.APP_LAUNCHER_APPLICATION_VIEW,
        sectionName: b,
        commandName: R,
        autoDismissOnClick: w === o.o6.LEAVE || (0, c.x)(n),
        launchingComponentId: v,
        submitting: null != T ? T : S,
        onConfirmActivityLaunchChecksAlertOpen: I
    }), {
        disabled: L,
        reason: j
    } = (0, _.A)({
        context: t,
        application: n,
        activityAction: w
    });
    return (0, r.jsx)(a.m, {
        shouldShow: null != j,
        __unsupportedReactNodeAsText: j,
        children: (0, r.jsx)(s.Button, {
            type: "submit",
            size: "md",
            variant: D,
            disabled: L,
            loading: C,
            onClick: () => {
                N(!0), P(), u.default.track(E.HAw.APP_DETAIL_PAGE_ENTRY_POINT_COMMAND_BUTTON_CLICKED, {
                    application_id: n.id,
                    button_action: p.F5.USE_APP_COMMAND
                })
            },
            "aria-label": y.intl.formatToPlainString(y.t["XjP/R+"], {
                buttonText: x,
                applicationName: n.name
            }),
            text: x
        })
    })
}