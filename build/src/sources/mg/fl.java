package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class fl extends hf.a {
    public static final Parcelable.Creator<fl> CREATOR = new el();

    /* renamed from: d  reason: collision with root package name */
    private final int f37649d;

    /* renamed from: e  reason: collision with root package name */
    private final String[] f37650e;

    public fl(int i10, String[] strArr) {
        this.f37649d = i10;
        this.f37650e = strArr;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f37649d);
        hf.c.t(parcel, 2, this.f37650e, false);
        hf.c.b(parcel, a10);
    }
}
