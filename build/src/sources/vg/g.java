package vg;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g extends jf.a {
    @NonNull
    public static final Parcelable.Creator<g> CREATOR = new l();

    /* renamed from: d  reason: collision with root package name */
    private final boolean f52354d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f52355e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f52356i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f52357o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f52358p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f52359q;

    public g(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15) {
        this.f52354d = z10;
        this.f52355e = z11;
        this.f52356i = z12;
        this.f52357o = z13;
        this.f52358p = z14;
        this.f52359q = z15;
    }

    public boolean b() {
        return this.f52359q;
    }

    public boolean c() {
        return this.f52356i;
    }

    public boolean d() {
        return this.f52357o;
    }

    public boolean e() {
        return this.f52354d;
    }

    public boolean f() {
        return this.f52358p;
    }

    public boolean h() {
        return this.f52355e;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.c(parcel, 1, e());
        jf.c.c(parcel, 2, h());
        jf.c.c(parcel, 3, c());
        jf.c.c(parcel, 4, d());
        jf.c.c(parcel, 5, f());
        jf.c.c(parcel, 6, b());
        jf.c.b(parcel, a10);
    }
}
