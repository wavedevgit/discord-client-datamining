package w5;

import x5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class f {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f52293a = c.a.a("nm", "p", "s", "hd", "d");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static t5.b a(x5.c cVar, l5.i iVar, int i10) {
        boolean z10;
        if (i10 == 3) {
            z10 = true;
        } else {
            z10 = false;
        }
        boolean z11 = z10;
        boolean z12 = false;
        String str = null;
        s5.o oVar = null;
        s5.f fVar = null;
        while (cVar.hasNext()) {
            int p10 = cVar.p(f52293a);
            if (p10 != 0) {
                if (p10 != 1) {
                    if (p10 != 2) {
                        if (p10 != 3) {
                            if (p10 != 4) {
                                cVar.s();
                                cVar.T();
                            } else if (cVar.nextInt() == 3) {
                                z11 = true;
                            } else {
                                z11 = false;
                            }
                        } else {
                            z12 = cVar.h();
                        }
                    } else {
                        fVar = d.i(cVar, iVar);
                    }
                } else {
                    oVar = a.b(cVar, iVar);
                }
            } else {
                str = cVar.g1();
            }
        }
        return new t5.b(str, oVar, fVar, z11, z12);
    }
}
