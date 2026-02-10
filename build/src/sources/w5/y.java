package w5;

import t5.j;
import x5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class y {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f53316a = c.a.a("nm", "mm", "hd");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static t5.j a(x5.c cVar) {
        String str = null;
        boolean z10 = false;
        j.a aVar = null;
        while (cVar.hasNext()) {
            int p10 = cVar.p(f53316a);
            if (p10 != 0) {
                if (p10 != 1) {
                    if (p10 != 2) {
                        cVar.s();
                        cVar.T();
                    } else {
                        z10 = cVar.g();
                    }
                } else {
                    aVar = j.a.d(cVar.nextInt());
                }
            } else {
                str = cVar.b1();
            }
        }
        return new t5.j(str, aVar, z10);
    }
}
