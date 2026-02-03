package lf;

import android.app.PendingIntent;
import android.os.Parcel;
import android.os.Parcelable;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class e extends hf.a {
    @NonNull
    public static final Parcelable.Creator<e> CREATOR = new i();

    /* renamed from: d  reason: collision with root package name */
    private final PendingIntent f37403d;

    public e(PendingIntent pendingIntent) {
        this.f37403d = pendingIntent;
    }

    public PendingIntent b() {
        return this.f37403d;
    }

    @Override // android.os.Parcelable
    public void writeToParcel(Parcel parcel, int i10) {
        int a10 = hf.c.a(parcel);
        hf.c.q(parcel, 1, b(), i10, false);
        hf.c.b(parcel, a10);
    }
}
