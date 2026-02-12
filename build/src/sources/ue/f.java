package ue;

import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f extends jf.a {
    public static final Parcelable.Creator<f> CREATOR = new g();

    /* renamed from: d  reason: collision with root package name */
    private final String f50732d;

    /* renamed from: e  reason: collision with root package name */
    private final int f50733e;

    public f(String str, int i10) {
        this.f50732d = str;
        this.f50733e = i10;
    }

    public final int b() {
        return this.f50733e;
    }

    public final String c() {
        return this.f50732d;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.s(parcel, 1, this.f50732d, false);
        jf.c.l(parcel, 2, this.f50733e);
        jf.c.b(parcel, a10);
    }
}
