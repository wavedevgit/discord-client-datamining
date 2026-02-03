package v5;

import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class f {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f50809a = c.a.a("nm", "p", "s", "hd", "d");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.b a(w5.c cVar, l5.i iVar, int i10) {
        boolean z10;
        if (i10 == 3) {
            z10 = true;
        } else {
            z10 = false;
        }
        boolean z11 = z10;
        boolean z12 = false;
        String str = null;
        r5.m mVar = null;
        r5.f fVar = null;
        while (cVar.hasNext()) {
            int B = cVar.B(f50809a);
            if (B != 0) {
                if (B != 1) {
                    if (B != 2) {
                        if (B != 3) {
                            if (B != 4) {
                                cVar.E();
                                cVar.P();
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
                    mVar = a.b(cVar, iVar);
                }
            } else {
                str = cVar.f1();
            }
        }
        return new s5.b(str, mVar, fVar, z11, z12);
    }
}
