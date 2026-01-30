package ir;

import java.io.Serializable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    private final Object f31131d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f31132e;

    /* renamed from: i  reason: collision with root package name */
    private final Object f31133i;

    public u(Object obj, Object obj2, Object obj3) {
        this.f31131d = obj;
        this.f31132e = obj2;
        this.f31133i = obj3;
    }

    public final Object a() {
        return this.f31131d;
    }

    public final Object b() {
        return this.f31132e;
    }

    public final Object c() {
        return this.f31133i;
    }

    public final Object d() {
        return this.f31131d;
    }

    public final Object e() {
        return this.f31132e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof u)) {
            return false;
        }
        u uVar = (u) obj;
        if (Intrinsics.areEqual(this.f31131d, uVar.f31131d) && Intrinsics.areEqual(this.f31132e, uVar.f31132e) && Intrinsics.areEqual(this.f31133i, uVar.f31133i)) {
            return true;
        }
        return false;
    }

    public final Object f() {
        return this.f31133i;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        Object obj = this.f31131d;
        int i10 = 0;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        int i11 = hashCode * 31;
        Object obj2 = this.f31132e;
        if (obj2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = obj2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        Object obj3 = this.f31133i;
        if (obj3 != null) {
            i10 = obj3.hashCode();
        }
        return i12 + i10;
    }

    public String toString() {
        return '(' + this.f31131d + ", " + this.f31132e + ", " + this.f31133i + ')';
    }
}
