package ji;

import android.os.Bundle;
import android.os.IBinder;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j0 extends a implements l0 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public j0(IBinder iBinder) {
        super(iBinder, "com.google.android.play.core.integrity.protocol.IExpressIntegrityService");
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // ji.l0
    public final void F(Bundle bundle, n0 n0Var) {
        Parcel e10 = e();
        f0.c(e10, bundle);
        e10.writeStrongBinder(n0Var);
        f(3, e10);
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // ji.l0
    public final void K(Bundle bundle, n0 n0Var) {
        Parcel e10 = e();
        f0.c(e10, bundle);
        e10.writeStrongBinder(n0Var);
        f(2, e10);
    }
}
