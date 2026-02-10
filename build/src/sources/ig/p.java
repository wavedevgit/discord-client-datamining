package ig;

import android.os.Handler;
import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class p extends Handler {

    /* renamed from: a  reason: collision with root package name */
    private final Looper f27963a;

    public p(Looper looper) {
        super(looper);
        this.f27963a = Looper.getMainLooper();
    }

    public p(Looper looper, Handler.Callback callback) {
        super(looper, callback);
        this.f27963a = Looper.getMainLooper();
    }
}
