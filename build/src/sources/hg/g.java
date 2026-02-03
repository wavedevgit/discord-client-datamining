package hg;

import android.os.Handler;
import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class g extends Handler {

    /* renamed from: a  reason: collision with root package name */
    private final Looper f27702a;

    public g(Looper looper) {
        super(looper);
        this.f27702a = Looper.getMainLooper();
    }

    public g(Looper looper, Handler.Callback callback) {
        super(looper, callback);
        this.f27702a = Looper.getMainLooper();
    }
}
