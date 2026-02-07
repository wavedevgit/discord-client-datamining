package mp;

import java.util.List;
import kotlin.collections.CollectionsKt;
import mp.a1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface z {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public static a1.b a(z zVar) {
            return (a1.b) CollectionsKt.o0(zVar.c());
        }

        public static r0 b(z zVar) {
            a1.b h10 = zVar.h();
            if (h10 == null) {
                return r0.f37682p.a();
            }
            return zVar.d().a(h10);
        }

        public static a1.b c(z zVar) {
            return (a1.b) CollectionsKt.firstOrNull(zVar.c());
        }
    }

    boolean a();

    List c();

    s0 d();

    a1.b e();

    r0 f();

    a1.b h();

    boolean l();
}
