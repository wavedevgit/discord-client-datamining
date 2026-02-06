package kotlin.ranges;

import kotlin.jvm.internal.DefaultConstructorMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c extends b implements hs.a {
    @NotNull

    /* renamed from: p  reason: collision with root package name */
    public static final a f32110p = new a(null);

    /* renamed from: q  reason: collision with root package name */
    private static final c f32111q = new c(1, 0);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final c a() {
            return c.f32111q;
        }

        private a() {
        }
    }

    public c(long j10, long j11) {
        super(j10, j11, 1L);
    }

    @Override // kotlin.ranges.b
    public boolean equals(Object obj) {
        if (obj instanceof c) {
            if (!isEmpty() || !((c) obj).isEmpty()) {
                c cVar = (c) obj;
                if (d() == cVar.d() && e() == cVar.e()) {
                    return true;
                }
                return false;
            }
            return true;
        }
        return false;
    }

    @Override // kotlin.ranges.b
    public int hashCode() {
        if (isEmpty()) {
            return -1;
        }
        return (int) ((31 * (d() ^ (d() >>> 32))) + (e() ^ (e() >>> 32)));
    }

    @Override // hs.a
    /* renamed from: i */
    public Long c() {
        return Long.valueOf(e());
    }

    @Override // kotlin.ranges.b, hs.a
    public boolean isEmpty() {
        if (d() > e()) {
            return true;
        }
        return false;
    }

    @Override // hs.a
    /* renamed from: j */
    public Long b() {
        return Long.valueOf(d());
    }

    @Override // kotlin.ranges.b
    public String toString() {
        return d() + ".." + e();
    }
}
