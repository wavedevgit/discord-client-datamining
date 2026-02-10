package wl;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.util.Log;
import java.util.concurrent.TimeUnit;
import pl.e;
import ul.f;
import vl.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends c {

    /* renamed from: q  reason: collision with root package name */
    private static final String f53781q = "a";

    /* renamed from: m  reason: collision with root package name */
    int f53782m;

    /* renamed from: n  reason: collision with root package name */
    int f53783n;

    /* renamed from: o  reason: collision with root package name */
    int f53784o;

    /* renamed from: p  reason: collision with root package name */
    private MediaFormat f53785p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(ul.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, ol.a aVar, ol.b bVar) {
        super(eVar, i10, fVar, i11, mediaFormat, iVar, aVar, bVar);
        this.f53782m = 2;
        this.f53783n = 2;
        this.f53784o = 2;
        k();
    }

    private int j() {
        int sampleTrackIndex = this.f53790a.getSampleTrackIndex();
        if (sampleTrackIndex == this.f53796g || sampleTrackIndex == -1) {
            int c10 = this.f53793d.c(0L);
            if (c10 >= 0) {
                ol.c a10 = this.f53793d.a(c10);
                if (a10 != null) {
                    int readSampleData = this.f53790a.readSampleData(a10.f42369b, 0);
                    long sampleTime = this.f53790a.getSampleTime();
                    int sampleFlags = this.f53790a.getSampleFlags();
                    if (readSampleData >= 0 && (sampleFlags & 4) == 0) {
                        if (sampleTime >= this.f53795f.a()) {
                            a10.f42370c.set(0, 0, -1L, 4);
                            this.f53793d.e(a10);
                            int b10 = b();
                            Log.d(f53781q, "Selection end reached on the input stream");
                            return b10;
                        }
                        a10.f42370c.set(0, readSampleData, sampleTime, sampleFlags);
                        this.f53793d.e(a10);
                        this.f53790a.advance();
                        return 2;
                    }
                    a10.f42370c.set(0, 0, -1L, 4);
                    this.f53793d.e(a10);
                    Log.d(f53781q, "EoS reached on the input stream");
                    return 4;
                }
                throw new pl.e(e.a.NO_FRAME_AVAILABLE);
            } else if (c10 != -1) {
                String str = f53781q;
                Log.e(str, "Unhandled value " + c10 + " when decoding an input frame");
            }
        }
        return 2;
    }

    private void k() {
        this.f53785p = this.f53790a.getTrackFormat(this.f53796g);
        this.f53794e.f(this.f53799j);
        this.f53792c.b(null, this.f53785p, this.f53799j);
        this.f53793d.f(this.f53785p, null);
    }

    private int l() {
        int b10 = this.f53793d.b(0L);
        if (b10 >= 0) {
            ol.c d10 = this.f53793d.d(b10);
            if (d10 != null) {
                if (d10.f42370c.presentationTimeUs >= this.f53795f.b() || (d10.f42370c.flags & 4) != 0) {
                    long b11 = d10.f42370c.presentationTimeUs - this.f53795f.b();
                    d10.f42370c.presentationTimeUs = b11;
                    this.f53792c.c(d10, TimeUnit.MICROSECONDS.toNanos(b11));
                }
                this.f53793d.g(b10, false);
                if ((d10.f42370c.flags & 4) != 0) {
                    Log.d(f53781q, "EoS on decoder output stream");
                    return 4;
                }
            } else {
                throw new pl.e(e.a.NO_FRAME_AVAILABLE);
            }
        } else if (b10 != -2) {
            if (b10 != -1) {
                String str = f53781q;
                Log.e(str, "Unhandled value " + b10 + " when receiving decoded input frame");
            }
        } else {
            MediaFormat outputFormat = this.f53793d.getOutputFormat();
            this.f53785p = outputFormat;
            this.f53792c.d(outputFormat, this.f53799j);
            String str2 = f53781q;
            Log.d(str2, "Decoder output format changed: " + this.f53785p);
            return 2;
        }
        return 2;
    }

    private int m() {
        int b10 = this.f53794e.b(0L);
        int i10 = 2;
        if (b10 >= 0) {
            ol.c d10 = this.f53794e.d(b10);
            if (d10 != null) {
                MediaCodec.BufferInfo bufferInfo = d10.f42370c;
                int i11 = bufferInfo.flags;
                if ((i11 & 4) != 0) {
                    Log.d(f53781q, "Encoder produced EoS, we are done");
                    this.f53801l = 1.0f;
                    i10 = 4;
                } else if (bufferInfo.size > 0 && (i11 & 2) == 0) {
                    this.f53791b.b(this.f53797h, d10.f42369b, bufferInfo);
                    long j10 = this.f53800k;
                    if (j10 > 0) {
                        this.f53801l = ((float) d10.f42370c.presentationTimeUs) / ((float) j10);
                    }
                }
                this.f53794e.h(b10);
                return i10;
            }
            throw new pl.e(e.a.NO_FRAME_AVAILABLE);
        } else if (b10 != -2) {
            if (b10 != -1) {
                String str = f53781q;
                Log.e(str, "Unhandled value " + b10 + " when receiving encoded output frame");
            }
            return 2;
        } else {
            MediaFormat outputFormat = this.f53794e.getOutputFormat();
            if (!this.f53798i) {
                MediaFormat a10 = a(this.f53785p, outputFormat);
                this.f53799j = a10;
                this.f53797h = this.f53791b.c(a10, this.f53797h);
                this.f53798i = true;
                this.f53792c.d(this.f53785p, this.f53799j);
            }
            String str2 = f53781q;
            Log.d(str2, "Encoder output format received " + outputFormat);
            return 1;
        }
    }

    @Override // wl.c
    public int g() {
        if (this.f53794e.isRunning() && this.f53793d.isRunning()) {
            if (this.f53782m == 5) {
                this.f53782m = b();
            }
            int i10 = this.f53782m;
            if (i10 != 4 && i10 != 5) {
                this.f53782m = j();
            }
            if (this.f53783n != 4) {
                this.f53783n = l();
            }
            if (this.f53784o != 4) {
                this.f53784o = m();
            }
            int i11 = this.f53784o;
            int i12 = 1;
            if (i11 != 1) {
                i12 = 2;
            }
            int i13 = this.f53782m;
            if ((i13 == 4 || i13 == 5) && this.f53783n == 4 && i11 == 4) {
                return 4;
            }
            return i12;
        }
        return -3;
    }

    @Override // wl.c
    public void h() {
        this.f53790a.selectTrack(this.f53796g);
        this.f53794e.start();
        this.f53793d.start();
    }

    @Override // wl.c
    public void i() {
        this.f53792c.release();
        this.f53794e.stop();
        this.f53794e.release();
        this.f53793d.stop();
        this.f53793d.release();
    }
}
