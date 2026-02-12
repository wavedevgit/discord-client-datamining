package kk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final b f31818a;

    /* renamed from: b  reason: collision with root package name */
    private ok.b f31819b;

    public c(b bVar) {
        if (bVar != null) {
            this.f31818a = bVar;
            return;
        }
        throw new IllegalArgumentException("Binarizer must be non-null.");
    }

    public ok.b a() {
        if (this.f31819b == null) {
            this.f31819b = this.f31818a.b();
        }
        return this.f31819b;
    }

    public ok.a b(int i10, ok.a aVar) {
        return this.f31818a.c(i10, aVar);
    }

    public int c() {
        return this.f31818a.d();
    }

    public int d() {
        return this.f31818a.f();
    }

    public boolean e() {
        return this.f31818a.e().f();
    }

    public c f() {
        return new c(this.f31818a.a(this.f31818a.e().g()));
    }

    public String toString() {
        try {
            return a().toString();
        } catch (k unused) {
            return "";
        }
    }
}
