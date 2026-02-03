package kotlin.ranges;

import kotlin.collections.m0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.markers.KMappedMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements Iterable, KMappedMarker {
    @NotNull

    /* renamed from: o  reason: collision with root package name */
    public static final C0442a f33168o = new C0442a(null);

    /* renamed from: d  reason: collision with root package name */
    private final int f33169d;

    /* renamed from: e  reason: collision with root package name */
    private final int f33170e;

    /* renamed from: i  reason: collision with root package name */
    private final int f33171i;

    /* renamed from: kotlin.ranges.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0442a {
        public /* synthetic */ C0442a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final a a(int i10, int i11, int i12) {
            return new a(i10, i11, i12);
        }

        private C0442a() {
        }
    }

    public a(int i10, int i11, int i12) {
        if (i12 != 0) {
            if (i12 != Integer.MIN_VALUE) {
                this.f33169d = i10;
                this.f33170e = rr.c.c(i10, i11, i12);
                this.f33171i = i12;
                return;
            }
            throw new IllegalArgumentException("Step must be greater than Int.MIN_VALUE to avoid overflow on negation.");
        }
        throw new IllegalArgumentException("Step must be non-zero.");
    }

    public final int d() {
        return this.f33169d;
    }

    public final int e() {
        return this.f33170e;
    }

    public boolean equals(Object obj) {
        if (obj instanceof a) {
            if (!isEmpty() || !((a) obj).isEmpty()) {
                a aVar = (a) obj;
                if (this.f33169d == aVar.f33169d && this.f33170e == aVar.f33170e && this.f33171i == aVar.f33171i) {
                    return true;
                }
                return false;
            }
            return true;
        }
        return false;
    }

    public final int f() {
        return this.f33171i;
    }

    @Override // java.lang.Iterable
    /* renamed from: g */
    public m0 iterator() {
        return new as.b(this.f33169d, this.f33170e, this.f33171i);
    }

    public int hashCode() {
        if (isEmpty()) {
            return -1;
        }
        return (((this.f33169d * 31) + this.f33170e) * 31) + this.f33171i;
    }

    public boolean isEmpty() {
        if (this.f33171i > 0) {
            if (this.f33169d <= this.f33170e) {
                return false;
            }
            return true;
        } else if (this.f33169d >= this.f33170e) {
            return false;
        } else {
            return true;
        }
    }

    public String toString() {
        StringBuilder sb2;
        int i10;
        if (this.f33171i > 0) {
            sb2 = new StringBuilder();
            sb2.append(this.f33169d);
            sb2.append("..");
            sb2.append(this.f33170e);
            sb2.append(" step ");
            i10 = this.f33171i;
        } else {
            sb2 = new StringBuilder();
            sb2.append(this.f33169d);
            sb2.append(" downTo ");
            sb2.append(this.f33170e);
            sb2.append(" step ");
            i10 = -this.f33171i;
        }
        sb2.append(i10);
        return sb2.toString();
    }
}
