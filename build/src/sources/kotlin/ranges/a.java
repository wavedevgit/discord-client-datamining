package kotlin.ranges;

import kotlin.collections.m0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.markers.KMappedMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a implements Iterable, KMappedMarker {
    @NotNull

    /* renamed from: o  reason: collision with root package name */
    public static final C0453a f32650o = new C0453a(null);

    /* renamed from: d  reason: collision with root package name */
    private final int f32651d;

    /* renamed from: e  reason: collision with root package name */
    private final int f32652e;

    /* renamed from: i  reason: collision with root package name */
    private final int f32653i;

    /* renamed from: kotlin.ranges.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0453a {
        public /* synthetic */ C0453a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final a a(int i10, int i11, int i12) {
            return new a(i10, i11, i12);
        }

        private C0453a() {
        }
    }

    public a(int i10, int i11, int i12) {
        if (i12 != 0) {
            if (i12 != Integer.MIN_VALUE) {
                this.f32651d = i10;
                this.f32652e = is.c.c(i10, i11, i12);
                this.f32653i = i12;
                return;
            }
            throw new IllegalArgumentException("Step must be greater than Int.MIN_VALUE to avoid overflow on negation.");
        }
        throw new IllegalArgumentException("Step must be non-zero.");
    }

    public final int d() {
        return this.f32651d;
    }

    public final int e() {
        return this.f32652e;
    }

    public boolean equals(Object obj) {
        if (obj instanceof a) {
            if (!isEmpty() || !((a) obj).isEmpty()) {
                a aVar = (a) obj;
                if (this.f32651d == aVar.f32651d && this.f32652e == aVar.f32652e && this.f32653i == aVar.f32653i) {
                    return true;
                }
                return false;
            }
            return true;
        }
        return false;
    }

    public final int f() {
        return this.f32653i;
    }

    @Override // java.lang.Iterable
    /* renamed from: g */
    public m0 iterator() {
        return new rs.b(this.f32651d, this.f32652e, this.f32653i);
    }

    public int hashCode() {
        if (isEmpty()) {
            return -1;
        }
        return (((this.f32651d * 31) + this.f32652e) * 31) + this.f32653i;
    }

    public boolean isEmpty() {
        if (this.f32653i > 0) {
            if (this.f32651d <= this.f32652e) {
                return false;
            }
            return true;
        } else if (this.f32651d >= this.f32652e) {
            return false;
        } else {
            return true;
        }
    }

    public String toString() {
        StringBuilder sb2;
        int i10;
        if (this.f32653i > 0) {
            sb2 = new StringBuilder();
            sb2.append(this.f32651d);
            sb2.append("..");
            sb2.append(this.f32652e);
            sb2.append(" step ");
            i10 = this.f32653i;
        } else {
            sb2 = new StringBuilder();
            sb2.append(this.f32651d);
            sb2.append(" downTo ");
            sb2.append(this.f32652e);
            sb2.append(" step ");
            i10 = -this.f32653i;
        }
        sb2.append(i10);
        return sb2.toString();
    }
}
