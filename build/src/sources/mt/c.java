package mt;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements s {

    /* renamed from: a  reason: collision with root package name */
    private final o f36609a;

    /* renamed from: b  reason: collision with root package name */
    private final List f36610b;

    public c(o mainFormat, List formats) {
        Intrinsics.checkNotNullParameter(mainFormat, "mainFormat");
        Intrinsics.checkNotNullParameter(formats, "formats");
        this.f36609a = mainFormat;
        this.f36610b = formats;
    }

    @Override // mt.o
    public nt.e a() {
        return this.f36609a.a();
    }

    @Override // mt.o
    public ot.q b() {
        List l10 = CollectionsKt.l();
        List c10 = CollectionsKt.c();
        c10.add(this.f36609a.b());
        for (o oVar : this.f36610b) {
            c10.add(oVar.b());
        }
        return new ot.q(l10, CollectionsKt.a(c10));
    }

    public final List c() {
        return this.f36610b;
    }

    public final o d() {
        return this.f36609a;
    }

    public boolean equals(Object obj) {
        if (obj instanceof c) {
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f36609a, cVar.f36609a) && Intrinsics.areEqual(this.f36610b, cVar.f36610b)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f36609a.hashCode() * 31) + this.f36610b.hashCode();
    }

    public String toString() {
        return "AlternativesParsing(" + this.f36610b + ')';
    }
}
