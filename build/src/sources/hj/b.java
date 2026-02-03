package hj;

import com.google.firebase.messaging.j0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b {

    /* renamed from: b  reason: collision with root package name */
    private static final b f27769b = new a().a();

    /* renamed from: a  reason: collision with root package name */
    private final hj.a f27770a;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private hj.a f27771a = null;

        a() {
        }

        public b a() {
            return new b(this.f27771a);
        }

        public a b(hj.a aVar) {
            this.f27771a = aVar;
            return this;
        }
    }

    b(hj.a aVar) {
        this.f27770a = aVar;
    }

    public static a b() {
        return new a();
    }

    public hj.a a() {
        return this.f27770a;
    }

    public byte[] c() {
        return j0.a(this);
    }
}
