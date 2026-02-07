package ts;

import kotlin.Result;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d0 {

    /* renamed from: a  reason: collision with root package name */
    private static final StackTraceElement f50866a = new a.a().a();

    /* renamed from: b  reason: collision with root package name */
    private static final String f50867b;

    /* renamed from: c  reason: collision with root package name */
    private static final String f50868c;

    static {
        Object b10;
        Object b11;
        try {
            Result.a aVar = Result.f32053e;
            b10 = Result.b(kotlin.coroutines.jvm.internal.a.class.getCanonicalName());
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f32053e;
            b10 = Result.b(kotlin.c.a(th2));
        }
        if (Result.e(b10) != null) {
            b10 = "kotlin.coroutines.jvm.internal.BaseContinuationImpl";
        }
        f50867b = (String) b10;
        try {
            b11 = Result.b(d0.class.getCanonicalName());
        } catch (Throwable th3) {
            Result.a aVar3 = Result.f32053e;
            b11 = Result.b(kotlin.c.a(th3));
        }
        if (Result.e(b11) != null) {
            b11 = "kotlinx.coroutines.internal.StackTraceRecoveryKt";
        }
        f50868c = (String) b11;
    }

    public static final Throwable a(Throwable th2) {
        return th2;
    }
}
