package vl;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.util.Log;
import java.util.concurrent.TimeUnit;
import ol.e;
import tl.f;
import ul.g;
import ul.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e extends c {

    /* renamed from: t  reason: collision with root package name */
    private static final String f52776t = "e";

    /* renamed from: m  reason: collision with root package name */
    int f52777m;

    /* renamed from: n  reason: collision with root package name */
    int f52778n;

    /* renamed from: o  reason: collision with root package name */
    int f52779o;

    /* renamed from: p  reason: collision with root package name */
    g f52780p;

    /* renamed from: q  reason: collision with root package name */
    private MediaFormat f52781q;

    /* renamed from: r  reason: collision with root package name */
    private MediaFormat f52782r;

    /* renamed from: s  reason: collision with root package name */
    private ul.e f52783s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(tl.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, nl.a aVar, nl.b bVar) {
        super(eVar, i10, fVar, i11, mediaFormat, iVar, aVar, bVar);
        this.f52777m = 2;
        this.f52778n = 2;
        this.f52779o = 2;
        this.f52782r = mediaFormat;
        if (iVar instanceof g) {
            this.f52780p = (g) iVar;
            l();
            return;
        }
        throw new IllegalArgumentException("Cannot use non-OpenGL video renderer in " + e.class.getSimpleName());
    }

    private ul.e j() {
        Number b10 = wl.e.b(this.f52781q, "frame-rate");
        Number b11 = wl.e.b(this.f52782r, "frame-rate");
        if (b11 == null || b11.intValue() < 1) {
            b11 = b10;
        }
        if (b10 != null && b10.intValue() > b11.intValue()) {
            return new ul.d(b10.intValue(), b11.intValue());
        }
        return null;
    }

    private int k() {
        int sampleTrackIndex = this.f52763a.getSampleTrackIndex();
        if (sampleTrackIndex == this.f52769g || sampleTrackIndex == -1) {
            int c10 = this.f52766d.c(0L);
            if (c10 >= 0) {
                nl.c a10 = this.f52766d.a(c10);
                if (a10 != null) {
                    int readSampleData = this.f52763a.readSampleData(a10.f40942b, 0);
                    long sampleTime = this.f52763a.getSampleTime();
                    int sampleFlags = this.f52763a.getSampleFlags();
                    if (readSampleData >= 0 && (sampleFlags & 4) == 0) {
                        if (sampleTime >= this.f52768f.a()) {
                            a10.f40943c.set(0, 0, -1L, 4);
                            this.f52766d.e(a10);
                            int b10 = b();
                            Log.d(f52776t, "Selection end reached on the input stream");
                            return b10;
                        }
                        a10.f40943c.set(0, readSampleData, sampleTime, sampleFlags);
                        this.f52766d.e(a10);
                        this.f52763a.advance();
                        return 2;
                    }
                    a10.f40943c.set(0, 0, -1L, 4);
                    this.f52766d.e(a10);
                    Log.d(f52776t, "EoS reached on the input stream");
                    return 4;
                }
                throw new ol.e(e.a.NO_FRAME_AVAILABLE);
            } else if (c10 != -1) {
                String str = f52776t;
                Log.e(str, "Unhandled value " + c10 + " when decoding an input frame");
            }
        }
        return 2;
    }

    private void l() {
        this.f52781q = this.f52763a.getTrackFormat(this.f52769g);
        this.f52783s = j();
        this.f52767e.f(this.f52772j);
        this.f52780p.b(this.f52767e.createInputSurface(), this.f52781q, this.f52782r);
        this.f52766d.f(this.f52781q, this.f52780p.f());
    }

    private int m() {
        boolean z10;
        int b10 = this.f52766d.b(0L);
        if (b10 >= 0) {
            nl.c d10 = this.f52766d.d(b10);
            if (d10 != null) {
                MediaCodec.BufferInfo bufferInfo = d10.f40943c;
                boolean z11 = false;
                if ((bufferInfo.flags & 4) != 0) {
                    Log.d(f52776t, "EoS on decoder output stream");
                    this.f52766d.g(b10, false);
                    this.f52767e.g();
                    return 4;
                }
                if (bufferInfo.presentationTimeUs >= this.f52768f.b()) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f52766d.g(b10, z10);
                ul.e eVar = this.f52783s;
                if (eVar == null || eVar.a()) {
                    z11 = true;
                }
                if (z10 && z11) {
                    this.f52780p.c(null, TimeUnit.MICROSECONDS.toNanos(d10.f40943c.presentationTimeUs - this.f52768f.b()));
                    return 2;
                }
                return 3;
            }
            throw new ol.e(e.a.NO_FRAME_AVAILABLE);
        } else if (b10 != -2) {
            if (b10 != -1) {
                Log.e(f52776t, "Unhandled value " + b10 + " when receiving decoded input frame");
            }
            return 2;
        } else {
            MediaFormat a10 = a(this.f52781q, this.f52766d.getOutputFormat());
            this.f52781q = a10;
            this.f52780p.d(a10, this.f52782r);
            Log.d(f52776t, "Decoder output format changed: " + this.f52781q);
            return 2;
        }
    }

    private int n() {
        int b10 = this.f52767e.b(0L);
        int i10 = 2;
        if (b10 >= 0) {
            nl.c d10 = this.f52767e.d(b10);
            if (d10 != null) {
                MediaCodec.BufferInfo bufferInfo = d10.f40943c;
                int i11 = bufferInfo.flags;
                if ((i11 & 4) != 0) {
                    Log.d(f52776t, "Encoder produced EoS, we are done");
                    this.f52774l = 1.0f;
                    i10 = 4;
                } else if (bufferInfo.size > 0 && (i11 & 2) == 0) {
                    this.f52764b.b(this.f52770h, d10.f40942b, bufferInfo);
                    long j10 = this.f52773k;
                    if (j10 > 0) {
                        this.f52774l = ((float) d10.f40943c.presentationTimeUs) / ((float) j10);
                    }
                }
                this.f52767e.h(b10);
                return i10;
            }
            throw new ol.e(e.a.NO_FRAME_AVAILABLE);
        } else if (b10 != -2) {
            if (b10 != -1) {
                String str = f52776t;
                Log.e(str, "Unhandled value " + b10 + " when receiving encoded output frame");
            }
            return 2;
        } else {
            MediaFormat outputFormat = this.f52767e.getOutputFormat();
            if (!this.f52771i) {
                MediaFormat a10 = a(this.f52781q, outputFormat);
                this.f52772j = a10;
                this.f52782r = a10;
                this.f52770h = this.f52764b.c(a10, this.f52770h);
                this.f52771i = true;
                this.f52780p.d(this.f52781q, this.f52782r);
            }
            String str2 = f52776t;
            Log.d(str2, "Encoder output format received " + outputFormat);
            return 1;
        }
    }

    @Override // vl.c
    public int g() {
        if (this.f52767e.isRunning() && this.f52766d.isRunning()) {
            if (this.f52777m == 5) {
                this.f52777m = b();
            }
            int i10 = this.f52777m;
            if (i10 != 4 && i10 != 5) {
                this.f52777m = k();
            }
            if (this.f52778n != 4) {
                this.f52778n = m();
            }
            if (this.f52779o != 4) {
                this.f52779o = n();
            }
            int i11 = this.f52779o;
            int i12 = 1;
            if (i11 != 1) {
                i12 = 2;
            }
            int i13 = this.f52777m;
            if ((i13 == 4 || i13 == 5) && this.f52778n == 4 && i11 == 4) {
                return 4;
            }
            if (this.f52778n == 3) {
                return 3;
            }
            return i12;
        }
        return -3;
    }

    @Override // vl.c
    public void h() {
        this.f52763a.selectTrack(this.f52769g);
        this.f52767e.start();
        this.f52766d.start();
    }

    @Override // vl.c
    public void i() {
        this.f52767e.stop();
        this.f52767e.release();
        this.f52766d.stop();
        this.f52766d.release();
        this.f52780p.release();
    }
}
