package tl;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.util.Log;
import java.util.concurrent.TimeUnit;
import ml.e;
import rl.f;
import sl.g;
import sl.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class e extends c {

    /* renamed from: t  reason: collision with root package name */
    private static final String f50800t = "e";

    /* renamed from: m  reason: collision with root package name */
    int f50801m;

    /* renamed from: n  reason: collision with root package name */
    int f50802n;

    /* renamed from: o  reason: collision with root package name */
    int f50803o;

    /* renamed from: p  reason: collision with root package name */
    g f50804p;

    /* renamed from: q  reason: collision with root package name */
    private MediaFormat f50805q;

    /* renamed from: r  reason: collision with root package name */
    private MediaFormat f50806r;

    /* renamed from: s  reason: collision with root package name */
    private sl.e f50807s;

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(rl.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, ll.a aVar, ll.b bVar) {
        super(eVar, i10, fVar, i11, mediaFormat, iVar, aVar, bVar);
        this.f50801m = 2;
        this.f50802n = 2;
        this.f50803o = 2;
        this.f50806r = mediaFormat;
        if (iVar instanceof g) {
            this.f50804p = (g) iVar;
            l();
            return;
        }
        throw new IllegalArgumentException("Cannot use non-OpenGL video renderer in " + e.class.getSimpleName());
    }

    private sl.e j() {
        Number b10 = ul.e.b(this.f50805q, "frame-rate");
        Number b11 = ul.e.b(this.f50806r, "frame-rate");
        if (b11 == null || b11.intValue() < 1) {
            b11 = b10;
        }
        if (b10 != null && b10.intValue() > b11.intValue()) {
            return new sl.d(b10.intValue(), b11.intValue());
        }
        return null;
    }

    private int k() {
        int sampleTrackIndex = this.f50787a.getSampleTrackIndex();
        if (sampleTrackIndex == this.f50793g || sampleTrackIndex == -1) {
            int c10 = this.f50790d.c(0L);
            if (c10 >= 0) {
                ll.c a10 = this.f50790d.a(c10);
                if (a10 != null) {
                    int readSampleData = this.f50787a.readSampleData(a10.f36938b, 0);
                    long sampleTime = this.f50787a.getSampleTime();
                    int sampleFlags = this.f50787a.getSampleFlags();
                    if (readSampleData >= 0 && (sampleFlags & 4) == 0) {
                        if (sampleTime >= this.f50792f.a()) {
                            a10.f36939c.set(0, 0, -1L, 4);
                            this.f50790d.e(a10);
                            int b10 = b();
                            Log.d(f50800t, "Selection end reached on the input stream");
                            return b10;
                        }
                        a10.f36939c.set(0, readSampleData, sampleTime, sampleFlags);
                        this.f50790d.e(a10);
                        this.f50787a.advance();
                        return 2;
                    }
                    a10.f36939c.set(0, 0, -1L, 4);
                    this.f50790d.e(a10);
                    Log.d(f50800t, "EoS reached on the input stream");
                    return 4;
                }
                throw new ml.e(e.a.NO_FRAME_AVAILABLE);
            } else if (c10 != -1) {
                String str = f50800t;
                Log.e(str, "Unhandled value " + c10 + " when decoding an input frame");
            }
        }
        return 2;
    }

    private void l() {
        this.f50805q = this.f50787a.getTrackFormat(this.f50793g);
        this.f50807s = j();
        this.f50791e.f(this.f50796j);
        this.f50804p.b(this.f50791e.createInputSurface(), this.f50805q, this.f50806r);
        this.f50790d.f(this.f50805q, this.f50804p.f());
    }

    private int m() {
        boolean z10;
        int b10 = this.f50790d.b(0L);
        if (b10 >= 0) {
            ll.c d10 = this.f50790d.d(b10);
            if (d10 != null) {
                MediaCodec.BufferInfo bufferInfo = d10.f36939c;
                boolean z11 = false;
                if ((bufferInfo.flags & 4) != 0) {
                    Log.d(f50800t, "EoS on decoder output stream");
                    this.f50790d.g(b10, false);
                    this.f50791e.g();
                    return 4;
                }
                if (bufferInfo.presentationTimeUs >= this.f50792f.b()) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                this.f50790d.g(b10, z10);
                sl.e eVar = this.f50807s;
                if (eVar == null || eVar.a()) {
                    z11 = true;
                }
                if (z10 && z11) {
                    this.f50804p.c(null, TimeUnit.MICROSECONDS.toNanos(d10.f36939c.presentationTimeUs - this.f50792f.b()));
                    return 2;
                }
                return 3;
            }
            throw new ml.e(e.a.NO_FRAME_AVAILABLE);
        } else if (b10 != -2) {
            if (b10 != -1) {
                Log.e(f50800t, "Unhandled value " + b10 + " when receiving decoded input frame");
            }
            return 2;
        } else {
            MediaFormat a10 = a(this.f50805q, this.f50790d.getOutputFormat());
            this.f50805q = a10;
            this.f50804p.d(a10, this.f50806r);
            Log.d(f50800t, "Decoder output format changed: " + this.f50805q);
            return 2;
        }
    }

    private int n() {
        int b10 = this.f50791e.b(0L);
        int i10 = 2;
        if (b10 >= 0) {
            ll.c d10 = this.f50791e.d(b10);
            if (d10 != null) {
                MediaCodec.BufferInfo bufferInfo = d10.f36939c;
                int i11 = bufferInfo.flags;
                if ((i11 & 4) != 0) {
                    Log.d(f50800t, "Encoder produced EoS, we are done");
                    this.f50798l = 1.0f;
                    i10 = 4;
                } else if (bufferInfo.size > 0 && (i11 & 2) == 0) {
                    this.f50788b.b(this.f50794h, d10.f36938b, bufferInfo);
                    long j10 = this.f50797k;
                    if (j10 > 0) {
                        this.f50798l = ((float) d10.f36939c.presentationTimeUs) / ((float) j10);
                    }
                }
                this.f50791e.h(b10);
                return i10;
            }
            throw new ml.e(e.a.NO_FRAME_AVAILABLE);
        } else if (b10 != -2) {
            if (b10 != -1) {
                String str = f50800t;
                Log.e(str, "Unhandled value " + b10 + " when receiving encoded output frame");
            }
            return 2;
        } else {
            MediaFormat outputFormat = this.f50791e.getOutputFormat();
            if (!this.f50795i) {
                MediaFormat a10 = a(this.f50805q, outputFormat);
                this.f50796j = a10;
                this.f50806r = a10;
                this.f50794h = this.f50788b.c(a10, this.f50794h);
                this.f50795i = true;
                this.f50804p.d(this.f50805q, this.f50806r);
            }
            String str2 = f50800t;
            Log.d(str2, "Encoder output format received " + outputFormat);
            return 1;
        }
    }

    @Override // tl.c
    public int g() {
        if (this.f50791e.isRunning() && this.f50790d.isRunning()) {
            if (this.f50801m == 5) {
                this.f50801m = b();
            }
            int i10 = this.f50801m;
            if (i10 != 4 && i10 != 5) {
                this.f50801m = k();
            }
            if (this.f50802n != 4) {
                this.f50802n = m();
            }
            if (this.f50803o != 4) {
                this.f50803o = n();
            }
            int i11 = this.f50803o;
            int i12 = 1;
            if (i11 != 1) {
                i12 = 2;
            }
            int i13 = this.f50801m;
            if ((i13 == 4 || i13 == 5) && this.f50802n == 4 && i11 == 4) {
                return 4;
            }
            if (this.f50802n == 3) {
                return 3;
            }
            return i12;
        }
        return -3;
    }

    @Override // tl.c
    public void h() {
        this.f50787a.selectTrack(this.f50793g);
        this.f50791e.start();
        this.f50790d.start();
    }

    @Override // tl.c
    public void i() {
        this.f50791e.stop();
        this.f50791e.release();
        this.f50790d.stop();
        this.f50790d.release();
        this.f50804p.release();
    }
}
