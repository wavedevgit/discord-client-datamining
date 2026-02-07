package nl;

import android.media.MediaCodec;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    public final int f40941a;

    /* renamed from: b  reason: collision with root package name */
    public final ByteBuffer f40942b;

    /* renamed from: c  reason: collision with root package name */
    public final MediaCodec.BufferInfo f40943c;

    public c(int i10, ByteBuffer byteBuffer, MediaCodec.BufferInfo bufferInfo) {
        this.f40941a = i10;
        this.f40942b = byteBuffer;
        if (bufferInfo == null) {
            this.f40943c = new MediaCodec.BufferInfo();
        } else {
            this.f40943c = bufferInfo;
        }
    }
}
