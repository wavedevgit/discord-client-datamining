package kf;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import hf.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends gg.a implements IInterface {
    /* JADX INFO: Access modifiers changed from: package-private */
    public a(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.common.internal.service.IClientTelemetryService");
    }

    public final void W0(u uVar) {
        Parcel e10 = e();
        gg.c.c(e10, uVar);
        h(1, e10);
    }
}
