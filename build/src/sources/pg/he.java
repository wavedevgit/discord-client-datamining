package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class he extends hf.a {
    public static final Parcelable.Creator<he> CREATOR = new ie();

    /* renamed from: d  reason: collision with root package name */
    private final int f44309d;

    /* renamed from: e  reason: collision with root package name */
    private final int f44310e;

    /* renamed from: i  reason: collision with root package name */
    private final int f44311i;

    /* renamed from: o  reason: collision with root package name */
    private final int f44312o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f44313p;

    /* renamed from: q  reason: collision with root package name */
    private final float f44314q;

    public he(int i10, int i11, int i12, int i13, boolean z10, float f10) {
        this.f44309d = i10;
        this.f44310e = i11;
        this.f44311i = i12;
        this.f44312o = i13;
        this.f44313p = z10;
        this.f44314q = f10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f44309d);
        hf.c.l(parcel, 2, this.f44310e);
        hf.c.l(parcel, 3, this.f44311i);
        hf.c.l(parcel, 4, this.f44312o);
        hf.c.c(parcel, 5, this.f44313p);
        hf.c.j(parcel, 6, this.f44314q);
        hf.c.b(parcel, a10);
    }
}
