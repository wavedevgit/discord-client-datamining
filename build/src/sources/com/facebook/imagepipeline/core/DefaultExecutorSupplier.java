package com.facebook.imagepipeline.core;

import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import na.n;
import na.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DefaultExecutorSupplier implements n {

    /* renamed from: f  reason: collision with root package name */
    public static final a f11475f = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Executor f11476a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f11477b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f11478c;

    /* renamed from: d  reason: collision with root package name */
    private final Executor f11479d;

    /* renamed from: e  reason: collision with root package name */
    private final ScheduledExecutorService f11480e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public DefaultExecutorSupplier(int i10) {
        ExecutorService newFixedThreadPool = Executors.newFixedThreadPool(2, new w(10, "FrescoIoBoundExecutor", true));
        Intrinsics.checkNotNullExpressionValue(newFixedThreadPool, "newFixedThreadPool(...)");
        this.f11476a = newFixedThreadPool;
        ExecutorService newFixedThreadPool2 = Executors.newFixedThreadPool(i10, new w(10, "FrescoDecodeExecutor", true));
        Intrinsics.checkNotNullExpressionValue(newFixedThreadPool2, "newFixedThreadPool(...)");
        this.f11477b = newFixedThreadPool2;
        ExecutorService newFixedThreadPool3 = Executors.newFixedThreadPool(i10, new w(10, "FrescoBackgroundExecutor", true));
        Intrinsics.checkNotNullExpressionValue(newFixedThreadPool3, "newFixedThreadPool(...)");
        this.f11478c = newFixedThreadPool3;
        ExecutorService newFixedThreadPool4 = Executors.newFixedThreadPool(1, new w(10, "FrescoLightWeightBackgroundExecutor", true));
        Intrinsics.checkNotNullExpressionValue(newFixedThreadPool4, "newFixedThreadPool(...)");
        this.f11479d = newFixedThreadPool4;
        ScheduledExecutorService newScheduledThreadPool = Executors.newScheduledThreadPool(i10, new w(10, "FrescoBackgroundExecutor", true));
        Intrinsics.checkNotNullExpressionValue(newScheduledThreadPool, "newScheduledThreadPool(...)");
        this.f11480e = newScheduledThreadPool;
    }

    @Override // na.n
    public Executor a() {
        return this.f11479d;
    }

    @Override // na.n
    public Executor b() {
        return this.f11476a;
    }

    @Override // na.n
    public ScheduledExecutorService c() {
        return this.f11480e;
    }

    @Override // na.n
    public Executor d() {
        return this.f11477b;
    }

    @Override // na.n
    public Executor e() {
        return this.f11478c;
    }

    @Override // na.n
    public Executor f() {
        return this.f11476a;
    }

    @Override // na.n
    public Executor g() {
        return this.f11476a;
    }
}
