package an;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import os.w;
import zm.q;
import zm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements zm.a, zm.h {

    /* renamed from: a  reason: collision with root package name */
    private final a f794a;

    /* renamed from: b  reason: collision with root package name */
    private final b f795b;

    /* renamed from: c  reason: collision with root package name */
    private final w f796c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f797d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface a {
        Object a(q qVar, Object obj, String str, Function1 function1);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {
        void a(String str, Function2 function2);
    }

    public f(a renderer, b sideEffectRunner, w eventActionsChannel) {
        Intrinsics.checkNotNullParameter(renderer, "renderer");
        Intrinsics.checkNotNullParameter(sideEffectRunner, "sideEffectRunner");
        Intrinsics.checkNotNullParameter(eventActionsChannel, "eventActionsChannel");
        this.f794a = renderer;
        this.f795b = sideEffectRunner;
        this.f796c = eventActionsChannel;
    }

    private final void e() {
        if (!this.f797d) {
            return;
        }
        throw new IllegalStateException("RenderContext cannot be used after render method returns.");
    }

    @Override // zm.a
    public void a(String key, Function2 sideEffect) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
        e();
        this.f795b.a(key, sideEffect);
    }

    @Override // zm.a
    public Object b(q child, Object obj, String key, Function1 handler) {
        Intrinsics.checkNotNullParameter(child, "child");
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(handler, "handler");
        e();
        return this.f794a.a(child, obj, key, handler);
    }

    public final void f() {
        e();
        this.f797d = true;
    }

    @Override // zm.h
    /* renamed from: g */
    public void d(r value) {
        Intrinsics.checkNotNullParameter(value, "value");
        if (this.f797d) {
            this.f796c.offer(value);
            return;
        }
        throw new UnsupportedOperationException(Intrinsics.stringPlus("Expected sink to not be sent to until after the render pass. Received action: ", value));
    }

    @Override // zm.a
    public zm.h c() {
        return this;
    }
}
