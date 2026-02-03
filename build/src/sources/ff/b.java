package ff;

import ef.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f23854a;

    /* renamed from: b  reason: collision with root package name */
    private final ef.a f23855b;

    /* renamed from: c  reason: collision with root package name */
    private final a.d f23856c;

    /* renamed from: d  reason: collision with root package name */
    private final String f23857d;

    private b(ef.a aVar, a.d dVar, String str) {
        this.f23855b = aVar;
        this.f23856c = dVar;
        this.f23857d = str;
        this.f23854a = gf.o.b(aVar, dVar, str);
    }

    public static b a(ef.a aVar, a.d dVar, String str) {
        return new b(aVar, dVar, str);
    }

    public final String b() {
        return this.f23855b.c();
    }

    public final boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (!gf.o.a(this.f23855b, bVar.f23855b) || !gf.o.a(this.f23856c, bVar.f23856c) || !gf.o.a(this.f23857d, bVar.f23857d)) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return this.f23854a;
    }
}
