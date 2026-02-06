package kotlin.time;

import kotlin.time.g;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f {
    @NotNull

    /* renamed from: a  reason: collision with root package name */
    public static final f f35012a = new f();

    /* renamed from: b  reason: collision with root package name */
    private static final long f35013b = System.nanoTime();

    private f() {
    }

    private final long d() {
        return System.nanoTime() - f35013b;
    }

    public final long a(long j10, long j11) {
        return e.d(j10, j11, ms.b.f38281e);
    }

    public final long b(long j10) {
        return e.b(d(), j10, ms.b.f38281e);
    }

    public long c() {
        return g.a.f(d());
    }

    public String toString() {
        return "TimeSource(System.nanoTime())";
    }
}
