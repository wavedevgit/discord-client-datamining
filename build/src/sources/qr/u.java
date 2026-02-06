package qr;

import java.io.Serializable;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class u implements Serializable {

    /* renamed from: d  reason: collision with root package name */
    private final Object f48056d;

    /* renamed from: e  reason: collision with root package name */
    private final Object f48057e;

    /* renamed from: i  reason: collision with root package name */
    private final Object f48058i;

    public u(Object obj, Object obj2, Object obj3) {
        this.f48056d = obj;
        this.f48057e = obj2;
        this.f48058i = obj3;
    }

    public final Object a() {
        return this.f48056d;
    }

    public final Object b() {
        return this.f48057e;
    }

    public final Object c() {
        return this.f48058i;
    }

    public final Object d() {
        return this.f48056d;
    }

    public final Object e() {
        return this.f48057e;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof u)) {
            return false;
        }
        u uVar = (u) obj;
        if (Intrinsics.areEqual(this.f48056d, uVar.f48056d) && Intrinsics.areEqual(this.f48057e, uVar.f48057e) && Intrinsics.areEqual(this.f48058i, uVar.f48058i)) {
            return true;
        }
        return false;
    }

    public final Object f() {
        return this.f48058i;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        Object obj = this.f48056d;
        int i10 = 0;
        if (obj == null) {
            hashCode = 0;
        } else {
            hashCode = obj.hashCode();
        }
        int i11 = hashCode * 31;
        Object obj2 = this.f48057e;
        if (obj2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = obj2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        Object obj3 = this.f48058i;
        if (obj3 != null) {
            i10 = obj3.hashCode();
        }
        return i12 + i10;
    }

    public String toString() {
        return '(' + this.f48056d + ", " + this.f48057e + ", " + this.f48058i + ')';
    }
}
