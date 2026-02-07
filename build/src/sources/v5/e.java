package v5;

import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class e {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f52233a = c.a.a("ef");

    /* renamed from: b  reason: collision with root package name */
    private static final c.a f52234b = c.a.a("ty", "v");

    private static s5.a a(w5.c cVar, l5.i iVar) {
        cVar.u();
        s5.a aVar = null;
        while (true) {
            boolean z10 = false;
            while (cVar.hasNext()) {
                int p10 = cVar.p(f52234b);
                if (p10 != 0) {
                    if (p10 != 1) {
                        cVar.s();
                        cVar.S();
                    } else if (z10) {
                        aVar = new s5.a(d.e(cVar, iVar));
                    } else {
                        cVar.S();
                    }
                } else if (cVar.nextInt() == 0) {
                    z10 = true;
                }
            }
            cVar.D();
            return aVar;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.a b(w5.c cVar, l5.i iVar) {
        s5.a aVar = null;
        while (cVar.hasNext()) {
            if (cVar.p(f52233a) != 0) {
                cVar.s();
                cVar.S();
            } else {
                cVar.x();
                while (cVar.hasNext()) {
                    s5.a a10 = a(cVar, iVar);
                    if (a10 != null) {
                        aVar = a10;
                    }
                }
                cVar.v();
            }
        }
        return aVar;
    }
}
