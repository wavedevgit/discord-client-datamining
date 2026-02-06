package lg;

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
    private final int f36211d;

    /* renamed from: e  reason: collision with root package name */
    private final String f36212e;

    /* renamed from: i  reason: collision with root package name */
    private final String f36213i;

    /* renamed from: o  reason: collision with root package name */
    private final String f36214o;

    /* renamed from: p  reason: collision with root package name */
    private final List f36215p;

    /* renamed from: q  reason: collision with root package name */
    private final p f36216q;

    /* renamed from: r  reason: collision with root package name */
    public static final k f36210r = new k(null);
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
        this.f36211d = i10;
        this.f36212e = packageName;
        this.f36213i = str;
        if (str2 == null) {
            if (pVar != null) {
                str2 = pVar.f36214o;
            } else {
                str2 = null;
            }
        }
        this.f36214o = str2;
        if (list == null) {
            list = pVar != null ? pVar.f36215p : null;
            if (list == null) {
                list = z.i();
                Intrinsics.checkNotNullExpressionValue(list, "of(...)");
            }
        }
        Intrinsics.checkNotNullParameter(list, "<this>");
        z j10 = z.j(list);
        Intrinsics.checkNotNullExpressionValue(j10, "copyOf(...)");
        this.f36215p = j10;
        this.f36216q = pVar;
    }

    public final boolean b() {
        if (this.f36216q != null) {
            return true;
        }
        return false;
    }

    public final boolean equals(Object obj) {
        if (obj instanceof p) {
            p pVar = (p) obj;
            if (this.f36211d == pVar.f36211d && Intrinsics.areEqual(this.f36212e, pVar.f36212e) && Intrinsics.areEqual(this.f36213i, pVar.f36213i) && Intrinsics.areEqual(this.f36214o, pVar.f36214o) && Intrinsics.areEqual(this.f36216q, pVar.f36216q) && Intrinsics.areEqual(this.f36215p, pVar.f36215p)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return Arrays.hashCode(new Object[]{Integer.valueOf(this.f36211d), this.f36212e, this.f36213i, this.f36214o, this.f36216q});
    }

    public final String toString() {
        int i10;
        int length = this.f36212e.length() + 18;
        String str = this.f36213i;
        int i11 = 0;
        if (str != null) {
            i10 = str.length();
        } else {
            i10 = 0;
        }
        StringBuilder sb2 = new StringBuilder(length + i10);
        sb2.append(this.f36211d);
        sb2.append("/");
        sb2.append(this.f36212e);
        String str2 = this.f36213i;
        if (str2 != null) {
            sb2.append("[");
            if (StringsKt.P(str2, this.f36212e, false, 2, null)) {
                sb2.append((CharSequence) str2, this.f36212e.length(), str2.length());
            } else {
                sb2.append(str2);
            }
            sb2.append("]");
        }
        if (this.f36214o != null) {
            sb2.append("/");
            String str3 = this.f36214o;
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
        int i11 = this.f36211d;
        int a10 = hf.c.a(dest);
        hf.c.l(dest, 1, i11);
        hf.c.s(dest, 3, this.f36212e, false);
        hf.c.s(dest, 4, this.f36213i, false);
        hf.c.s(dest, 6, this.f36214o, false);
        hf.c.q(dest, 7, this.f36216q, i10, false);
        hf.c.w(dest, 8, this.f36215p, false);
        hf.c.b(dest, a10);
    }
}
