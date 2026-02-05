package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class he extends hf.a {
    public static final Parcelable.Creator<he> CREATOR = new ie();

    /* renamed from: d  reason: collision with root package name */
    private final int f42967d;

    /* renamed from: e  reason: collision with root package name */
    private final int f42968e;

    /* renamed from: i  reason: collision with root package name */
    private final int f42969i;

    /* renamed from: o  reason: collision with root package name */
    private final int f42970o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f42971p;

    /* renamed from: q  reason: collision with root package name */
    private final float f42972q;

    public he(int i10, int i11, int i12, int i13, boolean z10, float f10) {
        this.f42967d = i10;
        this.f42968e = i11;
        this.f42969i = i12;
        this.f42970o = i13;
        this.f42971p = z10;
        this.f42972q = f10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f42967d);
        hf.c.l(parcel, 2, this.f42968e);
        hf.c.l(parcel, 3, this.f42969i);
        hf.c.l(parcel, 4, this.f42970o);
        hf.c.c(parcel, 5, this.f42971p);
        hf.c.j(parcel, 6, this.f42972q);
        hf.c.b(parcel, a10);
    }
}
