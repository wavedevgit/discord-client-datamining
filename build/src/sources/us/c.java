package us;

import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c implements s {

    /* renamed from: a  reason: collision with root package name */
    private final o f50638a;

    /* renamed from: b  reason: collision with root package name */
    private final List f50639b;

    public c(o mainFormat, List formats) {
        Intrinsics.checkNotNullParameter(mainFormat, "mainFormat");
        Intrinsics.checkNotNullParameter(formats, "formats");
        this.f50638a = mainFormat;
        this.f50639b = formats;
    }

    @Override // us.o
    public vs.e a() {
        return this.f50638a.a();
    }

    @Override // us.o
    public ws.q b() {
        List l10 = CollectionsKt.l();
        List c10 = CollectionsKt.c();
        c10.add(this.f50638a.b());
        for (o oVar : this.f50639b) {
            c10.add(oVar.b());
        }
        return new ws.q(l10, CollectionsKt.a(c10));
    }

    public final List c() {
        return this.f50639b;
    }

    public final o d() {
        return this.f50638a;
    }

    public boolean equals(Object obj) {
        if (obj instanceof c) {
            c cVar = (c) obj;
            if (Intrinsics.areEqual(this.f50638a, cVar.f50638a) && Intrinsics.areEqual(this.f50639b, cVar.f50639b)) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        return (this.f50638a.hashCode() * 31) + this.f50639b.hashCode();
    }

    public String toString() {
        return "AlternativesParsing(" + this.f50639b + ')';
    }
}
