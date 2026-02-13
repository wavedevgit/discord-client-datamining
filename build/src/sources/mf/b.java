package mf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends jf.a {
    @NonNull
    public static final Parcelable.Creator<b> CREATOR = new h();

    /* renamed from: d  reason: collision with root package name */
    private final boolean f37012d;

    /* renamed from: e  reason: collision with root package name */
    private final int f37013e;

    public b(boolean z10, int i10) {
        this.f37012d = z10;
        this.f37013e = i10;
    }

    public boolean b() {
        return this.f37012d;
    }

    public int c() {
        return this.f37013e;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.c(parcel, 1, b());
        jf.c.l(parcel, 2, c());
        jf.c.b(parcel, a10);
    }
}
