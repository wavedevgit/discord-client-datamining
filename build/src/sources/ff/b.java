package ff;

import ef.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f25051a;

    /* renamed from: b  reason: collision with root package name */
    private final ef.a f25052b;

    /* renamed from: c  reason: collision with root package name */
    private final a.d f25053c;

    /* renamed from: d  reason: collision with root package name */
    private final String f25054d;

    private b(ef.a aVar, a.d dVar, String str) {
        this.f25052b = aVar;
        this.f25053c = dVar;
        this.f25054d = str;
        this.f25051a = gf.o.b(aVar, dVar, str);
    }

    public static b a(ef.a aVar, a.d dVar, String str) {
        return new b(aVar, dVar, str);
    }

    public final String b() {
        return this.f25052b.c();
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
        if (!gf.o.a(this.f25052b, bVar.f25052b) || !gf.o.a(this.f25053c, bVar.f25053c) || !gf.o.a(this.f25054d, bVar.f25054d)) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return this.f25051a;
    }
}
