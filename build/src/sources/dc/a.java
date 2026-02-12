package dc;

import ac.l;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: e  reason: collision with root package name */
    private static final a f21523e = new C0289a().b();

    /* renamed from: a  reason: collision with root package name */
    private final f f21524a;

    /* renamed from: b  reason: collision with root package name */
    private final List f21525b;

    /* renamed from: c  reason: collision with root package name */
    private final b f21526c;

    /* renamed from: d  reason: collision with root package name */
    private final String f21527d;

    /* renamed from: dc.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0289a {

        /* renamed from: a  reason: collision with root package name */
        private f f21528a = null;

        /* renamed from: b  reason: collision with root package name */
        private List f21529b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private b f21530c = null;

        /* renamed from: d  reason: collision with root package name */
        private String f21531d = "";

        C0289a() {
        }

        public C0289a a(d dVar) {
            this.f21529b.add(dVar);
            return this;
        }

        public a b() {
            return new a(this.f21528a, Collections.unmodifiableList(this.f21529b), this.f21530c, this.f21531d);
        }

        public C0289a c(String str) {
            this.f21531d = str;
            return this;
        }

        public C0289a d(b bVar) {
            this.f21530c = bVar;
            return this;
        }

        public C0289a e(f fVar) {
            this.f21528a = fVar;
            return this;
        }
    }

    a(f fVar, List list, b bVar, String str) {
        this.f21524a = fVar;
        this.f21525b = list;
        this.f21526c = bVar;
        this.f21527d = str;
    }

    public static C0289a e() {
        return new C0289a();
    }

    public String a() {
        return this.f21527d;
    }

    public b b() {
        return this.f21526c;
    }

    public List c() {
        return this.f21525b;
    }

    public f d() {
        return this.f21524a;
    }

    public byte[] f() {
        return l.a(this);
    }
}
