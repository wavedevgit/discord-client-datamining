package yl;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.util.Log;
import java.nio.ByteBuffer;
import wl.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends c {

    /* renamed from: p  reason: collision with root package name */
    private static final String f55608p = "b";

    /* renamed from: m  reason: collision with root package name */
    ByteBuffer f55609m;

    /* renamed from: n  reason: collision with root package name */
    MediaCodec.BufferInfo f55610n;

    /* renamed from: o  reason: collision with root package name */
    int f55611o;

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
        int i12 = this.f55611o;
        if (i12 == 4) {
            return i12;
        }
        if (i12 == 5) {
            this.f55611o = b();
            return 4;
        } else if (!this.f55620i) {
            MediaFormat trackFormat = this.f55612a.getTrackFormat(this.f55618g);
            this.f55621j = trackFormat;
            long j10 = this.f55622k;
            if (j10 > 0) {
                trackFormat.setLong("durationUs", j10);
            }
            this.f55619h = this.f55613b.c(this.f55621j, this.f55619h);
            this.f55620i = true;
            if (this.f55621j.containsKey("max-input-size")) {
                i11 = this.f55621j.getInteger("max-input-size");
            } else {
                i11 = 1048576;
            }
            this.f55609m = ByteBuffer.allocate(i11);
            this.f55611o = 1;
            return 1;
        } else {
            int sampleTrackIndex = this.f55612a.getSampleTrackIndex();
            if (sampleTrackIndex != -1 && sampleTrackIndex != this.f55618g) {
                this.f55611o = 2;
                return 2;
            }
            this.f55611o = 2;
            int readSampleData = this.f55612a.readSampleData(this.f55609m, 0);
            long sampleTime = this.f55612a.getSampleTime();
            int sampleFlags = this.f55612a.getSampleFlags();
            if (readSampleData >= 0 && (sampleFlags & 4) == 0) {
                if (sampleTime >= this.f55617f.a()) {
                    this.f55609m.clear();
                    this.f55623l = 1.0f;
                    this.f55610n.set(0, 0, sampleTime - this.f55617f.b(), this.f55610n.flags | 4);
                    this.f55613b.b(this.f55619h, this.f55609m, this.f55610n);
                    this.f55611o = b();
                    Log.d(f55608p, "Reach selection end on input stream");
                } else {
                    if (sampleTime >= this.f55617f.b()) {
                        if ((sampleFlags & 1) != 0) {
                            i10 = 1;
                        } else {
                            i10 = 0;
                        }
                        long b10 = sampleTime - this.f55617f.b();
                        long j11 = this.f55622k;
                        if (j11 > 0) {
                            this.f55623l = ((float) b10) / ((float) j11);
                        }
                        this.f55610n.set(0, readSampleData, b10, i10);
                        this.f55613b.b(this.f55619h, this.f55609m, this.f55610n);
                    }
                    this.f55612a.advance();
                }
            } else {
                this.f55609m.clear();
                this.f55623l = 1.0f;
                this.f55611o = 4;
                Log.d(f55608p, "Reach EoS on input stream");
            }
            return this.f55611o;
        }
    }

    @Override // yl.c
    public void h() {
        this.f55612a.selectTrack(this.f55618g);
        this.f55610n = new MediaCodec.BufferInfo();
    }

    @Override // yl.c
    public void i() {
        ByteBuffer byteBuffer = this.f55609m;
        if (byteBuffer != null) {
            byteBuffer.clear();
            this.f55609m = null;
        }
    }
}
