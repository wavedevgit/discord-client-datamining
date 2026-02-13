package hp;

import android.content.Context;
import java.io.File;
import java.lang.Thread;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import ls.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private boolean f28207a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f28208b;

    /* renamed from: c  reason: collision with root package name */
    private final ro.a f28209c;

    /* renamed from: d  reason: collision with root package name */
    private List f28210d;

    public b(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f28208b = true;
        this.f28209c = new ro.a(context);
        this.f28210d = CollectionsKt.l();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void e(b bVar, Thread.UncaughtExceptionHandler uncaughtExceptionHandler, Thread thread, Throwable th2) {
        Intrinsics.checkNotNull(th2);
        bVar.c(th2);
        if (uncaughtExceptionHandler != null) {
            uncaughtExceptionHandler.uncaughtException(thread, th2);
        } else {
            System.exit(1);
            throw new RuntimeException("System.exit returned normally, while it was supposed to halt JVM.");
        }
    }

    public final void b() {
        this.f28209c.a();
    }

    public final void c(Throwable e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        if (this.f28208b) {
            try {
                this.f28209c.g(e10);
            } catch (Exception unused) {
            }
            try {
                for (File file : this.f28210d) {
                    j.r(file);
                }
            } catch (Exception unused2) {
            }
        }
    }

    public final synchronized void d() {
        if (this.f28207a) {
            return;
        }
        this.f28207a = true;
        final Thread.UncaughtExceptionHandler defaultUncaughtExceptionHandler = Thread.getDefaultUncaughtExceptionHandler();
        Thread.setDefaultUncaughtExceptionHandler(new Thread.UncaughtExceptionHandler() { // from class: hp.a
            @Override // java.lang.Thread.UncaughtExceptionHandler
            public final void uncaughtException(Thread thread, Throwable th2) {
                b.e(b.this, defaultUncaughtExceptionHandler, thread, th2);
            }
        });
    }

    public final void f(List list) {
        Intrinsics.checkNotNullParameter(list, "<set-?>");
        this.f28210d = list;
    }

    public final synchronized void g() {
        if (this.f28207a) {
            this.f28208b = false;
        }
    }
}
