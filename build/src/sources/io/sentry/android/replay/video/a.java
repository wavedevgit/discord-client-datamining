package io.sentry.android.replay.video;

import java.io.File;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final File f29634a;

    /* renamed from: b  reason: collision with root package name */
    private int f29635b;

    /* renamed from: c  reason: collision with root package name */
    private int f29636c;

    /* renamed from: d  reason: collision with root package name */
    private final int f29637d;

    /* renamed from: e  reason: collision with root package name */
    private final int f29638e;

    /* renamed from: f  reason: collision with root package name */
    private final String f29639f;

    public a(File file, int i10, int i11, int i12, int i13, String mimeType) {
        Intrinsics.checkNotNullParameter(file, "file");
        Intrinsics.checkNotNullParameter(mimeType, "mimeType");
        this.f29634a = file;
        this.f29635b = i10;
        this.f29636c = i11;
        this.f29637d = i12;
        this.f29638e = i13;
        this.f29639f = mimeType;
    }

    public final int a() {
        return this.f29638e;
    }

    public final File b() {
        return this.f29634a;
    }

    public final int c() {
        return this.f29637d;
    }

    public final String d() {
        return this.f29639f;
    }

    public final int e() {
        return this.f29636c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Intrinsics.areEqual(this.f29634a, aVar.f29634a) && this.f29635b == aVar.f29635b && this.f29636c == aVar.f29636c && this.f29637d == aVar.f29637d && this.f29638e == aVar.f29638e && Intrinsics.areEqual(this.f29639f, aVar.f29639f);
        }
        return false;
    }

    public final int f() {
        return this.f29635b;
    }

    public int hashCode() {
        return (((((((((this.f29634a.hashCode() * 31) + Integer.hashCode(this.f29635b)) * 31) + Integer.hashCode(this.f29636c)) * 31) + Integer.hashCode(this.f29637d)) * 31) + Integer.hashCode(this.f29638e)) * 31) + this.f29639f.hashCode();
    }

    public String toString() {
        return "MuxerConfig(file=" + this.f29634a + ", recordingWidth=" + this.f29635b + ", recordingHeight=" + this.f29636c + ", frameRate=" + this.f29637d + ", bitRate=" + this.f29638e + ", mimeType=" + this.f29639f + ')';
    }

    public /* synthetic */ a(File file, int i10, int i11, int i12, int i13, String str, int i14, DefaultConstructorMarker defaultConstructorMarker) {
        this(file, i10, i11, i12, i13, (i14 & 32) != 0 ? "video/avc" : str);
    }
}
