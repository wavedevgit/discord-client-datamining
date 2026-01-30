package x0;

import android.os.Looper;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class e {

    /* renamed from: a  reason: collision with root package name */
    private static final long f53138a;

    static {
        long j10;
        try {
            j10 = Looper.getMainLooper().getThread().getId();
        } catch (Exception unused) {
            j10 = -1;
        }
        f53138a = j10;
    }

    public static final long a() {
        return f53138a;
    }
}
