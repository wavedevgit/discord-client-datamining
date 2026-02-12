package lm;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final String f35939a;

    /* renamed from: b  reason: collision with root package name */
    private final String[] f35940b;

    /* renamed from: c  reason: collision with root package name */
    private final String f35941c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f35942d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f35943e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f35944f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f35945g;

    public f(String str, String[] mimeTypes, String str2, boolean z10, boolean z11, boolean z12, boolean z13) {
        Intrinsics.checkNotNullParameter(mimeTypes, "mimeTypes");
        this.f35939a = str;
        this.f35940b = mimeTypes;
        this.f35941c = str2;
        this.f35942d = z10;
        this.f35943e = z11;
        this.f35944f = z12;
        this.f35945g = z13;
    }

    public final String a() {
        if (Intrinsics.areEqual("open", this.f35939a)) {
            return "android.intent.action.OPEN_DOCUMENT";
        }
        return "android.intent.action.GET_CONTENT";
    }

    public final boolean b() {
        return this.f35945g;
    }

    public final String c() {
        return this.f35941c;
    }

    public final String d() {
        if (Intrinsics.areEqual(a(), "android.intent.action.OPEN_DOCUMENT")) {
            return "*/*";
        }
        return kotlin.collections.i.v0(this.f35940b, "|", null, null, 0, null, null, 62, null);
    }

    public final boolean e() {
        return this.f35942d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof f)) {
            return false;
        }
        f fVar = (f) obj;
        if (Intrinsics.areEqual(this.f35939a, fVar.f35939a) && Intrinsics.areEqual(this.f35940b, fVar.f35940b) && Intrinsics.areEqual(this.f35941c, fVar.f35941c) && this.f35942d == fVar.f35942d && this.f35943e == fVar.f35943e && this.f35944f == fVar.f35944f && this.f35945g == fVar.f35945g) {
            return true;
        }
        return false;
    }

    public final String[] f() {
        return this.f35940b;
    }

    public final boolean g() {
        return this.f35943e;
    }

    public final boolean h() {
        return this.f35944f;
    }

    public int hashCode() {
        int hashCode;
        String str = this.f35939a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode2 = ((hashCode * 31) + Arrays.hashCode(this.f35940b)) * 31;
        String str2 = this.f35941c;
        if (str2 != null) {
            i10 = str2.hashCode();
        }
        return ((((((((hashCode2 + i10) * 31) + Boolean.hashCode(this.f35942d)) * 31) + Boolean.hashCode(this.f35943e)) * 31) + Boolean.hashCode(this.f35944f)) * 31) + Boolean.hashCode(this.f35945g);
    }

    public String toString() {
        String str = this.f35939a;
        String arrays = Arrays.toString(this.f35940b);
        String str2 = this.f35941c;
        boolean z10 = this.f35942d;
        boolean z11 = this.f35943e;
        boolean z12 = this.f35944f;
        boolean z13 = this.f35945g;
        return "PickOptions(mode=" + str + ", mimeTypes=" + arrays + ", initialDirectoryUrl=" + str2 + ", localOnly=" + z10 + ", multiple=" + z11 + ", requestLongTermAccess=" + z12 + ", allowVirtualFiles=" + z13 + ")";
    }
}
