package fs;

import kotlin.Result;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b {
    static {
        Object b10;
        try {
            Result.a aVar = Result.f32461e;
            b10 = Result.b(Class.forName("java.lang.ClassValue"));
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f32461e;
            b10 = Result.b(kotlin.c.a(th2));
        }
        if (Result.h(b10)) {
            Class cls = (Class) b10;
            b10 = Boolean.TRUE;
        }
        Object b11 = Result.b(b10);
        Boolean bool = Boolean.FALSE;
        if (Result.g(b11)) {
            b11 = bool;
        }
        ((Boolean) b11).getClass();
    }

    public static final a a(Function1 compute) {
        Intrinsics.checkNotNullParameter(compute, "compute");
        return new i(compute);
    }
}
