package og;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
import java.util.ArrayList;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class le extends a implements IInterface {
    /* JADX INFO: Access modifiers changed from: package-private */
    public le(IBinder iBinder) {
        super(iBinder, "com.google.mlkit.vision.face.aidls.IFaceDetector");
    }

    public final List W0(sf.a aVar, de deVar) {
        Parcel e10 = e();
        b1.b(e10, aVar);
        b1.a(e10, deVar);
        Parcel f10 = f(3, e10);
        ArrayList createTypedArrayList = f10.createTypedArrayList(je.CREATOR);
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
