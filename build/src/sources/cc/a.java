package cc;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import zb.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: e  reason: collision with root package name */
    private static final a f7296e = new C0128a().b();

    /* renamed from: a  reason: collision with root package name */
    private final f f7297a;

    /* renamed from: b  reason: collision with root package name */
    private final List f7298b;

    /* renamed from: c  reason: collision with root package name */
    private final b f7299c;

    /* renamed from: d  reason: collision with root package name */
    private final String f7300d;

    /* renamed from: cc.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0128a {

        /* renamed from: a  reason: collision with root package name */
        private f f7301a = null;

        /* renamed from: b  reason: collision with root package name */
        private List f7302b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private b f7303c = null;

        /* renamed from: d  reason: collision with root package name */
        private String f7304d = "";

        C0128a() {
        }

        public C0128a a(d dVar) {
            this.f7302b.add(dVar);
            return this;
        }

        public a b() {
            return new a(this.f7301a, Collections.unmodifiableList(this.f7302b), this.f7303c, this.f7304d);
        }

        public C0128a c(String str) {
            this.f7304d = str;
            return this;
        }

        public C0128a d(b bVar) {
            this.f7303c = bVar;
            return this;
        }

        public C0128a e(f fVar) {
            this.f7301a = fVar;
            return this;
        }
    }

    a(f fVar, List list, b bVar, String str) {
        this.f7297a = fVar;
        this.f7298b = list;
        this.f7299c = bVar;
        this.f7300d = str;
    }

    public static C0128a e() {
        return new C0128a();
    }

    public String a() {
        return this.f7300d;
    }

    public b b() {
        return this.f7299c;
    }

    public List c() {
        return this.f7298b;
    }

    public f d() {
        return this.f7297a;
    }

    public byte[] f() {
        return l.a(this);
    }
}
