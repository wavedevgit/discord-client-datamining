package v5;

import java.util.ArrayList;
import w5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f50657a = c.a.a("k", "x", "y");

    public static r5.e a(w5.c cVar, l5.i iVar) {
        ArrayList arrayList = new ArrayList();
        if (cVar.n() == c.b.BEGIN_ARRAY) {
            cVar.u();
            while (cVar.hasNext()) {
                arrayList.add(z.a(cVar, iVar));
            }
            cVar.s();
            u.b(arrayList);
        } else {
            arrayList.add(new y5.a(s.e(cVar, x5.j.e())));
        }
        return new r5.e(arrayList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static r5.m b(w5.c cVar, l5.i iVar) {
        cVar.r();
        r5.e eVar = null;
        r5.b bVar = null;
        boolean z10 = false;
        r5.b bVar2 = null;
        while (cVar.n() != c.b.END_OBJECT) {
            int B = cVar.B(f50657a);
            if (B != 0) {
                if (B != 1) {
                    if (B != 2) {
                        cVar.E();
                        cVar.P();
                    } else if (cVar.n() == c.b.STRING) {
                        cVar.P();
                        z10 = true;
                    } else {
                        bVar = d.e(cVar, iVar);
                    }
                } else if (cVar.n() == c.b.STRING) {
                    cVar.P();
                    z10 = true;
                } else {
                    bVar2 = d.e(cVar, iVar);
                }
            } else {
                eVar = a(cVar, iVar);
            }
        }
        cVar.y();
        if (z10) {
            iVar.a("Lottie doesn't support expressions.");
        }
        if (eVar != null) {
            return eVar;
        }
        return new r5.i(bVar2, bVar);
    }
}
