package com.facebook.imagepipeline.producers;

import com.facebook.imagepipeline.request.ImageRequest;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r implements w0 {

    /* renamed from: a  reason: collision with root package name */
    private final w0 f11548a;

    /* renamed from: b  reason: collision with root package name */
    private final ScheduledExecutorService f11549b;

    public r(w0 inputProducer, ScheduledExecutorService scheduledExecutorService) {
        Intrinsics.checkNotNullParameter(inputProducer, "inputProducer");
        this.f11548a = inputProducer;
        this.f11549b = scheduledExecutorService;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void d(r this$0, Consumer consumer, ProducerContext context) {
        Intrinsics.checkNotNullParameter(this$0, "this$0");
        Intrinsics.checkNotNullParameter(consumer, "$consumer");
        Intrinsics.checkNotNullParameter(context, "$context");
        this$0.f11548a.b(consumer, context);
    }

    @Override // com.facebook.imagepipeline.producers.w0
    public void b(final Consumer consumer, final ProducerContext context) {
        Intrinsics.checkNotNullParameter(consumer, "consumer");
        Intrinsics.checkNotNullParameter(context, "context");
        ImageRequest V = context.V();
        ScheduledExecutorService scheduledExecutorService = this.f11549b;
        if (scheduledExecutorService != null) {
            scheduledExecutorService.schedule(new Runnable() { // from class: com.facebook.imagepipeline.producers.q
                @Override // java.lang.Runnable
                public final void run() {
                    r.d(r.this, consumer, context);
                }
            }, V.getDelayMs(), TimeUnit.MILLISECONDS);
        } else {
            this.f11548a.b(consumer, context);
        }
    }
}
