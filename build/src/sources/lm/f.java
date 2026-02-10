package lm;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final String f35938a;

    /* renamed from: b  reason: collision with root package name */
    private final String[] f35939b;

    /* renamed from: c  reason: collision with root package name */
    private final String f35940c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f35941d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f35942e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f35943f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f35944g;

    public f(String str, String[] mimeTypes, String str2, boolean z10, boolean z11, boolean z12, boolean z13) {
        Intrinsics.checkNotNullParameter(mimeTypes, "mimeTypes");
        this.f35938a = str;
        this.f35939b = mimeTypes;
        this.f35940c = str2;
        this.f35941d = z10;
        this.f35942e = z11;
        this.f35943f = z12;
        this.f35944g = z13;
    }

    public final String a() {
        if (Intrinsics.areEqual("open", this.f35938a)) {
            return "android.intent.action.OPEN_DOCUMENT";
        }
        return "android.intent.action.GET_CONTENT";
    }

    public final boolean b() {
        return this.f35944g;
    }

    public final String c() {
        return this.f35940c;
    }

    public final String d() {
        if (Intrinsics.areEqual(a(), "android.intent.action.OPEN_DOCUMENT")) {
            return "*/*";
        }
        return kotlin.collections.i.v0(this.f35939b, "|", null, null, 0, null, null, 62, null);
    }

    public final boolean e() {
        return this.f35941d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof f)) {
            return false;
        }
        f fVar = (f) obj;
        if (Intrinsics.areEqual(this.f35938a, fVar.f35938a) && Intrinsics.areEqual(this.f35939b, fVar.f35939b) && Intrinsics.areEqual(this.f35940c, fVar.f35940c) && this.f35941d == fVar.f35941d && this.f35942e == fVar.f35942e && this.f35943f == fVar.f35943f && this.f35944g == fVar.f35944g) {
            return true;
        }
        return false;
    }

    public final String[] f() {
        return this.f35939b;
    }

    public final boolean g() {
        return this.f35942e;
    }

    public final boolean h() {
        return this.f35943f;
    }

    public int hashCode() {
        int hashCode;
        String str = this.f35938a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode2 = ((hashCode * 31) + Arrays.hashCode(this.f35939b)) * 31;
        String str2 = this.f35940c;
        if (str2 != null) {
            i10 = str2.hashCode();
        }
        return ((((((((hashCode2 + i10) * 31) + Boolean.hashCode(this.f35941d)) * 31) + Boolean.hashCode(this.f35942e)) * 31) + Boolean.hashCode(this.f35943f)) * 31) + Boolean.hashCode(this.f35944g);
    }

    public String toString() {
        String str = this.f35938a;
        String arrays = Arrays.toString(this.f35939b);
        String str2 = this.f35940c;
        boolean z10 = this.f35941d;
        boolean z11 = this.f35942e;
        boolean z12 = this.f35943f;
        boolean z13 = this.f35944g;
        return "PickOptions(mode=" + str + ", mimeTypes=" + arrays + ", initialDirectoryUrl=" + str2 + ", localOnly=" + z10 + ", multiple=" + z11 + ", requestLongTermAccess=" + z12 + ", allowVirtualFiles=" + z13 + ")";
    }
}
