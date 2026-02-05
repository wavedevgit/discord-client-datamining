package fk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final b f23041a;

    /* renamed from: b  reason: collision with root package name */
    private jk.b f23042b;

    public c(b bVar) {
        if (bVar != null) {
            this.f23041a = bVar;
            return;
        }
        throw new IllegalArgumentException("Binarizer must be non-null.");
    }

    public jk.b a() {
        if (this.f23042b == null) {
            this.f23042b = this.f23041a.b();
        }
        return this.f23042b;
    }

    public jk.a b(int i10, jk.a aVar) {
        return this.f23041a.c(i10, aVar);
    }

    public int c() {
        return this.f23041a.d();
    }

    public int d() {
        return this.f23041a.f();
    }

    public boolean e() {
        return this.f23041a.e().f();
    }

    public c f() {
        return new c(this.f23041a.a(this.f23041a.e().g()));
    }

    public String toString() {
        try {
            return a().toString();
        } catch (k unused) {
            return "";
        }
    }
}
