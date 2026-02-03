package ls;

import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m implements CoroutineContext {

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ CoroutineContext f37605d;

    /* renamed from: e  reason: collision with root package name */
    public final Throwable f37606e;

    public m(Throwable th2, CoroutineContext coroutineContext) {
        this.f37605d = coroutineContext;
        this.f37606e = th2;
    }

    @Override // kotlin.coroutines.CoroutineContext
    public Object A1(Object obj, Function2 function2) {
        return this.f37605d.A1(obj, function2);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext Z0(CoroutineContext coroutineContext) {
        return this.f37605d.Z0(coroutineContext);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext.Element l(CoroutineContext.b bVar) {
        return this.f37605d.l(bVar);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext y1(CoroutineContext.b bVar) {
        return this.f37605d.y1(bVar);
    }
}
