package us;

import kotlin.jvm.internal.Intrinsics;
import us.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface e extends o.d {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static void a(e eVar, n format) {
            Intrinsics.checkNotNullParameter(format, "format");
            if (format instanceof o0) {
                eVar.s(((o0) format).b());
            }
        }

        public static void b(e eVar, h0 padding) {
            Intrinsics.checkNotNullParameter(padding, "padding");
            eVar.s(new ws.y(new ws.e(new s0(padding)), true));
        }

        public static void c(e eVar, h0 padding) {
            Intrinsics.checkNotNullParameter(padding, "padding");
            eVar.s(new ws.e(new q0(padding)));
        }

        public static void d(e eVar, h0 padding) {
            Intrinsics.checkNotNullParameter(padding, "padding");
            eVar.s(new ws.e(new r0(padding)));
        }
    }

    void s(ws.o oVar);
}
