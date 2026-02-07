package ug;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g extends hf.a {
    @NonNull
    public static final Parcelable.Creator<g> CREATOR = new l();

    /* renamed from: d  reason: collision with root package name */
    private final boolean f51494d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f51495e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f51496i;

    /* renamed from: o  reason: collision with root package name */
    private final boolean f51497o;

    /* renamed from: p  reason: collision with root package name */
    private final boolean f51498p;

    /* renamed from: q  reason: collision with root package name */
    private final boolean f51499q;

    public g(boolean z10, boolean z11, boolean z12, boolean z13, boolean z14, boolean z15) {
        this.f51494d = z10;
        this.f51495e = z11;
        this.f51496i = z12;
        this.f51497o = z13;
        this.f51498p = z14;
        this.f51499q = z15;
    }

    public boolean b() {
        return this.f51499q;
    }

    public boolean c() {
        return this.f51496i;
    }

    public boolean d() {
        return this.f51497o;
    }

    public boolean e() {
        return this.f51494d;
    }

    public boolean f() {
        return this.f51498p;
    }

    public boolean h() {
        return this.f51495e;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.c(parcel, 1, e());
        hf.c.c(parcel, 2, h());
        hf.c.c(parcel, 3, c());
        hf.c.c(parcel, 4, d());
        hf.c.c(parcel, 5, f());
        hf.c.c(parcel, 6, b());
        hf.c.b(parcel, a10);
    }
}
