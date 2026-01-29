package cc;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import zb.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a {

    /* renamed from: e  reason: collision with root package name */
    private static final a f8190e = new C0133a().b();

    /* renamed from: a  reason: collision with root package name */
    private final f f8191a;

    /* renamed from: b  reason: collision with root package name */
    private final List f8192b;

    /* renamed from: c  reason: collision with root package name */
    private final b f8193c;

    /* renamed from: d  reason: collision with root package name */
    private final String f8194d;

    /* renamed from: cc.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0133a {

        /* renamed from: a  reason: collision with root package name */
        private f f8195a = null;

        /* renamed from: b  reason: collision with root package name */
        private List f8196b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private b f8197c = null;

        /* renamed from: d  reason: collision with root package name */
        private String f8198d = "";

        C0133a() {
        }

        public C0133a a(d dVar) {
            this.f8196b.add(dVar);
            return this;
        }

        public a b() {
            return new a(this.f8195a, Collections.unmodifiableList(this.f8196b), this.f8197c, this.f8198d);
        }

        public C0133a c(String str) {
            this.f8198d = str;
            return this;
        }

        public C0133a d(b bVar) {
            this.f8197c = bVar;
            return this;
        }

        public C0133a e(f fVar) {
            this.f8195a = fVar;
            return this;
        }
    }

    a(f fVar, List list, b bVar, String str) {
        this.f8191a = fVar;
        this.f8192b = list;
        this.f8193c = bVar;
        this.f8194d = str;
    }

    public static C0133a e() {
        return new C0133a();
    }

    public String a() {
        return this.f8194d;
    }

    public b b() {
        return this.f8193c;
    }

    public List c() {
        return this.f8192b;
    }

    public f d() {
        return this.f8191a;
    }

    public byte[] f() {
        return l.a(this);
    }
}
