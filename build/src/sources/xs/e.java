package xs;

import kotlin.jvm.internal.Intrinsics;
import xs.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface e extends o.d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static void a(e eVar, n format) {
            Intrinsics.checkNotNullParameter(format, "format");
            if (format instanceof o0) {
                eVar.o(((o0) format).b());
            }
        }

        public static void b(e eVar, h0 padding) {
            Intrinsics.checkNotNullParameter(padding, "padding");
            eVar.o(new zs.y(new zs.e(new s0(padding)), true));
        }

        public static void c(e eVar, h0 padding) {
            Intrinsics.checkNotNullParameter(padding, "padding");
            eVar.o(new zs.e(new q0(padding)));
        }

        public static void d(e eVar, h0 padding) {
            Intrinsics.checkNotNullParameter(padding, "padding");
            eVar.o(new zs.e(new r0(padding)));
        }
    }

    void o(zs.o oVar);
}
