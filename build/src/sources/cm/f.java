package cm;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final String f8516a;

    /* renamed from: b  reason: collision with root package name */
    private final String[] f8517b;

    /* renamed from: c  reason: collision with root package name */
    private final String f8518c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f8519d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f8520e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f8521f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f8522g;

    public f(String str, String[] mimeTypes, String str2, boolean z10, boolean z11, boolean z12, boolean z13) {
        Intrinsics.checkNotNullParameter(mimeTypes, "mimeTypes");
        this.f8516a = str;
        this.f8517b = mimeTypes;
        this.f8518c = str2;
        this.f8519d = z10;
        this.f8520e = z11;
        this.f8521f = z12;
        this.f8522g = z13;
    }

    public final String a() {
        if (Intrinsics.areEqual("open", this.f8516a)) {
            return "android.intent.action.OPEN_DOCUMENT";
        }
        return "android.intent.action.GET_CONTENT";
    }

    public final boolean b() {
        return this.f8522g;
    }

    public final String c() {
        return this.f8518c;
    }

    public final String d() {
        if (Intrinsics.areEqual(a(), "android.intent.action.OPEN_DOCUMENT")) {
            return "*/*";
        }
        return kotlin.collections.i.v0(this.f8517b, "|", null, null, 0, null, null, 62, null);
    }

    public final boolean e() {
        return this.f8519d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof f)) {
            return false;
        }
        f fVar = (f) obj;
        if (Intrinsics.areEqual(this.f8516a, fVar.f8516a) && Intrinsics.areEqual(this.f8517b, fVar.f8517b) && Intrinsics.areEqual(this.f8518c, fVar.f8518c) && this.f8519d == fVar.f8519d && this.f8520e == fVar.f8520e && this.f8521f == fVar.f8521f && this.f8522g == fVar.f8522g) {
            return true;
        }
        return false;
    }

    public final String[] f() {
        return this.f8517b;
    }

    public final boolean g() {
        return this.f8520e;
    }

    public final boolean h() {
        return this.f8521f;
    }

    public int hashCode() {
        int hashCode;
        String str = this.f8516a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode2 = ((hashCode * 31) + Arrays.hashCode(this.f8517b)) * 31;
        String str2 = this.f8518c;
        if (str2 != null) {
            i10 = str2.hashCode();
        }
        return ((((((((hashCode2 + i10) * 31) + Boolean.hashCode(this.f8519d)) * 31) + Boolean.hashCode(this.f8520e)) * 31) + Boolean.hashCode(this.f8521f)) * 31) + Boolean.hashCode(this.f8522g);
    }

    public String toString() {
        String str = this.f8516a;
        String arrays = Arrays.toString(this.f8517b);
        String str2 = this.f8518c;
        boolean z10 = this.f8519d;
        boolean z11 = this.f8520e;
        boolean z12 = this.f8521f;
        boolean z13 = this.f8522g;
        return "PickOptions(mode=" + str + ", mimeTypes=" + arrays + ", initialDirectoryUrl=" + str2 + ", localOnly=" + z10 + ", multiple=" + z11 + ", requestLongTermAccess=" + z12 + ", allowVirtualFiles=" + z13 + ")";
    }
}
