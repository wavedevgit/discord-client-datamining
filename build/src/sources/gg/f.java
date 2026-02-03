package gg;

import android.os.Handler;
import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f extends Handler {

    /* renamed from: a  reason: collision with root package name */
    private final Looper f26219a;

    public f(Looper looper) {
        super(looper);
        this.f26219a = Looper.getMainLooper();
    }

    public f(Looper looper, Handler.Callback callback) {
        super(looper, callback);
        this.f26219a = Looper.getMainLooper();
    }
}
