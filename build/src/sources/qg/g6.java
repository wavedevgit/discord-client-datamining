package qg;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g6 extends a implements IInterface {
    /* JADX INFO: Access modifiers changed from: package-private */
    public g6(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.vision.text.internal.client.INativeTextRecognizer");
    }

    public final void W0() {
        h(2, e());
    }

    public final ka[] X0(sf.a aVar, c2 c2Var) {
        Parcel e10 = e();
        b1.b(e10, aVar);
        b1.a(e10, c2Var);
        Parcel f10 = f(1, e10);
        ka[] kaVarArr = (ka[]) f10.createTypedArray(ka.CREATOR);
        f10.recycle();
        return kaVarArr;
    }
}
