/** chunk id: 709913 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(98207),
    a = n(579872),
    o = n(900686),
    d = n(518142),
    c = n(195043),
    u = n(662758),
    _ = n(179690),
    m = n(531525),
    g = n(985018);

function A(e) {
    let {
        backupCodes: t,
        hasTOTPEnabled: n,
        currentUser: A
    } = e, h = s.useCallback(e => {
        (0, l.qfG)(t => (0, i.jsx)(d.A, {
            ...t,
            password: e
        }), {
            stackingBehavior: "stack"
        })
    }, []), x = s.useCallback(() => {
        (0, l.qfG)(e => (0, i.jsx)(u.default, {
            ...e,
            handleSubmit: e => r.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                h(e)
            }),
            title: g.intl.string(g.t.PsQmzU),
            actionText: g.intl.string(g.t.ajkYcF)
        }))
    }, [h]), p = s.useCallback(() => {
        let e = t.map(e => {
                let {
                    consumed: t,
                    code: n
                } = e;
                return `* ${n.substr(0,4)}-${n.substr(4)} ${t?"(used)":""}`
            }).join("\r\n"),
            n = g.intl.formatToPlainString(g.t["uYWwh/"], {
                email: A.email
            });
        return `${n}\r
\r
${e}`
    }, [t, A.email]), T = s.useMemo(() => t.length > 0 ? (0, i.jsx)(o.A, {
        fileContents: p,
        contentType: "text/plain",
        fileName: "discord_backup_codes.txt",
        children: (0, i.jsx)(l.Button, {
            variant: "primary",
            size: "sm",
            text: g.intl.string(g.t.qZZUy6)
        })
    }) : (0, i.jsx)(c.x, {
        setting: m.H.ACCOUNT_VIEW_BACKUP_CODES,
        children: (0, i.jsx)(l.Button, {
            variant: "primary",
            size: "sm",
            text: g.intl.string(g.t.xZEzbu),
            onClick: x
        })
    }), [t.length, p, x]), E = s.useCallback(() => {
        a.A.show({
            title: g.intl.string(g.t["D+aE7g"]),
            body: g.intl.string(g.t.EA4ZEk),
            cancelText: g.intl.string(g.t["ETE/oC"]),
            onConfirm: () => r.A.disable()
        })
    }, []);
    return (0, i.jsx)(l.D0$, {
        label: g.intl.string(g.t.EPVq00),
        description: g.intl.string(g.t.bQwxib),
        children: (0, i.jsxs)(l.ButtonGroup, {
            size: "sm",
            children: [T, n && (0, i.jsx)(c.x, {
                setting: m.H.ACCOUNT_REMOVE_2FA,
                children: (0, i.jsx)(l.Button, {
                    variant: "critical-secondary",
                    size: "sm",
                    text: g.intl.string(g.t["D+aE7g"]),
                    onClick: E
                })
            }), !n && (0, i.jsx)(c.x, {
                setting: m.H.ACCOUNT_ENABLE_2FA,
                children: (0, i.jsx)(l.Button, {
                    variant: "primary",
                    size: "sm",
                    text: g.intl.string(g.t.cDgKte),
                    onClick: _.Ay.enableMFA
                })
            })]
        })
    })
}