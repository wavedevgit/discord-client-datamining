package tk;

import ck.k;
import ck.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class c {

    /* renamed from: a  reason: collision with root package name */
    private final gk.b f50101a;

    /* renamed from: b  reason: collision with root package name */
    private final p f50102b;

    /* renamed from: c  reason: collision with root package name */
    private final p f50103c;

    /* renamed from: d  reason: collision with root package name */
    private final p f50104d;

    /* renamed from: e  reason: collision with root package name */
    private final p f50105e;

    /* renamed from: f  reason: collision with root package name */
    private final int f50106f;

    /* renamed from: g  reason: collision with root package name */
    private final int f50107g;

    /* renamed from: h  reason: collision with root package name */
    private final int f50108h;

    /* renamed from: i  reason: collision with root package name */
    private final int f50109i;

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
        this.f50101a = bVar;
        this.f50102b = pVar;
        this.f50103c = pVar2;
        this.f50104d = pVar3;
        this.f50105e = pVar4;
        this.f50106f = (int) Math.min(pVar.c(), pVar2.c());
        this.f50107g = (int) Math.max(pVar3.c(), pVar4.c());
        this.f50108h = (int) Math.min(pVar.d(), pVar3.d());
        this.f50109i = (int) Math.max(pVar2.d(), pVar4.d());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static c j(c cVar, c cVar2) {
        if (cVar == null) {
            return cVar2;
        }
        if (cVar2 == null) {
            return cVar;
        }
        return new c(cVar.f50101a, cVar.f50102b, cVar.f50103c, cVar2.f50104d, cVar2.f50105e);
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
            ck.p r0 = r12.f50102b
            ck.p r1 = r12.f50103c
            ck.p r2 = r12.f50104d
            ck.p r3 = r12.f50105e
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
            ck.p r13 = r12.f50103c
            goto L35
        L33:
            ck.p r13 = r12.f50105e
        L35:
            float r0 = r13.d()
            int r0 = (int) r0
            int r0 = r0 + r14
            gk.b r14 = r12.f50101a
            int r14 = r14.i()
            if (r0 < r14) goto L4b
            gk.b r14 = r12.f50101a
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
            gk.b r7 = r12.f50101a
            r6.<init>(r7, r8, r9, r10, r11)
            return r6
        */
        throw new UnsupportedOperationException("Method not decompiled: tk.c.a(int, int, boolean):tk.c");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p b() {
        return this.f50103c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p c() {
        return this.f50105e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d() {
        return this.f50107g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f50109i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int f() {
        return this.f50106f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f50108h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p h() {
        return this.f50102b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p i() {
        return this.f50104d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(c cVar) {
        this.f50101a = cVar.f50101a;
        this.f50102b = cVar.f50102b;
        this.f50103c = cVar.f50103c;
        this.f50104d = cVar.f50104d;
        this.f50105e = cVar.f50105e;
        this.f50106f = cVar.f50106f;
        this.f50107g = cVar.f50107g;
        this.f50108h = cVar.f50108h;
        this.f50109i = cVar.f50109i;
    }
}
