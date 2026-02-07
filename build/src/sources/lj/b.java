package lj;

import com.google.firebase.messaging.j0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: b  reason: collision with root package name */
    private static final b f36347b = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final lj.a f36348a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private lj.a f36349a = null;

        a() {
        }

        public b a() {
            return new b(this.f36349a);
        }

        public a b(lj.a aVar) {
            this.f36349a = aVar;
            return this;
        }
    }

    b(lj.a aVar) {
        this.f36348a = aVar;
    }

    public static a b() {
        return new a();
    }

    public lj.a a() {
        return this.f36348a;
    }

    public byte[] c() {
        return j0.a(this);
    }
}
