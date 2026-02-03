package is;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
abstract class b {
    public static final void a(long j10, byte[] dst, int i10, int i11, int i12) {
        Intrinsics.checkNotNullParameter(dst, "dst");
        c.f(j10, dst, i10, i11, i12);
    }

    public static final a b(String hexString) {
        Intrinsics.checkNotNullParameter(hexString, "hexString");
        return c.h(hexString);
    }

    public static final a c(String hexDashString) {
        Intrinsics.checkNotNullParameter(hexDashString, "hexDashString");
        return c.i(hexDashString);
    }
}
