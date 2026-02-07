package pg;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class ne extends hf.a {
    public static final Parcelable.Creator<ne> CREATOR = new se();

    /* renamed from: d  reason: collision with root package name */
    public int f44577d;

    /* renamed from: e  reason: collision with root package name */
    public int f44578e;

    /* renamed from: i  reason: collision with root package name */
    public int f44579i;

    /* renamed from: o  reason: collision with root package name */
    public long f44580o;

    /* renamed from: p  reason: collision with root package name */
    public int f44581p;

    public ne(int i10, int i11, int i12, long j10, int i13) {
        this.f44577d = i10;
        this.f44578e = i11;
        this.f44579i = i12;
        this.f44580o = j10;
        this.f44581p = i13;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 2, this.f44577d);
        hf.c.l(parcel, 3, this.f44578e);
        hf.c.l(parcel, 4, this.f44579i);
        hf.c.o(parcel, 5, this.f44580o);
        hf.c.l(parcel, 6, this.f44581p);
        hf.c.b(parcel, a10);
    }
}
