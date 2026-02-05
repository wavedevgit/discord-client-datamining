package kg;

import android.os.Parcel;
import android.os.Parcelable;
import android.os.Process;
import java.util.Arrays;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p extends hf.a {

    /* renamed from: d  reason: collision with root package name */
    private final int f31818d;

    /* renamed from: e  reason: collision with root package name */
    private final String f31819e;

    /* renamed from: i  reason: collision with root package name */
    private final String f31820i;

    /* renamed from: o  reason: collision with root package name */
    private final String f31821o;

    /* renamed from: p  reason: collision with root package name */
    private final List f31822p;

    /* renamed from: q  reason: collision with root package name */
    private final p f31823q;

    /* renamed from: r  reason: collision with root package name */
    public static final k f31817r = new k(null);
    @NotNull
    public static final Parcelable.Creator<p> CREATOR = new c0();

    static {
        Process.myUid();
        Process.myPid();
    }

    public p(int i10, String packageName, String str, String str2, List list, p pVar) {
        Intrinsics.checkNotNullParameter(packageName, "packageName");
        if (pVar != null && pVar.b()) {
            throw new IllegalArgumentException("Failed requirement.");
        }
        this.f31818d = i10;
        this.f31819e = packageName;
        this.f31820i = str;
        if (str2 == null) {
            if (pVar != null) {
                str2 = pVar.f31821o;
            } else {
                str2 = null;
            }
        }
        this.f31821o = str2;
        if (list == null) {
            list = pVar != null ? pVar.f31822p : null;
            if (list == null) {
                list = z.i();
                Intrinsics.checkNotNullExpressionValue(list, "of(...)");
            }
        }
        Intrinsics.checkNotNullParameter(list, "<this>");
        z j10 = z.j(list);
        Intrinsics.checkNotNullExpressionValue(j10, "copyOf(...)");
        this.f31822p = j10;
        this.f31823q = pVar;
    }

    public final boolean b() {
        if (this.f31823q != null) {
            return true;
        }
        return false;
    }

    public final boolean equals(Object obj) {
        if (obj instanceof p) {
            p pVar = (p) obj;
            if (this.f31818d == pVar.f31818d && Intrinsics.areEqual(this.f31819e, pVar.f31819e) && Intrinsics.areEqual(this.f31820i, pVar.f31820i) && Intrinsics.areEqual(this.f31821o, pVar.f31821o) && Intrinsics.areEqual(this.f31823q, pVar.f31823q) && Intrinsics.areEqual(this.f31822p, pVar.f31822p)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return Arrays.hashCode(new Object[]{Integer.valueOf(this.f31818d), this.f31819e, this.f31820i, this.f31821o, this.f31823q});
    }

    public final String toString() {
        int i10;
        int length = this.f31819e.length() + 18;
        String str = this.f31820i;
        int i11 = 0;
        if (str != null) {
            i10 = str.length();
        } else {
            i10 = 0;
        }
        StringBuilder sb2 = new StringBuilder(length + i10);
        sb2.append(this.f31818d);
        sb2.append("/");
        sb2.append(this.f31819e);
        String str2 = this.f31820i;
        if (str2 != null) {
            sb2.append("[");
            if (StringsKt.P(str2, this.f31819e, false, 2, null)) {
                sb2.append((CharSequence) str2, this.f31819e.length(), str2.length());
            } else {
                sb2.append(str2);
            }
            sb2.append("]");
        }
        if (this.f31821o != null) {
            sb2.append("/");
            String str3 = this.f31821o;
            if (str3 != null) {
                i11 = str3.hashCode();
            }
            sb2.append(Integer.toHexString(i11));
        }
        String sb3 = sb2.toString();
        Intrinsics.checkNotNullExpressionValue(sb3, "toString(...)");
        return sb3;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel dest, int i10) {
        Intrinsics.checkNotNullParameter(dest, "dest");
        int i11 = this.f31818d;
        int a10 = hf.c.a(dest);
        hf.c.l(dest, 1, i11);
        hf.c.s(dest, 3, this.f31819e, false);
        hf.c.s(dest, 4, this.f31820i, false);
        hf.c.s(dest, 6, this.f31821o, false);
        hf.c.q(dest, 7, this.f31823q, i10, false);
        hf.c.w(dest, 8, this.f31822p, false);
        hf.c.b(dest, a10);
    }
}
