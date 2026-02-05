package ji;

import android.os.IBinder;
import android.os.IInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class p0 extends b0 implements q0 {
    public static q0 f(IBinder iBinder) {
        if (iBinder == null) {
            return null;
        }
        IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.play.core.integrity.protocol.IIntegrityService");
        if (queryLocalInterface instanceof q0) {
            return (q0) queryLocalInterface;
        }
        return new o0(iBinder);
    }
}
