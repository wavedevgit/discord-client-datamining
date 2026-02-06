package v5;

import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class e0 {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f52187a = c.a.a("nm", "c", "o", "tr", "hd");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.m a(w5.c cVar, l5.i iVar) {
        String str = null;
        r5.b bVar = null;
        r5.b bVar2 = null;
        r5.l lVar = null;
        boolean z10 = false;
        while (cVar.hasNext()) {
            int p10 = cVar.p(f52187a);
            if (p10 != 0) {
                if (p10 != 1) {
                    if (p10 != 2) {
                        if (p10 != 3) {
                            if (p10 != 4) {
                                cVar.S();
                            } else {
                                z10 = cVar.g();
                            }
                        } else {
                            lVar = c.g(cVar, iVar);
                        }
                    } else {
                        bVar2 = d.f(cVar, iVar, false);
                    }
                } else {
                    bVar = d.f(cVar, iVar, false);
                }
            } else {
                str = cVar.e1();
            }
        }
        return new s5.m(str, bVar, bVar2, lVar, z10);
    }
}
