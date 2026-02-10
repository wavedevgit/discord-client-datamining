package x;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class y1 {

    /* renamed from: a  reason: collision with root package name */
    private final z1 f54266a;

    /* renamed from: b  reason: collision with root package name */
    private final List f54267b;

    /* renamed from: c  reason: collision with root package name */
    private final List f54268c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        private static final List f54269d = Arrays.asList(1, 2, 4, 3, 7);

        /* renamed from: a  reason: collision with root package name */
        private z1 f54270a;

        /* renamed from: b  reason: collision with root package name */
        private final List f54271b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private final List f54272c = new ArrayList();

        private void c() {
            Iterator it = this.f54272c.iterator();
            if (!it.hasNext()) {
                return;
            }
            android.support.v4.media.session.b.a(it.next());
            throw null;
        }

        public a a(x1 x1Var) {
            this.f54271b.add(x1Var);
            return this;
        }

        public y1 b() {
            b2.e.b(!this.f54271b.isEmpty(), "UseCase must not be empty.");
            c();
            return new y1(this.f54270a, this.f54271b, this.f54272c);
        }
    }

    y1(z1 z1Var, List list, List list2) {
        this.f54266a = z1Var;
        this.f54267b = list;
        this.f54268c = list2;
    }

    public List a() {
        return this.f54268c;
    }

    public List b() {
        return this.f54267b;
    }

    public z1 c() {
        return this.f54266a;
    }
}
