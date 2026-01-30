package tk;

import ck.k;
import ck.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class c {

    /* renamed from: a  reason: collision with root package name */
    private final gk.b f49618a;

    /* renamed from: b  reason: collision with root package name */
    private final p f49619b;

    /* renamed from: c  reason: collision with root package name */
    private final p f49620c;

    /* renamed from: d  reason: collision with root package name */
    private final p f49621d;

    /* renamed from: e  reason: collision with root package name */
    private final p f49622e;

    /* renamed from: f  reason: collision with root package name */
    private final int f49623f;

    /* renamed from: g  reason: collision with root package name */
    private final int f49624g;

    /* renamed from: h  reason: collision with root package name */
    private final int f49625h;

    /* renamed from: i  reason: collision with root package name */
    private final int f49626i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(gk.b bVar, p pVar, p pVar2, p pVar3, p pVar4) {
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
        this.f49618a = bVar;
        this.f49619b = pVar;
        this.f49620c = pVar2;
        this.f49621d = pVar3;
        this.f49622e = pVar4;
        this.f49623f = (int) Math.min(pVar.c(), pVar2.c());
        this.f49624g = (int) Math.max(pVar3.c(), pVar4.c());
        this.f49625h = (int) Math.min(pVar.d(), pVar3.d());
        this.f49626i = (int) Math.max(pVar2.d(), pVar4.d());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static c j(c cVar, c cVar2) {
        if (cVar == null) {
            return cVar2;
        }
        if (cVar2 == null) {
            return cVar;
        }
        return new c(cVar.f49618a, cVar.f49619b, cVar.f49620c, cVar2.f49621d, cVar2.f49622e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Removed duplicated region for block: B:17:0x002e  */
    /* JADX WARN: Removed duplicated region for block: B:28:0x005d  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public tk.c a(int r13, int r14, boolean r15) {
        /*
            r12 = this;
            ck.p r0 = r12.f49619b
            ck.p r1 = r12.f49620c
            ck.p r2 = r12.f49621d
            ck.p r3 = r12.f49622e
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
            ck.p r13 = new ck.p
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
            ck.p r13 = r12.f49620c
            goto L35
        L33:
            ck.p r13 = r12.f49622e
        L35:
            float r0 = r13.d()
            int r0 = (int) r0
            int r0 = r0 + r14
            gk.b r14 = r12.f49618a
            int r14 = r14.i()
            if (r0 < r14) goto L4b
            gk.b r14 = r12.f49618a
            int r14 = r14.i()
            int r0 = r14 + (-1)
        L4b:
            ck.p r14 = new ck.p
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
            tk.c r6 = new tk.c
            gk.b r7 = r12.f49618a
            r6.<init>(r7, r8, r9, r10, r11)
            return r6
        */
        throw new UnsupportedOperationException("Method not decompiled: tk.c.a(int, int, boolean):tk.c");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p b() {
        return this.f49620c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p c() {
        return this.f49622e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d() {
        return this.f49624g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f49626i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int f() {
        return this.f49623f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f49625h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p h() {
        return this.f49619b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p i() {
        return this.f49621d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(c cVar) {
        this.f49618a = cVar.f49618a;
        this.f49619b = cVar.f49619b;
        this.f49620c = cVar.f49620c;
        this.f49621d = cVar.f49621d;
        this.f49622e = cVar.f49622e;
        this.f49623f = cVar.f49623f;
        this.f49624g = cVar.f49624g;
        this.f49625h = cVar.f49625h;
        this.f49626i = cVar.f49626i;
    }
}
