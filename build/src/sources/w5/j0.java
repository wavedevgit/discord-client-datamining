package w5;

import java.util.ArrayList;
import x5.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class j0 {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f53278a = c.a.a("nm", "hd", "it");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static t5.q a(x5.c cVar, l5.i iVar) {
        ArrayList arrayList = new ArrayList();
        String str = null;
        boolean z10 = false;
        while (cVar.hasNext()) {
            int p10 = cVar.p(f53278a);
            if (p10 != 0) {
                if (p10 != 1) {
                    if (p10 != 2) {
                        cVar.T();
                    } else {
                        cVar.x();
                        while (cVar.hasNext()) {
                            t5.c a10 = h.a(cVar, iVar);
                            if (a10 != null) {
                                arrayList.add(a10);
                            }
                        }
                        cVar.v();
                    }
                } else {
                    z10 = cVar.g();
                }
            } else {
                str = cVar.b1();
            }
        }
        return new t5.q(str, arrayList, z10);
    }
}
