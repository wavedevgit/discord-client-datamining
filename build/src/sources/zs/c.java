package zs;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements s {

    /* renamed from: a  reason: collision with root package name */
    private final o f56226a;

    /* renamed from: b  reason: collision with root package name */
    private final List f56227b;

    public c(o mainFormat, List formats) {
        Intrinsics.checkNotNullParameter(mainFormat, "mainFormat");
        Intrinsics.checkNotNullParameter(formats, "formats");
        this.f56226a = mainFormat;
        this.f56227b = formats;
    }

    @Override // zs.o
    public at.e a() {
        return this.f56226a.a();
    }

    @Override // zs.o
    public bt.q b() {
        List l10 = CollectionsKt.l();
        List c10 = CollectionsKt.c();
        c10.add(this.f56226a.b());
        for (o oVar : this.f56227b) {
            c10.add(oVar.b());
        }
        return new bt.q(l10, CollectionsKt.a(c10));
    }

    public final List c() {
        return this.f56227b;
    }

    public final o d() {
        return this.f56226a;
    }

    public boolean equals(Object obj) {
        if (obj instanceof c) {
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f56226a, cVar.f56226a) && Intrinsics.areEqual(this.f56227b, cVar.f56227b)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f56226a.hashCode() * 31) + this.f56227b.hashCode();
    }

    public String toString() {
        return "AlternativesParsing(" + this.f56227b + ')';
    }
}
