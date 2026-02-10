package hf;

import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b {
    public static ff.b a(Status status) {
        if (status.f()) {
            return new ff.i(status);
        }
        return new ff.b(status);
    }
}
