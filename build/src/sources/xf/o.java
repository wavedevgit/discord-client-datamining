package xf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class o extends jf.a {
    @NonNull
    public static final Parcelable.Creator<o> CREATOR = new k0();

    /* renamed from: d  reason: collision with root package name */
    private final boolean f54959d;

    public o(boolean z10) {
        this.f54959d = z10;
    }

    public boolean b() {
        return this.f54959d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof o) || this.f54959d != ((o) obj).b()) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return hf.o.b(Boolean.valueOf(this.f54959d));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.c(parcel, 1, b());
        jf.c.b(parcel, a10);
    }
}
