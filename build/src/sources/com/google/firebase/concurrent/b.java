package com.google.firebase.concurrent;

import android.os.Process;
import android.os.StrictMode;
import java.util.Locale;
import java.util.concurrent.Executors;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.atomic.AtomicLong;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b implements ThreadFactory {

    /* renamed from: e  reason: collision with root package name */
    private static final ThreadFactory f15902e = Executors.defaultThreadFactory();

    /* renamed from: a  reason: collision with root package name */
    private final AtomicLong f15903a = new AtomicLong();

    /* renamed from: b  reason: collision with root package name */
    private final String f15904b;

    /* renamed from: c  reason: collision with root package name */
    private final int f15905c;

    /* renamed from: d  reason: collision with root package name */
    private final StrictMode.ThreadPolicy f15906d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(String str, int i10, StrictMode.ThreadPolicy threadPolicy) {
        this.f15904b = str;
        this.f15905c = i10;
        this.f15906d = threadPolicy;
    }

    public static /* synthetic */ void a(b bVar, Runnable runnable) {
        Process.setThreadPriority(bVar.f15905c);
        StrictMode.ThreadPolicy threadPolicy = bVar.f15906d;
        if (threadPolicy != null) {
            StrictMode.setThreadPolicy(threadPolicy);
        }
        runnable.run();
    }

    @Override // java.util.concurrent.ThreadFactory
    public Thread newThread(final Runnable runnable) {
        Thread newThread = f15902e.newThread(new Runnable() { // from class: com.google.firebase.concurrent.a
            @Override // java.lang.Runnable
            public final void run() {
                b.a(b.this, runnable);
            }
        });
        newThread.setName(String.format(Locale.ROOT, "%s Thread #%d", this.f15904b, Long.valueOf(this.f15903a.getAndIncrement())));
        return newThread;
    }
}
