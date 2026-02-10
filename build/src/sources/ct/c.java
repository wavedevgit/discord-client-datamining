package ct;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements s {

    /* renamed from: a  reason: collision with root package name */
    private final o f20210a;

    /* renamed from: b  reason: collision with root package name */
    private final List f20211b;

    public c(o mainFormat, List formats) {
        Intrinsics.checkNotNullParameter(mainFormat, "mainFormat");
        Intrinsics.checkNotNullParameter(formats, "formats");
        this.f20210a = mainFormat;
        this.f20211b = formats;
    }

    @Override // ct.o
    public dt.e a() {
        return this.f20210a.a();
    }

    @Override // ct.o
    public et.q b() {
        List l10 = CollectionsKt.l();
        List c10 = CollectionsKt.c();
        c10.add(this.f20210a.b());
        for (o oVar : this.f20211b) {
            c10.add(oVar.b());
        }
        return new et.q(l10, CollectionsKt.a(c10));
    }

    public final List c() {
        return this.f20211b;
    }

    public final o d() {
        return this.f20210a;
    }

    public boolean equals(Object obj) {
        if (obj instanceof c) {
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f20210a, cVar.f20210a) && Intrinsics.areEqual(this.f20211b, cVar.f20211b)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f20210a.hashCode() * 31) + this.f20211b.hashCode();
    }

    public String toString() {
        return "AlternativesParsing(" + this.f20211b + ')';
    }
}
