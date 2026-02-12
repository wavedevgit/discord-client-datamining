package ig;

import android.os.Handler;
import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class p extends Handler {

    /* renamed from: a  reason: collision with root package name */
    private final Looper f27964a;

    public p(Looper looper) {
        super(looper);
        this.f27964a = Looper.getMainLooper();
    }

    public p(Looper looper, Handler.Callback callback) {
        super(looper, callback);
        this.f27964a = Looper.getMainLooper();
    }
}
