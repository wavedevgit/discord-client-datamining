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
            final /* synthetic */ MediaType f44183d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ long f44184e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ BufferedSource f44185i;

            a(MediaType mediaType, long j10, BufferedSource bufferedSource) {
                this.f44183d = mediaType;
                this.f44184e = j10;
                this.f44185i = bufferedSource;
            }

            @Override // okhttp3.ResponseBody
            public long contentLength() {
                return this.f44184e;
            }

            @Override // okhttp3.ResponseBody
            public MediaType contentType() {
                return this.f44183d;
            }

            @Override // okhttp3.ResponseBody
            public BufferedSource source() {
                return this.f44185i;
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
                    MediaType.a aVar = MediaType.f44069e;
                    mediaType = aVar.c(mediaType + "; charset=utf-8");
                } else {
                    charset = d10;
                }
            }
            Buffer i22 = new Buffer().i2(str, charset);
            return f(i22, mediaType, i22.size());
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
            return f(new Buffer().a2(byteString), mediaType, byteString.G());
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
        private final BufferedSource f44186d;

        /* renamed from: e  reason: collision with root package name */
        private final Charset f44187e;

        /* renamed from: i  reason: collision with root package name */
        private boolean f44188i;

        /* renamed from: o  reason: collision with root package name */
        private Reader f44189o;

        public a(BufferedSource source, Charset charset) {
            Intrinsics.checkNotNullParameter(source, "source");
            Intrinsics.checkNotNullParameter(charset, "charset");
            this.f44186d = source;
            this.f44187e = charset;
        }

        @Override // java.io.Reader, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            Unit unit;
            this.f44188i = true;
            Reader reader = this.f44189o;
            if (reader != null) {
                reader.close();
                unit = Unit.f33282a;
            } else {
                unit = null;
            }
            if (unit == null) {
                this.f44186d.close();
            }
        }

        @Override // java.io.Reader
        public int read(char[] cbuf, int i10, int i11) {
            Intrinsics.checkNotNullParameter(cbuf, "cbuf");
            if (!this.f44188i) {
                Reader reader = this.f44189o;
                if (reader == null) {
                    reader = new InputStreamReader(this.f44186d.n2(), ut.e.J(this.f44186d, this.f44187e));
                    this.f44189o = reader;
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
                ByteString L1 = source.L1();
                tr.c.a(source, null);
                int G = L1.G();
                if (contentLength != -1 && contentLength != G) {
                    throw new IOException("Content-Length (" + contentLength + ") and stream length (" + G + ") disagree");
                }
                return L1;
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
                byte[] n12 = source.n1();
                tr.c.a(source, null);
                int length = n12.length;
                if (contentLength != -1 && contentLength != length) {
                    throw new IOException("Content-Length (" + contentLength + ") and stream length (" + length + ") disagree");
                }
                return n12;
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
        ut.e.m(source());
    }

    public abstract long contentLength();

    public abstract MediaType contentType();

    public abstract BufferedSource source();

    @NotNull
    public final String string() {
        BufferedSource source = source();
        try {
            String I1 = source.I1(ut.e.J(source, a()));
            tr.c.a(source, null);
            return I1;
        } finally {
        }
    }

    @ir.c
    @NotNull
    public static final ResponseBody create(MediaType mediaType, long j10, @NotNull BufferedSource bufferedSource) {
        return Companion.b(mediaType, j10, bufferedSource);
    }

    @ir.c
    @NotNull
    public static final ResponseBody create(MediaType mediaType, @NotNull String str) {
        return Companion.c(mediaType, str);
    }

    @ir.c
    @NotNull
    public static final ResponseBody create(MediaType mediaType, @NotNull ByteString byteString) {
        return Companion.d(mediaType, byteString);
    }

    @ir.c
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
