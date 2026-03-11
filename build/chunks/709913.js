/** chunk id: 709913 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(98207),
    r = n(579872),
    o = n(900686),
    d = n(518142),
    c = n(195043),
    u = n(662758),
    _ = n(179690),
    g = n(531525),
    A = n(985018);

function m(e) {
    let {
        backupCodes: t,
        hasTOTPEnabled: n,
        currentUser: m
    } = e, h = s.useCallback(e => {
        (0, l.qfG)(t => (0, i.jsx)(d.A, {
            ...t,
            password: e
        }), {
            stackingBehavior: "stack"
        })
    }, []), p = s.useCallback(() => {
        (0, l.qfG)(e => (0, i.jsx)(u.default, {
            ...e,
            handleSubmit: e => a.A.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                h(e)
            }),
            title: A.intl.string(A.t.PsQmzU),
            actionText: A.intl.string(A.t.ajkYcF)
        }))
    }, [h]), x = s.useCallback(() => {
        let e = t.map(e => {
                let {
                    consumed: t,
                    code: n
                } = e;
                return `* ${n.substr(0,4)}-${n.substr(4)} ${t?"(used)":""}`
            }).join("\r\n"),
            n = A.intl.formatToPlainString(A.t["uYWwh/"], {
                email: m.email
            });
        return `${n}\r
\r
${e}`
    }, [t, m.email]), E = s.useMemo(() => t.length > 0 ? (0, i.jsx)(o.A, {
        fileContents: x,
        contentType: "text/plain",
        fileName: "discord_backup_codes.txt",
        children: (0, i.jsx)(l.Button, {
            variant: "primary",
            size: "sm",
            text: A.intl.string(A.t.qZZUy6)
        })
    }) : (0, i.jsx)(c.x, {
        setting: g.H.ACCOUNT_VIEW_BACKUP_CODES,
        children: (0, i.jsx)(l.Button, {
            variant: "primary",
            size: "sm",
            text: A.intl.string(A.t.xZEzbu),
            onClick: p
        })
    }), [t.length, x, p]), T = s.useCallback(() => {
        r.A.show({
            title: A.intl.string(A.t["D+aE7g"]),
            body: A.intl.string(A.t.EA4ZEk),
            cancelText: A.intl.string(A.t["ETE/oC"]),
            onConfirm: () => a.A.disable()
        })
    }, []);
    return (0, i.jsx)(l.D0$, {
        label: A.intl.string(A.t.EPVq00),
        description: A.intl.string(A.t.bQwxib),
        children: (0, i.jsxs)(l.ButtonGroup, {
            size: "sm",
            children: [E, n && (0, i.jsx)(c.x, {
                setting: g.H.ACCOUNT_REMOVE_2FA,
                children: (0, i.jsx)(l.Button, {
                    variant: "critical-secondary",
                    size: "sm",
                    text: A.intl.string(A.t["D+aE7g"]),
                    onClick: T
                })
            }), !n && (0, i.jsx)(c.x, {
                setting: g.H.ACCOUNT_ENABLE_2FA,
                children: (0, i.jsx)(l.Button, {
                    variant: "primary",
                    size: "sm",
                    text: A.intl.string(A.t.cDgKte),
                    onClick: _.Ay.enableMFA
                })
            })]
        })
    })
}