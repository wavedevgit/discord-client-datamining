package okhttp3;

import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Headers;
import okhttp3.MediaType;
import okhttp3.RequestBody;
import okio.Buffer;
import okio.BufferedSink;
import okio.ByteString;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class MultipartBody extends RequestBody {

    /* renamed from: f  reason: collision with root package name */
    public static final a f42879f = new a(null);

    /* renamed from: g  reason: collision with root package name */
    public static final MediaType f42880g;

    /* renamed from: h  reason: collision with root package name */
    public static final MediaType f42881h;

    /* renamed from: i  reason: collision with root package name */
    public static final MediaType f42882i;

    /* renamed from: j  reason: collision with root package name */
    public static final MediaType f42883j;

    /* renamed from: k  reason: collision with root package name */
    public static final MediaType f42884k;

    /* renamed from: l  reason: collision with root package name */
    private static final byte[] f42885l;

    /* renamed from: m  reason: collision with root package name */
    private static final byte[] f42886m;

    /* renamed from: n  reason: collision with root package name */
    private static final byte[] f42887n;

    /* renamed from: a  reason: collision with root package name */
    private final ByteString f42888a;

    /* renamed from: b  reason: collision with root package name */
    private final MediaType f42889b;

    /* renamed from: c  reason: collision with root package name */
    private final List f42890c;

    /* renamed from: d  reason: collision with root package name */
    private final MediaType f42891d;

    /* renamed from: e  reason: collision with root package name */
    private long f42892e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Builder {

        /* renamed from: a  reason: collision with root package name */
        private final ByteString f42893a;

        /* renamed from: b  reason: collision with root package name */
        private MediaType f42894b;

        /* renamed from: c  reason: collision with root package name */
        private final List f42895c;

        public Builder() {
            this(null, 1, null);
        }

        public final Builder a(String name, String value) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(value, "value");
            c(b.f42896c.b(name, value));
            return this;
        }

        public final Builder b(Headers headers, RequestBody body) {
            Intrinsics.checkNotNullParameter(body, "body");
            c(b.f42896c.a(headers, body));
            return this;
        }

        public final Builder c(b part) {
            Intrinsics.checkNotNullParameter(part, "part");
            this.f42895c.add(part);
            return this;
        }

        public final MultipartBody d() {
            if (!this.f42895c.isEmpty()) {
                return new MultipartBody(this.f42893a, this.f42894b, cu.e.V(this.f42895c));
            }
            throw new IllegalStateException("Multipart body must have at least one part.");
        }

        public final Builder e(MediaType type) {
            Intrinsics.checkNotNullParameter(type, "type");
            if (Intrinsics.areEqual(type.h(), "multipart")) {
                this.f42894b = type;
                return this;
            }
            throw new IllegalArgumentException(("multipart != " + type).toString());
        }

        public Builder(String boundary) {
            Intrinsics.checkNotNullParameter(boundary, "boundary");
            this.f42893a = ByteString.f43166o.g(boundary);
            this.f42894b = MultipartBody.f42880g;
            this.f42895c = new ArrayList();
        }

        /* JADX WARN: Illegal instructions before constructor call */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public /* synthetic */ Builder(java.lang.String r1, int r2, kotlin.jvm.internal.DefaultConstructorMarker r3) {
            /*
                r0 = this;
                r2 = r2 & 1
                if (r2 == 0) goto L11
                java.util.UUID r1 = java.util.UUID.randomUUID()
                java.lang.String r1 = r1.toString()
                java.lang.String r2 = "randomUUID().toString()"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r1, r2)
            L11:
                r0.<init>(r1)
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: okhttp3.MultipartBody.Builder.<init>(java.lang.String, int, kotlin.jvm.internal.DefaultConstructorMarker):void");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final void a(StringBuilder sb2, String key) {
            Intrinsics.checkNotNullParameter(sb2, "<this>");
            Intrinsics.checkNotNullParameter(key, "key");
            sb2.append('\"');
            int length = key.length();
            for (int i10 = 0; i10 < length; i10++) {
                char charAt = key.charAt(i10);
                if (charAt == '\n') {
                    sb2.append("%0A");
                } else if (charAt == '\r') {
                    sb2.append("%0D");
                } else if (charAt == '\"') {
                    sb2.append("%22");
                } else {
                    sb2.append(charAt);
                }
            }
            sb2.append('\"');
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {

        /* renamed from: c  reason: collision with root package name */
        public static final a f42896c = new a(null);

        /* renamed from: a  reason: collision with root package name */
        private final Headers f42897a;

        /* renamed from: b  reason: collision with root package name */
        private final RequestBody f42898b;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a {
            public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
                this();
            }

            public final b a(Headers headers, RequestBody body) {
                String str;
                String str2;
                Intrinsics.checkNotNullParameter(body, "body");
                if (headers != null) {
                    str = headers.c("Content-Type");
                } else {
                    str = null;
                }
                if (str == null) {
                    if (headers != null) {
                        str2 = headers.c("Content-Length");
                    } else {
                        str2 = null;
                    }
                    if (str2 == null) {
                        return new b(headers, body, null);
                    }
                    throw new IllegalArgumentException("Unexpected header: Content-Length");
                }
                throw new IllegalArgumentException("Unexpected header: Content-Type");
            }

            public final b b(String name, String value) {
                Intrinsics.checkNotNullParameter(name, "name");
                Intrinsics.checkNotNullParameter(value, "value");
                return c(name, null, RequestBody.Companion.n(RequestBody.Companion, value, null, 1, null));
            }

            public final b c(String name, String str, RequestBody body) {
                Intrinsics.checkNotNullParameter(name, "name");
                Intrinsics.checkNotNullParameter(body, "body");
                StringBuilder sb2 = new StringBuilder();
                sb2.append("form-data; name=");
                a aVar = MultipartBody.f42879f;
                aVar.a(sb2, name);
                if (str != null) {
                    sb2.append("; filename=");
                    aVar.a(sb2, str);
                }
                String sb3 = sb2.toString();
                Intrinsics.checkNotNullExpressionValue(sb3, "StringBuilder().apply(builderAction).toString()");
                return a(new Headers.a().e("Content-Disposition", sb3).f(), body);
            }

            private a() {
            }
        }

        public /* synthetic */ b(Headers headers, RequestBody requestBody, DefaultConstructorMarker defaultConstructorMarker) {
            this(headers, requestBody);
        }

        public final RequestBody a() {
            return this.f42898b;
        }

        public final Headers b() {
            return this.f42897a;
        }

        private b(Headers headers, RequestBody requestBody) {
            this.f42897a = headers;
            this.f42898b = requestBody;
        }
    }

    static {
        MediaType.a aVar = MediaType.f42872e;
        f42880g = aVar.b("multipart/mixed");
        f42881h = aVar.b("multipart/alternative");
        f42882i = aVar.b("multipart/digest");
        f42883j = aVar.b("multipart/parallel");
        f42884k = aVar.b("multipart/form-data");
        f42885l = new byte[]{58, 32};
        f42886m = new byte[]{13, 10};
        f42887n = new byte[]{45, 45};
    }

    public MultipartBody(ByteString boundaryByteString, MediaType type, List parts) {
        Intrinsics.checkNotNullParameter(boundaryByteString, "boundaryByteString");
        Intrinsics.checkNotNullParameter(type, "type");
        Intrinsics.checkNotNullParameter(parts, "parts");
        this.f42888a = boundaryByteString;
        this.f42889b = type;
        this.f42890c = parts;
        MediaType.a aVar = MediaType.f42872e;
        this.f42891d = aVar.b(type + "; boundary=" + a());
        this.f42892e = -1L;
    }

    /* JADX WARN: Multi-variable type inference failed */
    private final long c(BufferedSink bufferedSink, boolean z10) {
        Buffer buffer;
        if (z10) {
            bufferedSink = new Buffer();
            buffer = bufferedSink;
        } else {
            buffer = 0;
        }
        int size = this.f42890c.size();
        long j10 = 0;
        for (int i10 = 0; i10 < size; i10++) {
            b bVar = (b) this.f42890c.get(i10);
            Headers b10 = bVar.b();
            RequestBody a10 = bVar.a();
            Intrinsics.checkNotNull(bufferedSink);
            bufferedSink.write(f42887n);
            bufferedSink.Z1(this.f42888a);
            bufferedSink.write(f42886m);
            if (b10 != null) {
                int size2 = b10.size();
                for (int i11 = 0; i11 < size2; i11++) {
                    bufferedSink.q0(b10.e(i11)).write(f42885l).q0(b10.j(i11)).write(f42886m);
                }
            }
            MediaType contentType = a10.contentType();
            if (contentType != null) {
                bufferedSink.q0("Content-Type: ").q0(contentType.toString()).write(f42886m);
            }
            long contentLength = a10.contentLength();
            if (contentLength != -1) {
                bufferedSink.q0("Content-Length: ").W0(contentLength).write(f42886m);
            } else if (z10) {
                Intrinsics.checkNotNull(buffer);
                buffer.k();
                return -1L;
            }
            byte[] bArr = f42886m;
            bufferedSink.write(bArr);
            if (z10) {
                j10 += contentLength;
            } else {
                a10.writeTo(bufferedSink);
            }
            bufferedSink.write(bArr);
        }
        Intrinsics.checkNotNull(bufferedSink);
        byte[] bArr2 = f42887n;
        bufferedSink.write(bArr2);
        bufferedSink.Z1(this.f42888a);
        bufferedSink.write(bArr2);
        bufferedSink.write(f42886m);
        if (z10) {
            Intrinsics.checkNotNull(buffer);
            long size3 = j10 + buffer.size();
            buffer.k();
            return size3;
        }
        return j10;
    }

    public final String a() {
        return this.f42888a.M();
    }

    public final List b() {
        return this.f42890c;
    }

    @Override // okhttp3.RequestBody
    public long contentLength() {
        long j10 = this.f42892e;
        if (j10 == -1) {
            long c10 = c(null, true);
            this.f42892e = c10;
            return c10;
        }
        return j10;
    }

    @Override // okhttp3.RequestBody
    public MediaType contentType() {
        return this.f42891d;
    }

    @Override // okhttp3.RequestBody
    public void writeTo(BufferedSink sink) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        c(sink, false);
    }
}
