package gf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class n extends hf.a {
    @NonNull
    public static final Parcelable.Creator<n> CREATOR = new i0();

    /* renamed from: d  reason: collision with root package name */
    private final int f24860d;

    /* renamed from: e  reason: collision with root package name */
    private final int f24861e;

    /* renamed from: i  reason: collision with root package name */
    private final int f24862i;

    /* renamed from: o  reason: collision with root package name */
    private final long f24863o;

    /* renamed from: p  reason: collision with root package name */
    private final long f24864p;

    /* renamed from: q  reason: collision with root package name */
    private final String f24865q;

    /* renamed from: r  reason: collision with root package name */
    private final String f24866r;

    /* renamed from: s  reason: collision with root package name */
    private final int f24867s;

    /* renamed from: t  reason: collision with root package name */
    private final int f24868t;

    public n(int i10, int i11, int i12, long j10, long j11, String str, String str2, int i13) {
        this(i10, i11, i12, j10, j11, str, str2, i13, -1);
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int i11 = this.f24860d;
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, i11);
        hf.c.l(parcel, 2, this.f24861e);
        hf.c.l(parcel, 3, this.f24862i);
        hf.c.o(parcel, 4, this.f24863o);
        hf.c.o(parcel, 5, this.f24864p);
        hf.c.s(parcel, 6, this.f24865q, false);
        hf.c.s(parcel, 7, this.f24866r, false);
        hf.c.l(parcel, 8, this.f24867s);
        hf.c.l(parcel, 9, this.f24868t);
        hf.c.b(parcel, a10);
    }

    public n(int i10, int i11, int i12, long j10, long j11, String str, String str2, int i13, int i14) {
        this.f24860d = i10;
        this.f24861e = i11;
        this.f24862i = i12;
        this.f24863o = j10;
        this.f24864p = j11;
        this.f24865q = str;
        this.f24866r = str2;
        this.f24867s = i13;
        this.f24868t = i14;
    }
}
