package ov;

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
    private static final char[] f44702l = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'};

    /* renamed from: m  reason: collision with root package name */
    private static final Pattern f44703m = Pattern.compile("(.*/)?(\\.|%2e|%2E){1,2}(/.*)?");

    /* renamed from: a  reason: collision with root package name */
    private final String f44704a;

    /* renamed from: b  reason: collision with root package name */
    private final HttpUrl f44705b;

    /* renamed from: c  reason: collision with root package name */
    private String f44706c;

    /* renamed from: d  reason: collision with root package name */
    private HttpUrl.a f44707d;

    /* renamed from: e  reason: collision with root package name */
    private final Request.Builder f44708e = new Request.Builder();

    /* renamed from: f  reason: collision with root package name */
    private final Headers.a f44709f;

    /* renamed from: g  reason: collision with root package name */
    private MediaType f44710g;

    /* renamed from: h  reason: collision with root package name */
    private final boolean f44711h;

    /* renamed from: i  reason: collision with root package name */
    private MultipartBody.Builder f44712i;

    /* renamed from: j  reason: collision with root package name */
    private f.a f44713j;

    /* renamed from: k  reason: collision with root package name */
    private RequestBody f44714k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static class a extends RequestBody {

        /* renamed from: a  reason: collision with root package name */
        private final RequestBody f44715a;

        /* renamed from: b  reason: collision with root package name */
        private final MediaType f44716b;

        a(RequestBody requestBody, MediaType mediaType) {
            this.f44715a = requestBody;
            this.f44716b = mediaType;
        }

        @Override // okhttp3.RequestBody
        public long contentLength() {
            return this.f44715a.contentLength();
        }

        @Override // okhttp3.RequestBody
        public MediaType contentType() {
            return this.f44716b;
        }

        @Override // okhttp3.RequestBody
        public void writeTo(BufferedSink bufferedSink) {
            this.f44715a.writeTo(bufferedSink);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public x(String str, HttpUrl httpUrl, String str2, Headers headers, MediaType mediaType, boolean z10, boolean z11, boolean z12) {
        this.f44704a = str;
        this.f44705b = httpUrl;
        this.f44706c = str2;
        this.f44710g = mediaType;
        this.f44711h = z10;
        if (headers != null) {
            this.f44709f = headers.g();
        } else {
            this.f44709f = new Headers.a();
        }
        if (z11) {
            this.f44713j = new f.a();
        } else if (z12) {
            MultipartBody.Builder builder = new MultipartBody.Builder();
            this.f44712i = builder;
            builder.e(MultipartBody.f43778k);
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
                        char[] cArr = f44702l;
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
            this.f44713j.b(str, str2);
        } else {
            this.f44713j.a(str, str2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b(String str, String str2, boolean z10) {
        if ("Content-Type".equalsIgnoreCase(str)) {
            try {
                this.f44710g = MediaType.e(str2);
            } catch (IllegalArgumentException e10) {
                throw new IllegalArgumentException("Malformed content type: " + str2, e10);
            }
        } else if (z10) {
            this.f44709f.e(str, str2);
        } else {
            this.f44709f.a(str, str2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void c(Headers headers) {
        this.f44709f.b(headers);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void d(Headers headers, RequestBody requestBody) {
        this.f44712i.b(headers, requestBody);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void e(MultipartBody.b bVar) {
        this.f44712i.c(bVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(String str, String str2, boolean z10) {
        if (this.f44706c != null) {
            String i10 = i(str2, z10);
            String str3 = this.f44706c;
            String replace = str3.replace("{" + str + "}", i10);
            if (!f44703m.matcher(replace).matches()) {
                this.f44706c = replace;
                return;
            }
            throw new IllegalArgumentException("@Path parameters shouldn't perform path traversal ('.' or '..'): " + str2);
        }
        throw new AssertionError();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void g(String str, String str2, boolean z10) {
        String str3 = this.f44706c;
        if (str3 != null) {
            HttpUrl.a l10 = this.f44705b.l(str3);
            this.f44707d = l10;
            if (l10 != null) {
                this.f44706c = null;
            } else {
                throw new IllegalArgumentException("Malformed URL. Base: " + this.f44705b + ", Relative: " + this.f44706c);
            }
        }
        if (z10) {
            this.f44707d.a(str, str2);
        } else {
            this.f44707d.b(str, str2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void h(Class cls, Object obj) {
        this.f44708e.j(cls, obj);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public Request.Builder k() {
        HttpUrl r10;
        HttpUrl.a aVar = this.f44707d;
        if (aVar != null) {
            r10 = aVar.c();
        } else {
            r10 = this.f44705b.r(this.f44706c);
            if (r10 == null) {
                throw new IllegalArgumentException("Malformed URL. Base: " + this.f44705b + ", Relative: " + this.f44706c);
            }
        }
        a aVar2 = this.f44714k;
        if (aVar2 == null) {
            f.a aVar3 = this.f44713j;
            if (aVar3 != null) {
                aVar2 = aVar3.c();
            } else {
                MultipartBody.Builder builder = this.f44712i;
                if (builder != null) {
                    aVar2 = builder.d();
                } else if (this.f44711h) {
                    aVar2 = RequestBody.create((MediaType) null, new byte[0]);
                }
            }
        }
        MediaType mediaType = this.f44710g;
        if (mediaType != null) {
            if (aVar2 != null) {
                aVar2 = new a(aVar2, mediaType);
            } else {
                this.f44709f.a("Content-Type", mediaType.toString());
            }
        }
        return this.f44708e.m(r10).f(this.f44709f.f()).g(this.f44704a, aVar2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(RequestBody requestBody) {
        this.f44714k = requestBody;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void m(Object obj) {
        this.f44706c = obj.toString();
    }
}
