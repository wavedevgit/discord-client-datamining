package ql;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.util.Log;
import java.util.concurrent.TimeUnit;
import jl.e;
import ol.f;
import pl.g;
import pl.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e extends c {

    /* renamed from: t  reason: collision with root package name */
    private static final String f47528t = "e";

    /* renamed from: m  reason: collision with root package name */
    int f47529m;

    /* renamed from: n  reason: collision with root package name */
    int f47530n;

    /* renamed from: o  reason: collision with root package name */
    int f47531o;

    /* renamed from: p  reason: collision with root package name */
    g f47532p;

    /* renamed from: q  reason: collision with root package name */
    private MediaFormat f47533q;

    /* renamed from: r  reason: collision with root package name */
    private MediaFormat f47534r;

    /* renamed from: s  reason: collision with root package name */
    private pl.e f47535s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(ol.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, il.a aVar, il.b bVar) {
        super(eVar, i10, fVar, i11, mediaFormat, iVar, aVar, bVar);
        this.f47529m = 2;
        this.f47530n = 2;
        this.f47531o = 2;
        this.f47534r = mediaFormat;
        if (iVar instanceof g) {
            this.f47532p = (g) iVar;
            l();
            return;
        }
        throw new IllegalArgumentException("Cannot use non-OpenGL video renderer in " + e.class.getSimpleName());
    }

    private pl.e j() {
        Number b10 = rl.e.b(this.f47533q, "frame-rate");
        Number b11 = rl.e.b(this.f47534r, "frame-rate");
        if (b11 == null || b11.intValue() < 1) {
            b11 = b10;
        }
        if (b10 != null && b10.intValue() > b11.intValue()) {
            return new pl.d(b10.intValue(), b11.intValue());
        }
        return null;
    }

    private int k() {
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
                            Log.d(f47528t, "Selection end reached on the input stream");
                            return b10;
                        }
                        a10.f28594c.set(0, readSampleData, sampleTime, sampleFlags);
                        this.f47518d.c(a10);
                        this.f47515a.advance();
                        return 2;
                    }
                    a10.f28594c.set(0, 0, -1L, 4);
                    this.f47518d.c(a10);
                    Log.d(f47528t, "EoS reached on the input stream");
                    return 4;
                }
                throw new jl.e(e.a.NO_FRAME_AVAILABLE);
            } else if (d10 != -1) {
                String str = f47528t;
                Log.e(str, "Unhandled value " + d10 + " when decoding an input frame");
            }
        }
        return 2;
    }

    private void l() {
        this.f47533q = this.f47515a.getTrackFormat(this.f47521g);
        this.f47535s = j();
        this.f47519e.f(this.f47524j);
        this.f47532p.c(this.f47519e.createInputSurface(), this.f47533q, this.f47534r);
        this.f47518d.f(this.f47533q, this.f47532p.f());
    }

    private int m() {
        boolean z10;
        int b10 = this.f47518d.b(0L);
        if (b10 >= 0) {
            il.c e10 = this.f47518d.e(b10);
            if (e10 != null) {
                MediaCodec.BufferInfo bufferInfo = e10.f28594c;
                boolean z11 = false;
                if ((bufferInfo.flags & 4) != 0) {
                    Log.d(f47528t, "EoS on decoder output stream");
                    this.f47518d.g(b10, false);
                    this.f47519e.g();
                    return 4;
                }
                if (bufferInfo.presentationTimeUs >= this.f47520f.b()) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f47518d.g(b10, z10);
                pl.e eVar = this.f47535s;
                if (eVar == null || eVar.a()) {
                    z11 = true;
                }
                if (z10 && z11) {
                    this.f47532p.b(null, TimeUnit.MICROSECONDS.toNanos(e10.f28594c.presentationTimeUs - this.f47520f.b()));
                    return 2;
                }
                return 3;
            }
            throw new jl.e(e.a.NO_FRAME_AVAILABLE);
        } else if (b10 != -2) {
            if (b10 != -1) {
                Log.e(f47528t, "Unhandled value " + b10 + " when receiving decoded input frame");
            }
            return 2;
        } else {
            MediaFormat a10 = a(this.f47533q, this.f47518d.getOutputFormat());
            this.f47533q = a10;
            this.f47532p.d(a10, this.f47534r);
            Log.d(f47528t, "Decoder output format changed: " + this.f47533q);
            return 2;
        }
    }

    private int n() {
        int b10 = this.f47519e.b(0L);
        int i10 = 2;
        if (b10 >= 0) {
            il.c e10 = this.f47519e.e(b10);
            if (e10 != null) {
                MediaCodec.BufferInfo bufferInfo = e10.f28594c;
                int i11 = bufferInfo.flags;
                if ((i11 & 4) != 0) {
                    Log.d(f47528t, "Encoder produced EoS, we are done");
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
                String str = f47528t;
                Log.e(str, "Unhandled value " + b10 + " when receiving encoded output frame");
            }
            return 2;
        } else {
            MediaFormat outputFormat = this.f47519e.getOutputFormat();
            if (!this.f47523i) {
                MediaFormat a10 = a(this.f47533q, outputFormat);
                this.f47524j = a10;
                this.f47534r = a10;
                this.f47522h = this.f47516b.c(a10, this.f47522h);
                this.f47523i = true;
                this.f47532p.d(this.f47533q, this.f47534r);
            }
            String str2 = f47528t;
            Log.d(str2, "Encoder output format received " + outputFormat);
            return 1;
        }
    }

    @Override // ql.c
    public int g() {
        if (this.f47519e.isRunning() && this.f47518d.isRunning()) {
            if (this.f47529m == 5) {
                this.f47529m = b();
            }
            int i10 = this.f47529m;
            if (i10 != 4 && i10 != 5) {
                this.f47529m = k();
            }
            if (this.f47530n != 4) {
                this.f47530n = m();
            }
            if (this.f47531o != 4) {
                this.f47531o = n();
            }
            int i11 = this.f47531o;
            int i12 = 1;
            if (i11 != 1) {
                i12 = 2;
            }
            int i13 = this.f47529m;
            if ((i13 == 4 || i13 == 5) && this.f47530n == 4 && i11 == 4) {
                return 4;
            }
            if (this.f47530n == 3) {
                return 3;
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
        this.f47519e.stop();
        this.f47519e.release();
        this.f47518d.stop();
        this.f47518d.release();
        this.f47532p.release();
    }
}
