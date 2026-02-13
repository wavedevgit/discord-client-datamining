package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i extends jf.a {
    public static final Parcelable.Creator<i> CREATOR = new j();

    /* renamed from: d  reason: collision with root package name */
    public int f39841d;

    /* renamed from: e  reason: collision with root package name */
    public boolean f39842e;

    public i() {
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof i)) {
            return false;
        }
        i iVar = (i) obj;
        if (this.f39841d == iVar.f39841d && hf.o.a(Boolean.valueOf(this.f39842e), Boolean.valueOf(iVar.f39842e))) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(Integer.valueOf(this.f39841d), Boolean.valueOf(this.f39842e));
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f39841d);
        jf.c.c(parcel, 3, this.f39842e);
        jf.c.b(parcel, a10);
    }

    public i(int i10, boolean z10) {
        this.f39841d = i10;
        this.f39842e = z10;
    }
}
