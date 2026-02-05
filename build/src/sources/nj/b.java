package nj;

import com.google.firebase.components.ComponentRegistrar;
import java.util.ArrayList;
import java.util.List;
import ti.d;
import ti.g;
import ti.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b implements i {
    public static /* synthetic */ Object b(String str, ti.c cVar, d dVar) {
        try {
            c.b(str);
            return cVar.h().a(dVar);
        } finally {
            c.a();
        }
    }

    @Override // ti.i
    public List a(ComponentRegistrar componentRegistrar) {
        ArrayList arrayList = new ArrayList();
        for (final ti.c cVar : componentRegistrar.getComponents()) {
            final String i10 = cVar.i();
            if (i10 != null) {
                cVar = cVar.r(new g() { // from class: nj.a
                    @Override // ti.g
                    public final Object a(d dVar) {
                        return b.b(i10, cVar, dVar);
                    }
                });
            }
            arrayList.add(cVar);
        }
        return arrayList;
    }
}
