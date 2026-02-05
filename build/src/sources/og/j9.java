package og;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class j9 extends a implements lb {
    /* JADX INFO: Access modifiers changed from: package-private */
    public j9(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.vision.face.internal.client.INativeFaceDetectorCreator");
    }

    @Override // og.lb
    public final i8 S0(sf.a aVar, g6 g6Var) {
        i8 i8Var;
        Parcel e10 = e();
        b1.b(e10, aVar);
        b1.a(e10, g6Var);
        Parcel f10 = f(1, e10);
        IBinder readStrongBinder = f10.readStrongBinder();
        if (readStrongBinder == null) {
            i8Var = null;
        } else {
            IInterface queryLocalInterface = readStrongBinder.queryLocalInterface("com.google.android.gms.vision.face.internal.client.INativeFaceDetector");
            if (queryLocalInterface instanceof i8) {
                i8Var = (i8) queryLocalInterface;
            } else {
                i8Var = new i8(readStrongBinder);
            }
        }
        f10.recycle();
        return i8Var;
    }
}
