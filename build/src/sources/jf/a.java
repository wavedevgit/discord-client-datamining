package jf;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import gf.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends fg.a implements IInterface {
    /* JADX INFO: Access modifiers changed from: package-private */
    public a(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.common.internal.service.IClientTelemetryService");
    }

    public final void S0(u uVar) {
        Parcel e10 = e();
        fg.c.c(e10, uVar);
        h(1, e10);
    }
}
