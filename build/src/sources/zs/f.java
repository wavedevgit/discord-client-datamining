package zs;

import kotlin.jvm.internal.Intrinsics;
import zs.o;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface f extends o.c {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public static void a(f fVar, h0 padding) {
            Intrinsics.checkNotNullParameter(padding, "padding");
            fVar.v(new bt.e(new u(padding)));
        }

        public static void b(f fVar, h0 padding) {
            Intrinsics.checkNotNullParameter(padding, "padding");
            fVar.v(new bt.e(new c0(padding)));
        }

        public static void c(f fVar, h0 padding) {
            Intrinsics.checkNotNullParameter(padding, "padding");
            fVar.v(new bt.e(new i0(padding)));
        }

        public static void d(f fVar, int i10, int i11) {
            fVar.v(new bt.e(new t(i10, i11, null, 4, null)));
        }
    }

    void v(bt.o oVar);
}
