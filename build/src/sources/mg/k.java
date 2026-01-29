package mg;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class k extends a implements IInterface {
    /* JADX INFO: Access modifiers changed from: package-private */
    public k(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.vision.barcode.internal.client.INativeBarcodeDetector");
    }

    public final void S0() {
        h(3, e());
    }

    public final zh[] T0(sf.a aVar, o oVar) {
        Parcel e10 = e();
        p0.b(e10, aVar);
        p0.a(e10, oVar);
        Parcel f10 = f(1, e10);
        zh[] zhVarArr = (zh[]) f10.createTypedArray(zh.CREATOR);
        f10.recycle();
        return zhVarArr;
    }

    public final zh[] U0(sf.a aVar, o oVar) {
        Parcel e10 = e();
        p0.b(e10, aVar);
        p0.a(e10, oVar);
        Parcel f10 = f(2, e10);
        zh[] zhVarArr = (zh[]) f10.createTypedArray(zh.CREATOR);
        f10.recycle();
        return zhVarArr;
    }
}
