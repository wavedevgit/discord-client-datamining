package dn;

import cn.q;
import cn.r;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import rs.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class f implements cn.a, cn.h {

    /* renamed from: a  reason: collision with root package name */
    private final a f20869a;

    /* renamed from: b  reason: collision with root package name */
    private final b f20870b;

    /* renamed from: c  reason: collision with root package name */
    private final w f20871c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f20872d;

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
        this.f20869a = renderer;
        this.f20870b = sideEffectRunner;
        this.f20871c = eventActionsChannel;
    }

    private final void e() {
        if (!this.f20872d) {
            return;
        }
        throw new IllegalStateException("RenderContext cannot be used after render method returns.");
    }

    @Override // cn.a
    public void a(String key, Function2 sideEffect) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
        e();
        this.f20870b.a(key, sideEffect);
    }

    @Override // cn.a
    public Object b(q child, Object obj, String key, Function1 handler) {
        Intrinsics.checkNotNullParameter(child, "child");
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(handler, "handler");
        e();
        return this.f20869a.a(child, obj, key, handler);
    }

    public final void f() {
        e();
        this.f20872d = true;
    }

    @Override // cn.h
    /* renamed from: g */
    public void d(r value) {
        Intrinsics.checkNotNullParameter(value, "value");
        if (this.f20872d) {
            this.f20871c.offer(value);
            return;
        }
        throw new UnsupportedOperationException(Intrinsics.stringPlus("Expected sink to not be sent to until after the render pass. Received action: ", value));
    }

    @Override // cn.a
    public cn.h c() {
        return this;
    }
}
