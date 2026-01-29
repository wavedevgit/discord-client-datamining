package og;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class me extends a implements pe {
    /* JADX INFO: Access modifiers changed from: package-private */
    public me(IBinder iBinder) {
        super(iBinder, "com.google.mlkit.vision.face.aidls.IFaceDetectorCreator");
    }

    @Override // og.pe
    public final le V(sf.a aVar, he heVar) {
        le leVar;
        Parcel e10 = e();
        b1.b(e10, aVar);
        b1.a(e10, heVar);
        Parcel f10 = f(1, e10);
        IBinder readStrongBinder = f10.readStrongBinder();
        if (readStrongBinder == null) {
            leVar = null;
        } else {
            IInterface queryLocalInterface = readStrongBinder.queryLocalInterface("com.google.mlkit.vision.face.aidls.IFaceDetector");
            if (queryLocalInterface instanceof le) {
                leVar = (le) queryLocalInterface;
            } else {
                leVar = new le(readStrongBinder);
            }
        }
        f10.recycle();
        return leVar;
    }
}
