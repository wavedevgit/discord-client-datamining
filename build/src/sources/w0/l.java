package w0;

import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
import ys.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class l implements ys.z {

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineContext f52074d;

    /* renamed from: e  reason: collision with root package name */
    private final Function2 f52075e;

    /* renamed from: i  reason: collision with root package name */
    private final CoroutineScope f52076i;

    public l(CoroutineContext coroutineContext, Function2 function2) {
        CoroutineContext coroutineContext2;
        this.f52074d = coroutineContext;
        this.f52075e = function2;
        if (coroutineContext.m(z0.a.f55998d) != null) {
            coroutineContext2 = this;
        } else {
            coroutineContext2 = kotlin.coroutines.e.f32061d;
        }
        this.f52076i = kotlinx.coroutines.i.a(coroutineContext.O0(coroutineContext2));
    }

    @Override // ys.z
    public void N0(CoroutineContext coroutineContext, Throwable th2) {
        android.support.v4.media.session.b.a(coroutineContext.m(z0.a.f55998d));
        ys.z zVar = (ys.z) this.f52074d.m(ys.z.f55835n);
        if (zVar != null) {
            zVar.N0(coroutineContext, th2);
            return;
        }
        throw th2;
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext O0(CoroutineContext coroutineContext) {
        return z.a.d(this, coroutineContext);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext Z0(CoroutineContext.b bVar) {
        return z.a.c(this, bVar);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public Object a1(Object obj, Function2 function2) {
        return z.a.a(this, obj, function2);
    }

    @Override // kotlin.coroutines.CoroutineContext.Element
    public CoroutineContext.b getKey() {
        return ys.z.f55835n;
    }

    @Override // kotlin.coroutines.CoroutineContext.Element, kotlin.coroutines.CoroutineContext
    public CoroutineContext.Element m(CoroutineContext.b bVar) {
        return z.a.b(this, bVar);
    }
}
