package zk;

import ik.k;
import ik.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class c {

    /* renamed from: a  reason: collision with root package name */
    private final mk.b f56507a;

    /* renamed from: b  reason: collision with root package name */
    private final p f56508b;

    /* renamed from: c  reason: collision with root package name */
    private final p f56509c;

    /* renamed from: d  reason: collision with root package name */
    private final p f56510d;

    /* renamed from: e  reason: collision with root package name */
    private final p f56511e;

    /* renamed from: f  reason: collision with root package name */
    private final int f56512f;

    /* renamed from: g  reason: collision with root package name */
    private final int f56513g;

    /* renamed from: h  reason: collision with root package name */
    private final int f56514h;

    /* renamed from: i  reason: collision with root package name */
    private final int f56515i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(mk.b bVar, p pVar, p pVar2, p pVar3, p pVar4) {
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
        this.f56507a = bVar;
        this.f56508b = pVar;
        this.f56509c = pVar2;
        this.f56510d = pVar3;
        this.f56511e = pVar4;
        this.f56512f = (int) Math.min(pVar.c(), pVar2.c());
        this.f56513g = (int) Math.max(pVar3.c(), pVar4.c());
        this.f56514h = (int) Math.min(pVar.d(), pVar3.d());
        this.f56515i = (int) Math.max(pVar2.d(), pVar4.d());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static c j(c cVar, c cVar2) {
        if (cVar == null) {
            return cVar2;
        }
        if (cVar2 == null) {
            return cVar;
        }
        return new c(cVar.f56507a, cVar.f56508b, cVar.f56509c, cVar2.f56510d, cVar2.f56511e);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Removed duplicated region for block: B:17:0x002e  */
    /* JADX WARN: Removed duplicated region for block: B:28:0x005d  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public zk.c a(int r13, int r14, boolean r15) {
        /*
            r12 = this;
            ik.p r0 = r12.f56508b
            ik.p r1 = r12.f56509c
            ik.p r2 = r12.f56510d
            ik.p r3 = r12.f56511e
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
            ik.p r13 = new ik.p
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
            ik.p r13 = r12.f56509c
            goto L35
        L33:
            ik.p r13 = r12.f56511e
        L35:
            float r0 = r13.d()
            int r0 = (int) r0
            int r0 = r0 + r14
            mk.b r14 = r12.f56507a
            int r14 = r14.i()
            if (r0 < r14) goto L4b
            mk.b r14 = r12.f56507a
            int r14 = r14.i()
            int r0 = r14 + (-1)
        L4b:
            ik.p r14 = new ik.p
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
            zk.c r6 = new zk.c
            mk.b r7 = r12.f56507a
            r6.<init>(r7, r8, r9, r10, r11)
            return r6
        */
        throw new UnsupportedOperationException("Method not decompiled: zk.c.a(int, int, boolean):zk.c");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p b() {
        return this.f56509c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p c() {
        return this.f56511e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int d() {
        return this.f56513g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int e() {
        return this.f56515i;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int f() {
        return this.f56512f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public int g() {
        return this.f56514h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p h() {
        return this.f56508b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p i() {
        return this.f56510d;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(c cVar) {
        this.f56507a = cVar.f56507a;
        this.f56508b = cVar.f56508b;
        this.f56509c = cVar.f56509c;
        this.f56510d = cVar.f56510d;
        this.f56511e = cVar.f56511e;
        this.f56512f = cVar.f56512f;
        this.f56513g = cVar.f56513g;
        this.f56514h = cVar.f56514h;
        this.f56515i = cVar.f56515i;
    }
}
