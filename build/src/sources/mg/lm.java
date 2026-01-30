package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class lm extends hf.a {
    public static final Parcelable.Creator<lm> CREATOR = new mm();

    /* renamed from: d  reason: collision with root package name */
    private final int f38473d;

    /* renamed from: e  reason: collision with root package name */
    private final int f38474e;

    /* renamed from: i  reason: collision with root package name */
    private final int f38475i;

    /* renamed from: o  reason: collision with root package name */
    private final int f38476o;

    /* renamed from: p  reason: collision with root package name */
    private final long f38477p;

    public lm(int i10, int i11, int i12, int i13, long j10) {
        this.f38473d = i10;
        this.f38474e = i11;
        this.f38475i = i12;
        this.f38476o = i13;
        this.f38477p = j10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f38473d;
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, i11);
        hf.c.l(parcel, 2, this.f38474e);
        hf.c.l(parcel, 3, this.f38475i);
        hf.c.l(parcel, 4, this.f38476o);
        hf.c.o(parcel, 5, this.f38477p);
        hf.c.b(parcel, a10);
    }
}
