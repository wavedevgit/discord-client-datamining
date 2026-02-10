package fw;

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
    private static final char[] f24547l = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'};

    /* renamed from: m  reason: collision with root package name */
    private static final Pattern f24548m = Pattern.compile("(.*/)?(\\.|%2e|%2E){1,2}(/.*)?");

    /* renamed from: a  reason: collision with root package name */
    private final String f24549a;

    /* renamed from: b  reason: collision with root package name */
    private final HttpUrl f24550b;

    /* renamed from: c  reason: collision with root package name */
    private String f24551c;

    /* renamed from: d  reason: collision with root package name */
    private HttpUrl.a f24552d;

    /* renamed from: e  reason: collision with root package name */
    private final Request.Builder f24553e = new Request.Builder();

    /* renamed from: f  reason: collision with root package name */
    private final Headers.a f24554f;

    /* renamed from: g  reason: collision with root package name */
    private MediaType f24555g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f24556h;

    /* renamed from: i  reason: collision with root package name */
    private MultipartBody.Builder f24557i;

    /* renamed from: j  reason: collision with root package name */
    private f.a f24558j;

    /* renamed from: k  reason: collision with root package name */
    private RequestBody f24559k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a extends RequestBody {

        /* renamed from: a  reason: collision with root package name */
        private final RequestBody f24560a;

        /* renamed from: b  reason: collision with root package name */
        private final MediaType f24561b;

        a(RequestBody requestBody, MediaType mediaType) {
            this.f24560a = requestBody;
            this.f24561b = mediaType;
        }

        @Override // okhttp3.RequestBody
        public long contentLength() {
            return this.f24560a.contentLength();
        }

        @Override // okhttp3.RequestBody
        public MediaType contentType() {
            return this.f24561b;
        }

        @Override // okhttp3.RequestBody
        public void writeTo(BufferedSink bufferedSink) {
            this.f24560a.writeTo(bufferedSink);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public x(String str, HttpUrl httpUrl, String str2, Headers headers, MediaType mediaType, boolean z10, boolean z11, boolean z12) {
        this.f24549a = str;
        this.f24550b = httpUrl;
        this.f24551c = str2;
        this.f24555g = mediaType;
        this.f24556h = z10;
        if (headers != null) {
            this.f24554f = headers.g();
        } else {
            this.f24554f = new Headers.a();
        }
        if (z11) {
            this.f24558j = new f.a();
        } else if (z12) {
            MultipartBody.Builder builder = new MultipartBody.Builder();
            this.f24557i = builder;
            builder.e(MultipartBody.f40309k);
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
                buffer.x0(str, 0, i10);
                j(buffer, str, i10, length, z10);
                return buffer.X1();
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
                    buffer.g2(codePointAt);
                } else {
                    if (buffer2 == null) {
                        buffer2 = new Buffer();
                    }
                    buffer2.g2(codePointAt);
                    while (!buffer2.p1()) {
                        byte readByte = buffer2.readByte();
                        buffer.writeByte(37);
                        char[] cArr = f24547l;
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
            this.f24558j.b(str, str2);
        } else {
            this.f24558j.a(str, str2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(String str, String str2, boolean z10) {
        if ("Content-Type".equalsIgnoreCase(str)) {
            try {
                this.f24555g = MediaType.e(str2);
            } catch (IllegalArgumentException e10) {
                throw new IllegalArgumentException("Malformed content type: " + str2, e10);
            }
        } else if (z10) {
            this.f24554f.e(str, str2);
        } else {
            this.f24554f.a(str, str2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(Headers headers) {
        this.f24554f.b(headers);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(Headers headers, RequestBody requestBody) {
        this.f24557i.b(headers, requestBody);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(MultipartBody.b bVar) {
        this.f24557i.c(bVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(String str, String str2, boolean z10) {
        if (this.f24551c != null) {
            String i10 = i(str2, z10);
            String str3 = this.f24551c;
            String replace = str3.replace("{" + str + "}", i10);
            if (!f24548m.matcher(replace).matches()) {
                this.f24551c = replace;
                return;
            }
            throw new IllegalArgumentException("@Path parameters shouldn't perform path traversal ('.' or '..'): " + str2);
        }
        throw new AssertionError();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(String str, String str2, boolean z10) {
        String str3 = this.f24551c;
        if (str3 != null) {
            HttpUrl.a l10 = this.f24550b.l(str3);
            this.f24552d = l10;
            if (l10 != null) {
                this.f24551c = null;
            } else {
                throw new IllegalArgumentException("Malformed URL. Base: " + this.f24550b + ", Relative: " + this.f24551c);
            }
        }
        if (z10) {
            this.f24552d.a(str, str2);
        } else {
            this.f24552d.b(str, str2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h(Class cls, Object obj) {
        this.f24553e.j(cls, obj);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Request.Builder k() {
        HttpUrl r10;
        HttpUrl.a aVar = this.f24552d;
        if (aVar != null) {
            r10 = aVar.c();
        } else {
            r10 = this.f24550b.r(this.f24551c);
            if (r10 == null) {
                throw new IllegalArgumentException("Malformed URL. Base: " + this.f24550b + ", Relative: " + this.f24551c);
            }
        }
        a aVar2 = this.f24559k;
        if (aVar2 == null) {
            f.a aVar3 = this.f24558j;
            if (aVar3 != null) {
                aVar2 = aVar3.c();
            } else {
                MultipartBody.Builder builder = this.f24557i;
                if (builder != null) {
                    aVar2 = builder.d();
                } else if (this.f24556h) {
                    aVar2 = RequestBody.create((MediaType) null, new byte[0]);
                }
            }
        }
        MediaType mediaType = this.f24555g;
        if (mediaType != null) {
            if (aVar2 != null) {
                aVar2 = new a(aVar2, mediaType);
            } else {
                this.f24554f.a("Content-Type", mediaType.toString());
            }
        }
        return this.f24553e.m(r10).f(this.f24554f.f()).g(this.f24549a, aVar2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(RequestBody requestBody) {
        this.f24559k = requestBody;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(Object obj) {
        this.f24551c = obj.toString();
    }
}
