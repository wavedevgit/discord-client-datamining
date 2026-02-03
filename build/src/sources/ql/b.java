package ql;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.util.Log;
import java.nio.ByteBuffer;
import ol.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends c {

    /* renamed from: p  reason: collision with root package name */
    private static final String f47766p = "b";

    /* renamed from: m  reason: collision with root package name */
    ByteBuffer f47767m;

    /* renamed from: n  reason: collision with root package name */
    MediaCodec.BufferInfo f47768n;

    /* renamed from: o  reason: collision with root package name */
    int f47769o;

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
        int i12 = this.f47769o;
        if (i12 == 4) {
            return i12;
        }
        if (i12 == 5) {
            this.f47769o = b();
            return 4;
        } else if (!this.f47778i) {
            MediaFormat trackFormat = this.f47770a.getTrackFormat(this.f47776g);
            this.f47779j = trackFormat;
            long j10 = this.f47780k;
            if (j10 > 0) {
                trackFormat.setLong("durationUs", j10);
            }
            this.f47777h = this.f47771b.c(this.f47779j, this.f47777h);
            this.f47778i = true;
            if (this.f47779j.containsKey("max-input-size")) {
                i11 = this.f47779j.getInteger("max-input-size");
            } else {
                i11 = 1048576;
            }
            this.f47767m = ByteBuffer.allocate(i11);
            this.f47769o = 1;
            return 1;
        } else {
            int sampleTrackIndex = this.f47770a.getSampleTrackIndex();
            if (sampleTrackIndex != -1 && sampleTrackIndex != this.f47776g) {
                this.f47769o = 2;
                return 2;
            }
            this.f47769o = 2;
            int readSampleData = this.f47770a.readSampleData(this.f47767m, 0);
            long sampleTime = this.f47770a.getSampleTime();
            int sampleFlags = this.f47770a.getSampleFlags();
            if (readSampleData >= 0 && (sampleFlags & 4) == 0) {
                if (sampleTime >= this.f47775f.a()) {
                    this.f47767m.clear();
                    this.f47781l = 1.0f;
                    this.f47768n.set(0, 0, sampleTime - this.f47775f.b(), this.f47768n.flags | 4);
                    this.f47771b.b(this.f47777h, this.f47767m, this.f47768n);
                    this.f47769o = b();
                    Log.d(f47766p, "Reach selection end on input stream");
                } else {
                    if (sampleTime >= this.f47775f.b()) {
                        if ((sampleFlags & 1) != 0) {
                            i10 = 1;
                        } else {
                            i10 = 0;
                        }
                        long b10 = sampleTime - this.f47775f.b();
                        long j11 = this.f47780k;
                        if (j11 > 0) {
                            this.f47781l = ((float) b10) / ((float) j11);
                        }
                        this.f47768n.set(0, readSampleData, b10, i10);
                        this.f47771b.b(this.f47777h, this.f47767m, this.f47768n);
                    }
                    this.f47770a.advance();
                }
            } else {
                this.f47767m.clear();
                this.f47781l = 1.0f;
                this.f47769o = 4;
                Log.d(f47766p, "Reach EoS on input stream");
            }
            return this.f47769o;
        }
    }

    @Override // ql.c
    public void h() {
        this.f47770a.selectTrack(this.f47776g);
        this.f47768n = new MediaCodec.BufferInfo();
    }

    @Override // ql.c
    public void i() {
        ByteBuffer byteBuffer = this.f47767m;
        if (byteBuffer != null) {
            byteBuffer.clear();
            this.f47767m = null;
        }
    }
}
