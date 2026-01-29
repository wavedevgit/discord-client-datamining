package gs;

import kotlin.Result;
import kotlin.coroutines.Continuation;
import kotlinx.coroutines.CancellableContinuation;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class t {
    public static final Object a(Object obj, Continuation continuation) {
        if (obj instanceof r) {
            Result.a aVar = Result.f33279e;
            return Result.b(kotlin.c.a(((r) obj).f27178a));
        }
        return Result.b(obj);
    }

    public static final Object b(Object obj) {
        Throwable e10 = Result.e(obj);
        if (e10 == null) {
            return obj;
        }
        return new r(e10, false, 2, null);
    }

    public static final Object c(Object obj, CancellableContinuation cancellableContinuation) {
        Throwable e10 = Result.e(obj);
        if (e10 == null) {
            return obj;
        }
        return new r(e10, false, 2, null);
    }
}
