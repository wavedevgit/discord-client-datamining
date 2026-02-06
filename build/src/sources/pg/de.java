package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class de extends hf.a {
    public static final Parcelable.Creator<de> CREATOR = new ee();

    /* renamed from: d  reason: collision with root package name */
    private final int f44140d;

    /* renamed from: e  reason: collision with root package name */
    private final int f44141e;

    /* renamed from: i  reason: collision with root package name */
    private final int f44142i;

    /* renamed from: o  reason: collision with root package name */
    private final int f44143o;

    /* renamed from: p  reason: collision with root package name */
    private final long f44144p;

    public de(int i10, int i11, int i12, int i13, long j10) {
        this.f44140d = i10;
        this.f44141e = i11;
        this.f44142i = i12;
        this.f44143o = i13;
        this.f44144p = j10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f44140d);
        hf.c.l(parcel, 2, this.f44141e);
        hf.c.l(parcel, 3, this.f44142i);
        hf.c.l(parcel, 4, this.f44143o);
        hf.c.o(parcel, 5, this.f44144p);
        hf.c.b(parcel, a10);
    }
}
