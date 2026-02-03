package fg;

import android.os.Handler;
import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h extends Handler {

    /* renamed from: a  reason: collision with root package name */
    private final Looper f24395a;

    public h(Looper looper) {
        super(looper);
        this.f24395a = Looper.getMainLooper();
    }

    public h(Looper looper, Handler.Callback callback) {
        super(looper, callback);
        this.f24395a = Looper.getMainLooper();
    }
}
