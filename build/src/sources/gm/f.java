package gm;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final String f25028a;

    /* renamed from: b  reason: collision with root package name */
    private final String[] f25029b;

    /* renamed from: c  reason: collision with root package name */
    private final String f25030c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f25031d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f25032e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f25033f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f25034g;

    public f(String str, String[] mimeTypes, String str2, boolean z10, boolean z11, boolean z12, boolean z13) {
        Intrinsics.checkNotNullParameter(mimeTypes, "mimeTypes");
        this.f25028a = str;
        this.f25029b = mimeTypes;
        this.f25030c = str2;
        this.f25031d = z10;
        this.f25032e = z11;
        this.f25033f = z12;
        this.f25034g = z13;
    }

    public final String a() {
        if (Intrinsics.areEqual("open", this.f25028a)) {
            return "android.intent.action.OPEN_DOCUMENT";
        }
        return "android.intent.action.GET_CONTENT";
    }

    public final boolean b() {
        return this.f25034g;
    }

    public final String c() {
        return this.f25030c;
    }

    public final String d() {
        if (Intrinsics.areEqual(a(), "android.intent.action.OPEN_DOCUMENT")) {
            return "*/*";
        }
        return kotlin.collections.i.v0(this.f25029b, "|", null, null, 0, null, null, 62, null);
    }

    public final boolean e() {
        return this.f25031d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof f)) {
            return false;
        }
        f fVar = (f) obj;
        if (Intrinsics.areEqual(this.f25028a, fVar.f25028a) && Intrinsics.areEqual(this.f25029b, fVar.f25029b) && Intrinsics.areEqual(this.f25030c, fVar.f25030c) && this.f25031d == fVar.f25031d && this.f25032e == fVar.f25032e && this.f25033f == fVar.f25033f && this.f25034g == fVar.f25034g) {
            return true;
        }
        return false;
    }

    public final String[] f() {
        return this.f25029b;
    }

    public final boolean g() {
        return this.f25032e;
    }

    public final boolean h() {
        return this.f25033f;
    }

    public int hashCode() {
        int hashCode;
        String str = this.f25028a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode2 = ((hashCode * 31) + Arrays.hashCode(this.f25029b)) * 31;
        String str2 = this.f25030c;
        if (str2 != null) {
            i10 = str2.hashCode();
        }
        return ((((((((hashCode2 + i10) * 31) + Boolean.hashCode(this.f25031d)) * 31) + Boolean.hashCode(this.f25032e)) * 31) + Boolean.hashCode(this.f25033f)) * 31) + Boolean.hashCode(this.f25034g);
    }

    public String toString() {
        String str = this.f25028a;
        String arrays = Arrays.toString(this.f25029b);
        String str2 = this.f25030c;
        boolean z10 = this.f25031d;
        boolean z11 = this.f25032e;
        boolean z12 = this.f25033f;
        boolean z13 = this.f25034g;
        return "PickOptions(mode=" + str + ", mimeTypes=" + arrays + ", initialDirectoryUrl=" + str2 + ", localOnly=" + z10 + ", multiple=" + z11 + ", requestLongTermAccess=" + z12 + ", allowVirtualFiles=" + z13 + ")";
    }
}
