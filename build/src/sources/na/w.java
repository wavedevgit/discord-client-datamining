package na;

import android.os.Process;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.atomic.AtomicInteger;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class w implements ThreadFactory {

    /* renamed from: a  reason: collision with root package name */
    private final int f39993a;

    /* renamed from: b  reason: collision with root package name */
    private final String f39994b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f39995c;

    /* renamed from: d  reason: collision with root package name */
    private final AtomicInteger f39996d;

    public w(int i10, String prefix, boolean z10) {
        Intrinsics.checkNotNullParameter(prefix, "prefix");
        this.f39993a = i10;
        this.f39994b = prefix;
        this.f39995c = z10;
        this.f39996d = new AtomicInteger(1);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void b(w this$0, Runnable runnable) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Intrinsics.checkNotNullParameter(runnable, "$runnable");
        try {
            Process.setThreadPriority(this$0.f39993a);
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
        if (this.f39995c) {
            str = this.f39994b + "-" + this.f39996d.getAndIncrement();
        } else {
            str = this.f39994b;
        }
        return new Thread(runnable2, str);
    }
}
