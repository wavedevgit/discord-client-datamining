package wf;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l0 extends hf.a {
    public static final Parcelable.Creator<l0> CREATOR = new m0();

    /* renamed from: d  reason: collision with root package name */
    private final String f52295d;

    public l0(String str) {
        this.f52295d = (String) gf.q.l(str);
    }

    public final boolean equals(Object obj) {
        if (!(obj instanceof l0)) {
            return false;
        }
        return this.f52295d.equals(((l0) obj).f52295d);
    }

    public final int hashCode() {
        return gf.o.b(this.f52295d);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        String str = this.f52295d;
        int a10 = hf.c.a(parcel);
        hf.c.s(parcel, 1, str, false);
        hf.c.b(parcel, a10);
    }
}
