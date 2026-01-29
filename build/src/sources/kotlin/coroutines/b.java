package kotlin.coroutines;

import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b implements CoroutineContext.b {

    /* renamed from: d  reason: collision with root package name */
    private final Function1 f33350d;

    /* renamed from: e  reason: collision with root package name */
    private final CoroutineContext.b f33351e;

    public b(CoroutineContext.b baseKey, Function1 safeCast) {
        Intrinsics.checkNotNullParameter(baseKey, "baseKey");
        Intrinsics.checkNotNullParameter(safeCast, "safeCast");
        this.f33350d = safeCast;
        this.f33351e = baseKey instanceof b ? ((b) baseKey).f33351e : baseKey;
    }

    public final boolean a(CoroutineContext.b key) {
        Intrinsics.checkNotNullParameter(key, "key");
        if (key != this && this.f33351e != key) {
            return false;
        }
        return true;
    }

    public final CoroutineContext.Element b(CoroutineContext.Element element) {
        Intrinsics.checkNotNullParameter(element, "element");
        return (CoroutineContext.Element) this.f33350d.invoke(element);
    }
}
