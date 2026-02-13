package yl;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.util.Log;
import java.util.concurrent.TimeUnit;
import rl.e;
import wl.f;
import xl.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends c {

    /* renamed from: q  reason: collision with root package name */
    private static final String f56172q = "a";

    /* renamed from: m  reason: collision with root package name */
    int f56173m;

    /* renamed from: n  reason: collision with root package name */
    int f56174n;

    /* renamed from: o  reason: collision with root package name */
    int f56175o;

    /* renamed from: p  reason: collision with root package name */
    private MediaFormat f56176p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(wl.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, ql.a aVar, ql.b bVar) {
        super(eVar, i10, fVar, i11, mediaFormat, iVar, aVar, bVar);
        this.f56173m = 2;
        this.f56174n = 2;
        this.f56175o = 2;
        k();
    }

    private int j() {
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
                            Log.d(f56172q, "Selection end reached on the input stream");
                            return b10;
                        }
                        a10.f46025c.set(0, readSampleData, sampleTime, sampleFlags);
                        this.f56184d.d(a10);
                        this.f56181a.advance();
                        return 2;
                    }
                    a10.f46025c.set(0, 0, -1L, 4);
                    this.f56184d.d(a10);
                    Log.d(f56172q, "EoS reached on the input stream");
                    return 4;
                }
                throw new rl.e(e.a.NO_FRAME_AVAILABLE);
            } else if (c10 != -1) {
                String str = f56172q;
                Log.e(str, "Unhandled value " + c10 + " when decoding an input frame");
            }
        }
        return 2;
    }

    private void k() {
        this.f56176p = this.f56181a.getTrackFormat(this.f56187g);
        this.f56185e.f(this.f56190j);
        this.f56183c.b(null, this.f56176p, this.f56190j);
        this.f56184d.f(this.f56176p, null);
    }

    private int l() {
        int b10 = this.f56184d.b(0L);
        if (b10 >= 0) {
            ql.c e10 = this.f56184d.e(b10);
            if (e10 != null) {
                if (e10.f46025c.presentationTimeUs >= this.f56186f.b() || (e10.f46025c.flags & 4) != 0) {
                    long b11 = e10.f46025c.presentationTimeUs - this.f56186f.b();
                    e10.f46025c.presentationTimeUs = b11;
                    this.f56183c.d(e10, TimeUnit.MICROSECONDS.toNanos(b11));
                }
                this.f56184d.g(b10, false);
                if ((e10.f46025c.flags & 4) != 0) {
                    Log.d(f56172q, "EoS on decoder output stream");
                    return 4;
                }
            } else {
                throw new rl.e(e.a.NO_FRAME_AVAILABLE);
            }
        } else if (b10 != -2) {
            if (b10 != -1) {
                String str = f56172q;
                Log.e(str, "Unhandled value " + b10 + " when receiving decoded input frame");
            }
        } else {
            MediaFormat outputFormat = this.f56184d.getOutputFormat();
            this.f56176p = outputFormat;
            this.f56183c.c(outputFormat, this.f56190j);
            String str2 = f56172q;
            Log.d(str2, "Decoder output format changed: " + this.f56176p);
            return 2;
        }
        return 2;
    }

    private int m() {
        int b10 = this.f56185e.b(0L);
        int i10 = 2;
        if (b10 >= 0) {
            ql.c e10 = this.f56185e.e(b10);
            if (e10 != null) {
                MediaCodec.BufferInfo bufferInfo = e10.f46025c;
                int i11 = bufferInfo.flags;
                if ((i11 & 4) != 0) {
                    Log.d(f56172q, "Encoder produced EoS, we are done");
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
                String str = f56172q;
                Log.e(str, "Unhandled value " + b10 + " when receiving encoded output frame");
            }
            return 2;
        } else {
            MediaFormat outputFormat = this.f56185e.getOutputFormat();
            if (!this.f56189i) {
                MediaFormat a10 = a(this.f56176p, outputFormat);
                this.f56190j = a10;
                this.f56188h = this.f56182b.c(a10, this.f56188h);
                this.f56189i = true;
                this.f56183c.c(this.f56176p, this.f56190j);
            }
            String str2 = f56172q;
            Log.d(str2, "Encoder output format received " + outputFormat);
            return 1;
        }
    }

    @Override // yl.c
    public int g() {
        if (this.f56185e.isRunning() && this.f56184d.isRunning()) {
            if (this.f56173m == 5) {
                this.f56173m = b();
            }
            int i10 = this.f56173m;
            if (i10 != 4 && i10 != 5) {
                this.f56173m = j();
            }
            if (this.f56174n != 4) {
                this.f56174n = l();
            }
            if (this.f56175o != 4) {
                this.f56175o = m();
            }
            int i11 = this.f56175o;
            int i12 = 1;
            if (i11 != 1) {
                i12 = 2;
            }
            int i13 = this.f56173m;
            if ((i13 == 4 || i13 == 5) && this.f56174n == 4 && i11 == 4) {
                return 4;
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
        this.f56183c.release();
        this.f56185e.stop();
        this.f56185e.release();
        this.f56184d.stop();
        this.f56184d.release();
    }
}
