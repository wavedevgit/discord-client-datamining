package ck;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final b f7227a;

    /* renamed from: b  reason: collision with root package name */
    private gk.b f7228b;

    public c(b bVar) {
        if (bVar != null) {
            this.f7227a = bVar;
            return;
        }
        throw new IllegalArgumentException("Binarizer must be non-null.");
    }

    public gk.b a() {
        if (this.f7228b == null) {
            this.f7228b = this.f7227a.b();
        }
        return this.f7228b;
    }

    public gk.a b(int i10, gk.a aVar) {
        return this.f7227a.c(i10, aVar);
    }

    public int c() {
        return this.f7227a.d();
    }

    public int d() {
        return this.f7227a.f();
    }

    public boolean e() {
        return this.f7227a.e().f();
    }

    public c f() {
        return new c(this.f7227a.a(this.f7227a.e().g()));
    }

    public String toString() {
        try {
            return a().toString();
        } catch (k unused) {
            return "";
        }
    }
}
