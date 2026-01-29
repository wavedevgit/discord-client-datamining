package gf;

import com.google.android.gms.common.api.Status;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b {
    public static ef.b a(Status status) {
        if (status.f()) {
            return new ef.i(status);
        }
        return new ef.b(status);
    }
}
