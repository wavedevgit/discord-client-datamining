package ck;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final b f8240a;

    /* renamed from: b  reason: collision with root package name */
    private gk.b f8241b;

    public c(b bVar) {
        if (bVar != null) {
            this.f8240a = bVar;
            return;
        }
        throw new IllegalArgumentException("Binarizer must be non-null.");
    }

    public gk.b a() {
        if (this.f8241b == null) {
            this.f8241b = this.f8240a.b();
        }
        return this.f8241b;
    }

    public gk.a b(int i10, gk.a aVar) {
        return this.f8240a.c(i10, aVar);
    }

    public int c() {
        return this.f8240a.d();
    }

    public int d() {
        return this.f8240a.f();
    }

    public boolean e() {
        return this.f8240a.e().f();
    }

    public c f() {
        return new c(this.f8240a.a(this.f8240a.e().g()));
    }

    public String toString() {
        try {
            return a().toString();
        } catch (k unused) {
            return "";
        }
    }
}
