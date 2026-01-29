package pg;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import android.os.Parcelable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class mk extends a implements IInterface {
    /* JADX INFO: Access modifiers changed from: package-private */
    public mk(IBinder iBinder) {
        super(iBinder, "com.google.mlkit.vision.text.aidls.ITextRecognizer");
    }

    public final xk S0(sf.a aVar, kk kkVar) {
        xk createFromParcel;
        Parcel e10 = e();
        b1.b(e10, aVar);
        b1.a(e10, kkVar);
        Parcel f10 = f(3, e10);
        Parcelable.Creator<xk> creator = xk.CREATOR;
        if (f10.readInt() == 0) {
            createFromParcel = null;
        } else {
            createFromParcel = creator.createFromParcel(f10);
        }
        xk xkVar = createFromParcel;
        f10.recycle();
        return xkVar;
    }

    public final void T0() {
        h(1, e());
    }

    public final void U0() {
        h(2, e());
    }
}
