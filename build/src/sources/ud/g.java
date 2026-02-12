package ud;

import com.google.android.exoplayer2.upstream.a;
import java.util.Map;
import vd.i;
import vd.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class g {
    public static com.google.android.exoplayer2.upstream.a a(j jVar, String str, i iVar, int i10, Map map) {
        return new a.b().i(iVar.b(str)).h(iVar.f51513a).g(iVar.f51514b).f(b(jVar, iVar)).b(i10).e(map).a();
    }

    public static String b(j jVar, i iVar) {
        String k10 = jVar.k();
        if (k10 != null) {
            return k10;
        }
        return iVar.b(((vd.b) jVar.f51519c.get(0)).f51464a).toString();
    }
}
