package gf;

import ff.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f24265a;

    /* renamed from: b  reason: collision with root package name */
    private final ff.a f24266b;

    /* renamed from: c  reason: collision with root package name */
    private final a.d f24267c;

    /* renamed from: d  reason: collision with root package name */
    private final String f24268d;

    private b(ff.a aVar, a.d dVar, String str) {
        this.f24266b = aVar;
        this.f24267c = dVar;
        this.f24268d = str;
        this.f24265a = hf.o.b(aVar, dVar, str);
    }

    public static b a(ff.a aVar, a.d dVar, String str) {
        return new b(aVar, dVar, str);
    }

    public final String b() {
        return this.f24266b.c();
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
        if (!hf.o.a(this.f24266b, bVar.f24266b) || !hf.o.a(this.f24267c, bVar.f24267c) || !hf.o.a(this.f24268d, bVar.f24268d)) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return this.f24265a;
    }
}
