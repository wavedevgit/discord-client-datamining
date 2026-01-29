package ep;

import ep.a1;
import java.util.List;
import kotlin.collections.CollectionsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public interface z {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public static a1.b a(z zVar) {
            return (a1.b) CollectionsKt.o0(zVar.c());
        }

        public static r0 b(z zVar) {
            a1.b g10 = zVar.g();
            if (g10 == null) {
                return r0.f23359p.a();
            }
            return zVar.d().a(g10);
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

    a1.b g();

    boolean k();
}
