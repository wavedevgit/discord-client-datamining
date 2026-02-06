package xh;

import android.os.Bundle;
import android.os.IBinder;
import android.os.Parcel;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class z extends a implements b0 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public z(IBinder iBinder) {
        super(iBinder, "com.google.android.play.core.assetpacks.protocol.IAssetModuleService");
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // xh.b0
    public final void E(String str, Bundle bundle, Bundle bundle2, d0 d0Var) {
        Parcel e10 = e();
        e10.writeString(str);
        y.c(e10, bundle);
        y.c(e10, bundle2);
        e10.writeStrongBinder(d0Var);
        f(6, e10);
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // xh.b0
    public final void F(String str, List list, Bundle bundle, d0 d0Var) {
        Parcel e10 = e();
        e10.writeString(str);
        e10.writeTypedList(list);
        y.c(e10, bundle);
        e10.writeStrongBinder(d0Var);
        f(2, e10);
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // xh.b0
    public final void M0(String str, List list, Bundle bundle, d0 d0Var) {
        Parcel e10 = e();
        e10.writeString(str);
        e10.writeTypedList(list);
        y.c(e10, bundle);
        e10.writeStrongBinder(d0Var);
        f(14, e10);
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // xh.b0
    public final void T(String str, Bundle bundle, d0 d0Var) {
        Parcel e10 = e();
        e10.writeString(str);
        y.c(e10, bundle);
        e10.writeStrongBinder(d0Var);
        f(10, e10);
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // xh.b0
    public final void W(String str, Bundle bundle, Bundle bundle2, d0 d0Var) {
        Parcel e10 = e();
        e10.writeString(str);
        y.c(e10, bundle);
        y.c(e10, bundle2);
        e10.writeStrongBinder(d0Var);
        f(9, e10);
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // xh.b0
    public final void b0(String str, Bundle bundle, Bundle bundle2, d0 d0Var) {
        Parcel e10 = e();
        e10.writeString(str);
        y.c(e10, bundle);
        y.c(e10, bundle2);
        e10.writeStrongBinder(d0Var);
        f(7, e10);
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // xh.b0
    public final void i0(String str, Bundle bundle, d0 d0Var) {
        Parcel e10 = e();
        e10.writeString(str);
        y.c(e10, bundle);
        e10.writeStrongBinder(d0Var);
        f(5, e10);
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // xh.b0
    public final void s0(String str, Bundle bundle, Bundle bundle2, d0 d0Var) {
        Parcel e10 = e();
        e10.writeString(str);
        y.c(e10, bundle);
        y.c(e10, bundle2);
        e10.writeStrongBinder(d0Var);
        f(11, e10);
    }
}
