package com.google.android.exoplayer2.video;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import com.google.android.exoplayer2.video.VideoSize;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class VideoSize implements g {

    /* renamed from: p  reason: collision with root package name */
    public static final VideoSize f13495p = new VideoSize(0, 0);

    /* renamed from: q  reason: collision with root package name */
    private static final String f13496q = w0.B0(0);

    /* renamed from: r  reason: collision with root package name */
    private static final String f13497r = w0.B0(1);

    /* renamed from: s  reason: collision with root package name */
    private static final String f13498s = w0.B0(2);

    /* renamed from: t  reason: collision with root package name */
    private static final String f13499t = w0.B0(3);

    /* renamed from: u  reason: collision with root package name */
    public static final g.a f13500u = new g.a() { // from class: oe.z
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return VideoSize.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f13501d;

    /* renamed from: e  reason: collision with root package name */
    public final int f13502e;

    /* renamed from: i  reason: collision with root package name */
    public final int f13503i;

    /* renamed from: o  reason: collision with root package name */
    public final float f13504o;

    public VideoSize(int i10, int i11) {
        this(i10, i11, 0, 1.0f);
    }

    public static /* synthetic */ VideoSize a(Bundle bundle) {
        return new VideoSize(bundle.getInt(f13496q, 0), bundle.getInt(f13497r, 0), bundle.getInt(f13498s, 0), bundle.getFloat(f13499t, 1.0f));
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof VideoSize) {
            VideoSize videoSize = (VideoSize) obj;
            if (this.f13501d == videoSize.f13501d && this.f13502e == videoSize.f13502e && this.f13503i == videoSize.f13503i && this.f13504o == videoSize.f13504o) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((217 + this.f13501d) * 31) + this.f13502e) * 31) + this.f13503i) * 31) + Float.floatToRawIntBits(this.f13504o);
    }

    public VideoSize(int i10, int i11, int i12, float f10) {
        this.f13501d = i10;
        this.f13502e = i11;
        this.f13503i = i12;
        this.f13504o = f10;
    }
}
