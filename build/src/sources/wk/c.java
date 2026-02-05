package wk;

import fk.k;
import fk.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class c {

    /* renamed from: a  reason: collision with root package name */
    private final jk.b f53119a;

    /* renamed from: b  reason: collision with root package name */
    private final p f53120b;

    /* renamed from: c  reason: collision with root package name */
    private final p f53121c;

    /* renamed from: d  reason: collision with root package name */
    private final p f53122d;

    /* renamed from: e  reason: collision with root package name */
    private final p f53123e;

    /* renamed from: f  reason: collision with root package name */
    private final int f53124f;

    /* renamed from: g  reason: collision with root package name */
    private final int f53125g;

    /* renamed from: h  reason: collision with root package name */
    private final int f53126h;

    /* renamed from: i  reason: collision with root package name */
    private final int f53127i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(jk.b bVar, p pVar, p pVar2, p pVar3, p pVar4) {
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
        this.f53119a = bVar;
        this.f53120b = pVar;
        this.f53121c = pVar2;
        this.f53122d = pVar3;
        this.f53123e = pVar4;
        this.f53124f = (int) Math.min(pVar.c(), pVar2.c());
        this.f53125g = (int) Math.max(pVar3.c(), pVar4.c());
        this.f53126h = (int) Math.min(pVar.d(), pVar3.d());
        this.f53127i = (int) Math.max(pVar2.d(), pVar4.d());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static c j(c cVar, c cVar2) {
        if (cVar == null) {
            return cVar2;
        }
        if (cVar2 == null) {
            return cVar;
        }
        return new c(cVar.f53119a, cVar.f53120b, cVar.f53121c, cVar2.f53122d, cVar2.f53123e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Removed duplicated region for block: B:17:0x002e  */
    /* JADX WARN: Removed duplicated region for block: B:28:0x005d  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public wk.c a(int r13, int r14, boolean r15) {
        /*
            r12 = this;
            fk.p r0 = r12.f53120b
            fk.p r1 = r12.f53121c
            fk.p r2 = r12.f53122d
            fk.p r3 = r12.f53123e
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
            fk.p r13 = new fk.p
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
            fk.p r13 = r12.f53121c
            goto L35
        L33:
            fk.p r13 = r12.f53123e
        L35:
            float r0 = r13.d()
            int r0 = (int) r0
            int r0 = r0 + r14
            jk.b r14 = r12.f53119a
            int r14 = r14.i()
            if (r0 < r14) goto L4b
            jk.b r14 = r12.f53119a
            int r14 = r14.i()
            int r0 = r14 + (-1)
        L4b:
            fk.p r14 = new fk.p
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
            wk.c r6 = new wk.c
            jk.b r7 = r12.f53119a
            r6.<init>(r7, r8, r9, r10, r11)
            return r6
        */
        throw new UnsupportedOperationException("Method not decompiled: wk.c.a(int, int, boolean):wk.c");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p b() {
        return this.f53121c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p c() {
        return this.f53123e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d() {
        return this.f53125g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f53127i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int f() {
        return this.f53124f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f53126h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p h() {
        return this.f53120b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p i() {
        return this.f53122d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(c cVar) {
        this.f53119a = cVar.f53119a;
        this.f53120b = cVar.f53120b;
        this.f53121c = cVar.f53121c;
        this.f53122d = cVar.f53122d;
        this.f53123e = cVar.f53123e;
        this.f53124f = cVar.f53124f;
        this.f53125g = cVar.f53125g;
        this.f53126h = cVar.f53126h;
        this.f53127i = cVar.f53127i;
    }
}
