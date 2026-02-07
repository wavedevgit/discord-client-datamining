package v5;

import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class f0 {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f52237a = c.a.a("nm", "r", "hd");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.n a(w5.c cVar, l5.i iVar) {
        boolean z10 = false;
        String str = null;
        r5.b bVar = null;
        while (cVar.hasNext()) {
            int p10 = cVar.p(f52237a);
            if (p10 != 0) {
                if (p10 != 1) {
                    if (p10 != 2) {
                        cVar.S();
                    } else {
                        z10 = cVar.g();
                    }
                } else {
                    bVar = d.f(cVar, iVar, true);
                }
            } else {
                str = cVar.e1();
            }
        }
        if (z10) {
            return null;
        }
        return new s5.n(str, bVar);
    }
}
