package we;

import android.app.PendingIntent;
import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g extends jf.a {
    @NonNull
    public static final Parcelable.Creator<g> CREATOR = new t();

    /* renamed from: d  reason: collision with root package name */
    private final PendingIntent f52734d;

    public g(PendingIntent pendingIntent) {
        this.f52734d = (PendingIntent) hf.q.l(pendingIntent);
    }

    public PendingIntent b() {
        return this.f52734d;
    }

    public boolean equals(Object obj) {
        if (!(obj instanceof g)) {
            return false;
        }
        return hf.o.a(this.f52734d, ((g) obj).f52734d);
    }

    public int hashCode() {
        return hf.o.b(this.f52734d);
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 1, b(), i10, false);
        jf.c.b(parcel, a10);
    }
}
