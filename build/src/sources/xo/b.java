package xo;

import android.content.Context;
import bs.j;
import java.io.File;
import java.lang.Thread;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private boolean f54781a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f54782b;

    /* renamed from: c  reason: collision with root package name */
    private final ho.a f54783c;

    /* renamed from: d  reason: collision with root package name */
    private List f54784d;

    public b(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        this.f54782b = true;
        this.f54783c = new ho.a(context);
        this.f54784d = CollectionsKt.l();
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
        this.f54783c.a();
    }

    public final void c(Throwable e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        if (this.f54782b) {
            try {
                this.f54783c.g(e10);
            } catch (Exception unused) {
            }
            try {
                for (File file : this.f54784d) {
                    j.r(file);
                }
            } catch (Exception unused2) {
            }
        }
    }

    public final synchronized void d() {
        if (this.f54781a) {
            return;
        }
        this.f54781a = true;
        final Thread.UncaughtExceptionHandler defaultUncaughtExceptionHandler = Thread.getDefaultUncaughtExceptionHandler();
        Thread.setDefaultUncaughtExceptionHandler(new Thread.UncaughtExceptionHandler() { // from class: xo.a
            @Override // java.lang.Thread.UncaughtExceptionHandler
            public final void uncaughtException(Thread thread, Throwable th2) {
                b.e(b.this, defaultUncaughtExceptionHandler, thread, th2);
            }
        });
    }

    public final void f(List list) {
        Intrinsics.checkNotNullParameter(list, "<set-?>");
        this.f54784d = list;
    }

    public final synchronized void g() {
        if (this.f54781a) {
            this.f54782b = false;
        }
    }
}
