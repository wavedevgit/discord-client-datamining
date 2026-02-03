package wf;

import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a0 extends hf.a {
    @NonNull
    public static final Parcelable.Creator<a0> CREATOR = new b1();

    /* renamed from: d  reason: collision with root package name */
    private final boolean f52235d;

    public a0(boolean z10) {
        this.f52235d = z10;
    }

    public boolean b() {
        return this.f52235d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof a0) || this.f52235d != ((a0) obj).f52235d) {
            return false;
        }
        return true;
    }

    public int hashCode() {
        return gf.o.b(Boolean.valueOf(this.f52235d));
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.c(parcel, 1, b());
        hf.c.b(parcel, a10);
    }
}
