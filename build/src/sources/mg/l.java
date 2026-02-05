package mg;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l extends a implements n {
    /* JADX INFO: Access modifiers changed from: package-private */
    public l(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.vision.barcode.internal.client.INativeBarcodeDetectorCreator");
    }

    @Override // mg.n
    public final k l0(sf.a aVar, i iVar) {
        k kVar;
        Parcel e10 = e();
        p0.b(e10, aVar);
        p0.a(e10, iVar);
        Parcel f10 = f(1, e10);
        IBinder readStrongBinder = f10.readStrongBinder();
        if (readStrongBinder == null) {
            kVar = null;
        } else {
            IInterface queryLocalInterface = readStrongBinder.queryLocalInterface("com.google.android.gms.vision.barcode.internal.client.INativeBarcodeDetector");
            if (queryLocalInterface instanceof k) {
                kVar = (k) queryLocalInterface;
            } else {
                kVar = new k(readStrongBinder);
            }
        }
        f10.recycle();
        return kVar;
    }
}
