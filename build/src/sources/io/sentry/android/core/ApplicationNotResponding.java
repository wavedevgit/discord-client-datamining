package io.sentry.android.core;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ApplicationNotResponding extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final Thread f28802d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public ApplicationNotResponding(String str, Thread thread) {
        super(str);
        Thread thread2 = (Thread) io.sentry.util.y.c(thread, "Thread must be provided.");
        this.f28802d = thread2;
        setStackTrace(thread2.getStackTrace());
    }

    public Thread a() {
        return this.f28802d;
    }
}
