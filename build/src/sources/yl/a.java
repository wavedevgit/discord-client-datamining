package yl;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.util.Log;
import java.util.concurrent.TimeUnit;
import rl.e;
import wl.f;
import xl.i;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a extends c {

    /* renamed from: q  reason: collision with root package name */
    private static final String f55604q = "a";

    /* renamed from: m  reason: collision with root package name */
    int f55605m;

    /* renamed from: n  reason: collision with root package name */
    int f55606n;

    /* renamed from: o  reason: collision with root package name */
    int f55607o;

    /* renamed from: p  reason: collision with root package name */
    private MediaFormat f55608p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(wl.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, ql.a aVar, ql.b bVar) {
        super(eVar, i10, fVar, i11, mediaFormat, iVar, aVar, bVar);
        this.f55605m = 2;
        this.f55606n = 2;
        this.f55607o = 2;
        k();
    }

    private int j() {
        int sampleTrackIndex = this.f55613a.getSampleTrackIndex();
        if (sampleTrackIndex == this.f55619g || sampleTrackIndex == -1) {
            int c10 = this.f55616d.c(0L);
            if (c10 >= 0) {
                ql.c a10 = this.f55616d.a(c10);
                if (a10 != null) {
                    int readSampleData = this.f55613a.readSampleData(a10.f45456b, 0);
                    long sampleTime = this.f55613a.getSampleTime();
                    int sampleFlags = this.f55613a.getSampleFlags();
                    if (readSampleData >= 0 && (sampleFlags & 4) == 0) {
                        if (sampleTime >= this.f55618f.a()) {
                            a10.f45457c.set(0, 0, -1L, 4);
                            this.f55616d.d(a10);
                            int b10 = b();
                            Log.d(f55604q, "Selection end reached on the input stream");
                            return b10;
                        }
                        a10.f45457c.set(0, readSampleData, sampleTime, sampleFlags);
                        this.f55616d.d(a10);
                        this.f55613a.advance();
                        return 2;
                    }
                    a10.f45457c.set(0, 0, -1L, 4);
                    this.f55616d.d(a10);
                    Log.d(f55604q, "EoS reached on the input stream");
                    return 4;
                }
                throw new rl.e(e.a.NO_FRAME_AVAILABLE);
            } else if (c10 != -1) {
                String str = f55604q;
                Log.e(str, "Unhandled value " + c10 + " when decoding an input frame");
            }
        }
        return 2;
    }

    private void k() {
        this.f55608p = this.f55613a.getTrackFormat(this.f55619g);
        this.f55617e.f(this.f55622j);
        this.f55615c.b(null, this.f55608p, this.f55622j);
        this.f55616d.f(this.f55608p, null);
    }

    private int l() {
        int b10 = this.f55616d.b(0L);
        if (b10 >= 0) {
            ql.c e10 = this.f55616d.e(b10);
            if (e10 != null) {
                if (e10.f45457c.presentationTimeUs >= this.f55618f.b() || (e10.f45457c.flags & 4) != 0) {
                    long b11 = e10.f45457c.presentationTimeUs - this.f55618f.b();
                    e10.f45457c.presentationTimeUs = b11;
                    this.f55615c.d(e10, TimeUnit.MICROSECONDS.toNanos(b11));
                }
                this.f55616d.g(b10, false);
                if ((e10.f45457c.flags & 4) != 0) {
                    Log.d(f55604q, "EoS on decoder output stream");
                    return 4;
                }
            } else {
                throw new rl.e(e.a.NO_FRAME_AVAILABLE);
            }
        } else if (b10 != -2) {
            if (b10 != -1) {
                String str = f55604q;
                Log.e(str, "Unhandled value " + b10 + " when receiving decoded input frame");
            }
        } else {
            MediaFormat outputFormat = this.f55616d.getOutputFormat();
            this.f55608p = outputFormat;
            this.f55615c.c(outputFormat, this.f55622j);
            String str2 = f55604q;
            Log.d(str2, "Decoder output format changed: " + this.f55608p);
            return 2;
        }
        return 2;
    }

    private int m() {
        int b10 = this.f55617e.b(0L);
        int i10 = 2;
        if (b10 >= 0) {
            ql.c e10 = this.f55617e.e(b10);
            if (e10 != null) {
                MediaCodec.BufferInfo bufferInfo = e10.f45457c;
                int i11 = bufferInfo.flags;
                if ((i11 & 4) != 0) {
                    Log.d(f55604q, "Encoder produced EoS, we are done");
                    this.f55624l = 1.0f;
                    i10 = 4;
                } else if (bufferInfo.size > 0 && (i11 & 2) == 0) {
                    this.f55614b.b(this.f55620h, e10.f45456b, bufferInfo);
                    long j10 = this.f55623k;
                    if (j10 > 0) {
                        this.f55624l = ((float) e10.f45457c.presentationTimeUs) / ((float) j10);
                    }
                }
                this.f55617e.h(b10);
                return i10;
            }
            throw new rl.e(e.a.NO_FRAME_AVAILABLE);
        } else if (b10 != -2) {
            if (b10 != -1) {
                String str = f55604q;
                Log.e(str, "Unhandled value " + b10 + " when receiving encoded output frame");
            }
            return 2;
        } else {
            MediaFormat outputFormat = this.f55617e.getOutputFormat();
            if (!this.f55621i) {
                MediaFormat a10 = a(this.f55608p, outputFormat);
                this.f55622j = a10;
                this.f55620h = this.f55614b.c(a10, this.f55620h);
                this.f55621i = true;
                this.f55615c.c(this.f55608p, this.f55622j);
            }
            String str2 = f55604q;
            Log.d(str2, "Encoder output format received " + outputFormat);
            return 1;
        }
    }

    @Override // yl.c
    public int g() {
        if (this.f55617e.isRunning() && this.f55616d.isRunning()) {
            if (this.f55605m == 5) {
                this.f55605m = b();
            }
            int i10 = this.f55605m;
            if (i10 != 4 && i10 != 5) {
                this.f55605m = j();
            }
            if (this.f55606n != 4) {
                this.f55606n = l();
            }
            if (this.f55607o != 4) {
                this.f55607o = m();
            }
            int i11 = this.f55607o;
            int i12 = 1;
            if (i11 != 1) {
                i12 = 2;
            }
            int i13 = this.f55605m;
            if ((i13 == 4 || i13 == 5) && this.f55606n == 4 && i11 == 4) {
                return 4;
            }
            return i12;
        }
        return -3;
    }

    @Override // yl.c
    public void h() {
        this.f55613a.selectTrack(this.f55619g);
        this.f55617e.start();
        this.f55616d.start();
    }

    @Override // yl.c
    public void i() {
        this.f55615c.release();
        this.f55617e.stop();
        this.f55617e.release();
        this.f55616d.stop();
        this.f55616d.release();
    }
}
