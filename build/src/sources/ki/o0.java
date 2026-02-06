package ki;

import android.os.Bundle;
import android.os.IBinder;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o0 extends a implements q0 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public o0(IBinder iBinder) {
        super(iBinder, "com.google.android.play.core.integrity.protocol.IIntegrityService");
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // ki.q0
    public final void V0(Bundle bundle, s0 s0Var) {
        Parcel e10 = e();
        f0.c(e10, bundle);
        e10.writeStrongBinder(s0Var);
        f(2, e10);
    }
}
