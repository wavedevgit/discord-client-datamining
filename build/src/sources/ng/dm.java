package ng;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class dm extends a implements fm {
    /* JADX INFO: Access modifiers changed from: package-private */
    public dm(IBinder iBinder) {
        super(iBinder, "com.google.mlkit.vision.barcode.aidls.IBarcodeScannerCreator");
    }

    @Override // ng.fm
    public final cm E0(sf.a aVar, ul ulVar) {
        cm cmVar;
        Parcel e10 = e();
        p0.b(e10, aVar);
        p0.a(e10, ulVar);
        Parcel f10 = f(1, e10);
        IBinder readStrongBinder = f10.readStrongBinder();
        if (readStrongBinder == null) {
            cmVar = null;
        } else {
            IInterface queryLocalInterface = readStrongBinder.queryLocalInterface("com.google.mlkit.vision.barcode.aidls.IBarcodeScanner");
            if (queryLocalInterface instanceof cm) {
                cmVar = (cm) queryLocalInterface;
            } else {
                cmVar = new cm(readStrongBinder);
            }
        }
        f10.recycle();
        return cmVar;
    }
}
