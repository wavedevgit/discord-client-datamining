package mt;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements s {

    /* renamed from: a  reason: collision with root package name */
    private final o f37177a;

    /* renamed from: b  reason: collision with root package name */
    private final List f37178b;

    public c(o mainFormat, List formats) {
        Intrinsics.checkNotNullParameter(mainFormat, "mainFormat");
        Intrinsics.checkNotNullParameter(formats, "formats");
        this.f37177a = mainFormat;
        this.f37178b = formats;
    }

    @Override // mt.o
    public nt.e a() {
        return this.f37177a.a();
    }

    @Override // mt.o
    public ot.q b() {
        List l10 = CollectionsKt.l();
        List c10 = CollectionsKt.c();
        c10.add(this.f37177a.b());
        for (o oVar : this.f37178b) {
            c10.add(oVar.b());
        }
        return new ot.q(l10, CollectionsKt.a(c10));
    }

    public final List c() {
        return this.f37178b;
    }

    public final o d() {
        return this.f37177a;
    }

    public boolean equals(Object obj) {
        if (obj instanceof c) {
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f37177a, cVar.f37177a) && Intrinsics.areEqual(this.f37178b, cVar.f37178b)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f37177a.hashCode() * 31) + this.f37178b.hashCode();
    }

    public String toString() {
        return "AlternativesParsing(" + this.f37178b + ')';
    }
}
