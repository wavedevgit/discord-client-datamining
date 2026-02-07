package ng;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class lm extends hf.a {
    public static final Parcelable.Creator<lm> CREATOR = new mm();

    /* renamed from: d  reason: collision with root package name */
    private final int f40123d;

    /* renamed from: e  reason: collision with root package name */
    private final int f40124e;

    /* renamed from: i  reason: collision with root package name */
    private final int f40125i;

    /* renamed from: o  reason: collision with root package name */
    private final int f40126o;

    /* renamed from: p  reason: collision with root package name */
    private final long f40127p;

    public lm(int i10, int i11, int i12, int i13, long j10) {
        this.f40123d = i10;
        this.f40124e = i11;
        this.f40125i = i12;
        this.f40126o = i13;
        this.f40127p = j10;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f40123d;
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, i11);
        hf.c.l(parcel, 2, this.f40124e);
        hf.c.l(parcel, 3, this.f40125i);
        hf.c.l(parcel, 4, this.f40126o);
        hf.c.o(parcel, 5, this.f40127p);
        hf.c.b(parcel, a10);
    }
}
