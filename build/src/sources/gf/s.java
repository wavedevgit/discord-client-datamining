package gf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class s extends hf.a {
    @NonNull
    public static final Parcelable.Creator<s> CREATOR = new y0();

    /* renamed from: d  reason: collision with root package name */
    private final int f26197d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f26198e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f26199i;

    /* renamed from: o  reason: collision with root package name */
    private final int f26200o;

    /* renamed from: p  reason: collision with root package name */
    private final int f26201p;

    public s(int i10, boolean z10, boolean z11, int i11, int i12) {
        this.f26197d = i10;
        this.f26198e = z10;
        this.f26199i = z11;
        this.f26200o = i11;
        this.f26201p = i12;
    }

    public int b() {
        return this.f26200o;
    }

    public int c() {
        return this.f26201p;
    }

    public boolean d() {
        return this.f26198e;
    }

    public boolean e() {
        return this.f26199i;
    }

    public int f() {
        return this.f26197d;
    }

    @Override // android.os.Parcelable
    public final void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, f());
        hf.c.c(parcel, 2, d());
        hf.c.c(parcel, 3, e());
        hf.c.l(parcel, 4, b());
        hf.c.l(parcel, 5, c());
        hf.c.b(parcel, a10);
    }
}
