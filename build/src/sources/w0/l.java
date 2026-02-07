package w0;

import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.functions.Function2;
import kotlinx.coroutines.CoroutineScope;
import os.z;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class l implements os.z {

    /* renamed from: d  reason: collision with root package name */
    private final CoroutineContext f53293d;

    /* renamed from: e  reason: collision with root package name */
    private final Function2 f53294e;

    /* renamed from: i  reason: collision with root package name */
    private final CoroutineScope f53295i;

    public l(CoroutineContext coroutineContext, Function2 function2) {
        CoroutineContext coroutineContext2;
        this.f53293d = coroutineContext;
        this.f53294e = function2;
        if (coroutineContext.m(z0.a.f55863d) != null) {
            coroutineContext2 = this;
        } else {
            coroutineContext2 = kotlin.coroutines.e.f32130d;
        }
        this.f53295i = kotlinx.coroutines.i.a(coroutineContext.Y0(coroutineContext2));
    }

    @Override // os.z
    public void V0(CoroutineContext coroutineContext, Throwable th2) {
        android.support.v4.media.session.b.a(coroutineContext.m(z0.a.f55863d));
        os.z zVar = (os.z) this.f53293d.m(os.z.f43592j);
        if (zVar != null) {
            zVar.V0(coroutineContext, th2);
            return;
        }
        throw th2;
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext Y0(CoroutineContext coroutineContext) {
        return z.a.d(this, coroutineContext);
    }

    @Override // kotlin.coroutines.CoroutineContext.Element
    public CoroutineContext.b getKey() {
        return os.z.f43592j;
    }

    @Override // kotlin.coroutines.CoroutineContext.Element, kotlin.coroutines.CoroutineContext
    public CoroutineContext.Element m(CoroutineContext.b bVar) {
        return z.a.b(this, bVar);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public CoroutineContext x1(CoroutineContext.b bVar) {
        return z.a.c(this, bVar);
    }

    @Override // kotlin.coroutines.CoroutineContext
    public Object z1(Object obj, Function2 function2) {
        return z.a.a(this, obj, function2);
    }
}
