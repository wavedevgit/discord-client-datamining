package mf;

import hf.q;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final List f36446a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f36447b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final List f36448a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private Executor f36449b;

        public a a(ff.f fVar) {
            this.f36448a.add(fVar);
            return this;
        }

        public f b() {
            return new f(this.f36448a, null, this.f36449b, true, null);
        }
    }

    /* synthetic */ f(List list, mf.a aVar, Executor executor, boolean z10, j jVar) {
        q.m(list, "APIs must not be null.");
        q.b(!list.isEmpty(), "APIs must not be empty.");
        if (executor != null) {
            q.m(aVar, "Listener must not be null when listener executor is set.");
        }
        this.f36446a = list;
        this.f36447b = executor;
    }

    public static a d() {
        return new a();
    }

    public List a() {
        return this.f36446a;
    }

    public mf.a b() {
        return null;
    }

    public Executor c() {
        return this.f36447b;
    }
}
