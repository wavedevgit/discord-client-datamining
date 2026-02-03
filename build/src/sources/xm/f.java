package xm;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import ls.w;
import wm.q;
import wm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements wm.a, wm.h {

    /* renamed from: a  reason: collision with root package name */
    private final a f53430a;

    /* renamed from: b  reason: collision with root package name */
    private final b f53431b;

    /* renamed from: c  reason: collision with root package name */
    private final w f53432c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f53433d;

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
        this.f53430a = renderer;
        this.f53431b = sideEffectRunner;
        this.f53432c = eventActionsChannel;
    }

    private final void e() {
        if (!this.f53433d) {
            return;
        }
        throw new IllegalStateException("RenderContext cannot be used after render method returns.");
    }

    @Override // wm.a
    public void a(String key, Function2 sideEffect) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
        e();
        this.f53431b.a(key, sideEffect);
    }

    @Override // wm.a
    public Object b(q child, Object obj, String key, Function1 handler) {
        Intrinsics.checkNotNullParameter(child, "child");
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(handler, "handler");
        e();
        return this.f53430a.a(child, obj, key, handler);
    }

    public final void f() {
        e();
        this.f53433d = true;
    }

    @Override // wm.h
    /* renamed from: g */
    public void d(r value) {
        Intrinsics.checkNotNullParameter(value, "value");
        if (this.f53433d) {
            this.f53432c.offer(value);
            return;
        }
        throw new UnsupportedOperationException(Intrinsics.stringPlus("Expected sink to not be sent to until after the render pass. Received action: ", value));
    }

    @Override // wm.a
    public wm.h c() {
        return this;
    }
}
