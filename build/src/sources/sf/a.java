package sf;

import android.os.IBinder;
import android.os.IInterface;
import hg.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface a extends IInterface {

    /* renamed from: sf.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class AbstractBinderC0634a extends n implements a {
        public AbstractBinderC0634a() {
            super("com.google.android.gms.dynamic.IObjectWrapper");
        }

        public static a f(IBinder iBinder) {
            if (iBinder == null) {
                return null;
            }
            IInterface queryLocalInterface = iBinder.queryLocalInterface("com.google.android.gms.dynamic.IObjectWrapper");
            if (queryLocalInterface instanceof a) {
                return (a) queryLocalInterface;
            }
            return new c(iBinder);
        }
    }
}
