package io.sentry.android.replay.video;

import java.io.File;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final File f29588a;

    /* renamed from: b  reason: collision with root package name */
    private int f29589b;

    /* renamed from: c  reason: collision with root package name */
    private int f29590c;

    /* renamed from: d  reason: collision with root package name */
    private final int f29591d;

    /* renamed from: e  reason: collision with root package name */
    private final int f29592e;

    /* renamed from: f  reason: collision with root package name */
    private final String f29593f;

    public a(File file, int i10, int i11, int i12, int i13, String mimeType) {
        Intrinsics.checkNotNullParameter(file, "file");
        Intrinsics.checkNotNullParameter(mimeType, "mimeType");
        this.f29588a = file;
        this.f29589b = i10;
        this.f29590c = i11;
        this.f29591d = i12;
        this.f29592e = i13;
        this.f29593f = mimeType;
    }

    public final int a() {
        return this.f29592e;
    }

    public final File b() {
        return this.f29588a;
    }

    public final int c() {
        return this.f29591d;
    }

    public final String d() {
        return this.f29593f;
    }

    public final int e() {
        return this.f29590c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Intrinsics.areEqual(this.f29588a, aVar.f29588a) && this.f29589b == aVar.f29589b && this.f29590c == aVar.f29590c && this.f29591d == aVar.f29591d && this.f29592e == aVar.f29592e && Intrinsics.areEqual(this.f29593f, aVar.f29593f);
        }
        return false;
    }

    public final int f() {
        return this.f29589b;
    }

    public int hashCode() {
        return (((((((((this.f29588a.hashCode() * 31) + Integer.hashCode(this.f29589b)) * 31) + Integer.hashCode(this.f29590c)) * 31) + Integer.hashCode(this.f29591d)) * 31) + Integer.hashCode(this.f29592e)) * 31) + this.f29593f.hashCode();
    }

    public String toString() {
        return "MuxerConfig(file=" + this.f29588a + ", recordingWidth=" + this.f29589b + ", recordingHeight=" + this.f29590c + ", frameRate=" + this.f29591d + ", bitRate=" + this.f29592e + ", mimeType=" + this.f29593f + ')';
    }

    public /* synthetic */ a(File file, int i10, int i11, int i12, int i13, String str, int i14, DefaultConstructorMarker defaultConstructorMarker) {
        this(file, i10, i11, i12, i13, (i14 & 32) != 0 ? "video/avc" : str);
    }
}
