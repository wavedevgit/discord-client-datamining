package lf;

import gf.q;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final List f37274a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f37275b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final List f37276a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private Executor f37277b;

        public a a(ef.f fVar) {
            this.f37276a.add(fVar);
            return this;
        }

        public f b() {
            return new f(this.f37276a, null, this.f37277b, true, null);
        }
    }

    /* synthetic */ f(List list, lf.a aVar, Executor executor, boolean z10, j jVar) {
        q.m(list, "APIs must not be null.");
        q.b(!list.isEmpty(), "APIs must not be empty.");
        if (executor != null) {
            q.m(aVar, "Listener must not be null when listener executor is set.");
        }
        this.f37274a = list;
        this.f37275b = executor;
    }

    public static a d() {
        return new a();
    }

    public List a() {
        return this.f37274a;
    }

    public lf.a b() {
        return null;
    }

    public Executor c() {
        return this.f37275b;
    }
}
