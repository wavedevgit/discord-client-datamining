package ff;

import ef.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f22879a;

    /* renamed from: b  reason: collision with root package name */
    private final ef.a f22880b;

    /* renamed from: c  reason: collision with root package name */
    private final a.d f22881c;

    /* renamed from: d  reason: collision with root package name */
    private final String f22882d;

    private b(ef.a aVar, a.d dVar, String str) {
        this.f22880b = aVar;
        this.f22881c = dVar;
        this.f22882d = str;
        this.f22879a = gf.o.b(aVar, dVar, str);
    }

    public static b a(ef.a aVar, a.d dVar, String str) {
        return new b(aVar, dVar, str);
    }

    public final String b() {
        return this.f22880b.c();
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
        if (!gf.o.a(this.f22880b, bVar.f22880b) || !gf.o.a(this.f22881c, bVar.f22881c) || !gf.o.a(this.f22882d, bVar.f22882d)) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return this.f22879a;
    }
}
