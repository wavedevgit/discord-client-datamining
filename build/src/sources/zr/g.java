package zr;

import java.io.File;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final File f56187a;

    /* renamed from: b  reason: collision with root package name */
    private final List f56188b;

    public g(File root, List segments) {
        Intrinsics.checkNotNullParameter(root, "root");
        Intrinsics.checkNotNullParameter(segments, "segments");
        this.f56187a = root;
        this.f56188b = segments;
    }

    public final File a() {
        return this.f56187a;
    }

    public final List b() {
        return this.f56188b;
    }

    public final int c() {
        return this.f56188b.size();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof g)) {
            return false;
        }
        g gVar = (g) obj;
        if (Intrinsics.areEqual(this.f56187a, gVar.f56187a) && Intrinsics.areEqual(this.f56188b, gVar.f56188b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f56187a.hashCode() * 31) + this.f56188b.hashCode();
    }

    public String toString() {
        return "FilePathComponents(root=" + this.f56187a + ", segments=" + this.f56188b + ')';
    }
}
