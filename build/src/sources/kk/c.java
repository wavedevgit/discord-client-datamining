package kk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final b f32386a;

    /* renamed from: b  reason: collision with root package name */
    private ok.b f32387b;

    public c(b bVar) {
        if (bVar != null) {
            this.f32386a = bVar;
            return;
        }
        throw new IllegalArgumentException("Binarizer must be non-null.");
    }

    public ok.b a() {
        if (this.f32387b == null) {
            this.f32387b = this.f32386a.b();
        }
        return this.f32387b;
    }

    public ok.a b(int i10, ok.a aVar) {
        return this.f32386a.c(i10, aVar);
    }

    public int c() {
        return this.f32386a.d();
    }

    public int d() {
        return this.f32386a.f();
    }

    public boolean e() {
        return this.f32386a.e().f();
    }

    public c f() {
        return new c(this.f32386a.a(this.f32386a.e().g()));
    }

    public String toString() {
        try {
            return a().toString();
        } catch (k unused) {
            return "";
        }
    }
}
