package w5;

import java.util.ArrayList;
import x5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static final c.a f52848a = c.a.a("k", "x", "y");

    public static s5.e a(x5.c cVar, l5.i iVar) {
        ArrayList arrayList = new ArrayList();
        if (cVar.m() == c.b.BEGIN_ARRAY) {
            cVar.x();
            while (cVar.hasNext()) {
                arrayList.add(z.a(cVar, iVar));
            }
            cVar.v();
            u.b(arrayList);
        } else {
            arrayList.add(new z5.a(s.e(cVar, y5.j.e())));
        }
        return new s5.e(arrayList);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static s5.o b(x5.c cVar, l5.i iVar) {
        cVar.u();
        s5.e eVar = null;
        s5.b bVar = null;
        boolean z10 = false;
        s5.b bVar2 = null;
        while (cVar.m() != c.b.END_OBJECT) {
            int p10 = cVar.p(f52848a);
            if (p10 != 0) {
                if (p10 != 1) {
                    if (p10 != 2) {
                        cVar.s();
                        cVar.T();
                    } else if (cVar.m() == c.b.STRING) {
                        cVar.T();
                        z10 = true;
                    } else {
                        bVar = d.e(cVar, iVar);
                    }
                } else if (cVar.m() == c.b.STRING) {
                    cVar.T();
                    z10 = true;
                } else {
                    bVar2 = d.e(cVar, iVar);
                }
            } else {
                eVar = a(cVar, iVar);
            }
        }
        cVar.D();
        if (z10) {
            iVar.a("Lottie doesn't support expressions.");
        }
        if (eVar != null) {
            return eVar;
        }
        return new s5.i(bVar2, bVar);
    }
}
