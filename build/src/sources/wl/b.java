package wl;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.util.Log;
import java.nio.ByteBuffer;
import ul.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends c {

    /* renamed from: p  reason: collision with root package name */
    private static final String f53786p = "b";

    /* renamed from: m  reason: collision with root package name */
    ByteBuffer f53787m;

    /* renamed from: n  reason: collision with root package name */
    MediaCodec.BufferInfo f53788n;

    /* renamed from: o  reason: collision with root package name */
    int f53789o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(ul.e eVar, int i10, f fVar, int i11) {
        super(eVar, i10, fVar, i11, null, null, null, null);
    }

    @Override // wl.c
    public String c() {
        return "passthrough";
    }

    @Override // wl.c
    public String d() {
        return "passthrough";
    }

    @Override // wl.c
    public int g() {
        int i10;
        int i11;
        int i12 = this.f53789o;
        if (i12 == 4) {
            return i12;
        }
        if (i12 == 5) {
            this.f53789o = b();
            return 4;
        } else if (!this.f53798i) {
            MediaFormat trackFormat = this.f53790a.getTrackFormat(this.f53796g);
            this.f53799j = trackFormat;
            long j10 = this.f53800k;
            if (j10 > 0) {
                trackFormat.setLong("durationUs", j10);
            }
            this.f53797h = this.f53791b.c(this.f53799j, this.f53797h);
            this.f53798i = true;
            if (this.f53799j.containsKey("max-input-size")) {
                i11 = this.f53799j.getInteger("max-input-size");
            } else {
                i11 = 1048576;
            }
            this.f53787m = ByteBuffer.allocate(i11);
            this.f53789o = 1;
            return 1;
        } else {
            int sampleTrackIndex = this.f53790a.getSampleTrackIndex();
            if (sampleTrackIndex != -1 && sampleTrackIndex != this.f53796g) {
                this.f53789o = 2;
                return 2;
            }
            this.f53789o = 2;
            int readSampleData = this.f53790a.readSampleData(this.f53787m, 0);
            long sampleTime = this.f53790a.getSampleTime();
            int sampleFlags = this.f53790a.getSampleFlags();
            if (readSampleData >= 0 && (sampleFlags & 4) == 0) {
                if (sampleTime >= this.f53795f.a()) {
                    this.f53787m.clear();
                    this.f53801l = 1.0f;
                    this.f53788n.set(0, 0, sampleTime - this.f53795f.b(), this.f53788n.flags | 4);
                    this.f53791b.b(this.f53797h, this.f53787m, this.f53788n);
                    this.f53789o = b();
                    Log.d(f53786p, "Reach selection end on input stream");
                } else {
                    if (sampleTime >= this.f53795f.b()) {
                        if ((sampleFlags & 1) != 0) {
                            i10 = 1;
                        } else {
                            i10 = 0;
                        }
                        long b10 = sampleTime - this.f53795f.b();
                        long j11 = this.f53800k;
                        if (j11 > 0) {
                            this.f53801l = ((float) b10) / ((float) j11);
                        }
                        this.f53788n.set(0, readSampleData, b10, i10);
                        this.f53791b.b(this.f53797h, this.f53787m, this.f53788n);
                    }
                    this.f53790a.advance();
                }
            } else {
                this.f53787m.clear();
                this.f53801l = 1.0f;
                this.f53789o = 4;
                Log.d(f53786p, "Reach EoS on input stream");
            }
            return this.f53789o;
        }
    }

    @Override // wl.c
    public void h() {
        this.f53790a.selectTrack(this.f53796g);
        this.f53788n = new MediaCodec.BufferInfo();
    }

    @Override // wl.c
    public void i() {
        ByteBuffer byteBuffer = this.f53787m;
        if (byteBuffer != null) {
            byteBuffer.clear();
            this.f53787m = null;
        }
    }
}
