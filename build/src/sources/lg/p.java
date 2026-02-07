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
    private final int f36259d;

    /* renamed from: e  reason: collision with root package name */
    private final String f36260e;

    /* renamed from: i  reason: collision with root package name */
    private final String f36261i;

    /* renamed from: o  reason: collision with root package name */
    private final String f36262o;

    /* renamed from: p  reason: collision with root package name */
    private final List f36263p;

    /* renamed from: q  reason: collision with root package name */
    private final p f36264q;

    /* renamed from: r  reason: collision with root package name */
    public static final k f36258r = new k(null);
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
        this.f36259d = i10;
        this.f36260e = packageName;
        this.f36261i = str;
        if (str2 == null) {
            if (pVar != null) {
                str2 = pVar.f36262o;
            } else {
                str2 = null;
            }
        }
        this.f36262o = str2;
        if (list == null) {
            list = pVar != null ? pVar.f36263p : null;
            if (list == null) {
                list = z.i();
                Intrinsics.checkNotNullExpressionValue(list, "of(...)");
            }
        }
        Intrinsics.checkNotNullParameter(list, "<this>");
        z j10 = z.j(list);
        Intrinsics.checkNotNullExpressionValue(j10, "copyOf(...)");
        this.f36263p = j10;
        this.f36264q = pVar;
    }

    public final boolean b() {
        if (this.f36264q != null) {
            return true;
        }
        return false;
    }

    public final boolean equals(Object obj) {
        if (obj instanceof p) {
            p pVar = (p) obj;
            if (this.f36259d == pVar.f36259d && Intrinsics.areEqual(this.f36260e, pVar.f36260e) && Intrinsics.areEqual(this.f36261i, pVar.f36261i) && Intrinsics.areEqual(this.f36262o, pVar.f36262o) && Intrinsics.areEqual(this.f36264q, pVar.f36264q) && Intrinsics.areEqual(this.f36263p, pVar.f36263p)) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return Arrays.hashCode(new Object[]{Integer.valueOf(this.f36259d), this.f36260e, this.f36261i, this.f36262o, this.f36264q});
    }

    public final String toString() {
        int i10;
        int length = this.f36260e.length() + 18;
        String str = this.f36261i;
        int i11 = 0;
        if (str != null) {
            i10 = str.length();
        } else {
            i10 = 0;
        }
        StringBuilder sb2 = new StringBuilder(length + i10);
        sb2.append(this.f36259d);
        sb2.append("/");
        sb2.append(this.f36260e);
        String str2 = this.f36261i;
        if (str2 != null) {
            sb2.append("[");
            if (StringsKt.P(str2, this.f36260e, false, 2, null)) {
                sb2.append((CharSequence) str2, this.f36260e.length(), str2.length());
            } else {
                sb2.append(str2);
            }
            sb2.append("]");
        }
        if (this.f36262o != null) {
            sb2.append("/");
            String str3 = this.f36262o;
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
        int i11 = this.f36259d;
        int a10 = hf.c.a(dest);
        hf.c.l(dest, 1, i11);
        hf.c.s(dest, 3, this.f36260e, false);
        hf.c.s(dest, 4, this.f36261i, false);
        hf.c.s(dest, 6, this.f36262o, false);
        hf.c.q(dest, 7, this.f36264q, i10, false);
        hf.c.w(dest, 8, this.f36263p, false);
        hf.c.b(dest, a10);
    }
}
