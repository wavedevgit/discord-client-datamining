package kotlin.coroutines;

import java.io.Serializable;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements CoroutineContext, Serializable {
    @NotNull

    /* renamed from: d  reason: collision with root package name */
    public static final e f33356d = new e();

    private e() {
    }

    @Override // kotlin.coroutines.CoroutineContext
    public Object A1(Object obj, Function2 operation) {
        Intrinsics.checkNotNullParameter(operation, "operation");
        return obj;
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext U0(CoroutineContext context) {
        Intrinsics.checkNotNullParameter(context, "context");
        return context;
    }

    public int hashCode() {
        return 0;
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext.Element l(CoroutineContext.b key) {
        Intrinsics.checkNotNullParameter(key, "key");
        return null;
    }

    public String toString() {
        return "EmptyCoroutineContext";
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext x1(CoroutineContext.b key) {
        Intrinsics.checkNotNullParameter(key, "key");
        return this;
    }
}
