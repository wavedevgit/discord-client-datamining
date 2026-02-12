package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class de extends jf.a {
    public static final Parcelable.Creator<de> CREATOR = new ee();

    /* renamed from: d  reason: collision with root package name */
    private final int f44371d;

    /* renamed from: e  reason: collision with root package name */
    private final int f44372e;

    /* renamed from: i  reason: collision with root package name */
    private final int f44373i;

    /* renamed from: o  reason: collision with root package name */
    private final int f44374o;

    /* renamed from: p  reason: collision with root package name */
    private final long f44375p;

    public de(int i10, int i11, int i12, int i13, long j10) {
        this.f44371d = i10;
        this.f44372e = i11;
        this.f44373i = i12;
        this.f44374o = i13;
        this.f44375p = j10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f44371d);
        jf.c.l(parcel, 2, this.f44372e);
        jf.c.l(parcel, 3, this.f44373i);
        jf.c.l(parcel, 4, this.f44374o);
        jf.c.o(parcel, 5, this.f44375p);
        jf.c.b(parcel, a10);
    }
}
