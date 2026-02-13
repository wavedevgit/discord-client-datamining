package yl;

import android.media.MediaCodec;
import android.media.MediaFormat;
import android.util.Log;
import java.nio.ByteBuffer;
import wl.f;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b extends c {

    /* renamed from: p  reason: collision with root package name */
    private static final String f56177p = "b";

    /* renamed from: m  reason: collision with root package name */
    ByteBuffer f56178m;

    /* renamed from: n  reason: collision with root package name */
    MediaCodec.BufferInfo f56179n;

    /* renamed from: o  reason: collision with root package name */
    int f56180o;

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
        int i12 = this.f56180o;
        if (i12 == 4) {
            return i12;
        }
        if (i12 == 5) {
            this.f56180o = b();
            return 4;
        } else if (!this.f56189i) {
            MediaFormat trackFormat = this.f56181a.getTrackFormat(this.f56187g);
            this.f56190j = trackFormat;
            long j10 = this.f56191k;
            if (j10 > 0) {
                trackFormat.setLong("durationUs", j10);
            }
            this.f56188h = this.f56182b.c(this.f56190j, this.f56188h);
            this.f56189i = true;
            if (this.f56190j.containsKey("max-input-size")) {
                i11 = this.f56190j.getInteger("max-input-size");
            } else {
                i11 = 1048576;
            }
            this.f56178m = ByteBuffer.allocate(i11);
            this.f56180o = 1;
            return 1;
        } else {
            int sampleTrackIndex = this.f56181a.getSampleTrackIndex();
            if (sampleTrackIndex != -1 && sampleTrackIndex != this.f56187g) {
                this.f56180o = 2;
                return 2;
            }
            this.f56180o = 2;
            int readSampleData = this.f56181a.readSampleData(this.f56178m, 0);
            long sampleTime = this.f56181a.getSampleTime();
            int sampleFlags = this.f56181a.getSampleFlags();
            if (readSampleData >= 0 && (sampleFlags & 4) == 0) {
                if (sampleTime >= this.f56186f.a()) {
                    this.f56178m.clear();
                    this.f56192l = 1.0f;
                    this.f56179n.set(0, 0, sampleTime - this.f56186f.b(), this.f56179n.flags | 4);
                    this.f56182b.b(this.f56188h, this.f56178m, this.f56179n);
                    this.f56180o = b();
                    Log.d(f56177p, "Reach selection end on input stream");
                } else {
                    if (sampleTime >= this.f56186f.b()) {
                        if ((sampleFlags & 1) != 0) {
                            i10 = 1;
                        } else {
                            i10 = 0;
                        }
                        long b10 = sampleTime - this.f56186f.b();
                        long j11 = this.f56191k;
                        if (j11 > 0) {
                            this.f56192l = ((float) b10) / ((float) j11);
                        }
                        this.f56179n.set(0, readSampleData, b10, i10);
                        this.f56182b.b(this.f56188h, this.f56178m, this.f56179n);
                    }
                    this.f56181a.advance();
                }
            } else {
                this.f56178m.clear();
                this.f56192l = 1.0f;
                this.f56180o = 4;
                Log.d(f56177p, "Reach EoS on input stream");
            }
            return this.f56180o;
        }
    }

    @Override // yl.c
    public void h() {
        this.f56181a.selectTrack(this.f56187g);
        this.f56179n = new MediaCodec.BufferInfo();
    }

    @Override // yl.c
    public void i() {
        ByteBuffer byteBuffer = this.f56178m;
        if (byteBuffer != null) {
            byteBuffer.clear();
            this.f56178m = null;
        }
    }
}
