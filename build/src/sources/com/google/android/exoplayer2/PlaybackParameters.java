package com.google.android.exoplayer2;

import android.os.Bundle;
import com.google.android.exoplayer2.PlaybackParameters;
import com.google.android.exoplayer2.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class PlaybackParameters implements g {

    /* renamed from: o  reason: collision with root package name */
    public static final PlaybackParameters f12550o = new PlaybackParameters(1.0f);

    /* renamed from: p  reason: collision with root package name */
    private static final String f12551p = oe.w0.B0(0);

    /* renamed from: q  reason: collision with root package name */
    private static final String f12552q = oe.w0.B0(1);

    /* renamed from: r  reason: collision with root package name */
    public static final g.a f12553r = new g.a() { // from class: mc.n0
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return PlaybackParameters.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final float f12554d;

    /* renamed from: e  reason: collision with root package name */
    public final float f12555e;

    /* renamed from: i  reason: collision with root package name */
    private final int f12556i;

    public PlaybackParameters(float f10) {
        this(f10, 1.0f);
    }

    public static /* synthetic */ PlaybackParameters a(Bundle bundle) {
        return new PlaybackParameters(bundle.getFloat(f12551p, 1.0f), bundle.getFloat(f12552q, 1.0f));
    }

    public long b(long j10) {
        return j10 * this.f12556i;
    }

    public PlaybackParameters c(float f10) {
        return new PlaybackParameters(f10, this.f12555e);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && PlaybackParameters.class == obj.getClass()) {
            PlaybackParameters playbackParameters = (PlaybackParameters) obj;
            if (this.f12554d == playbackParameters.f12554d && this.f12555e == playbackParameters.f12555e) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((527 + Float.floatToRawIntBits(this.f12554d)) * 31) + Float.floatToRawIntBits(this.f12555e);
    }

    public String toString() {
        return oe.w0.D("PlaybackParameters(speed=%.2f, pitch=%.2f)", Float.valueOf(this.f12554d), Float.valueOf(this.f12555e));
    }

    public PlaybackParameters(float f10, float f11) {
        oe.a.a(f10 > 0.0f);
        oe.a.a(f11 > 0.0f);
        this.f12554d = f10;
        this.f12555e = f11;
        this.f12556i = Math.round(f10 * 1000.0f);
    }
}
