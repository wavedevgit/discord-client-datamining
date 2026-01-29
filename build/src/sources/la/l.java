package la;

import com.facebook.common.internal.Supplier;
import la.n;
import la.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class l implements la.a {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements b0 {
        a() {
        }

        @Override // la.b0
        /* renamed from: b */
        public int a(sa.e eVar) {
            return eVar.t();
        }
    }

    @Override // la.a
    public n a(Supplier supplier, r8.d dVar, w.a aVar, boolean z10, boolean z11, n.b bVar) {
        v vVar = new v(new a(), aVar, supplier, bVar, z10, z11);
        dVar.a(vVar);
        return vVar;
    }
}
