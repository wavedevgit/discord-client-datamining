package zm;

import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k implements q {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public final class a implements zm.a {

        /* renamed from: a  reason: collision with root package name */
        private final /* synthetic */ zm.a f56074a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ k f56075b;

        public a(k this$0, zm.a baseContext) {
            Intrinsics.checkNotNullParameter(this$0, "this$0");
            Intrinsics.checkNotNullParameter(baseContext, "baseContext");
            this.f56075b = this$0;
            this.f56074a = baseContext;
        }

        @Override // zm.a
        public void a(String key, Function2 sideEffect) {
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(sideEffect, "sideEffect");
            this.f56074a.a(key, sideEffect);
        }

        @Override // zm.a
        public Object b(q child, Object obj, String key, Function1 handler) {
            Intrinsics.checkNotNullParameter(child, "child");
            Intrinsics.checkNotNullParameter(key, "key");
            Intrinsics.checkNotNullParameter(handler, "handler");
            return this.f56074a.b(child, obj, key, handler);
        }

        @Override // zm.a
        public h c() {
            return this.f56074a.c();
        }
    }

    public abstract Object d(Object obj, i iVar);

    public abstract Object f(Object obj, Object obj2, a aVar);

    public abstract i g(Object obj);

    @Override // zm.q
    public final k b() {
        return this;
    }

    public Object e(Object obj, Object obj2, Object obj3) {
        return obj3;
    }
}
