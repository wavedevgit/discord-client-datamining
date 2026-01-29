package pg;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class nk extends a implements pk {
    /* JADX INFO: Access modifiers changed from: package-private */
    public nk(IBinder iBinder) {
        super(iBinder, "com.google.mlkit.vision.text.aidls.ITextRecognizerCreator");
    }

    @Override // pg.pk
    public final mk B(sf.a aVar, zk zkVar) {
        mk mkVar;
        Parcel e10 = e();
        b1.b(e10, aVar);
        b1.a(e10, zkVar);
        Parcel f10 = f(2, e10);
        IBinder readStrongBinder = f10.readStrongBinder();
        if (readStrongBinder == null) {
            mkVar = null;
        } else {
            IInterface queryLocalInterface = readStrongBinder.queryLocalInterface("com.google.mlkit.vision.text.aidls.ITextRecognizer");
            if (queryLocalInterface instanceof mk) {
                mkVar = (mk) queryLocalInterface;
            } else {
                mkVar = new mk(readStrongBinder);
            }
        }
        f10.recycle();
        return mkVar;
    }

    @Override // pg.pk
    public final mk H(sf.a aVar) {
        mk mkVar;
        Parcel e10 = e();
        b1.b(e10, aVar);
        Parcel f10 = f(1, e10);
        IBinder readStrongBinder = f10.readStrongBinder();
        if (readStrongBinder == null) {
            mkVar = null;
        } else {
            IInterface queryLocalInterface = readStrongBinder.queryLocalInterface("com.google.mlkit.vision.text.aidls.ITextRecognizer");
            if (queryLocalInterface instanceof mk) {
                mkVar = (mk) queryLocalInterface;
            } else {
                mkVar = new mk(readStrongBinder);
            }
        }
        f10.recycle();
        return mkVar;
    }
}
