package w5;

import x5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class d0 {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f52288a = c.a.a("nm", "p", "s", "r", "hd");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static t5.l a(x5.c cVar, l5.i iVar) {
        String str = null;
        s5.o oVar = null;
        s5.f fVar = null;
        s5.b bVar = null;
        boolean z10 = false;
        while (cVar.hasNext()) {
            int p10 = cVar.p(f52288a);
            if (p10 != 0) {
                if (p10 != 1) {
                    if (p10 != 2) {
                        if (p10 != 3) {
                            if (p10 != 4) {
                                cVar.T();
                            } else {
                                z10 = cVar.h();
                            }
                        } else {
                            bVar = d.e(cVar, iVar);
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
        return new t5.l(str, oVar, fVar, bVar, z10);
    }
}
