package ql;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.util.Log;
import java.nio.ByteBuffer;
import ol.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends c {

    /* renamed from: p  reason: collision with root package name */
    private static final String f47511p = "b";

    /* renamed from: m  reason: collision with root package name */
    ByteBuffer f47512m;

    /* renamed from: n  reason: collision with root package name */
    MediaCodec.BufferInfo f47513n;

    /* renamed from: o  reason: collision with root package name */
    int f47514o;

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
        int i12 = this.f47514o;
        if (i12 == 4) {
            return i12;
        }
        if (i12 == 5) {
            this.f47514o = b();
            return 4;
        } else if (!this.f47523i) {
            MediaFormat trackFormat = this.f47515a.getTrackFormat(this.f47521g);
            this.f47524j = trackFormat;
            long j10 = this.f47525k;
            if (j10 > 0) {
                trackFormat.setLong("durationUs", j10);
            }
            this.f47522h = this.f47516b.c(this.f47524j, this.f47522h);
            this.f47523i = true;
            if (this.f47524j.containsKey("max-input-size")) {
                i11 = this.f47524j.getInteger("max-input-size");
            } else {
                i11 = 1048576;
            }
            this.f47512m = ByteBuffer.allocate(i11);
            this.f47514o = 1;
            return 1;
        } else {
            int sampleTrackIndex = this.f47515a.getSampleTrackIndex();
            if (sampleTrackIndex != -1 && sampleTrackIndex != this.f47521g) {
                this.f47514o = 2;
                return 2;
            }
            this.f47514o = 2;
            int readSampleData = this.f47515a.readSampleData(this.f47512m, 0);
            long sampleTime = this.f47515a.getSampleTime();
            int sampleFlags = this.f47515a.getSampleFlags();
            if (readSampleData >= 0 && (sampleFlags & 4) == 0) {
                if (sampleTime >= this.f47520f.a()) {
                    this.f47512m.clear();
                    this.f47526l = 1.0f;
                    this.f47513n.set(0, 0, sampleTime - this.f47520f.b(), this.f47513n.flags | 4);
                    this.f47516b.b(this.f47522h, this.f47512m, this.f47513n);
                    this.f47514o = b();
                    Log.d(f47511p, "Reach selection end on input stream");
                } else {
                    if (sampleTime >= this.f47520f.b()) {
                        if ((sampleFlags & 1) != 0) {
                            i10 = 1;
                        } else {
                            i10 = 0;
                        }
                        long b10 = sampleTime - this.f47520f.b();
                        long j11 = this.f47525k;
                        if (j11 > 0) {
                            this.f47526l = ((float) b10) / ((float) j11);
                        }
                        this.f47513n.set(0, readSampleData, b10, i10);
                        this.f47516b.b(this.f47522h, this.f47512m, this.f47513n);
                    }
                    this.f47515a.advance();
                }
            } else {
                this.f47512m.clear();
                this.f47526l = 1.0f;
                this.f47514o = 4;
                Log.d(f47511p, "Reach EoS on input stream");
            }
            return this.f47514o;
        }
    }

    @Override // ql.c
    public void h() {
        this.f47515a.selectTrack(this.f47521g);
        this.f47513n = new MediaCodec.BufferInfo();
    }

    @Override // ql.c
    public void i() {
        ByteBuffer byteBuffer = this.f47512m;
        if (byteBuffer != null) {
            byteBuffer.clear();
            this.f47512m = null;
        }
    }
}
