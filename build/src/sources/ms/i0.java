package ms;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.LongCompanionObject;
import kotlin.time.Duration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class i0 {
    public static final Object a(long j10, Continuation continuation) {
        if (j10 <= 0) {
            return Unit.f31988a;
        }
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(ur.b.c(continuation), 1);
        eVar.H();
        if (j10 < LongCompanionObject.MAX_VALUE) {
            c(eVar.getContext()).F(j10, eVar);
        }
        Object B = eVar.B();
        if (B == ur.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (B == ur.b.f()) {
            return B;
        }
        return Unit.f31988a;
    }

    public static final Object b(long j10, Continuation continuation) {
        Object a10 = a(d(j10), continuation);
        if (a10 == ur.b.f()) {
            return a10;
        }
        return Unit.f31988a;
    }

    public static final kotlinx.coroutines.k c(CoroutineContext coroutineContext) {
        kotlinx.coroutines.k kVar;
        CoroutineContext.Element k10 = coroutineContext.k(kotlin.coroutines.d.f32060g);
        if (k10 instanceof kotlinx.coroutines.k) {
            kVar = (kotlinx.coroutines.k) k10;
        } else {
            kVar = null;
        }
        if (kVar == null) {
            return f0.a();
        }
        return kVar;
    }

    public static final long d(long j10) {
        boolean H = Duration.H(j10);
        if (H) {
            return Duration.t(Duration.I(j10, kotlin.time.b.t(999999L, ks.b.f36125e)));
        }
        if (!H) {
            return 0L;
        }
        throw new or.p();
    }
}
