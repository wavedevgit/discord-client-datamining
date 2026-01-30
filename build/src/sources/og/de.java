package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class de extends hf.a {
    public static final Parcelable.Creator<de> CREATOR = new ee();

    /* renamed from: d  reason: collision with root package name */
    private final int f42964d;

    /* renamed from: e  reason: collision with root package name */
    private final int f42965e;

    /* renamed from: i  reason: collision with root package name */
    private final int f42966i;

    /* renamed from: o  reason: collision with root package name */
    private final int f42967o;

    /* renamed from: p  reason: collision with root package name */
    private final long f42968p;

    public de(int i10, int i11, int i12, int i13, long j10) {
        this.f42964d = i10;
        this.f42965e = i11;
        this.f42966i = i12;
        this.f42967o = i13;
        this.f42968p = j10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f42964d);
        hf.c.l(parcel, 2, this.f42965e);
        hf.c.l(parcel, 3, this.f42966i);
        hf.c.l(parcel, 4, this.f42967o);
        hf.c.o(parcel, 5, this.f42968p);
        hf.c.b(parcel, a10);
    }
}
