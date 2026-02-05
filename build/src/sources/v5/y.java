package v5;

import s5.j;
import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class y {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f51876a = c.a.a("nm", "mm", "hd");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.j a(w5.c cVar) {
        String str = null;
        boolean z10 = false;
        j.a aVar = null;
        while (cVar.hasNext()) {
            int y10 = cVar.y(f51876a);
            if (y10 != 0) {
                if (y10 != 1) {
                    if (y10 != 2) {
                        cVar.E();
                        cVar.P();
                    } else {
                        z10 = cVar.h();
                    }
                } else {
                    aVar = j.a.d(cVar.nextInt());
                }
            } else {
                str = cVar.f1();
            }
        }
        return new s5.j(str, aVar, z10);
    }
}
