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
    private static final String f47761q = "a";

    /* renamed from: m  reason: collision with root package name */
    int f47762m;

    /* renamed from: n  reason: collision with root package name */
    int f47763n;

    /* renamed from: o  reason: collision with root package name */
    int f47764o;

    /* renamed from: p  reason: collision with root package name */
    private MediaFormat f47765p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(ol.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, il.a aVar, il.b bVar) {
        super(eVar, i10, fVar, i11, mediaFormat, iVar, aVar, bVar);
        this.f47762m = 2;
        this.f47763n = 2;
        this.f47764o = 2;
        k();
    }

    private int j() {
        int sampleTrackIndex = this.f47770a.getSampleTrackIndex();
        if (sampleTrackIndex == this.f47776g || sampleTrackIndex == -1) {
            int d10 = this.f47773d.d(0L);
            if (d10 >= 0) {
                il.c a10 = this.f47773d.a(d10);
                if (a10 != null) {
                    int readSampleData = this.f47770a.readSampleData(a10.f28240b, 0);
                    long sampleTime = this.f47770a.getSampleTime();
                    int sampleFlags = this.f47770a.getSampleFlags();
                    if (readSampleData >= 0 && (sampleFlags & 4) == 0) {
                        if (sampleTime >= this.f47775f.a()) {
                            a10.f28241c.set(0, 0, -1L, 4);
                            this.f47773d.c(a10);
                            int b10 = b();
                            Log.d(f47761q, "Selection end reached on the input stream");
                            return b10;
                        }
                        a10.f28241c.set(0, readSampleData, sampleTime, sampleFlags);
                        this.f47773d.c(a10);
                        this.f47770a.advance();
                        return 2;
                    }
                    a10.f28241c.set(0, 0, -1L, 4);
                    this.f47773d.c(a10);
                    Log.d(f47761q, "EoS reached on the input stream");
                    return 4;
                }
                throw new jl.e(e.a.NO_FRAME_AVAILABLE);
            } else if (d10 != -1) {
                String str = f47761q;
                Log.e(str, "Unhandled value " + d10 + " when decoding an input frame");
            }
        }
        return 2;
    }

    private void k() {
        this.f47765p = this.f47770a.getTrackFormat(this.f47776g);
        this.f47774e.f(this.f47779j);
        this.f47772c.c(null, this.f47765p, this.f47779j);
        this.f47773d.f(this.f47765p, null);
    }

    private int l() {
        int b10 = this.f47773d.b(0L);
        if (b10 >= 0) {
            il.c e10 = this.f47773d.e(b10);
            if (e10 != null) {
                if (e10.f28241c.presentationTimeUs >= this.f47775f.b() || (e10.f28241c.flags & 4) != 0) {
                    long b11 = e10.f28241c.presentationTimeUs - this.f47775f.b();
                    e10.f28241c.presentationTimeUs = b11;
                    this.f47772c.b(e10, TimeUnit.MICROSECONDS.toNanos(b11));
                }
                this.f47773d.g(b10, false);
                if ((e10.f28241c.flags & 4) != 0) {
                    Log.d(f47761q, "EoS on decoder output stream");
                    return 4;
                }
            } else {
                throw new jl.e(e.a.NO_FRAME_AVAILABLE);
            }
        } else if (b10 != -2) {
            if (b10 != -1) {
                String str = f47761q;
                Log.e(str, "Unhandled value " + b10 + " when receiving decoded input frame");
            }
        } else {
            MediaFormat outputFormat = this.f47773d.getOutputFormat();
            this.f47765p = outputFormat;
            this.f47772c.d(outputFormat, this.f47779j);
            String str2 = f47761q;
            Log.d(str2, "Decoder output format changed: " + this.f47765p);
            return 2;
        }
        return 2;
    }

    private int m() {
        int b10 = this.f47774e.b(0L);
        int i10 = 2;
        if (b10 >= 0) {
            il.c e10 = this.f47774e.e(b10);
            if (e10 != null) {
                MediaCodec.BufferInfo bufferInfo = e10.f28241c;
                int i11 = bufferInfo.flags;
                if ((i11 & 4) != 0) {
                    Log.d(f47761q, "Encoder produced EoS, we are done");
                    this.f47781l = 1.0f;
                    i10 = 4;
                } else if (bufferInfo.size > 0 && (i11 & 2) == 0) {
                    this.f47771b.b(this.f47777h, e10.f28240b, bufferInfo);
                    long j10 = this.f47780k;
                    if (j10 > 0) {
                        this.f47781l = ((float) e10.f28241c.presentationTimeUs) / ((float) j10);
                    }
                }
                this.f47774e.h(b10);
                return i10;
            }
            throw new jl.e(e.a.NO_FRAME_AVAILABLE);
        } else if (b10 != -2) {
            if (b10 != -1) {
                String str = f47761q;
                Log.e(str, "Unhandled value " + b10 + " when receiving encoded output frame");
            }
            return 2;
        } else {
            MediaFormat outputFormat = this.f47774e.getOutputFormat();
            if (!this.f47778i) {
                MediaFormat a10 = a(this.f47765p, outputFormat);
                this.f47779j = a10;
                this.f47777h = this.f47771b.c(a10, this.f47777h);
                this.f47778i = true;
                this.f47772c.d(this.f47765p, this.f47779j);
            }
            String str2 = f47761q;
            Log.d(str2, "Encoder output format received " + outputFormat);
            return 1;
        }
    }

    @Override // ql.c
    public int g() {
        if (this.f47774e.isRunning() && this.f47773d.isRunning()) {
            if (this.f47762m == 5) {
                this.f47762m = b();
            }
            int i10 = this.f47762m;
            if (i10 != 4 && i10 != 5) {
                this.f47762m = j();
            }
            if (this.f47763n != 4) {
                this.f47763n = l();
            }
            if (this.f47764o != 4) {
                this.f47764o = m();
            }
            int i11 = this.f47764o;
            int i12 = 1;
            if (i11 != 1) {
                i12 = 2;
            }
            int i13 = this.f47762m;
            if ((i13 == 4 || i13 == 5) && this.f47763n == 4 && i11 == 4) {
                return 4;
            }
            return i12;
        }
        return -3;
    }

    @Override // ql.c
    public void h() {
        this.f47770a.selectTrack(this.f47776g);
        this.f47774e.start();
        this.f47773d.start();
    }

    @Override // ql.c
    public void i() {
        this.f47772c.release();
        this.f47774e.stop();
        this.f47774e.release();
        this.f47773d.stop();
        this.f47773d.release();
    }
}
