package pg;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h7 extends a implements j9 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public h7(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.vision.text.internal.client.INativeTextRecognizerCreator");
    }

    @Override // pg.j9
    public final g6 w0(sf.a aVar, oe oeVar) {
        g6 g6Var;
        Parcel e10 = e();
        b1.b(e10, aVar);
        b1.a(e10, oeVar);
        Parcel f10 = f(1, e10);
        IBinder readStrongBinder = f10.readStrongBinder();
        if (readStrongBinder == null) {
            g6Var = null;
        } else {
            IInterface queryLocalInterface = readStrongBinder.queryLocalInterface("com.google.android.gms.vision.text.internal.client.INativeTextRecognizer");
            if (queryLocalInterface instanceof g6) {
                g6Var = (g6) queryLocalInterface;
            } else {
                g6Var = new g6(readStrongBinder);
            }
        }
        f10.recycle();
        return g6Var;
    }
}
