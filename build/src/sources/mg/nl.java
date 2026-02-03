package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class nl extends hf.a {
    public static final Parcelable.Creator<nl> CREATOR = new hm();

    /* renamed from: d  reason: collision with root package name */
    private final int f38304d;

    /* renamed from: e  reason: collision with root package name */
    private final String f38305e;

    public nl(int i10, String str) {
        this.f38304d = i10;
        this.f38305e = str;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f38304d);
        hf.c.s(parcel, 2, this.f38305e, false);
        hf.c.b(parcel, a10);
    }
}
