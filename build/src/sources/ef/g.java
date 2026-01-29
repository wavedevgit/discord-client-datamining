package ef;

import com.google.android.gms.common.api.Status;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class g {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface a {
        void a(Status status);
    }

    public abstract void addStatusListener(a aVar);

    public abstract k await(long j10, TimeUnit timeUnit);
}
