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
    private static final String f55603q = "a";

    /* renamed from: m  reason: collision with root package name */
    int f55604m;

    /* renamed from: n  reason: collision with root package name */
    int f55605n;

    /* renamed from: o  reason: collision with root package name */
    int f55606o;

    /* renamed from: p  reason: collision with root package name */
    private MediaFormat f55607p;

    /* JADX INFO: Access modifiers changed from: package-private */
    public a(wl.e eVar, int i10, f fVar, int i11, MediaFormat mediaFormat, i iVar, ql.a aVar, ql.b bVar) {
        super(eVar, i10, fVar, i11, mediaFormat, iVar, aVar, bVar);
        this.f55604m = 2;
        this.f55605n = 2;
        this.f55606o = 2;
        k();
    }

    private int j() {
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
                            Log.d(f55603q, "Selection end reached on the input stream");
                            return b10;
                        }
                        a10.f45456c.set(0, readSampleData, sampleTime, sampleFlags);
                        this.f55615d.d(a10);
                        this.f55612a.advance();
                        return 2;
                    }
                    a10.f45456c.set(0, 0, -1L, 4);
                    this.f55615d.d(a10);
                    Log.d(f55603q, "EoS reached on the input stream");
                    return 4;
                }
                throw new rl.e(e.a.NO_FRAME_AVAILABLE);
            } else if (c10 != -1) {
                String str = f55603q;
                Log.e(str, "Unhandled value " + c10 + " when decoding an input frame");
            }
        }
        return 2;
    }

    private void k() {
        this.f55607p = this.f55612a.getTrackFormat(this.f55618g);
        this.f55616e.f(this.f55621j);
        this.f55614c.b(null, this.f55607p, this.f55621j);
        this.f55615d.f(this.f55607p, null);
    }

    private int l() {
        int b10 = this.f55615d.b(0L);
        if (b10 >= 0) {
            ql.c e10 = this.f55615d.e(b10);
            if (e10 != null) {
                if (e10.f45456c.presentationTimeUs >= this.f55617f.b() || (e10.f45456c.flags & 4) != 0) {
                    long b11 = e10.f45456c.presentationTimeUs - this.f55617f.b();
                    e10.f45456c.presentationTimeUs = b11;
                    this.f55614c.d(e10, TimeUnit.MICROSECONDS.toNanos(b11));
                }
                this.f55615d.g(b10, false);
                if ((e10.f45456c.flags & 4) != 0) {
                    Log.d(f55603q, "EoS on decoder output stream");
                    return 4;
                }
            } else {
                throw new rl.e(e.a.NO_FRAME_AVAILABLE);
            }
        } else if (b10 != -2) {
            if (b10 != -1) {
                String str = f55603q;
                Log.e(str, "Unhandled value " + b10 + " when receiving decoded input frame");
            }
        } else {
            MediaFormat outputFormat = this.f55615d.getOutputFormat();
            this.f55607p = outputFormat;
            this.f55614c.c(outputFormat, this.f55621j);
            String str2 = f55603q;
            Log.d(str2, "Decoder output format changed: " + this.f55607p);
            return 2;
        }
        return 2;
    }

    private int m() {
        int b10 = this.f55616e.b(0L);
        int i10 = 2;
        if (b10 >= 0) {
            ql.c e10 = this.f55616e.e(b10);
            if (e10 != null) {
                MediaCodec.BufferInfo bufferInfo = e10.f45456c;
                int i11 = bufferInfo.flags;
                if ((i11 & 4) != 0) {
                    Log.d(f55603q, "Encoder produced EoS, we are done");
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
                String str = f55603q;
                Log.e(str, "Unhandled value " + b10 + " when receiving encoded output frame");
            }
            return 2;
        } else {
            MediaFormat outputFormat = this.f55616e.getOutputFormat();
            if (!this.f55620i) {
                MediaFormat a10 = a(this.f55607p, outputFormat);
                this.f55621j = a10;
                this.f55619h = this.f55613b.c(a10, this.f55619h);
                this.f55620i = true;
                this.f55614c.c(this.f55607p, this.f55621j);
            }
            String str2 = f55603q;
            Log.d(str2, "Encoder output format received " + outputFormat);
            return 1;
        }
    }

    @Override // yl.c
    public int g() {
        if (this.f55616e.isRunning() && this.f55615d.isRunning()) {
            if (this.f55604m == 5) {
                this.f55604m = b();
            }
            int i10 = this.f55604m;
            if (i10 != 4 && i10 != 5) {
                this.f55604m = j();
            }
            if (this.f55605n != 4) {
                this.f55605n = l();
            }
            if (this.f55606o != 4) {
                this.f55606o = m();
            }
            int i11 = this.f55606o;
            int i12 = 1;
            if (i11 != 1) {
                i12 = 2;
            }
            int i13 = this.f55604m;
            if ((i13 == 4 || i13 == 5) && this.f55605n == 4 && i11 == 4) {
                return 4;
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
        this.f55614c.release();
        this.f55616e.stop();
        this.f55616e.release();
        this.f55615d.stop();
        this.f55615d.release();
    }
}
