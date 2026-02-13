package pq;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y3 {

    /* renamed from: a  reason: collision with root package name */
    private final String f43730a;

    /* renamed from: b  reason: collision with root package name */
    private final String f43731b;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f43732c;

    /* renamed from: d  reason: collision with root package name */
    private final String f43733d;

    /* renamed from: e  reason: collision with root package name */
    private final String f43734e;

    public y3(String str, String str2, Boolean bool, String str3, String str4) {
        this.f43730a = str;
        this.f43731b = str2;
        this.f43732c = bool;
        this.f43733d = str3;
        this.f43734e = str4;
    }

    public final String a() {
        return this.f43733d;
    }

    public final String b() {
        return this.f43731b;
    }

    public final String c() {
        return this.f43734e;
    }

    public final String d() {
        return this.f43730a;
    }

    public final Boolean e() {
        return this.f43732c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof y3)) {
            return false;
        }
        y3 y3Var = (y3) obj;
        if (Intrinsics.areEqual(this.f43730a, y3Var.f43730a) && Intrinsics.areEqual(this.f43731b, y3Var.f43731b) && Intrinsics.areEqual(this.f43732c, y3Var.f43732c) && Intrinsics.areEqual(this.f43733d, y3Var.f43733d) && Intrinsics.areEqual(this.f43734e, y3Var.f43734e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        String str = this.f43730a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = hashCode * 31;
        String str2 = this.f43731b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        Boolean bool = this.f43732c;
        if (bool == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = bool.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str3 = this.f43733d;
        if (str3 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str3.hashCode();
        }
        int i14 = (i13 + hashCode4) * 31;
        String str4 = this.f43734e;
        if (str4 != null) {
            i10 = str4.hashCode();
        }
        return i14 + i10;
    }

    public String toString() {
        String str = this.f43730a;
        String str2 = this.f43731b;
        Boolean bool = this.f43732c;
        String str3 = this.f43733d;
        String str4 = this.f43734e;
        return "MaskTextInputState(prefill=" + str + ", mask=" + str2 + ", secure=" + bool + ", label=" + str3 + ", placeholder=" + str4 + ")";
    }
}
