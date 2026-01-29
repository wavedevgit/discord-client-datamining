package mg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o extends hf.a {
    public static final Parcelable.Creator<o> CREATOR = new p();

    /* renamed from: d  reason: collision with root package name */
    public int f38513d;

    /* renamed from: e  reason: collision with root package name */
    public int f38514e;

    /* renamed from: i  reason: collision with root package name */
    public int f38515i;

    /* renamed from: o  reason: collision with root package name */
    public long f38516o;

    /* renamed from: p  reason: collision with root package name */
    public int f38517p;

    public o(int i10, int i11, int i12, long j10, int i13) {
        this.f38513d = i10;
        this.f38514e = i11;
        this.f38515i = i12;
        this.f38516o = j10;
        this.f38517p = i13;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f38513d);
        hf.c.l(parcel, 3, this.f38514e);
        hf.c.l(parcel, 4, this.f38515i);
        hf.c.o(parcel, 5, this.f38516o);
        hf.c.l(parcel, 6, this.f38517p);
        hf.c.b(parcel, a10);
    }
}
