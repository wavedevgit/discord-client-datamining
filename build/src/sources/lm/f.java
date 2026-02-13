package lm;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final String f36507a;

    /* renamed from: b  reason: collision with root package name */
    private final String[] f36508b;

    /* renamed from: c  reason: collision with root package name */
    private final String f36509c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f36510d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f36511e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f36512f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f36513g;

    public f(String str, String[] mimeTypes, String str2, boolean z10, boolean z11, boolean z12, boolean z13) {
        Intrinsics.checkNotNullParameter(mimeTypes, "mimeTypes");
        this.f36507a = str;
        this.f36508b = mimeTypes;
        this.f36509c = str2;
        this.f36510d = z10;
        this.f36511e = z11;
        this.f36512f = z12;
        this.f36513g = z13;
    }

    public final String a() {
        if (Intrinsics.areEqual("open", this.f36507a)) {
            return "android.intent.action.OPEN_DOCUMENT";
        }
        return "android.intent.action.GET_CONTENT";
    }

    public final boolean b() {
        return this.f36513g;
    }

    public final String c() {
        return this.f36509c;
    }

    public final String d() {
        if (Intrinsics.areEqual(a(), "android.intent.action.OPEN_DOCUMENT")) {
            return "*/*";
        }
        return kotlin.collections.i.v0(this.f36508b, "|", null, null, 0, null, null, 62, null);
    }

    public final boolean e() {
        return this.f36510d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof f)) {
            return false;
        }
        f fVar = (f) obj;
        if (Intrinsics.areEqual(this.f36507a, fVar.f36507a) && Intrinsics.areEqual(this.f36508b, fVar.f36508b) && Intrinsics.areEqual(this.f36509c, fVar.f36509c) && this.f36510d == fVar.f36510d && this.f36511e == fVar.f36511e && this.f36512f == fVar.f36512f && this.f36513g == fVar.f36513g) {
            return true;
        }
        return false;
    }

    public final String[] f() {
        return this.f36508b;
    }

    public final boolean g() {
        return this.f36511e;
    }

    public final boolean h() {
        return this.f36512f;
    }

    public int hashCode() {
        int hashCode;
        String str = this.f36507a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode2 = ((hashCode * 31) + Arrays.hashCode(this.f36508b)) * 31;
        String str2 = this.f36509c;
        if (str2 != null) {
            i10 = str2.hashCode();
        }
        return ((((((((hashCode2 + i10) * 31) + Boolean.hashCode(this.f36510d)) * 31) + Boolean.hashCode(this.f36511e)) * 31) + Boolean.hashCode(this.f36512f)) * 31) + Boolean.hashCode(this.f36513g);
    }

    public String toString() {
        String str = this.f36507a;
        String arrays = Arrays.toString(this.f36508b);
        String str2 = this.f36509c;
        boolean z10 = this.f36510d;
        boolean z11 = this.f36511e;
        boolean z12 = this.f36512f;
        boolean z13 = this.f36513g;
        return "PickOptions(mode=" + str + ", mimeTypes=" + arrays + ", initialDirectoryUrl=" + str2 + ", localOnly=" + z10 + ", multiple=" + z11 + ", requestLongTermAccess=" + z12 + ", allowVirtualFiles=" + z13 + ")";
    }
}
