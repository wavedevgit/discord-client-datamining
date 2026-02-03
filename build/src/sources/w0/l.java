package w0;

import hs.z;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class l implements hs.z {

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineContext f51590d;

    /* renamed from: e  reason: collision with root package name */
    private final Function2 f51591e;

    /* renamed from: i  reason: collision with root package name */
    private final CoroutineScope f51592i;

    public l(CoroutineContext coroutineContext, Function2 function2) {
        CoroutineContext coroutineContext2;
        this.f51590d = coroutineContext;
        this.f51591e = function2;
        if (coroutineContext.l(z0.a.f55360d) != null) {
            coroutineContext2 = this;
        } else {
            coroutineContext2 = kotlin.coroutines.e.f33148d;
        }
        this.f51592i = kotlinx.coroutines.i.a(coroutineContext.Z0(coroutineContext2));
    }

    @Override // kotlin.coroutines.CoroutineContext
    public Object A1(Object obj, Function2 function2) {
        return z.a.a(this, obj, function2);
    }

    @Override // hs.z
    public void V0(CoroutineContext coroutineContext, Throwable th2) {
        android.support.v4.media.session.b.a(coroutineContext.l(z0.a.f55360d));
        hs.z zVar = (hs.z) this.f51590d.l(hs.z.f27960f);
        if (zVar != null) {
            zVar.V0(coroutineContext, th2);
            return;
        }
        throw th2;
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext Z0(CoroutineContext coroutineContext) {
        return z.a.d(this, coroutineContext);
    }

    @Override // kotlin.coroutines.CoroutineContext.Element
    public CoroutineContext.b getKey() {
        return hs.z.f27960f;
    }

    @Override // kotlin.coroutines.CoroutineContext.Element, kotlin.coroutines.CoroutineContext
    public CoroutineContext.Element l(CoroutineContext.b bVar) {
        return z.a.b(this, bVar);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext y1(CoroutineContext.b bVar) {
        return z.a.c(this, bVar);
    }
}
