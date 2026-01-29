package th;

import android.os.Bundle;
import android.os.IBinder;
import android.os.IInterface;
import android.os.Parcel;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class e0 extends x implements f0 {
    public e0() {
        super("com.google.android.play.core.assetpacks.protocol.IAssetPackExtractionService");
    }

    @Override // th.x
    protected final boolean e(int i10, Parcel parcel, Parcel parcel2, int i11) {
        g0 g0Var = null;
        if (i10 != 2) {
            if (i10 != 3) {
                return false;
            }
            Bundle bundle = (Bundle) y.a(parcel, Bundle.CREATOR);
            IBinder readStrongBinder = parcel.readStrongBinder();
            if (readStrongBinder != null) {
                IInterface queryLocalInterface = readStrongBinder.queryLocalInterface("com.google.android.play.core.assetpacks.protocol.IAssetPackExtractionServiceCallback");
                if (queryLocalInterface instanceof g0) {
                    g0Var = (g0) queryLocalInterface;
                } else {
                    g0Var = new g0(readStrongBinder);
                }
            }
            y.b(parcel);
            z0(bundle, g0Var);
            return true;
        }
        Bundle bundle2 = (Bundle) y.a(parcel, Bundle.CREATOR);
        IBinder readStrongBinder2 = parcel.readStrongBinder();
        if (readStrongBinder2 != null) {
            IInterface queryLocalInterface2 = readStrongBinder2.queryLocalInterface("com.google.android.play.core.assetpacks.protocol.IAssetPackExtractionServiceCallback");
            if (queryLocalInterface2 instanceof g0) {
                g0Var = (g0) queryLocalInterface2;
            } else {
                g0Var = new g0(readStrongBinder2);
            }
        }
        y.b(parcel);
        I0(bundle2, g0Var);
        return true;
    }
}
