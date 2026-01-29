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
    private final int f33195d;

    /* renamed from: e  reason: collision with root package name */
    private final String f33196e;

    /* renamed from: i  reason: collision with root package name */
    private final String f33197i;

    /* renamed from: o  reason: collision with root package name */
    private final String f33198o;

    /* renamed from: p  reason: collision with root package name */
    private final List f33199p;

    /* renamed from: q  reason: collision with root package name */
    private final p f33200q;

    /* renamed from: r  reason: collision with root package name */
    public static final k f33194r = new k(null);
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
        this.f33195d = i10;
        this.f33196e = packageName;
        this.f33197i = str;
        if (str2 == null) {
            if (pVar != null) {
                str2 = pVar.f33198o;
            } else {
                str2 = null;
            }
        }
        this.f33198o = str2;
        if (list == null) {
            list = pVar != null ? pVar.f33199p : null;
            if (list == null) {
                list = z.i();
                Intrinsics.checkNotNullExpressionValue(list, "of(...)");
            }
        }
        Intrinsics.checkNotNullParameter(list, "<this>");
        z j10 = z.j(list);
        Intrinsics.checkNotNullExpressionValue(j10, "copyOf(...)");
        this.f33199p = j10;
        this.f33200q = pVar;
    }

    public final boolean b() {
        if (this.f33200q != null) {
            return true;
        }
        return false;
    }

    public final boolean equals(Object obj) {
        if (obj instanceof p) {
            p pVar = (p) obj;
            if (this.f33195d == pVar.f33195d && Intrinsics.areEqual(this.f33196e, pVar.f33196e) && Intrinsics.areEqual(this.f33197i, pVar.f33197i) && Intrinsics.areEqual(this.f33198o, pVar.f33198o) && Intrinsics.areEqual(this.f33200q, pVar.f33200q) && Intrinsics.areEqual(this.f33199p, pVar.f33199p)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return Arrays.hashCode(new Object[]{Integer.valueOf(this.f33195d), this.f33196e, this.f33197i, this.f33198o, this.f33200q});
    }

    public final String toString() {
        int i10;
        int length = this.f33196e.length() + 18;
        String str = this.f33197i;
        int i11 = 0;
        if (str != null) {
            i10 = str.length();
        } else {
            i10 = 0;
        }
        StringBuilder sb2 = new StringBuilder(length + i10);
        sb2.append(this.f33195d);
        sb2.append("/");
        sb2.append(this.f33196e);
        String str2 = this.f33197i;
        if (str2 != null) {
            sb2.append("[");
            if (StringsKt.P(str2, this.f33196e, false, 2, null)) {
                sb2.append((CharSequence) str2, this.f33196e.length(), str2.length());
            } else {
                sb2.append(str2);
            }
            sb2.append("]");
        }
        if (this.f33198o != null) {
            sb2.append("/");
            String str3 = this.f33198o;
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
        int i11 = this.f33195d;
        int a10 = hf.c.a(dest);
        hf.c.l(dest, 1, i11);
        hf.c.s(dest, 3, this.f33196e, false);
        hf.c.s(dest, 4, this.f33197i, false);
        hf.c.s(dest, 6, this.f33198o, false);
        hf.c.q(dest, 7, this.f33200q, i10, false);
        hf.c.w(dest, 8, this.f33199p, false);
        hf.c.b(dest, a10);
    }
}
