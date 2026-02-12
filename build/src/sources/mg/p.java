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
    private final int f36465d;

    /* renamed from: e  reason: collision with root package name */
    private final String f36466e;

    /* renamed from: i  reason: collision with root package name */
    private final String f36467i;

    /* renamed from: o  reason: collision with root package name */
    private final String f36468o;

    /* renamed from: p  reason: collision with root package name */
    private final List f36469p;

    /* renamed from: q  reason: collision with root package name */
    private final p f36470q;

    /* renamed from: r  reason: collision with root package name */
    public static final k f36464r = new k(null);
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
        this.f36465d = i10;
        this.f36466e = packageName;
        this.f36467i = str;
        if (str2 == null) {
            if (pVar != null) {
                str2 = pVar.f36468o;
            } else {
                str2 = null;
            }
        }
        this.f36468o = str2;
        if (list == null) {
            list = pVar != null ? pVar.f36469p : null;
            if (list == null) {
                list = z.j();
                Intrinsics.checkNotNullExpressionValue(list, "of(...)");
            }
        }
        Intrinsics.checkNotNullParameter(list, "<this>");
        z k10 = z.k(list);
        Intrinsics.checkNotNullExpressionValue(k10, "copyOf(...)");
        this.f36469p = k10;
        this.f36470q = pVar;
    }

    public final boolean b() {
        if (this.f36470q != null) {
            return true;
        }
        return false;
    }

    public final boolean equals(Object obj) {
        if (obj instanceof p) {
            p pVar = (p) obj;
            if (this.f36465d == pVar.f36465d && Intrinsics.areEqual(this.f36466e, pVar.f36466e) && Intrinsics.areEqual(this.f36467i, pVar.f36467i) && Intrinsics.areEqual(this.f36468o, pVar.f36468o) && Intrinsics.areEqual(this.f36470q, pVar.f36470q) && Intrinsics.areEqual(this.f36469p, pVar.f36469p)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return Arrays.hashCode(new Object[]{Integer.valueOf(this.f36465d), this.f36466e, this.f36467i, this.f36468o, this.f36470q});
    }

    public final String toString() {
        int i10;
        int length = this.f36466e.length() + 18;
        String str = this.f36467i;
        int i11 = 0;
        if (str != null) {
            i10 = str.length();
        } else {
            i10 = 0;
        }
        StringBuilder sb2 = new StringBuilder(length + i10);
        sb2.append(this.f36465d);
        sb2.append("/");
        sb2.append(this.f36466e);
        String str2 = this.f36467i;
        if (str2 != null) {
            sb2.append("[");
            if (StringsKt.P(str2, this.f36466e, false, 2, null)) {
                sb2.append((CharSequence) str2, this.f36466e.length(), str2.length());
            } else {
                sb2.append(str2);
            }
            sb2.append("]");
        }
        if (this.f36468o != null) {
            sb2.append("/");
            String str3 = this.f36468o;
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
        int i11 = this.f36465d;
        int a10 = jf.c.a(dest);
        jf.c.l(dest, 1, i11);
        jf.c.s(dest, 3, this.f36466e, false);
        jf.c.s(dest, 4, this.f36467i, false);
        jf.c.s(dest, 6, this.f36468o, false);
        jf.c.q(dest, 7, this.f36470q, i10, false);
        jf.c.w(dest, 8, this.f36469p, false);
        jf.c.b(dest, a10);
    }
}
