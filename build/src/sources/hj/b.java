package hj;

import com.google.firebase.messaging.j0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: b  reason: collision with root package name */
    private static final b f27580b = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final hj.a f27581a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private hj.a f27582a = null;

        a() {
        }

        public b a() {
            return new b(this.f27582a);
        }

        public a b(hj.a aVar) {
            this.f27582a = aVar;
            return this;
        }
    }

    b(hj.a aVar) {
        this.f27581a = aVar;
    }

    public static a b() {
        return new a();
    }

    public hj.a a() {
        return this.f27581a;
    }

    public byte[] c() {
        return j0.a(this);
    }
}
