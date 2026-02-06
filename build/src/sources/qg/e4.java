package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e4 extends hf.a {
    public static final Parcelable.Creator<e4> CREATOR = new f5();

    /* renamed from: d  reason: collision with root package name */
    public final int f47015d;

    /* renamed from: e  reason: collision with root package name */
    public final int f47016e;

    /* renamed from: i  reason: collision with root package name */
    public final int f47017i;

    /* renamed from: o  reason: collision with root package name */
    public final int f47018o;

    /* renamed from: p  reason: collision with root package name */
    public final float f47019p;

    public e4(int i10, int i11, int i12, int i13, float f10) {
        this.f47015d = i10;
        this.f47016e = i11;
        this.f47017i = i12;
        this.f47018o = i13;
        this.f47019p = f10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f47015d;
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, i11);
        hf.c.l(parcel, 3, this.f47016e);
        hf.c.l(parcel, 4, this.f47017i);
        hf.c.l(parcel, 5, this.f47018o);
        hf.c.j(parcel, 6, this.f47019p);
        hf.c.b(parcel, a10);
    }
}
