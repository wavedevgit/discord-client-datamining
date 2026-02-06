package qg;

import android.os.IBinder;
import android.os.IInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class i8 extends b0 implements j9 {
    public static j9 e(IBinder iBinder) {
        if (iBinder == null) {
            return null;
        }
        IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.vision.text.internal.client.INativeTextRecognizerCreator");
        if (queryLocalInterface instanceof j9) {
            return (j9) queryLocalInterface;
        }
        return new h7(iBinder);
    }
}
