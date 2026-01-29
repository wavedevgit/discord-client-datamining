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
    private static final String f47490q = "a";

    /* renamed from: m  reason: collision with root package name */
    int f47491m;

    /* renamed from: n  reason: collision with root package name */
    int f47492n;

    /* renamed from: o  reason: collision with root package name */
    int f47493o;

    /* renamed from: p  reason: collision with root package name */
    private MediaFormat f47494p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(ol.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, il.a aVar, il.b bVar) {
        super(eVar, i10, fVar, i11, mediaFormat, iVar, aVar, bVar);
        this.f47491m = 2;
        this.f47492n = 2;
        this.f47493o = 2;
        k();
    }

    private int j() {
        int sampleTrackIndex = this.f47499a.getSampleTrackIndex();
        if (sampleTrackIndex == this.f47505g || sampleTrackIndex == -1) {
            int d10 = this.f47502d.d(0L);
            if (d10 >= 0) {
                il.c a10 = this.f47502d.a(d10);
                if (a10 != null) {
                    int readSampleData = this.f47499a.readSampleData(a10.f28577b, 0);
                    long sampleTime = this.f47499a.getSampleTime();
                    int sampleFlags = this.f47499a.getSampleFlags();
                    if (readSampleData >= 0 && (sampleFlags & 4) == 0) {
                        if (sampleTime >= this.f47504f.a()) {
                            a10.f28578c.set(0, 0, -1L, 4);
                            this.f47502d.c(a10);
                            int b10 = b();
                            Log.d(f47490q, "Selection end reached on the input stream");
                            return b10;
                        }
                        a10.f28578c.set(0, readSampleData, sampleTime, sampleFlags);
                        this.f47502d.c(a10);
                        this.f47499a.advance();
                        return 2;
                    }
                    a10.f28578c.set(0, 0, -1L, 4);
                    this.f47502d.c(a10);
                    Log.d(f47490q, "EoS reached on the input stream");
                    return 4;
                }
                throw new jl.e(e.a.NO_FRAME_AVAILABLE);
            } else if (d10 != -1) {
                String str = f47490q;
                Log.e(str, "Unhandled value " + d10 + " when decoding an input frame");
            }
        }
        return 2;
    }

    private void k() {
        this.f47494p = this.f47499a.getTrackFormat(this.f47505g);
        this.f47503e.f(this.f47508j);
        this.f47501c.c(null, this.f47494p, this.f47508j);
        this.f47502d.f(this.f47494p, null);
    }

    private int l() {
        int b10 = this.f47502d.b(0L);
        if (b10 >= 0) {
            il.c e10 = this.f47502d.e(b10);
            if (e10 != null) {
                if (e10.f28578c.presentationTimeUs >= this.f47504f.b() || (e10.f28578c.flags & 4) != 0) {
                    long b11 = e10.f28578c.presentationTimeUs - this.f47504f.b();
                    e10.f28578c.presentationTimeUs = b11;
                    this.f47501c.b(e10, TimeUnit.MICROSECONDS.toNanos(b11));
                }
                this.f47502d.g(b10, false);
                if ((e10.f28578c.flags & 4) != 0) {
                    Log.d(f47490q, "EoS on decoder output stream");
                    return 4;
                }
            } else {
                throw new jl.e(e.a.NO_FRAME_AVAILABLE);
            }
        } else if (b10 != -2) {
            if (b10 != -1) {
                String str = f47490q;
                Log.e(str, "Unhandled value " + b10 + " when receiving decoded input frame");
            }
        } else {
            MediaFormat outputFormat = this.f47502d.getOutputFormat();
            this.f47494p = outputFormat;
            this.f47501c.d(outputFormat, this.f47508j);
            String str2 = f47490q;
            Log.d(str2, "Decoder output format changed: " + this.f47494p);
            return 2;
        }
        return 2;
    }

    private int m() {
        int b10 = this.f47503e.b(0L);
        int i10 = 2;
        if (b10 >= 0) {
            il.c e10 = this.f47503e.e(b10);
            if (e10 != null) {
                MediaCodec.BufferInfo bufferInfo = e10.f28578c;
                int i11 = bufferInfo.flags;
                if ((i11 & 4) != 0) {
                    Log.d(f47490q, "Encoder produced EoS, we are done");
                    this.f47510l = 1.0f;
                    i10 = 4;
                } else if (bufferInfo.size > 0 && (i11 & 2) == 0) {
                    this.f47500b.b(this.f47506h, e10.f28577b, bufferInfo);
                    long j10 = this.f47509k;
                    if (j10 > 0) {
                        this.f47510l = ((float) e10.f28578c.presentationTimeUs) / ((float) j10);
                    }
                }
                this.f47503e.h(b10);
                return i10;
            }
            throw new jl.e(e.a.NO_FRAME_AVAILABLE);
        } else if (b10 != -2) {
            if (b10 != -1) {
                String str = f47490q;
                Log.e(str, "Unhandled value " + b10 + " when receiving encoded output frame");
            }
            return 2;
        } else {
            MediaFormat outputFormat = this.f47503e.getOutputFormat();
            if (!this.f47507i) {
                MediaFormat a10 = a(this.f47494p, outputFormat);
                this.f47508j = a10;
                this.f47506h = this.f47500b.c(a10, this.f47506h);
                this.f47507i = true;
                this.f47501c.d(this.f47494p, this.f47508j);
            }
            String str2 = f47490q;
            Log.d(str2, "Encoder output format received " + outputFormat);
            return 1;
        }
    }

    @Override // ql.c
    public int g() {
        if (this.f47503e.isRunning() && this.f47502d.isRunning()) {
            if (this.f47491m == 5) {
                this.f47491m = b();
            }
            int i10 = this.f47491m;
            if (i10 != 4 && i10 != 5) {
                this.f47491m = j();
            }
            if (this.f47492n != 4) {
                this.f47492n = l();
            }
            if (this.f47493o != 4) {
                this.f47493o = m();
            }
            int i11 = this.f47493o;
            int i12 = 1;
            if (i11 != 1) {
                i12 = 2;
            }
            int i13 = this.f47491m;
            if ((i13 == 4 || i13 == 5) && this.f47492n == 4 && i11 == 4) {
                return 4;
            }
            return i12;
        }
        return -3;
    }

    @Override // ql.c
    public void h() {
        this.f47499a.selectTrack(this.f47505g);
        this.f47503e.start();
        this.f47502d.start();
    }

    @Override // ql.c
    public void i() {
        this.f47501c.release();
        this.f47503e.stop();
        this.f47503e.release();
        this.f47502d.stop();
        this.f47502d.release();
    }
}
