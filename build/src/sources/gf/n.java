package gf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class n extends hf.a {
    @NonNull
    public static final Parcelable.Creator<n> CREATOR = new i0();

    /* renamed from: d  reason: collision with root package name */
    private final int f25161d;

    /* renamed from: e  reason: collision with root package name */
    private final int f25162e;

    /* renamed from: i  reason: collision with root package name */
    private final int f25163i;

    /* renamed from: o  reason: collision with root package name */
    private final long f25164o;

    /* renamed from: p  reason: collision with root package name */
    private final long f25165p;

    /* renamed from: q  reason: collision with root package name */
    private final String f25166q;

    /* renamed from: r  reason: collision with root package name */
    private final String f25167r;

    /* renamed from: s  reason: collision with root package name */
    private final int f25168s;

    /* renamed from: t  reason: collision with root package name */
    private final int f25169t;

    public n(int i10, int i11, int i12, long j10, long j11, String str, String str2, int i13) {
        this(i10, i11, i12, j10, j11, str, str2, i13, -1);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f25161d;
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, i11);
        hf.c.l(parcel, 2, this.f25162e);
        hf.c.l(parcel, 3, this.f25163i);
        hf.c.o(parcel, 4, this.f25164o);
        hf.c.o(parcel, 5, this.f25165p);
        hf.c.s(parcel, 6, this.f25166q, false);
        hf.c.s(parcel, 7, this.f25167r, false);
        hf.c.l(parcel, 8, this.f25168s);
        hf.c.l(parcel, 9, this.f25169t);
        hf.c.b(parcel, a10);
    }

    public n(int i10, int i11, int i12, long j10, long j11, String str, String str2, int i13, int i14) {
        this.f25161d = i10;
        this.f25162e = i11;
        this.f25163i = i12;
        this.f25164o = j10;
        this.f25165p = j11;
        this.f25166q = str;
        this.f25167r = str2;
        this.f25168s = i13;
        this.f25169t = i14;
    }
}
