package os;

import java.util.concurrent.CancellationException;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class r1 extends CancellationException {

    /* renamed from: d  reason: collision with root package name */
    public final transient Job f43576d;

    public r1(String str, Job job) {
        super(str);
        this.f43576d = job;
    }

    public r1(String str) {
        this(str, null);
    }
}
