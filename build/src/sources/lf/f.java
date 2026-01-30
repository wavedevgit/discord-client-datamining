package lf;

import gf.q;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final List f37290a;

    /* renamed from: b  reason: collision with root package name */
    private final Executor f37291b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private final List f37292a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private Executor f37293b;

        public a a(ef.f fVar) {
            this.f37292a.add(fVar);
            return this;
        }

        public f b() {
            return new f(this.f37292a, null, this.f37293b, true, null);
        }
    }

    /* synthetic */ f(List list, lf.a aVar, Executor executor, boolean z10, j jVar) {
        q.m(list, "APIs must not be null.");
        q.b(!list.isEmpty(), "APIs must not be empty.");
        if (executor != null) {
            q.m(aVar, "Listener must not be null when listener executor is set.");
        }
        this.f37290a = list;
        this.f37291b = executor;
    }

    public static a d() {
        return new a();
    }

    public List a() {
        return this.f37290a;
    }

    public lf.a b() {
        return null;
    }

    public Executor c() {
        return this.f37291b;
    }
}
