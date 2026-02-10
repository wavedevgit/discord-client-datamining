package w5;

import x5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class f0 {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f53264a = c.a.a("nm", "r", "hd");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static t5.n a(x5.c cVar, l5.i iVar) {
        boolean z10 = false;
        String str = null;
        s5.b bVar = null;
        while (cVar.hasNext()) {
            int p10 = cVar.p(f53264a);
            if (p10 != 0) {
                if (p10 != 1) {
                    if (p10 != 2) {
                        cVar.T();
                    } else {
                        z10 = cVar.g();
                    }
                } else {
                    bVar = d.f(cVar, iVar, true);
                }
            } else {
                str = cVar.b1();
            }
        }
        if (z10) {
            return null;
        }
        return new t5.n(str, bVar);
    }
}
