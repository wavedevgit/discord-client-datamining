package dc;

import ac.l;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: e  reason: collision with root package name */
    private static final a f20575e = new C0305a().b();

    /* renamed from: a  reason: collision with root package name */
    private final f f20576a;

    /* renamed from: b  reason: collision with root package name */
    private final List f20577b;

    /* renamed from: c  reason: collision with root package name */
    private final b f20578c;

    /* renamed from: d  reason: collision with root package name */
    private final String f20579d;

    /* renamed from: dc.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0305a {

        /* renamed from: a  reason: collision with root package name */
        private f f20580a = null;

        /* renamed from: b  reason: collision with root package name */
        private List f20581b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private b f20582c = null;

        /* renamed from: d  reason: collision with root package name */
        private String f20583d = "";

        C0305a() {
        }

        public C0305a a(d dVar) {
            this.f20581b.add(dVar);
            return this;
        }

        public a b() {
            return new a(this.f20580a, Collections.unmodifiableList(this.f20581b), this.f20582c, this.f20583d);
        }

        public C0305a c(String str) {
            this.f20583d = str;
            return this;
        }

        public C0305a d(b bVar) {
            this.f20582c = bVar;
            return this;
        }

        public C0305a e(f fVar) {
            this.f20580a = fVar;
            return this;
        }
    }

    a(f fVar, List list, b bVar, String str) {
        this.f20576a = fVar;
        this.f20577b = list;
        this.f20578c = bVar;
        this.f20579d = str;
    }

    public static C0305a e() {
        return new C0305a();
    }

    public String a() {
        return this.f20579d;
    }

    public b b() {
        return this.f20578c;
    }

    public List c() {
        return this.f20577b;
    }

    public f d() {
        return this.f20576a;
    }

    public byte[] f() {
        return l.a(this);
    }
}
