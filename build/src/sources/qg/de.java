package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class de extends jf.a {
    public static final Parcelable.Creator<de> CREATOR = new ee();

    /* renamed from: d  reason: collision with root package name */
    private final int f45702d;

    /* renamed from: e  reason: collision with root package name */
    private final int f45703e;

    /* renamed from: i  reason: collision with root package name */
    private final int f45704i;

    /* renamed from: o  reason: collision with root package name */
    private final int f45705o;

    /* renamed from: p  reason: collision with root package name */
    private final long f45706p;

    public de(int i10, int i11, int i12, int i13, long j10) {
        this.f45702d = i10;
        this.f45703e = i11;
        this.f45704i = i12;
        this.f45705o = i13;
        this.f45706p = j10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f45702d);
        jf.c.l(parcel, 2, this.f45703e);
        jf.c.l(parcel, 3, this.f45704i);
        jf.c.l(parcel, 4, this.f45705o);
        jf.c.o(parcel, 5, this.f45706p);
        jf.c.b(parcel, a10);
    }
}
