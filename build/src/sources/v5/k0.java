package v5;

import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class k0 {

    /* renamed from: a  reason: collision with root package name */
    static c.a f52259a = c.a.a("nm", "ind", "ks", "hd");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.r a(w5.c cVar, l5.i iVar) {
        String str = null;
        int i10 = 0;
        boolean z10 = false;
        r5.h hVar = null;
        while (cVar.hasNext()) {
            int p10 = cVar.p(f52259a);
            if (p10 != 0) {
                if (p10 != 1) {
                    if (p10 != 2) {
                        if (p10 != 3) {
                            cVar.S();
                        } else {
                            z10 = cVar.g();
                        }
                    } else {
                        hVar = d.k(cVar, iVar);
                    }
                } else {
                    i10 = cVar.nextInt();
                }
            } else {
                str = cVar.e1();
            }
        }
        return new s5.r(str, i10, hVar, z10);
    }
}
