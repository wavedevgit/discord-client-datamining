package ev;

import av.h;
import av.m;
import av.n;
import dv.r;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f24058a;

    /* renamed from: b  reason: collision with root package name */
    private final List f24059b;

    /* renamed from: c  reason: collision with root package name */
    private final c f24060c;

    /* renamed from: d  reason: collision with root package name */
    private final List f24061d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private final List f24062a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private final List f24063b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private final List f24064c = new ArrayList();

        /* renamed from: d  reason: collision with root package name */
        private Set f24065d = h.q();

        /* renamed from: e  reason: collision with root package name */
        private c f24066e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements c {
            a() {
            }

            @Override // ev.c
            public ev.a a(ev.b bVar) {
                return new n(bVar);
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public c g() {
            c cVar = this.f24066e;
            if (cVar != null) {
                return cVar;
            }
            return new a();
        }

        public d f() {
            return new d(this);
        }
    }

    private h a() {
        return new h(this.f24058a, this.f24060c, this.f24059b);
    }

    private r c(r rVar) {
        Iterator it = this.f24061d.iterator();
        if (!it.hasNext()) {
            return rVar;
        }
        android.support.v4.media.session.b.a(it.next());
        throw null;
    }

    public r b(String str) {
        if (str != null) {
            return c(a().s(str));
        }
        throw new NullPointerException("input must not be null");
    }

    private d(b bVar) {
        this.f24058a = h.j(bVar.f24062a, bVar.f24065d);
        c g10 = bVar.g();
        this.f24060c = g10;
        this.f24061d = bVar.f24064c;
        List list = bVar.f24063b;
        this.f24059b = list;
        g10.a(new m(list, Collections.EMPTY_MAP));
    }
}
