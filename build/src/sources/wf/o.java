package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class o extends hf.a {
    @NonNull
    public static final Parcelable.Creator<o> CREATOR = new k0();

    /* renamed from: d  reason: collision with root package name */
    private final boolean f52526d;

    public o(boolean z10) {
        this.f52526d = z10;
    }

    public boolean b() {
        return this.f52526d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof o) || this.f52526d != ((o) obj).b()) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(Boolean.valueOf(this.f52526d));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.c(parcel, 1, b());
        hf.c.b(parcel, a10);
    }
}
