package pf;

import hf.q;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadFactory;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a implements ThreadFactory {

    /* renamed from: a  reason: collision with root package name */
    private final String f41737a;

    /* renamed from: b  reason: collision with root package name */
    private final ThreadFactory f41738b = Executors.defaultThreadFactory();

    public a(String str) {
        q.m(str, "Name must not be null");
        this.f41737a = str;
    }

    @Override // java.util.concurrent.ThreadFactory
    public final Thread newThread(Runnable runnable) {
        Thread newThread = this.f41738b.newThread(new b(runnable, 0));
        newThread.setName(this.f41737a);
        return newThread;
    }
}
