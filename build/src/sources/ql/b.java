package ql;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.util.Log;
import java.nio.ByteBuffer;
import ol.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends c {

    /* renamed from: p  reason: collision with root package name */
    private static final String f47916p = "b";

    /* renamed from: m  reason: collision with root package name */
    ByteBuffer f47917m;

    /* renamed from: n  reason: collision with root package name */
    MediaCodec.BufferInfo f47918n;

    /* renamed from: o  reason: collision with root package name */
    int f47919o;

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
        int i12 = this.f47919o;
        if (i12 == 4) {
            return i12;
        }
        if (i12 == 5) {
            this.f47919o = b();
            return 4;
        } else if (!this.f47928i) {
            MediaFormat trackFormat = this.f47920a.getTrackFormat(this.f47926g);
            this.f47929j = trackFormat;
            long j10 = this.f47930k;
            if (j10 > 0) {
                trackFormat.setLong("durationUs", j10);
            }
            this.f47927h = this.f47921b.c(this.f47929j, this.f47927h);
            this.f47928i = true;
            if (this.f47929j.containsKey("max-input-size")) {
                i11 = this.f47929j.getInteger("max-input-size");
            } else {
                i11 = 1048576;
            }
            this.f47917m = ByteBuffer.allocate(i11);
            this.f47919o = 1;
            return 1;
        } else {
            int sampleTrackIndex = this.f47920a.getSampleTrackIndex();
            if (sampleTrackIndex != -1 && sampleTrackIndex != this.f47926g) {
                this.f47919o = 2;
                return 2;
            }
            this.f47919o = 2;
            int readSampleData = this.f47920a.readSampleData(this.f47917m, 0);
            long sampleTime = this.f47920a.getSampleTime();
            int sampleFlags = this.f47920a.getSampleFlags();
            if (readSampleData >= 0 && (sampleFlags & 4) == 0) {
                if (sampleTime >= this.f47925f.a()) {
                    this.f47917m.clear();
                    this.f47931l = 1.0f;
                    this.f47918n.set(0, 0, sampleTime - this.f47925f.b(), this.f47918n.flags | 4);
                    this.f47921b.b(this.f47927h, this.f47917m, this.f47918n);
                    this.f47919o = b();
                    Log.d(f47916p, "Reach selection end on input stream");
                } else {
                    if (sampleTime >= this.f47925f.b()) {
                        if ((sampleFlags & 1) != 0) {
                            i10 = 1;
                        } else {
                            i10 = 0;
                        }
                        long b10 = sampleTime - this.f47925f.b();
                        long j11 = this.f47930k;
                        if (j11 > 0) {
                            this.f47931l = ((float) b10) / ((float) j11);
                        }
                        this.f47918n.set(0, readSampleData, b10, i10);
                        this.f47921b.b(this.f47927h, this.f47917m, this.f47918n);
                    }
                    this.f47920a.advance();
                }
            } else {
                this.f47917m.clear();
                this.f47931l = 1.0f;
                this.f47919o = 4;
                Log.d(f47916p, "Reach EoS on input stream");
            }
            return this.f47919o;
        }
    }

    @Override // ql.c
    public void h() {
        this.f47920a.selectTrack(this.f47926g);
        this.f47918n = new MediaCodec.BufferInfo();
    }

    @Override // ql.c
    public void i() {
        ByteBuffer byteBuffer = this.f47917m;
        if (byteBuffer != null) {
            byteBuffer.clear();
            this.f47917m = null;
        }
    }
}
