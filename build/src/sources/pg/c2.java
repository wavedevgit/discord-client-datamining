package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c2 extends hf.a {
    public static final Parcelable.Creator<c2> CREATOR = new d3();

    /* renamed from: d  reason: collision with root package name */
    public int f45221d;

    /* renamed from: e  reason: collision with root package name */
    public int f45222e;

    /* renamed from: i  reason: collision with root package name */
    public int f45223i;

    /* renamed from: o  reason: collision with root package name */
    public long f45224o;

    /* renamed from: p  reason: collision with root package name */
    public int f45225p;

    public c2(int i10, int i11, int i12, long j10, int i13) {
        this.f45221d = i10;
        this.f45222e = i11;
        this.f45223i = i12;
        this.f45224o = j10;
        this.f45225p = i13;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f45221d);
        hf.c.l(parcel, 3, this.f45222e);
        hf.c.l(parcel, 4, this.f45223i);
        hf.c.o(parcel, 5, this.f45224o);
        hf.c.l(parcel, 6, this.f45225p);
        hf.c.b(parcel, a10);
    }
}
