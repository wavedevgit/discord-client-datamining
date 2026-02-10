package mt;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements s {

    /* renamed from: a  reason: collision with root package name */
    private final o f36608a;

    /* renamed from: b  reason: collision with root package name */
    private final List f36609b;

    public c(o mainFormat, List formats) {
        Intrinsics.checkNotNullParameter(mainFormat, "mainFormat");
        Intrinsics.checkNotNullParameter(formats, "formats");
        this.f36608a = mainFormat;
        this.f36609b = formats;
    }

    @Override // mt.o
    public nt.e a() {
        return this.f36608a.a();
    }

    @Override // mt.o
    public ot.q b() {
        List l10 = CollectionsKt.l();
        List c10 = CollectionsKt.c();
        c10.add(this.f36608a.b());
        for (o oVar : this.f36609b) {
            c10.add(oVar.b());
        }
        return new ot.q(l10, CollectionsKt.a(c10));
    }

    public final List c() {
        return this.f36609b;
    }

    public final o d() {
        return this.f36608a;
    }

    public boolean equals(Object obj) {
        if (obj instanceof c) {
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f36608a, cVar.f36608a) && Intrinsics.areEqual(this.f36609b, cVar.f36609b)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f36608a.hashCode() * 31) + this.f36609b.hashCode();
    }

    public String toString() {
        return "AlternativesParsing(" + this.f36609b + ')';
    }
}
