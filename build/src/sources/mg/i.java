package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i extends hf.a {
    public static final Parcelable.Creator<i> CREATOR = new j();

    /* renamed from: d  reason: collision with root package name */
    public int f38271d;

    /* renamed from: e  reason: collision with root package name */
    public boolean f38272e;

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
        if (this.f38271d == iVar.f38271d && gf.o.a(Boolean.valueOf(this.f38272e), Boolean.valueOf(iVar.f38272e))) {
            return true;
        }
        return false;
    }

    public final int hashCode() {
        return gf.o.b(Integer.valueOf(this.f38271d), Boolean.valueOf(this.f38272e));
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f38271d);
        hf.c.c(parcel, 3, this.f38272e);
        hf.c.b(parcel, a10);
    }

    public i(int i10, boolean z10) {
        this.f38271d = i10;
        this.f38272e = z10;
    }
}
