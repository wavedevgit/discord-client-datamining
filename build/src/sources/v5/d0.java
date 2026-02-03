package v5;

import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class d0 {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f50805a = c.a.a("nm", "p", "s", "r", "hd");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.l a(w5.c cVar, l5.i iVar) {
        String str = null;
        r5.m mVar = null;
        r5.f fVar = null;
        r5.b bVar = null;
        boolean z10 = false;
        while (cVar.hasNext()) {
            int B = cVar.B(f50805a);
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
                            bVar = d.e(cVar, iVar);
                        }
                    } else {
                        fVar = d.i(cVar, iVar);
                    }
                } else {
                    mVar = a.b(cVar, iVar);
                }
            } else {
                str = cVar.f1();
            }
        }
        return new s5.l(str, mVar, fVar, bVar, z10);
    }
}
