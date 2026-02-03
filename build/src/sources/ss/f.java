package ss;

import kotlin.jvm.internal.Intrinsics;
import ss.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface f extends o.c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static void a(f fVar, h0 padding) {
            Intrinsics.checkNotNullParameter(padding, "padding");
            fVar.h(new us.e(new u(padding)));
        }

        public static void b(f fVar, h0 padding) {
            Intrinsics.checkNotNullParameter(padding, "padding");
            fVar.h(new us.e(new c0(padding)));
        }

        public static void c(f fVar, h0 padding) {
            Intrinsics.checkNotNullParameter(padding, "padding");
            fVar.h(new us.e(new i0(padding)));
        }

        public static void d(f fVar, int i10, int i11) {
            fVar.h(new us.e(new t(i10, i11, null, 4, null)));
        }
    }

    void h(us.o oVar);
}
