package pq;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y3 {

    /* renamed from: a  reason: collision with root package name */
    private final String f43161a;

    /* renamed from: b  reason: collision with root package name */
    private final String f43162b;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f43163c;

    /* renamed from: d  reason: collision with root package name */
    private final String f43164d;

    /* renamed from: e  reason: collision with root package name */
    private final String f43165e;

    public y3(String str, String str2, Boolean bool, String str3, String str4) {
        this.f43161a = str;
        this.f43162b = str2;
        this.f43163c = bool;
        this.f43164d = str3;
        this.f43165e = str4;
    }

    public final String a() {
        return this.f43164d;
    }

    public final String b() {
        return this.f43162b;
    }

    public final String c() {
        return this.f43165e;
    }

    public final String d() {
        return this.f43161a;
    }

    public final Boolean e() {
        return this.f43163c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof y3)) {
            return false;
        }
        y3 y3Var = (y3) obj;
        if (Intrinsics.areEqual(this.f43161a, y3Var.f43161a) && Intrinsics.areEqual(this.f43162b, y3Var.f43162b) && Intrinsics.areEqual(this.f43163c, y3Var.f43163c) && Intrinsics.areEqual(this.f43164d, y3Var.f43164d) && Intrinsics.areEqual(this.f43165e, y3Var.f43165e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        String str = this.f43161a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = hashCode * 31;
        String str2 = this.f43162b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        Boolean bool = this.f43163c;
        if (bool == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = bool.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str3 = this.f43164d;
        if (str3 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str3.hashCode();
        }
        int i14 = (i13 + hashCode4) * 31;
        String str4 = this.f43165e;
        if (str4 != null) {
            i10 = str4.hashCode();
        }
        return i14 + i10;
    }

    public String toString() {
        String str = this.f43161a;
        String str2 = this.f43162b;
        Boolean bool = this.f43163c;
        String str3 = this.f43164d;
        String str4 = this.f43165e;
        return "MaskTextInputState(prefill=" + str + ", mask=" + str2 + ", secure=" + bool + ", label=" + str3 + ", placeholder=" + str4 + ")";
    }
}
