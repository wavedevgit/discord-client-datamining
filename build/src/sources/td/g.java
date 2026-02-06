package td;

import com.google.android.exoplayer2.upstream.a;
import java.util.Map;
import ud.i;
import ud.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class g {
    public static com.google.android.exoplayer2.upstream.a a(j jVar, String str, i iVar, int i10, Map map) {
        return new a.b().i(iVar.b(str)).h(iVar.f51362a).g(iVar.f51363b).f(b(jVar, iVar)).b(i10).e(map).a();
    }

    public static String b(j jVar, i iVar) {
        String k10 = jVar.k();
        if (k10 != null) {
            return k10;
        }
        return iVar.b(((ud.b) jVar.f51368c.get(0)).f51313a).toString();
    }
}
