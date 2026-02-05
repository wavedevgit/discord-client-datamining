package okhttp3;

import java.io.File;
import java.nio.charset.Charset;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.Charsets;
import okhttp3.MediaType;
import okio.BufferedSink;
import okio.ByteString;
import okio.Source;
import org.jetbrains.annotations.NotNull;
import ou.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class RequestBody {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends RequestBody {

            /* renamed from: a */
            final /* synthetic */ MediaType f43845a;

            /* renamed from: b */
            final /* synthetic */ File f43846b;

            a(MediaType mediaType, File file) {
                this.f43845a = mediaType;
                this.f43846b = file;
            }

            @Override // okhttp3.RequestBody
            public long contentLength() {
                return this.f43846b.length();
            }

            @Override // okhttp3.RequestBody
            public MediaType contentType() {
                return this.f43845a;
            }

            @Override // okhttp3.RequestBody
            public void writeTo(BufferedSink sink) {
                Intrinsics.checkNotNullParameter(sink, "sink");
                Source j10 = x.j(this.f43846b);
                try {
                    sink.z0(j10);
                    zr.c.a(j10, null);
                } finally {
                }
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class b extends RequestBody {

            /* renamed from: a */
            final /* synthetic */ MediaType f43847a;

            /* renamed from: b */
            final /* synthetic */ ByteString f43848b;

            b(MediaType mediaType, ByteString byteString) {
                this.f43847a = mediaType;
                this.f43848b = byteString;
            }

            @Override // okhttp3.RequestBody
            public long contentLength() {
                return this.f43848b.G();
            }

            @Override // okhttp3.RequestBody
            public MediaType contentType() {
                return this.f43847a;
            }

            @Override // okhttp3.RequestBody
            public void writeTo(BufferedSink sink) {
                Intrinsics.checkNotNullParameter(sink, "sink");
                sink.a2(this.f43848b);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class c extends RequestBody {

            /* renamed from: a */
            final /* synthetic */ MediaType f43849a;

            /* renamed from: b */
            final /* synthetic */ int f43850b;

            /* renamed from: c */
            final /* synthetic */ byte[] f43851c;

            /* renamed from: d */
            final /* synthetic */ int f43852d;

            c(MediaType mediaType, int i10, byte[] bArr, int i11) {
                this.f43849a = mediaType;
                this.f43850b = i10;
                this.f43851c = bArr;
                this.f43852d = i11;
            }

            @Override // okhttp3.RequestBody
            public long contentLength() {
                return this.f43850b;
            }

            @Override // okhttp3.RequestBody
            public MediaType contentType() {
                return this.f43849a;
            }

            @Override // okhttp3.RequestBody
            public void writeTo(BufferedSink sink) {
                Intrinsics.checkNotNullParameter(sink, "sink");
                sink.write(this.f43851c, this.f43852d, this.f43850b);
            }
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public static /* synthetic */ RequestBody n(Companion companion, String str, MediaType mediaType, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                mediaType = null;
            }
            return companion.b(str, mediaType);
        }

        public static /* synthetic */ RequestBody o(Companion companion, MediaType mediaType, byte[] bArr, int i10, int i11, int i12, Object obj) {
            if ((i12 & 4) != 0) {
                i10 = 0;
            }
            if ((i12 & 8) != 0) {
                i11 = bArr.length;
            }
            return companion.h(mediaType, bArr, i10, i11);
        }

        public static /* synthetic */ RequestBody p(Companion companion, byte[] bArr, MediaType mediaType, int i10, int i11, int i12, Object obj) {
            if ((i12 & 1) != 0) {
                mediaType = null;
            }
            if ((i12 & 2) != 0) {
                i10 = 0;
            }
            if ((i12 & 4) != 0) {
                i11 = bArr.length;
            }
            return companion.m(bArr, mediaType, i10, i11);
        }

        public final RequestBody a(File file, MediaType mediaType) {
            Intrinsics.checkNotNullParameter(file, "<this>");
            return new a(mediaType, file);
        }

        public final RequestBody b(String str, MediaType mediaType) {
            Intrinsics.checkNotNullParameter(str, "<this>");
            Charset charset = Charsets.UTF_8;
            if (mediaType != null) {
                Charset d10 = MediaType.d(mediaType, null, 1, null);
                if (d10 == null) {
                    MediaType.a aVar = MediaType.f43766e;
                    mediaType = aVar.c(mediaType + "; charset=utf-8");
                } else {
                    charset = d10;
                }
            }
            byte[] bytes = str.getBytes(charset);
            Intrinsics.checkNotNullExpressionValue(bytes, "this as java.lang.String).getBytes(charset)");
            return m(bytes, mediaType, 0, bytes.length);
        }

        public final RequestBody c(MediaType mediaType, File file) {
            Intrinsics.checkNotNullParameter(file, "file");
            return a(file, mediaType);
        }

        public final RequestBody d(MediaType mediaType, String content) {
            Intrinsics.checkNotNullParameter(content, "content");
            return b(content, mediaType);
        }

        public final RequestBody e(MediaType mediaType, ByteString content) {
            Intrinsics.checkNotNullParameter(content, "content");
            return i(content, mediaType);
        }

        public final RequestBody f(MediaType mediaType, byte[] content) {
            Intrinsics.checkNotNullParameter(content, "content");
            return o(this, mediaType, content, 0, 0, 12, null);
        }

        public final RequestBody g(MediaType mediaType, byte[] content, int i10) {
            Intrinsics.checkNotNullParameter(content, "content");
            return o(this, mediaType, content, i10, 0, 8, null);
        }

        public final RequestBody h(MediaType mediaType, byte[] content, int i10, int i11) {
            Intrinsics.checkNotNullParameter(content, "content");
            return m(content, mediaType, i10, i11);
        }

        public final RequestBody i(ByteString byteString, MediaType mediaType) {
            Intrinsics.checkNotNullParameter(byteString, "<this>");
            return new b(mediaType, byteString);
        }

        public final RequestBody j(byte[] bArr) {
            Intrinsics.checkNotNullParameter(bArr, "<this>");
            return p(this, bArr, null, 0, 0, 7, null);
        }

        public final RequestBody k(byte[] bArr, MediaType mediaType) {
            Intrinsics.checkNotNullParameter(bArr, "<this>");
            return p(this, bArr, mediaType, 0, 0, 6, null);
        }

        public final RequestBody l(byte[] bArr, MediaType mediaType, int i10) {
            Intrinsics.checkNotNullParameter(bArr, "<this>");
            return p(this, bArr, mediaType, i10, 0, 4, null);
        }

        public final RequestBody m(byte[] bArr, MediaType mediaType, int i10, int i11) {
            Intrinsics.checkNotNullParameter(bArr, "<this>");
            au.e.l(bArr.length, i10, i11);
            return new c(mediaType, i11, bArr, i10);
        }

        private Companion() {
        }
    }

    @NotNull
    public static final RequestBody create(@NotNull File file, MediaType mediaType) {
        return Companion.a(file, mediaType);
    }

    public long contentLength() {
        return -1L;
    }

    public abstract MediaType contentType();

    public boolean isDuplex() {
        return false;
    }

    public boolean isOneShot() {
        return false;
    }

    public abstract void writeTo(BufferedSink bufferedSink);

    @NotNull
    public static final RequestBody create(@NotNull String str, MediaType mediaType) {
        return Companion.b(str, mediaType);
    }

    @or.c
    @NotNull
    public static final RequestBody create(MediaType mediaType, @NotNull File file) {
        return Companion.c(mediaType, file);
    }

    @or.c
    @NotNull
    public static final RequestBody create(MediaType mediaType, @NotNull String str) {
        return Companion.d(mediaType, str);
    }

    @or.c
    @NotNull
    public static final RequestBody create(MediaType mediaType, @NotNull ByteString byteString) {
        return Companion.e(mediaType, byteString);
    }

    @or.c
    @NotNull
    public static final RequestBody create(MediaType mediaType, @NotNull byte[] bArr) {
        return Companion.f(mediaType, bArr);
    }

    @or.c
    @NotNull
    public static final RequestBody create(MediaType mediaType, @NotNull byte[] bArr, int i10) {
        return Companion.g(mediaType, bArr, i10);
    }

    @or.c
    @NotNull
    public static final RequestBody create(MediaType mediaType, @NotNull byte[] bArr, int i10, int i11) {
        return Companion.h(mediaType, bArr, i10, i11);
    }

    @NotNull
    public static final RequestBody create(@NotNull ByteString byteString, MediaType mediaType) {
        return Companion.i(byteString, mediaType);
    }

    @NotNull
    public static final RequestBody create(@NotNull byte[] bArr) {
        return Companion.j(bArr);
    }

    @NotNull
    public static final RequestBody create(@NotNull byte[] bArr, MediaType mediaType) {
        return Companion.k(bArr, mediaType);
    }

    @NotNull
    public static final RequestBody create(@NotNull byte[] bArr, MediaType mediaType, int i10) {
        return Companion.l(bArr, mediaType, i10);
    }

    @NotNull
    public static final RequestBody create(@NotNull byte[] bArr, MediaType mediaType, int i10, int i11) {
        return Companion.m(bArr, mediaType, i10, i11);
    }
}
