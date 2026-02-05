package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class nl extends hf.a {
    public static final Parcelable.Creator<nl> CREATOR = new hm();

    /* renamed from: d  reason: collision with root package name */
    private final int f37966d;

    /* renamed from: e  reason: collision with root package name */
    private final String f37967e;

    public nl(int i10, String str) {
        this.f37966d = i10;
        this.f37967e = str;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f37966d);
        hf.c.s(parcel, 2, this.f37967e, false);
        hf.c.b(parcel, a10);
    }
}
