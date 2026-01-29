package kotlin.time;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import kotlin.time.Duration;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e {
    private static final long a(long j10) {
        if (j10 < 0) {
            return Duration.f36281e.b();
        }
        return Duration.f36281e.a();
    }

    public static final long b(long j10, long j11, es.b unit) {
        Intrinsics.checkNotNullParameter(unit, "unit");
        if ((1 | (j11 - 1)) == LongCompanionObject.MAX_VALUE) {
            return Duration.N(a(j11));
        }
        return c(j10, j11, unit);
    }

    private static final long c(long j10, long j11, es.b bVar) {
        long j12 = j10 - j11;
        if (((j12 ^ j10) & (~(j12 ^ j11))) < 0) {
            es.b bVar2 = es.b.f24008o;
            if (bVar.compareTo(bVar2) < 0) {
                long b10 = c.b(1L, bVar2, bVar);
                long j13 = (j10 % b10) - (j11 % b10);
                Duration.a aVar = Duration.f36281e;
                return Duration.I(b.t((j10 / b10) - (j11 / b10), bVar2), b.t(j13, bVar));
            }
            return Duration.N(a(j12));
        }
        return b.t(j12, bVar);
    }

    public static final long d(long j10, long j11, es.b unit) {
        Intrinsics.checkNotNullParameter(unit, "unit");
        if (((j11 - 1) | 1) == LongCompanionObject.MAX_VALUE) {
            if (j10 == j11) {
                return Duration.f36281e.c();
            }
            return Duration.N(a(j11));
        } else if ((1 | (j10 - 1)) == LongCompanionObject.MAX_VALUE) {
            return a(j10);
        } else {
            return c(j10, j11, unit);
        }
    }
}
