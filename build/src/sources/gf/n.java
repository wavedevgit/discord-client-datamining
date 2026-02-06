package gf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class n extends hf.a {
    @NonNull
    public static final Parcelable.Creator<n> CREATOR = new i0();

    /* renamed from: d  reason: collision with root package name */
    private final int f25113d;

    /* renamed from: e  reason: collision with root package name */
    private final int f25114e;

    /* renamed from: i  reason: collision with root package name */
    private final int f25115i;

    /* renamed from: o  reason: collision with root package name */
    private final long f25116o;

    /* renamed from: p  reason: collision with root package name */
    private final long f25117p;

    /* renamed from: q  reason: collision with root package name */
    private final String f25118q;

    /* renamed from: r  reason: collision with root package name */
    private final String f25119r;

    /* renamed from: s  reason: collision with root package name */
    private final int f25120s;

    /* renamed from: t  reason: collision with root package name */
    private final int f25121t;

    public n(int i10, int i11, int i12, long j10, long j11, String str, String str2, int i13) {
        this(i10, i11, i12, j10, j11, str, str2, i13, -1);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f25113d;
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, i11);
        hf.c.l(parcel, 2, this.f25114e);
        hf.c.l(parcel, 3, this.f25115i);
        hf.c.o(parcel, 4, this.f25116o);
        hf.c.o(parcel, 5, this.f25117p);
        hf.c.s(parcel, 6, this.f25118q, false);
        hf.c.s(parcel, 7, this.f25119r, false);
        hf.c.l(parcel, 8, this.f25120s);
        hf.c.l(parcel, 9, this.f25121t);
        hf.c.b(parcel, a10);
    }

    public n(int i10, int i11, int i12, long j10, long j11, String str, String str2, int i13, int i14) {
        this.f25113d = i10;
        this.f25114e = i11;
        this.f25115i = i12;
        this.f25116o = j10;
        this.f25117p = j11;
        this.f25118q = str;
        this.f25119r = str2;
        this.f25120s = i13;
        this.f25121t = i14;
    }
}
