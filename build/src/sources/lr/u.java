package lr;

import java.io.Serializable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    private final Object f37132d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f37133e;

    /* renamed from: i  reason: collision with root package name */
    private final Object f37134i;

    public u(Object obj, Object obj2, Object obj3) {
        this.f37132d = obj;
        this.f37133e = obj2;
        this.f37134i = obj3;
    }

    public final Object a() {
        return this.f37132d;
    }

    public final Object b() {
        return this.f37133e;
    }

    public final Object c() {
        return this.f37134i;
    }

    public final Object d() {
        return this.f37132d;
    }

    public final Object e() {
        return this.f37133e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof u)) {
            return false;
        }
        u uVar = (u) obj;
        if (Intrinsics.areEqual(this.f37132d, uVar.f37132d) && Intrinsics.areEqual(this.f37133e, uVar.f37133e) && Intrinsics.areEqual(this.f37134i, uVar.f37134i)) {
            return true;
        }
        return false;
    }

    public final Object f() {
        return this.f37134i;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        Object obj = this.f37132d;
        int i10 = 0;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        int i11 = hashCode * 31;
        Object obj2 = this.f37133e;
        if (obj2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = obj2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        Object obj3 = this.f37134i;
        if (obj3 != null) {
            i10 = obj3.hashCode();
        }
        return i12 + i10;
    }

    public String toString() {
        return '(' + this.f37132d + ", " + this.f37133e + ", " + this.f37134i + ')';
    }
}
