package yl;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.util.Log;
import java.util.concurrent.TimeUnit;
import rl.e;
import wl.f;
import xl.g;
import xl.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e extends c {

    /* renamed from: t  reason: collision with root package name */
    private static final String f55625t = "e";

    /* renamed from: m  reason: collision with root package name */
    int f55626m;

    /* renamed from: n  reason: collision with root package name */
    int f55627n;

    /* renamed from: o  reason: collision with root package name */
    int f55628o;

    /* renamed from: p  reason: collision with root package name */
    g f55629p;

    /* renamed from: q  reason: collision with root package name */
    private MediaFormat f55630q;

    /* renamed from: r  reason: collision with root package name */
    private MediaFormat f55631r;

    /* renamed from: s  reason: collision with root package name */
    private xl.e f55632s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(wl.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, ql.a aVar, ql.b bVar) {
        super(eVar, i10, fVar, i11, mediaFormat, iVar, aVar, bVar);
        this.f55626m = 2;
        this.f55627n = 2;
        this.f55628o = 2;
        this.f55631r = mediaFormat;
        if (iVar instanceof g) {
            this.f55629p = (g) iVar;
            l();
            return;
        }
        throw new IllegalArgumentException("Cannot use non-OpenGL video renderer in " + e.class.getSimpleName());
    }

    private xl.e j() {
        Number b10 = zl.e.b(this.f55630q, "frame-rate");
        Number b11 = zl.e.b(this.f55631r, "frame-rate");
        if (b11 == null || b11.intValue() < 1) {
            b11 = b10;
        }
        if (b10 != null && b10.intValue() > b11.intValue()) {
            return new xl.d(b10.intValue(), b11.intValue());
        }
        return null;
    }

    private int k() {
        int sampleTrackIndex = this.f55612a.getSampleTrackIndex();
        if (sampleTrackIndex == this.f55618g || sampleTrackIndex == -1) {
            int c10 = this.f55615d.c(0L);
            if (c10 >= 0) {
                ql.c a10 = this.f55615d.a(c10);
                if (a10 != null) {
                    int readSampleData = this.f55612a.readSampleData(a10.f45455b, 0);
                    long sampleTime = this.f55612a.getSampleTime();
                    int sampleFlags = this.f55612a.getSampleFlags();
                    if (readSampleData >= 0 && (sampleFlags & 4) == 0) {
                        if (sampleTime >= this.f55617f.a()) {
                            a10.f45456c.set(0, 0, -1L, 4);
                            this.f55615d.d(a10);
                            int b10 = b();
                            Log.d(f55625t, "Selection end reached on the input stream");
                            return b10;
                        }
                        a10.f45456c.set(0, readSampleData, sampleTime, sampleFlags);
                        this.f55615d.d(a10);
                        this.f55612a.advance();
                        return 2;
                    }
                    a10.f45456c.set(0, 0, -1L, 4);
                    this.f55615d.d(a10);
                    Log.d(f55625t, "EoS reached on the input stream");
                    return 4;
                }
                throw new rl.e(e.a.NO_FRAME_AVAILABLE);
            } else if (c10 != -1) {
                String str = f55625t;
                Log.e(str, "Unhandled value " + c10 + " when decoding an input frame");
            }
        }
        return 2;
    }

    private void l() {
        this.f55630q = this.f55612a.getTrackFormat(this.f55618g);
        this.f55632s = j();
        this.f55616e.f(this.f55621j);
        this.f55629p.b(this.f55616e.createInputSurface(), this.f55630q, this.f55631r);
        this.f55615d.f(this.f55630q, this.f55629p.f());
    }

    private int m() {
        boolean z10;
        int b10 = this.f55615d.b(0L);
        if (b10 >= 0) {
            ql.c e10 = this.f55615d.e(b10);
            if (e10 != null) {
                MediaCodec.BufferInfo bufferInfo = e10.f45456c;
                boolean z11 = false;
                if ((bufferInfo.flags & 4) != 0) {
                    Log.d(f55625t, "EoS on decoder output stream");
                    this.f55615d.g(b10, false);
                    this.f55616e.g();
                    return 4;
                }
                if (bufferInfo.presentationTimeUs >= this.f55617f.b()) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f55615d.g(b10, z10);
                xl.e eVar = this.f55632s;
                if (eVar == null || eVar.a()) {
                    z11 = true;
                }
                if (z10 && z11) {
                    this.f55629p.d(null, TimeUnit.MICROSECONDS.toNanos(e10.f45456c.presentationTimeUs - this.f55617f.b()));
                    return 2;
                }
                return 3;
            }
            throw new rl.e(e.a.NO_FRAME_AVAILABLE);
        } else if (b10 != -2) {
            if (b10 != -1) {
                Log.e(f55625t, "Unhandled value " + b10 + " when receiving decoded input frame");
            }
            return 2;
        } else {
            MediaFormat a10 = a(this.f55630q, this.f55615d.getOutputFormat());
            this.f55630q = a10;
            this.f55629p.c(a10, this.f55631r);
            Log.d(f55625t, "Decoder output format changed: " + this.f55630q);
            return 2;
        }
    }

    private int n() {
        int b10 = this.f55616e.b(0L);
        int i10 = 2;
        if (b10 >= 0) {
            ql.c e10 = this.f55616e.e(b10);
            if (e10 != null) {
                MediaCodec.BufferInfo bufferInfo = e10.f45456c;
                int i11 = bufferInfo.flags;
                if ((i11 & 4) != 0) {
                    Log.d(f55625t, "Encoder produced EoS, we are done");
                    this.f55623l = 1.0f;
                    i10 = 4;
                } else if (bufferInfo.size > 0 && (i11 & 2) == 0) {
                    this.f55613b.b(this.f55619h, e10.f45455b, bufferInfo);
                    long j10 = this.f55622k;
                    if (j10 > 0) {
                        this.f55623l = ((float) e10.f45456c.presentationTimeUs) / ((float) j10);
                    }
                }
                this.f55616e.h(b10);
                return i10;
            }
            throw new rl.e(e.a.NO_FRAME_AVAILABLE);
        } else if (b10 != -2) {
            if (b10 != -1) {
                String str = f55625t;
                Log.e(str, "Unhandled value " + b10 + " when receiving encoded output frame");
            }
            return 2;
        } else {
            MediaFormat outputFormat = this.f55616e.getOutputFormat();
            if (!this.f55620i) {
                MediaFormat a10 = a(this.f55630q, outputFormat);
                this.f55621j = a10;
                this.f55631r = a10;
                this.f55619h = this.f55613b.c(a10, this.f55619h);
                this.f55620i = true;
                this.f55629p.c(this.f55630q, this.f55631r);
            }
            String str2 = f55625t;
            Log.d(str2, "Encoder output format received " + outputFormat);
            return 1;
        }
    }

    @Override // yl.c
    public int g() {
        if (this.f55616e.isRunning() && this.f55615d.isRunning()) {
            if (this.f55626m == 5) {
                this.f55626m = b();
            }
            int i10 = this.f55626m;
            if (i10 != 4 && i10 != 5) {
                this.f55626m = k();
            }
            if (this.f55627n != 4) {
                this.f55627n = m();
            }
            if (this.f55628o != 4) {
                this.f55628o = n();
            }
            int i11 = this.f55628o;
            int i12 = 1;
            if (i11 != 1) {
                i12 = 2;
            }
            int i13 = this.f55626m;
            if ((i13 == 4 || i13 == 5) && this.f55627n == 4 && i11 == 4) {
                return 4;
            }
            if (this.f55627n == 3) {
                return 3;
            }
            return i12;
        }
        return -3;
    }

    @Override // yl.c
    public void h() {
        this.f55612a.selectTrack(this.f55618g);
        this.f55616e.start();
        this.f55615d.start();
    }

    @Override // yl.c
    public void i() {
        this.f55616e.stop();
        this.f55616e.release();
        this.f55615d.stop();
        this.f55615d.release();
        this.f55629p.release();
    }
}
