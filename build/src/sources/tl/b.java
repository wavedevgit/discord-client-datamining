package tl;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.util.Log;
import java.nio.ByteBuffer;
import rl.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends c {

    /* renamed from: p  reason: collision with root package name */
    private static final String f50783p = "b";

    /* renamed from: m  reason: collision with root package name */
    ByteBuffer f50784m;

    /* renamed from: n  reason: collision with root package name */
    MediaCodec.BufferInfo f50785n;

    /* renamed from: o  reason: collision with root package name */
    int f50786o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(rl.e eVar, int i10, f fVar, int i11) {
        super(eVar, i10, fVar, i11, null, null, null, null);
    }

    @Override // tl.c
    public String c() {
        return "passthrough";
    }

    @Override // tl.c
    public String d() {
        return "passthrough";
    }

    @Override // tl.c
    public int g() {
        int i10;
        int i11;
        int i12 = this.f50786o;
        if (i12 == 4) {
            return i12;
        }
        if (i12 == 5) {
            this.f50786o = b();
            return 4;
        } else if (!this.f50795i) {
            MediaFormat trackFormat = this.f50787a.getTrackFormat(this.f50793g);
            this.f50796j = trackFormat;
            long j10 = this.f50797k;
            if (j10 > 0) {
                trackFormat.setLong("durationUs", j10);
            }
            this.f50794h = this.f50788b.c(this.f50796j, this.f50794h);
            this.f50795i = true;
            if (this.f50796j.containsKey("max-input-size")) {
                i11 = this.f50796j.getInteger("max-input-size");
            } else {
                i11 = 1048576;
            }
            this.f50784m = ByteBuffer.allocate(i11);
            this.f50786o = 1;
            return 1;
        } else {
            int sampleTrackIndex = this.f50787a.getSampleTrackIndex();
            if (sampleTrackIndex != -1 && sampleTrackIndex != this.f50793g) {
                this.f50786o = 2;
                return 2;
            }
            this.f50786o = 2;
            int readSampleData = this.f50787a.readSampleData(this.f50784m, 0);
            long sampleTime = this.f50787a.getSampleTime();
            int sampleFlags = this.f50787a.getSampleFlags();
            if (readSampleData >= 0 && (sampleFlags & 4) == 0) {
                if (sampleTime >= this.f50792f.a()) {
                    this.f50784m.clear();
                    this.f50798l = 1.0f;
                    this.f50785n.set(0, 0, sampleTime - this.f50792f.b(), this.f50785n.flags | 4);
                    this.f50788b.b(this.f50794h, this.f50784m, this.f50785n);
                    this.f50786o = b();
                    Log.d(f50783p, "Reach selection end on input stream");
                } else {
                    if (sampleTime >= this.f50792f.b()) {
                        if ((sampleFlags & 1) != 0) {
                            i10 = 1;
                        } else {
                            i10 = 0;
                        }
                        long b10 = sampleTime - this.f50792f.b();
                        long j11 = this.f50797k;
                        if (j11 > 0) {
                            this.f50798l = ((float) b10) / ((float) j11);
                        }
                        this.f50785n.set(0, readSampleData, b10, i10);
                        this.f50788b.b(this.f50794h, this.f50784m, this.f50785n);
                    }
                    this.f50787a.advance();
                }
            } else {
                this.f50784m.clear();
                this.f50798l = 1.0f;
                this.f50786o = 4;
                Log.d(f50783p, "Reach EoS on input stream");
            }
            return this.f50786o;
        }
    }

    @Override // tl.c
    public void h() {
        this.f50787a.selectTrack(this.f50793g);
        this.f50785n = new MediaCodec.BufferInfo();
    }

    @Override // tl.c
    public void i() {
        ByteBuffer byteBuffer = this.f50784m;
        if (byteBuffer != null) {
            byteBuffer.clear();
            this.f50784m = null;
        }
    }
}
