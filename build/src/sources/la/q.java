package la;

import com.facebook.common.internal.Supplier;
import la.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class q {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements b0 {
        a() {
        }

        @Override // la.b0
        /* renamed from: b */
        public int a(r8.h hVar) {
            return hVar.size();
        }
    }

    public static n a(Supplier supplier, r8.d dVar, w.a aVar) {
        v vVar = new v(new a(), aVar, supplier, null, false, false);
        dVar.a(vVar);
        return vVar;
    }
}
