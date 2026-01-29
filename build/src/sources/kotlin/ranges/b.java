package kotlin.ranges;

import kotlin.collections.n0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.markers.KMappedMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b implements Iterable, KMappedMarker {
    @NotNull

    /* renamed from: o  reason: collision with root package name */
    public static final a f33380o = new a(null);

    /* renamed from: d  reason: collision with root package name */
    private final long f33381d;

    /* renamed from: e  reason: collision with root package name */
    private final long f33382e;

    /* renamed from: i  reason: collision with root package name */
    private final long f33383i;

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
                this.f33381d = j10;
                this.f33382e = qr.c.d(j10, j11, j12);
                this.f33383i = j12;
                return;
            }
            throw new IllegalArgumentException("Step must be greater than Long.MIN_VALUE to avoid overflow on negation.");
        }
        throw new IllegalArgumentException("Step must be non-zero.");
    }

    public final long d() {
        return this.f33381d;
    }

    public final long e() {
        return this.f33382e;
    }

    public boolean equals(Object obj) {
        if (obj instanceof b) {
            if (!isEmpty() || !((b) obj).isEmpty()) {
                b bVar = (b) obj;
                if (this.f33381d == bVar.f33381d && this.f33382e == bVar.f33382e && this.f33383i == bVar.f33383i) {
                    return true;
                }
                return false;
            }
            return true;
        }
        return false;
    }

    public final long f() {
        return this.f33383i;
    }

    @Override // java.lang.Iterable
    /* renamed from: g */
    public n0 iterator() {
        return new zr.c(this.f33381d, this.f33382e, this.f33383i);
    }

    public int hashCode() {
        if (isEmpty()) {
            return -1;
        }
        long j10 = 31;
        long j11 = this.f33381d;
        long j12 = this.f33382e;
        long j13 = j10 * (((j11 ^ (j11 >>> 32)) * j10) + (j12 ^ (j12 >>> 32)));
        long j14 = this.f33383i;
        return (int) (j13 + (j14 ^ (j14 >>> 32)));
    }

    public boolean isEmpty() {
        int i10 = (this.f33383i > 0L ? 1 : (this.f33383i == 0L ? 0 : -1));
        long j10 = this.f33381d;
        long j11 = this.f33382e;
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
        if (this.f33383i > 0) {
            sb2 = new StringBuilder();
            sb2.append(this.f33381d);
            sb2.append("..");
            sb2.append(this.f33382e);
            sb2.append(" step ");
            j10 = this.f33383i;
        } else {
            sb2 = new StringBuilder();
            sb2.append(this.f33381d);
            sb2.append(" downTo ");
            sb2.append(this.f33382e);
            sb2.append(" step ");
            j10 = -this.f33383i;
        }
        sb2.append(j10);
        return sb2.toString();
    }
}
