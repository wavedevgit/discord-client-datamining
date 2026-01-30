package um;

import is.w;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import tm.q;
import tm.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements tm.a, tm.h {

    /* renamed from: a  reason: collision with root package name */
    private final a f50435a;

    /* renamed from: b  reason: collision with root package name */
    private final b f50436b;

    /* renamed from: c  reason: collision with root package name */
    private final w f50437c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f50438d;

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
        this.f50435a = renderer;
        this.f50436b = sideEffectRunner;
        this.f50437c = eventActionsChannel;
    }

    private final void e() {
        if (!this.f50438d) {
            return;
        }
        throw new IllegalStateException("RenderContext cannot be used after render method returns.");
    }

    @Override // tm.a
    public void a(String key, Function2 sideEffect) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
        e();
        this.f50436b.a(key, sideEffect);
    }

    @Override // tm.a
    public Object b(q child, Object obj, String key, Function1 handler) {
        Intrinsics.checkNotNullParameter(child, "child");
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(handler, "handler");
        e();
        return this.f50435a.a(child, obj, key, handler);
    }

    public final void f() {
        e();
        this.f50438d = true;
    }

    @Override // tm.h
    /* renamed from: g */
    public void d(r value) {
        Intrinsics.checkNotNullParameter(value, "value");
        if (this.f50438d) {
            this.f50437c.offer(value);
            return;
        }
        throw new UnsupportedOperationException(Intrinsics.stringPlus("Expected sink to not be sent to until after the render pass. Received action: ", value));
    }

    @Override // tm.a
    public tm.h c() {
        return this;
    }
}
