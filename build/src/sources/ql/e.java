package ql;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.util.Log;
import java.util.concurrent.TimeUnit;
import jl.e;
import ol.f;
import pl.g;
import pl.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e extends c {

    /* renamed from: t  reason: collision with root package name */
    private static final String f47933t = "e";

    /* renamed from: m  reason: collision with root package name */
    int f47934m;

    /* renamed from: n  reason: collision with root package name */
    int f47935n;

    /* renamed from: o  reason: collision with root package name */
    int f47936o;

    /* renamed from: p  reason: collision with root package name */
    g f47937p;

    /* renamed from: q  reason: collision with root package name */
    private MediaFormat f47938q;

    /* renamed from: r  reason: collision with root package name */
    private MediaFormat f47939r;

    /* renamed from: s  reason: collision with root package name */
    private pl.e f47940s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(ol.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, il.a aVar, il.b bVar) {
        super(eVar, i10, fVar, i11, mediaFormat, iVar, aVar, bVar);
        this.f47934m = 2;
        this.f47935n = 2;
        this.f47936o = 2;
        this.f47939r = mediaFormat;
        if (iVar instanceof g) {
            this.f47937p = (g) iVar;
            l();
            return;
        }
        throw new IllegalArgumentException("Cannot use non-OpenGL video renderer in " + e.class.getSimpleName());
    }

    private pl.e j() {
        Number b10 = rl.e.b(this.f47938q, "frame-rate");
        Number b11 = rl.e.b(this.f47939r, "frame-rate");
        if (b11 == null || b11.intValue() < 1) {
            b11 = b10;
        }
        if (b10 != null && b10.intValue() > b11.intValue()) {
            return new pl.d(b10.intValue(), b11.intValue());
        }
        return null;
    }

    private int k() {
        int sampleTrackIndex = this.f47920a.getSampleTrackIndex();
        if (sampleTrackIndex == this.f47926g || sampleTrackIndex == -1) {
            int d10 = this.f47923d.d(0L);
            if (d10 >= 0) {
                il.c a10 = this.f47923d.a(d10);
                if (a10 != null) {
                    int readSampleData = this.f47920a.readSampleData(a10.f28463b, 0);
                    long sampleTime = this.f47920a.getSampleTime();
                    int sampleFlags = this.f47920a.getSampleFlags();
                    if (readSampleData >= 0 && (sampleFlags & 4) == 0) {
                        if (sampleTime >= this.f47925f.a()) {
                            a10.f28464c.set(0, 0, -1L, 4);
                            this.f47923d.c(a10);
                            int b10 = b();
                            Log.d(f47933t, "Selection end reached on the input stream");
                            return b10;
                        }
                        a10.f28464c.set(0, readSampleData, sampleTime, sampleFlags);
                        this.f47923d.c(a10);
                        this.f47920a.advance();
                        return 2;
                    }
                    a10.f28464c.set(0, 0, -1L, 4);
                    this.f47923d.c(a10);
                    Log.d(f47933t, "EoS reached on the input stream");
                    return 4;
                }
                throw new jl.e(e.a.NO_FRAME_AVAILABLE);
            } else if (d10 != -1) {
                String str = f47933t;
                Log.e(str, "Unhandled value " + d10 + " when decoding an input frame");
            }
        }
        return 2;
    }

    private void l() {
        this.f47938q = this.f47920a.getTrackFormat(this.f47926g);
        this.f47940s = j();
        this.f47924e.f(this.f47929j);
        this.f47937p.c(this.f47924e.createInputSurface(), this.f47938q, this.f47939r);
        this.f47923d.f(this.f47938q, this.f47937p.f());
    }

    private int m() {
        boolean z10;
        int b10 = this.f47923d.b(0L);
        if (b10 >= 0) {
            il.c e10 = this.f47923d.e(b10);
            if (e10 != null) {
                MediaCodec.BufferInfo bufferInfo = e10.f28464c;
                boolean z11 = false;
                if ((bufferInfo.flags & 4) != 0) {
                    Log.d(f47933t, "EoS on decoder output stream");
                    this.f47923d.g(b10, false);
                    this.f47924e.g();
                    return 4;
                }
                if (bufferInfo.presentationTimeUs >= this.f47925f.b()) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f47923d.g(b10, z10);
                pl.e eVar = this.f47940s;
                if (eVar == null || eVar.a()) {
                    z11 = true;
                }
                if (z10 && z11) {
                    this.f47937p.b(null, TimeUnit.MICROSECONDS.toNanos(e10.f28464c.presentationTimeUs - this.f47925f.b()));
                    return 2;
                }
                return 3;
            }
            throw new jl.e(e.a.NO_FRAME_AVAILABLE);
        } else if (b10 != -2) {
            if (b10 != -1) {
                Log.e(f47933t, "Unhandled value " + b10 + " when receiving decoded input frame");
            }
            return 2;
        } else {
            MediaFormat a10 = a(this.f47938q, this.f47923d.getOutputFormat());
            this.f47938q = a10;
            this.f47937p.d(a10, this.f47939r);
            Log.d(f47933t, "Decoder output format changed: " + this.f47938q);
            return 2;
        }
    }

    private int n() {
        int b10 = this.f47924e.b(0L);
        int i10 = 2;
        if (b10 >= 0) {
            il.c e10 = this.f47924e.e(b10);
            if (e10 != null) {
                MediaCodec.BufferInfo bufferInfo = e10.f28464c;
                int i11 = bufferInfo.flags;
                if ((i11 & 4) != 0) {
                    Log.d(f47933t, "Encoder produced EoS, we are done");
                    this.f47931l = 1.0f;
                    i10 = 4;
                } else if (bufferInfo.size > 0 && (i11 & 2) == 0) {
                    this.f47921b.b(this.f47927h, e10.f28463b, bufferInfo);
                    long j10 = this.f47930k;
                    if (j10 > 0) {
                        this.f47931l = ((float) e10.f28464c.presentationTimeUs) / ((float) j10);
                    }
                }
                this.f47924e.h(b10);
                return i10;
            }
            throw new jl.e(e.a.NO_FRAME_AVAILABLE);
        } else if (b10 != -2) {
            if (b10 != -1) {
                String str = f47933t;
                Log.e(str, "Unhandled value " + b10 + " when receiving encoded output frame");
            }
            return 2;
        } else {
            MediaFormat outputFormat = this.f47924e.getOutputFormat();
            if (!this.f47928i) {
                MediaFormat a10 = a(this.f47938q, outputFormat);
                this.f47929j = a10;
                this.f47939r = a10;
                this.f47927h = this.f47921b.c(a10, this.f47927h);
                this.f47928i = true;
                this.f47937p.d(this.f47938q, this.f47939r);
            }
            String str2 = f47933t;
            Log.d(str2, "Encoder output format received " + outputFormat);
            return 1;
        }
    }

    @Override // ql.c
    public int g() {
        if (this.f47924e.isRunning() && this.f47923d.isRunning()) {
            if (this.f47934m == 5) {
                this.f47934m = b();
            }
            int i10 = this.f47934m;
            if (i10 != 4 && i10 != 5) {
                this.f47934m = k();
            }
            if (this.f47935n != 4) {
                this.f47935n = m();
            }
            if (this.f47936o != 4) {
                this.f47936o = n();
            }
            int i11 = this.f47936o;
            int i12 = 1;
            if (i11 != 1) {
                i12 = 2;
            }
            int i13 = this.f47934m;
            if ((i13 == 4 || i13 == 5) && this.f47935n == 4 && i11 == 4) {
                return 4;
            }
            if (this.f47935n == 3) {
                return 3;
            }
            return i12;
        }
        return -3;
    }

    @Override // ql.c
    public void h() {
        this.f47920a.selectTrack(this.f47926g);
        this.f47924e.start();
        this.f47923d.start();
    }

    @Override // ql.c
    public void i() {
        this.f47924e.stop();
        this.f47924e.release();
        this.f47923d.stop();
        this.f47923d.release();
        this.f47937p.release();
    }
}
