package kotlin.coroutines;

import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a implements CoroutineContext.Element {

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineContext.b f32531d;

    public a(CoroutineContext.b key) {
        Intrinsics.checkNotNullParameter(key, "key");
        this.f32531d = key;
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext V0(CoroutineContext coroutineContext) {
        return CoroutineContext.Element.a.d(this, coroutineContext);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext e1(CoroutineContext.b bVar) {
        return CoroutineContext.Element.a.c(this, bVar);
    }

    @Override // kotlin.coroutines.CoroutineContext.Element
    public CoroutineContext.b getKey() {
        return this.f32531d;
    }

    @Override // kotlin.coroutines.CoroutineContext.Element, kotlin.coroutines.CoroutineContext
    public CoroutineContext.Element l(CoroutineContext.b bVar) {
        return CoroutineContext.Element.a.b(this, bVar);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public Object y1(Object obj, Function2 function2) {
        return CoroutineContext.Element.a.a(this, obj, function2);
    }
}
