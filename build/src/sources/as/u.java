package as;

import java.io.Serializable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    private final Object f6094d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f6095e;

    /* renamed from: i  reason: collision with root package name */
    private final Object f6096i;

    public u(Object obj, Object obj2, Object obj3) {
        this.f6094d = obj;
        this.f6095e = obj2;
        this.f6096i = obj3;
    }

    public final Object a() {
        return this.f6094d;
    }

    public final Object b() {
        return this.f6095e;
    }

    public final Object c() {
        return this.f6096i;
    }

    public final Object d() {
        return this.f6094d;
    }

    public final Object e() {
        return this.f6095e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof u)) {
            return false;
        }
        u uVar = (u) obj;
        if (Intrinsics.areEqual(this.f6094d, uVar.f6094d) && Intrinsics.areEqual(this.f6095e, uVar.f6095e) && Intrinsics.areEqual(this.f6096i, uVar.f6096i)) {
            return true;
        }
        return false;
    }

    public final Object f() {
        return this.f6096i;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        Object obj = this.f6094d;
        int i10 = 0;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        int i11 = hashCode * 31;
        Object obj2 = this.f6095e;
        if (obj2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = obj2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        Object obj3 = this.f6096i;
        if (obj3 != null) {
            i10 = obj3.hashCode();
        }
        return i12 + i10;
    }

    public String toString() {
        return '(' + this.f6094d + ", " + this.f6095e + ", " + this.f6096i + ')';
    }
}
