package ql;

import android.media.MediaCodec;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    public final int f45454a;

    /* renamed from: b  reason: collision with root package name */
    public final ByteBuffer f45455b;

    /* renamed from: c  reason: collision with root package name */
    public final MediaCodec.BufferInfo f45456c;

    public c(int i10, ByteBuffer byteBuffer, MediaCodec.BufferInfo bufferInfo) {
        this.f45454a = i10;
        this.f45455b = byteBuffer;
        if (bufferInfo == null) {
            this.f45456c = new MediaCodec.BufferInfo();
        } else {
            this.f45456c = bufferInfo;
        }
    }
}
