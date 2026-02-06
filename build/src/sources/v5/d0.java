package v5;

import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class d0 {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f52184a = c.a.a("nm", "p", "s", "r", "hd");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.l a(w5.c cVar, l5.i iVar) {
        String str = null;
        r5.m mVar = null;
        r5.f fVar = null;
        r5.b bVar = null;
        boolean z10 = false;
        while (cVar.hasNext()) {
            int p10 = cVar.p(f52184a);
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
                            bVar = d.e(cVar, iVar);
                        }
                    } else {
                        fVar = d.i(cVar, iVar);
                    }
                } else {
                    mVar = a.b(cVar, iVar);
                }
            } else {
                str = cVar.e1();
            }
        }
        return new s5.l(str, mVar, fVar, bVar, z10);
    }
}
