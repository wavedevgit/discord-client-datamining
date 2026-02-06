package lf;

import gf.q;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final List f36193a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f36194b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final List f36195a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private Executor f36196b;

        public a a(ef.f fVar) {
            this.f36195a.add(fVar);
            return this;
        }

        public f b() {
            return new f(this.f36195a, null, this.f36196b, true, null);
        }
    }

    /* synthetic */ f(List list, lf.a aVar, Executor executor, boolean z10, j jVar) {
        q.m(list, "APIs must not be null.");
        q.b(!list.isEmpty(), "APIs must not be empty.");
        if (executor != null) {
            q.m(aVar, "Listener must not be null when listener executor is set.");
        }
        this.f36193a = list;
        this.f36194b = executor;
    }

    public static a d() {
        return new a();
    }

    public List a() {
        return this.f36193a;
    }

    public lf.a b() {
        return null;
    }

    public Executor c() {
        return this.f36194b;
    }
}
