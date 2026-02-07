package io.sentry.android.replay.video;

import java.io.File;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final File f27884a;

    /* renamed from: b  reason: collision with root package name */
    private int f27885b;

    /* renamed from: c  reason: collision with root package name */
    private int f27886c;

    /* renamed from: d  reason: collision with root package name */
    private final int f27887d;

    /* renamed from: e  reason: collision with root package name */
    private final int f27888e;

    /* renamed from: f  reason: collision with root package name */
    private final String f27889f;

    public a(File file, int i10, int i11, int i12, int i13, String mimeType) {
        Intrinsics.checkNotNullParameter(file, "file");
        Intrinsics.checkNotNullParameter(mimeType, "mimeType");
        this.f27884a = file;
        this.f27885b = i10;
        this.f27886c = i11;
        this.f27887d = i12;
        this.f27888e = i13;
        this.f27889f = mimeType;
    }

    public final int a() {
        return this.f27888e;
    }

    public final File b() {
        return this.f27884a;
    }

    public final int c() {
        return this.f27887d;
    }

    public final String d() {
        return this.f27889f;
    }

    public final int e() {
        return this.f27886c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Intrinsics.areEqual(this.f27884a, aVar.f27884a) && this.f27885b == aVar.f27885b && this.f27886c == aVar.f27886c && this.f27887d == aVar.f27887d && this.f27888e == aVar.f27888e && Intrinsics.areEqual(this.f27889f, aVar.f27889f);
        }
        return false;
    }

    public final int f() {
        return this.f27885b;
    }

    public int hashCode() {
        return (((((((((this.f27884a.hashCode() * 31) + Integer.hashCode(this.f27885b)) * 31) + Integer.hashCode(this.f27886c)) * 31) + Integer.hashCode(this.f27887d)) * 31) + Integer.hashCode(this.f27888e)) * 31) + this.f27889f.hashCode();
    }

    public String toString() {
        return "MuxerConfig(file=" + this.f27884a + ", recordingWidth=" + this.f27885b + ", recordingHeight=" + this.f27886c + ", frameRate=" + this.f27887d + ", bitRate=" + this.f27888e + ", mimeType=" + this.f27889f + ')';
    }

    public /* synthetic */ a(File file, int i10, int i11, int i12, int i13, String str, int i14, DefaultConstructorMarker defaultConstructorMarker) {
        this(file, i10, i11, i12, i13, (i14 & 32) != 0 ? "video/avc" : str);
    }
}
