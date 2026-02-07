package x;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class y1 {

    /* renamed from: a  reason: collision with root package name */
    private final z1 f54442a;

    /* renamed from: b  reason: collision with root package name */
    private final List f54443b;

    /* renamed from: c  reason: collision with root package name */
    private final List f54444c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: d  reason: collision with root package name */
        private static final List f54445d = Arrays.asList(1, 2, 4, 3, 7);

        /* renamed from: a  reason: collision with root package name */
        private z1 f54446a;

        /* renamed from: b  reason: collision with root package name */
        private final List f54447b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private final List f54448c = new ArrayList();

        private void c() {
            Iterator it = this.f54448c.iterator();
            if (!it.hasNext()) {
                return;
            }
            android.support.v4.media.session.b.a(it.next());
            throw null;
        }

        public a a(x1 x1Var) {
            this.f54447b.add(x1Var);
            return this;
        }

        public y1 b() {
            b2.e.b(!this.f54447b.isEmpty(), "UseCase must not be empty.");
            c();
            return new y1(this.f54446a, this.f54447b, this.f54448c);
        }
    }

    y1(z1 z1Var, List list, List list2) {
        this.f54442a = z1Var;
        this.f54443b = list;
        this.f54444c = list2;
    }

    public List a() {
        return this.f54444c;
    }

    public List b() {
        return this.f54443b;
    }

    public z1 c() {
        return this.f54442a;
    }
}
