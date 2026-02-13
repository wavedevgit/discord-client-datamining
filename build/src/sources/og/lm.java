package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class lm extends jf.a {
    public static final Parcelable.Creator<lm> CREATOR = new mm();

    /* renamed from: d  reason: collision with root package name */
    private final int f40043d;

    /* renamed from: e  reason: collision with root package name */
    private final int f40044e;

    /* renamed from: i  reason: collision with root package name */
    private final int f40045i;

    /* renamed from: o  reason: collision with root package name */
    private final int f40046o;

    /* renamed from: p  reason: collision with root package name */
    private final long f40047p;

    public lm(int i10, int i11, int i12, int i13, long j10) {
        this.f40043d = i10;
        this.f40044e = i11;
        this.f40045i = i12;
        this.f40046o = i13;
        this.f40047p = j10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f40043d;
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, i11);
        jf.c.l(parcel, 2, this.f40044e);
        jf.c.l(parcel, 3, this.f40045i);
        jf.c.l(parcel, 4, this.f40046o);
        jf.c.o(parcel, 5, this.f40047p);
        jf.c.b(parcel, a10);
    }
}
