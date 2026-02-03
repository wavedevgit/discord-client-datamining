package com.google.android.exoplayer2.video;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import com.google.android.exoplayer2.video.VideoSize;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class VideoSize implements g {

    /* renamed from: p  reason: collision with root package name */
    public static final VideoSize f14142p = new VideoSize(0, 0);

    /* renamed from: q  reason: collision with root package name */
    private static final String f14143q = w0.B0(0);

    /* renamed from: r  reason: collision with root package name */
    private static final String f14144r = w0.B0(1);

    /* renamed from: s  reason: collision with root package name */
    private static final String f14145s = w0.B0(2);

    /* renamed from: t  reason: collision with root package name */
    private static final String f14146t = w0.B0(3);

    /* renamed from: u  reason: collision with root package name */
    public static final g.a f14147u = new g.a() { // from class: oe.z
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return VideoSize.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final int f14148d;

    /* renamed from: e  reason: collision with root package name */
    public final int f14149e;

    /* renamed from: i  reason: collision with root package name */
    public final int f14150i;

    /* renamed from: o  reason: collision with root package name */
    public final float f14151o;

    public VideoSize(int i10, int i11) {
        this(i10, i11, 0, 1.0f);
    }

    public static /* synthetic */ VideoSize a(Bundle bundle) {
        return new VideoSize(bundle.getInt(f14143q, 0), bundle.getInt(f14144r, 0), bundle.getInt(f14145s, 0), bundle.getFloat(f14146t, 1.0f));
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof VideoSize) {
            VideoSize videoSize = (VideoSize) obj;
            if (this.f14148d == videoSize.f14148d && this.f14149e == videoSize.f14149e && this.f14150i == videoSize.f14150i && this.f14151o == videoSize.f14151o) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return ((((((217 + this.f14148d) * 31) + this.f14149e) * 31) + this.f14150i) * 31) + Float.floatToRawIntBits(this.f14151o);
    }

    public VideoSize(int i10, int i11, int i12, float f10) {
        this.f14148d = i10;
        this.f14149e = i11;
        this.f14150i = i12;
        this.f14151o = f10;
    }
}
