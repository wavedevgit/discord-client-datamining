package xs;

import kotlin.jvm.internal.Intrinsics;
import xs.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface c extends o.a {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static void a(c cVar, n format) {
            Intrinsics.checkNotNullParameter(format, "format");
            if (format instanceof y) {
                cVar.l(((y) format).b());
            }
        }

        public static void b(c cVar, h0 padding) {
            Intrinsics.checkNotNullParameter(padding, "padding");
            cVar.l(new zs.e(new q(padding)));
        }

        public static void c(c cVar, s names) {
            Intrinsics.checkNotNullParameter(names, "names");
            cVar.l(new zs.e(new r(names)));
        }

        public static void d(c cVar, f0 names) {
            Intrinsics.checkNotNullParameter(names, "names");
            cVar.l(new zs.e(new e0(names)));
        }

        public static void e(c cVar, h0 padding) {
            Intrinsics.checkNotNullParameter(padding, "padding");
            cVar.l(new zs.e(new d0(padding)));
        }

        public static void f(c cVar, h0 padding) {
            Intrinsics.checkNotNullParameter(padding, "padding");
            cVar.l(new zs.e(new t0(padding, false, 2, null)));
        }
    }

    void l(zs.o oVar);
}
