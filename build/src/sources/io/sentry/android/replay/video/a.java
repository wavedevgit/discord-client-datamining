package io.sentry.android.replay.video;

import java.io.File;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final File f29273a;

    /* renamed from: b  reason: collision with root package name */
    private int f29274b;

    /* renamed from: c  reason: collision with root package name */
    private int f29275c;

    /* renamed from: d  reason: collision with root package name */
    private final int f29276d;

    /* renamed from: e  reason: collision with root package name */
    private final int f29277e;

    /* renamed from: f  reason: collision with root package name */
    private final String f29278f;

    public a(File file, int i10, int i11, int i12, int i13, String mimeType) {
        Intrinsics.checkNotNullParameter(file, "file");
        Intrinsics.checkNotNullParameter(mimeType, "mimeType");
        this.f29273a = file;
        this.f29274b = i10;
        this.f29275c = i11;
        this.f29276d = i12;
        this.f29277e = i13;
        this.f29278f = mimeType;
    }

    public final int a() {
        return this.f29277e;
    }

    public final File b() {
        return this.f29273a;
    }

    public final int c() {
        return this.f29276d;
    }

    public final String d() {
        return this.f29278f;
    }

    public final int e() {
        return this.f29275c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Intrinsics.areEqual(this.f29273a, aVar.f29273a) && this.f29274b == aVar.f29274b && this.f29275c == aVar.f29275c && this.f29276d == aVar.f29276d && this.f29277e == aVar.f29277e && Intrinsics.areEqual(this.f29278f, aVar.f29278f);
        }
        return false;
    }

    public final int f() {
        return this.f29274b;
    }

    public int hashCode() {
        return (((((((((this.f29273a.hashCode() * 31) + Integer.hashCode(this.f29274b)) * 31) + Integer.hashCode(this.f29275c)) * 31) + Integer.hashCode(this.f29276d)) * 31) + Integer.hashCode(this.f29277e)) * 31) + this.f29278f.hashCode();
    }

    public String toString() {
        return "MuxerConfig(file=" + this.f29273a + ", recordingWidth=" + this.f29274b + ", recordingHeight=" + this.f29275c + ", frameRate=" + this.f29276d + ", bitRate=" + this.f29277e + ", mimeType=" + this.f29278f + ')';
    }

    public /* synthetic */ a(File file, int i10, int i11, int i12, int i13, String str, int i14, DefaultConstructorMarker defaultConstructorMarker) {
        this(file, i10, i11, i12, i13, (i14 & 32) != 0 ? "video/avc" : str);
    }
}
