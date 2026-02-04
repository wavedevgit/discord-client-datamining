package sg;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g extends hf.a {
    @NonNull
    public static final Parcelable.Creator<g> CREATOR = new l();

    /* renamed from: d  reason: collision with root package name */
    private final boolean f49504d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f49505e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f49506i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f49507o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f49508p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f49509q;

    public g(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15) {
        this.f49504d = z10;
        this.f49505e = z11;
        this.f49506i = z12;
        this.f49507o = z13;
        this.f49508p = z14;
        this.f49509q = z15;
    }

    public boolean b() {
        return this.f49509q;
    }

    public boolean c() {
        return this.f49506i;
    }

    public boolean d() {
        return this.f49507o;
    }

    public boolean e() {
        return this.f49504d;
    }

    public boolean f() {
        return this.f49508p;
    }

    public boolean g() {
        return this.f49505e;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.c(parcel, 1, e());
        hf.c.c(parcel, 2, g());
        hf.c.c(parcel, 3, c());
        hf.c.c(parcel, 4, d());
        hf.c.c(parcel, 5, f());
        hf.c.c(parcel, 6, b());
        hf.c.b(parcel, a10);
    }
}
