package rg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e4 extends jf.a {
    public static final Parcelable.Creator<e4> CREATOR = new f5();

    /* renamed from: d  reason: collision with root package name */
    public final int f46635d;

    /* renamed from: e  reason: collision with root package name */
    public final int f46636e;

    /* renamed from: i  reason: collision with root package name */
    public final int f46637i;

    /* renamed from: o  reason: collision with root package name */
    public final int f46638o;

    /* renamed from: p  reason: collision with root package name */
    public final float f46639p;

    public e4(int i10, int i11, int i12, int i13, float f10) {
        this.f46635d = i10;
        this.f46636e = i11;
        this.f46637i = i12;
        this.f46638o = i13;
        this.f46639p = f10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f46635d;
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 2, i11);
        jf.c.l(parcel, 3, this.f46636e);
        jf.c.l(parcel, 4, this.f46637i);
        jf.c.l(parcel, 5, this.f46638o);
        jf.c.j(parcel, 6, this.f46639p);
        jf.c.b(parcel, a10);
    }
}
