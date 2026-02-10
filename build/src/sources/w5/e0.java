package w5;

import x5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class e0 {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f53262a = c.a.a("nm", "c", "o", "tr", "hd");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static t5.m a(x5.c cVar, l5.i iVar) {
        String str = null;
        s5.b bVar = null;
        s5.b bVar2 = null;
        s5.n nVar = null;
        boolean z10 = false;
        while (cVar.hasNext()) {
            int p10 = cVar.p(f53262a);
            if (p10 != 0) {
                if (p10 != 1) {
                    if (p10 != 2) {
                        if (p10 != 3) {
                            if (p10 != 4) {
                                cVar.T();
                            } else {
                                z10 = cVar.g();
                            }
                        } else {
                            nVar = c.g(cVar, iVar);
                        }
                    } else {
                        bVar2 = d.f(cVar, iVar, false);
                    }
                } else {
                    bVar = d.f(cVar, iVar, false);
                }
            } else {
                str = cVar.b1();
            }
        }
        return new t5.m(str, bVar, bVar2, nVar, z10);
    }
}
