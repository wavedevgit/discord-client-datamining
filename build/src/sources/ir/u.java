package ir;

import java.io.Serializable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    private final Object f31115d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f31116e;

    /* renamed from: i  reason: collision with root package name */
    private final Object f31117i;

    public u(Object obj, Object obj2, Object obj3) {
        this.f31115d = obj;
        this.f31116e = obj2;
        this.f31117i = obj3;
    }

    public final Object a() {
        return this.f31115d;
    }

    public final Object b() {
        return this.f31116e;
    }

    public final Object c() {
        return this.f31117i;
    }

    public final Object d() {
        return this.f31115d;
    }

    public final Object e() {
        return this.f31116e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof u)) {
            return false;
        }
        u uVar = (u) obj;
        if (Intrinsics.areEqual(this.f31115d, uVar.f31115d) && Intrinsics.areEqual(this.f31116e, uVar.f31116e) && Intrinsics.areEqual(this.f31117i, uVar.f31117i)) {
            return true;
        }
        return false;
    }

    public final Object f() {
        return this.f31117i;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        Object obj = this.f31115d;
        int i10 = 0;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        int i11 = hashCode * 31;
        Object obj2 = this.f31116e;
        if (obj2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = obj2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        Object obj3 = this.f31117i;
        if (obj3 != null) {
            i10 = obj3.hashCode();
        }
        return i12 + i10;
    }

    public String toString() {
        return '(' + this.f31115d + ", " + this.f31116e + ", " + this.f31117i + ')';
    }
}
