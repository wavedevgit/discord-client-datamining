package cs;

import java.io.File;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final File f20171a;

    /* renamed from: b  reason: collision with root package name */
    private final List f20172b;

    public g(File root, List segments) {
        Intrinsics.checkNotNullParameter(root, "root");
        Intrinsics.checkNotNullParameter(segments, "segments");
        this.f20171a = root;
        this.f20172b = segments;
    }

    public final File a() {
        return this.f20171a;
    }

    public final List b() {
        return this.f20172b;
    }

    public final int c() {
        return this.f20172b.size();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof g)) {
            return false;
        }
        g gVar = (g) obj;
        if (Intrinsics.areEqual(this.f20171a, gVar.f20171a) && Intrinsics.areEqual(this.f20172b, gVar.f20172b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f20171a.hashCode() * 31) + this.f20172b.hashCode();
    }

    public String toString() {
        return "FilePathComponents(root=" + this.f20171a + ", segments=" + this.f20172b + ')';
    }
}
