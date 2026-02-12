package io.sentry.android.replay.video;

import java.io.File;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final File f29020a;

    /* renamed from: b  reason: collision with root package name */
    private int f29021b;

    /* renamed from: c  reason: collision with root package name */
    private int f29022c;

    /* renamed from: d  reason: collision with root package name */
    private final int f29023d;

    /* renamed from: e  reason: collision with root package name */
    private final int f29024e;

    /* renamed from: f  reason: collision with root package name */
    private final String f29025f;

    public a(File file, int i10, int i11, int i12, int i13, String mimeType) {
        Intrinsics.checkNotNullParameter(file, "file");
        Intrinsics.checkNotNullParameter(mimeType, "mimeType");
        this.f29020a = file;
        this.f29021b = i10;
        this.f29022c = i11;
        this.f29023d = i12;
        this.f29024e = i13;
        this.f29025f = mimeType;
    }

    public final int a() {
        return this.f29024e;
    }

    public final File b() {
        return this.f29020a;
    }

    public final int c() {
        return this.f29023d;
    }

    public final String d() {
        return this.f29025f;
    }

    public final int e() {
        return this.f29022c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Intrinsics.areEqual(this.f29020a, aVar.f29020a) && this.f29021b == aVar.f29021b && this.f29022c == aVar.f29022c && this.f29023d == aVar.f29023d && this.f29024e == aVar.f29024e && Intrinsics.areEqual(this.f29025f, aVar.f29025f);
        }
        return false;
    }

    public final int f() {
        return this.f29021b;
    }

    public int hashCode() {
        return (((((((((this.f29020a.hashCode() * 31) + Integer.hashCode(this.f29021b)) * 31) + Integer.hashCode(this.f29022c)) * 31) + Integer.hashCode(this.f29023d)) * 31) + Integer.hashCode(this.f29024e)) * 31) + this.f29025f.hashCode();
    }

    public String toString() {
        return "MuxerConfig(file=" + this.f29020a + ", recordingWidth=" + this.f29021b + ", recordingHeight=" + this.f29022c + ", frameRate=" + this.f29023d + ", bitRate=" + this.f29024e + ", mimeType=" + this.f29025f + ')';
    }

    public /* synthetic */ a(File file, int i10, int i11, int i12, int i13, String str, int i14, DefaultConstructorMarker defaultConstructorMarker) {
        this(file, i10, i11, i12, i13, (i14 & 32) != 0 ? "video/avc" : str);
    }
}
