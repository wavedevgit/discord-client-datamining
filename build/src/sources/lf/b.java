package lf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends hf.a {
    @NonNull
    public static final Parcelable.Creator<b> CREATOR = new h();

    /* renamed from: d  reason: collision with root package name */
    private final boolean f36797d;

    /* renamed from: e  reason: collision with root package name */
    private final int f36798e;

    public b(boolean z10, int i10) {
        this.f36797d = z10;
        this.f36798e = i10;
    }

    public boolean b() {
        return this.f36797d;
    }

    public int c() {
        return this.f36798e;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.c(parcel, 1, b());
        hf.c.l(parcel, 2, c());
        hf.c.b(parcel, a10);
    }
}
