package ql;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.util.Log;
import java.nio.ByteBuffer;
import ol.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends c {

    /* renamed from: p  reason: collision with root package name */
    private static final String f47495p = "b";

    /* renamed from: m  reason: collision with root package name */
    ByteBuffer f47496m;

    /* renamed from: n  reason: collision with root package name */
    MediaCodec.BufferInfo f47497n;

    /* renamed from: o  reason: collision with root package name */
    int f47498o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(ol.e eVar, int i10, f fVar, int i11) {
        super(eVar, i10, fVar, i11, null, null, null, null);
    }

    @Override // ql.c
    public String c() {
        return "passthrough";
    }

    @Override // ql.c
    public String d() {
        return "passthrough";
    }

    @Override // ql.c
    public int g() {
        int i10;
        int i11;
        int i12 = this.f47498o;
        if (i12 == 4) {
            return i12;
        }
        if (i12 == 5) {
            this.f47498o = b();
            return 4;
        } else if (!this.f47507i) {
            MediaFormat trackFormat = this.f47499a.getTrackFormat(this.f47505g);
            this.f47508j = trackFormat;
            long j10 = this.f47509k;
            if (j10 > 0) {
                trackFormat.setLong("durationUs", j10);
            }
            this.f47506h = this.f47500b.c(this.f47508j, this.f47506h);
            this.f47507i = true;
            if (this.f47508j.containsKey("max-input-size")) {
                i11 = this.f47508j.getInteger("max-input-size");
            } else {
                i11 = 1048576;
            }
            this.f47496m = ByteBuffer.allocate(i11);
            this.f47498o = 1;
            return 1;
        } else {
            int sampleTrackIndex = this.f47499a.getSampleTrackIndex();
            if (sampleTrackIndex != -1 && sampleTrackIndex != this.f47505g) {
                this.f47498o = 2;
                return 2;
            }
            this.f47498o = 2;
            int readSampleData = this.f47499a.readSampleData(this.f47496m, 0);
            long sampleTime = this.f47499a.getSampleTime();
            int sampleFlags = this.f47499a.getSampleFlags();
            if (readSampleData >= 0 && (sampleFlags & 4) == 0) {
                if (sampleTime >= this.f47504f.a()) {
                    this.f47496m.clear();
                    this.f47510l = 1.0f;
                    this.f47497n.set(0, 0, sampleTime - this.f47504f.b(), this.f47497n.flags | 4);
                    this.f47500b.b(this.f47506h, this.f47496m, this.f47497n);
                    this.f47498o = b();
                    Log.d(f47495p, "Reach selection end on input stream");
                } else {
                    if (sampleTime >= this.f47504f.b()) {
                        if ((sampleFlags & 1) != 0) {
                            i10 = 1;
                        } else {
                            i10 = 0;
                        }
                        long b10 = sampleTime - this.f47504f.b();
                        long j11 = this.f47509k;
                        if (j11 > 0) {
                            this.f47510l = ((float) b10) / ((float) j11);
                        }
                        this.f47497n.set(0, readSampleData, b10, i10);
                        this.f47500b.b(this.f47506h, this.f47496m, this.f47497n);
                    }
                    this.f47499a.advance();
                }
            } else {
                this.f47496m.clear();
                this.f47510l = 1.0f;
                this.f47498o = 4;
                Log.d(f47495p, "Reach EoS on input stream");
            }
            return this.f47498o;
        }
    }

    @Override // ql.c
    public void h() {
        this.f47499a.selectTrack(this.f47505g);
        this.f47497n = new MediaCodec.BufferInfo();
    }

    @Override // ql.c
    public void i() {
        ByteBuffer byteBuffer = this.f47496m;
        if (byteBuffer != null) {
            byteBuffer.clear();
            this.f47496m = null;
        }
    }
}
