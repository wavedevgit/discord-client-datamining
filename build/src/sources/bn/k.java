package bn;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k implements q {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class a implements bn.a {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ bn.a f6903a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ k f6904b;

        public a(k this$0, bn.a baseContext) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            Intrinsics.checkNotNullParameter(baseContext, "baseContext");
            this.f6904b = this$0;
            this.f6903a = baseContext;
        }

        @Override // bn.a
        public void a(String key, Function2 sideEffect) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
            this.f6903a.a(key, sideEffect);
        }

        @Override // bn.a
        public Object b(q child, Object obj, String key, Function1 handler) {
            Intrinsics.checkNotNullParameter(child, "child");
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(handler, "handler");
            return this.f6903a.b(child, obj, key, handler);
        }

        @Override // bn.a
        public h c() {
            return this.f6903a.c();
        }
    }

    public abstract Object d(Object obj, i iVar);

    public abstract Object f(Object obj, Object obj2, a aVar);

    public abstract i g(Object obj);

    @Override // bn.q
    public final k b() {
        return this;
    }

    public Object e(Object obj, Object obj2, Object obj3) {
        return obj3;
    }
}
