package ls;

import java.io.File;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final File f36578a;

    /* renamed from: b  reason: collision with root package name */
    private final List f36579b;

    public g(File root, List segments) {
        Intrinsics.checkNotNullParameter(root, "root");
        Intrinsics.checkNotNullParameter(segments, "segments");
        this.f36578a = root;
        this.f36579b = segments;
    }

    public final File a() {
        return this.f36578a;
    }

    public final List b() {
        return this.f36579b;
    }

    public final int c() {
        return this.f36579b.size();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof g)) {
            return false;
        }
        g gVar = (g) obj;
        if (Intrinsics.areEqual(this.f36578a, gVar.f36578a) && Intrinsics.areEqual(this.f36579b, gVar.f36579b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f36578a.hashCode() * 31) + this.f36579b.hashCode();
    }

    public String toString() {
        return "FilePathComponents(root=" + this.f36578a + ", segments=" + this.f36579b + ')';
    }
}
