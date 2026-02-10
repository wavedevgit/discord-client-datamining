package mj;

import com.google.firebase.messaging.j0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: b  reason: collision with root package name */
    private static final b f37177b = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final mj.a f37178a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private mj.a f37179a = null;

        a() {
        }

        public b a() {
            return new b(this.f37179a);
        }

        public a b(mj.a aVar) {
            this.f37179a = aVar;
            return this;
        }
    }

    b(mj.a aVar) {
        this.f37178a = aVar;
    }

    public static a b() {
        return new a();
    }

    public mj.a a() {
        return this.f37178a;
    }

    public byte[] c() {
        return j0.a(this);
    }
}
