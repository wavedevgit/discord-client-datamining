package v5;

import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class k0 {

    /* renamed from: a  reason: collision with root package name */
    static c.a f51846a = c.a.a("nm", "ind", "ks", "hd");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.r a(w5.c cVar, l5.i iVar) {
        String str = null;
        int i10 = 0;
        boolean z10 = false;
        r5.h hVar = null;
        while (cVar.hasNext()) {
            int y10 = cVar.y(f51846a);
            if (y10 != 0) {
                if (y10 != 1) {
                    if (y10 != 2) {
                        if (y10 != 3) {
                            cVar.P();
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
                str = cVar.f1();
            }
        }
        return new s5.r(str, i10, hVar, z10);
    }
}
