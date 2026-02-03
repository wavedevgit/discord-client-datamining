package bt;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class m {

    /* renamed from: a  reason: collision with root package name */
    private static final boolean f7652a;

    static {
        boolean z10;
        try {
            Class.forName("java.lang.ClassValue");
            z10 = true;
        } catch (Throwable unused) {
            z10 = false;
        }
        f7652a = z10;
    }

    public static final k2 a(Function1 factory) {
        Intrinsics.checkNotNullParameter(factory, "factory");
        if (f7652a) {
            return new p(factory);
        }
        return new u(factory);
    }

    public static final s1 b(Function2 factory) {
        Intrinsics.checkNotNullParameter(factory, "factory");
        if (f7652a) {
            return new q(factory);
        }
        return new v(factory);
    }
}
