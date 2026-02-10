package wl;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.util.Log;
import java.util.concurrent.TimeUnit;
import pl.e;
import ul.f;
import vl.g;
import vl.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e extends c {

    /* renamed from: t  reason: collision with root package name */
    private static final String f53803t = "e";

    /* renamed from: m  reason: collision with root package name */
    int f53804m;

    /* renamed from: n  reason: collision with root package name */
    int f53805n;

    /* renamed from: o  reason: collision with root package name */
    int f53806o;

    /* renamed from: p  reason: collision with root package name */
    g f53807p;

    /* renamed from: q  reason: collision with root package name */
    private MediaFormat f53808q;

    /* renamed from: r  reason: collision with root package name */
    private MediaFormat f53809r;

    /* renamed from: s  reason: collision with root package name */
    private vl.e f53810s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(ul.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, ol.a aVar, ol.b bVar) {
        super(eVar, i10, fVar, i11, mediaFormat, iVar, aVar, bVar);
        this.f53804m = 2;
        this.f53805n = 2;
        this.f53806o = 2;
        this.f53809r = mediaFormat;
        if (iVar instanceof g) {
            this.f53807p = (g) iVar;
            l();
            return;
        }
        throw new IllegalArgumentException("Cannot use non-OpenGL video renderer in " + e.class.getSimpleName());
    }

    private vl.e j() {
        Number b10 = xl.e.b(this.f53808q, "frame-rate");
        Number b11 = xl.e.b(this.f53809r, "frame-rate");
        if (b11 == null || b11.intValue() < 1) {
            b11 = b10;
        }
        if (b10 != null && b10.intValue() > b11.intValue()) {
            return new vl.d(b10.intValue(), b11.intValue());
        }
        return null;
    }

    private int k() {
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
                            Log.d(f53803t, "Selection end reached on the input stream");
                            return b10;
                        }
                        a10.f42370c.set(0, readSampleData, sampleTime, sampleFlags);
                        this.f53793d.e(a10);
                        this.f53790a.advance();
                        return 2;
                    }
                    a10.f42370c.set(0, 0, -1L, 4);
                    this.f53793d.e(a10);
                    Log.d(f53803t, "EoS reached on the input stream");
                    return 4;
                }
                throw new pl.e(e.a.NO_FRAME_AVAILABLE);
            } else if (c10 != -1) {
                String str = f53803t;
                Log.e(str, "Unhandled value " + c10 + " when decoding an input frame");
            }
        }
        return 2;
    }

    private void l() {
        this.f53808q = this.f53790a.getTrackFormat(this.f53796g);
        this.f53810s = j();
        this.f53794e.f(this.f53799j);
        this.f53807p.b(this.f53794e.createInputSurface(), this.f53808q, this.f53809r);
        this.f53793d.f(this.f53808q, this.f53807p.f());
    }

    private int m() {
        boolean z10;
        int b10 = this.f53793d.b(0L);
        if (b10 >= 0) {
            ol.c d10 = this.f53793d.d(b10);
            if (d10 != null) {
                MediaCodec.BufferInfo bufferInfo = d10.f42370c;
                boolean z11 = false;
                if ((bufferInfo.flags & 4) != 0) {
                    Log.d(f53803t, "EoS on decoder output stream");
                    this.f53793d.g(b10, false);
                    this.f53794e.g();
                    return 4;
                }
                if (bufferInfo.presentationTimeUs >= this.f53795f.b()) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f53793d.g(b10, z10);
                vl.e eVar = this.f53810s;
                if (eVar == null || eVar.a()) {
                    z11 = true;
                }
                if (z10 && z11) {
                    this.f53807p.c(null, TimeUnit.MICROSECONDS.toNanos(d10.f42370c.presentationTimeUs - this.f53795f.b()));
                    return 2;
                }
                return 3;
            }
            throw new pl.e(e.a.NO_FRAME_AVAILABLE);
        } else if (b10 != -2) {
            if (b10 != -1) {
                Log.e(f53803t, "Unhandled value " + b10 + " when receiving decoded input frame");
            }
            return 2;
        } else {
            MediaFormat a10 = a(this.f53808q, this.f53793d.getOutputFormat());
            this.f53808q = a10;
            this.f53807p.d(a10, this.f53809r);
            Log.d(f53803t, "Decoder output format changed: " + this.f53808q);
            return 2;
        }
    }

    private int n() {
        int b10 = this.f53794e.b(0L);
        int i10 = 2;
        if (b10 >= 0) {
            ol.c d10 = this.f53794e.d(b10);
            if (d10 != null) {
                MediaCodec.BufferInfo bufferInfo = d10.f42370c;
                int i11 = bufferInfo.flags;
                if ((i11 & 4) != 0) {
                    Log.d(f53803t, "Encoder produced EoS, we are done");
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
                String str = f53803t;
                Log.e(str, "Unhandled value " + b10 + " when receiving encoded output frame");
            }
            return 2;
        } else {
            MediaFormat outputFormat = this.f53794e.getOutputFormat();
            if (!this.f53798i) {
                MediaFormat a10 = a(this.f53808q, outputFormat);
                this.f53799j = a10;
                this.f53809r = a10;
                this.f53797h = this.f53791b.c(a10, this.f53797h);
                this.f53798i = true;
                this.f53807p.d(this.f53808q, this.f53809r);
            }
            String str2 = f53803t;
            Log.d(str2, "Encoder output format received " + outputFormat);
            return 1;
        }
    }

    @Override // wl.c
    public int g() {
        if (this.f53794e.isRunning() && this.f53793d.isRunning()) {
            if (this.f53804m == 5) {
                this.f53804m = b();
            }
            int i10 = this.f53804m;
            if (i10 != 4 && i10 != 5) {
                this.f53804m = k();
            }
            if (this.f53805n != 4) {
                this.f53805n = m();
            }
            if (this.f53806o != 4) {
                this.f53806o = n();
            }
            int i11 = this.f53806o;
            int i12 = 1;
            if (i11 != 1) {
                i12 = 2;
            }
            int i13 = this.f53804m;
            if ((i13 == 4 || i13 == 5) && this.f53805n == 4 && i11 == 4) {
                return 4;
            }
            if (this.f53805n == 3) {
                return 3;
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
        this.f53794e.stop();
        this.f53794e.release();
        this.f53793d.stop();
        this.f53793d.release();
        this.f53807p.release();
    }
}
