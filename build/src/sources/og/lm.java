package og;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class lm extends jf.a {
    public static final Parcelable.Creator<lm> CREATOR = new mm();

    /* renamed from: d  reason: collision with root package name */
    private final int f41148d;

    /* renamed from: e  reason: collision with root package name */
    private final int f41149e;

    /* renamed from: i  reason: collision with root package name */
    private final int f41150i;

    /* renamed from: o  reason: collision with root package name */
    private final int f41151o;

    /* renamed from: p  reason: collision with root package name */
    private final long f41152p;

    public lm(int i10, int i11, int i12, int i13, long j10) {
        this.f41148d = i10;
        this.f41149e = i11;
        this.f41150i = i12;
        this.f41151o = i13;
        this.f41152p = j10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f41148d;
        int a10 = jf.c.a(parcel);
        jf.c.l(parcel, 1, i11);
        jf.c.l(parcel, 2, this.f41149e);
        jf.c.l(parcel, 3, this.f41150i);
        jf.c.l(parcel, 4, this.f41151o);
        jf.c.o(parcel, 5, this.f41152p);
        jf.c.b(parcel, a10);
    }
}
