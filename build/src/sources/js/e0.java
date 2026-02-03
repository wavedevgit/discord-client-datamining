package js;

import kotlin.Result;
import kotlin.coroutines.Continuation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e0 {
    public static final String a(Object obj) {
        return obj.getClass().getSimpleName();
    }

    public static final String b(Object obj) {
        return Integer.toHexString(System.identityHashCode(obj));
    }

    public static final String c(Continuation continuation) {
        String b10;
        if (continuation instanceof os.i) {
            return ((os.i) continuation).toString();
        }
        try {
            Result.a aVar = Result.f32461e;
            b10 = Result.b(continuation + '@' + b(continuation));
        } catch (Throwable th2) {
            Result.a aVar2 = Result.f32461e;
            b10 = Result.b(kotlin.c.a(th2));
        }
        if (Result.e(b10) != null) {
            b10 = continuation.getClass().getName() + '@' + b(continuation);
        }
        return (String) b10;
    }
}
