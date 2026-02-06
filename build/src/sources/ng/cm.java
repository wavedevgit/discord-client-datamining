package ng;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class cm extends a implements IInterface {
    /* JADX INFO: Access modifiers changed from: package-private */
    public cm(IBinder iBinder) {
        super(iBinder, "com.google.mlkit.vision.barcode.aidls.IBarcodeScanner");
    }

    public final List W0(sf.a aVar, lm lmVar) {
        Parcel e10 = e();
        p0.b(e10, aVar);
        p0.a(e10, lmVar);
        Parcel f10 = f(3, e10);
        ArrayList createTypedArrayList = f10.createTypedArrayList(sl.CREATOR);
        f10.recycle();
        return createTypedArrayList;
    }

    public final void X0() {
        h(1, e());
    }

    public final void Y0() {
        h(2, e());
    }
}
