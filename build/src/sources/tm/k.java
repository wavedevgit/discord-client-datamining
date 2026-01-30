package tm;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k implements q {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class a implements tm.a {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ tm.a f49728a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ k f49729b;

        public a(k this$0, tm.a baseContext) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            Intrinsics.checkNotNullParameter(baseContext, "baseContext");
            this.f49729b = this$0;
            this.f49728a = baseContext;
        }

        @Override // tm.a
        public void a(String key, Function2 sideEffect) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
            this.f49728a.a(key, sideEffect);
        }

        @Override // tm.a
        public Object b(q child, Object obj, String key, Function1 handler) {
            Intrinsics.checkNotNullParameter(child, "child");
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(handler, "handler");
            return this.f49728a.b(child, obj, key, handler);
        }

        @Override // tm.a
        public h c() {
            return this.f49728a.c();
        }
    }

    public abstract Object d(Object obj, i iVar);

    public abstract Object f(Object obj, Object obj2, a aVar);

    public abstract i g(Object obj);

    @Override // tm.q
    public final k b() {
        return this;
    }

    public Object e(Object obj, Object obj2, Object obj3) {
        return obj3;
    }
}
