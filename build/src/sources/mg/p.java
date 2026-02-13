package mg;

import android.os.Parcel;
import android.os.Parcelable;
import android.os.Process;
import java.util.Arrays;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class p extends jf.a {

    /* renamed from: d  reason: collision with root package name */
    private final int f37033d;

    /* renamed from: e  reason: collision with root package name */
    private final String f37034e;

    /* renamed from: i  reason: collision with root package name */
    private final String f37035i;

    /* renamed from: o  reason: collision with root package name */
    private final String f37036o;

    /* renamed from: p  reason: collision with root package name */
    private final List f37037p;

    /* renamed from: q  reason: collision with root package name */
    private final p f37038q;

    /* renamed from: r  reason: collision with root package name */
    public static final k f37032r = new k(null);
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
        this.f37033d = i10;
        this.f37034e = packageName;
        this.f37035i = str;
        if (str2 == null) {
            if (pVar != null) {
                str2 = pVar.f37036o;
            } else {
                str2 = null;
            }
        }
        this.f37036o = str2;
        if (list == null) {
            list = pVar != null ? pVar.f37037p : null;
            if (list == null) {
                list = z.j();
                Intrinsics.checkNotNullExpressionValue(list, "of(...)");
            }
        }
        Intrinsics.checkNotNullParameter(list, "<this>");
        z k10 = z.k(list);
        Intrinsics.checkNotNullExpressionValue(k10, "copyOf(...)");
        this.f37037p = k10;
        this.f37038q = pVar;
    }

    public final boolean b() {
        if (this.f37038q != null) {
            return true;
        }
        return false;
    }

    public final boolean equals(Object obj) {
        if (obj instanceof p) {
            p pVar = (p) obj;
            if (this.f37033d == pVar.f37033d && Intrinsics.areEqual(this.f37034e, pVar.f37034e) && Intrinsics.areEqual(this.f37035i, pVar.f37035i) && Intrinsics.areEqual(this.f37036o, pVar.f37036o) && Intrinsics.areEqual(this.f37038q, pVar.f37038q) && Intrinsics.areEqual(this.f37037p, pVar.f37037p)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return Arrays.hashCode(new Object[]{Integer.valueOf(this.f37033d), this.f37034e, this.f37035i, this.f37036o, this.f37038q});
    }

    public final String toString() {
        int i10;
        int length = this.f37034e.length() + 18;
        String str = this.f37035i;
        int i11 = 0;
        if (str != null) {
            i10 = str.length();
        } else {
            i10 = 0;
        }
        StringBuilder sb2 = new StringBuilder(length + i10);
        sb2.append(this.f37033d);
        sb2.append("/");
        sb2.append(this.f37034e);
        String str2 = this.f37035i;
        if (str2 != null) {
            sb2.append("[");
            if (StringsKt.P(str2, this.f37034e, false, 2, null)) {
                sb2.append((CharSequence) str2, this.f37034e.length(), str2.length());
            } else {
                sb2.append(str2);
            }
            sb2.append("]");
        }
        if (this.f37036o != null) {
            sb2.append("/");
            String str3 = this.f37036o;
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
        int i11 = this.f37033d;
        int a10 = jf.c.a(dest);
        jf.c.l(dest, 1, i11);
        jf.c.s(dest, 3, this.f37034e, false);
        jf.c.s(dest, 4, this.f37035i, false);
        jf.c.s(dest, 6, this.f37036o, false);
        jf.c.q(dest, 7, this.f37038q, i10, false);
        jf.c.w(dest, 8, this.f37037p, false);
        jf.c.b(dest, a10);
    }
}
