package kotlin.ranges;

import kotlin.collections.n0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.markers.KMappedMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b implements Iterable, KMappedMarker {
    @NotNull

    /* renamed from: o  reason: collision with root package name */
    public static final a f32154o = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final long f32155d;

    /* renamed from: e  reason: collision with root package name */
    private final long f32156e;

    /* renamed from: i  reason: collision with root package name */
    private final long f32157i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final b a(long j10, long j11, long j12) {
            return new b(j10, j11, j12);
        }

        private a() {
        }
    }

    public b(long j10, long j11, long j12) {
        if (j12 != 0) {
            if (j12 != Long.MIN_VALUE) {
                this.f32155d = j10;
                this.f32156e = yr.c.d(j10, j11, j12);
                this.f32157i = j12;
                return;
            }
            throw new IllegalArgumentException("Step must be greater than Long.MIN_VALUE to avoid overflow on negation.");
        }
        throw new IllegalArgumentException("Step must be non-zero.");
    }

    public final long d() {
        return this.f32155d;
    }

    public final long e() {
        return this.f32156e;
    }

    public boolean equals(Object obj) {
        if (obj instanceof b) {
            if (!isEmpty() || !((b) obj).isEmpty()) {
                b bVar = (b) obj;
                if (this.f32155d == bVar.f32155d && this.f32156e == bVar.f32156e && this.f32157i == bVar.f32157i) {
                    return true;
                }
                return false;
            }
            return true;
        }
        return false;
    }

    public final long f() {
        return this.f32157i;
    }

    @Override // java.lang.Iterable
    /* renamed from: g */
    public n0 iterator() {
        return new hs.c(this.f32155d, this.f32156e, this.f32157i);
    }

    public int hashCode() {
        if (isEmpty()) {
            return -1;
        }
        long j10 = 31;
        long j11 = this.f32155d;
        long j12 = this.f32156e;
        long j13 = j10 * (((j11 ^ (j11 >>> 32)) * j10) + (j12 ^ (j12 >>> 32)));
        long j14 = this.f32157i;
        return (int) (j13 + (j14 ^ (j14 >>> 32)));
    }

    public boolean isEmpty() {
        int i10 = (this.f32157i > 0L ? 1 : (this.f32157i == 0L ? 0 : -1));
        long j10 = this.f32155d;
        long j11 = this.f32156e;
        if (i10 > 0) {
            if (j10 <= j11) {
                return false;
            }
            return true;
        } else if (j10 >= j11) {
            return false;
        } else {
            return true;
        }
    }

    public String toString() {
        StringBuilder sb2;
        long j10;
        if (this.f32157i > 0) {
            sb2 = new StringBuilder();
            sb2.append(this.f32155d);
            sb2.append("..");
            sb2.append(this.f32156e);
            sb2.append(" step ");
            j10 = this.f32157i;
        } else {
            sb2 = new StringBuilder();
            sb2.append(this.f32155d);
            sb2.append(" downTo ");
            sb2.append(this.f32156e);
            sb2.append(" step ");
            j10 = -this.f32157i;
        }
        sb2.append(j10);
        return sb2.toString();
    }
}
