package com.facebook.imagepipeline.producers;

import com.facebook.imagepipeline.listener.RequestListener;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d0 extends c0 implements ua.d {

    /* renamed from: c  reason: collision with root package name */
    private final RequestListener f10325c;

    /* renamed from: d  reason: collision with root package name */
    private final ua.d f10326d;

    public d0(RequestListener requestListener, ua.d dVar) {
        super(requestListener, dVar);
        this.f10325c = requestListener;
        this.f10326d = dVar;
    }

    @Override // ua.d
    public void a(ProducerContext producerContext) {
        Intrinsics.checkNotNullParameter(producerContext, "producerContext");
        RequestListener requestListener = this.f10325c;
        if (requestListener != null) {
            requestListener.onRequestStart(producerContext.V(), producerContext.a(), producerContext.getId(), producerContext.C0());
        }
        ua.d dVar = this.f10326d;
        if (dVar != null) {
            dVar.a(producerContext);
        }
    }

    @Override // ua.d
    public void e(ProducerContext producerContext) {
        Intrinsics.checkNotNullParameter(producerContext, "producerContext");
        RequestListener requestListener = this.f10325c;
        if (requestListener != null) {
            requestListener.onRequestSuccess(producerContext.V(), producerContext.getId(), producerContext.C0());
        }
        ua.d dVar = this.f10326d;
        if (dVar != null) {
            dVar.e(producerContext);
        }
    }

    @Override // ua.d
    public void g(ProducerContext producerContext) {
        Intrinsics.checkNotNullParameter(producerContext, "producerContext");
        RequestListener requestListener = this.f10325c;
        if (requestListener != null) {
            requestListener.onRequestCancellation(producerContext.getId());
        }
        ua.d dVar = this.f10326d;
        if (dVar != null) {
            dVar.g(producerContext);
        }
    }

    @Override // ua.d
    public void i(ProducerContext producerContext, Throwable th2) {
        Intrinsics.checkNotNullParameter(producerContext, "producerContext");
        RequestListener requestListener = this.f10325c;
        if (requestListener != null) {
            requestListener.onRequestFailure(producerContext.V(), producerContext.getId(), th2, producerContext.C0());
        }
        ua.d dVar = this.f10326d;
        if (dVar != null) {
            dVar.i(producerContext, th2);
        }
    }
}
