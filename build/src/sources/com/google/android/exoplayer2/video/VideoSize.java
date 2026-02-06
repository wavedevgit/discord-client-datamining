package com.google.android.exoplayer2.video;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import com.google.android.exoplayer2.video.VideoSize;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class VideoSize implements g {

    /* renamed from: p  reason: collision with root package name */
    public static final VideoSize f13456p = new VideoSize(0, 0);

    /* renamed from: q  reason: collision with root package name */
    private static final String f13457q = w0.B0(0);

    /* renamed from: r  reason: collision with root package name */
    private static final String f13458r = w0.B0(1);

    /* renamed from: s  reason: collision with root package name */
    private static final String f13459s = w0.B0(2);

    /* renamed from: t  reason: collision with root package name */
    private static final String f13460t = w0.B0(3);

    /* renamed from: u  reason: collision with root package name */
    public static final g.a f13461u = new g.a() { // from class: oe.z
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return VideoSize.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f13462d;

    /* renamed from: e  reason: collision with root package name */
    public final int f13463e;

    /* renamed from: i  reason: collision with root package name */
    public final int f13464i;

    /* renamed from: o  reason: collision with root package name */
    public final float f13465o;

    public VideoSize(int i10, int i11) {
        this(i10, i11, 0, 1.0f);
    }

    public static /* synthetic */ VideoSize a(Bundle bundle) {
        return new VideoSize(bundle.getInt(f13457q, 0), bundle.getInt(f13458r, 0), bundle.getInt(f13459s, 0), bundle.getFloat(f13460t, 1.0f));
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof VideoSize) {
            VideoSize videoSize = (VideoSize) obj;
            if (this.f13462d == videoSize.f13462d && this.f13463e == videoSize.f13463e && this.f13464i == videoSize.f13464i && this.f13465o == videoSize.f13465o) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((217 + this.f13462d) * 31) + this.f13463e) * 31) + this.f13464i) * 31) + Float.floatToRawIntBits(this.f13465o);
    }

    public VideoSize(int i10, int i11, int i12, float f10) {
        this.f13462d = i10;
        this.f13463e = i11;
        this.f13464i = i12;
        this.f13465o = f10;
    }
}
