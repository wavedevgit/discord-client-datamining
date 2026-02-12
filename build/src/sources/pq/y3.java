package pq;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y3 {

    /* renamed from: a  reason: collision with root package name */
    private final String f43162a;

    /* renamed from: b  reason: collision with root package name */
    private final String f43163b;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f43164c;

    /* renamed from: d  reason: collision with root package name */
    private final String f43165d;

    /* renamed from: e  reason: collision with root package name */
    private final String f43166e;

    public y3(String str, String str2, Boolean bool, String str3, String str4) {
        this.f43162a = str;
        this.f43163b = str2;
        this.f43164c = bool;
        this.f43165d = str3;
        this.f43166e = str4;
    }

    public final String a() {
        return this.f43165d;
    }

    public final String b() {
        return this.f43163b;
    }

    public final String c() {
        return this.f43166e;
    }

    public final String d() {
        return this.f43162a;
    }

    public final Boolean e() {
        return this.f43164c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof y3)) {
            return false;
        }
        y3 y3Var = (y3) obj;
        if (Intrinsics.areEqual(this.f43162a, y3Var.f43162a) && Intrinsics.areEqual(this.f43163b, y3Var.f43163b) && Intrinsics.areEqual(this.f43164c, y3Var.f43164c) && Intrinsics.areEqual(this.f43165d, y3Var.f43165d) && Intrinsics.areEqual(this.f43166e, y3Var.f43166e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        String str = this.f43162a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = hashCode * 31;
        String str2 = this.f43163b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        Boolean bool = this.f43164c;
        if (bool == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = bool.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str3 = this.f43165d;
        if (str3 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str3.hashCode();
        }
        int i14 = (i13 + hashCode4) * 31;
        String str4 = this.f43166e;
        if (str4 != null) {
            i10 = str4.hashCode();
        }
        return i14 + i10;
    }

    public String toString() {
        String str = this.f43162a;
        String str2 = this.f43163b;
        Boolean bool = this.f43164c;
        String str3 = this.f43165d;
        String str4 = this.f43166e;
        return "MaskTextInputState(prefill=" + str + ", mask=" + str2 + ", secure=" + bool + ", label=" + str3 + ", placeholder=" + str4 + ")";
    }
}
