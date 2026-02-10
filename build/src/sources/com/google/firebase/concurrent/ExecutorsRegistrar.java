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
import vi.d0;
import vi.w;
@SuppressLint({"ThreadPoolCreation"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ExecutorsRegistrar implements ComponentRegistrar {

    /* renamed from: a  reason: collision with root package name */
    static final w f16410a = new w(new gj.b() { // from class: wi.a
        @Override // gj.b
        public final Object get() {
            ScheduledExecutorService m10;
            m10 = ExecutorsRegistrar.m(Executors.newFixedThreadPool(4, ExecutorsRegistrar.k("Firebase Background", 10, ExecutorsRegistrar.i())));
            return m10;
        }
    });

    /* renamed from: b  reason: collision with root package name */
    static final w f16411b = new w(new gj.b() { // from class: wi.b
        @Override // gj.b
        public final Object get() {
            ScheduledExecutorService m10;
            m10 = ExecutorsRegistrar.m(Executors.newFixedThreadPool(Math.max(2, Runtime.getRuntime().availableProcessors()), ExecutorsRegistrar.k("Firebase Lite", 0, ExecutorsRegistrar.l())));
            return m10;
        }
    });

    /* renamed from: c  reason: collision with root package name */
    static final w f16412c = new w(new gj.b() { // from class: wi.c
        @Override // gj.b
        public final Object get() {
            ScheduledExecutorService m10;
            m10 = ExecutorsRegistrar.m(Executors.newCachedThreadPool(ExecutorsRegistrar.j("Firebase Blocking", 11)));
            return m10;
        }
    });

    /* renamed from: d  reason: collision with root package name */
    static final w f16413d = new w(new gj.b() { // from class: wi.d
        @Override // gj.b
        public final Object get() {
            ScheduledExecutorService newSingleThreadScheduledExecutor;
            newSingleThreadScheduledExecutor = Executors.newSingleThreadScheduledExecutor(ExecutorsRegistrar.j("Firebase Scheduler", 0));
            return newSingleThreadScheduledExecutor;
        }
    });

    public static /* synthetic */ ScheduledExecutorService a(vi.d dVar) {
        return (ScheduledExecutorService) f16411b.get();
    }

    public static /* synthetic */ ScheduledExecutorService e(vi.d dVar) {
        return (ScheduledExecutorService) f16412c.get();
    }

    public static /* synthetic */ ScheduledExecutorService g(vi.d dVar) {
        return (ScheduledExecutorService) f16410a.get();
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
        return new o(executorService, (ScheduledExecutorService) f16413d.get());
    }

    @Override // com.google.firebase.components.ComponentRegistrar
    public List getComponents() {
        return Arrays.asList(vi.c.f(d0.a(ui.a.class, ScheduledExecutorService.class), d0.a(ui.a.class, ExecutorService.class), d0.a(ui.a.class, Executor.class)).e(new vi.g() { // from class: wi.e
            @Override // vi.g
            public final Object a(vi.d dVar) {
                return ExecutorsRegistrar.g(dVar);
            }
        }).d(), vi.c.f(d0.a(ui.b.class, ScheduledExecutorService.class), d0.a(ui.b.class, ExecutorService.class), d0.a(ui.b.class, Executor.class)).e(new vi.g() { // from class: wi.f
            @Override // vi.g
            public final Object a(vi.d dVar) {
                return ExecutorsRegistrar.e(dVar);
            }
        }).d(), vi.c.f(d0.a(ui.c.class, ScheduledExecutorService.class), d0.a(ui.c.class, ExecutorService.class), d0.a(ui.c.class, Executor.class)).e(new vi.g() { // from class: wi.g
            @Override // vi.g
            public final Object a(vi.d dVar) {
                return ExecutorsRegistrar.a(dVar);
            }
        }).d(), vi.c.e(d0.a(ui.d.class, Executor.class)).e(new vi.g() { // from class: wi.h
            @Override // vi.g
            public final Object a(vi.d dVar) {
                Executor executor;
                executor = k.INSTANCE;
                return executor;
            }
        }).d());
    }
}
