package yl;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.util.Log;
import java.util.concurrent.TimeUnit;
import rl.e;
import wl.f;
import xl.g;
import xl.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e extends c {

    /* renamed from: t  reason: collision with root package name */
    private static final String f55626t = "e";

    /* renamed from: m  reason: collision with root package name */
    int f55627m;

    /* renamed from: n  reason: collision with root package name */
    int f55628n;

    /* renamed from: o  reason: collision with root package name */
    int f55629o;

    /* renamed from: p  reason: collision with root package name */
    g f55630p;

    /* renamed from: q  reason: collision with root package name */
    private MediaFormat f55631q;

    /* renamed from: r  reason: collision with root package name */
    private MediaFormat f55632r;

    /* renamed from: s  reason: collision with root package name */
    private xl.e f55633s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(wl.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, ql.a aVar, ql.b bVar) {
        super(eVar, i10, fVar, i11, mediaFormat, iVar, aVar, bVar);
        this.f55627m = 2;
        this.f55628n = 2;
        this.f55629o = 2;
        this.f55632r = mediaFormat;
        if (iVar instanceof g) {
            this.f55630p = (g) iVar;
            l();
            return;
        }
        throw new IllegalArgumentException("Cannot use non-OpenGL video renderer in " + e.class.getSimpleName());
    }

    private xl.e j() {
        Number b10 = zl.e.b(this.f55631q, "frame-rate");
        Number b11 = zl.e.b(this.f55632r, "frame-rate");
        if (b11 == null || b11.intValue() < 1) {
            b11 = b10;
        }
        if (b10 != null && b10.intValue() > b11.intValue()) {
            return new xl.d(b10.intValue(), b11.intValue());
        }
        return null;
    }

    private int k() {
        int sampleTrackIndex = this.f55613a.getSampleTrackIndex();
        if (sampleTrackIndex == this.f55619g || sampleTrackIndex == -1) {
            int c10 = this.f55616d.c(0L);
            if (c10 >= 0) {
                ql.c a10 = this.f55616d.a(c10);
                if (a10 != null) {
                    int readSampleData = this.f55613a.readSampleData(a10.f45456b, 0);
                    long sampleTime = this.f55613a.getSampleTime();
                    int sampleFlags = this.f55613a.getSampleFlags();
                    if (readSampleData >= 0 && (sampleFlags & 4) == 0) {
                        if (sampleTime >= this.f55618f.a()) {
                            a10.f45457c.set(0, 0, -1L, 4);
                            this.f55616d.d(a10);
                            int b10 = b();
                            Log.d(f55626t, "Selection end reached on the input stream");
                            return b10;
                        }
                        a10.f45457c.set(0, readSampleData, sampleTime, sampleFlags);
                        this.f55616d.d(a10);
                        this.f55613a.advance();
                        return 2;
                    }
                    a10.f45457c.set(0, 0, -1L, 4);
                    this.f55616d.d(a10);
                    Log.d(f55626t, "EoS reached on the input stream");
                    return 4;
                }
                throw new rl.e(e.a.NO_FRAME_AVAILABLE);
            } else if (c10 != -1) {
                String str = f55626t;
                Log.e(str, "Unhandled value " + c10 + " when decoding an input frame");
            }
        }
        return 2;
    }

    private void l() {
        this.f55631q = this.f55613a.getTrackFormat(this.f55619g);
        this.f55633s = j();
        this.f55617e.f(this.f55622j);
        this.f55630p.b(this.f55617e.createInputSurface(), this.f55631q, this.f55632r);
        this.f55616d.f(this.f55631q, this.f55630p.f());
    }

    private int m() {
        boolean z10;
        int b10 = this.f55616d.b(0L);
        if (b10 >= 0) {
            ql.c e10 = this.f55616d.e(b10);
            if (e10 != null) {
                MediaCodec.BufferInfo bufferInfo = e10.f45457c;
                boolean z11 = false;
                if ((bufferInfo.flags & 4) != 0) {
                    Log.d(f55626t, "EoS on decoder output stream");
                    this.f55616d.g(b10, false);
                    this.f55617e.g();
                    return 4;
                }
                if (bufferInfo.presentationTimeUs >= this.f55618f.b()) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f55616d.g(b10, z10);
                xl.e eVar = this.f55633s;
                if (eVar == null || eVar.a()) {
                    z11 = true;
                }
                if (z10 && z11) {
                    this.f55630p.d(null, TimeUnit.MICROSECONDS.toNanos(e10.f45457c.presentationTimeUs - this.f55618f.b()));
                    return 2;
                }
                return 3;
            }
            throw new rl.e(e.a.NO_FRAME_AVAILABLE);
        } else if (b10 != -2) {
            if (b10 != -1) {
                Log.e(f55626t, "Unhandled value " + b10 + " when receiving decoded input frame");
            }
            return 2;
        } else {
            MediaFormat a10 = a(this.f55631q, this.f55616d.getOutputFormat());
            this.f55631q = a10;
            this.f55630p.c(a10, this.f55632r);
            Log.d(f55626t, "Decoder output format changed: " + this.f55631q);
            return 2;
        }
    }

    private int n() {
        int b10 = this.f55617e.b(0L);
        int i10 = 2;
        if (b10 >= 0) {
            ql.c e10 = this.f55617e.e(b10);
            if (e10 != null) {
                MediaCodec.BufferInfo bufferInfo = e10.f45457c;
                int i11 = bufferInfo.flags;
                if ((i11 & 4) != 0) {
                    Log.d(f55626t, "Encoder produced EoS, we are done");
                    this.f55624l = 1.0f;
                    i10 = 4;
                } else if (bufferInfo.size > 0 && (i11 & 2) == 0) {
                    this.f55614b.b(this.f55620h, e10.f45456b, bufferInfo);
                    long j10 = this.f55623k;
                    if (j10 > 0) {
                        this.f55624l = ((float) e10.f45457c.presentationTimeUs) / ((float) j10);
                    }
                }
                this.f55617e.h(b10);
                return i10;
            }
            throw new rl.e(e.a.NO_FRAME_AVAILABLE);
        } else if (b10 != -2) {
            if (b10 != -1) {
                String str = f55626t;
                Log.e(str, "Unhandled value " + b10 + " when receiving encoded output frame");
            }
            return 2;
        } else {
            MediaFormat outputFormat = this.f55617e.getOutputFormat();
            if (!this.f55621i) {
                MediaFormat a10 = a(this.f55631q, outputFormat);
                this.f55622j = a10;
                this.f55632r = a10;
                this.f55620h = this.f55614b.c(a10, this.f55620h);
                this.f55621i = true;
                this.f55630p.c(this.f55631q, this.f55632r);
            }
            String str2 = f55626t;
            Log.d(str2, "Encoder output format received " + outputFormat);
            return 1;
        }
    }

    @Override // yl.c
    public int g() {
        if (this.f55617e.isRunning() && this.f55616d.isRunning()) {
            if (this.f55627m == 5) {
                this.f55627m = b();
            }
            int i10 = this.f55627m;
            if (i10 != 4 && i10 != 5) {
                this.f55627m = k();
            }
            if (this.f55628n != 4) {
                this.f55628n = m();
            }
            if (this.f55629o != 4) {
                this.f55629o = n();
            }
            int i11 = this.f55629o;
            int i12 = 1;
            if (i11 != 1) {
                i12 = 2;
            }
            int i13 = this.f55627m;
            if ((i13 == 4 || i13 == 5) && this.f55628n == 4 && i11 == 4) {
                return 4;
            }
            if (this.f55628n == 3) {
                return 3;
            }
            return i12;
        }
        return -3;
    }

    @Override // yl.c
    public void h() {
        this.f55613a.selectTrack(this.f55619g);
        this.f55617e.start();
        this.f55616d.start();
    }

    @Override // yl.c
    public void i() {
        this.f55617e.stop();
        this.f55617e.release();
        this.f55616d.stop();
        this.f55616d.release();
        this.f55630p.release();
    }
}
