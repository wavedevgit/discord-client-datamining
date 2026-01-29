package io.sentry.android.replay.video;

import java.io.File;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final File f29691a;

    /* renamed from: b  reason: collision with root package name */
    private int f29692b;

    /* renamed from: c  reason: collision with root package name */
    private int f29693c;

    /* renamed from: d  reason: collision with root package name */
    private final int f29694d;

    /* renamed from: e  reason: collision with root package name */
    private final int f29695e;

    /* renamed from: f  reason: collision with root package name */
    private final String f29696f;

    public a(File file, int i10, int i11, int i12, int i13, String mimeType) {
        Intrinsics.checkNotNullParameter(file, "file");
        Intrinsics.checkNotNullParameter(mimeType, "mimeType");
        this.f29691a = file;
        this.f29692b = i10;
        this.f29693c = i11;
        this.f29694d = i12;
        this.f29695e = i13;
        this.f29696f = mimeType;
    }

    public final int a() {
        return this.f29695e;
    }

    public final File b() {
        return this.f29691a;
    }

    public final int c() {
        return this.f29694d;
    }

    public final String d() {
        return this.f29696f;
    }

    public final int e() {
        return this.f29693c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Intrinsics.areEqual(this.f29691a, aVar.f29691a) && this.f29692b == aVar.f29692b && this.f29693c == aVar.f29693c && this.f29694d == aVar.f29694d && this.f29695e == aVar.f29695e && Intrinsics.areEqual(this.f29696f, aVar.f29696f);
        }
        return false;
    }

    public final int f() {
        return this.f29692b;
    }

    public int hashCode() {
        return (((((((((this.f29691a.hashCode() * 31) + Integer.hashCode(this.f29692b)) * 31) + Integer.hashCode(this.f29693c)) * 31) + Integer.hashCode(this.f29694d)) * 31) + Integer.hashCode(this.f29695e)) * 31) + this.f29696f.hashCode();
    }

    public String toString() {
        return "MuxerConfig(file=" + this.f29691a + ", recordingWidth=" + this.f29692b + ", recordingHeight=" + this.f29693c + ", frameRate=" + this.f29694d + ", bitRate=" + this.f29695e + ", mimeType=" + this.f29696f + ')';
    }

    public /* synthetic */ a(File file, int i10, int i11, int i12, int i13, String str, int i14, DefaultConstructorMarker defaultConstructorMarker) {
        this(file, i10, i11, i12, i13, (i14 & 32) != 0 ? "video/avc" : str);
    }
}
