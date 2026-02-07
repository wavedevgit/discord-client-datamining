package na;

import android.os.Process;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.atomic.AtomicInteger;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w implements ThreadFactory {

    /* renamed from: a  reason: collision with root package name */
    private final int f38758a;

    /* renamed from: b  reason: collision with root package name */
    private final String f38759b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f38760c;

    /* renamed from: d  reason: collision with root package name */
    private final AtomicInteger f38761d;

    public w(int i10, String prefix, boolean z10) {
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        this.f38758a = i10;
        this.f38759b = prefix;
        this.f38760c = z10;
        this.f38761d = new AtomicInteger(1);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void b(w this$0, Runnable runnable) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Intrinsics.checkNotNullParameter(runnable, "$runnable");
        try {
            Process.setThreadPriority(this$0.f38758a);
        } catch (Throwable unused) {
        }
        runnable.run();
    }

    @Override // java.util.concurrent.ThreadFactory
    public Thread newThread(final Runnable runnable) {
        String str;
        Intrinsics.checkNotNullParameter(runnable, "runnable");
        Runnable runnable2 = new Runnable() { // from class: na.v
            @Override // java.lang.Runnable
            public final void run() {
                w.b(w.this, runnable);
            }
        };
        if (this.f38760c) {
            str = this.f38759b + "-" + this.f38761d.getAndIncrement();
        } else {
            str = this.f38759b;
        }
        return new Thread(runnable2, str);
    }
}
