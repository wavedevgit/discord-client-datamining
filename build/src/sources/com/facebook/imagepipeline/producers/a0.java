package com.facebook.imagepipeline.producers;

import java.util.concurrent.Executor;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a0 implements h1 {

    /* renamed from: a  reason: collision with root package name */
    private final Executor f10287a;

    public a0(Executor executor) {
        if (executor != null) {
            this.f10287a = executor;
            return;
        }
        throw new IllegalStateException("Required value was null.");
    }

    @Override // com.facebook.imagepipeline.producers.h1
    public void a(Runnable runnable) {
        Intrinsics.checkNotNullParameter(runnable, "runnable");
    }

    @Override // com.facebook.imagepipeline.producers.h1
    public void b(Runnable runnable) {
        Intrinsics.checkNotNullParameter(runnable, "runnable");
        this.f10287a.execute(runnable);
    }
}
