package wr;

import java.io.File;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    private final File f52661a;

    /* renamed from: b  reason: collision with root package name */
    private final List f52662b;

    public g(File root, List segments) {
        Intrinsics.checkNotNullParameter(root, "root");
        Intrinsics.checkNotNullParameter(segments, "segments");
        this.f52661a = root;
        this.f52662b = segments;
    }

    public final File a() {
        return this.f52661a;
    }

    public final List b() {
        return this.f52662b;
    }

    public final int c() {
        return this.f52662b.size();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof g)) {
            return false;
        }
        g gVar = (g) obj;
        if (Intrinsics.areEqual(this.f52661a, gVar.f52661a) && Intrinsics.areEqual(this.f52662b, gVar.f52662b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return (this.f52661a.hashCode() * 31) + this.f52662b.hashCode();
    }

    public String toString() {
        return "FilePathComponents(root=" + this.f52661a + ", segments=" + this.f52662b + ')';
    }
}
