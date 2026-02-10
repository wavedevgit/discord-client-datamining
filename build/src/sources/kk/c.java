package kk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final b f31817a;

    /* renamed from: b  reason: collision with root package name */
    private ok.b f31818b;

    public c(b bVar) {
        if (bVar != null) {
            this.f31817a = bVar;
            return;
        }
        throw new IllegalArgumentException("Binarizer must be non-null.");
    }

    public ok.b a() {
        if (this.f31818b == null) {
            this.f31818b = this.f31817a.b();
        }
        return this.f31818b;
    }

    public ok.a b(int i10, ok.a aVar) {
        return this.f31817a.c(i10, aVar);
    }

    public int c() {
        return this.f31817a.d();
    }

    public int d() {
        return this.f31817a.f();
    }

    public boolean e() {
        return this.f31817a.e().f();
    }

    public c f() {
        return new c(this.f31817a.a(this.f31817a.e().g()));
    }

    public String toString() {
        try {
            return a().toString();
        } catch (k unused) {
            return "";
        }
    }
}
