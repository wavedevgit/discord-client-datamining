package tr;

import java.io.File;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final File f49825a;

    /* renamed from: b  reason: collision with root package name */
    private final List f49826b;

    public g(File root, List segments) {
        Intrinsics.checkNotNullParameter(root, "root");
        Intrinsics.checkNotNullParameter(segments, "segments");
        this.f49825a = root;
        this.f49826b = segments;
    }

    public final File a() {
        return this.f49825a;
    }

    public final List b() {
        return this.f49826b;
    }

    public final int c() {
        return this.f49826b.size();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof g)) {
            return false;
        }
        g gVar = (g) obj;
        if (Intrinsics.areEqual(this.f49825a, gVar.f49825a) && Intrinsics.areEqual(this.f49826b, gVar.f49826b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f49825a.hashCode() * 31) + this.f49826b.hashCode();
    }

    public String toString() {
        return "FilePathComponents(root=" + this.f49825a + ", segments=" + this.f49826b + ')';
    }
}
