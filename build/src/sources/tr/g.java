package tr;

import java.io.File;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final File f49841a;

    /* renamed from: b  reason: collision with root package name */
    private final List f49842b;

    public g(File root, List segments) {
        Intrinsics.checkNotNullParameter(root, "root");
        Intrinsics.checkNotNullParameter(segments, "segments");
        this.f49841a = root;
        this.f49842b = segments;
    }

    public final File a() {
        return this.f49841a;
    }

    public final List b() {
        return this.f49842b;
    }

    public final int c() {
        return this.f49842b.size();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof g)) {
            return false;
        }
        g gVar = (g) obj;
        if (Intrinsics.areEqual(this.f49841a, gVar.f49841a) && Intrinsics.areEqual(this.f49842b, gVar.f49842b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f49841a.hashCode() * 31) + this.f49842b.hashCode();
    }

    public String toString() {
        return "FilePathComponents(root=" + this.f49841a + ", segments=" + this.f49842b + ')';
    }
}
