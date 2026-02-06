package fq;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y3 {

    /* renamed from: a  reason: collision with root package name */
    private final String f23685a;

    /* renamed from: b  reason: collision with root package name */
    private final String f23686b;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f23687c;

    /* renamed from: d  reason: collision with root package name */
    private final String f23688d;

    /* renamed from: e  reason: collision with root package name */
    private final String f23689e;

    public y3(String str, String str2, Boolean bool, String str3, String str4) {
        this.f23685a = str;
        this.f23686b = str2;
        this.f23687c = bool;
        this.f23688d = str3;
        this.f23689e = str4;
    }

    public final String a() {
        return this.f23688d;
    }

    public final String b() {
        return this.f23686b;
    }

    public final String c() {
        return this.f23689e;
    }

    public final String d() {
        return this.f23685a;
    }

    public final Boolean e() {
        return this.f23687c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof y3)) {
            return false;
        }
        y3 y3Var = (y3) obj;
        if (Intrinsics.areEqual(this.f23685a, y3Var.f23685a) && Intrinsics.areEqual(this.f23686b, y3Var.f23686b) && Intrinsics.areEqual(this.f23687c, y3Var.f23687c) && Intrinsics.areEqual(this.f23688d, y3Var.f23688d) && Intrinsics.areEqual(this.f23689e, y3Var.f23689e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        String str = this.f23685a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = hashCode * 31;
        String str2 = this.f23686b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        Boolean bool = this.f23687c;
        if (bool == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = bool.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str3 = this.f23688d;
        if (str3 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str3.hashCode();
        }
        int i14 = (i13 + hashCode4) * 31;
        String str4 = this.f23689e;
        if (str4 != null) {
            i10 = str4.hashCode();
        }
        return i14 + i10;
    }

    public String toString() {
        String str = this.f23685a;
        String str2 = this.f23686b;
        Boolean bool = this.f23687c;
        String str3 = this.f23688d;
        String str4 = this.f23689e;
        return "MaskTextInputState(prefill=" + str + ", mask=" + str2 + ", secure=" + bool + ", label=" + str3 + ", placeholder=" + str4 + ")";
    }
}
