package kotlin.time;

import kotlin.time.g;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f {
    @NotNull

    /* renamed from: a  reason: collision with root package name */
    public static final f f34769a = new f();

    /* renamed from: b  reason: collision with root package name */
    private static final long f34770b = System.nanoTime();

    private f() {
    }

    private final long d() {
        return System.nanoTime() - f34770b;
    }

    public final long a(long j10, long j11) {
        return e.d(j10, j11, ns.b.f40014e);
    }

    public final long b(long j10) {
        return e.b(d(), j10, ns.b.f40014e);
    }

    public long c() {
        return g.a.f(d());
    }

    public String toString() {
        return "TimeSource(System.nanoTime())";
    }
}
