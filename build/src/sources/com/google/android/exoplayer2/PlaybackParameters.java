package com.google.android.exoplayer2;

import android.os.Bundle;
import com.google.android.exoplayer2.PlaybackParameters;
import com.google.android.exoplayer2.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class PlaybackParameters implements g {

    /* renamed from: o  reason: collision with root package name */
    public static final PlaybackParameters f12580o = new PlaybackParameters(1.0f);

    /* renamed from: p  reason: collision with root package name */
    private static final String f12581p = ne.w0.B0(0);

    /* renamed from: q  reason: collision with root package name */
    private static final String f12582q = ne.w0.B0(1);

    /* renamed from: r  reason: collision with root package name */
    public static final g.a f12583r = new g.a() { // from class: lc.n0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return PlaybackParameters.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final float f12584d;

    /* renamed from: e  reason: collision with root package name */
    public final float f12585e;

    /* renamed from: i  reason: collision with root package name */
    private final int f12586i;

    public PlaybackParameters(float f10) {
        this(f10, 1.0f);
    }

    public static /* synthetic */ PlaybackParameters a(Bundle bundle) {
        return new PlaybackParameters(bundle.getFloat(f12581p, 1.0f), bundle.getFloat(f12582q, 1.0f));
    }

    public long b(long j10) {
        return j10 * this.f12586i;
    }

    public PlaybackParameters c(float f10) {
        return new PlaybackParameters(f10, this.f12585e);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && PlaybackParameters.class == obj.getClass()) {
            PlaybackParameters playbackParameters = (PlaybackParameters) obj;
            if (this.f12584d == playbackParameters.f12584d && this.f12585e == playbackParameters.f12585e) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((527 + Float.floatToRawIntBits(this.f12584d)) * 31) + Float.floatToRawIntBits(this.f12585e);
    }

    public String toString() {
        return ne.w0.D("PlaybackParameters(speed=%.2f, pitch=%.2f)", Float.valueOf(this.f12584d), Float.valueOf(this.f12585e));
    }

    public PlaybackParameters(float f10, float f11) {
        ne.a.a(f10 > 0.0f);
        ne.a.a(f11 > 0.0f);
        this.f12584d = f10;
        this.f12585e = f11;
        this.f12586i = Math.round(f10 * 1000.0f);
    }
}
