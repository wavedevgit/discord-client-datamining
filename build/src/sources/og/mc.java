package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class mc extends hf.a {
    public static final Parcelable.Creator<mc> CREATOR = new nd();

    /* renamed from: d  reason: collision with root package name */
    public final int f43294d;

    /* renamed from: e  reason: collision with root package name */
    public final float f43295e;

    /* renamed from: i  reason: collision with root package name */
    public final float f43296i;

    /* renamed from: o  reason: collision with root package name */
    public final int f43297o;

    public mc(int i10, float f10, float f11, int i11) {
        this.f43294d = i10;
        this.f43295e = f10;
        this.f43296i = f11;
        this.f43297o = i11;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f43294d);
        hf.c.j(parcel, 2, this.f43295e);
        hf.c.j(parcel, 3, this.f43296i);
        hf.c.l(parcel, 4, this.f43297o);
        hf.c.b(parcel, a10);
    }
}
