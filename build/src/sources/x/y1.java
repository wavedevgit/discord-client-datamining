package x;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class y1 {

    /* renamed from: a  reason: collision with root package name */
    private final z1 f54534a;

    /* renamed from: b  reason: collision with root package name */
    private final List f54535b;

    /* renamed from: c  reason: collision with root package name */
    private final List f54536c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        private static final List f54537d = Arrays.asList(1, 2, 4, 3, 7);

        /* renamed from: a  reason: collision with root package name */
        private z1 f54538a;

        /* renamed from: b  reason: collision with root package name */
        private final List f54539b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private final List f54540c = new ArrayList();

        private void c() {
            Iterator it = this.f54540c.iterator();
            if (!it.hasNext()) {
                return;
            }
            android.support.v4.media.session.b.a(it.next());
            throw null;
        }

        public a a(x1 x1Var) {
            this.f54539b.add(x1Var);
            return this;
        }

        public y1 b() {
            b2.e.b(!this.f54539b.isEmpty(), "UseCase must not be empty.");
            c();
            return new y1(this.f54538a, this.f54539b, this.f54540c);
        }
    }

    y1(z1 z1Var, List list, List list2) {
        this.f54534a = z1Var;
        this.f54535b = list;
        this.f54536c = list2;
    }

    public List a() {
        return this.f54536c;
    }

    public List b() {
        return this.f54535b;
    }

    public z1 c() {
        return this.f54534a;
    }
}
