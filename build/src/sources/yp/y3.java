package yp;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y3 {

    /* renamed from: a  reason: collision with root package name */
    private final String f55145a;

    /* renamed from: b  reason: collision with root package name */
    private final String f55146b;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f55147c;

    /* renamed from: d  reason: collision with root package name */
    private final String f55148d;

    /* renamed from: e  reason: collision with root package name */
    private final String f55149e;

    public y3(String str, String str2, Boolean bool, String str3, String str4) {
        this.f55145a = str;
        this.f55146b = str2;
        this.f55147c = bool;
        this.f55148d = str3;
        this.f55149e = str4;
    }

    public final String a() {
        return this.f55148d;
    }

    public final String b() {
        return this.f55146b;
    }

    public final String c() {
        return this.f55149e;
    }

    public final String d() {
        return this.f55145a;
    }

    public final Boolean e() {
        return this.f55147c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof y3)) {
            return false;
        }
        y3 y3Var = (y3) obj;
        if (Intrinsics.areEqual(this.f55145a, y3Var.f55145a) && Intrinsics.areEqual(this.f55146b, y3Var.f55146b) && Intrinsics.areEqual(this.f55147c, y3Var.f55147c) && Intrinsics.areEqual(this.f55148d, y3Var.f55148d) && Intrinsics.areEqual(this.f55149e, y3Var.f55149e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        String str = this.f55145a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = hashCode * 31;
        String str2 = this.f55146b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        Boolean bool = this.f55147c;
        if (bool == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = bool.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str3 = this.f55148d;
        if (str3 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str3.hashCode();
        }
        int i14 = (i13 + hashCode4) * 31;
        String str4 = this.f55149e;
        if (str4 != null) {
            i10 = str4.hashCode();
        }
        return i14 + i10;
    }

    public String toString() {
        String str = this.f55145a;
        String str2 = this.f55146b;
        Boolean bool = this.f55147c;
        String str3 = this.f55148d;
        String str4 = this.f55149e;
        return "MaskTextInputState(prefill=" + str + ", mask=" + str2 + ", secure=" + bool + ", label=" + str3 + ", placeholder=" + str4 + ")";
    }
}
