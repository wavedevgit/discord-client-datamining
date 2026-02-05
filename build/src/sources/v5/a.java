package v5;

import java.util.ArrayList;
import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f51811a = c.a.a("k", "x", "y");

    public static r5.e a(w5.c cVar, l5.i iVar) {
        ArrayList arrayList = new ArrayList();
        if (cVar.m() == c.b.BEGIN_ARRAY) {
            cVar.v();
            while (cVar.hasNext()) {
                arrayList.add(z.a(cVar, iVar));
            }
            cVar.t();
            u.b(arrayList);
        } else {
            arrayList.add(new y5.a(s.e(cVar, x5.j.e())));
        }
        return new r5.e(arrayList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static r5.m b(w5.c cVar, l5.i iVar) {
        cVar.s();
        r5.e eVar = null;
        r5.b bVar = null;
        boolean z10 = false;
        r5.b bVar2 = null;
        while (cVar.m() != c.b.END_OBJECT) {
            int y10 = cVar.y(f51811a);
            if (y10 != 0) {
                if (y10 != 1) {
                    if (y10 != 2) {
                        cVar.E();
                        cVar.P();
                    } else if (cVar.m() == c.b.STRING) {
                        cVar.P();
                        z10 = true;
                    } else {
                        bVar = d.e(cVar, iVar);
                    }
                } else if (cVar.m() == c.b.STRING) {
                    cVar.P();
                    z10 = true;
                } else {
                    bVar2 = d.e(cVar, iVar);
                }
            } else {
                eVar = a(cVar, iVar);
            }
        }
        cVar.z();
        if (z10) {
            iVar.a("Lottie doesn't support expressions.");
        }
        if (eVar != null) {
            return eVar;
        }
        return new r5.i(bVar2, bVar);
    }
}
