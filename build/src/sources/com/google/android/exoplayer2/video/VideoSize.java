package com.google.android.exoplayer2.video;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import com.google.android.exoplayer2.video.VideoSize;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class VideoSize implements g {

    /* renamed from: p  reason: collision with root package name */
    public static final VideoSize f13596p = new VideoSize(0, 0);

    /* renamed from: q  reason: collision with root package name */
    private static final String f13597q = w0.B0(0);

    /* renamed from: r  reason: collision with root package name */
    private static final String f13598r = w0.B0(1);

    /* renamed from: s  reason: collision with root package name */
    private static final String f13599s = w0.B0(2);

    /* renamed from: t  reason: collision with root package name */
    private static final String f13600t = w0.B0(3);

    /* renamed from: u  reason: collision with root package name */
    public static final g.a f13601u = new g.a() { // from class: pe.z
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return VideoSize.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f13602d;

    /* renamed from: e  reason: collision with root package name */
    public final int f13603e;

    /* renamed from: i  reason: collision with root package name */
    public final int f13604i;

    /* renamed from: o  reason: collision with root package name */
    public final float f13605o;

    public VideoSize(int i10, int i11) {
        this(i10, i11, 0, 1.0f);
    }

    public static /* synthetic */ VideoSize a(Bundle bundle) {
        return new VideoSize(bundle.getInt(f13597q, 0), bundle.getInt(f13598r, 0), bundle.getInt(f13599s, 0), bundle.getFloat(f13600t, 1.0f));
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof VideoSize) {
            VideoSize videoSize = (VideoSize) obj;
            if (this.f13602d == videoSize.f13602d && this.f13603e == videoSize.f13603e && this.f13604i == videoSize.f13604i && this.f13605o == videoSize.f13605o) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((217 + this.f13602d) * 31) + this.f13603e) * 31) + this.f13604i) * 31) + Float.floatToRawIntBits(this.f13605o);
    }

    public VideoSize(int i10, int i11, int i12, float f10) {
        this.f13602d = i10;
        this.f13603e = i11;
        this.f13604i = i12;
        this.f13605o = f10;
    }
}
