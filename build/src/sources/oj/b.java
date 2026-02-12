package oj;

import com.google.firebase.messaging.j0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: b  reason: collision with root package name */
    private static final b f40151b = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final oj.a f40152a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private oj.a f40153a = null;

        a() {
        }

        public b a() {
            return new b(this.f40153a);
        }

        public a b(oj.a aVar) {
            this.f40153a = aVar;
            return this;
        }
    }

    b(oj.a aVar) {
        this.f40152a = aVar;
    }

    public static a b() {
        return new a();
    }

    public oj.a a() {
        return this.f40152a;
    }

    public byte[] c() {
        return j0.a(this);
    }
}
