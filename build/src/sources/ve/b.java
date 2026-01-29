package ve;

import android.app.PendingIntent;
import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends hf.a {
    @NonNull
    public static final Parcelable.Creator<b> CREATOR = new l();

    /* renamed from: d  reason: collision with root package name */
    private final PendingIntent f51091d;

    public b(PendingIntent pendingIntent) {
        this.f51091d = (PendingIntent) gf.q.l(pendingIntent);
    }

    public PendingIntent b() {
        return this.f51091d;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, b(), i10, false);
        hf.c.b(parcel, a10);
    }
}
