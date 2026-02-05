package kotlin.ranges;

import kotlin.collections.m0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.markers.KMappedMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements Iterable, KMappedMarker {
    @NotNull

    /* renamed from: o  reason: collision with root package name */
    public static final C0440a f32082o = new C0440a(null);

    /* renamed from: d  reason: collision with root package name */
    private final int f32083d;

    /* renamed from: e  reason: collision with root package name */
    private final int f32084e;

    /* renamed from: i  reason: collision with root package name */
    private final int f32085i;

    /* renamed from: kotlin.ranges.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0440a {
        public /* synthetic */ C0440a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final a a(int i10, int i11, int i12) {
            return new a(i10, i11, i12);
        }

        private C0440a() {
        }
    }

    public a(int i10, int i11, int i12) {
        if (i12 != 0) {
            if (i12 != Integer.MIN_VALUE) {
                this.f32083d = i10;
                this.f32084e = wr.c.c(i10, i11, i12);
                this.f32085i = i12;
                return;
            }
            throw new IllegalArgumentException("Step must be greater than Int.MIN_VALUE to avoid overflow on negation.");
        }
        throw new IllegalArgumentException("Step must be non-zero.");
    }

    public final int d() {
        return this.f32083d;
    }

    public final int e() {
        return this.f32084e;
    }

    public boolean equals(Object obj) {
        if (obj instanceof a) {
            if (!isEmpty() || !((a) obj).isEmpty()) {
                a aVar = (a) obj;
                if (this.f32083d == aVar.f32083d && this.f32084e == aVar.f32084e && this.f32085i == aVar.f32085i) {
                    return true;
                }
                return false;
            }
            return true;
        }
        return false;
    }

    public final int f() {
        return this.f32085i;
    }

    @Override // java.lang.Iterable
    /* renamed from: g */
    public m0 iterator() {
        return new fs.b(this.f32083d, this.f32084e, this.f32085i);
    }

    public int hashCode() {
        if (isEmpty()) {
            return -1;
        }
        return (((this.f32083d * 31) + this.f32084e) * 31) + this.f32085i;
    }

    public boolean isEmpty() {
        if (this.f32085i > 0) {
            if (this.f32083d <= this.f32084e) {
                return false;
            }
            return true;
        } else if (this.f32083d >= this.f32084e) {
            return false;
        } else {
            return true;
        }
    }

    public String toString() {
        StringBuilder sb2;
        int i10;
        if (this.f32085i > 0) {
            sb2 = new StringBuilder();
            sb2.append(this.f32083d);
            sb2.append("..");
            sb2.append(this.f32084e);
            sb2.append(" step ");
            i10 = this.f32085i;
        } else {
            sb2 = new StringBuilder();
            sb2.append(this.f32083d);
            sb2.append(" downTo ");
            sb2.append(this.f32084e);
            sb2.append(" step ");
            i10 = -this.f32085i;
        }
        sb2.append(i10);
        return sb2.toString();
    }
}
