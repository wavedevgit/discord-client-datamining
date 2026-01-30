package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class he extends hf.a {
    public static final Parcelable.Creator<he> CREATOR = new ie();

    /* renamed from: d  reason: collision with root package name */
    private final int f43133d;

    /* renamed from: e  reason: collision with root package name */
    private final int f43134e;

    /* renamed from: i  reason: collision with root package name */
    private final int f43135i;

    /* renamed from: o  reason: collision with root package name */
    private final int f43136o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f43137p;

    /* renamed from: q  reason: collision with root package name */
    private final float f43138q;

    public he(int i10, int i11, int i12, int i13, boolean z10, float f10) {
        this.f43133d = i10;
        this.f43134e = i11;
        this.f43135i = i12;
        this.f43136o = i13;
        this.f43137p = z10;
        this.f43138q = f10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f43133d);
        hf.c.l(parcel, 2, this.f43134e);
        hf.c.l(parcel, 3, this.f43135i);
        hf.c.l(parcel, 4, this.f43136o);
        hf.c.c(parcel, 5, this.f43137p);
        hf.c.j(parcel, 6, this.f43138q);
        hf.c.b(parcel, a10);
    }
}
