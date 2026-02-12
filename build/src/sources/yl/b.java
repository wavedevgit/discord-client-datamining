package yl;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.util.Log;
import java.nio.ByteBuffer;
import wl.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends c {

    /* renamed from: p  reason: collision with root package name */
    private static final String f55609p = "b";

    /* renamed from: m  reason: collision with root package name */
    ByteBuffer f55610m;

    /* renamed from: n  reason: collision with root package name */
    MediaCodec.BufferInfo f55611n;

    /* renamed from: o  reason: collision with root package name */
    int f55612o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(wl.e eVar, int i10, f fVar, int i11) {
        super(eVar, i10, fVar, i11, null, null, null, null);
    }

    @Override // yl.c
    public String c() {
        return "passthrough";
    }

    @Override // yl.c
    public String d() {
        return "passthrough";
    }

    @Override // yl.c
    public int g() {
        int i10;
        int i11;
        int i12 = this.f55612o;
        if (i12 == 4) {
            return i12;
        }
        if (i12 == 5) {
            this.f55612o = b();
            return 4;
        } else if (!this.f55621i) {
            MediaFormat trackFormat = this.f55613a.getTrackFormat(this.f55619g);
            this.f55622j = trackFormat;
            long j10 = this.f55623k;
            if (j10 > 0) {
                trackFormat.setLong("durationUs", j10);
            }
            this.f55620h = this.f55614b.c(this.f55622j, this.f55620h);
            this.f55621i = true;
            if (this.f55622j.containsKey("max-input-size")) {
                i11 = this.f55622j.getInteger("max-input-size");
            } else {
                i11 = 1048576;
            }
            this.f55610m = ByteBuffer.allocate(i11);
            this.f55612o = 1;
            return 1;
        } else {
            int sampleTrackIndex = this.f55613a.getSampleTrackIndex();
            if (sampleTrackIndex != -1 && sampleTrackIndex != this.f55619g) {
                this.f55612o = 2;
                return 2;
            }
            this.f55612o = 2;
            int readSampleData = this.f55613a.readSampleData(this.f55610m, 0);
            long sampleTime = this.f55613a.getSampleTime();
            int sampleFlags = this.f55613a.getSampleFlags();
            if (readSampleData >= 0 && (sampleFlags & 4) == 0) {
                if (sampleTime >= this.f55618f.a()) {
                    this.f55610m.clear();
                    this.f55624l = 1.0f;
                    this.f55611n.set(0, 0, sampleTime - this.f55618f.b(), this.f55611n.flags | 4);
                    this.f55614b.b(this.f55620h, this.f55610m, this.f55611n);
                    this.f55612o = b();
                    Log.d(f55609p, "Reach selection end on input stream");
                } else {
                    if (sampleTime >= this.f55618f.b()) {
                        if ((sampleFlags & 1) != 0) {
                            i10 = 1;
                        } else {
                            i10 = 0;
                        }
                        long b10 = sampleTime - this.f55618f.b();
                        long j11 = this.f55623k;
                        if (j11 > 0) {
                            this.f55624l = ((float) b10) / ((float) j11);
                        }
                        this.f55611n.set(0, readSampleData, b10, i10);
                        this.f55614b.b(this.f55620h, this.f55610m, this.f55611n);
                    }
                    this.f55613a.advance();
                }
            } else {
                this.f55610m.clear();
                this.f55624l = 1.0f;
                this.f55612o = 4;
                Log.d(f55609p, "Reach EoS on input stream");
            }
            return this.f55612o;
        }
    }

    @Override // yl.c
    public void h() {
        this.f55613a.selectTrack(this.f55619g);
        this.f55611n = new MediaCodec.BufferInfo();
    }

    @Override // yl.c
    public void i() {
        ByteBuffer byteBuffer = this.f55610m;
        if (byteBuffer != null) {
            byteBuffer.clear();
            this.f55610m = null;
        }
    }
}
