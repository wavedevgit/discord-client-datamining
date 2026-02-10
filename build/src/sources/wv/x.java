package wv;

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
    private static final char[] f54222l = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'};

    /* renamed from: m  reason: collision with root package name */
    private static final Pattern f54223m = Pattern.compile("(.*/)?(\\.|%2e|%2E){1,2}(/.*)?");

    /* renamed from: a  reason: collision with root package name */
    private final String f54224a;

    /* renamed from: b  reason: collision with root package name */
    private final HttpUrl f54225b;

    /* renamed from: c  reason: collision with root package name */
    private String f54226c;

    /* renamed from: d  reason: collision with root package name */
    private HttpUrl.a f54227d;

    /* renamed from: e  reason: collision with root package name */
    private final Request.Builder f54228e = new Request.Builder();

    /* renamed from: f  reason: collision with root package name */
    private final Headers.a f54229f;

    /* renamed from: g  reason: collision with root package name */
    private MediaType f54230g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f54231h;

    /* renamed from: i  reason: collision with root package name */
    private MultipartBody.Builder f54232i;

    /* renamed from: j  reason: collision with root package name */
    private f.a f54233j;

    /* renamed from: k  reason: collision with root package name */
    private RequestBody f54234k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a extends RequestBody {

        /* renamed from: a  reason: collision with root package name */
        private final RequestBody f54235a;

        /* renamed from: b  reason: collision with root package name */
        private final MediaType f54236b;

        a(RequestBody requestBody, MediaType mediaType) {
            this.f54235a = requestBody;
            this.f54236b = mediaType;
        }

        @Override // okhttp3.RequestBody
        public long contentLength() {
            return this.f54235a.contentLength();
        }

        @Override // okhttp3.RequestBody
        public MediaType contentType() {
            return this.f54236b;
        }

        @Override // okhttp3.RequestBody
        public void writeTo(BufferedSink bufferedSink) {
            this.f54235a.writeTo(bufferedSink);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public x(String str, HttpUrl httpUrl, String str2, Headers headers, MediaType mediaType, boolean z10, boolean z11, boolean z12) {
        this.f54224a = str;
        this.f54225b = httpUrl;
        this.f54226c = str2;
        this.f54230g = mediaType;
        this.f54231h = z10;
        if (headers != null) {
            this.f54229f = headers.g();
        } else {
            this.f54229f = new Headers.a();
        }
        if (z11) {
            this.f54233j = new f.a();
        } else if (z12) {
            MultipartBody.Builder builder = new MultipartBody.Builder();
            this.f54232i = builder;
            builder.e(MultipartBody.f42059k);
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
                return buffer.R1();
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
                    while (!buffer2.k1()) {
                        byte readByte = buffer2.readByte();
                        buffer.writeByte(37);
                        char[] cArr = f54222l;
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
            this.f54233j.b(str, str2);
        } else {
            this.f54233j.a(str, str2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(String str, String str2, boolean z10) {
        if ("Content-Type".equalsIgnoreCase(str)) {
            try {
                this.f54230g = MediaType.e(str2);
            } catch (IllegalArgumentException e10) {
                throw new IllegalArgumentException("Malformed content type: " + str2, e10);
            }
        } else if (z10) {
            this.f54229f.e(str, str2);
        } else {
            this.f54229f.a(str, str2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(Headers headers) {
        this.f54229f.b(headers);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(Headers headers, RequestBody requestBody) {
        this.f54232i.b(headers, requestBody);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(MultipartBody.b bVar) {
        this.f54232i.c(bVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(String str, String str2, boolean z10) {
        if (this.f54226c != null) {
            String i10 = i(str2, z10);
            String str3 = this.f54226c;
            String replace = str3.replace("{" + str + "}", i10);
            if (!f54223m.matcher(replace).matches()) {
                this.f54226c = replace;
                return;
            }
            throw new IllegalArgumentException("@Path parameters shouldn't perform path traversal ('.' or '..'): " + str2);
        }
        throw new AssertionError();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(String str, String str2, boolean z10) {
        String str3 = this.f54226c;
        if (str3 != null) {
            HttpUrl.a l10 = this.f54225b.l(str3);
            this.f54227d = l10;
            if (l10 != null) {
                this.f54226c = null;
            } else {
                throw new IllegalArgumentException("Malformed URL. Base: " + this.f54225b + ", Relative: " + this.f54226c);
            }
        }
        if (z10) {
            this.f54227d.a(str, str2);
        } else {
            this.f54227d.b(str, str2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h(Class cls, Object obj) {
        this.f54228e.j(cls, obj);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Request.Builder k() {
        HttpUrl r10;
        HttpUrl.a aVar = this.f54227d;
        if (aVar != null) {
            r10 = aVar.c();
        } else {
            r10 = this.f54225b.r(this.f54226c);
            if (r10 == null) {
                throw new IllegalArgumentException("Malformed URL. Base: " + this.f54225b + ", Relative: " + this.f54226c);
            }
        }
        a aVar2 = this.f54234k;
        if (aVar2 == null) {
            f.a aVar3 = this.f54233j;
            if (aVar3 != null) {
                aVar2 = aVar3.c();
            } else {
                MultipartBody.Builder builder = this.f54232i;
                if (builder != null) {
                    aVar2 = builder.d();
                } else if (this.f54231h) {
                    aVar2 = RequestBody.create((MediaType) null, new byte[0]);
                }
            }
        }
        MediaType mediaType = this.f54230g;
        if (mediaType != null) {
            if (aVar2 != null) {
                aVar2 = new a(aVar2, mediaType);
            } else {
                this.f54229f.a("Content-Type", mediaType.toString());
            }
        }
        return this.f54228e.m(r10).f(this.f54229f.f()).g(this.f54224a, aVar2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(RequestBody requestBody) {
        this.f54234k = requestBody;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(Object obj) {
        this.f54226c = obj.toString();
    }
}
