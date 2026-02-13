package kotlin.ranges;

import kotlin.collections.n0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.markers.KMappedMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Iterable, KMappedMarker {
    @NotNull

    /* renamed from: o  reason: collision with root package name */
    public static final a f32654o = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final long f32655d;

    /* renamed from: e  reason: collision with root package name */
    private final long f32656e;

    /* renamed from: i  reason: collision with root package name */
    private final long f32657i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
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
                this.f32655d = j10;
                this.f32656e = is.c.d(j10, j11, j12);
                this.f32657i = j12;
                return;
            }
            throw new IllegalArgumentException("Step must be greater than Long.MIN_VALUE to avoid overflow on negation.");
        }
        throw new IllegalArgumentException("Step must be non-zero.");
    }

    public final long d() {
        return this.f32655d;
    }

    public final long e() {
        return this.f32656e;
    }

    public boolean equals(Object obj) {
        if (obj instanceof b) {
            if (!isEmpty() || !((b) obj).isEmpty()) {
                b bVar = (b) obj;
                if (this.f32655d == bVar.f32655d && this.f32656e == bVar.f32656e && this.f32657i == bVar.f32657i) {
                    return true;
                }
                return false;
            }
            return true;
        }
        return false;
    }

    public final long f() {
        return this.f32657i;
    }

    @Override // java.lang.Iterable
    /* renamed from: g */
    public n0 iterator() {
        return new rs.c(this.f32655d, this.f32656e, this.f32657i);
    }

    public int hashCode() {
        if (isEmpty()) {
            return -1;
        }
        long j10 = 31;
        long j11 = this.f32655d;
        long j12 = this.f32656e;
        long j13 = j10 * (((j11 ^ (j11 >>> 32)) * j10) + (j12 ^ (j12 >>> 32)));
        long j14 = this.f32657i;
        return (int) (j13 + (j14 ^ (j14 >>> 32)));
    }

    public boolean isEmpty() {
        int i10 = (this.f32657i > 0L ? 1 : (this.f32657i == 0L ? 0 : -1));
        long j10 = this.f32655d;
        long j11 = this.f32656e;
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
        if (this.f32657i > 0) {
            sb2 = new StringBuilder();
            sb2.append(this.f32655d);
            sb2.append("..");
            sb2.append(this.f32656e);
            sb2.append(" step ");
            j10 = this.f32657i;
        } else {
            sb2 = new StringBuilder();
            sb2.append(this.f32655d);
            sb2.append(" downTo ");
            sb2.append(this.f32656e);
            sb2.append(" step ");
            j10 = -this.f32657i;
        }
        sb2.append(j10);
        return sb2.toString();
    }
}
