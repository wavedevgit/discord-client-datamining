package ff;

import ef.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f24262a;

    /* renamed from: b  reason: collision with root package name */
    private final ef.a f24263b;

    /* renamed from: c  reason: collision with root package name */
    private final a.d f24264c;

    /* renamed from: d  reason: collision with root package name */
    private final String f24265d;

    private b(ef.a aVar, a.d dVar, String str) {
        this.f24263b = aVar;
        this.f24264c = dVar;
        this.f24265d = str;
        this.f24262a = gf.o.b(aVar, dVar, str);
    }

    public static b a(ef.a aVar, a.d dVar, String str) {
        return new b(aVar, dVar, str);
    }

    public final String b() {
        return this.f24263b.c();
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
        if (!gf.o.a(this.f24263b, bVar.f24263b) || !gf.o.a(this.f24264c, bVar.f24264c) || !gf.o.a(this.f24265d, bVar.f24265d)) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return this.f24262a;
    }
}
