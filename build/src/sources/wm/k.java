package wm;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k implements q {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class a implements wm.a {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ wm.a f52545a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ k f52546b;

        public a(k this$0, wm.a baseContext) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            Intrinsics.checkNotNullParameter(baseContext, "baseContext");
            this.f52546b = this$0;
            this.f52545a = baseContext;
        }

        @Override // wm.a
        public void a(String key, Function2 sideEffect) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
            this.f52545a.a(key, sideEffect);
        }

        @Override // wm.a
        public Object b(q child, Object obj, String key, Function1 handler) {
            Intrinsics.checkNotNullParameter(child, "child");
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(handler, "handler");
            return this.f52545a.b(child, obj, key, handler);
        }

        @Override // wm.a
        public h c() {
            return this.f52545a.c();
        }
    }

    public abstract Object d(Object obj, i iVar);

    public abstract Object f(Object obj, Object obj2, a aVar);

    public abstract i g(Object obj);

    @Override // wm.q
    public final k b() {
        return this;
    }

    public Object e(Object obj, Object obj2, Object obj3) {
        return obj3;
    }
}
