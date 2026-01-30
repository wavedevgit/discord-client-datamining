package x;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class y1 {

    /* renamed from: a  reason: collision with root package name */
    private final z1 f53105a;

    /* renamed from: b  reason: collision with root package name */
    private final List f53106b;

    /* renamed from: c  reason: collision with root package name */
    private final List f53107c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        private static final List f53108d = Arrays.asList(1, 2, 4, 3, 7);

        /* renamed from: a  reason: collision with root package name */
        private z1 f53109a;

        /* renamed from: b  reason: collision with root package name */
        private final List f53110b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private final List f53111c = new ArrayList();

        private void c() {
            Iterator it = this.f53111c.iterator();
            if (!it.hasNext()) {
                return;
            }
            android.support.v4.media.session.b.a(it.next());
            throw null;
        }

        public a a(x1 x1Var) {
            this.f53110b.add(x1Var);
            return this;
        }

        public y1 b() {
            b2.e.b(!this.f53110b.isEmpty(), "UseCase must not be empty.");
            c();
            return new y1(this.f53109a, this.f53110b, this.f53111c);
        }
    }

    y1(z1 z1Var, List list, List list2) {
        this.f53105a = z1Var;
        this.f53106b = list;
        this.f53107c = list2;
    }

    public List a() {
        return this.f53107c;
    }

    public List b() {
        return this.f53106b;
    }

    public z1 c() {
        return this.f53105a;
    }
}
