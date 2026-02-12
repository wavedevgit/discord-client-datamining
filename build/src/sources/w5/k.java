package w5;

import x5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class k {

    /* renamed from: f  reason: collision with root package name */
    private static final c.a f52309f = c.a.a("ef");

    /* renamed from: g  reason: collision with root package name */
    private static final c.a f52310g = c.a.a("nm", "v");

    /* renamed from: a  reason: collision with root package name */
    private s5.a f52311a;

    /* renamed from: b  reason: collision with root package name */
    private s5.b f52312b;

    /* renamed from: c  reason: collision with root package name */
    private s5.b f52313c;

    /* renamed from: d  reason: collision with root package name */
    private s5.b f52314d;

    /* renamed from: e  reason: collision with root package name */
    private s5.b f52315e;

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    /* JADX WARN: Code restructure failed: missing block: B:26:0x0052, code lost:
        if (r0.equals("Opacity") == false) goto L16;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private void a(x5.c r6, l5.i r7) {
        /*
            r5 = this;
            r6.u()
            java.lang.String r0 = ""
        L5:
            boolean r1 = r6.hasNext()
            if (r1 == 0) goto L90
            x5.c$a r1 = w5.k.f52310g
            int r1 = r6.p(r1)
            if (r1 == 0) goto L8a
            r2 = 1
            if (r1 == r2) goto L1d
            r6.s()
            r6.T()
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
            r6.T()
            goto L5
        L66:
            s5.b r1 = w5.d.e(r6, r7)
            r5.f52315e = r1
            goto L5
        L6d:
            s5.a r1 = w5.d.c(r6, r7)
            r5.f52311a = r1
            goto L5
        L74:
            s5.b r1 = w5.d.f(r6, r7, r3)
            r5.f52313c = r1
            goto L5
        L7b:
            s5.b r1 = w5.d.f(r6, r7, r3)
            r5.f52312b = r1
            goto L5
        L82:
            s5.b r1 = w5.d.e(r6, r7)
            r5.f52314d = r1
            goto L5
        L8a:
            java.lang.String r0 = r6.g1()
            goto L5
        L90:
            r6.D()
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: w5.k.a(x5.c, l5.i):void");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public j b(x5.c cVar, l5.i iVar) {
        s5.b bVar;
        s5.b bVar2;
        s5.b bVar3;
        s5.b bVar4;
        while (cVar.hasNext()) {
            if (cVar.p(f52309f) != 0) {
                cVar.s();
                cVar.T();
            } else {
                cVar.x();
                while (cVar.hasNext()) {
                    a(cVar, iVar);
                }
                cVar.v();
            }
        }
        s5.a aVar = this.f52311a;
        if (aVar != null && (bVar = this.f52312b) != null && (bVar2 = this.f52313c) != null && (bVar3 = this.f52314d) != null && (bVar4 = this.f52315e) != null) {
            return new j(aVar, bVar, bVar2, bVar3, bVar4);
        }
        return null;
    }
}
