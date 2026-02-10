package ma;

import com.facebook.common.internal.Supplier;
import ma.n;
import ma.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class l implements ma.a {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a implements b0 {
        a() {
        }

        @Override // ma.b0
        /* renamed from: b */
        public int a(ta.e eVar) {
            return eVar.w();
        }
    }

    @Override // ma.a
    public n a(Supplier supplier, s8.d dVar, w.a aVar, boolean z10, boolean z11, n.b bVar) {
        v vVar = new v(new a(), aVar, supplier, bVar, z10, z11);
        dVar.a(vVar);
        return vVar;
    }
}
