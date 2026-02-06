package im;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final String f26830a;

    /* renamed from: b  reason: collision with root package name */
    private final String[] f26831b;

    /* renamed from: c  reason: collision with root package name */
    private final String f26832c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f26833d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f26834e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f26835f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f26836g;

    public f(String str, String[] mimeTypes, String str2, boolean z10, boolean z11, boolean z12, boolean z13) {
        Intrinsics.checkNotNullParameter(mimeTypes, "mimeTypes");
        this.f26830a = str;
        this.f26831b = mimeTypes;
        this.f26832c = str2;
        this.f26833d = z10;
        this.f26834e = z11;
        this.f26835f = z12;
        this.f26836g = z13;
    }

    public final String a() {
        if (Intrinsics.areEqual("open", this.f26830a)) {
            return "android.intent.action.OPEN_DOCUMENT";
        }
        return "android.intent.action.GET_CONTENT";
    }

    public final boolean b() {
        return this.f26836g;
    }

    public final String c() {
        return this.f26832c;
    }

    public final String d() {
        if (Intrinsics.areEqual(a(), "android.intent.action.OPEN_DOCUMENT")) {
            return "*/*";
        }
        return kotlin.collections.i.v0(this.f26831b, "|", null, null, 0, null, null, 62, null);
    }

    public final boolean e() {
        return this.f26833d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof f)) {
            return false;
        }
        f fVar = (f) obj;
        if (Intrinsics.areEqual(this.f26830a, fVar.f26830a) && Intrinsics.areEqual(this.f26831b, fVar.f26831b) && Intrinsics.areEqual(this.f26832c, fVar.f26832c) && this.f26833d == fVar.f26833d && this.f26834e == fVar.f26834e && this.f26835f == fVar.f26835f && this.f26836g == fVar.f26836g) {
            return true;
        }
        return false;
    }

    public final String[] f() {
        return this.f26831b;
    }

    public final boolean g() {
        return this.f26834e;
    }

    public final boolean h() {
        return this.f26835f;
    }

    public int hashCode() {
        int hashCode;
        String str = this.f26830a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode2 = ((hashCode * 31) + Arrays.hashCode(this.f26831b)) * 31;
        String str2 = this.f26832c;
        if (str2 != null) {
            i10 = str2.hashCode();
        }
        return ((((((((hashCode2 + i10) * 31) + Boolean.hashCode(this.f26833d)) * 31) + Boolean.hashCode(this.f26834e)) * 31) + Boolean.hashCode(this.f26835f)) * 31) + Boolean.hashCode(this.f26836g);
    }

    public String toString() {
        String str = this.f26830a;
        String arrays = Arrays.toString(this.f26831b);
        String str2 = this.f26832c;
        boolean z10 = this.f26833d;
        boolean z11 = this.f26834e;
        boolean z12 = this.f26835f;
        boolean z13 = this.f26836g;
        return "PickOptions(mode=" + str + ", mimeTypes=" + arrays + ", initialDirectoryUrl=" + str2 + ", localOnly=" + z10 + ", multiple=" + z11 + ", requestLongTermAccess=" + z12 + ", allowVirtualFiles=" + z13 + ")";
    }
}
