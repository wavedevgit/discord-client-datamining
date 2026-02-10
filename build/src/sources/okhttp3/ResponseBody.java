package okhttp3;

import java.io.Closeable;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.nio.charset.Charset;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.Charsets;
import okhttp3.MediaType;
import okio.Buffer;
import okio.BufferedSource;
import okio.ByteString;
import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class ResponseBody implements Closeable {
    @NotNull
    public static final Companion Companion = new Companion(null);
    private Reader reader;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends ResponseBody {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ MediaType f42161d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ long f42162e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ BufferedSource f42163i;

            a(MediaType mediaType, long j10, BufferedSource bufferedSource) {
                this.f42161d = mediaType;
                this.f42162e = j10;
                this.f42163i = bufferedSource;
            }

            @Override // okhttp3.ResponseBody
            public long contentLength() {
                return this.f42162e;
            }

            @Override // okhttp3.ResponseBody
            public MediaType contentType() {
                return this.f42161d;
            }

            @Override // okhttp3.ResponseBody
            public BufferedSource source() {
                return this.f42163i;
            }
        }

        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public static /* synthetic */ ResponseBody i(Companion companion, byte[] bArr, MediaType mediaType, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                mediaType = null;
            }
            return companion.h(bArr, mediaType);
        }

        public final ResponseBody a(String str, MediaType mediaType) {
            Intrinsics.checkNotNullParameter(str, "<this>");
            Charset charset = Charsets.UTF_8;
            if (mediaType != null) {
                Charset d10 = MediaType.d(mediaType, null, 1, null);
                if (d10 == null) {
                    MediaType.a aVar = MediaType.f42047e;
                    mediaType = aVar.c(mediaType + "; charset=utf-8");
                } else {
                    charset = d10;
                }
            }
            Buffer h22 = new Buffer().h2(str, charset);
            return f(h22, mediaType, h22.size());
        }

        public final ResponseBody b(MediaType mediaType, long j10, BufferedSource content) {
            Intrinsics.checkNotNullParameter(content, "content");
            return f(content, mediaType, j10);
        }

        public final ResponseBody c(MediaType mediaType, String content) {
            Intrinsics.checkNotNullParameter(content, "content");
            return a(content, mediaType);
        }

        public final ResponseBody d(MediaType mediaType, ByteString content) {
            Intrinsics.checkNotNullParameter(content, "content");
            return g(content, mediaType);
        }

        public final ResponseBody e(MediaType mediaType, byte[] content) {
            Intrinsics.checkNotNullParameter(content, "content");
            return h(content, mediaType);
        }

        public final ResponseBody f(BufferedSource bufferedSource, MediaType mediaType, long j10) {
            Intrinsics.checkNotNullParameter(bufferedSource, "<this>");
            return new a(mediaType, j10, bufferedSource);
        }

        public final ResponseBody g(ByteString byteString, MediaType mediaType) {
            Intrinsics.checkNotNullParameter(byteString, "<this>");
            return f(new Buffer().Y1(byteString), mediaType, byteString.G());
        }

        public final ResponseBody h(byte[] bArr, MediaType mediaType) {
            Intrinsics.checkNotNullParameter(bArr, "<this>");
            return f(new Buffer().write(bArr), mediaType, bArr.length);
        }

        private Companion() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends Reader {

        /* renamed from: d  reason: collision with root package name */
        private final BufferedSource f42164d;

        /* renamed from: e  reason: collision with root package name */
        private final Charset f42165e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f42166i;

        /* renamed from: o  reason: collision with root package name */
        private Reader f42167o;

        public a(BufferedSource source, Charset charset) {
            Intrinsics.checkNotNullParameter(source, "source");
            Intrinsics.checkNotNullParameter(charset, "charset");
            this.f42164d = source;
            this.f42165e = charset;
        }

        @Override // java.io.Reader, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            Unit unit;
            this.f42166i = true;
            Reader reader = this.f42167o;
            if (reader != null) {
                reader.close();
                unit = Unit.f31765a;
            } else {
                unit = null;
            }
            if (unit == null) {
                this.f42164d.close();
            }
        }

        @Override // java.io.Reader
        public int read(char[] cbuf, int i10, int i11) {
            Intrinsics.checkNotNullParameter(cbuf, "cbuf");
            if (!this.f42166i) {
                Reader reader = this.f42167o;
                if (reader == null) {
                    reader = new InputStreamReader(this.f42164d.n2(), du.e.J(this.f42164d, this.f42165e));
                    this.f42167o = reader;
                }
                return reader.read(cbuf, i10, i11);
            }
            throw new IOException("Stream closed");
        }
    }

    private final Charset a() {
        Charset c10;
        MediaType contentType = contentType();
        if (contentType != null && (c10 = contentType.c(Charsets.UTF_8)) != null) {
            return c10;
        }
        return Charsets.UTF_8;
    }

    @NotNull
    public static final ResponseBody create(@NotNull String str, MediaType mediaType) {
        return Companion.a(str, mediaType);
    }

    @NotNull
    public final InputStream byteStream() {
        return source().n2();
    }

    @NotNull
    public final ByteString byteString() {
        long contentLength = contentLength();
        if (contentLength <= 2147483647L) {
            BufferedSource source = source();
            try {
                ByteString I1 = source.I1();
                cs.c.a(source, null);
                int G = I1.G();
                if (contentLength != -1 && contentLength != G) {
                    throw new IOException("Content-Length (" + contentLength + ") and stream length (" + G + ") disagree");
                }
                return I1;
            } finally {
            }
        } else {
            throw new IOException("Cannot buffer entire body for content length: " + contentLength);
        }
    }

    @NotNull
    public final byte[] bytes() {
        long contentLength = contentLength();
        if (contentLength <= 2147483647L) {
            BufferedSource source = source();
            try {
                byte[] j12 = source.j1();
                cs.c.a(source, null);
                int length = j12.length;
                if (contentLength != -1 && contentLength != length) {
                    throw new IOException("Content-Length (" + contentLength + ") and stream length (" + length + ") disagree");
                }
                return j12;
            } finally {
            }
        } else {
            throw new IOException("Cannot buffer entire body for content length: " + contentLength);
        }
    }

    @NotNull
    public final Reader charStream() {
        Reader reader = this.reader;
        if (reader == null) {
            a aVar = new a(source(), a());
            this.reader = aVar;
            return aVar;
        }
        return reader;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        du.e.m(source());
    }

    public abstract long contentLength();

    public abstract MediaType contentType();

    public abstract BufferedSource source();

    @NotNull
    public final String string() {
        BufferedSource source = source();
        try {
            String D1 = source.D1(du.e.J(source, a()));
            cs.c.a(source, null);
            return D1;
        } finally {
        }
    }

    @rr.c
    @NotNull
    public static final ResponseBody create(MediaType mediaType, long j10, @NotNull BufferedSource bufferedSource) {
        return Companion.b(mediaType, j10, bufferedSource);
    }

    @rr.c
    @NotNull
    public static final ResponseBody create(MediaType mediaType, @NotNull String str) {
        return Companion.c(mediaType, str);
    }

    @rr.c
    @NotNull
    public static final ResponseBody create(MediaType mediaType, @NotNull ByteString byteString) {
        return Companion.d(mediaType, byteString);
    }

    @rr.c
    @NotNull
    public static final ResponseBody create(MediaType mediaType, @NotNull byte[] bArr) {
        return Companion.e(mediaType, bArr);
    }

    @NotNull
    public static final ResponseBody create(@NotNull BufferedSource bufferedSource, MediaType mediaType, long j10) {
        return Companion.f(bufferedSource, mediaType, j10);
    }

    @NotNull
    public static final ResponseBody create(@NotNull ByteString byteString, MediaType mediaType) {
        return Companion.g(byteString, mediaType);
    }

    @NotNull
    public static final ResponseBody create(@NotNull byte[] bArr, MediaType mediaType) {
        return Companion.h(bArr, mediaType);
    }
}
