package com.google.android.exoplayer2.video;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import com.google.android.exoplayer2.video.VideoSize;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class VideoSize implements g {

    /* renamed from: p  reason: collision with root package name */
    public static final VideoSize f14174p = new VideoSize(0, 0);

    /* renamed from: q  reason: collision with root package name */
    private static final String f14175q = w0.B0(0);

    /* renamed from: r  reason: collision with root package name */
    private static final String f14176r = w0.B0(1);

    /* renamed from: s  reason: collision with root package name */
    private static final String f14177s = w0.B0(2);

    /* renamed from: t  reason: collision with root package name */
    private static final String f14178t = w0.B0(3);

    /* renamed from: u  reason: collision with root package name */
    public static final g.a f14179u = new g.a() { // from class: pe.z
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return VideoSize.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f14180d;

    /* renamed from: e  reason: collision with root package name */
    public final int f14181e;

    /* renamed from: i  reason: collision with root package name */
    public final int f14182i;

    /* renamed from: o  reason: collision with root package name */
    public final float f14183o;

    public VideoSize(int i10, int i11) {
        this(i10, i11, 0, 1.0f);
    }

    public static /* synthetic */ VideoSize a(Bundle bundle) {
        return new VideoSize(bundle.getInt(f14175q, 0), bundle.getInt(f14176r, 0), bundle.getInt(f14177s, 0), bundle.getFloat(f14178t, 1.0f));
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof VideoSize) {
            VideoSize videoSize = (VideoSize) obj;
            if (this.f14180d == videoSize.f14180d && this.f14181e == videoSize.f14181e && this.f14182i == videoSize.f14182i && this.f14183o == videoSize.f14183o) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((217 + this.f14180d) * 31) + this.f14181e) * 31) + this.f14182i) * 31) + Float.floatToRawIntBits(this.f14183o);
    }

    public VideoSize(int i10, int i11, int i12, float f10) {
        this.f14180d = i10;
        this.f14181e = i11;
        this.f14182i = i12;
        this.f14183o = f10;
    }
}
