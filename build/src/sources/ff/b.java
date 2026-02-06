package ff;

import ef.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f23180a;

    /* renamed from: b  reason: collision with root package name */
    private final ef.a f23181b;

    /* renamed from: c  reason: collision with root package name */
    private final a.d f23182c;

    /* renamed from: d  reason: collision with root package name */
    private final String f23183d;

    private b(ef.a aVar, a.d dVar, String str) {
        this.f23181b = aVar;
        this.f23182c = dVar;
        this.f23183d = str;
        this.f23180a = gf.o.b(aVar, dVar, str);
    }

    public static b a(ef.a aVar, a.d dVar, String str) {
        return new b(aVar, dVar, str);
    }

    public final String b() {
        return this.f23181b.c();
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
        if (!gf.o.a(this.f23181b, bVar.f23181b) || !gf.o.a(this.f23182c, bVar.f23182c) || !gf.o.a(this.f23183d, bVar.f23183d)) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return this.f23180a;
    }
}
