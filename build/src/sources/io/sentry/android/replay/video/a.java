package io.sentry.android.replay.video;

import java.io.File;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final File f28084a;

    /* renamed from: b  reason: collision with root package name */
    private int f28085b;

    /* renamed from: c  reason: collision with root package name */
    private int f28086c;

    /* renamed from: d  reason: collision with root package name */
    private final int f28087d;

    /* renamed from: e  reason: collision with root package name */
    private final int f28088e;

    /* renamed from: f  reason: collision with root package name */
    private final String f28089f;

    public a(File file, int i10, int i11, int i12, int i13, String mimeType) {
        Intrinsics.checkNotNullParameter(file, "file");
        Intrinsics.checkNotNullParameter(mimeType, "mimeType");
        this.f28084a = file;
        this.f28085b = i10;
        this.f28086c = i11;
        this.f28087d = i12;
        this.f28088e = i13;
        this.f28089f = mimeType;
    }

    public final int a() {
        return this.f28088e;
    }

    public final File b() {
        return this.f28084a;
    }

    public final int c() {
        return this.f28087d;
    }

    public final String d() {
        return this.f28089f;
    }

    public final int e() {
        return this.f28086c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof a) {
            a aVar = (a) obj;
            return Intrinsics.areEqual(this.f28084a, aVar.f28084a) && this.f28085b == aVar.f28085b && this.f28086c == aVar.f28086c && this.f28087d == aVar.f28087d && this.f28088e == aVar.f28088e && Intrinsics.areEqual(this.f28089f, aVar.f28089f);
        }
        return false;
    }

    public final int f() {
        return this.f28085b;
    }

    public int hashCode() {
        return (((((((((this.f28084a.hashCode() * 31) + Integer.hashCode(this.f28085b)) * 31) + Integer.hashCode(this.f28086c)) * 31) + Integer.hashCode(this.f28087d)) * 31) + Integer.hashCode(this.f28088e)) * 31) + this.f28089f.hashCode();
    }

    public String toString() {
        return "MuxerConfig(file=" + this.f28084a + ", recordingWidth=" + this.f28085b + ", recordingHeight=" + this.f28086c + ", frameRate=" + this.f28087d + ", bitRate=" + this.f28088e + ", mimeType=" + this.f28089f + ')';
    }

    public /* synthetic */ a(File file, int i10, int i11, int i12, int i13, String str, int i14, DefaultConstructorMarker defaultConstructorMarker) {
        this(file, i10, i11, i12, i13, (i14 & 32) != 0 ? "video/avc" : str);
    }
}
