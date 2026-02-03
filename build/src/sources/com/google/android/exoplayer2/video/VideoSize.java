package com.google.android.exoplayer2.video;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import com.google.android.exoplayer2.video.VideoSize;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class VideoSize implements g {

    /* renamed from: p  reason: collision with root package name */
    public static final VideoSize f13110p = new VideoSize(0, 0);

    /* renamed from: q  reason: collision with root package name */
    private static final String f13111q = w0.B0(0);

    /* renamed from: r  reason: collision with root package name */
    private static final String f13112r = w0.B0(1);

    /* renamed from: s  reason: collision with root package name */
    private static final String f13113s = w0.B0(2);

    /* renamed from: t  reason: collision with root package name */
    private static final String f13114t = w0.B0(3);

    /* renamed from: u  reason: collision with root package name */
    public static final g.a f13115u = new g.a() { // from class: oe.z
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return VideoSize.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f13116d;

    /* renamed from: e  reason: collision with root package name */
    public final int f13117e;

    /* renamed from: i  reason: collision with root package name */
    public final int f13118i;

    /* renamed from: o  reason: collision with root package name */
    public final float f13119o;

    public VideoSize(int i10, int i11) {
        this(i10, i11, 0, 1.0f);
    }

    public static /* synthetic */ VideoSize a(Bundle bundle) {
        return new VideoSize(bundle.getInt(f13111q, 0), bundle.getInt(f13112r, 0), bundle.getInt(f13113s, 0), bundle.getFloat(f13114t, 1.0f));
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof VideoSize) {
            VideoSize videoSize = (VideoSize) obj;
            if (this.f13116d == videoSize.f13116d && this.f13117e == videoSize.f13117e && this.f13118i == videoSize.f13118i && this.f13119o == videoSize.f13119o) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((217 + this.f13116d) * 31) + this.f13117e) * 31) + this.f13118i) * 31) + Float.floatToRawIntBits(this.f13119o);
    }

    public VideoSize(int i10, int i11, int i12, float f10) {
        this.f13116d = i10;
        this.f13117e = i11;
        this.f13118i = i12;
        this.f13119o = f10;
    }
}
