package com.facebook.imagepipeline.core;

import java.util.concurrent.Executor;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import oa.n;
import oa.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class DefaultExecutorSupplier implements n {

    /* renamed from: f  reason: collision with root package name */
    public static final a f11073f = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Executor f11074a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f11075b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f11076c;

    /* renamed from: d  reason: collision with root package name */
    private final Executor f11077d;

    /* renamed from: e  reason: collision with root package name */
    private final ScheduledExecutorService f11078e;

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
        this.f11074a = newFixedThreadPool;
        ExecutorService newFixedThreadPool2 = Executors.newFixedThreadPool(i10, new w(10, "FrescoDecodeExecutor", true));
        Intrinsics.checkNotNullExpressionValue(newFixedThreadPool2, "newFixedThreadPool(...)");
        this.f11075b = newFixedThreadPool2;
        ExecutorService newFixedThreadPool3 = Executors.newFixedThreadPool(i10, new w(10, "FrescoBackgroundExecutor", true));
        Intrinsics.checkNotNullExpressionValue(newFixedThreadPool3, "newFixedThreadPool(...)");
        this.f11076c = newFixedThreadPool3;
        ExecutorService newFixedThreadPool4 = Executors.newFixedThreadPool(1, new w(10, "FrescoLightWeightBackgroundExecutor", true));
        Intrinsics.checkNotNullExpressionValue(newFixedThreadPool4, "newFixedThreadPool(...)");
        this.f11077d = newFixedThreadPool4;
        ScheduledExecutorService newScheduledThreadPool = Executors.newScheduledThreadPool(i10, new w(10, "FrescoBackgroundExecutor", true));
        Intrinsics.checkNotNullExpressionValue(newScheduledThreadPool, "newScheduledThreadPool(...)");
        this.f11078e = newScheduledThreadPool;
    }

    @Override // oa.n
    public Executor a() {
        return this.f11077d;
    }

    @Override // oa.n
    public Executor b() {
        return this.f11074a;
    }

    @Override // oa.n
    public ScheduledExecutorService c() {
        return this.f11078e;
    }

    @Override // oa.n
    public Executor d() {
        return this.f11075b;
    }

    @Override // oa.n
    public Executor e() {
        return this.f11076c;
    }

    @Override // oa.n
    public Executor f() {
        return this.f11074a;
    }

    @Override // oa.n
    public Executor g() {
        return this.f11074a;
    }
}
