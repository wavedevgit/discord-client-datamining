package com.facebook.imagepipeline.producers;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.concurrent.Executor;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i1 implements h1 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f10395a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f10396b;

    /* renamed from: c  reason: collision with root package name */
    private final Deque f10397c;

    public i1(Executor executor) {
        Intrinsics.checkNotNullParameter(executor, "executor");
        this.f10395a = executor;
        this.f10397c = new ArrayDeque();
    }

    @Override // com.facebook.imagepipeline.producers.h1
    public synchronized void a(Runnable runnable) {
        Intrinsics.checkNotNullParameter(runnable, "runnable");
        this.f10397c.remove(runnable);
    }

    @Override // com.facebook.imagepipeline.producers.h1
    public synchronized void b(Runnable runnable) {
        try {
            Intrinsics.checkNotNullParameter(runnable, "runnable");
            if (this.f10396b) {
                this.f10397c.add(runnable);
            } else {
                this.f10395a.execute(runnable);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }
}
