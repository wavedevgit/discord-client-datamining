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
    private static final String f56194t = "e";

    /* renamed from: m  reason: collision with root package name */
    int f56195m;

    /* renamed from: n  reason: collision with root package name */
    int f56196n;

    /* renamed from: o  reason: collision with root package name */
    int f56197o;

    /* renamed from: p  reason: collision with root package name */
    g f56198p;

    /* renamed from: q  reason: collision with root package name */
    private MediaFormat f56199q;

    /* renamed from: r  reason: collision with root package name */
    private MediaFormat f56200r;

    /* renamed from: s  reason: collision with root package name */
    private xl.e f56201s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(wl.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, ql.a aVar, ql.b bVar) {
        super(eVar, i10, fVar, i11, mediaFormat, iVar, aVar, bVar);
        this.f56195m = 2;
        this.f56196n = 2;
        this.f56197o = 2;
        this.f56200r = mediaFormat;
        if (iVar instanceof g) {
            this.f56198p = (g) iVar;
            l();
            return;
        }
        throw new IllegalArgumentException("Cannot use non-OpenGL video renderer in " + e.class.getSimpleName());
    }

    private xl.e j() {
        Number b10 = zl.e.b(this.f56199q, "frame-rate");
        Number b11 = zl.e.b(this.f56200r, "frame-rate");
        if (b11 == null || b11.intValue() < 1) {
            b11 = b10;
        }
        if (b10 != null && b10.intValue() > b11.intValue()) {
            return new xl.d(b10.intValue(), b11.intValue());
        }
        return null;
    }

    private int k() {
        int sampleTrackIndex = this.f56181a.getSampleTrackIndex();
        if (sampleTrackIndex == this.f56187g || sampleTrackIndex == -1) {
            int c10 = this.f56184d.c(0L);
            if (c10 >= 0) {
                ql.c a10 = this.f56184d.a(c10);
                if (a10 != null) {
                    int readSampleData = this.f56181a.readSampleData(a10.f46024b, 0);
                    long sampleTime = this.f56181a.getSampleTime();
                    int sampleFlags = this.f56181a.getSampleFlags();
                    if (readSampleData >= 0 && (sampleFlags & 4) == 0) {
                        if (sampleTime >= this.f56186f.a()) {
                            a10.f46025c.set(0, 0, -1L, 4);
                            this.f56184d.d(a10);
                            int b10 = b();
                            Log.d(f56194t, "Selection end reached on the input stream");
                            return b10;
                        }
                        a10.f46025c.set(0, readSampleData, sampleTime, sampleFlags);
                        this.f56184d.d(a10);
                        this.f56181a.advance();
                        return 2;
                    }
                    a10.f46025c.set(0, 0, -1L, 4);
                    this.f56184d.d(a10);
                    Log.d(f56194t, "EoS reached on the input stream");
                    return 4;
                }
                throw new rl.e(e.a.NO_FRAME_AVAILABLE);
            } else if (c10 != -1) {
                String str = f56194t;
                Log.e(str, "Unhandled value " + c10 + " when decoding an input frame");
            }
        }
        return 2;
    }

    private void l() {
        this.f56199q = this.f56181a.getTrackFormat(this.f56187g);
        this.f56201s = j();
        this.f56185e.f(this.f56190j);
        this.f56198p.b(this.f56185e.createInputSurface(), this.f56199q, this.f56200r);
        this.f56184d.f(this.f56199q, this.f56198p.f());
    }

    private int m() {
        boolean z10;
        int b10 = this.f56184d.b(0L);
        if (b10 >= 0) {
            ql.c e10 = this.f56184d.e(b10);
            if (e10 != null) {
                MediaCodec.BufferInfo bufferInfo = e10.f46025c;
                boolean z11 = false;
                if ((bufferInfo.flags & 4) != 0) {
                    Log.d(f56194t, "EoS on decoder output stream");
                    this.f56184d.g(b10, false);
                    this.f56185e.g();
                    return 4;
                }
                if (bufferInfo.presentationTimeUs >= this.f56186f.b()) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f56184d.g(b10, z10);
                xl.e eVar = this.f56201s;
                if (eVar == null || eVar.a()) {
                    z11 = true;
                }
                if (z10 && z11) {
                    this.f56198p.d(null, TimeUnit.MICROSECONDS.toNanos(e10.f46025c.presentationTimeUs - this.f56186f.b()));
                    return 2;
                }
                return 3;
            }
            throw new rl.e(e.a.NO_FRAME_AVAILABLE);
        } else if (b10 != -2) {
            if (b10 != -1) {
                Log.e(f56194t, "Unhandled value " + b10 + " when receiving decoded input frame");
            }
            return 2;
        } else {
            MediaFormat a10 = a(this.f56199q, this.f56184d.getOutputFormat());
            this.f56199q = a10;
            this.f56198p.c(a10, this.f56200r);
            Log.d(f56194t, "Decoder output format changed: " + this.f56199q);
            return 2;
        }
    }

    private int n() {
        int b10 = this.f56185e.b(0L);
        int i10 = 2;
        if (b10 >= 0) {
            ql.c e10 = this.f56185e.e(b10);
            if (e10 != null) {
                MediaCodec.BufferInfo bufferInfo = e10.f46025c;
                int i11 = bufferInfo.flags;
                if ((i11 & 4) != 0) {
                    Log.d(f56194t, "Encoder produced EoS, we are done");
                    this.f56192l = 1.0f;
                    i10 = 4;
                } else if (bufferInfo.size > 0 && (i11 & 2) == 0) {
                    this.f56182b.b(this.f56188h, e10.f46024b, bufferInfo);
                    long j10 = this.f56191k;
                    if (j10 > 0) {
                        this.f56192l = ((float) e10.f46025c.presentationTimeUs) / ((float) j10);
                    }
                }
                this.f56185e.h(b10);
                return i10;
            }
            throw new rl.e(e.a.NO_FRAME_AVAILABLE);
        } else if (b10 != -2) {
            if (b10 != -1) {
                String str = f56194t;
                Log.e(str, "Unhandled value " + b10 + " when receiving encoded output frame");
            }
            return 2;
        } else {
            MediaFormat outputFormat = this.f56185e.getOutputFormat();
            if (!this.f56189i) {
                MediaFormat a10 = a(this.f56199q, outputFormat);
                this.f56190j = a10;
                this.f56200r = a10;
                this.f56188h = this.f56182b.c(a10, this.f56188h);
                this.f56189i = true;
                this.f56198p.c(this.f56199q, this.f56200r);
            }
            String str2 = f56194t;
            Log.d(str2, "Encoder output format received " + outputFormat);
            return 1;
        }
    }

    @Override // yl.c
    public int g() {
        if (this.f56185e.isRunning() && this.f56184d.isRunning()) {
            if (this.f56195m == 5) {
                this.f56195m = b();
            }
            int i10 = this.f56195m;
            if (i10 != 4 && i10 != 5) {
                this.f56195m = k();
            }
            if (this.f56196n != 4) {
                this.f56196n = m();
            }
            if (this.f56197o != 4) {
                this.f56197o = n();
            }
            int i11 = this.f56197o;
            int i12 = 1;
            if (i11 != 1) {
                i12 = 2;
            }
            int i13 = this.f56195m;
            if ((i13 == 4 || i13 == 5) && this.f56196n == 4 && i11 == 4) {
                return 4;
            }
            if (this.f56196n == 3) {
                return 3;
            }
            return i12;
        }
        return -3;
    }

    @Override // yl.c
    public void h() {
        this.f56181a.selectTrack(this.f56187g);
        this.f56185e.start();
        this.f56184d.start();
    }

    @Override // yl.c
    public void i() {
        this.f56185e.stop();
        this.f56185e.release();
        this.f56184d.stop();
        this.f56184d.release();
        this.f56198p.release();
    }
}
