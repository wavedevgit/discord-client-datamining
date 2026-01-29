package xp;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y3 {

    /* renamed from: a  reason: collision with root package name */
    private final String f53775a;

    /* renamed from: b  reason: collision with root package name */
    private final String f53776b;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f53777c;

    /* renamed from: d  reason: collision with root package name */
    private final String f53778d;

    /* renamed from: e  reason: collision with root package name */
    private final String f53779e;

    public y3(String str, String str2, Boolean bool, String str3, String str4) {
        this.f53775a = str;
        this.f53776b = str2;
        this.f53777c = bool;
        this.f53778d = str3;
        this.f53779e = str4;
    }

    public final String a() {
        return this.f53778d;
    }

    public final String b() {
        return this.f53776b;
    }

    public final String c() {
        return this.f53779e;
    }

    public final String d() {
        return this.f53775a;
    }

    public final Boolean e() {
        return this.f53777c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof y3)) {
            return false;
        }
        y3 y3Var = (y3) obj;
        if (Intrinsics.areEqual(this.f53775a, y3Var.f53775a) && Intrinsics.areEqual(this.f53776b, y3Var.f53776b) && Intrinsics.areEqual(this.f53777c, y3Var.f53777c) && Intrinsics.areEqual(this.f53778d, y3Var.f53778d) && Intrinsics.areEqual(this.f53779e, y3Var.f53779e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        String str = this.f53775a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = hashCode * 31;
        String str2 = this.f53776b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        Boolean bool = this.f53777c;
        if (bool == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = bool.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str3 = this.f53778d;
        if (str3 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str3.hashCode();
        }
        int i14 = (i13 + hashCode4) * 31;
        String str4 = this.f53779e;
        if (str4 != null) {
            i10 = str4.hashCode();
        }
        return i14 + i10;
    }

    public String toString() {
        String str = this.f53775a;
        String str2 = this.f53776b;
        Boolean bool = this.f53777c;
        String str3 = this.f53778d;
        String str4 = this.f53779e;
        return "MaskTextInputState(prefill=" + str + ", mask=" + str2 + ", secure=" + bool + ", label=" + str3 + ", placeholder=" + str4 + ")";
    }
}
