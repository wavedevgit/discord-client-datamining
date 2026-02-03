package cc;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import zb.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: e  reason: collision with root package name */
    private static final a f8046e = new C0138a().b();

    /* renamed from: a  reason: collision with root package name */
    private final f f8047a;

    /* renamed from: b  reason: collision with root package name */
    private final List f8048b;

    /* renamed from: c  reason: collision with root package name */
    private final b f8049c;

    /* renamed from: d  reason: collision with root package name */
    private final String f8050d;

    /* renamed from: cc.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0138a {

        /* renamed from: a  reason: collision with root package name */
        private f f8051a = null;

        /* renamed from: b  reason: collision with root package name */
        private List f8052b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private b f8053c = null;

        /* renamed from: d  reason: collision with root package name */
        private String f8054d = "";

        C0138a() {
        }

        public C0138a a(d dVar) {
            this.f8052b.add(dVar);
            return this;
        }

        public a b() {
            return new a(this.f8051a, Collections.unmodifiableList(this.f8052b), this.f8053c, this.f8054d);
        }

        public C0138a c(String str) {
            this.f8054d = str;
            return this;
        }

        public C0138a d(b bVar) {
            this.f8053c = bVar;
            return this;
        }

        public C0138a e(f fVar) {
            this.f8051a = fVar;
            return this;
        }
    }

    a(f fVar, List list, b bVar, String str) {
        this.f8047a = fVar;
        this.f8048b = list;
        this.f8049c = bVar;
        this.f8050d = str;
    }

    public static C0138a e() {
        return new C0138a();
    }

    public String a() {
        return this.f8050d;
    }

    public b b() {
        return this.f8049c;
    }

    public List c() {
        return this.f8048b;
    }

    public f d() {
        return this.f8047a;
    }

    public byte[] f() {
        return l.a(this);
    }
}
