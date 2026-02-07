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
    private static final String f52754q = "a";

    /* renamed from: m  reason: collision with root package name */
    int f52755m;

    /* renamed from: n  reason: collision with root package name */
    int f52756n;

    /* renamed from: o  reason: collision with root package name */
    int f52757o;

    /* renamed from: p  reason: collision with root package name */
    private MediaFormat f52758p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(tl.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, nl.a aVar, nl.b bVar) {
        super(eVar, i10, fVar, i11, mediaFormat, iVar, aVar, bVar);
        this.f52755m = 2;
        this.f52756n = 2;
        this.f52757o = 2;
        k();
    }

    private int j() {
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
                            Log.d(f52754q, "Selection end reached on the input stream");
                            return b10;
                        }
                        a10.f40943c.set(0, readSampleData, sampleTime, sampleFlags);
                        this.f52766d.e(a10);
                        this.f52763a.advance();
                        return 2;
                    }
                    a10.f40943c.set(0, 0, -1L, 4);
                    this.f52766d.e(a10);
                    Log.d(f52754q, "EoS reached on the input stream");
                    return 4;
                }
                throw new ol.e(e.a.NO_FRAME_AVAILABLE);
            } else if (c10 != -1) {
                String str = f52754q;
                Log.e(str, "Unhandled value " + c10 + " when decoding an input frame");
            }
        }
        return 2;
    }

    private void k() {
        this.f52758p = this.f52763a.getTrackFormat(this.f52769g);
        this.f52767e.f(this.f52772j);
        this.f52765c.b(null, this.f52758p, this.f52772j);
        this.f52766d.f(this.f52758p, null);
    }

    private int l() {
        int b10 = this.f52766d.b(0L);
        if (b10 >= 0) {
            nl.c d10 = this.f52766d.d(b10);
            if (d10 != null) {
                if (d10.f40943c.presentationTimeUs >= this.f52768f.b() || (d10.f40943c.flags & 4) != 0) {
                    long b11 = d10.f40943c.presentationTimeUs - this.f52768f.b();
                    d10.f40943c.presentationTimeUs = b11;
                    this.f52765c.c(d10, TimeUnit.MICROSECONDS.toNanos(b11));
                }
                this.f52766d.g(b10, false);
                if ((d10.f40943c.flags & 4) != 0) {
                    Log.d(f52754q, "EoS on decoder output stream");
                    return 4;
                }
            } else {
                throw new ol.e(e.a.NO_FRAME_AVAILABLE);
            }
        } else if (b10 != -2) {
            if (b10 != -1) {
                String str = f52754q;
                Log.e(str, "Unhandled value " + b10 + " when receiving decoded input frame");
            }
        } else {
            MediaFormat outputFormat = this.f52766d.getOutputFormat();
            this.f52758p = outputFormat;
            this.f52765c.d(outputFormat, this.f52772j);
            String str2 = f52754q;
            Log.d(str2, "Decoder output format changed: " + this.f52758p);
            return 2;
        }
        return 2;
    }

    private int m() {
        int b10 = this.f52767e.b(0L);
        int i10 = 2;
        if (b10 >= 0) {
            nl.c d10 = this.f52767e.d(b10);
            if (d10 != null) {
                MediaCodec.BufferInfo bufferInfo = d10.f40943c;
                int i11 = bufferInfo.flags;
                if ((i11 & 4) != 0) {
                    Log.d(f52754q, "Encoder produced EoS, we are done");
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
                String str = f52754q;
                Log.e(str, "Unhandled value " + b10 + " when receiving encoded output frame");
            }
            return 2;
        } else {
            MediaFormat outputFormat = this.f52767e.getOutputFormat();
            if (!this.f52771i) {
                MediaFormat a10 = a(this.f52758p, outputFormat);
                this.f52772j = a10;
                this.f52770h = this.f52764b.c(a10, this.f52770h);
                this.f52771i = true;
                this.f52765c.d(this.f52758p, this.f52772j);
            }
            String str2 = f52754q;
            Log.d(str2, "Encoder output format received " + outputFormat);
            return 1;
        }
    }

    @Override // vl.c
    public int g() {
        if (this.f52767e.isRunning() && this.f52766d.isRunning()) {
            if (this.f52755m == 5) {
                this.f52755m = b();
            }
            int i10 = this.f52755m;
            if (i10 != 4 && i10 != 5) {
                this.f52755m = j();
            }
            if (this.f52756n != 4) {
                this.f52756n = l();
            }
            if (this.f52757o != 4) {
                this.f52757o = m();
            }
            int i11 = this.f52757o;
            int i12 = 1;
            if (i11 != 1) {
                i12 = 2;
            }
            int i13 = this.f52755m;
            if ((i13 == 4 || i13 == 5) && this.f52756n == 4 && i11 == 4) {
                return 4;
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
        this.f52765c.release();
        this.f52767e.stop();
        this.f52767e.release();
        this.f52766d.stop();
        this.f52766d.release();
    }
}
