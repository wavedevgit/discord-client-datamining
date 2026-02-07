package im;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final String f26878a;

    /* renamed from: b  reason: collision with root package name */
    private final String[] f26879b;

    /* renamed from: c  reason: collision with root package name */
    private final String f26880c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f26881d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f26882e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f26883f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f26884g;

    public f(String str, String[] mimeTypes, String str2, boolean z10, boolean z11, boolean z12, boolean z13) {
        Intrinsics.checkNotNullParameter(mimeTypes, "mimeTypes");
        this.f26878a = str;
        this.f26879b = mimeTypes;
        this.f26880c = str2;
        this.f26881d = z10;
        this.f26882e = z11;
        this.f26883f = z12;
        this.f26884g = z13;
    }

    public final String a() {
        if (Intrinsics.areEqual("open", this.f26878a)) {
            return "android.intent.action.OPEN_DOCUMENT";
        }
        return "android.intent.action.GET_CONTENT";
    }

    public final boolean b() {
        return this.f26884g;
    }

    public final String c() {
        return this.f26880c;
    }

    public final String d() {
        if (Intrinsics.areEqual(a(), "android.intent.action.OPEN_DOCUMENT")) {
            return "*/*";
        }
        return kotlin.collections.i.v0(this.f26879b, "|", null, null, 0, null, null, 62, null);
    }

    public final boolean e() {
        return this.f26881d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof f)) {
            return false;
        }
        f fVar = (f) obj;
        if (Intrinsics.areEqual(this.f26878a, fVar.f26878a) && Intrinsics.areEqual(this.f26879b, fVar.f26879b) && Intrinsics.areEqual(this.f26880c, fVar.f26880c) && this.f26881d == fVar.f26881d && this.f26882e == fVar.f26882e && this.f26883f == fVar.f26883f && this.f26884g == fVar.f26884g) {
            return true;
        }
        return false;
    }

    public final String[] f() {
        return this.f26879b;
    }

    public final boolean g() {
        return this.f26882e;
    }

    public final boolean h() {
        return this.f26883f;
    }

    public int hashCode() {
        int hashCode;
        String str = this.f26878a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode2 = ((hashCode * 31) + Arrays.hashCode(this.f26879b)) * 31;
        String str2 = this.f26880c;
        if (str2 != null) {
            i10 = str2.hashCode();
        }
        return ((((((((hashCode2 + i10) * 31) + Boolean.hashCode(this.f26881d)) * 31) + Boolean.hashCode(this.f26882e)) * 31) + Boolean.hashCode(this.f26883f)) * 31) + Boolean.hashCode(this.f26884g);
    }

    public String toString() {
        String str = this.f26878a;
        String arrays = Arrays.toString(this.f26879b);
        String str2 = this.f26880c;
        boolean z10 = this.f26881d;
        boolean z11 = this.f26882e;
        boolean z12 = this.f26883f;
        boolean z13 = this.f26884g;
        return "PickOptions(mode=" + str + ", mimeTypes=" + arrays + ", initialDirectoryUrl=" + str2 + ", localOnly=" + z10 + ", multiple=" + z11 + ", requestLongTermAccess=" + z12 + ", allowVirtualFiles=" + z13 + ")";
    }
}
