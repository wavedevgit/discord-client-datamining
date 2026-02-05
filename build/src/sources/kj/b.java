package kj;

import com.google.firebase.messaging.j0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: b  reason: collision with root package name */
    private static final b f31906b = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final kj.a f31907a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private kj.a f31908a = null;

        a() {
        }

        public b a() {
            return new b(this.f31908a);
        }

        public a b(kj.a aVar) {
            this.f31908a = aVar;
            return this;
        }
    }

    b(kj.a aVar) {
        this.f31907a = aVar;
    }

    public static a b() {
        return new a();
    }

    public kj.a a() {
        return this.f31907a;
    }

    public byte[] c() {
        return j0.a(this);
    }
}
