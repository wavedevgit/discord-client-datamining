package hk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final b f26114a;

    /* renamed from: b  reason: collision with root package name */
    private lk.b f26115b;

    public c(b bVar) {
        if (bVar != null) {
            this.f26114a = bVar;
            return;
        }
        throw new IllegalArgumentException("Binarizer must be non-null.");
    }

    public lk.b a() {
        if (this.f26115b == null) {
            this.f26115b = this.f26114a.b();
        }
        return this.f26115b;
    }

    public lk.a b(int i10, lk.a aVar) {
        return this.f26114a.c(i10, aVar);
    }

    public int c() {
        return this.f26114a.d();
    }

    public int d() {
        return this.f26114a.f();
    }

    public boolean e() {
        return this.f26114a.e().f();
    }

    public c f() {
        return new c(this.f26114a.a(this.f26114a.e().g()));
    }

    public String toString() {
        try {
            return a().toString();
        } catch (k unused) {
            return "";
        }
    }
}
