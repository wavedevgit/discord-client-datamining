package ls;

import java.io.File;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final File f36009a;

    /* renamed from: b  reason: collision with root package name */
    private final List f36010b;

    public g(File root, List segments) {
        Intrinsics.checkNotNullParameter(root, "root");
        Intrinsics.checkNotNullParameter(segments, "segments");
        this.f36009a = root;
        this.f36010b = segments;
    }

    public final File a() {
        return this.f36009a;
    }

    public final List b() {
        return this.f36010b;
    }

    public final int c() {
        return this.f36010b.size();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof g)) {
            return false;
        }
        g gVar = (g) obj;
        if (Intrinsics.areEqual(this.f36009a, gVar.f36009a) && Intrinsics.areEqual(this.f36010b, gVar.f36010b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f36009a.hashCode() * 31) + this.f36010b.hashCode();
    }

    public String toString() {
        return "FilePathComponents(root=" + this.f36009a + ", segments=" + this.f36010b + ')';
    }
}
