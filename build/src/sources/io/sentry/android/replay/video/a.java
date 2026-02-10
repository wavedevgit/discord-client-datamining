package io.sentry.android.replay.video;

import java.io.File;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final File f29019a;

    /* renamed from: b  reason: collision with root package name */
    private int f29020b;

    /* renamed from: c  reason: collision with root package name */
    private int f29021c;

    /* renamed from: d  reason: collision with root package name */
    private final int f29022d;

    /* renamed from: e  reason: collision with root package name */
    private final int f29023e;

    /* renamed from: f  reason: collision with root package name */
    private final String f29024f;

    public a(File file, int i10, int i11, int i12, int i13, String mimeType) {
        Intrinsics.checkNotNullParameter(file, "file");
        Intrinsics.checkNotNullParameter(mimeType, "mimeType");
        this.f29019a = file;
        this.f29020b = i10;
        this.f29021c = i11;
        this.f29022d = i12;
        this.f29023e = i13;
        this.f29024f = mimeType;
    }

    public final int a() {
        return this.f29023e;
    }

    public final File b() {
        return this.f29019a;
    }

    public final int c() {
        return this.f29022d;
    }

    public final String d() {
        return this.f29024f;
    }

    public final int e() {
        return this.f29021c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Intrinsics.areEqual(this.f29019a, aVar.f29019a) && this.f29020b == aVar.f29020b && this.f29021c == aVar.f29021c && this.f29022d == aVar.f29022d && this.f29023e == aVar.f29023e && Intrinsics.areEqual(this.f29024f, aVar.f29024f);
        }
        return false;
    }

    public final int f() {
        return this.f29020b;
    }

    public int hashCode() {
        return (((((((((this.f29019a.hashCode() * 31) + Integer.hashCode(this.f29020b)) * 31) + Integer.hashCode(this.f29021c)) * 31) + Integer.hashCode(this.f29022d)) * 31) + Integer.hashCode(this.f29023e)) * 31) + this.f29024f.hashCode();
    }

    public String toString() {
        return "MuxerConfig(file=" + this.f29019a + ", recordingWidth=" + this.f29020b + ", recordingHeight=" + this.f29021c + ", frameRate=" + this.f29022d + ", bitRate=" + this.f29023e + ", mimeType=" + this.f29024f + ')';
    }

    public /* synthetic */ a(File file, int i10, int i11, int i12, int i13, String str, int i14, DefaultConstructorMarker defaultConstructorMarker) {
        this(file, i10, i11, i12, i13, (i14 & 32) != 0 ? "video/avc" : str);
    }
}
