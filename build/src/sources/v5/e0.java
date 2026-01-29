package v5;

import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class e0 {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f50668a = c.a.a("nm", "c", "o", "tr", "hd");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.m a(w5.c cVar, l5.i iVar) {
        String str = null;
        r5.b bVar = null;
        r5.b bVar2 = null;
        r5.l lVar = null;
        boolean z10 = false;
        while (cVar.hasNext()) {
            int B = cVar.B(f50668a);
            if (B != 0) {
                if (B != 1) {
                    if (B != 2) {
                        if (B != 3) {
                            if (B != 4) {
                                cVar.P();
                            } else {
                                z10 = cVar.h();
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
