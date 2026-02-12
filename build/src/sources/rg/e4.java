package rg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e4 extends jf.a {
    public static final Parcelable.Creator<e4> CREATOR = new f5();

    /* renamed from: d  reason: collision with root package name */
    public final int f46636d;

    /* renamed from: e  reason: collision with root package name */
    public final int f46637e;

    /* renamed from: i  reason: collision with root package name */
    public final int f46638i;

    /* renamed from: o  reason: collision with root package name */
    public final int f46639o;

    /* renamed from: p  reason: collision with root package name */
    public final float f46640p;

    public e4(int i10, int i11, int i12, int i13, float f10) {
        this.f46636d = i10;
        this.f46637e = i11;
        this.f46638i = i12;
        this.f46639o = i13;
        this.f46640p = f10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f46636d;
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, i11);
        jf.c.l(parcel, 3, this.f46637e);
        jf.c.l(parcel, 4, this.f46638i);
        jf.c.l(parcel, 5, this.f46639o);
        jf.c.j(parcel, 6, this.f46640p);
        jf.c.b(parcel, a10);
    }
}
