package cc;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import zb.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: e  reason: collision with root package name */
    private static final a f7033e = new C0117a().b();

    /* renamed from: a  reason: collision with root package name */
    private final f f7034a;

    /* renamed from: b  reason: collision with root package name */
    private final List f7035b;

    /* renamed from: c  reason: collision with root package name */
    private final b f7036c;

    /* renamed from: d  reason: collision with root package name */
    private final String f7037d;

    /* renamed from: cc.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0117a {

        /* renamed from: a  reason: collision with root package name */
        private f f7038a = null;

        /* renamed from: b  reason: collision with root package name */
        private List f7039b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private b f7040c = null;

        /* renamed from: d  reason: collision with root package name */
        private String f7041d = "";

        C0117a() {
        }

        public C0117a a(d dVar) {
            this.f7039b.add(dVar);
            return this;
        }

        public a b() {
            return new a(this.f7038a, Collections.unmodifiableList(this.f7039b), this.f7040c, this.f7041d);
        }

        public C0117a c(String str) {
            this.f7041d = str;
            return this;
        }

        public C0117a d(b bVar) {
            this.f7040c = bVar;
            return this;
        }

        public C0117a e(f fVar) {
            this.f7038a = fVar;
            return this;
        }
    }

    a(f fVar, List list, b bVar, String str) {
        this.f7034a = fVar;
        this.f7035b = list;
        this.f7036c = bVar;
        this.f7037d = str;
    }

    public static C0117a e() {
        return new C0117a();
    }

    public String a() {
        return this.f7037d;
    }

    public b b() {
        return this.f7036c;
    }

    public List c() {
        return this.f7035b;
    }

    public f d() {
        return this.f7034a;
    }

    public byte[] f() {
        return l.a(this);
    }
}
