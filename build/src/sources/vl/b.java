package vl;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.util.Log;
import java.nio.ByteBuffer;
import tl.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends c {

    /* renamed from: p  reason: collision with root package name */
    private static final String f52759p = "b";

    /* renamed from: m  reason: collision with root package name */
    ByteBuffer f52760m;

    /* renamed from: n  reason: collision with root package name */
    MediaCodec.BufferInfo f52761n;

    /* renamed from: o  reason: collision with root package name */
    int f52762o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(tl.e eVar, int i10, f fVar, int i11) {
        super(eVar, i10, fVar, i11, null, null, null, null);
    }

    @Override // vl.c
    public String c() {
        return "passthrough";
    }

    @Override // vl.c
    public String d() {
        return "passthrough";
    }

    @Override // vl.c
    public int g() {
        int i10;
        int i11;
        int i12 = this.f52762o;
        if (i12 == 4) {
            return i12;
        }
        if (i12 == 5) {
            this.f52762o = b();
            return 4;
        } else if (!this.f52771i) {
            MediaFormat trackFormat = this.f52763a.getTrackFormat(this.f52769g);
            this.f52772j = trackFormat;
            long j10 = this.f52773k;
            if (j10 > 0) {
                trackFormat.setLong("durationUs", j10);
            }
            this.f52770h = this.f52764b.c(this.f52772j, this.f52770h);
            this.f52771i = true;
            if (this.f52772j.containsKey("max-input-size")) {
                i11 = this.f52772j.getInteger("max-input-size");
            } else {
                i11 = 1048576;
            }
            this.f52760m = ByteBuffer.allocate(i11);
            this.f52762o = 1;
            return 1;
        } else {
            int sampleTrackIndex = this.f52763a.getSampleTrackIndex();
            if (sampleTrackIndex != -1 && sampleTrackIndex != this.f52769g) {
                this.f52762o = 2;
                return 2;
            }
            this.f52762o = 2;
            int readSampleData = this.f52763a.readSampleData(this.f52760m, 0);
            long sampleTime = this.f52763a.getSampleTime();
            int sampleFlags = this.f52763a.getSampleFlags();
            if (readSampleData >= 0 && (sampleFlags & 4) == 0) {
                if (sampleTime >= this.f52768f.a()) {
                    this.f52760m.clear();
                    this.f52774l = 1.0f;
                    this.f52761n.set(0, 0, sampleTime - this.f52768f.b(), this.f52761n.flags | 4);
                    this.f52764b.b(this.f52770h, this.f52760m, this.f52761n);
                    this.f52762o = b();
                    Log.d(f52759p, "Reach selection end on input stream");
                } else {
                    if (sampleTime >= this.f52768f.b()) {
                        if ((sampleFlags & 1) != 0) {
                            i10 = 1;
                        } else {
                            i10 = 0;
                        }
                        long b10 = sampleTime - this.f52768f.b();
                        long j11 = this.f52773k;
                        if (j11 > 0) {
                            this.f52774l = ((float) b10) / ((float) j11);
                        }
                        this.f52761n.set(0, readSampleData, b10, i10);
                        this.f52764b.b(this.f52770h, this.f52760m, this.f52761n);
                    }
                    this.f52763a.advance();
                }
            } else {
                this.f52760m.clear();
                this.f52774l = 1.0f;
                this.f52762o = 4;
                Log.d(f52759p, "Reach EoS on input stream");
            }
            return this.f52762o;
        }
    }

    @Override // vl.c
    public void h() {
        this.f52763a.selectTrack(this.f52769g);
        this.f52761n = new MediaCodec.BufferInfo();
    }

    @Override // vl.c
    public void i() {
        ByteBuffer byteBuffer = this.f52760m;
        if (byteBuffer != null) {
            byteBuffer.clear();
            this.f52760m = null;
        }
    }
}
