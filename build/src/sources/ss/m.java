package ss;

import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m implements CoroutineContext {

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ CoroutineContext f50137d;

    /* renamed from: e  reason: collision with root package name */
    public final Throwable f50138e;

    public m(Throwable th2, CoroutineContext coroutineContext) {
        this.f50137d = coroutineContext;
        this.f50138e = th2;
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext Y0(CoroutineContext coroutineContext) {
        return this.f50137d.Y0(coroutineContext);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext.Element m(CoroutineContext.b bVar) {
        return this.f50137d.m(bVar);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext x1(CoroutineContext.b bVar) {
        return this.f50137d.x1(bVar);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public Object z1(Object obj, Function2 function2) {
        return this.f50137d.z1(obj, function2);
    }
}
