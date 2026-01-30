package w0;

import gs.z;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class l implements gs.z {

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineContext f52023d;

    /* renamed from: e  reason: collision with root package name */
    private final Function2 f52024e;

    /* renamed from: i  reason: collision with root package name */
    private final CoroutineScope f52025i;

    public l(CoroutineContext coroutineContext, Function2 function2) {
        CoroutineContext coroutineContext2;
        this.f52023d = coroutineContext;
        this.f52024e = function2;
        if (coroutineContext.l(z0.a.f55228d) != null) {
            coroutineContext2 = this;
        } else {
            coroutineContext2 = kotlin.coroutines.e.f33372d;
        }
        this.f52025i = kotlinx.coroutines.i.a(coroutineContext.U0(coroutineContext2));
    }

    @Override // kotlin.coroutines.CoroutineContext
    public Object A1(Object obj, Function2 function2) {
        return z.a.a(this, obj, function2);
    }

    @Override // gs.z
    public void R0(CoroutineContext coroutineContext, Throwable th2) {
        android.support.v4.media.session.b.a(coroutineContext.l(z0.a.f55228d));
        gs.z zVar = (gs.z) this.f52023d.l(gs.z.f27213f);
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
        return gs.z.f27213f;
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
