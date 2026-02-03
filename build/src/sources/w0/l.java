package w0;

import js.z;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class l implements js.z {

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineContext f51812d;

    /* renamed from: e  reason: collision with root package name */
    private final Function2 f51813e;

    /* renamed from: i  reason: collision with root package name */
    private final CoroutineScope f51814i;

    public l(CoroutineContext coroutineContext, Function2 function2) {
        CoroutineContext coroutineContext2;
        this.f51812d = coroutineContext;
        this.f51813e = function2;
        if (coroutineContext.l(z0.a.f55498d) != null) {
            coroutineContext2 = this;
        } else {
            coroutineContext2 = kotlin.coroutines.e.f32538d;
        }
        this.f51814i = kotlinx.coroutines.i.a(coroutineContext.V0(coroutineContext2));
    }

    @Override // js.z
    public void R0(CoroutineContext coroutineContext, Throwable th2) {
        android.support.v4.media.session.b.a(coroutineContext.l(z0.a.f55498d));
        js.z zVar = (js.z) this.f51812d.l(js.z.f32000f);
        if (zVar != null) {
            zVar.R0(coroutineContext, th2);
            return;
        }
        throw th2;
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext V0(CoroutineContext coroutineContext) {
        return z.a.d(this, coroutineContext);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext e1(CoroutineContext.b bVar) {
        return z.a.c(this, bVar);
    }

    @Override // kotlin.coroutines.CoroutineContext.Element
    public CoroutineContext.b getKey() {
        return js.z.f32000f;
    }

    @Override // kotlin.coroutines.CoroutineContext.Element, kotlin.coroutines.CoroutineContext
    public CoroutineContext.Element l(CoroutineContext.b bVar) {
        return z.a.b(this, bVar);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public Object y1(Object obj, Function2 function2) {
        return z.a.a(this, obj, function2);
    }
}
