package kotlin.ranges;

import kotlin.collections.m0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.markers.KMappedMarker;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a implements Iterable, KMappedMarker {
    @NotNull

    /* renamed from: o  reason: collision with root package name */
    public static final C0450a f33392o = new C0450a(null);

    /* renamed from: d  reason: collision with root package name */
    private final int f33393d;

    /* renamed from: e  reason: collision with root package name */
    private final int f33394e;

    /* renamed from: i  reason: collision with root package name */
    private final int f33395i;

    /* renamed from: kotlin.ranges.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0450a {
        public /* synthetic */ C0450a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final a a(int i10, int i11, int i12) {
            return new a(i10, i11, i12);
        }

        private C0450a() {
        }
    }

    public a(int i10, int i11, int i12) {
        if (i12 != 0) {
            if (i12 != Integer.MIN_VALUE) {
                this.f33393d = i10;
                this.f33394e = qr.c.c(i10, i11, i12);
                this.f33395i = i12;
                return;
            }
            throw new IllegalArgumentException("Step must be greater than Int.MIN_VALUE to avoid overflow on negation.");
        }
        throw new IllegalArgumentException("Step must be non-zero.");
    }

    public final int d() {
        return this.f33393d;
    }

    public final int e() {
        return this.f33394e;
    }

    public boolean equals(Object obj) {
        if (obj instanceof a) {
            if (!isEmpty() || !((a) obj).isEmpty()) {
                a aVar = (a) obj;
                if (this.f33393d == aVar.f33393d && this.f33394e == aVar.f33394e && this.f33395i == aVar.f33395i) {
                    return true;
                }
                return false;
            }
            return true;
        }
        return false;
    }

    public final int f() {
        return this.f33395i;
    }

    @Override // java.lang.Iterable
    /* renamed from: g */
    public m0 iterator() {
        return new zr.b(this.f33393d, this.f33394e, this.f33395i);
    }

    public int hashCode() {
        if (isEmpty()) {
            return -1;
        }
        return (((this.f33393d * 31) + this.f33394e) * 31) + this.f33395i;
    }

    public boolean isEmpty() {
        if (this.f33395i > 0) {
            if (this.f33393d <= this.f33394e) {
                return false;
            }
            return true;
        } else if (this.f33393d >= this.f33394e) {
            return false;
        } else {
            return true;
        }
    }

    public String toString() {
        StringBuilder sb2;
        int i10;
        if (this.f33395i > 0) {
            sb2 = new StringBuilder();
            sb2.append(this.f33393d);
            sb2.append("..");
            sb2.append(this.f33394e);
            sb2.append(" step ");
            i10 = this.f33395i;
        } else {
            sb2 = new StringBuilder();
            sb2.append(this.f33393d);
            sb2.append(" downTo ");
            sb2.append(this.f33394e);
            sb2.append(" step ");
            i10 = -this.f33395i;
        }
        sb2.append(i10);
        return sb2.toString();
    }
}
