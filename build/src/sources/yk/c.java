package yk;

import hk.k;
import hk.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class c {

    /* renamed from: a  reason: collision with root package name */
    private final lk.b f55434a;

    /* renamed from: b  reason: collision with root package name */
    private final p f55435b;

    /* renamed from: c  reason: collision with root package name */
    private final p f55436c;

    /* renamed from: d  reason: collision with root package name */
    private final p f55437d;

    /* renamed from: e  reason: collision with root package name */
    private final p f55438e;

    /* renamed from: f  reason: collision with root package name */
    private final int f55439f;

    /* renamed from: g  reason: collision with root package name */
    private final int f55440g;

    /* renamed from: h  reason: collision with root package name */
    private final int f55441h;

    /* renamed from: i  reason: collision with root package name */
    private final int f55442i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(lk.b bVar, p pVar, p pVar2, p pVar3, p pVar4) {
        boolean z10 = false;
        boolean z11 = pVar == null || pVar2 == null;
        z10 = (pVar3 == null || pVar4 == null) ? true : z10;
        if (z11 && z10) {
            throw k.a();
        }
        if (z11) {
            pVar = new p(0.0f, pVar3.d());
            pVar2 = new p(0.0f, pVar4.d());
        } else if (z10) {
            pVar3 = new p(bVar.l() - 1, pVar.d());
            pVar4 = new p(bVar.l() - 1, pVar2.d());
        }
        this.f55434a = bVar;
        this.f55435b = pVar;
        this.f55436c = pVar2;
        this.f55437d = pVar3;
        this.f55438e = pVar4;
        this.f55439f = (int) Math.min(pVar.c(), pVar2.c());
        this.f55440g = (int) Math.max(pVar3.c(), pVar4.c());
        this.f55441h = (int) Math.min(pVar.d(), pVar3.d());
        this.f55442i = (int) Math.max(pVar2.d(), pVar4.d());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static c j(c cVar, c cVar2) {
        if (cVar == null) {
            return cVar2;
        }
        if (cVar2 == null) {
            return cVar;
        }
        return new c(cVar.f55434a, cVar.f55435b, cVar.f55436c, cVar2.f55437d, cVar2.f55438e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Removed duplicated region for block: B:17:0x002e  */
    /* JADX WARN: Removed duplicated region for block: B:28:0x005d  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public yk.c a(int r13, int r14, boolean r15) {
        /*
            r12 = this;
            hk.p r0 = r12.f55435b
            hk.p r1 = r12.f55436c
            hk.p r2 = r12.f55437d
            hk.p r3 = r12.f55438e
            if (r13 <= 0) goto L2a
            if (r15 == 0) goto Le
            r4 = r0
            goto Lf
        Le:
            r4 = r2
        Lf:
            float r5 = r4.d()
            int r5 = (int) r5
            int r5 = r5 - r13
            if (r5 >= 0) goto L18
            r5 = 0
        L18:
            hk.p r13 = new hk.p
            float r4 = r4.c()
            float r5 = (float) r5
            r13.<init>(r4, r5)
            if (r15 == 0) goto L27
            r8 = r13
        L25:
            r10 = r2
            goto L2c
        L27:
            r10 = r13
            r8 = r0
            goto L2c
        L2a:
            r8 = r0
            goto L25
        L2c:
            if (r14 <= 0) goto L5d
            if (r15 == 0) goto L33
            hk.p r13 = r12.f55436c
            goto L35
        L33:
            hk.p r13 = r12.f55438e
        L35:
            float r0 = r13.d()
            int r0 = (int) r0
            int r0 = r0 + r14
            lk.b r14 = r12.f55434a
            int r14 = r14.i()
            if (r0 < r14) goto L4b
            lk.b r14 = r12.f55434a
            int r14 = r14.i()
            int r0 = r14 + (-1)
        L4b:
            hk.p r14 = new hk.p
            float r13 = r13.c()
            float r0 = (float) r0
            r14.<init>(r13, r0)
            if (r15 == 0) goto L5a
            r9 = r14
        L58:
            r11 = r3
            goto L5f
        L5a:
            r11 = r14
            r9 = r1
            goto L5f
        L5d:
            r9 = r1
            goto L58
        L5f:
            yk.c r6 = new yk.c
            lk.b r7 = r12.f55434a
            r6.<init>(r7, r8, r9, r10, r11)
            return r6
        */
        throw new UnsupportedOperationException("Method not decompiled: yk.c.a(int, int, boolean):yk.c");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p b() {
        return this.f55436c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p c() {
        return this.f55438e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d() {
        return this.f55440g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f55442i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int f() {
        return this.f55439f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f55441h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p h() {
        return this.f55435b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p i() {
        return this.f55437d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(c cVar) {
        this.f55434a = cVar.f55434a;
        this.f55435b = cVar.f55435b;
        this.f55436c = cVar.f55436c;
        this.f55437d = cVar.f55437d;
        this.f55438e = cVar.f55438e;
        this.f55439f = cVar.f55439f;
        this.f55440g = cVar.f55440g;
        this.f55441h = cVar.f55441h;
        this.f55442i = cVar.f55442i;
    }
}
