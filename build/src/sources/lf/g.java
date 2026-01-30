package lf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g extends hf.a {
    @NonNull
    public static final Parcelable.Creator<g> CREATOR = new k();

    /* renamed from: d  reason: collision with root package name */
    private final int f37294d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f37295e;

    public g(int i10) {
        this(i10, false);
    }

    public int b() {
        return this.f37294d;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.l(parcel, 1, b());
        hf.c.c(parcel, 2, this.f37295e);
        hf.c.b(parcel, a10);
    }

    public g(int i10, boolean z10) {
        this.f37294d = i10;
        this.f37295e = z10;
    }
}
