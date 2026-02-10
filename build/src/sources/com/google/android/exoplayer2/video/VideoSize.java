package com.google.android.exoplayer2.video;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import com.google.android.exoplayer2.video.VideoSize;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class VideoSize implements g {

    /* renamed from: p  reason: collision with root package name */
    public static final VideoSize f14173p = new VideoSize(0, 0);

    /* renamed from: q  reason: collision with root package name */
    private static final String f14174q = w0.B0(0);

    /* renamed from: r  reason: collision with root package name */
    private static final String f14175r = w0.B0(1);

    /* renamed from: s  reason: collision with root package name */
    private static final String f14176s = w0.B0(2);

    /* renamed from: t  reason: collision with root package name */
    private static final String f14177t = w0.B0(3);

    /* renamed from: u  reason: collision with root package name */
    public static final g.a f14178u = new g.a() { // from class: pe.z
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return VideoSize.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f14179d;

    /* renamed from: e  reason: collision with root package name */
    public final int f14180e;

    /* renamed from: i  reason: collision with root package name */
    public final int f14181i;

    /* renamed from: o  reason: collision with root package name */
    public final float f14182o;

    public VideoSize(int i10, int i11) {
        this(i10, i11, 0, 1.0f);
    }

    public static /* synthetic */ VideoSize a(Bundle bundle) {
        return new VideoSize(bundle.getInt(f14174q, 0), bundle.getInt(f14175r, 0), bundle.getInt(f14176s, 0), bundle.getFloat(f14177t, 1.0f));
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof VideoSize) {
            VideoSize videoSize = (VideoSize) obj;
            if (this.f14179d == videoSize.f14179d && this.f14180e == videoSize.f14180e && this.f14181i == videoSize.f14181i && this.f14182o == videoSize.f14182o) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((217 + this.f14179d) * 31) + this.f14180e) * 31) + this.f14181i) * 31) + Float.floatToRawIntBits(this.f14182o);
    }

    public VideoSize(int i10, int i11, int i12, float f10) {
        this.f14179d = i10;
        this.f14180e = i11;
        this.f14181i = i12;
        this.f14182o = f10;
    }
}
