package mg;

import android.os.IBinder;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class e0 extends a implements f0 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public e0(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.location.internal.IGoogleLocationManagerService");
    }

    @Override // mg.f0
    public final void N0(vg.d dVar, c cVar, String str) {
        Parcel e10 = e();
        h.b(e10, dVar);
        h.c(e10, cVar);
        e10.writeString(null);
        f(63, e10);
    }
}
