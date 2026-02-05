package v5;

import java.util.ArrayList;
import w5.c;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class j0 {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f51838a = c.a.a("nm", "hd", "it");

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.q a(w5.c cVar, l5.i iVar) {
        ArrayList arrayList = new ArrayList();
        String str = null;
        boolean z10 = false;
        while (cVar.hasNext()) {
            int y10 = cVar.y(f51838a);
            if (y10 != 0) {
                if (y10 != 1) {
                    if (y10 != 2) {
                        cVar.P();
                    } else {
                        cVar.v();
                        while (cVar.hasNext()) {
                            s5.c a10 = h.a(cVar, iVar);
                            if (a10 != null) {
                                arrayList.add(a10);
                            }
                        }
                        cVar.t();
                    }
                } else {
                    z10 = cVar.h();
                }
            } else {
                str = cVar.f1();
            }
        }
        return new s5.q(str, arrayList, z10);
    }
}
