package qg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class mc extends jf.a {
    public static final Parcelable.Creator<mc> CREATOR = new nd();

    /* renamed from: d  reason: collision with root package name */
    public final int f46048d;

    /* renamed from: e  reason: collision with root package name */
    public final float f46049e;

    /* renamed from: i  reason: collision with root package name */
    public final float f46050i;

    /* renamed from: o  reason: collision with root package name */
    public final int f46051o;

    public mc(int i10, float f10, float f11, int i11) {
        this.f46048d = i10;
        this.f46049e = f10;
        this.f46050i = f11;
        this.f46051o = i11;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, this.f46048d);
        jf.c.j(parcel, 2, this.f46049e);
        jf.c.j(parcel, 3, this.f46050i);
        jf.c.l(parcel, 4, this.f46051o);
        jf.c.b(parcel, a10);
    }
}
