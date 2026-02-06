package ng;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ul extends hf.a {
    public static final Parcelable.Creator<ul> CREATOR = new vl();

    /* renamed from: d  reason: collision with root package name */
    private final int f40323d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f40324e;

    public ul(int i10, boolean z10) {
        this.f40323d = i10;
        this.f40324e = z10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f40323d;
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, i11);
        hf.c.c(parcel, 2, this.f40324e);
        hf.c.b(parcel, a10);
    }
}
