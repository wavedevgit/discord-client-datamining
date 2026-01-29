package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class he extends hf.a {
    public static final Parcelable.Creator<he> CREATOR = new ie();

    /* renamed from: d  reason: collision with root package name */
    private final int f43117d;

    /* renamed from: e  reason: collision with root package name */
    private final int f43118e;

    /* renamed from: i  reason: collision with root package name */
    private final int f43119i;

    /* renamed from: o  reason: collision with root package name */
    private final int f43120o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f43121p;

    /* renamed from: q  reason: collision with root package name */
    private final float f43122q;

    public he(int i10, int i11, int i12, int i13, boolean z10, float f10) {
        this.f43117d = i10;
        this.f43118e = i11;
        this.f43119i = i12;
        this.f43120o = i13;
        this.f43121p = z10;
        this.f43122q = f10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f43117d);
        hf.c.l(parcel, 2, this.f43118e);
        hf.c.l(parcel, 3, this.f43119i);
        hf.c.l(parcel, 4, this.f43120o);
        hf.c.c(parcel, 5, this.f43121p);
        hf.c.j(parcel, 6, this.f43122q);
        hf.c.b(parcel, a10);
    }
}
