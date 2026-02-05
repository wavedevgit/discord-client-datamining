package a0;

import java.util.Collection;
import x.x1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public interface e0 extends x.i, x1.b {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum a {
        RELEASED(false),
        RELEASING(true),
        CLOSED(false),
        PENDING_OPEN(false),
        CLOSING(true),
        OPENING(true),
        OPEN(true),
        CONFIGURED(true);
        

        /* renamed from: d  reason: collision with root package name */
        private final boolean f39d;

        a(boolean z10) {
            this.f39d = z10;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean d() {
            return this.f39d;
        }
    }

    @Override // x.i
    default x.j a() {
        return f();
    }

    @Override // x.i
    default x.o b() {
        return l();
    }

    u1 c();

    a0 f();

    default w g() {
        return z.a();
    }

    void j(Collection collection);

    void k(Collection collection);

    d0 l();

    default boolean m() {
        if (b().c() == 0) {
            return true;
        }
        return false;
    }

    default boolean p() {
        return true;
    }

    default void i(boolean z10) {
    }

    default void n(w wVar) {
    }

    default void q(boolean z10) {
    }
}
