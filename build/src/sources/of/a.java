package of;

import gf.q;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadFactory;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a implements ThreadFactory {

    /* renamed from: a  reason: collision with root package name */
    private final String f42547a;

    /* renamed from: b  reason: collision with root package name */
    private final ThreadFactory f42548b = Executors.defaultThreadFactory();

    public a(String str) {
        q.m(str, "Name must not be null");
        this.f42547a = str;
    }

    @Override // java.util.concurrent.ThreadFactory
    public final Thread newThread(Runnable runnable) {
        Thread newThread = this.f42548b.newThread(new b(runnable, 0));
        newThread.setName(this.f42547a);
        return newThread;
    }
}
