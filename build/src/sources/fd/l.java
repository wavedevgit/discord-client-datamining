package fd;

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
        public final q f23778a;

        /* renamed from: b  reason: collision with root package name */
        public final MediaFormat f23779b;

        /* renamed from: c  reason: collision with root package name */
        public final Format f23780c;

        /* renamed from: d  reason: collision with root package name */
        public final Surface f23781d;

        /* renamed from: e  reason: collision with root package name */
        public final MediaCrypto f23782e;

        /* renamed from: f  reason: collision with root package name */
        public final int f23783f;

        private a(q qVar, MediaFormat mediaFormat, Format format, Surface surface, MediaCrypto mediaCrypto, int i10) {
            this.f23778a = qVar;
            this.f23779b = mediaFormat;
            this.f23780c = format;
            this.f23781d = surface;
            this.f23782e = mediaCrypto;
            this.f23783f = i10;
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

    void a(int i10, int i11, qc.c cVar, long j10, int i12);

    void b(c cVar, Handler handler);

    void c(int i10);

    void d(Surface surface);

    boolean e();

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
