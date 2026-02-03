package dm;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final String f21845a;

    /* renamed from: b  reason: collision with root package name */
    private final String[] f21846b;

    /* renamed from: c  reason: collision with root package name */
    private final String f21847c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f21848d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f21849e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f21850f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f21851g;

    public f(String str, String[] mimeTypes, String str2, boolean z10, boolean z11, boolean z12, boolean z13) {
        Intrinsics.checkNotNullParameter(mimeTypes, "mimeTypes");
        this.f21845a = str;
        this.f21846b = mimeTypes;
        this.f21847c = str2;
        this.f21848d = z10;
        this.f21849e = z11;
        this.f21850f = z12;
        this.f21851g = z13;
    }

    public final String a() {
        if (Intrinsics.areEqual("open", this.f21845a)) {
            return "android.intent.action.OPEN_DOCUMENT";
        }
        return "android.intent.action.GET_CONTENT";
    }

    public final boolean b() {
        return this.f21851g;
    }

    public final String c() {
        return this.f21847c;
    }

    public final String d() {
        if (Intrinsics.areEqual(a(), "android.intent.action.OPEN_DOCUMENT")) {
            return "*/*";
        }
        return kotlin.collections.i.v0(this.f21846b, "|", null, null, 0, null, null, 62, null);
    }

    public final boolean e() {
        return this.f21848d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof f)) {
            return false;
        }
        f fVar = (f) obj;
        if (Intrinsics.areEqual(this.f21845a, fVar.f21845a) && Intrinsics.areEqual(this.f21846b, fVar.f21846b) && Intrinsics.areEqual(this.f21847c, fVar.f21847c) && this.f21848d == fVar.f21848d && this.f21849e == fVar.f21849e && this.f21850f == fVar.f21850f && this.f21851g == fVar.f21851g) {
            return true;
        }
        return false;
    }

    public final String[] f() {
        return this.f21846b;
    }

    public final boolean g() {
        return this.f21849e;
    }

    public final boolean h() {
        return this.f21850f;
    }

    public int hashCode() {
        int hashCode;
        String str = this.f21845a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode2 = ((hashCode * 31) + Arrays.hashCode(this.f21846b)) * 31;
        String str2 = this.f21847c;
        if (str2 != null) {
            i10 = str2.hashCode();
        }
        return ((((((((hashCode2 + i10) * 31) + Boolean.hashCode(this.f21848d)) * 31) + Boolean.hashCode(this.f21849e)) * 31) + Boolean.hashCode(this.f21850f)) * 31) + Boolean.hashCode(this.f21851g);
    }

    public String toString() {
        String str = this.f21845a;
        String arrays = Arrays.toString(this.f21846b);
        String str2 = this.f21847c;
        boolean z10 = this.f21848d;
        boolean z11 = this.f21849e;
        boolean z12 = this.f21850f;
        boolean z13 = this.f21851g;
        return "PickOptions(mode=" + str + ", mimeTypes=" + arrays + ", initialDirectoryUrl=" + str2 + ", localOnly=" + z10 + ", multiple=" + z11 + ", requestLongTermAccess=" + z12 + ", allowVirtualFiles=" + z13 + ")";
    }
}
