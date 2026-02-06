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
import ui.d0;
import ui.w;
@SuppressLint({"ThreadPoolCreation"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class ExecutorsRegistrar implements ComponentRegistrar {

    /* renamed from: a  reason: collision with root package name */
    static final w f16270a = new w(new fj.b() { // from class: vi.a
        @Override // fj.b
        public final Object get() {
            ScheduledExecutorService m10;
            m10 = ExecutorsRegistrar.m(Executors.newFixedThreadPool(4, ExecutorsRegistrar.k("Firebase Background", 10, ExecutorsRegistrar.i())));
            return m10;
        }
    });

    /* renamed from: b  reason: collision with root package name */
    static final w f16271b = new w(new fj.b() { // from class: vi.b
        @Override // fj.b
        public final Object get() {
            ScheduledExecutorService m10;
            m10 = ExecutorsRegistrar.m(Executors.newFixedThreadPool(Math.max(2, Runtime.getRuntime().availableProcessors()), ExecutorsRegistrar.k("Firebase Lite", 0, ExecutorsRegistrar.l())));
            return m10;
        }
    });

    /* renamed from: c  reason: collision with root package name */
    static final w f16272c = new w(new fj.b() { // from class: vi.c
        @Override // fj.b
        public final Object get() {
            ScheduledExecutorService m10;
            m10 = ExecutorsRegistrar.m(Executors.newCachedThreadPool(ExecutorsRegistrar.j("Firebase Blocking", 11)));
            return m10;
        }
    });

    /* renamed from: d  reason: collision with root package name */
    static final w f16273d = new w(new fj.b() { // from class: vi.d
        @Override // fj.b
        public final Object get() {
            ScheduledExecutorService newSingleThreadScheduledExecutor;
            newSingleThreadScheduledExecutor = Executors.newSingleThreadScheduledExecutor(ExecutorsRegistrar.j("Firebase Scheduler", 0));
            return newSingleThreadScheduledExecutor;
        }
    });

    public static /* synthetic */ ScheduledExecutorService a(ui.d dVar) {
        return (ScheduledExecutorService) f16271b.get();
    }

    public static /* synthetic */ ScheduledExecutorService e(ui.d dVar) {
        return (ScheduledExecutorService) f16272c.get();
    }

    public static /* synthetic */ ScheduledExecutorService g(ui.d dVar) {
        return (ScheduledExecutorService) f16270a.get();
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
        return new o(executorService, (ScheduledExecutorService) f16273d.get());
    }

    @Override // com.google.firebase.components.ComponentRegistrar
    public List getComponents() {
        return Arrays.asList(ui.c.f(d0.a(ti.a.class, ScheduledExecutorService.class), d0.a(ti.a.class, ExecutorService.class), d0.a(ti.a.class, Executor.class)).e(new ui.g() { // from class: vi.e
            @Override // ui.g
            public final Object a(ui.d dVar) {
                return ExecutorsRegistrar.g(dVar);
            }
        }).d(), ui.c.f(d0.a(ti.b.class, ScheduledExecutorService.class), d0.a(ti.b.class, ExecutorService.class), d0.a(ti.b.class, Executor.class)).e(new ui.g() { // from class: vi.f
            @Override // ui.g
            public final Object a(ui.d dVar) {
                return ExecutorsRegistrar.e(dVar);
            }
        }).d(), ui.c.f(d0.a(ti.c.class, ScheduledExecutorService.class), d0.a(ti.c.class, ExecutorService.class), d0.a(ti.c.class, Executor.class)).e(new ui.g() { // from class: vi.g
            @Override // ui.g
            public final Object a(ui.d dVar) {
                return ExecutorsRegistrar.a(dVar);
            }
        }).d(), ui.c.e(d0.a(ti.d.class, Executor.class)).e(new ui.g() { // from class: vi.h
            @Override // ui.g
            public final Object a(ui.d dVar) {
                Executor executor;
                executor = k.INSTANCE;
                return executor;
            }
        }).d());
    }
}
