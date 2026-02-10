package com.facebook.imagepipeline.producers;

import java.util.ArrayDeque;
import java.util.Deque;
import java.util.concurrent.Executor;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i1 implements h1 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f11396a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f11397b;

    /* renamed from: c  reason: collision with root package name */
    private final Deque f11398c;

    public i1(Executor executor) {
        Intrinsics.checkNotNullParameter(executor, "executor");
        this.f11396a = executor;
        this.f11398c = new ArrayDeque();
    }

    @Override // com.facebook.imagepipeline.producers.h1
    public synchronized void a(Runnable runnable) {
        Intrinsics.checkNotNullParameter(runnable, "runnable");
        this.f11398c.remove(runnable);
    }

    @Override // com.facebook.imagepipeline.producers.h1
    public synchronized void b(Runnable runnable) {
        try {
            Intrinsics.checkNotNullParameter(runnable, "runnable");
            if (this.f11397b) {
                this.f11398c.add(runnable);
            } else {
                this.f11396a.execute(runnable);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }
}
