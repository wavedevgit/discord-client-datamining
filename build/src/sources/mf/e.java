package mf;

import android.app.PendingIntent;
import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e extends jf.a {
    @NonNull
    public static final Parcelable.Creator<e> CREATOR = new i();

    /* renamed from: d  reason: collision with root package name */
    private final PendingIntent f36445d;

    public e(PendingIntent pendingIntent) {
        this.f36445d = pendingIntent;
    }

    public PendingIntent b() {
        return this.f36445d;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = jf.c.a(parcel);
        jf.c.q(parcel, 1, b(), i10, false);
        jf.c.b(parcel, a10);
    }
}
