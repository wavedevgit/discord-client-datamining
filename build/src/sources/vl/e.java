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
    private static final String f52728t = "e";

    /* renamed from: m  reason: collision with root package name */
    int f52729m;

    /* renamed from: n  reason: collision with root package name */
    int f52730n;

    /* renamed from: o  reason: collision with root package name */
    int f52731o;

    /* renamed from: p  reason: collision with root package name */
    g f52732p;

    /* renamed from: q  reason: collision with root package name */
    private MediaFormat f52733q;

    /* renamed from: r  reason: collision with root package name */
    private MediaFormat f52734r;

    /* renamed from: s  reason: collision with root package name */
    private ul.e f52735s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(tl.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, nl.a aVar, nl.b bVar) {
        super(eVar, i10, fVar, i11, mediaFormat, iVar, aVar, bVar);
        this.f52729m = 2;
        this.f52730n = 2;
        this.f52731o = 2;
        this.f52734r = mediaFormat;
        if (iVar instanceof g) {
            this.f52732p = (g) iVar;
            l();
            return;
        }
        throw new IllegalArgumentException("Cannot use non-OpenGL video renderer in " + e.class.getSimpleName());
    }

    private ul.e j() {
        Number b10 = wl.e.b(this.f52733q, "frame-rate");
        Number b11 = wl.e.b(this.f52734r, "frame-rate");
        if (b11 == null || b11.intValue() < 1) {
            b11 = b10;
        }
        if (b10 != null && b10.intValue() > b11.intValue()) {
            return new ul.d(b10.intValue(), b11.intValue());
        }
        return null;
    }

    private int k() {
        int sampleTrackIndex = this.f52715a.getSampleTrackIndex();
        if (sampleTrackIndex == this.f52721g || sampleTrackIndex == -1) {
            int c10 = this.f52718d.c(0L);
            if (c10 >= 0) {
                nl.c a10 = this.f52718d.a(c10);
                if (a10 != null) {
                    int readSampleData = this.f52715a.readSampleData(a10.f40894b, 0);
                    long sampleTime = this.f52715a.getSampleTime();
                    int sampleFlags = this.f52715a.getSampleFlags();
                    if (readSampleData >= 0 && (sampleFlags & 4) == 0) {
                        if (sampleTime >= this.f52720f.a()) {
                            a10.f40895c.set(0, 0, -1L, 4);
                            this.f52718d.e(a10);
                            int b10 = b();
                            Log.d(f52728t, "Selection end reached on the input stream");
                            return b10;
                        }
                        a10.f40895c.set(0, readSampleData, sampleTime, sampleFlags);
                        this.f52718d.e(a10);
                        this.f52715a.advance();
                        return 2;
                    }
                    a10.f40895c.set(0, 0, -1L, 4);
                    this.f52718d.e(a10);
                    Log.d(f52728t, "EoS reached on the input stream");
                    return 4;
                }
                throw new ol.e(e.a.NO_FRAME_AVAILABLE);
            } else if (c10 != -1) {
                String str = f52728t;
                Log.e(str, "Unhandled value " + c10 + " when decoding an input frame");
            }
        }
        return 2;
    }

    private void l() {
        this.f52733q = this.f52715a.getTrackFormat(this.f52721g);
        this.f52735s = j();
        this.f52719e.f(this.f52724j);
        this.f52732p.b(this.f52719e.createInputSurface(), this.f52733q, this.f52734r);
        this.f52718d.f(this.f52733q, this.f52732p.f());
    }

    private int m() {
        boolean z10;
        int b10 = this.f52718d.b(0L);
        if (b10 >= 0) {
            nl.c d10 = this.f52718d.d(b10);
            if (d10 != null) {
                MediaCodec.BufferInfo bufferInfo = d10.f40895c;
                boolean z11 = false;
                if ((bufferInfo.flags & 4) != 0) {
                    Log.d(f52728t, "EoS on decoder output stream");
                    this.f52718d.g(b10, false);
                    this.f52719e.g();
                    return 4;
                }
                if (bufferInfo.presentationTimeUs >= this.f52720f.b()) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f52718d.g(b10, z10);
                ul.e eVar = this.f52735s;
                if (eVar == null || eVar.a()) {
                    z11 = true;
                }
                if (z10 && z11) {
                    this.f52732p.c(null, TimeUnit.MICROSECONDS.toNanos(d10.f40895c.presentationTimeUs - this.f52720f.b()));
                    return 2;
                }
                return 3;
            }
            throw new ol.e(e.a.NO_FRAME_AVAILABLE);
        } else if (b10 != -2) {
            if (b10 != -1) {
                Log.e(f52728t, "Unhandled value " + b10 + " when receiving decoded input frame");
            }
            return 2;
        } else {
            MediaFormat a10 = a(this.f52733q, this.f52718d.getOutputFormat());
            this.f52733q = a10;
            this.f52732p.d(a10, this.f52734r);
            Log.d(f52728t, "Decoder output format changed: " + this.f52733q);
            return 2;
        }
    }

    private int n() {
        int b10 = this.f52719e.b(0L);
        int i10 = 2;
        if (b10 >= 0) {
            nl.c d10 = this.f52719e.d(b10);
            if (d10 != null) {
                MediaCodec.BufferInfo bufferInfo = d10.f40895c;
                int i11 = bufferInfo.flags;
                if ((i11 & 4) != 0) {
                    Log.d(f52728t, "Encoder produced EoS, we are done");
                    this.f52726l = 1.0f;
                    i10 = 4;
                } else if (bufferInfo.size > 0 && (i11 & 2) == 0) {
                    this.f52716b.b(this.f52722h, d10.f40894b, bufferInfo);
                    long j10 = this.f52725k;
                    if (j10 > 0) {
                        this.f52726l = ((float) d10.f40895c.presentationTimeUs) / ((float) j10);
                    }
                }
                this.f52719e.h(b10);
                return i10;
            }
            throw new ol.e(e.a.NO_FRAME_AVAILABLE);
        } else if (b10 != -2) {
            if (b10 != -1) {
                String str = f52728t;
                Log.e(str, "Unhandled value " + b10 + " when receiving encoded output frame");
            }
            return 2;
        } else {
            MediaFormat outputFormat = this.f52719e.getOutputFormat();
            if (!this.f52723i) {
                MediaFormat a10 = a(this.f52733q, outputFormat);
                this.f52724j = a10;
                this.f52734r = a10;
                this.f52722h = this.f52716b.c(a10, this.f52722h);
                this.f52723i = true;
                this.f52732p.d(this.f52733q, this.f52734r);
            }
            String str2 = f52728t;
            Log.d(str2, "Encoder output format received " + outputFormat);
            return 1;
        }
    }

    @Override // vl.c
    public int g() {
        if (this.f52719e.isRunning() && this.f52718d.isRunning()) {
            if (this.f52729m == 5) {
                this.f52729m = b();
            }
            int i10 = this.f52729m;
            if (i10 != 4 && i10 != 5) {
                this.f52729m = k();
            }
            if (this.f52730n != 4) {
                this.f52730n = m();
            }
            if (this.f52731o != 4) {
                this.f52731o = n();
            }
            int i11 = this.f52731o;
            int i12 = 1;
            if (i11 != 1) {
                i12 = 2;
            }
            int i13 = this.f52729m;
            if ((i13 == 4 || i13 == 5) && this.f52730n == 4 && i11 == 4) {
                return 4;
            }
            if (this.f52730n == 3) {
                return 3;
            }
            return i12;
        }
        return -3;
    }

    @Override // vl.c
    public void h() {
        this.f52715a.selectTrack(this.f52721g);
        this.f52719e.start();
        this.f52718d.start();
    }

    @Override // vl.c
    public void i() {
        this.f52719e.stop();
        this.f52719e.release();
        this.f52718d.stop();
        this.f52718d.release();
        this.f52732p.release();
    }
}
