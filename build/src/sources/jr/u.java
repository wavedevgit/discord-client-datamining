package jr;

import java.io.Serializable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    private final Object f32194d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f32195e;

    /* renamed from: i  reason: collision with root package name */
    private final Object f32196i;

    public u(Object obj, Object obj2, Object obj3) {
        this.f32194d = obj;
        this.f32195e = obj2;
        this.f32196i = obj3;
    }

    public final Object a() {
        return this.f32194d;
    }

    public final Object b() {
        return this.f32195e;
    }

    public final Object c() {
        return this.f32196i;
    }

    public final Object d() {
        return this.f32194d;
    }

    public final Object e() {
        return this.f32195e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof u)) {
            return false;
        }
        u uVar = (u) obj;
        if (Intrinsics.areEqual(this.f32194d, uVar.f32194d) && Intrinsics.areEqual(this.f32195e, uVar.f32195e) && Intrinsics.areEqual(this.f32196i, uVar.f32196i)) {
            return true;
        }
        return false;
    }

    public final Object f() {
        return this.f32196i;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        Object obj = this.f32194d;
        int i10 = 0;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        int i11 = hashCode * 31;
        Object obj2 = this.f32195e;
        if (obj2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = obj2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        Object obj3 = this.f32196i;
        if (obj3 != null) {
            i10 = obj3.hashCode();
        }
        return i12 + i10;
    }

    public String toString() {
        return '(' + this.f32194d + ", " + this.f32195e + ", " + this.f32196i + ')';
    }
}
