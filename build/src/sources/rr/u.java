package rr;

import java.io.Serializable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    private final Object f49222d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f49223e;

    /* renamed from: i  reason: collision with root package name */
    private final Object f49224i;

    public u(Object obj, Object obj2, Object obj3) {
        this.f49222d = obj;
        this.f49223e = obj2;
        this.f49224i = obj3;
    }

    public final Object a() {
        return this.f49222d;
    }

    public final Object b() {
        return this.f49223e;
    }

    public final Object c() {
        return this.f49224i;
    }

    public final Object d() {
        return this.f49222d;
    }

    public final Object e() {
        return this.f49223e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof u)) {
            return false;
        }
        u uVar = (u) obj;
        if (Intrinsics.areEqual(this.f49222d, uVar.f49222d) && Intrinsics.areEqual(this.f49223e, uVar.f49223e) && Intrinsics.areEqual(this.f49224i, uVar.f49224i)) {
            return true;
        }
        return false;
    }

    public final Object f() {
        return this.f49224i;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        Object obj = this.f49222d;
        int i10 = 0;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        int i11 = hashCode * 31;
        Object obj2 = this.f49223e;
        if (obj2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = obj2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        Object obj3 = this.f49224i;
        if (obj3 != null) {
            i10 = obj3.hashCode();
        }
        return i12 + i10;
    }

    public String toString() {
        return '(' + this.f49222d + ", " + this.f49223e + ", " + this.f49224i + ')';
    }
}
