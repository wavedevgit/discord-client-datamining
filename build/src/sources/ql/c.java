package ql;

import android.media.MediaCodec;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c {

    /* renamed from: a  reason: collision with root package name */
    public final int f45455a;

    /* renamed from: b  reason: collision with root package name */
    public final ByteBuffer f45456b;

    /* renamed from: c  reason: collision with root package name */
    public final MediaCodec.BufferInfo f45457c;

    public c(int i10, ByteBuffer byteBuffer, MediaCodec.BufferInfo bufferInfo) {
        this.f45455a = i10;
        this.f45456b = byteBuffer;
        if (bufferInfo == null) {
            this.f45457c = new MediaCodec.BufferInfo();
        } else {
            this.f45457c = bufferInfo;
        }
    }
}
