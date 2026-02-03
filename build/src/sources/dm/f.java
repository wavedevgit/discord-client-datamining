package dm;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final String f20704a;

    /* renamed from: b  reason: collision with root package name */
    private final String[] f20705b;

    /* renamed from: c  reason: collision with root package name */
    private final String f20706c;

    /* renamed from: d  reason: collision with root package name */
    private final boolean f20707d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f20708e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f20709f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f20710g;

    public f(String str, String[] mimeTypes, String str2, boolean z10, boolean z11, boolean z12, boolean z13) {
        Intrinsics.checkNotNullParameter(mimeTypes, "mimeTypes");
        this.f20704a = str;
        this.f20705b = mimeTypes;
        this.f20706c = str2;
        this.f20707d = z10;
        this.f20708e = z11;
        this.f20709f = z12;
        this.f20710g = z13;
    }

    public final String a() {
        if (Intrinsics.areEqual("open", this.f20704a)) {
            return "android.intent.action.OPEN_DOCUMENT";
        }
        return "android.intent.action.GET_CONTENT";
    }

    public final boolean b() {
        return this.f20710g;
    }

    public final String c() {
        return this.f20706c;
    }

    public final String d() {
        if (Intrinsics.areEqual(a(), "android.intent.action.OPEN_DOCUMENT")) {
            return "*/*";
        }
        return kotlin.collections.i.v0(this.f20705b, "|", null, null, 0, null, null, 62, null);
    }

    public final boolean e() {
        return this.f20707d;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof f)) {
            return false;
        }
        f fVar = (f) obj;
        if (Intrinsics.areEqual(this.f20704a, fVar.f20704a) && Intrinsics.areEqual(this.f20705b, fVar.f20705b) && Intrinsics.areEqual(this.f20706c, fVar.f20706c) && this.f20707d == fVar.f20707d && this.f20708e == fVar.f20708e && this.f20709f == fVar.f20709f && this.f20710g == fVar.f20710g) {
            return true;
        }
        return false;
    }

    public final String[] f() {
        return this.f20705b;
    }

    public final boolean g() {
        return this.f20708e;
    }

    public final boolean h() {
        return this.f20709f;
    }

    public int hashCode() {
        int hashCode;
        String str = this.f20704a;
        int i10 = 0;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        int hashCode2 = ((hashCode * 31) + Arrays.hashCode(this.f20705b)) * 31;
        String str2 = this.f20706c;
        if (str2 != null) {
            i10 = str2.hashCode();
        }
        return ((((((((hashCode2 + i10) * 31) + Boolean.hashCode(this.f20707d)) * 31) + Boolean.hashCode(this.f20708e)) * 31) + Boolean.hashCode(this.f20709f)) * 31) + Boolean.hashCode(this.f20710g);
    }

    public String toString() {
        String str = this.f20704a;
        String arrays = Arrays.toString(this.f20705b);
        String str2 = this.f20706c;
        boolean z10 = this.f20707d;
        boolean z11 = this.f20708e;
        boolean z12 = this.f20709f;
        boolean z13 = this.f20710g;
        return "PickOptions(mode=" + str + ", mimeTypes=" + arrays + ", initialDirectoryUrl=" + str2 + ", localOnly=" + z10 + ", multiple=" + z11 + ", requestLongTermAccess=" + z12 + ", allowVirtualFiles=" + z13 + ")";
    }
}
