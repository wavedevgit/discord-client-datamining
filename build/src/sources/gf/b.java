package gf;

import ff.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f25566a;

    /* renamed from: b  reason: collision with root package name */
    private final ff.a f25567b;

    /* renamed from: c  reason: collision with root package name */
    private final a.d f25568c;

    /* renamed from: d  reason: collision with root package name */
    private final String f25569d;

    private b(ff.a aVar, a.d dVar, String str) {
        this.f25567b = aVar;
        this.f25568c = dVar;
        this.f25569d = str;
        this.f25566a = hf.o.b(aVar, dVar, str);
    }

    public static b a(ff.a aVar, a.d dVar, String str) {
        return new b(aVar, dVar, str);
    }

    public final String b() {
        return this.f25567b.c();
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
        if (!hf.o.a(this.f25567b, bVar.f25567b) || !hf.o.a(this.f25568c, bVar.f25568c) || !hf.o.a(this.f25569d, bVar.f25569d)) {
            return false;
        }
        return true;
    }

    public final int hashCode() {
        return this.f25566a;
    }
}
