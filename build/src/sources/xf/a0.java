package xf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a0 extends jf.a {
    @NonNull
    public static final Parcelable.Creator<a0> CREATOR = new b1();

    /* renamed from: d  reason: collision with root package name */
    private final boolean f54612d;

    public a0(boolean z10) {
        this.f54612d = z10;
    }

    public boolean b() {
        return this.f54612d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof a0) || this.f54612d != ((a0) obj).f54612d) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return hf.o.b(Boolean.valueOf(this.f54612d));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.c(parcel, 1, b());
        jf.c.b(parcel, a10);
    }
}
