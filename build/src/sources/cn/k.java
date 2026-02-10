package cn;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k implements q {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class a implements cn.a {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ cn.a f7744a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ k f7745b;

        public a(k this$0, cn.a baseContext) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            Intrinsics.checkNotNullParameter(baseContext, "baseContext");
            this.f7745b = this$0;
            this.f7744a = baseContext;
        }

        @Override // cn.a
        public void a(String key, Function2 sideEffect) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
            this.f7744a.a(key, sideEffect);
        }

        @Override // cn.a
        public Object b(q child, Object obj, String key, Function1 handler) {
            Intrinsics.checkNotNullParameter(child, "child");
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(handler, "handler");
            return this.f7744a.b(child, obj, key, handler);
        }

        @Override // cn.a
        public h c() {
            return this.f7744a.c();
        }
    }

    public abstract Object d(Object obj, i iVar);

    public abstract Object f(Object obj, Object obj2, a aVar);

    public abstract i g(Object obj);

    @Override // cn.q
    public final k b() {
        return this;
    }

    public Object e(Object obj, Object obj2, Object obj3) {
        return obj3;
    }
}
