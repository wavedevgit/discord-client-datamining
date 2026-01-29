package w0;

import gs.z;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class l implements gs.z {

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineContext f52007d;

    /* renamed from: e  reason: collision with root package name */
    private final Function2 f52008e;

    /* renamed from: i  reason: collision with root package name */
    private final CoroutineScope f52009i;

    public l(CoroutineContext coroutineContext, Function2 function2) {
        CoroutineContext coroutineContext2;
        this.f52007d = coroutineContext;
        this.f52008e = function2;
        if (coroutineContext.l(z0.a.f55212d) != null) {
            coroutineContext2 = this;
        } else {
            coroutineContext2 = kotlin.coroutines.e.f33356d;
        }
        this.f52009i = kotlinx.coroutines.i.a(coroutineContext.U0(coroutineContext2));
    }

    @Override // kotlin.coroutines.CoroutineContext
    public Object A1(Object obj, Function2 function2) {
        return z.a.a(this, obj, function2);
    }

    @Override // gs.z
    public void R0(CoroutineContext coroutineContext, Throwable th2) {
        android.support.v4.media.session.b.a(coroutineContext.l(z0.a.f55212d));
        gs.z zVar = (gs.z) this.f52007d.l(gs.z.f27197f);
        if (zVar != null) {
            zVar.R0(coroutineContext, th2);
            return;
        }
        throw th2;
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext U0(CoroutineContext coroutineContext) {
        return z.a.d(this, coroutineContext);
    }

    @Override // kotlin.coroutines.CoroutineContext.Element
    public CoroutineContext.b getKey() {
        return gs.z.f27197f;
    }

    @Override // kotlin.coroutines.CoroutineContext.Element, kotlin.coroutines.CoroutineContext
    public CoroutineContext.Element l(CoroutineContext.b bVar) {
        return z.a.b(this, bVar);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext x1(CoroutineContext.b bVar) {
        return z.a.c(this, bVar);
    }
}
