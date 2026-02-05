package w0;

import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
import ms.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class l implements ms.z {

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineContext f52466d;

    /* renamed from: e  reason: collision with root package name */
    private final Function2 f52467e;

    /* renamed from: i  reason: collision with root package name */
    private final CoroutineScope f52468i;

    public l(CoroutineContext coroutineContext, Function2 function2) {
        CoroutineContext coroutineContext2;
        this.f52466d = coroutineContext;
        this.f52467e = function2;
        if (coroutineContext.k(z0.a.f55084d) != null) {
            coroutineContext2 = this;
        } else {
            coroutineContext2 = kotlin.coroutines.e.f32062d;
        }
        this.f52468i = kotlinx.coroutines.i.a(coroutineContext.V0(coroutineContext2));
    }

    @Override // kotlin.coroutines.CoroutineContext
    public Object A1(Object obj, Function2 function2) {
        return z.a.a(this, obj, function2);
    }

    @Override // ms.z
    public void S0(CoroutineContext coroutineContext, Throwable th2) {
        android.support.v4.media.session.b.a(coroutineContext.k(z0.a.f55084d));
        ms.z zVar = (ms.z) this.f52466d.k(ms.z.f38962j);
        if (zVar != null) {
            zVar.S0(coroutineContext, th2);
            return;
        }
        throw th2;
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext V0(CoroutineContext coroutineContext) {
        return z.a.d(this, coroutineContext);
    }

    @Override // kotlin.coroutines.CoroutineContext.Element
    public CoroutineContext.b getKey() {
        return ms.z.f38962j;
    }

    @Override // kotlin.coroutines.CoroutineContext.Element, kotlin.coroutines.CoroutineContext
    public CoroutineContext.Element k(CoroutineContext.b bVar) {
        return z.a.b(this, bVar);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext x1(CoroutineContext.b bVar) {
        return z.a.c(this, bVar);
    }
}
