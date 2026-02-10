package com.facebook.imagepipeline.producers;

import com.facebook.imagepipeline.listener.RequestListener;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d0 extends c0 implements va.d {

    /* renamed from: c  reason: collision with root package name */
    private final RequestListener f10749c;

    /* renamed from: d  reason: collision with root package name */
    private final va.d f10750d;

    public d0(RequestListener requestListener, va.d dVar) {
        super(requestListener, dVar);
        this.f10749c = requestListener;
        this.f10750d = dVar;
    }

    @Override // va.d
    public void a(ProducerContext producerContext) {
        Intrinsics.checkNotNullParameter(producerContext, "producerContext");
        RequestListener requestListener = this.f10749c;
        if (requestListener != null) {
            requestListener.onRequestStart(producerContext.I(), producerContext.a(), producerContext.getId(), producerContext.Q());
        }
        va.d dVar = this.f10750d;
        if (dVar != null) {
            dVar.a(producerContext);
        }
    }

    @Override // va.d
    public void e(ProducerContext producerContext) {
        Intrinsics.checkNotNullParameter(producerContext, "producerContext");
        RequestListener requestListener = this.f10749c;
        if (requestListener != null) {
            requestListener.onRequestSuccess(producerContext.I(), producerContext.getId(), producerContext.Q());
        }
        va.d dVar = this.f10750d;
        if (dVar != null) {
            dVar.e(producerContext);
        }
    }

    @Override // va.d
    public void g(ProducerContext producerContext) {
        Intrinsics.checkNotNullParameter(producerContext, "producerContext");
        RequestListener requestListener = this.f10749c;
        if (requestListener != null) {
            requestListener.onRequestCancellation(producerContext.getId());
        }
        va.d dVar = this.f10750d;
        if (dVar != null) {
            dVar.g(producerContext);
        }
    }

    @Override // va.d
    public void i(ProducerContext producerContext, Throwable th2) {
        Intrinsics.checkNotNullParameter(producerContext, "producerContext");
        RequestListener requestListener = this.f10749c;
        if (requestListener != null) {
            requestListener.onRequestFailure(producerContext.I(), producerContext.getId(), th2, producerContext.Q());
        }
        va.d dVar = this.f10750d;
        if (dVar != null) {
            dVar.i(producerContext, th2);
        }
    }
}
