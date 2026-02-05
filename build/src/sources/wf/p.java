package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class p extends hf.a {
    @NonNull
    public static final Parcelable.Creator<p> CREATOR = new p0();

    /* renamed from: d  reason: collision with root package name */
    private final boolean f52970d;

    public p(boolean z10) {
        this.f52970d = z10;
    }

    public boolean b() {
        return this.f52970d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof p) || this.f52970d != ((p) obj).b()) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(Boolean.valueOf(this.f52970d));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.c(parcel, 1, b());
        hf.c.b(parcel, a10);
    }
}
