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
    private static final String f47506q = "a";

    /* renamed from: m  reason: collision with root package name */
    int f47507m;

    /* renamed from: n  reason: collision with root package name */
    int f47508n;

    /* renamed from: o  reason: collision with root package name */
    int f47509o;

    /* renamed from: p  reason: collision with root package name */
    private MediaFormat f47510p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(ol.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, il.a aVar, il.b bVar) {
        super(eVar, i10, fVar, i11, mediaFormat, iVar, aVar, bVar);
        this.f47507m = 2;
        this.f47508n = 2;
        this.f47509o = 2;
        k();
    }

    private int j() {
        int sampleTrackIndex = this.f47515a.getSampleTrackIndex();
        if (sampleTrackIndex == this.f47521g || sampleTrackIndex == -1) {
            int d10 = this.f47518d.d(0L);
            if (d10 >= 0) {
                il.c a10 = this.f47518d.a(d10);
                if (a10 != null) {
                    int readSampleData = this.f47515a.readSampleData(a10.f28593b, 0);
                    long sampleTime = this.f47515a.getSampleTime();
                    int sampleFlags = this.f47515a.getSampleFlags();
                    if (readSampleData >= 0 && (sampleFlags & 4) == 0) {
                        if (sampleTime >= this.f47520f.a()) {
                            a10.f28594c.set(0, 0, -1L, 4);
                            this.f47518d.c(a10);
                            int b10 = b();
                            Log.d(f47506q, "Selection end reached on the input stream");
                            return b10;
                        }
                        a10.f28594c.set(0, readSampleData, sampleTime, sampleFlags);
                        this.f47518d.c(a10);
                        this.f47515a.advance();
                        return 2;
                    }
                    a10.f28594c.set(0, 0, -1L, 4);
                    this.f47518d.c(a10);
                    Log.d(f47506q, "EoS reached on the input stream");
                    return 4;
                }
                throw new jl.e(e.a.NO_FRAME_AVAILABLE);
            } else if (d10 != -1) {
                String str = f47506q;
                Log.e(str, "Unhandled value " + d10 + " when decoding an input frame");
            }
        }
        return 2;
    }

    private void k() {
        this.f47510p = this.f47515a.getTrackFormat(this.f47521g);
        this.f47519e.f(this.f47524j);
        this.f47517c.c(null, this.f47510p, this.f47524j);
        this.f47518d.f(this.f47510p, null);
    }

    private int l() {
        int b10 = this.f47518d.b(0L);
        if (b10 >= 0) {
            il.c e10 = this.f47518d.e(b10);
            if (e10 != null) {
                if (e10.f28594c.presentationTimeUs >= this.f47520f.b() || (e10.f28594c.flags & 4) != 0) {
                    long b11 = e10.f28594c.presentationTimeUs - this.f47520f.b();
                    e10.f28594c.presentationTimeUs = b11;
                    this.f47517c.b(e10, TimeUnit.MICROSECONDS.toNanos(b11));
                }
                this.f47518d.g(b10, false);
                if ((e10.f28594c.flags & 4) != 0) {
                    Log.d(f47506q, "EoS on decoder output stream");
                    return 4;
                }
            } else {
                throw new jl.e(e.a.NO_FRAME_AVAILABLE);
            }
        } else if (b10 != -2) {
            if (b10 != -1) {
                String str = f47506q;
                Log.e(str, "Unhandled value " + b10 + " when receiving decoded input frame");
            }
        } else {
            MediaFormat outputFormat = this.f47518d.getOutputFormat();
            this.f47510p = outputFormat;
            this.f47517c.d(outputFormat, this.f47524j);
            String str2 = f47506q;
            Log.d(str2, "Decoder output format changed: " + this.f47510p);
            return 2;
        }
        return 2;
    }

    private int m() {
        int b10 = this.f47519e.b(0L);
        int i10 = 2;
        if (b10 >= 0) {
            il.c e10 = this.f47519e.e(b10);
            if (e10 != null) {
                MediaCodec.BufferInfo bufferInfo = e10.f28594c;
                int i11 = bufferInfo.flags;
                if ((i11 & 4) != 0) {
                    Log.d(f47506q, "Encoder produced EoS, we are done");
                    this.f47526l = 1.0f;
                    i10 = 4;
                } else if (bufferInfo.size > 0 && (i11 & 2) == 0) {
                    this.f47516b.b(this.f47522h, e10.f28593b, bufferInfo);
                    long j10 = this.f47525k;
                    if (j10 > 0) {
                        this.f47526l = ((float) e10.f28594c.presentationTimeUs) / ((float) j10);
                    }
                }
                this.f47519e.h(b10);
                return i10;
            }
            throw new jl.e(e.a.NO_FRAME_AVAILABLE);
        } else if (b10 != -2) {
            if (b10 != -1) {
                String str = f47506q;
                Log.e(str, "Unhandled value " + b10 + " when receiving encoded output frame");
            }
            return 2;
        } else {
            MediaFormat outputFormat = this.f47519e.getOutputFormat();
            if (!this.f47523i) {
                MediaFormat a10 = a(this.f47510p, outputFormat);
                this.f47524j = a10;
                this.f47522h = this.f47516b.c(a10, this.f47522h);
                this.f47523i = true;
                this.f47517c.d(this.f47510p, this.f47524j);
            }
            String str2 = f47506q;
            Log.d(str2, "Encoder output format received " + outputFormat);
            return 1;
        }
    }

    @Override // ql.c
    public int g() {
        if (this.f47519e.isRunning() && this.f47518d.isRunning()) {
            if (this.f47507m == 5) {
                this.f47507m = b();
            }
            int i10 = this.f47507m;
            if (i10 != 4 && i10 != 5) {
                this.f47507m = j();
            }
            if (this.f47508n != 4) {
                this.f47508n = l();
            }
            if (this.f47509o != 4) {
                this.f47509o = m();
            }
            int i11 = this.f47509o;
            int i12 = 1;
            if (i11 != 1) {
                i12 = 2;
            }
            int i13 = this.f47507m;
            if ((i13 == 4 || i13 == 5) && this.f47508n == 4 && i11 == 4) {
                return 4;
            }
            return i12;
        }
        return -3;
    }

    @Override // ql.c
    public void h() {
        this.f47515a.selectTrack(this.f47521g);
        this.f47519e.start();
        this.f47518d.start();
    }

    @Override // ql.c
    public void i() {
        this.f47517c.release();
        this.f47519e.stop();
        this.f47519e.release();
        this.f47518d.stop();
        this.f47518d.release();
    }
}
