package v5;

import s5.j;
import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class y {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f52289a = c.a.a("nm", "mm", "hd");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.j a(w5.c cVar) {
        String str = null;
        boolean z10 = false;
        j.a aVar = null;
        while (cVar.hasNext()) {
            int p10 = cVar.p(f52289a);
            if (p10 != 0) {
                if (p10 != 1) {
                    if (p10 != 2) {
                        cVar.s();
                        cVar.S();
                    } else {
                        z10 = cVar.g();
                    }
                } else {
                    aVar = j.a.d(cVar.nextInt());
                }
            } else {
                str = cVar.e1();
            }
        }
        return new s5.j(str, aVar, z10);
    }
}
