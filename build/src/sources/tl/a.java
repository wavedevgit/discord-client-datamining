package tl;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.util.Log;
import java.util.concurrent.TimeUnit;
import ml.e;
import rl.f;
import sl.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends c {

    /* renamed from: q  reason: collision with root package name */
    private static final String f50778q = "a";

    /* renamed from: m  reason: collision with root package name */
    int f50779m;

    /* renamed from: n  reason: collision with root package name */
    int f50780n;

    /* renamed from: o  reason: collision with root package name */
    int f50781o;

    /* renamed from: p  reason: collision with root package name */
    private MediaFormat f50782p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(rl.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, ll.a aVar, ll.b bVar) {
        super(eVar, i10, fVar, i11, mediaFormat, iVar, aVar, bVar);
        this.f50779m = 2;
        this.f50780n = 2;
        this.f50781o = 2;
        k();
    }

    private int j() {
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
                            Log.d(f50778q, "Selection end reached on the input stream");
                            return b10;
                        }
                        a10.f36939c.set(0, readSampleData, sampleTime, sampleFlags);
                        this.f50790d.e(a10);
                        this.f50787a.advance();
                        return 2;
                    }
                    a10.f36939c.set(0, 0, -1L, 4);
                    this.f50790d.e(a10);
                    Log.d(f50778q, "EoS reached on the input stream");
                    return 4;
                }
                throw new ml.e(e.a.NO_FRAME_AVAILABLE);
            } else if (c10 != -1) {
                String str = f50778q;
                Log.e(str, "Unhandled value " + c10 + " when decoding an input frame");
            }
        }
        return 2;
    }

    private void k() {
        this.f50782p = this.f50787a.getTrackFormat(this.f50793g);
        this.f50791e.f(this.f50796j);
        this.f50789c.b(null, this.f50782p, this.f50796j);
        this.f50790d.f(this.f50782p, null);
    }

    private int l() {
        int b10 = this.f50790d.b(0L);
        if (b10 >= 0) {
            ll.c d10 = this.f50790d.d(b10);
            if (d10 != null) {
                if (d10.f36939c.presentationTimeUs >= this.f50792f.b() || (d10.f36939c.flags & 4) != 0) {
                    long b11 = d10.f36939c.presentationTimeUs - this.f50792f.b();
                    d10.f36939c.presentationTimeUs = b11;
                    this.f50789c.c(d10, TimeUnit.MICROSECONDS.toNanos(b11));
                }
                this.f50790d.g(b10, false);
                if ((d10.f36939c.flags & 4) != 0) {
                    Log.d(f50778q, "EoS on decoder output stream");
                    return 4;
                }
            } else {
                throw new ml.e(e.a.NO_FRAME_AVAILABLE);
            }
        } else if (b10 != -2) {
            if (b10 != -1) {
                String str = f50778q;
                Log.e(str, "Unhandled value " + b10 + " when receiving decoded input frame");
            }
        } else {
            MediaFormat outputFormat = this.f50790d.getOutputFormat();
            this.f50782p = outputFormat;
            this.f50789c.d(outputFormat, this.f50796j);
            String str2 = f50778q;
            Log.d(str2, "Decoder output format changed: " + this.f50782p);
            return 2;
        }
        return 2;
    }

    private int m() {
        int b10 = this.f50791e.b(0L);
        int i10 = 2;
        if (b10 >= 0) {
            ll.c d10 = this.f50791e.d(b10);
            if (d10 != null) {
                MediaCodec.BufferInfo bufferInfo = d10.f36939c;
                int i11 = bufferInfo.flags;
                if ((i11 & 4) != 0) {
                    Log.d(f50778q, "Encoder produced EoS, we are done");
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
                String str = f50778q;
                Log.e(str, "Unhandled value " + b10 + " when receiving encoded output frame");
            }
            return 2;
        } else {
            MediaFormat outputFormat = this.f50791e.getOutputFormat();
            if (!this.f50795i) {
                MediaFormat a10 = a(this.f50782p, outputFormat);
                this.f50796j = a10;
                this.f50794h = this.f50788b.c(a10, this.f50794h);
                this.f50795i = true;
                this.f50789c.d(this.f50782p, this.f50796j);
            }
            String str2 = f50778q;
            Log.d(str2, "Encoder output format received " + outputFormat);
            return 1;
        }
    }

    @Override // tl.c
    public int g() {
        if (this.f50791e.isRunning() && this.f50790d.isRunning()) {
            if (this.f50779m == 5) {
                this.f50779m = b();
            }
            int i10 = this.f50779m;
            if (i10 != 4 && i10 != 5) {
                this.f50779m = j();
            }
            if (this.f50780n != 4) {
                this.f50780n = l();
            }
            if (this.f50781o != 4) {
                this.f50781o = m();
            }
            int i11 = this.f50781o;
            int i12 = 1;
            if (i11 != 1) {
                i12 = 2;
            }
            int i13 = this.f50779m;
            if ((i13 == 4 || i13 == 5) && this.f50780n == 4 && i11 == 4) {
                return 4;
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
        this.f50789c.release();
        this.f50791e.stop();
        this.f50791e.release();
        this.f50790d.stop();
        this.f50790d.release();
    }
}
