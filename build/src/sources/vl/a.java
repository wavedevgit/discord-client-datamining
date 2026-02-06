package vl;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.util.Log;
import java.util.concurrent.TimeUnit;
import ol.e;
import tl.f;
import ul.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends c {

    /* renamed from: q  reason: collision with root package name */
    private static final String f52706q = "a";

    /* renamed from: m  reason: collision with root package name */
    int f52707m;

    /* renamed from: n  reason: collision with root package name */
    int f52708n;

    /* renamed from: o  reason: collision with root package name */
    int f52709o;

    /* renamed from: p  reason: collision with root package name */
    private MediaFormat f52710p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(tl.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, nl.a aVar, nl.b bVar) {
        super(eVar, i10, fVar, i11, mediaFormat, iVar, aVar, bVar);
        this.f52707m = 2;
        this.f52708n = 2;
        this.f52709o = 2;
        k();
    }

    private int j() {
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
                            Log.d(f52706q, "Selection end reached on the input stream");
                            return b10;
                        }
                        a10.f40895c.set(0, readSampleData, sampleTime, sampleFlags);
                        this.f52718d.e(a10);
                        this.f52715a.advance();
                        return 2;
                    }
                    a10.f40895c.set(0, 0, -1L, 4);
                    this.f52718d.e(a10);
                    Log.d(f52706q, "EoS reached on the input stream");
                    return 4;
                }
                throw new ol.e(e.a.NO_FRAME_AVAILABLE);
            } else if (c10 != -1) {
                String str = f52706q;
                Log.e(str, "Unhandled value " + c10 + " when decoding an input frame");
            }
        }
        return 2;
    }

    private void k() {
        this.f52710p = this.f52715a.getTrackFormat(this.f52721g);
        this.f52719e.f(this.f52724j);
        this.f52717c.b(null, this.f52710p, this.f52724j);
        this.f52718d.f(this.f52710p, null);
    }

    private int l() {
        int b10 = this.f52718d.b(0L);
        if (b10 >= 0) {
            nl.c d10 = this.f52718d.d(b10);
            if (d10 != null) {
                if (d10.f40895c.presentationTimeUs >= this.f52720f.b() || (d10.f40895c.flags & 4) != 0) {
                    long b11 = d10.f40895c.presentationTimeUs - this.f52720f.b();
                    d10.f40895c.presentationTimeUs = b11;
                    this.f52717c.c(d10, TimeUnit.MICROSECONDS.toNanos(b11));
                }
                this.f52718d.g(b10, false);
                if ((d10.f40895c.flags & 4) != 0) {
                    Log.d(f52706q, "EoS on decoder output stream");
                    return 4;
                }
            } else {
                throw new ol.e(e.a.NO_FRAME_AVAILABLE);
            }
        } else if (b10 != -2) {
            if (b10 != -1) {
                String str = f52706q;
                Log.e(str, "Unhandled value " + b10 + " when receiving decoded input frame");
            }
        } else {
            MediaFormat outputFormat = this.f52718d.getOutputFormat();
            this.f52710p = outputFormat;
            this.f52717c.d(outputFormat, this.f52724j);
            String str2 = f52706q;
            Log.d(str2, "Decoder output format changed: " + this.f52710p);
            return 2;
        }
        return 2;
    }

    private int m() {
        int b10 = this.f52719e.b(0L);
        int i10 = 2;
        if (b10 >= 0) {
            nl.c d10 = this.f52719e.d(b10);
            if (d10 != null) {
                MediaCodec.BufferInfo bufferInfo = d10.f40895c;
                int i11 = bufferInfo.flags;
                if ((i11 & 4) != 0) {
                    Log.d(f52706q, "Encoder produced EoS, we are done");
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
                String str = f52706q;
                Log.e(str, "Unhandled value " + b10 + " when receiving encoded output frame");
            }
            return 2;
        } else {
            MediaFormat outputFormat = this.f52719e.getOutputFormat();
            if (!this.f52723i) {
                MediaFormat a10 = a(this.f52710p, outputFormat);
                this.f52724j = a10;
                this.f52722h = this.f52716b.c(a10, this.f52722h);
                this.f52723i = true;
                this.f52717c.d(this.f52710p, this.f52724j);
            }
            String str2 = f52706q;
            Log.d(str2, "Encoder output format received " + outputFormat);
            return 1;
        }
    }

    @Override // vl.c
    public int g() {
        if (this.f52719e.isRunning() && this.f52718d.isRunning()) {
            if (this.f52707m == 5) {
                this.f52707m = b();
            }
            int i10 = this.f52707m;
            if (i10 != 4 && i10 != 5) {
                this.f52707m = j();
            }
            if (this.f52708n != 4) {
                this.f52708n = l();
            }
            if (this.f52709o != 4) {
                this.f52709o = m();
            }
            int i11 = this.f52709o;
            int i12 = 1;
            if (i11 != 1) {
                i12 = 2;
            }
            int i13 = this.f52707m;
            if ((i13 == 4 || i13 == 5) && this.f52708n == 4 && i11 == 4) {
                return 4;
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
        this.f52717c.release();
        this.f52719e.stop();
        this.f52719e.release();
        this.f52718d.stop();
        this.f52718d.release();
    }
}
