package iv;

import java.util.regex.Pattern;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.f;
import okio.Buffer;
import okio.BufferedSink;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x {

    /* renamed from: l  reason: collision with root package name */
    private static final char[] f31443l = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'};

    /* renamed from: m  reason: collision with root package name */
    private static final Pattern f31444m = Pattern.compile("(.*/)?(\\.|%2e|%2E){1,2}(/.*)?");

    /* renamed from: a  reason: collision with root package name */
    private final String f31445a;

    /* renamed from: b  reason: collision with root package name */
    private final HttpUrl f31446b;

    /* renamed from: c  reason: collision with root package name */
    private String f31447c;

    /* renamed from: d  reason: collision with root package name */
    private HttpUrl.a f31448d;

    /* renamed from: e  reason: collision with root package name */
    private final Request.Builder f31449e = new Request.Builder();

    /* renamed from: f  reason: collision with root package name */
    private final Headers.a f31450f;

    /* renamed from: g  reason: collision with root package name */
    private MediaType f31451g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f31452h;

    /* renamed from: i  reason: collision with root package name */
    private MultipartBody.Builder f31453i;

    /* renamed from: j  reason: collision with root package name */
    private f.a f31454j;

    /* renamed from: k  reason: collision with root package name */
    private RequestBody f31455k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a extends RequestBody {

        /* renamed from: a  reason: collision with root package name */
        private final RequestBody f31456a;

        /* renamed from: b  reason: collision with root package name */
        private final MediaType f31457b;

        a(RequestBody requestBody, MediaType mediaType) {
            this.f31456a = requestBody;
            this.f31457b = mediaType;
        }

        @Override // okhttp3.RequestBody
        public long contentLength() {
            return this.f31456a.contentLength();
        }

        @Override // okhttp3.RequestBody
        public MediaType contentType() {
            return this.f31457b;
        }

        @Override // okhttp3.RequestBody
        public void writeTo(BufferedSink bufferedSink) {
            this.f31456a.writeTo(bufferedSink);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public x(String str, HttpUrl httpUrl, String str2, Headers headers, MediaType mediaType, boolean z10, boolean z11, boolean z12) {
        this.f31445a = str;
        this.f31446b = httpUrl;
        this.f31447c = str2;
        this.f31451g = mediaType;
        this.f31452h = z10;
        if (headers != null) {
            this.f31450f = headers.g();
        } else {
            this.f31450f = new Headers.a();
        }
        if (z11) {
            this.f31454j = new f.a();
        } else if (z12) {
            MultipartBody.Builder builder = new MultipartBody.Builder();
            this.f31453i = builder;
            builder.e(MultipartBody.f44081k);
        }
    }

    private static String i(String str, boolean z10) {
        int length = str.length();
        int i10 = 0;
        while (i10 < length) {
            int codePointAt = str.codePointAt(i10);
            if (codePointAt >= 32 && codePointAt < 127 && " \"<>^`{}|\\?#".indexOf(codePointAt) == -1 && (z10 || (codePointAt != 47 && codePointAt != 37))) {
                i10 += Character.charCount(codePointAt);
            } else {
                Buffer buffer = new Buffer();
                buffer.w0(str, 0, i10);
                j(buffer, str, i10, length, z10);
                return buffer.T1();
            }
        }
        return str;
    }

    private static void j(Buffer buffer, String str, int i10, int i11, boolean z10) {
        Buffer buffer2 = null;
        while (i10 < i11) {
            int codePointAt = str.codePointAt(i10);
            if (!z10 || (codePointAt != 9 && codePointAt != 10 && codePointAt != 12 && codePointAt != 13)) {
                if (codePointAt >= 32 && codePointAt < 127 && " \"<>^`{}|\\?#".indexOf(codePointAt) == -1 && (z10 || (codePointAt != 47 && codePointAt != 37))) {
                    buffer.p2(codePointAt);
                } else {
                    if (buffer2 == null) {
                        buffer2 = new Buffer();
                    }
                    buffer2.p2(codePointAt);
                    while (!buffer2.o1()) {
                        byte readByte = buffer2.readByte();
                        buffer.writeByte(37);
                        char[] cArr = f31443l;
                        buffer.writeByte(cArr[((readByte & 255) >> 4) & 15]);
                        buffer.writeByte(cArr[readByte & 15]);
                    }
                }
            }
            i10 += Character.charCount(codePointAt);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a(String str, String str2, boolean z10) {
        if (z10) {
            this.f31454j.b(str, str2);
        } else {
            this.f31454j.a(str, str2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(String str, String str2, boolean z10) {
        if ("Content-Type".equalsIgnoreCase(str)) {
            try {
                this.f31451g = MediaType.e(str2);
            } catch (IllegalArgumentException e10) {
                throw new IllegalArgumentException("Malformed content type: " + str2, e10);
            }
        } else if (z10) {
            this.f31450f.e(str, str2);
        } else {
            this.f31450f.a(str, str2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(Headers headers) {
        this.f31450f.b(headers);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(Headers headers, RequestBody requestBody) {
        this.f31453i.b(headers, requestBody);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(MultipartBody.b bVar) {
        this.f31453i.c(bVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(String str, String str2, boolean z10) {
        if (this.f31447c != null) {
            String i10 = i(str2, z10);
            String str3 = this.f31447c;
            String replace = str3.replace("{" + str + "}", i10);
            if (!f31444m.matcher(replace).matches()) {
                this.f31447c = replace;
                return;
            }
            throw new IllegalArgumentException("@Path parameters shouldn't perform path traversal ('.' or '..'): " + str2);
        }
        throw new AssertionError();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(String str, String str2, boolean z10) {
        String str3 = this.f31447c;
        if (str3 != null) {
            HttpUrl.a l10 = this.f31446b.l(str3);
            this.f31448d = l10;
            if (l10 != null) {
                this.f31447c = null;
            } else {
                throw new IllegalArgumentException("Malformed URL. Base: " + this.f31446b + ", Relative: " + this.f31447c);
            }
        }
        if (z10) {
            this.f31448d.a(str, str2);
        } else {
            this.f31448d.b(str, str2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h(Class cls, Object obj) {
        this.f31449e.j(cls, obj);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Request.Builder k() {
        HttpUrl r10;
        HttpUrl.a aVar = this.f31448d;
        if (aVar != null) {
            r10 = aVar.c();
        } else {
            r10 = this.f31446b.r(this.f31447c);
            if (r10 == null) {
                throw new IllegalArgumentException("Malformed URL. Base: " + this.f31446b + ", Relative: " + this.f31447c);
            }
        }
        a aVar2 = this.f31455k;
        if (aVar2 == null) {
            f.a aVar3 = this.f31454j;
            if (aVar3 != null) {
                aVar2 = aVar3.c();
            } else {
                MultipartBody.Builder builder = this.f31453i;
                if (builder != null) {
                    aVar2 = builder.d();
                } else if (this.f31452h) {
                    aVar2 = RequestBody.create((MediaType) null, new byte[0]);
                }
            }
        }
        MediaType mediaType = this.f31451g;
        if (mediaType != null) {
            if (aVar2 != null) {
                aVar2 = new a(aVar2, mediaType);
            } else {
                this.f31450f.a("Content-Type", mediaType.toString());
            }
        }
        return this.f31449e.m(r10).f(this.f31450f.f()).g(this.f31445a, aVar2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(RequestBody requestBody) {
        this.f31455k = requestBody;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(Object obj) {
        this.f31447c = obj.toString();
    }
}
