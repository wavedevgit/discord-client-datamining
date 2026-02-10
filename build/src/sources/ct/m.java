package ct;

import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m implements CoroutineContext {

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ CoroutineContext f21087d;

    /* renamed from: e  reason: collision with root package name */
    public final Throwable f21088e;

    public m(Throwable th2, CoroutineContext coroutineContext) {
        this.f21087d = coroutineContext;
        this.f21088e = th2;
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext O0(CoroutineContext coroutineContext) {
        return this.f21087d.O0(coroutineContext);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext Z0(CoroutineContext.b bVar) {
        return this.f21087d.Z0(bVar);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public Object a1(Object obj, Function2 function2) {
        return this.f21087d.a1(obj, function2);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext.Element m(CoroutineContext.b bVar) {
        return this.f21087d.m(bVar);
    }
}
