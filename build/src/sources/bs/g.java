package bs;

import java.io.File;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final File f7016a;

    /* renamed from: b  reason: collision with root package name */
    private final List f7017b;

    public g(File root, List segments) {
        Intrinsics.checkNotNullParameter(root, "root");
        Intrinsics.checkNotNullParameter(segments, "segments");
        this.f7016a = root;
        this.f7017b = segments;
    }

    public final File a() {
        return this.f7016a;
    }

    public final List b() {
        return this.f7017b;
    }

    public final int c() {
        return this.f7017b.size();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof g)) {
            return false;
        }
        g gVar = (g) obj;
        if (Intrinsics.areEqual(this.f7016a, gVar.f7016a) && Intrinsics.areEqual(this.f7017b, gVar.f7017b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f7016a.hashCode() * 31) + this.f7017b.hashCode();
    }

    public String toString() {
        return "FilePathComponents(root=" + this.f7016a + ", segments=" + this.f7017b + ')';
    }
}
