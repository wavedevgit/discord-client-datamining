package cc;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import zb.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: e  reason: collision with root package name */
    private static final a f7451e = new C0136a().b();

    /* renamed from: a  reason: collision with root package name */
    private final f f7452a;

    /* renamed from: b  reason: collision with root package name */
    private final List f7453b;

    /* renamed from: c  reason: collision with root package name */
    private final b f7454c;

    /* renamed from: d  reason: collision with root package name */
    private final String f7455d;

    /* renamed from: cc.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0136a {

        /* renamed from: a  reason: collision with root package name */
        private f f7456a = null;

        /* renamed from: b  reason: collision with root package name */
        private List f7457b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private b f7458c = null;

        /* renamed from: d  reason: collision with root package name */
        private String f7459d = "";

        C0136a() {
        }

        public C0136a a(d dVar) {
            this.f7457b.add(dVar);
            return this;
        }

        public a b() {
            return new a(this.f7456a, Collections.unmodifiableList(this.f7457b), this.f7458c, this.f7459d);
        }

        public C0136a c(String str) {
            this.f7459d = str;
            return this;
        }

        public C0136a d(b bVar) {
            this.f7458c = bVar;
            return this;
        }

        public C0136a e(f fVar) {
            this.f7456a = fVar;
            return this;
        }
    }

    a(f fVar, List list, b bVar, String str) {
        this.f7452a = fVar;
        this.f7453b = list;
        this.f7454c = bVar;
        this.f7455d = str;
    }

    public static C0136a e() {
        return new C0136a();
    }

    public String a() {
        return this.f7455d;
    }

    public b b() {
        return this.f7454c;
    }

    public List c() {
        return this.f7453b;
    }

    public f d() {
        return this.f7452a;
    }

    public byte[] f() {
        return l.a(this);
    }
}
