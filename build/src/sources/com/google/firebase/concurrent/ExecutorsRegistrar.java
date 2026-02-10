package com.google.firebase.concurrent;

import android.annotation.SuppressLint;
import android.os.Build;
import android.os.StrictMode;
import com.google.firebase.components.ComponentRegistrar;
import com.google.firebase.concurrent.ExecutorsRegistrar;
import java.util.Arrays;
import java.util.List;
import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ThreadFactory;
import xi.d0;
import xi.w;
@SuppressLint({"ThreadPoolCreation"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ExecutorsRegistrar implements ComponentRegistrar {

    /* renamed from: a  reason: collision with root package name */
    static final w f17159a = new w(new ij.b() { // from class: yi.a
        @Override // ij.b
        public final Object get() {
            ScheduledExecutorService m10;
            m10 = ExecutorsRegistrar.m(Executors.newFixedThreadPool(4, ExecutorsRegistrar.k("Firebase Background", 10, ExecutorsRegistrar.i())));
            return m10;
        }
    });

    /* renamed from: b  reason: collision with root package name */
    static final w f17160b = new w(new ij.b() { // from class: yi.b
        @Override // ij.b
        public final Object get() {
            ScheduledExecutorService m10;
            m10 = ExecutorsRegistrar.m(Executors.newFixedThreadPool(Math.max(2, Runtime.getRuntime().availableProcessors()), ExecutorsRegistrar.k("Firebase Lite", 0, ExecutorsRegistrar.l())));
            return m10;
        }
    });

    /* renamed from: c  reason: collision with root package name */
    static final w f17161c = new w(new ij.b() { // from class: yi.c
        @Override // ij.b
        public final Object get() {
            ScheduledExecutorService m10;
            m10 = ExecutorsRegistrar.m(Executors.newCachedThreadPool(ExecutorsRegistrar.j("Firebase Blocking", 11)));
            return m10;
        }
    });

    /* renamed from: d  reason: collision with root package name */
    static final w f17162d = new w(new ij.b() { // from class: yi.d
        @Override // ij.b
        public final Object get() {
            ScheduledExecutorService newSingleThreadScheduledExecutor;
            newSingleThreadScheduledExecutor = Executors.newSingleThreadScheduledExecutor(ExecutorsRegistrar.j("Firebase Scheduler", 0));
            return newSingleThreadScheduledExecutor;
        }
    });

    public static /* synthetic */ ScheduledExecutorService a(xi.d dVar) {
        return (ScheduledExecutorService) f17160b.get();
    }

    public static /* synthetic */ ScheduledExecutorService e(xi.d dVar) {
        return (ScheduledExecutorService) f17161c.get();
    }

    public static /* synthetic */ ScheduledExecutorService g(xi.d dVar) {
        return (ScheduledExecutorService) f17159a.get();
    }

    private static StrictMode.ThreadPolicy i() {
        StrictMode.ThreadPolicy.Builder detectNetwork = new StrictMode.ThreadPolicy.Builder().detectNetwork();
        int i10 = Build.VERSION.SDK_INT;
        detectNetwork.detectResourceMismatches();
        if (i10 >= 26) {
            detectNetwork.detectUnbufferedIo();
        }
        return detectNetwork.penaltyLog().build();
    }

    private static ThreadFactory j(String str, int i10) {
        return new b(str, i10, null);
    }

    private static ThreadFactory k(String str, int i10, StrictMode.ThreadPolicy threadPolicy) {
        return new b(str, i10, threadPolicy);
    }

    private static StrictMode.ThreadPolicy l() {
        return new StrictMode.ThreadPolicy.Builder().detectAll().penaltyLog().build();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static ScheduledExecutorService m(ExecutorService executorService) {
        return new o(executorService, (ScheduledExecutorService) f17162d.get());
    }

    @Override // com.google.firebase.components.ComponentRegistrar
    public List getComponents() {
        return Arrays.asList(xi.c.f(d0.a(wi.a.class, ScheduledExecutorService.class), d0.a(wi.a.class, ExecutorService.class), d0.a(wi.a.class, Executor.class)).e(new xi.g() { // from class: yi.e
            @Override // xi.g
            public final Object a(xi.d dVar) {
                return ExecutorsRegistrar.g(dVar);
            }
        }).d(), xi.c.f(d0.a(wi.b.class, ScheduledExecutorService.class), d0.a(wi.b.class, ExecutorService.class), d0.a(wi.b.class, Executor.class)).e(new xi.g() { // from class: yi.f
            @Override // xi.g
            public final Object a(xi.d dVar) {
                return ExecutorsRegistrar.e(dVar);
            }
        }).d(), xi.c.f(d0.a(wi.c.class, ScheduledExecutorService.class), d0.a(wi.c.class, ExecutorService.class), d0.a(wi.c.class, Executor.class)).e(new xi.g() { // from class: yi.g
            @Override // xi.g
            public final Object a(xi.d dVar) {
                return ExecutorsRegistrar.a(dVar);
            }
        }).d(), xi.c.e(d0.a(wi.d.class, Executor.class)).e(new xi.g() { // from class: yi.h
            @Override // xi.g
            public final Object a(xi.d dVar) {
                Executor executor;
                executor = k.INSTANCE;
                return executor;
            }
        }).d());
    }
}
