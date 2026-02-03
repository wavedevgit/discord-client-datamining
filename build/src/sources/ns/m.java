package ns;

import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m implements CoroutineContext {

    /* renamed from: d  reason: collision with root package name */
    private final /* synthetic */ CoroutineContext f42005d;

    /* renamed from: e  reason: collision with root package name */
    public final Throwable f42006e;

    public m(Throwable th2, CoroutineContext coroutineContext) {
        this.f42005d = coroutineContext;
        this.f42006e = th2;
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext V0(CoroutineContext coroutineContext) {
        return this.f42005d.V0(coroutineContext);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext e1(CoroutineContext.b bVar) {
        return this.f42005d.e1(bVar);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext.Element l(CoroutineContext.b bVar) {
        return this.f42005d.l(bVar);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public Object y1(Object obj, Function2 function2) {
        return this.f42005d.y1(obj, function2);
    }
}
