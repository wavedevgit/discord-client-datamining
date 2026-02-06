package kotlin.ranges;

import kotlin.collections.m0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.markers.KMappedMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements Iterable, KMappedMarker {
    @NotNull

    /* renamed from: o  reason: collision with root package name */
    public static final C0455a f32102o = new C0455a(null);

    /* renamed from: d  reason: collision with root package name */
    private final int f32103d;

    /* renamed from: e  reason: collision with root package name */
    private final int f32104e;

    /* renamed from: i  reason: collision with root package name */
    private final int f32105i;

    /* renamed from: kotlin.ranges.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0455a {
        public /* synthetic */ C0455a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final a a(int i10, int i11, int i12) {
            return new a(i10, i11, i12);
        }

        private C0455a() {
        }
    }

    public a(int i10, int i11, int i12) {
        if (i12 != 0) {
            if (i12 != Integer.MIN_VALUE) {
                this.f32103d = i10;
                this.f32104e = yr.c.c(i10, i11, i12);
                this.f32105i = i12;
                return;
            }
            throw new IllegalArgumentException("Step must be greater than Int.MIN_VALUE to avoid overflow on negation.");
        }
        throw new IllegalArgumentException("Step must be non-zero.");
    }

    public final int d() {
        return this.f32103d;
    }

    public final int e() {
        return this.f32104e;
    }

    public boolean equals(Object obj) {
        if (obj instanceof a) {
            if (!isEmpty() || !((a) obj).isEmpty()) {
                a aVar = (a) obj;
                if (this.f32103d == aVar.f32103d && this.f32104e == aVar.f32104e && this.f32105i == aVar.f32105i) {
                    return true;
                }
                return false;
            }
            return true;
        }
        return false;
    }

    public final int f() {
        return this.f32105i;
    }

    @Override // java.lang.Iterable
    /* renamed from: g */
    public m0 iterator() {
        return new hs.b(this.f32103d, this.f32104e, this.f32105i);
    }

    public int hashCode() {
        if (isEmpty()) {
            return -1;
        }
        return (((this.f32103d * 31) + this.f32104e) * 31) + this.f32105i;
    }

    public boolean isEmpty() {
        if (this.f32105i > 0) {
            if (this.f32103d <= this.f32104e) {
                return false;
            }
            return true;
        } else if (this.f32103d >= this.f32104e) {
            return false;
        } else {
            return true;
        }
    }

    public String toString() {
        StringBuilder sb2;
        int i10;
        if (this.f32105i > 0) {
            sb2 = new StringBuilder();
            sb2.append(this.f32103d);
            sb2.append("..");
            sb2.append(this.f32104e);
            sb2.append(" step ");
            i10 = this.f32105i;
        } else {
            sb2 = new StringBuilder();
            sb2.append(this.f32103d);
            sb2.append(" downTo ");
            sb2.append(this.f32104e);
            sb2.append(" step ");
            i10 = -this.f32105i;
        }
        sb2.append(i10);
        return sb2.toString();
    }
}
