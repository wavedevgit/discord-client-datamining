package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o extends hf.a {
    public static final Parcelable.Creator<o> CREATOR = new p();

    /* renamed from: d  reason: collision with root package name */
    public int f37968d;

    /* renamed from: e  reason: collision with root package name */
    public int f37969e;

    /* renamed from: i  reason: collision with root package name */
    public int f37970i;

    /* renamed from: o  reason: collision with root package name */
    public long f37971o;

    /* renamed from: p  reason: collision with root package name */
    public int f37972p;

    public o(int i10, int i11, int i12, long j10, int i13) {
        this.f37968d = i10;
        this.f37969e = i11;
        this.f37970i = i12;
        this.f37971o = j10;
        this.f37972p = i13;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f37968d);
        hf.c.l(parcel, 3, this.f37969e);
        hf.c.l(parcel, 4, this.f37970i);
        hf.c.o(parcel, 5, this.f37971o);
        hf.c.l(parcel, 6, this.f37972p);
        hf.c.b(parcel, a10);
    }
}
