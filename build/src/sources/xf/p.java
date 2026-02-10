package xf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class p extends jf.a {
    @NonNull
    public static final Parcelable.Creator<p> CREATOR = new p0();

    /* renamed from: d  reason: collision with root package name */
    private final boolean f54960d;

    public p(boolean z10) {
        this.f54960d = z10;
    }

    public boolean b() {
        return this.f54960d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof p) || this.f54960d != ((p) obj).b()) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return hf.o.b(Boolean.valueOf(this.f54960d));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.c(parcel, 1, b());
        jf.c.b(parcel, a10);
    }
}
