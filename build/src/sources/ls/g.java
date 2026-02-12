package ls;

import java.io.File;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final File f36010a;

    /* renamed from: b  reason: collision with root package name */
    private final List f36011b;

    public g(File root, List segments) {
        Intrinsics.checkNotNullParameter(root, "root");
        Intrinsics.checkNotNullParameter(segments, "segments");
        this.f36010a = root;
        this.f36011b = segments;
    }

    public final File a() {
        return this.f36010a;
    }

    public final List b() {
        return this.f36011b;
    }

    public final int c() {
        return this.f36011b.size();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof g)) {
            return false;
        }
        g gVar = (g) obj;
        if (Intrinsics.areEqual(this.f36010a, gVar.f36010a) && Intrinsics.areEqual(this.f36011b, gVar.f36011b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f36010a.hashCode() * 31) + this.f36011b.hashCode();
    }

    public String toString() {
        return "FilePathComponents(root=" + this.f36010a + ", segments=" + this.f36011b + ')';
    }
}
