package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e4 extends hf.a {
    public static final Parcelable.Creator<e4> CREATOR = new f5();

    /* renamed from: d  reason: collision with root package name */
    public final int f45185d;

    /* renamed from: e  reason: collision with root package name */
    public final int f45186e;

    /* renamed from: i  reason: collision with root package name */
    public final int f45187i;

    /* renamed from: o  reason: collision with root package name */
    public final int f45188o;

    /* renamed from: p  reason: collision with root package name */
    public final float f45189p;

    public e4(int i10, int i11, int i12, int i13, float f10) {
        this.f45185d = i10;
        this.f45186e = i11;
        this.f45187i = i12;
        this.f45188o = i13;
        this.f45189p = f10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f45185d;
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, i11);
        hf.c.l(parcel, 3, this.f45186e);
        hf.c.l(parcel, 4, this.f45187i);
        hf.c.l(parcel, 5, this.f45188o);
        hf.c.j(parcel, 6, this.f45189p);
        hf.c.b(parcel, a10);
    }
}
