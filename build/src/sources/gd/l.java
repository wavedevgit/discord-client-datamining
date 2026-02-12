package gd;

import android.media.MediaCodec;
import android.media.MediaCrypto;
import android.media.MediaFormat;
import android.os.Bundle;
import android.os.Handler;
import android.view.Surface;
import com.google.android.exoplayer2.Format;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface l {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final q f25490a;

        /* renamed from: b  reason: collision with root package name */
        public final MediaFormat f25491b;

        /* renamed from: c  reason: collision with root package name */
        public final Format f25492c;

        /* renamed from: d  reason: collision with root package name */
        public final Surface f25493d;

        /* renamed from: e  reason: collision with root package name */
        public final MediaCrypto f25494e;

        /* renamed from: f  reason: collision with root package name */
        public final int f25495f;

        private a(q qVar, MediaFormat mediaFormat, Format format, Surface surface, MediaCrypto mediaCrypto, int i10) {
            this.f25490a = qVar;
            this.f25491b = mediaFormat;
            this.f25492c = format;
            this.f25493d = surface;
            this.f25494e = mediaCrypto;
            this.f25495f = i10;
        }

        public static a a(q qVar, MediaFormat mediaFormat, Format format, MediaCrypto mediaCrypto) {
            return new a(qVar, mediaFormat, format, null, mediaCrypto, 0);
        }

        public static a b(q qVar, MediaFormat mediaFormat, Format format, Surface surface, MediaCrypto mediaCrypto) {
            return new a(qVar, mediaFormat, format, surface, mediaCrypto, 0);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        l a(a aVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface c {
        void a(l lVar, long j10, long j11);
    }

    void a(int i10, int i11, rc.c cVar, long j10, int i12);

    void b(int i10);

    void c(Surface surface);

    boolean d();

    void e(c cVar, Handler handler);

    void f(int i10, long j10);

    void flush();

    int g();

    ByteBuffer getInputBuffer(int i10);

    ByteBuffer getOutputBuffer(int i10);

    MediaFormat getOutputFormat();

    int h(MediaCodec.BufferInfo bufferInfo);

    void queueInputBuffer(int i10, int i11, int i12, long j10, int i13);

    void release();

    void releaseOutputBuffer(int i10, boolean z10);

    void setParameters(Bundle bundle);
}
