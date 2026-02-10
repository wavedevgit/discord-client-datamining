package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i extends jf.a {
    public static final Parcelable.Creator<i> CREATOR = new j();

    /* renamed from: d  reason: collision with root package name */
    public int f40946d;

    /* renamed from: e  reason: collision with root package name */
    public boolean f40947e;

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
        if (this.f40946d == iVar.f40946d && hf.o.a(Boolean.valueOf(this.f40947e), Boolean.valueOf(iVar.f40947e))) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return hf.o.b(Integer.valueOf(this.f40946d), Boolean.valueOf(this.f40947e));
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, this.f40946d);
        jf.c.c(parcel, 3, this.f40947e);
        jf.c.b(parcel, a10);
    }

    public i(int i10, boolean z10) {
        this.f40946d = i10;
        this.f40947e = z10;
    }
}
