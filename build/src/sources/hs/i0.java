package hs;

import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.LongCompanionObject;
import kotlin.time.Duration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class i0 {
    public static final Object a(long j10, Continuation continuation) {
        if (j10 <= 0) {
            return Unit.f33074a;
        }
        kotlinx.coroutines.e eVar = new kotlinx.coroutines.e(pr.b.c(continuation), 1);
        eVar.H();
        if (j10 < LongCompanionObject.MAX_VALUE) {
            c(eVar.getContext()).F(j10, eVar);
        }
        Object B = eVar.B();
        if (B == pr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (B == pr.b.f()) {
            return B;
        }
        return Unit.f33074a;
    }

    public static final Object b(long j10, Continuation continuation) {
        Object a10 = a(d(j10), continuation);
        if (a10 == pr.b.f()) {
            return a10;
        }
        return Unit.f33074a;
    }

    public static final kotlinx.coroutines.k c(CoroutineContext coroutineContext) {
        kotlinx.coroutines.k kVar;
        CoroutineContext.Element l10 = coroutineContext.l(kotlin.coroutines.d.f33146h);
        if (l10 instanceof kotlinx.coroutines.k) {
            kVar = (kotlinx.coroutines.k) l10;
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
            return Duration.t(Duration.I(j10, kotlin.time.b.t(999999L, fs.b.f25567e)));
        }
        if (!H) {
            return 0L;
        }
        throw new jr.p();
    }
}
