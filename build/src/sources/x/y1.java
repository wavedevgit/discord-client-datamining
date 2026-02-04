package x;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class y1 {

    /* renamed from: a  reason: collision with root package name */
    private final z1 f53031a;

    /* renamed from: b  reason: collision with root package name */
    private final List f53032b;

    /* renamed from: c  reason: collision with root package name */
    private final List f53033c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        private static final List f53034d = Arrays.asList(1, 2, 4, 3, 7);

        /* renamed from: a  reason: collision with root package name */
        private z1 f53035a;

        /* renamed from: b  reason: collision with root package name */
        private final List f53036b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private final List f53037c = new ArrayList();

        private void c() {
            Iterator it = this.f53037c.iterator();
            if (!it.hasNext()) {
                return;
            }
            android.support.v4.media.session.b.a(it.next());
            throw null;
        }

        public a a(x1 x1Var) {
            this.f53036b.add(x1Var);
            return this;
        }

        public y1 b() {
            b2.e.b(!this.f53036b.isEmpty(), "UseCase must not be empty.");
            c();
            return new y1(this.f53035a, this.f53036b, this.f53037c);
        }
    }

    y1(z1 z1Var, List list, List list2) {
        this.f53031a = z1Var;
        this.f53032b = list;
        this.f53033c = list2;
    }

    public List a() {
        return this.f53033c;
    }

    public List b() {
        return this.f53032b;
    }

    public z1 c() {
        return this.f53031a;
    }
}
