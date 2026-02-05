package io.sentry.android.replay.video;

import java.io.File;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final File f28692a;

    /* renamed from: b  reason: collision with root package name */
    private int f28693b;

    /* renamed from: c  reason: collision with root package name */
    private int f28694c;

    /* renamed from: d  reason: collision with root package name */
    private final int f28695d;

    /* renamed from: e  reason: collision with root package name */
    private final int f28696e;

    /* renamed from: f  reason: collision with root package name */
    private final String f28697f;

    public a(File file, int i10, int i11, int i12, int i13, String mimeType) {
        Intrinsics.checkNotNullParameter(file, "file");
        Intrinsics.checkNotNullParameter(mimeType, "mimeType");
        this.f28692a = file;
        this.f28693b = i10;
        this.f28694c = i11;
        this.f28695d = i12;
        this.f28696e = i13;
        this.f28697f = mimeType;
    }

    public final int a() {
        return this.f28696e;
    }

    public final File b() {
        return this.f28692a;
    }

    public final int c() {
        return this.f28695d;
    }

    public final String d() {
        return this.f28697f;
    }

    public final int e() {
        return this.f28694c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Intrinsics.areEqual(this.f28692a, aVar.f28692a) && this.f28693b == aVar.f28693b && this.f28694c == aVar.f28694c && this.f28695d == aVar.f28695d && this.f28696e == aVar.f28696e && Intrinsics.areEqual(this.f28697f, aVar.f28697f);
        }
        return false;
    }

    public final int f() {
        return this.f28693b;
    }

    public int hashCode() {
        return (((((((((this.f28692a.hashCode() * 31) + Integer.hashCode(this.f28693b)) * 31) + Integer.hashCode(this.f28694c)) * 31) + Integer.hashCode(this.f28695d)) * 31) + Integer.hashCode(this.f28696e)) * 31) + this.f28697f.hashCode();
    }

    public String toString() {
        return "MuxerConfig(file=" + this.f28692a + ", recordingWidth=" + this.f28693b + ", recordingHeight=" + this.f28694c + ", frameRate=" + this.f28695d + ", bitRate=" + this.f28696e + ", mimeType=" + this.f28697f + ')';
    }

    public /* synthetic */ a(File file, int i10, int i11, int i12, int i13, String str, int i14, DefaultConstructorMarker defaultConstructorMarker) {
        this(file, i10, i11, i12, i13, (i14 & 32) != 0 ? "video/avc" : str);
    }
}
