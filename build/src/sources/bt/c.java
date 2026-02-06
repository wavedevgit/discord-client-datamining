package bt;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements s {

    /* renamed from: a  reason: collision with root package name */
    private final o f7055a;

    /* renamed from: b  reason: collision with root package name */
    private final List f7056b;

    public c(o mainFormat, List formats) {
        Intrinsics.checkNotNullParameter(mainFormat, "mainFormat");
        Intrinsics.checkNotNullParameter(formats, "formats");
        this.f7055a = mainFormat;
        this.f7056b = formats;
    }

    @Override // bt.o
    public ct.e a() {
        return this.f7055a.a();
    }

    @Override // bt.o
    public dt.q b() {
        List l10 = CollectionsKt.l();
        List c10 = CollectionsKt.c();
        c10.add(this.f7055a.b());
        for (o oVar : this.f7056b) {
            c10.add(oVar.b());
        }
        return new dt.q(l10, CollectionsKt.a(c10));
    }

    public final List c() {
        return this.f7056b;
    }

    public final o d() {
        return this.f7055a;
    }

    public boolean equals(Object obj) {
        if (obj instanceof c) {
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f7055a, cVar.f7055a) && Intrinsics.areEqual(this.f7056b, cVar.f7056b)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f7055a.hashCode() * 31) + this.f7056b.hashCode();
    }

    public String toString() {
        return "AlternativesParsing(" + this.f7056b + ')';
    }
}
