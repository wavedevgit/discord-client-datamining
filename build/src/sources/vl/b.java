package vl;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.util.Log;
import java.nio.ByteBuffer;
import tl.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends c {

    /* renamed from: p  reason: collision with root package name */
    private static final String f52711p = "b";

    /* renamed from: m  reason: collision with root package name */
    ByteBuffer f52712m;

    /* renamed from: n  reason: collision with root package name */
    MediaCodec.BufferInfo f52713n;

    /* renamed from: o  reason: collision with root package name */
    int f52714o;

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
        int i12 = this.f52714o;
        if (i12 == 4) {
            return i12;
        }
        if (i12 == 5) {
            this.f52714o = b();
            return 4;
        } else if (!this.f52723i) {
            MediaFormat trackFormat = this.f52715a.getTrackFormat(this.f52721g);
            this.f52724j = trackFormat;
            long j10 = this.f52725k;
            if (j10 > 0) {
                trackFormat.setLong("durationUs", j10);
            }
            this.f52722h = this.f52716b.c(this.f52724j, this.f52722h);
            this.f52723i = true;
            if (this.f52724j.containsKey("max-input-size")) {
                i11 = this.f52724j.getInteger("max-input-size");
            } else {
                i11 = 1048576;
            }
            this.f52712m = ByteBuffer.allocate(i11);
            this.f52714o = 1;
            return 1;
        } else {
            int sampleTrackIndex = this.f52715a.getSampleTrackIndex();
            if (sampleTrackIndex != -1 && sampleTrackIndex != this.f52721g) {
                this.f52714o = 2;
                return 2;
            }
            this.f52714o = 2;
            int readSampleData = this.f52715a.readSampleData(this.f52712m, 0);
            long sampleTime = this.f52715a.getSampleTime();
            int sampleFlags = this.f52715a.getSampleFlags();
            if (readSampleData >= 0 && (sampleFlags & 4) == 0) {
                if (sampleTime >= this.f52720f.a()) {
                    this.f52712m.clear();
                    this.f52726l = 1.0f;
                    this.f52713n.set(0, 0, sampleTime - this.f52720f.b(), this.f52713n.flags | 4);
                    this.f52716b.b(this.f52722h, this.f52712m, this.f52713n);
                    this.f52714o = b();
                    Log.d(f52711p, "Reach selection end on input stream");
                } else {
                    if (sampleTime >= this.f52720f.b()) {
                        if ((sampleFlags & 1) != 0) {
                            i10 = 1;
                        } else {
                            i10 = 0;
                        }
                        long b10 = sampleTime - this.f52720f.b();
                        long j11 = this.f52725k;
                        if (j11 > 0) {
                            this.f52726l = ((float) b10) / ((float) j11);
                        }
                        this.f52713n.set(0, readSampleData, b10, i10);
                        this.f52716b.b(this.f52722h, this.f52712m, this.f52713n);
                    }
                    this.f52715a.advance();
                }
            } else {
                this.f52712m.clear();
                this.f52726l = 1.0f;
                this.f52714o = 4;
                Log.d(f52711p, "Reach EoS on input stream");
            }
            return this.f52714o;
        }
    }

    @Override // vl.c
    public void h() {
        this.f52715a.selectTrack(this.f52721g);
        this.f52713n = new MediaCodec.BufferInfo();
    }

    @Override // vl.c
    public void i() {
        ByteBuffer byteBuffer = this.f52712m;
        if (byteBuffer != null) {
            byteBuffer.clear();
            this.f52712m = null;
        }
    }
}
