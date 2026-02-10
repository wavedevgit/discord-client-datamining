package dc;

import ac.l;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: e  reason: collision with root package name */
    private static final a f21522e = new C0289a().b();

    /* renamed from: a  reason: collision with root package name */
    private final f f21523a;

    /* renamed from: b  reason: collision with root package name */
    private final List f21524b;

    /* renamed from: c  reason: collision with root package name */
    private final b f21525c;

    /* renamed from: d  reason: collision with root package name */
    private final String f21526d;

    /* renamed from: dc.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0289a {

        /* renamed from: a  reason: collision with root package name */
        private f f21527a = null;

        /* renamed from: b  reason: collision with root package name */
        private List f21528b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private b f21529c = null;

        /* renamed from: d  reason: collision with root package name */
        private String f21530d = "";

        C0289a() {
        }

        public C0289a a(d dVar) {
            this.f21528b.add(dVar);
            return this;
        }

        public a b() {
            return new a(this.f21527a, Collections.unmodifiableList(this.f21528b), this.f21529c, this.f21530d);
        }

        public C0289a c(String str) {
            this.f21530d = str;
            return this;
        }

        public C0289a d(b bVar) {
            this.f21529c = bVar;
            return this;
        }

        public C0289a e(f fVar) {
            this.f21527a = fVar;
            return this;
        }
    }

    a(f fVar, List list, b bVar, String str) {
        this.f21523a = fVar;
        this.f21524b = list;
        this.f21525c = bVar;
        this.f21526d = str;
    }

    public static C0289a e() {
        return new C0289a();
    }

    public String a() {
        return this.f21526d;
    }

    public b b() {
        return this.f21525c;
    }

    public List c() {
        return this.f21524b;
    }

    public f d() {
        return this.f21523a;
    }

    public byte[] f() {
        return l.a(this);
    }
}
