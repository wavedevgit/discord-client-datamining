package lf;

import gf.q;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final List f36873a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f36874b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final List f36875a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private Executor f36876b;

        public a a(ef.f fVar) {
            this.f36875a.add(fVar);
            return this;
        }

        public f b() {
            return new f(this.f36875a, null, this.f36876b, true, null);
        }
    }

    /* synthetic */ f(List list, lf.a aVar, Executor executor, boolean z10, j jVar) {
        q.m(list, "APIs must not be null.");
        q.b(!list.isEmpty(), "APIs must not be empty.");
        if (executor != null) {
            q.m(aVar, "Listener must not be null when listener executor is set.");
        }
        this.f36873a = list;
        this.f36874b = executor;
    }

    public static a d() {
        return new a();
    }

    public List a() {
        return this.f36873a;
    }

    public lf.a b() {
        return null;
    }

    public Executor c() {
        return this.f36874b;
    }
}
