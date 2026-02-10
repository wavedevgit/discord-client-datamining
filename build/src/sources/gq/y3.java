package gq;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y3 {

    /* renamed from: a  reason: collision with root package name */
    private final String f24770a;

    /* renamed from: b  reason: collision with root package name */
    private final String f24771b;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f24772c;

    /* renamed from: d  reason: collision with root package name */
    private final String f24773d;

    /* renamed from: e  reason: collision with root package name */
    private final String f24774e;

    public y3(String str, String str2, Boolean bool, String str3, String str4) {
        this.f24770a = str;
        this.f24771b = str2;
        this.f24772c = bool;
        this.f24773d = str3;
        this.f24774e = str4;
    }

    public final String a() {
        return this.f24773d;
    }

    public final String b() {
        return this.f24771b;
    }

    public final String c() {
        return this.f24774e;
    }

    public final String d() {
        return this.f24770a;
    }

    public final Boolean e() {
        return this.f24772c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof y3)) {
            return false;
        }
        y3 y3Var = (y3) obj;
        if (Intrinsics.areEqual(this.f24770a, y3Var.f24770a) && Intrinsics.areEqual(this.f24771b, y3Var.f24771b) && Intrinsics.areEqual(this.f24772c, y3Var.f24772c) && Intrinsics.areEqual(this.f24773d, y3Var.f24773d) && Intrinsics.areEqual(this.f24774e, y3Var.f24774e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        String str = this.f24770a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = hashCode * 31;
        String str2 = this.f24771b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        Boolean bool = this.f24772c;
        if (bool == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = bool.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str3 = this.f24773d;
        if (str3 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str3.hashCode();
        }
        int i14 = (i13 + hashCode4) * 31;
        String str4 = this.f24774e;
        if (str4 != null) {
            i10 = str4.hashCode();
        }
        return i14 + i10;
    }

    public String toString() {
        String str = this.f24770a;
        String str2 = this.f24771b;
        Boolean bool = this.f24772c;
        String str3 = this.f24773d;
        String str4 = this.f24774e;
        return "MaskTextInputState(prefill=" + str + ", mask=" + str2 + ", secure=" + bool + ", label=" + str3 + ", placeholder=" + str4 + ")";
    }
}
