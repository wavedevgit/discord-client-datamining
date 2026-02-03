package kotlinx.serialization.descriptors;

import at.k;
import java.util.List;
import kotlin.collections.CollectionsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface SerialDescriptor {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static List a(SerialDescriptor serialDescriptor) {
            return CollectionsKt.l();
        }

        public static boolean b(SerialDescriptor serialDescriptor) {
            return false;
        }

        public static boolean c(SerialDescriptor serialDescriptor) {
            return false;
        }
    }

    boolean b();

    int c(String str);

    int d();

    String e(int i10);

    List f(int i10);

    SerialDescriptor g(int i10);

    List getAnnotations();

    k getKind();

    String h();

    boolean i(int i10);

    boolean isInline();
}
