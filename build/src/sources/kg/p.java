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
    private final int f32957d;

    /* renamed from: e  reason: collision with root package name */
    private final String f32958e;

    /* renamed from: i  reason: collision with root package name */
    private final String f32959i;

    /* renamed from: o  reason: collision with root package name */
    private final String f32960o;

    /* renamed from: p  reason: collision with root package name */
    private final List f32961p;

    /* renamed from: q  reason: collision with root package name */
    private final p f32962q;

    /* renamed from: r  reason: collision with root package name */
    public static final k f32956r = new k(null);
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
        this.f32957d = i10;
        this.f32958e = packageName;
        this.f32959i = str;
        if (str2 == null) {
            if (pVar != null) {
                str2 = pVar.f32960o;
            } else {
                str2 = null;
            }
        }
        this.f32960o = str2;
        if (list == null) {
            list = pVar != null ? pVar.f32961p : null;
            if (list == null) {
                list = z.i();
                Intrinsics.checkNotNullExpressionValue(list, "of(...)");
            }
        }
        Intrinsics.checkNotNullParameter(list, "<this>");
        z j10 = z.j(list);
        Intrinsics.checkNotNullExpressionValue(j10, "copyOf(...)");
        this.f32961p = j10;
        this.f32962q = pVar;
    }

    public final boolean b() {
        if (this.f32962q != null) {
            return true;
        }
        return false;
    }

    public final boolean equals(Object obj) {
        if (obj instanceof p) {
            p pVar = (p) obj;
            if (this.f32957d == pVar.f32957d && Intrinsics.areEqual(this.f32958e, pVar.f32958e) && Intrinsics.areEqual(this.f32959i, pVar.f32959i) && Intrinsics.areEqual(this.f32960o, pVar.f32960o) && Intrinsics.areEqual(this.f32962q, pVar.f32962q) && Intrinsics.areEqual(this.f32961p, pVar.f32961p)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return Arrays.hashCode(new Object[]{Integer.valueOf(this.f32957d), this.f32958e, this.f32959i, this.f32960o, this.f32962q});
    }

    public final String toString() {
        int i10;
        int length = this.f32958e.length() + 18;
        String str = this.f32959i;
        int i11 = 0;
        if (str != null) {
            i10 = str.length();
        } else {
            i10 = 0;
        }
        StringBuilder sb2 = new StringBuilder(length + i10);
        sb2.append(this.f32957d);
        sb2.append("/");
        sb2.append(this.f32958e);
        String str2 = this.f32959i;
        if (str2 != null) {
            sb2.append("[");
            if (StringsKt.P(str2, this.f32958e, false, 2, null)) {
                sb2.append((CharSequence) str2, this.f32958e.length(), str2.length());
            } else {
                sb2.append(str2);
            }
            sb2.append("]");
        }
        if (this.f32960o != null) {
            sb2.append("/");
            String str3 = this.f32960o;
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
        int i11 = this.f32957d;
        int a10 = hf.c.a(dest);
        hf.c.l(dest, 1, i11);
        hf.c.s(dest, 3, this.f32958e, false);
        hf.c.s(dest, 4, this.f32959i, false);
        hf.c.s(dest, 6, this.f32960o, false);
        hf.c.q(dest, 7, this.f32962q, i10, false);
        hf.c.w(dest, 8, this.f32961p, false);
        hf.c.b(dest, a10);
    }
}
