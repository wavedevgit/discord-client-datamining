package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class mc extends hf.a {
    public static final Parcelable.Creator<mc> CREATOR = new nd();

    /* renamed from: d  reason: collision with root package name */
    public final int f44534d;

    /* renamed from: e  reason: collision with root package name */
    public final float f44535e;

    /* renamed from: i  reason: collision with root package name */
    public final float f44536i;

    /* renamed from: o  reason: collision with root package name */
    public final int f44537o;

    public mc(int i10, float f10, float f11, int i11) {
        this.f44534d = i10;
        this.f44535e = f10;
        this.f44536i = f11;
        this.f44537o = i11;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f44534d);
        hf.c.j(parcel, 2, this.f44535e);
        hf.c.j(parcel, 3, this.f44536i);
        hf.c.l(parcel, 4, this.f44537o);
        hf.c.b(parcel, a10);
    }
}
