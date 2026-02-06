package xh;

import android.os.IBinder;
import android.os.IInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class a0 extends x implements b0 {
    public static b0 f(IBinder iBinder) {
        if (iBinder == null) {
            return null;
        }
        IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.play.core.assetpacks.protocol.IAssetModuleService");
        if (queryLocalInterface instanceof b0) {
            return (b0) queryLocalInterface;
        }
        return new z(iBinder);
    }
}
