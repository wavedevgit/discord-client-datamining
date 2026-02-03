package aq;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class y3 {

    /* renamed from: a  reason: collision with root package name */
    private final String f6103a;

    /* renamed from: b  reason: collision with root package name */
    private final String f6104b;

    /* renamed from: c  reason: collision with root package name */
    private final Boolean f6105c;

    /* renamed from: d  reason: collision with root package name */
    private final String f6106d;

    /* renamed from: e  reason: collision with root package name */
    private final String f6107e;

    public y3(String str, String str2, Boolean bool, String str3, String str4) {
        this.f6103a = str;
        this.f6104b = str2;
        this.f6105c = bool;
        this.f6106d = str3;
        this.f6107e = str4;
    }

    public final String a() {
        return this.f6106d;
    }

    public final String b() {
        return this.f6104b;
    }

    public final String c() {
        return this.f6107e;
    }

    public final String d() {
        return this.f6103a;
    }

    public final Boolean e() {
        return this.f6105c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof y3)) {
            return false;
        }
        y3 y3Var = (y3) obj;
        if (Intrinsics.areEqual(this.f6103a, y3Var.f6103a) && Intrinsics.areEqual(this.f6104b, y3Var.f6104b) && Intrinsics.areEqual(this.f6105c, y3Var.f6105c) && Intrinsics.areEqual(this.f6106d, y3Var.f6106d) && Intrinsics.areEqual(this.f6107e, y3Var.f6107e)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2;
        int hashCode3;
        int hashCode4;
        String str = this.f6103a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int i11 = hashCode * 31;
        String str2 = this.f6104b;
        if (str2 == null) {
            hashCode2 = 0;
        } else {
            hashCode2 = str2.hashCode();
        }
        int i12 = (i11 + hashCode2) * 31;
        Boolean bool = this.f6105c;
        if (bool == null) {
            hashCode3 = 0;
        } else {
            hashCode3 = bool.hashCode();
        }
        int i13 = (i12 + hashCode3) * 31;
        String str3 = this.f6106d;
        if (str3 == null) {
            hashCode4 = 0;
        } else {
            hashCode4 = str3.hashCode();
        }
        int i14 = (i13 + hashCode4) * 31;
        String str4 = this.f6107e;
        if (str4 != null) {
            i10 = str4.hashCode();
        }
        return i14 + i10;
    }

    public String toString() {
        String str = this.f6103a;
        String str2 = this.f6104b;
        Boolean bool = this.f6105c;
        String str3 = this.f6106d;
        String str4 = this.f6107e;
        return "MaskTextInputState(prefill=" + str + ", mask=" + str2 + ", secure=" + bool + ", label=" + str3 + ", placeholder=" + str4 + ")";
    }
}
