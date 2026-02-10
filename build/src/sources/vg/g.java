package vg;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g extends jf.a {
    @NonNull
    public static final Parcelable.Creator<g> CREATOR = new l();

    /* renamed from: d  reason: collision with root package name */
    private final boolean f51596d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f51597e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f51598i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f51599o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f51600p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f51601q;

    public g(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15) {
        this.f51596d = z10;
        this.f51597e = z11;
        this.f51598i = z12;
        this.f51599o = z13;
        this.f51600p = z14;
        this.f51601q = z15;
    }

    public boolean b() {
        return this.f51601q;
    }

    public boolean c() {
        return this.f51598i;
    }

    public boolean d() {
        return this.f51599o;
    }

    public boolean e() {
        return this.f51596d;
    }

    public boolean f() {
        return this.f51600p;
    }

    public boolean g() {
        return this.f51597e;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.c(parcel, 1, e());
        jf.c.c(parcel, 2, g());
        jf.c.c(parcel, 3, c());
        jf.c.c(parcel, 4, d());
        jf.c.c(parcel, 5, f());
        jf.c.c(parcel, 6, b());
        jf.c.b(parcel, a10);
    }
}
