package ql;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.util.Log;
import java.util.concurrent.TimeUnit;
import jl.e;
import ol.f;
import pl.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends c {

    /* renamed from: q  reason: collision with root package name */
    private static final String f47911q = "a";

    /* renamed from: m  reason: collision with root package name */
    int f47912m;

    /* renamed from: n  reason: collision with root package name */
    int f47913n;

    /* renamed from: o  reason: collision with root package name */
    int f47914o;

    /* renamed from: p  reason: collision with root package name */
    private MediaFormat f47915p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(ol.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, il.a aVar, il.b bVar) {
        super(eVar, i10, fVar, i11, mediaFormat, iVar, aVar, bVar);
        this.f47912m = 2;
        this.f47913n = 2;
        this.f47914o = 2;
        k();
    }

    private int j() {
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
                            Log.d(f47911q, "Selection end reached on the input stream");
                            return b10;
                        }
                        a10.f28464c.set(0, readSampleData, sampleTime, sampleFlags);
                        this.f47923d.c(a10);
                        this.f47920a.advance();
                        return 2;
                    }
                    a10.f28464c.set(0, 0, -1L, 4);
                    this.f47923d.c(a10);
                    Log.d(f47911q, "EoS reached on the input stream");
                    return 4;
                }
                throw new jl.e(e.a.NO_FRAME_AVAILABLE);
            } else if (d10 != -1) {
                String str = f47911q;
                Log.e(str, "Unhandled value " + d10 + " when decoding an input frame");
            }
        }
        return 2;
    }

    private void k() {
        this.f47915p = this.f47920a.getTrackFormat(this.f47926g);
        this.f47924e.f(this.f47929j);
        this.f47922c.c(null, this.f47915p, this.f47929j);
        this.f47923d.f(this.f47915p, null);
    }

    private int l() {
        int b10 = this.f47923d.b(0L);
        if (b10 >= 0) {
            il.c e10 = this.f47923d.e(b10);
            if (e10 != null) {
                if (e10.f28464c.presentationTimeUs >= this.f47925f.b() || (e10.f28464c.flags & 4) != 0) {
                    long b11 = e10.f28464c.presentationTimeUs - this.f47925f.b();
                    e10.f28464c.presentationTimeUs = b11;
                    this.f47922c.b(e10, TimeUnit.MICROSECONDS.toNanos(b11));
                }
                this.f47923d.g(b10, false);
                if ((e10.f28464c.flags & 4) != 0) {
                    Log.d(f47911q, "EoS on decoder output stream");
                    return 4;
                }
            } else {
                throw new jl.e(e.a.NO_FRAME_AVAILABLE);
            }
        } else if (b10 != -2) {
            if (b10 != -1) {
                String str = f47911q;
                Log.e(str, "Unhandled value " + b10 + " when receiving decoded input frame");
            }
        } else {
            MediaFormat outputFormat = this.f47923d.getOutputFormat();
            this.f47915p = outputFormat;
            this.f47922c.d(outputFormat, this.f47929j);
            String str2 = f47911q;
            Log.d(str2, "Decoder output format changed: " + this.f47915p);
            return 2;
        }
        return 2;
    }

    private int m() {
        int b10 = this.f47924e.b(0L);
        int i10 = 2;
        if (b10 >= 0) {
            il.c e10 = this.f47924e.e(b10);
            if (e10 != null) {
                MediaCodec.BufferInfo bufferInfo = e10.f28464c;
                int i11 = bufferInfo.flags;
                if ((i11 & 4) != 0) {
                    Log.d(f47911q, "Encoder produced EoS, we are done");
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
                String str = f47911q;
                Log.e(str, "Unhandled value " + b10 + " when receiving encoded output frame");
            }
            return 2;
        } else {
            MediaFormat outputFormat = this.f47924e.getOutputFormat();
            if (!this.f47928i) {
                MediaFormat a10 = a(this.f47915p, outputFormat);
                this.f47929j = a10;
                this.f47927h = this.f47921b.c(a10, this.f47927h);
                this.f47928i = true;
                this.f47922c.d(this.f47915p, this.f47929j);
            }
            String str2 = f47911q;
            Log.d(str2, "Encoder output format received " + outputFormat);
            return 1;
        }
    }

    @Override // ql.c
    public int g() {
        if (this.f47924e.isRunning() && this.f47923d.isRunning()) {
            if (this.f47912m == 5) {
                this.f47912m = b();
            }
            int i10 = this.f47912m;
            if (i10 != 4 && i10 != 5) {
                this.f47912m = j();
            }
            if (this.f47913n != 4) {
                this.f47913n = l();
            }
            if (this.f47914o != 4) {
                this.f47914o = m();
            }
            int i11 = this.f47914o;
            int i12 = 1;
            if (i11 != 1) {
                i12 = 2;
            }
            int i13 = this.f47912m;
            if ((i13 == 4 || i13 == 5) && this.f47913n == 4 && i11 == 4) {
                return 4;
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
        this.f47922c.release();
        this.f47924e.stop();
        this.f47924e.release();
        this.f47923d.stop();
        this.f47923d.release();
    }
}
