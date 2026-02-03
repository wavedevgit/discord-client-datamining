package x;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class y1 {

    /* renamed from: a  reason: collision with root package name */
    private final z1 f53034a;

    /* renamed from: b  reason: collision with root package name */
    private final List f53035b;

    /* renamed from: c  reason: collision with root package name */
    private final List f53036c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        private static final List f53037d = Arrays.asList(1, 2, 4, 3, 7);

        /* renamed from: a  reason: collision with root package name */
        private z1 f53038a;

        /* renamed from: b  reason: collision with root package name */
        private final List f53039b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private final List f53040c = new ArrayList();

        private void c() {
            Iterator it = this.f53040c.iterator();
            if (!it.hasNext()) {
                return;
            }
            android.support.v4.media.session.b.a(it.next());
            throw null;
        }

        public a a(x1 x1Var) {
            this.f53039b.add(x1Var);
            return this;
        }

        public y1 b() {
            b2.e.b(!this.f53039b.isEmpty(), "UseCase must not be empty.");
            c();
            return new y1(this.f53038a, this.f53039b, this.f53040c);
        }
    }

    y1(z1 z1Var, List list, List list2) {
        this.f53034a = z1Var;
        this.f53035b = list;
        this.f53036c = list2;
    }

    public List a() {
        return this.f53036c;
    }

    public List b() {
        return this.f53035b;
    }

    public z1 c() {
        return this.f53034a;
    }
}
