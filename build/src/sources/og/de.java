package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class de extends hf.a {
    public static final Parcelable.Creator<de> CREATOR = new ee();

    /* renamed from: d  reason: collision with root package name */
    private final int f42948d;

    /* renamed from: e  reason: collision with root package name */
    private final int f42949e;

    /* renamed from: i  reason: collision with root package name */
    private final int f42950i;

    /* renamed from: o  reason: collision with root package name */
    private final int f42951o;

    /* renamed from: p  reason: collision with root package name */
    private final long f42952p;

    public de(int i10, int i11, int i12, int i13, long j10) {
        this.f42948d = i10;
        this.f42949e = i11;
        this.f42950i = i12;
        this.f42951o = i13;
        this.f42952p = j10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, this.f42948d);
        hf.c.l(parcel, 2, this.f42949e);
        hf.c.l(parcel, 3, this.f42950i);
        hf.c.l(parcel, 4, this.f42951o);
        hf.c.o(parcel, 5, this.f42952p);
        hf.c.b(parcel, a10);
    }
}
