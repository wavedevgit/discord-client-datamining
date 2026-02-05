package og;

import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i8 extends a implements IInterface {
    /* JADX INFO: Access modifiers changed from: package-private */
    public i8(IBinder iBinder) {
        super(iBinder, "com.google.android.gms.vision.face.internal.client.INativeFaceDetector");
    }

    public final void W0() {
        h(3, e());
    }

    public final e4[] X0(sf.a aVar, ne neVar) {
        Parcel e10 = e();
        b1.b(e10, aVar);
        b1.a(e10, neVar);
        Parcel f10 = f(1, e10);
        e4[] e4VarArr = (e4[]) f10.createTypedArray(e4.CREATOR);
        f10.recycle();
        return e4VarArr;
    }

    public final e4[] Y0(sf.a aVar, sf.a aVar2, sf.a aVar3, int i10, int i11, int i12, int i13, int i14, int i15, ne neVar) {
        Parcel e10 = e();
        b1.b(e10, aVar);
        b1.b(e10, aVar2);
        b1.b(e10, aVar3);
        e10.writeInt(i10);
        e10.writeInt(i11);
        e10.writeInt(i12);
        e10.writeInt(i13);
        e10.writeInt(i14);
        e10.writeInt(i15);
        b1.a(e10, neVar);
        Parcel f10 = f(4, e10);
        e4[] e4VarArr = (e4[]) f10.createTypedArray(e4.CREATOR);
        f10.recycle();
        return e4VarArr;
    }
}
