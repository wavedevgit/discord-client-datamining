package io.sentry.android.replay.video;

import java.io.File;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final File f29707a;

    /* renamed from: b  reason: collision with root package name */
    private int f29708b;

    /* renamed from: c  reason: collision with root package name */
    private int f29709c;

    /* renamed from: d  reason: collision with root package name */
    private final int f29710d;

    /* renamed from: e  reason: collision with root package name */
    private final int f29711e;

    /* renamed from: f  reason: collision with root package name */
    private final String f29712f;

    public a(File file, int i10, int i11, int i12, int i13, String mimeType) {
        Intrinsics.checkNotNullParameter(file, "file");
        Intrinsics.checkNotNullParameter(mimeType, "mimeType");
        this.f29707a = file;
        this.f29708b = i10;
        this.f29709c = i11;
        this.f29710d = i12;
        this.f29711e = i13;
        this.f29712f = mimeType;
    }

    public final int a() {
        return this.f29711e;
    }

    public final File b() {
        return this.f29707a;
    }

    public final int c() {
        return this.f29710d;
    }

    public final String d() {
        return this.f29712f;
    }

    public final int e() {
        return this.f29709c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Intrinsics.areEqual(this.f29707a, aVar.f29707a) && this.f29708b == aVar.f29708b && this.f29709c == aVar.f29709c && this.f29710d == aVar.f29710d && this.f29711e == aVar.f29711e && Intrinsics.areEqual(this.f29712f, aVar.f29712f);
        }
        return false;
    }

    public final int f() {
        return this.f29708b;
    }

    public int hashCode() {
        return (((((((((this.f29707a.hashCode() * 31) + Integer.hashCode(this.f29708b)) * 31) + Integer.hashCode(this.f29709c)) * 31) + Integer.hashCode(this.f29710d)) * 31) + Integer.hashCode(this.f29711e)) * 31) + this.f29712f.hashCode();
    }

    public String toString() {
        return "MuxerConfig(file=" + this.f29707a + ", recordingWidth=" + this.f29708b + ", recordingHeight=" + this.f29709c + ", frameRate=" + this.f29710d + ", bitRate=" + this.f29711e + ", mimeType=" + this.f29712f + ')';
    }

    public /* synthetic */ a(File file, int i10, int i11, int i12, int i13, String str, int i14, DefaultConstructorMarker defaultConstructorMarker) {
        this(file, i10, i11, i12, i13, (i14 & 32) != 0 ? "video/avc" : str);
    }
}
