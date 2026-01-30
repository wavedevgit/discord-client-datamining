package ts;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements s {

    /* renamed from: a  reason: collision with root package name */
    private final o f49880a;

    /* renamed from: b  reason: collision with root package name */
    private final List f49881b;

    public c(o mainFormat, List formats) {
        Intrinsics.checkNotNullParameter(mainFormat, "mainFormat");
        Intrinsics.checkNotNullParameter(formats, "formats");
        this.f49880a = mainFormat;
        this.f49881b = formats;
    }

    @Override // ts.o
    public us.e a() {
        return this.f49880a.a();
    }

    @Override // ts.o
    public vs.q b() {
        List l10 = CollectionsKt.l();
        List c10 = CollectionsKt.c();
        c10.add(this.f49880a.b());
        for (o oVar : this.f49881b) {
            c10.add(oVar.b());
        }
        return new vs.q(l10, CollectionsKt.a(c10));
    }

    public final List c() {
        return this.f49881b;
    }

    public final o d() {
        return this.f49880a;
    }

    public boolean equals(Object obj) {
        if (obj instanceof c) {
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f49880a, cVar.f49880a) && Intrinsics.areEqual(this.f49881b, cVar.f49881b)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f49880a.hashCode() * 31) + this.f49881b.hashCode();
    }

    public String toString() {
        return "AlternativesParsing(" + this.f49881b + ')';
    }
}
