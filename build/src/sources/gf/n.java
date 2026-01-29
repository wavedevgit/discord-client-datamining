package gf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class n extends hf.a {
    @NonNull
    public static final Parcelable.Creator<n> CREATOR = new i0();

    /* renamed from: d  reason: collision with root package name */
    private final int f26832d;

    /* renamed from: e  reason: collision with root package name */
    private final int f26833e;

    /* renamed from: i  reason: collision with root package name */
    private final int f26834i;

    /* renamed from: o  reason: collision with root package name */
    private final long f26835o;

    /* renamed from: p  reason: collision with root package name */
    private final long f26836p;

    /* renamed from: q  reason: collision with root package name */
    private final String f26837q;

    /* renamed from: r  reason: collision with root package name */
    private final String f26838r;

    /* renamed from: s  reason: collision with root package name */
    private final int f26839s;

    /* renamed from: t  reason: collision with root package name */
    private final int f26840t;

    public n(int i10, int i11, int i12, long j10, long j11, String str, String str2, int i13) {
        this(i10, i11, i12, j10, j11, str, str2, i13, -1);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f26832d;
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, i11);
        hf.c.l(parcel, 2, this.f26833e);
        hf.c.l(parcel, 3, this.f26834i);
        hf.c.o(parcel, 4, this.f26835o);
        hf.c.o(parcel, 5, this.f26836p);
        hf.c.s(parcel, 6, this.f26837q, false);
        hf.c.s(parcel, 7, this.f26838r, false);
        hf.c.l(parcel, 8, this.f26839s);
        hf.c.l(parcel, 9, this.f26840t);
        hf.c.b(parcel, a10);
    }

    public n(int i10, int i11, int i12, long j10, long j11, String str, String str2, int i13, int i14) {
        this.f26832d = i10;
        this.f26833e = i11;
        this.f26834i = i12;
        this.f26835o = j10;
        this.f26836p = j11;
        this.f26837q = str;
        this.f26838r = str2;
        this.f26839s = i13;
        this.f26840t = i14;
    }
}
