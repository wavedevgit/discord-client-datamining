package v5;

import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f51813a = c.a.a("a");

    /* renamed from: b  reason: collision with root package name */
    private static final c.a f51814b = c.a.a("fc", "sc", "sw", "t");

    public static r5.k a(w5.c cVar, l5.i iVar) {
        cVar.s();
        r5.k kVar = null;
        while (cVar.hasNext()) {
            if (cVar.y(f51813a) != 0) {
                cVar.E();
                cVar.P();
            } else {
                kVar = b(cVar, iVar);
            }
        }
        cVar.z();
        if (kVar == null) {
            return new r5.k(null, null, null, null);
        }
        return kVar;
    }

    private static r5.k b(w5.c cVar, l5.i iVar) {
        cVar.s();
        r5.a aVar = null;
        r5.a aVar2 = null;
        r5.b bVar = null;
        r5.b bVar2 = null;
        while (cVar.hasNext()) {
            int y10 = cVar.y(f51814b);
            if (y10 != 0) {
                if (y10 != 1) {
                    if (y10 != 2) {
                        if (y10 != 3) {
                            cVar.E();
                            cVar.P();
                        } else {
                            bVar2 = d.e(cVar, iVar);
                        }
                    } else {
                        bVar = d.e(cVar, iVar);
                    }
                } else {
                    aVar2 = d.c(cVar, iVar);
                }
            } else {
                aVar = d.c(cVar, iVar);
            }
        }
        cVar.z();
        return new r5.k(aVar, aVar2, bVar, bVar2);
    }
}
