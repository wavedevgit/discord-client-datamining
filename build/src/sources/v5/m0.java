package v5;

import s5.t;
import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class m0 {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f51852a = c.a.a("s", "e", "o", "nm", "m", "hd");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.t a(w5.c cVar, l5.i iVar) {
        String str = null;
        t.a aVar = null;
        r5.b bVar = null;
        r5.b bVar2 = null;
        r5.b bVar3 = null;
        boolean z10 = false;
        while (cVar.hasNext()) {
            int y10 = cVar.y(f51852a);
            if (y10 != 0) {
                if (y10 != 1) {
                    if (y10 != 2) {
                        if (y10 != 3) {
                            if (y10 != 4) {
                                if (y10 != 5) {
                                    cVar.P();
                                } else {
                                    z10 = cVar.h();
                                }
                            } else {
                                aVar = t.a.d(cVar.nextInt());
                            }
                        } else {
                            str = cVar.f1();
                        }
                    } else {
                        bVar3 = d.f(cVar, iVar, false);
                    }
                } else {
                    bVar2 = d.f(cVar, iVar, false);
                }
            } else {
                bVar = d.f(cVar, iVar, false);
            }
        }
        return new s5.t(str, aVar, bVar, bVar2, bVar3, z10);
    }
}
