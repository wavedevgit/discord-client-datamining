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
import qi.d0;
import qi.w;
@SuppressLint({"ThreadPoolCreation"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ExecutorsRegistrar implements ComponentRegistrar {

    /* renamed from: a  reason: collision with root package name */
    static final w f15896a = new w(new bj.b() { // from class: ri.a
        @Override // bj.b
        public final Object get() {
            ScheduledExecutorService m10;
            m10 = ExecutorsRegistrar.m(Executors.newFixedThreadPool(4, ExecutorsRegistrar.k("Firebase Background", 10, ExecutorsRegistrar.i())));
            return m10;
        }
    });

    /* renamed from: b  reason: collision with root package name */
    static final w f15897b = new w(new bj.b() { // from class: ri.b
        @Override // bj.b
        public final Object get() {
            ScheduledExecutorService m10;
            m10 = ExecutorsRegistrar.m(Executors.newFixedThreadPool(Math.max(2, Runtime.getRuntime().availableProcessors()), ExecutorsRegistrar.k("Firebase Lite", 0, ExecutorsRegistrar.l())));
            return m10;
        }
    });

    /* renamed from: c  reason: collision with root package name */
    static final w f15898c = new w(new bj.b() { // from class: ri.c
        @Override // bj.b
        public final Object get() {
            ScheduledExecutorService m10;
            m10 = ExecutorsRegistrar.m(Executors.newCachedThreadPool(ExecutorsRegistrar.j("Firebase Blocking", 11)));
            return m10;
        }
    });

    /* renamed from: d  reason: collision with root package name */
    static final w f15899d = new w(new bj.b() { // from class: ri.d
        @Override // bj.b
        public final Object get() {
            ScheduledExecutorService newSingleThreadScheduledExecutor;
            newSingleThreadScheduledExecutor = Executors.newSingleThreadScheduledExecutor(ExecutorsRegistrar.j("Firebase Scheduler", 0));
            return newSingleThreadScheduledExecutor;
        }
    });

    public static /* synthetic */ ScheduledExecutorService a(qi.d dVar) {
        return (ScheduledExecutorService) f15897b.get();
    }

    public static /* synthetic */ ScheduledExecutorService e(qi.d dVar) {
        return (ScheduledExecutorService) f15898c.get();
    }

    public static /* synthetic */ ScheduledExecutorService g(qi.d dVar) {
        return (ScheduledExecutorService) f15896a.get();
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
        return new o(executorService, (ScheduledExecutorService) f15899d.get());
    }

    @Override // com.google.firebase.components.ComponentRegistrar
    public List getComponents() {
        return Arrays.asList(qi.c.f(d0.a(pi.a.class, ScheduledExecutorService.class), d0.a(pi.a.class, ExecutorService.class), d0.a(pi.a.class, Executor.class)).e(new qi.g() { // from class: ri.e
            @Override // qi.g
            public final Object a(qi.d dVar) {
                return ExecutorsRegistrar.g(dVar);
            }
        }).d(), qi.c.f(d0.a(pi.b.class, ScheduledExecutorService.class), d0.a(pi.b.class, ExecutorService.class), d0.a(pi.b.class, Executor.class)).e(new qi.g() { // from class: ri.f
            @Override // qi.g
            public final Object a(qi.d dVar) {
                return ExecutorsRegistrar.e(dVar);
            }
        }).d(), qi.c.f(d0.a(pi.c.class, ScheduledExecutorService.class), d0.a(pi.c.class, ExecutorService.class), d0.a(pi.c.class, Executor.class)).e(new qi.g() { // from class: ri.g
            @Override // qi.g
            public final Object a(qi.d dVar) {
                return ExecutorsRegistrar.a(dVar);
            }
        }).d(), qi.c.e(d0.a(pi.d.class, Executor.class)).e(new qi.g() { // from class: ri.h
            @Override // qi.g
            public final Object a(qi.d dVar) {
                Executor executor;
                executor = k.INSTANCE;
                return executor;
            }
        }).d());
    }
}
