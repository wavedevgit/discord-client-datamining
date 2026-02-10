package jm;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final String f30282a;

    /* renamed from: b  reason: collision with root package name */
    private final String[] f30283b;

    /* renamed from: c  reason: collision with root package name */
    private final String f30284c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f30285d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f30286e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f30287f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f30288g;

    public f(String str, String[] mimeTypes, String str2, boolean z10, boolean z11, boolean z12, boolean z13) {
        Intrinsics.checkNotNullParameter(mimeTypes, "mimeTypes");
        this.f30282a = str;
        this.f30283b = mimeTypes;
        this.f30284c = str2;
        this.f30285d = z10;
        this.f30286e = z11;
        this.f30287f = z12;
        this.f30288g = z13;
    }

    public final String a() {
        if (Intrinsics.areEqual("open", this.f30282a)) {
            return "android.intent.action.OPEN_DOCUMENT";
        }
        return "android.intent.action.GET_CONTENT";
    }

    public final boolean b() {
        return this.f30288g;
    }

    public final String c() {
        return this.f30284c;
    }

    public final String d() {
        if (Intrinsics.areEqual(a(), "android.intent.action.OPEN_DOCUMENT")) {
            return "*/*";
        }
        return kotlin.collections.i.v0(this.f30283b, "|", null, null, 0, null, null, 62, null);
    }

    public final boolean e() {
        return this.f30285d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof f)) {
            return false;
        }
        f fVar = (f) obj;
        if (Intrinsics.areEqual(this.f30282a, fVar.f30282a) && Intrinsics.areEqual(this.f30283b, fVar.f30283b) && Intrinsics.areEqual(this.f30284c, fVar.f30284c) && this.f30285d == fVar.f30285d && this.f30286e == fVar.f30286e && this.f30287f == fVar.f30287f && this.f30288g == fVar.f30288g) {
            return true;
        }
        return false;
    }

    public final String[] f() {
        return this.f30283b;
    }

    public final boolean g() {
        return this.f30286e;
    }

    public final boolean h() {
        return this.f30287f;
    }

    public int hashCode() {
        int hashCode;
        String str = this.f30282a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode2 = ((hashCode * 31) + Arrays.hashCode(this.f30283b)) * 31;
        String str2 = this.f30284c;
        if (str2 != null) {
            i10 = str2.hashCode();
        }
        return ((((((((hashCode2 + i10) * 31) + Boolean.hashCode(this.f30285d)) * 31) + Boolean.hashCode(this.f30286e)) * 31) + Boolean.hashCode(this.f30287f)) * 31) + Boolean.hashCode(this.f30288g);
    }

    public String toString() {
        String str = this.f30282a;
        String arrays = Arrays.toString(this.f30283b);
        String str2 = this.f30284c;
        boolean z10 = this.f30285d;
        boolean z11 = this.f30286e;
        boolean z12 = this.f30287f;
        boolean z13 = this.f30288g;
        return "PickOptions(mode=" + str + ", mimeTypes=" + arrays + ", initialDirectoryUrl=" + str2 + ", localOnly=" + z10 + ", multiple=" + z11 + ", requestLongTermAccess=" + z12 + ", allowVirtualFiles=" + z13 + ")";
    }
}
