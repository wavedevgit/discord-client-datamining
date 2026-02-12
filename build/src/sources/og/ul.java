package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ul extends jf.a {
    public static final Parcelable.Creator<ul> CREATOR = new vl();

    /* renamed from: d  reason: collision with root package name */
    private final int f39723d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f39724e;

    public ul(int i10, boolean z10) {
        this.f39723d = i10;
        this.f39724e = z10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f39723d;
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, i11);
        jf.c.c(parcel, 2, this.f39724e);
        jf.c.b(parcel, a10);
    }
}
