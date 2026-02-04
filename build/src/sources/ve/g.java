package ve;

import android.app.PendingIntent;
import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g extends hf.a {
    @NonNull
    public static final Parcelable.Creator<g> CREATOR = new t();

    /* renamed from: d  reason: collision with root package name */
    private final PendingIntent f51575d;

    public g(PendingIntent pendingIntent) {
        this.f51575d = (PendingIntent) gf.q.l(pendingIntent);
    }

    public PendingIntent b() {
        return this.f51575d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof g)) {
            return false;
        }
        return gf.o.a(this.f51575d, ((g) obj).f51575d);
    }

    public int hashCode() {
        return gf.o.b(this.f51575d);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, b(), i10, false);
        hf.c.b(parcel, a10);
    }
}
