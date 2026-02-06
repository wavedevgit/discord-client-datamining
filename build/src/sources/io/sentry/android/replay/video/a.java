package io.sentry.android.replay.video;

import java.io.File;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final File f27836a;

    /* renamed from: b  reason: collision with root package name */
    private int f27837b;

    /* renamed from: c  reason: collision with root package name */
    private int f27838c;

    /* renamed from: d  reason: collision with root package name */
    private final int f27839d;

    /* renamed from: e  reason: collision with root package name */
    private final int f27840e;

    /* renamed from: f  reason: collision with root package name */
    private final String f27841f;

    public a(File file, int i10, int i11, int i12, int i13, String mimeType) {
        Intrinsics.checkNotNullParameter(file, "file");
        Intrinsics.checkNotNullParameter(mimeType, "mimeType");
        this.f27836a = file;
        this.f27837b = i10;
        this.f27838c = i11;
        this.f27839d = i12;
        this.f27840e = i13;
        this.f27841f = mimeType;
    }

    public final int a() {
        return this.f27840e;
    }

    public final File b() {
        return this.f27836a;
    }

    public final int c() {
        return this.f27839d;
    }

    public final String d() {
        return this.f27841f;
    }

    public final int e() {
        return this.f27838c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Intrinsics.areEqual(this.f27836a, aVar.f27836a) && this.f27837b == aVar.f27837b && this.f27838c == aVar.f27838c && this.f27839d == aVar.f27839d && this.f27840e == aVar.f27840e && Intrinsics.areEqual(this.f27841f, aVar.f27841f);
        }
        return false;
    }

    public final int f() {
        return this.f27837b;
    }

    public int hashCode() {
        return (((((((((this.f27836a.hashCode() * 31) + Integer.hashCode(this.f27837b)) * 31) + Integer.hashCode(this.f27838c)) * 31) + Integer.hashCode(this.f27839d)) * 31) + Integer.hashCode(this.f27840e)) * 31) + this.f27841f.hashCode();
    }

    public String toString() {
        return "MuxerConfig(file=" + this.f27836a + ", recordingWidth=" + this.f27837b + ", recordingHeight=" + this.f27838c + ", frameRate=" + this.f27839d + ", bitRate=" + this.f27840e + ", mimeType=" + this.f27841f + ')';
    }

    public /* synthetic */ a(File file, int i10, int i11, int i12, int i13, String str, int i14, DefaultConstructorMarker defaultConstructorMarker) {
        this(file, i10, i11, i12, i13, (i14 & 32) != 0 ? "video/avc" : str);
    }
}
