package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class he extends hf.a {
    public static final Parcelable.Creator<he> CREATOR = new ie();

    /* renamed from: d  reason: collision with root package name */
    private final int f44357d;

    /* renamed from: e  reason: collision with root package name */
    private final int f44358e;

    /* renamed from: i  reason: collision with root package name */
    private final int f44359i;

    /* renamed from: o  reason: collision with root package name */
    private final int f44360o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f44361p;

    /* renamed from: q  reason: collision with root package name */
    private final float f44362q;

    public he(int i10, int i11, int i12, int i13, boolean z10, float f10) {
        this.f44357d = i10;
        this.f44358e = i11;
        this.f44359i = i12;
        this.f44360o = i13;
        this.f44361p = z10;
        this.f44362q = f10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f44357d);
        hf.c.l(parcel, 2, this.f44358e);
        hf.c.l(parcel, 3, this.f44359i);
        hf.c.l(parcel, 4, this.f44360o);
        hf.c.c(parcel, 5, this.f44361p);
        hf.c.j(parcel, 6, this.f44362q);
        hf.c.b(parcel, a10);
    }
}
