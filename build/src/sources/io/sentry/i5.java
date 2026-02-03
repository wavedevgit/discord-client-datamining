package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class i5 {

    /* renamed from: d  reason: collision with root package name */
    private static final i5 f29984d = new i5();

    /* renamed from: a  reason: collision with root package name */
    private boolean f29985a;

    /* renamed from: b  reason: collision with root package name */
    private Boolean f29986b;

    /* renamed from: c  reason: collision with root package name */
    private final io.sentry.util.a f29987c = new io.sentry.util.a();

    private i5() {
    }

    public static i5 a() {
        return f29984d;
    }

    /* JADX WARN: Removed duplicated region for block: B:31:0x004e  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public java.lang.Boolean b(java.lang.String r6, boolean r7) {
        /*
            r5 = this;
            io.sentry.util.a r0 = r5.f29987c
            io.sentry.a1 r0 = r0.a()
            boolean r1 = r5.f29985a     // Catch: java.lang.Throwable -> L12
            if (r1 == 0) goto L14
            java.lang.Boolean r6 = r5.f29986b     // Catch: java.lang.Throwable -> L12
            if (r0 == 0) goto L11
            r0.close()
        L11:
            return r6
        L12:
            r6 = move-exception
            goto L54
        L14:
            if (r6 != 0) goto L1d
            r6 = 0
            if (r0 == 0) goto L1c
            r0.close()
        L1c:
            return r6
        L1d:
            r1 = 1
            r5.f29985a = r1     // Catch: java.lang.Throwable -> L12
            java.io.File r2 = new java.io.File     // Catch: java.lang.Throwable -> L12
            java.lang.String r3 = "last_crash"
            r2.<init>(r6, r3)     // Catch: java.lang.Throwable -> L12
            java.io.File r3 = new java.io.File     // Catch: java.lang.Throwable -> L12
            java.lang.String r4 = ".sentry-native/last_crash"
            r3.<init>(r6, r4)     // Catch: java.lang.Throwable -> L12
            r6 = 0
            boolean r4 = r2.exists()     // Catch: java.lang.Throwable -> L45
            if (r4 == 0) goto L39
            r2.delete()     // Catch: java.lang.Throwable -> L46
            goto L46
        L39:
            boolean r2 = r3.exists()     // Catch: java.lang.Throwable -> L45
            if (r2 == 0) goto L45
            if (r7 == 0) goto L46
            r3.delete()     // Catch: java.lang.Throwable -> L46
            goto L46
        L45:
            r1 = r6
        L46:
            java.lang.Boolean r6 = java.lang.Boolean.valueOf(r1)     // Catch: java.lang.Throwable -> L12
            r5.f29986b = r6     // Catch: java.lang.Throwable -> L12
            if (r0 == 0) goto L51
            r0.close()
        L51:
            java.lang.Boolean r6 = r5.f29986b
            return r6
        L54:
            if (r0 == 0) goto L5e
            r0.close()     // Catch: java.lang.Throwable -> L5a
            goto L5e
        L5a:
            r7 = move-exception
            r6.addSuppressed(r7)
        L5e:
            throw r6
        */
        throw new UnsupportedOperationException("Method not decompiled: io.sentry.i5.b(java.lang.String, boolean):java.lang.Boolean");
    }

    public void c(boolean z10) {
        a1 a10 = this.f29987c.a();
        try {
            if (!this.f29985a) {
                this.f29986b = Boolean.valueOf(z10);
                this.f29985a = true;
            }
            if (a10 != null) {
                a10.close();
            }
        } catch (Throwable th2) {
            if (a10 != null) {
                try {
                    a10.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
            }
            throw th2;
        }
    }
}
