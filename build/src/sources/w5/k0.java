package w5;

import x5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class k0 {

    /* renamed from: a  reason: collision with root package name */
    static c.a f52315a = c.a.a("nm", "ind", "ks", "hd");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static t5.r a(x5.c cVar, l5.i iVar) {
        String str = null;
        int i10 = 0;
        boolean z10 = false;
        s5.h hVar = null;
        while (cVar.hasNext()) {
            int p10 = cVar.p(f52315a);
            if (p10 != 0) {
                if (p10 != 1) {
                    if (p10 != 2) {
                        if (p10 != 3) {
                            cVar.T();
                        } else {
                            z10 = cVar.h();
                        }
                    } else {
                        hVar = d.k(cVar, iVar);
                    }
                } else {
                    i10 = cVar.nextInt();
                }
            } else {
                str = cVar.g1();
            }
        }
        return new t5.r(str, i10, hVar, z10);
    }
}
