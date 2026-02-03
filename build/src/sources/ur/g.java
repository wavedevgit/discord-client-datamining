package ur;

import java.io.File;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final File f50599a;

    /* renamed from: b  reason: collision with root package name */
    private final List f50600b;

    public g(File root, List segments) {
        Intrinsics.checkNotNullParameter(root, "root");
        Intrinsics.checkNotNullParameter(segments, "segments");
        this.f50599a = root;
        this.f50600b = segments;
    }

    public final File a() {
        return this.f50599a;
    }

    public final List b() {
        return this.f50600b;
    }

    public final int c() {
        return this.f50600b.size();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof g)) {
            return false;
        }
        g gVar = (g) obj;
        if (Intrinsics.areEqual(this.f50599a, gVar.f50599a) && Intrinsics.areEqual(this.f50600b, gVar.f50600b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f50599a.hashCode() * 31) + this.f50600b.hashCode();
    }

    public String toString() {
        return "FilePathComponents(root=" + this.f50599a + ", segments=" + this.f50600b + ')';
    }
}
