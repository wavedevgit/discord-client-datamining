package com.facebook.imagepipeline.producers;

import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class c0 implements y0 {

    /* renamed from: a  reason: collision with root package name */
    private final z0 f10591a;

    /* renamed from: b  reason: collision with root package name */
    private final y0 f10592b;

    public c0(z0 z0Var, y0 y0Var) {
        this.f10591a = z0Var;
        this.f10592b = y0Var;
    }

    @Override // com.facebook.imagepipeline.producers.y0
    public void b(ProducerContext context, String str, boolean z10) {
        Intrinsics.checkNotNullParameter(context, "context");
        z0 z0Var = this.f10591a;
        if (z0Var != null) {
            z0Var.onUltimateProducerReached(context.getId(), str, z10);
        }
        y0 y0Var = this.f10592b;
        if (y0Var != null) {
            y0Var.b(context, str, z10);
        }
    }

    @Override // com.facebook.imagepipeline.producers.y0
    public void c(ProducerContext context, String str, Map map) {
        Intrinsics.checkNotNullParameter(context, "context");
        z0 z0Var = this.f10591a;
        if (z0Var != null) {
            z0Var.onProducerFinishWithCancellation(context.getId(), str, map);
        }
        y0 y0Var = this.f10592b;
        if (y0Var != null) {
            y0Var.c(context, str, map);
        }
    }

    @Override // com.facebook.imagepipeline.producers.y0
    public void d(ProducerContext context, String str) {
        Intrinsics.checkNotNullParameter(context, "context");
        z0 z0Var = this.f10591a;
        if (z0Var != null) {
            z0Var.onProducerStart(context.getId(), str);
        }
        y0 y0Var = this.f10592b;
        if (y0Var != null) {
            y0Var.d(context, str);
        }
    }

    @Override // com.facebook.imagepipeline.producers.y0
    public boolean f(ProducerContext context, String str) {
        Boolean bool;
        Intrinsics.checkNotNullParameter(context, "context");
        z0 z0Var = this.f10591a;
        Boolean bool2 = null;
        if (z0Var != null) {
            bool = Boolean.valueOf(z0Var.requiresExtraMap(context.getId()));
        } else {
            bool = null;
        }
        if (!Intrinsics.areEqual(bool, Boolean.TRUE)) {
            y0 y0Var = this.f10592b;
            if (y0Var != null) {
                bool2 = Boolean.valueOf(y0Var.f(context, str));
            }
            bool = bool2;
        }
        if (bool != null) {
            return bool.booleanValue();
        }
        return false;
    }

    @Override // com.facebook.imagepipeline.producers.y0
    public void h(ProducerContext context, String str, String str2) {
        Intrinsics.checkNotNullParameter(context, "context");
        z0 z0Var = this.f10591a;
        if (z0Var != null) {
            z0Var.onProducerEvent(context.getId(), str, str2);
        }
        y0 y0Var = this.f10592b;
        if (y0Var != null) {
            y0Var.h(context, str, str2);
        }
    }

    @Override // com.facebook.imagepipeline.producers.y0
    public void j(ProducerContext context, String str, Map map) {
        Intrinsics.checkNotNullParameter(context, "context");
        z0 z0Var = this.f10591a;
        if (z0Var != null) {
            z0Var.onProducerFinishWithSuccess(context.getId(), str, map);
        }
        y0 y0Var = this.f10592b;
        if (y0Var != null) {
            y0Var.j(context, str, map);
        }
    }

    @Override // com.facebook.imagepipeline.producers.y0
    public void k(ProducerContext context, String str, Throwable th2, Map map) {
        Intrinsics.checkNotNullParameter(context, "context");
        z0 z0Var = this.f10591a;
        if (z0Var != null) {
            z0Var.onProducerFinishWithFailure(context.getId(), str, th2, map);
        }
        y0 y0Var = this.f10592b;
        if (y0Var != null) {
            y0Var.k(context, str, th2, map);
        }
    }
}
