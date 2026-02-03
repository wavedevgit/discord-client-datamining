package v5;

import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class k {

    /* renamed from: f  reason: collision with root package name */
    private static final c.a f51153f = c.a.a("ef");

    /* renamed from: g  reason: collision with root package name */
    private static final c.a f51154g = c.a.a("nm", "v");

    /* renamed from: a  reason: collision with root package name */
    private r5.a f51155a;

    /* renamed from: b  reason: collision with root package name */
    private r5.b f51156b;

    /* renamed from: c  reason: collision with root package name */
    private r5.b f51157c;

    /* renamed from: d  reason: collision with root package name */
    private r5.b f51158d;

    /* renamed from: e  reason: collision with root package name */
    private r5.b f51159e;

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x0052, code lost:
        if (r0.equals("Opacity") == false) goto L16;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void a(w5.c r6, l5.i r7) {
        /*
            r5 = this;
            r6.r()
            java.lang.String r0 = ""
        L5:
            boolean r1 = r6.hasNext()
            if (r1 == 0) goto L90
            w5.c$a r1 = v5.k.f51154g
            int r1 = r6.B(r1)
            if (r1 == 0) goto L8a
            r2 = 1
            if (r1 == r2) goto L1d
            r6.E()
            r6.P()
            goto L5
        L1d:
            r0.getClass()
            int r1 = r0.hashCode()
            r3 = 0
            r4 = -1
            switch(r1) {
                case 353103893: goto L55;
                case 397447147: goto L4c;
                case 1041377119: goto L41;
                case 1379387491: goto L36;
                case 1383710113: goto L2b;
                default: goto L29;
            }
        L29:
            r2 = r4
            goto L5f
        L2b:
            java.lang.String r1 = "Softness"
            boolean r1 = r0.equals(r1)
            if (r1 != 0) goto L34
            goto L29
        L34:
            r2 = 4
            goto L5f
        L36:
            java.lang.String r1 = "Shadow Color"
            boolean r1 = r0.equals(r1)
            if (r1 != 0) goto L3f
            goto L29
        L3f:
            r2 = 3
            goto L5f
        L41:
            java.lang.String r1 = "Direction"
            boolean r1 = r0.equals(r1)
            if (r1 != 0) goto L4a
            goto L29
        L4a:
            r2 = 2
            goto L5f
        L4c:
            java.lang.String r1 = "Opacity"
            boolean r1 = r0.equals(r1)
            if (r1 != 0) goto L5f
            goto L29
        L55:
            java.lang.String r1 = "Distance"
            boolean r1 = r0.equals(r1)
            if (r1 != 0) goto L5e
            goto L29
        L5e:
            r2 = r3
        L5f:
            switch(r2) {
                case 0: goto L82;
                case 1: goto L7b;
                case 2: goto L74;
                case 3: goto L6d;
                case 4: goto L66;
                default: goto L62;
            }
        L62:
            r6.P()
            goto L5
        L66:
            r5.b r1 = v5.d.e(r6, r7)
            r5.f51159e = r1
            goto L5
        L6d:
            r5.a r1 = v5.d.c(r6, r7)
            r5.f51155a = r1
            goto L5
        L74:
            r5.b r1 = v5.d.f(r6, r7, r3)
            r5.f51157c = r1
            goto L5
        L7b:
            r5.b r1 = v5.d.f(r6, r7, r3)
            r5.f51156b = r1
            goto L5
        L82:
            r5.b r1 = v5.d.e(r6, r7)
            r5.f51158d = r1
            goto L5
        L8a:
            java.lang.String r0 = r6.f1()
            goto L5
        L90:
            r6.y()
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: v5.k.a(w5.c, l5.i):void");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j b(w5.c cVar, l5.i iVar) {
        r5.b bVar;
        r5.b bVar2;
        r5.b bVar3;
        r5.b bVar4;
        while (cVar.hasNext()) {
            if (cVar.B(f51153f) != 0) {
                cVar.E();
                cVar.P();
            } else {
                cVar.u();
                while (cVar.hasNext()) {
                    a(cVar, iVar);
                }
                cVar.s();
            }
        }
        r5.a aVar = this.f51155a;
        if (aVar != null && (bVar = this.f51156b) != null && (bVar2 = this.f51157c) != null && (bVar3 = this.f51158d) != null && (bVar4 = this.f51159e) != null) {
            return new j(aVar, bVar, bVar2, bVar3, bVar4);
        }
        return null;
    }
}
