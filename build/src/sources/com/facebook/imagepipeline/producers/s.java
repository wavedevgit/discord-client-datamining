package com.facebook.imagepipeline.producers;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class s extends c {

    /* renamed from: b  reason: collision with root package name */
    private final Consumer f11538b;

    public s(Consumer consumer) {
        Intrinsics.checkNotNullParameter(consumer, "consumer");
        this.f11538b = consumer;
    }

    @Override // com.facebook.imagepipeline.producers.c
    protected void f() {
        this.f11538b.a();
    }

    @Override // com.facebook.imagepipeline.producers.c
    protected void g(Throwable t10) {
        Intrinsics.checkNotNullParameter(t10, "t");
        this.f11538b.onFailure(t10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.facebook.imagepipeline.producers.c
    public void i(float f10) {
        this.f11538b.c(f10);
    }

    public final Consumer o() {
        return this.f11538b;
    }
}
