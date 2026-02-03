package ws;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements s {

    /* renamed from: a  reason: collision with root package name */
    private final o f52700a;

    /* renamed from: b  reason: collision with root package name */
    private final List f52701b;

    public c(o mainFormat, List formats) {
        Intrinsics.checkNotNullParameter(mainFormat, "mainFormat");
        Intrinsics.checkNotNullParameter(formats, "formats");
        this.f52700a = mainFormat;
        this.f52701b = formats;
    }

    @Override // ws.o
    public xs.e a() {
        return this.f52700a.a();
    }

    @Override // ws.o
    public ys.q b() {
        List l10 = CollectionsKt.l();
        List c10 = CollectionsKt.c();
        c10.add(this.f52700a.b());
        for (o oVar : this.f52701b) {
            c10.add(oVar.b());
        }
        return new ys.q(l10, CollectionsKt.a(c10));
    }

    public final List c() {
        return this.f52701b;
    }

    public final o d() {
        return this.f52700a;
    }

    public boolean equals(Object obj) {
        if (obj instanceof c) {
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f52700a, cVar.f52700a) && Intrinsics.areEqual(this.f52701b, cVar.f52701b)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f52700a.hashCode() * 31) + this.f52701b.hashCode();
    }

    public String toString() {
        return "AlternativesParsing(" + this.f52701b + ')';
    }
}
