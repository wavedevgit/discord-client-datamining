package v5;

import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class f0 {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f51824a = c.a.a("nm", "r", "hd");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.n a(w5.c cVar, l5.i iVar) {
        boolean z10 = false;
        String str = null;
        r5.b bVar = null;
        while (cVar.hasNext()) {
            int y10 = cVar.y(f51824a);
            if (y10 != 0) {
                if (y10 != 1) {
                    if (y10 != 2) {
                        cVar.P();
                    } else {
                        z10 = cVar.h();
                    }
                } else {
                    bVar = d.f(cVar, iVar, true);
                }
            } else {
                str = cVar.f1();
            }
        }
        if (z10) {
            return null;
        }
        return new s5.n(str, bVar);
    }
}
