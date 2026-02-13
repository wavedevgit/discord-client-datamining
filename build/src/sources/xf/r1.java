package xf;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.HashSet;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r1 extends jf.a {
    public static final Parcelable.Creator<r1> CREATOR = new s1();

    /* renamed from: d  reason: collision with root package name */
    private final List f55299d;

    public r1(List list) {
        this.f55299d = (List) hf.q.l(list);
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof r1)) {
            return false;
        }
        r1 r1Var = (r1) obj;
        if (!this.f55299d.containsAll(r1Var.f55299d) || !r1Var.f55299d.containsAll(this.f55299d)) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return hf.o.b(new HashSet(this.f55299d));
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        List list = this.f55299d;
        int a10 = jf.c.a(parcel);
        jf.c.w(parcel, 1, list, false);
        jf.c.b(parcel, a10);
    }
}
