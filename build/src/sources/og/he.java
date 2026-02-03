package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class he extends hf.a {
    public static final Parcelable.Creator<he> CREATOR = new ie();

    /* renamed from: d  reason: collision with root package name */
    private final int f43061d;

    /* renamed from: e  reason: collision with root package name */
    private final int f43062e;

    /* renamed from: i  reason: collision with root package name */
    private final int f43063i;

    /* renamed from: o  reason: collision with root package name */
    private final int f43064o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f43065p;

    /* renamed from: q  reason: collision with root package name */
    private final float f43066q;

    public he(int i10, int i11, int i12, int i13, boolean z10, float f10) {
        this.f43061d = i10;
        this.f43062e = i11;
        this.f43063i = i12;
        this.f43064o = i13;
        this.f43065p = z10;
        this.f43066q = f10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f43061d);
        hf.c.l(parcel, 2, this.f43062e);
        hf.c.l(parcel, 3, this.f43063i);
        hf.c.l(parcel, 4, this.f43064o);
        hf.c.c(parcel, 5, this.f43065p);
        hf.c.j(parcel, 6, this.f43066q);
        hf.c.b(parcel, a10);
    }
}
