package we;

import android.app.PendingIntent;
import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends jf.a {
    @NonNull
    public static final Parcelable.Creator<b> CREATOR = new l();

    /* renamed from: d  reason: collision with root package name */
    private final PendingIntent f53685d;

    public b(PendingIntent pendingIntent) {
        this.f53685d = (PendingIntent) hf.q.l(pendingIntent);
    }

    public PendingIntent b() {
        return this.f53685d;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 1, b(), i10, false);
        jf.c.b(parcel, a10);
    }
}
