package u4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g {

    /* renamed from: a  reason: collision with root package name */
    private final f f51195a = new f();

    public f a() {
        return this.f51195a;
    }

    public void b() {
        if (e()) {
            return;
        }
        throw new IllegalStateException("Cannot cancel a completed task.");
    }

    public void c(Exception exc) {
        if (f(exc)) {
            return;
        }
        throw new IllegalStateException("Cannot set the error on a completed task.");
    }

    public void d(Object obj) {
        if (g(obj)) {
            return;
        }
        throw new IllegalStateException("Cannot set the result of a completed task.");
    }

    public boolean e() {
        return this.f51195a.p();
    }

    public boolean f(Exception exc) {
        return this.f51195a.q(exc);
    }

    public boolean g(Object obj) {
        return this.f51195a.r(obj);
    }
}
