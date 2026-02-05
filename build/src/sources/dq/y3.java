package dq;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y3 {

    /* renamed from: a  reason: collision with root package name */
    private final String f21208a;

    /* renamed from: b  reason: collision with root package name */
    private final String f21209b;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f21210c;

    /* renamed from: d  reason: collision with root package name */
    private final String f21211d;

    /* renamed from: e  reason: collision with root package name */
    private final String f21212e;

    public y3(String str, String str2, Boolean bool, String str3, String str4) {
        this.f21208a = str;
        this.f21209b = str2;
        this.f21210c = bool;
        this.f21211d = str3;
        this.f21212e = str4;
    }

    public final String a() {
        return this.f21211d;
    }

    public final String b() {
        return this.f21209b;
    }

    public final String c() {
        return this.f21212e;
    }

    public final String d() {
        return this.f21208a;
    }

    public final Boolean e() {
        return this.f21210c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof y3)) {
            return false;
        }
        y3 y3Var = (y3) obj;
        if (Intrinsics.areEqual(this.f21208a, y3Var.f21208a) && Intrinsics.areEqual(this.f21209b, y3Var.f21209b) && Intrinsics.areEqual(this.f21210c, y3Var.f21210c) && Intrinsics.areEqual(this.f21211d, y3Var.f21211d) && Intrinsics.areEqual(this.f21212e, y3Var.f21212e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        String str = this.f21208a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = hashCode * 31;
        String str2 = this.f21209b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        Boolean bool = this.f21210c;
        if (bool == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = bool.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str3 = this.f21211d;
        if (str3 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str3.hashCode();
        }
        int i14 = (i13 + hashCode4) * 31;
        String str4 = this.f21212e;
        if (str4 != null) {
            i10 = str4.hashCode();
        }
        return i14 + i10;
    }

    public String toString() {
        String str = this.f21208a;
        String str2 = this.f21209b;
        Boolean bool = this.f21210c;
        String str3 = this.f21211d;
        String str4 = this.f21212e;
        return "MaskTextInputState(prefill=" + str + ", mask=" + str2 + ", secure=" + bool + ", label=" + str3 + ", placeholder=" + str4 + ")";
    }
}
