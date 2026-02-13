package xf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a0 extends jf.a {
    @NonNull
    public static final Parcelable.Creator<a0> CREATOR = new b1();

    /* renamed from: d  reason: collision with root package name */
    private final boolean f55180d;

    public a0(boolean z10) {
        this.f55180d = z10;
    }

    public boolean b() {
        return this.f55180d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof a0) || this.f55180d != ((a0) obj).f55180d) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return hf.o.b(Boolean.valueOf(this.f55180d));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.c(parcel, 1, b());
        jf.c.b(parcel, a10);
    }
}
