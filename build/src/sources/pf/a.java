package pf;

import hf.q;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadFactory;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a implements ThreadFactory {

    /* renamed from: a  reason: collision with root package name */
    private final String f43278a;

    /* renamed from: b  reason: collision with root package name */
    private final ThreadFactory f43279b = Executors.defaultThreadFactory();

    public a(String str) {
        q.m(str, "Name must not be null");
        this.f43278a = str;
    }

    @Override // java.util.concurrent.ThreadFactory
    public final Thread newThread(Runnable runnable) {
        Thread newThread = this.f43279b.newThread(new b(runnable, 0));
        newThread.setName(this.f43278a);
        return newThread;
    }
}
