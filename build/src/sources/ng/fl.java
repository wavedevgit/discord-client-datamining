package ng;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class fl extends hf.a {
    public static final Parcelable.Creator<fl> CREATOR = new el();

    /* renamed from: d  reason: collision with root package name */
    private final int f39860d;

    /* renamed from: e  reason: collision with root package name */
    private final String[] f39861e;

    public fl(int i10, String[] strArr) {
        this.f39860d = i10;
        this.f39861e = strArr;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f39860d);
        hf.c.t(parcel, 2, this.f39861e, false);
        hf.c.b(parcel, a10);
    }
}
