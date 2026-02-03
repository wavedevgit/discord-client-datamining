package v5;

import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f50799a = c.a.a("a");

    /* renamed from: b  reason: collision with root package name */
    private static final c.a f50800b = c.a.a("fc", "sc", "sw", "t");

    public static r5.k a(w5.c cVar, l5.i iVar) {
        cVar.r();
        r5.k kVar = null;
        while (cVar.hasNext()) {
            if (cVar.B(f50799a) != 0) {
                cVar.E();
                cVar.P();
            } else {
                kVar = b(cVar, iVar);
            }
        }
        cVar.y();
        if (kVar == null) {
            return new r5.k(null, null, null, null);
        }
        return kVar;
    }

    private static r5.k b(w5.c cVar, l5.i iVar) {
        cVar.r();
        r5.a aVar = null;
        r5.a aVar2 = null;
        r5.b bVar = null;
        r5.b bVar2 = null;
        while (cVar.hasNext()) {
            int B = cVar.B(f50800b);
            if (B != 0) {
                if (B != 1) {
                    if (B != 2) {
                        if (B != 3) {
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
        cVar.y();
        return new r5.k(aVar, aVar2, bVar, bVar2);
    }
}
