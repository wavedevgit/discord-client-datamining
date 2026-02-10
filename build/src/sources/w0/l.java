package w0;

import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
import ps.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class l implements ps.z {

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineContext f53045d;

    /* renamed from: e  reason: collision with root package name */
    private final Function2 f53046e;

    /* renamed from: i  reason: collision with root package name */
    private final CoroutineScope f53047i;

    public l(CoroutineContext coroutineContext, Function2 function2) {
        CoroutineContext coroutineContext2;
        this.f53045d = coroutineContext;
        this.f53046e = function2;
        if (coroutineContext.m(z0.a.f55959d) != null) {
            coroutineContext2 = this;
        } else {
            coroutineContext2 = kotlin.coroutines.e.f31839d;
        }
        this.f53047i = kotlinx.coroutines.i.a(coroutineContext.V0(coroutineContext2));
    }

    @Override // ps.z
    public void O0(CoroutineContext coroutineContext, Throwable th2) {
        android.support.v4.media.session.b.a(coroutineContext.m(z0.a.f55959d));
        ps.z zVar = (ps.z) this.f53045d.m(ps.z.f44549j);
        if (zVar != null) {
            zVar.O0(coroutineContext, th2);
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
        return ps.z.f44549j;
    }

    @Override // kotlin.coroutines.CoroutineContext.Element, kotlin.coroutines.CoroutineContext
    public CoroutineContext.Element m(CoroutineContext.b bVar) {
        return z.a.b(this, bVar);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext s1(CoroutineContext.b bVar) {
        return z.a.c(this, bVar);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public Object u1(Object obj, Function2 function2) {
        return z.a.a(this, obj, function2);
    }
}
