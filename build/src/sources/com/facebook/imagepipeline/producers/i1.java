package com.facebook.imagepipeline.producers;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.concurrent.Executor;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i1 implements h1 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f10679a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f10680b;

    /* renamed from: c  reason: collision with root package name */
    private final Deque f10681c;

    public i1(Executor executor) {
        Intrinsics.checkNotNullParameter(executor, "executor");
        this.f10679a = executor;
        this.f10681c = new ArrayDeque();
    }

    @Override // com.facebook.imagepipeline.producers.h1
    public synchronized void a(Runnable runnable) {
        Intrinsics.checkNotNullParameter(runnable, "runnable");
        this.f10681c.remove(runnable);
    }

    @Override // com.facebook.imagepipeline.producers.h1
    public synchronized void b(Runnable runnable) {
        try {
            Intrinsics.checkNotNullParameter(runnable, "runnable");
            if (this.f10680b) {
                this.f10681c.add(runnable);
            } else {
                this.f10679a.execute(runnable);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }
}
