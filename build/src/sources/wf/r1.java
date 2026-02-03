package wf;

import android.os.Parcel;
import android.os.Parcelable;
import java.util.HashSet;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r1 extends hf.a {
    public static final Parcelable.Creator<r1> CREATOR = new s1();

    /* renamed from: d  reason: collision with root package name */
    private final List f52354d;

    public r1(List list) {
        this.f52354d = (List) gf.q.l(list);
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof r1)) {
            return false;
        }
        r1 r1Var = (r1) obj;
        if (!this.f52354d.containsAll(r1Var.f52354d) || !r1Var.f52354d.containsAll(this.f52354d)) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return gf.o.b(new HashSet(this.f52354d));
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        List list = this.f52354d;
        int a10 = hf.c.a(parcel);
        hf.c.w(parcel, 1, list, false);
        hf.c.b(parcel, a10);
    }
}
