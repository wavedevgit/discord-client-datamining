package v5;

import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f52226a = c.a.a("a");

    /* renamed from: b  reason: collision with root package name */
    private static final c.a f52227b = c.a.a("fc", "sc", "sw", "t");

    public static r5.k a(w5.c cVar, l5.i iVar) {
        cVar.u();
        r5.k kVar = null;
        while (cVar.hasNext()) {
            if (cVar.p(f52226a) != 0) {
                cVar.s();
                cVar.S();
            } else {
                kVar = b(cVar, iVar);
            }
        }
        cVar.D();
        if (kVar == null) {
            return new r5.k(null, null, null, null);
        }
        return kVar;
    }

    private static r5.k b(w5.c cVar, l5.i iVar) {
        cVar.u();
        r5.a aVar = null;
        r5.a aVar2 = null;
        r5.b bVar = null;
        r5.b bVar2 = null;
        while (cVar.hasNext()) {
            int p10 = cVar.p(f52227b);
            if (p10 != 0) {
                if (p10 != 1) {
                    if (p10 != 2) {
                        if (p10 != 3) {
                            cVar.s();
                            cVar.S();
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
        cVar.D();
        return new r5.k(aVar, aVar2, bVar, bVar2);
    }
}
