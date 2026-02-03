package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class de extends hf.a {
    public static final Parcelable.Creator<de> CREATOR = new ee();

    /* renamed from: d  reason: collision with root package name */
    private final int f43092d;

    /* renamed from: e  reason: collision with root package name */
    private final int f43093e;

    /* renamed from: i  reason: collision with root package name */
    private final int f43094i;

    /* renamed from: o  reason: collision with root package name */
    private final int f43095o;

    /* renamed from: p  reason: collision with root package name */
    private final long f43096p;

    public de(int i10, int i11, int i12, int i13, long j10) {
        this.f43092d = i10;
        this.f43093e = i11;
        this.f43094i = i12;
        this.f43095o = i13;
        this.f43096p = j10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f43092d);
        hf.c.l(parcel, 2, this.f43093e);
        hf.c.l(parcel, 3, this.f43094i);
        hf.c.l(parcel, 4, this.f43095o);
        hf.c.o(parcel, 5, this.f43096p);
        hf.c.b(parcel, a10);
    }
}
