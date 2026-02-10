package kotlin.ranges;

import kotlin.collections.m0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.markers.KMappedMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements Iterable, KMappedMarker {
    @NotNull

    /* renamed from: o  reason: collision with root package name */
    public static final C0482a f31859o = new C0482a(null);

    /* renamed from: d  reason: collision with root package name */
    private final int f31860d;

    /* renamed from: e  reason: collision with root package name */
    private final int f31861e;

    /* renamed from: i  reason: collision with root package name */
    private final int f31862i;

    /* renamed from: kotlin.ranges.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0482a {
        public /* synthetic */ C0482a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final a a(int i10, int i11, int i12) {
            return new a(i10, i11, i12);
        }

        private C0482a() {
        }
    }

    public a(int i10, int i11, int i12) {
        if (i12 != 0) {
            if (i12 != Integer.MIN_VALUE) {
                this.f31860d = i10;
                this.f31861e = zr.c.c(i10, i11, i12);
                this.f31862i = i12;
                return;
            }
            throw new IllegalArgumentException("Step must be greater than Int.MIN_VALUE to avoid overflow on negation.");
        }
        throw new IllegalArgumentException("Step must be non-zero.");
    }

    public final int d() {
        return this.f31860d;
    }

    public final int e() {
        return this.f31861e;
    }

    public boolean equals(Object obj) {
        if (obj instanceof a) {
            if (!isEmpty() || !((a) obj).isEmpty()) {
                a aVar = (a) obj;
                if (this.f31860d == aVar.f31860d && this.f31861e == aVar.f31861e && this.f31862i == aVar.f31862i) {
                    return true;
                }
                return false;
            }
            return true;
        }
        return false;
    }

    public final int f() {
        return this.f31862i;
    }

    @Override // java.lang.Iterable
    /* renamed from: g */
    public m0 iterator() {
        return new is.b(this.f31860d, this.f31861e, this.f31862i);
    }

    public int hashCode() {
        if (isEmpty()) {
            return -1;
        }
        return (((this.f31860d * 31) + this.f31861e) * 31) + this.f31862i;
    }

    public boolean isEmpty() {
        if (this.f31862i > 0) {
            if (this.f31860d <= this.f31861e) {
                return false;
            }
            return true;
        } else if (this.f31860d >= this.f31861e) {
            return false;
        } else {
            return true;
        }
    }

    public String toString() {
        StringBuilder sb2;
        int i10;
        if (this.f31862i > 0) {
            sb2 = new StringBuilder();
            sb2.append(this.f31860d);
            sb2.append("..");
            sb2.append(this.f31861e);
            sb2.append(" step ");
            i10 = this.f31862i;
        } else {
            sb2 = new StringBuilder();
            sb2.append(this.f31860d);
            sb2.append(" downTo ");
            sb2.append(this.f31861e);
            sb2.append(" step ");
            i10 = -this.f31862i;
        }
        sb2.append(i10);
        return sb2.toString();
    }
}
