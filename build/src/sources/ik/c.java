package ik;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final b f26929a;

    /* renamed from: b  reason: collision with root package name */
    private mk.b f26930b;

    public c(b bVar) {
        if (bVar != null) {
            this.f26929a = bVar;
            return;
        }
        throw new IllegalArgumentException("Binarizer must be non-null.");
    }

    public mk.b a() {
        if (this.f26930b == null) {
            this.f26930b = this.f26929a.b();
        }
        return this.f26930b;
    }

    public mk.a b(int i10, mk.a aVar) {
        return this.f26929a.c(i10, aVar);
    }

    public int c() {
        return this.f26929a.d();
    }

    public int d() {
        return this.f26929a.f();
    }

    public boolean e() {
        return this.f26929a.e().f();
    }

    public c f() {
        return new c(this.f26929a.a(this.f26929a.e().g()));
    }

    public String toString() {
        try {
            return a().toString();
        } catch (k unused) {
            return "";
        }
    }
}
