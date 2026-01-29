package p4;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface j {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public static i a(j jVar, m id2) {
            Intrinsics.checkNotNullParameter(id2, "id");
            return j.super.a(id2);
        }

        public static void b(j jVar, m id2) {
            Intrinsics.checkNotNullParameter(id2, "id");
            j.super.d(id2);
        }
    }

    default i a(m id2) {
        Intrinsics.checkNotNullParameter(id2, "id");
        return b(id2.b(), id2.a());
    }

    i b(String str, int i10);

    List c();

    default void d(m id2) {
        Intrinsics.checkNotNullParameter(id2, "id");
        f(id2.b(), id2.a());
    }

    void e(i iVar);

    void f(String str, int i10);

    void h(String str);
}
