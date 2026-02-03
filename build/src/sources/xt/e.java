package xt;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import j$.util.DesugarTimeZone;
import java.io.Closeable;
import java.io.File;
import java.io.IOException;
import java.io.InterruptedIOException;
import java.net.Socket;
import java.net.SocketTimeoutException;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.TimeZone;
import java.util.concurrent.ThreadFactory;
import java.util.concurrent.TimeUnit;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.collections.i;
import kotlin.collections.m0;
import kotlin.collections.o0;
import kotlin.jvm.internal.ArrayIteratorKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.LongCompanionObject;
import kotlin.jvm.internal.StringCompanionObject;
import kotlin.ranges.IntRange;
import kotlin.text.Charsets;
import kotlin.text.Regex;
import kotlin.text.StringsKt;
import lu.a0;
import okhttp3.Call;
import okhttp3.Headers;
import okhttp3.HttpUrl;
import okhttp3.OkHttpClient;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;
import okhttp3.e;
import okio.Buffer;
import okio.BufferedSink;
import okio.BufferedSource;
import okio.ByteString;
import okio.Sink;
import okio.Source;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class e {

    /* renamed from: a */
    public static final byte[] f53567a;

    /* renamed from: b */
    public static final Headers f53568b = Headers.f43989e.i(new String[0]);

    /* renamed from: c */
    public static final ResponseBody f53569c;

    /* renamed from: d */
    public static final RequestBody f53570d;

    /* renamed from: e */
    private static final a0 f53571e;

    /* renamed from: f */
    public static final TimeZone f53572f;

    /* renamed from: g */
    private static final Regex f53573g;

    /* renamed from: h */
    public static final boolean f53574h;

    /* renamed from: i */
    public static final String f53575i;

    static {
        byte[] bArr = new byte[0];
        f53567a = bArr;
        f53569c = ResponseBody.Companion.i(ResponseBody.Companion, bArr, null, 1, null);
        f53570d = RequestBody.Companion.p(RequestBody.Companion, bArr, null, 0, 0, 7, null);
        a0.a aVar = a0.f37256o;
        ByteString.a aVar2 = ByteString.f44307o;
        f53571e = aVar.d(aVar2.e("efbbbf"), aVar2.e("feff"), aVar2.e("fffe"), aVar2.e("0000ffff"), aVar2.e("ffff0000"));
        TimeZone timeZone = DesugarTimeZone.getTimeZone("GMT");
        Intrinsics.checkNotNull(timeZone);
        f53572f = timeZone;
        f53573g = new Regex("([0-9a-fA-F]*:[0-9a-fA-F:.]*)|([\\d.]+)");
        f53574h = false;
        String name = OkHttpClient.class.getName();
        Intrinsics.checkNotNullExpressionValue(name, "OkHttpClient::class.java.name");
        f53575i = StringsKt.D0(StringsKt.B0(name, "okhttp3."), "Client");
    }

    public static /* synthetic */ int A(String str, int i10, int i11, int i12, Object obj) {
        if ((i12 & 1) != 0) {
            i10 = 0;
        }
        if ((i12 & 2) != 0) {
            i11 = str.length();
        }
        return z(str, i10, i11);
    }

    public static final int B(String str, int i10, int i11) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        int i12 = i11 - 1;
        if (i10 <= i12) {
            while (true) {
                char charAt = str.charAt(i12);
                if (charAt == '\t' || charAt == '\n' || charAt == '\f' || charAt == '\r' || charAt == ' ') {
                    if (i12 == i10) {
                        break;
                    }
                    i12--;
                } else {
                    return i12 + 1;
                }
            }
        }
        return i10;
    }

    public static /* synthetic */ int C(String str, int i10, int i11, int i12, Object obj) {
        if ((i12 & 1) != 0) {
            i10 = 0;
        }
        if ((i12 & 2) != 0) {
            i11 = str.length();
        }
        return B(str, i10, i11);
    }

    public static final int D(String str, int i10) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        int length = str.length();
        while (i10 < length) {
            char charAt = str.charAt(i10);
            if (charAt != ' ' && charAt != '\t') {
                return i10;
            }
            i10++;
        }
        return str.length();
    }

    public static final String[] E(String[] strArr, String[] other, Comparator comparator) {
        Intrinsics.checkNotNullParameter(strArr, "<this>");
        Intrinsics.checkNotNullParameter(other, "other");
        Intrinsics.checkNotNullParameter(comparator, "comparator");
        ArrayList arrayList = new ArrayList();
        for (String str : strArr) {
            int length = other.length;
            int i10 = 0;
            while (true) {
                if (i10 >= length) {
                    break;
                } else if (comparator.compare(str, other[i10]) == 0) {
                    arrayList.add(str);
                    break;
                } else {
                    i10++;
                }
            }
        }
        return (String[]) arrayList.toArray(new String[0]);
    }

    public static final boolean F(fu.a aVar, File file) {
        Intrinsics.checkNotNullParameter(aVar, "<this>");
        Intrinsics.checkNotNullParameter(file, "file");
        Sink f10 = aVar.f(file);
        try {
            try {
                aVar.h(file);
                wr.c.a(f10, null);
                return true;
            } catch (IOException unused) {
                Unit unit = Unit.f32464a;
                wr.c.a(f10, null);
                aVar.h(file);
                return false;
            }
        } catch (Throwable th2) {
            try {
                throw th2;
            } catch (Throwable th3) {
                wr.c.a(f10, th2);
                throw th3;
            }
        }
    }

    public static final boolean G(Socket socket, BufferedSource source) {
        Intrinsics.checkNotNullParameter(socket, "<this>");
        Intrinsics.checkNotNullParameter(source, "source");
        try {
            int soTimeout = socket.getSoTimeout();
            try {
                socket.setSoTimeout(1);
                return !source.o1();
            } finally {
                socket.setSoTimeout(soTimeout);
            }
        } catch (SocketTimeoutException unused) {
            return true;
        } catch (IOException unused2) {
            return false;
        }
    }

    public static final boolean H(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        if (StringsKt.A(name, "Authorization", true) || StringsKt.A(name, "Cookie", true) || StringsKt.A(name, "Proxy-Authorization", true) || StringsKt.A(name, "Set-Cookie", true)) {
            return true;
        }
        return false;
    }

    public static final int I(char c10) {
        if ('0' <= c10 && c10 < ':') {
            return c10 - '0';
        }
        if ('a' <= c10 && c10 < 'g') {
            return c10 - 'W';
        }
        if ('A' <= c10 && c10 < 'G') {
            return c10 - '7';
        }
        return -1;
    }

    public static final Charset J(BufferedSource bufferedSource, Charset charset) {
        Intrinsics.checkNotNullParameter(bufferedSource, "<this>");
        Intrinsics.checkNotNullParameter(charset, "default");
        int U0 = bufferedSource.U0(f53571e);
        if (U0 != -1) {
            if (U0 != 0) {
                if (U0 != 1) {
                    if (U0 != 2) {
                        if (U0 != 3) {
                            if (U0 == 4) {
                                return Charsets.f35376a.b();
                            }
                            throw new AssertionError();
                        }
                        return Charsets.f35376a.a();
                    }
                    Charset UTF_16LE = StandardCharsets.UTF_16LE;
                    Intrinsics.checkNotNullExpressionValue(UTF_16LE, "UTF_16LE");
                    return UTF_16LE;
                }
                Charset UTF_16BE = StandardCharsets.UTF_16BE;
                Intrinsics.checkNotNullExpressionValue(UTF_16BE, "UTF_16BE");
                return UTF_16BE;
            }
            Charset UTF_8 = StandardCharsets.UTF_8;
            Intrinsics.checkNotNullExpressionValue(UTF_8, "UTF_8");
            return UTF_8;
        }
        return charset;
    }

    public static final int K(BufferedSource bufferedSource) {
        Intrinsics.checkNotNullParameter(bufferedSource, "<this>");
        return d(bufferedSource.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY) | (d(bufferedSource.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY) << 16) | (d(bufferedSource.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY) << 8);
    }

    public static final int L(Buffer buffer, byte b10) {
        Intrinsics.checkNotNullParameter(buffer, "<this>");
        int i10 = 0;
        while (!buffer.o1() && buffer.D0(0L) == b10) {
            i10++;
            buffer.readByte();
        }
        return i10;
    }

    public static final boolean M(Source source, int i10, TimeUnit timeUnit) {
        long j10;
        Intrinsics.checkNotNullParameter(source, "<this>");
        Intrinsics.checkNotNullParameter(timeUnit, "timeUnit");
        long nanoTime = System.nanoTime();
        if (source.timeout().e()) {
            j10 = source.timeout().c() - nanoTime;
        } else {
            j10 = Long.MAX_VALUE;
        }
        source.timeout().d(Math.min(j10, timeUnit.toNanos(i10)) + nanoTime);
        try {
            Buffer buffer = new Buffer();
            while (source.read(buffer, 8192L) != -1) {
                buffer.l();
            }
            if (j10 == LongCompanionObject.MAX_VALUE) {
                source.timeout().a();
                return true;
            }
            source.timeout().d(nanoTime + j10);
            return true;
        } catch (InterruptedIOException unused) {
            if (j10 == LongCompanionObject.MAX_VALUE) {
                source.timeout().a();
                return false;
            }
            source.timeout().d(nanoTime + j10);
            return false;
        } catch (Throwable th2) {
            if (j10 == LongCompanionObject.MAX_VALUE) {
                source.timeout().a();
            } else {
                source.timeout().d(nanoTime + j10);
            }
            throw th2;
        }
    }

    public static final ThreadFactory N(final String name, final boolean z10) {
        Intrinsics.checkNotNullParameter(name, "name");
        return new ThreadFactory() { // from class: xt.d
            @Override // java.util.concurrent.ThreadFactory
            public final Thread newThread(Runnable runnable) {
                Thread O;
                O = e.O(name, z10, runnable);
                return O;
            }
        };
    }

    public static final Thread O(String name, boolean z10, Runnable runnable) {
        Intrinsics.checkNotNullParameter(name, "$name");
        Thread thread = new Thread(runnable, name);
        thread.setDaemon(z10);
        return thread;
    }

    public static final List P(Headers headers) {
        Intrinsics.checkNotNullParameter(headers, "<this>");
        IntRange u10 = kotlin.ranges.d.u(0, headers.size());
        ArrayList arrayList = new ArrayList(CollectionsKt.w(u10, 10));
        Iterator it = u10.iterator();
        while (it.hasNext()) {
            int nextInt = ((m0) it).nextInt();
            arrayList.add(new eu.c(headers.e(nextInt), headers.j(nextInt)));
        }
        return arrayList;
    }

    public static final Headers Q(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        Headers.a aVar = new Headers.a();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            eu.c cVar = (eu.c) it.next();
            aVar.d(cVar.a().M(), cVar.b().M());
        }
        return aVar.f();
    }

    public static final String R(int i10) {
        String hexString = Integer.toHexString(i10);
        Intrinsics.checkNotNullExpressionValue(hexString, "toHexString(this)");
        return hexString;
    }

    public static final String S(long j10) {
        String hexString = Long.toHexString(j10);
        Intrinsics.checkNotNullExpressionValue(hexString, "toHexString(this)");
        return hexString;
    }

    public static final String T(HttpUrl httpUrl, boolean z10) {
        String i10;
        Intrinsics.checkNotNullParameter(httpUrl, "<this>");
        if (StringsKt.V(httpUrl.i(), ":", false, 2, null)) {
            i10 = '[' + httpUrl.i() + ']';
        } else {
            i10 = httpUrl.i();
        }
        if (!z10 && httpUrl.o() == HttpUrl.f43992k.c(httpUrl.s())) {
            return i10;
        }
        return i10 + ':' + httpUrl.o();
    }

    public static /* synthetic */ String U(HttpUrl httpUrl, boolean z10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            z10 = false;
        }
        return T(httpUrl, z10);
    }

    public static final List V(List list) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        List unmodifiableList = Collections.unmodifiableList(CollectionsKt.j1(list));
        Intrinsics.checkNotNullExpressionValue(unmodifiableList, "unmodifiableList(toMutableList())");
        return unmodifiableList;
    }

    public static final Map W(Map map) {
        Intrinsics.checkNotNullParameter(map, "<this>");
        if (map.isEmpty()) {
            return o0.i();
        }
        Map unmodifiableMap = Collections.unmodifiableMap(new LinkedHashMap(map));
        Intrinsics.checkNotNullExpressionValue(unmodifiableMap, "{\n    Collections.unmodi…(LinkedHashMap(this))\n  }");
        return unmodifiableMap;
    }

    public static final long X(String str, long j10) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        try {
            return Long.parseLong(str);
        } catch (NumberFormatException unused) {
            return j10;
        }
    }

    public static final int Y(String str, int i10) {
        if (str != null) {
            try {
                long parseLong = Long.parseLong(str);
                if (parseLong > 2147483647L) {
                    return Integer.MAX_VALUE;
                }
                if (parseLong < 0) {
                    return 0;
                }
                return (int) parseLong;
            } catch (NumberFormatException unused) {
            }
        }
        return i10;
    }

    public static final String Z(String str, int i10, int i11) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        int z10 = z(str, i10, i11);
        String substring = str.substring(z10, B(str, z10, i11));
        Intrinsics.checkNotNullExpressionValue(substring, "this as java.lang.String…ing(startIndex, endIndex)");
        return substring;
    }

    public static /* synthetic */ String a0(String str, int i10, int i11, int i12, Object obj) {
        if ((i12 & 1) != 0) {
            i10 = 0;
        }
        if ((i12 & 2) != 0) {
            i11 = str.length();
        }
        return Z(str, i10, i11);
    }

    public static final Throwable b0(Exception exc, List suppressed) {
        Intrinsics.checkNotNullParameter(exc, "<this>");
        Intrinsics.checkNotNullParameter(suppressed, "suppressed");
        Iterator it = suppressed.iterator();
        while (it.hasNext()) {
            lr.e.a(exc, (Exception) it.next());
        }
        return exc;
    }

    public static final void c(List list, Object obj) {
        Intrinsics.checkNotNullParameter(list, "<this>");
        if (!list.contains(obj)) {
            list.add(obj);
        }
    }

    public static final void c0(BufferedSink bufferedSink, int i10) {
        Intrinsics.checkNotNullParameter(bufferedSink, "<this>");
        bufferedSink.writeByte((i10 >>> 16) & SetSpanOperation.SPAN_MAX_PRIORITY);
        bufferedSink.writeByte((i10 >>> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
        bufferedSink.writeByte(i10 & SetSpanOperation.SPAN_MAX_PRIORITY);
    }

    public static final int d(byte b10, int i10) {
        return b10 & i10;
    }

    public static final int e(short s10, int i10) {
        return s10 & i10;
    }

    public static final long f(int i10, long j10) {
        return i10 & j10;
    }

    public static final e.c g(final okhttp3.e eVar) {
        Intrinsics.checkNotNullParameter(eVar, "<this>");
        return new e.c() { // from class: xt.c
            @Override // okhttp3.e.c
            public final okhttp3.e a(Call call) {
                okhttp3.e h10;
                h10 = e.h(okhttp3.e.this, call);
                return h10;
            }
        };
    }

    public static final okhttp3.e h(okhttp3.e this_asFactory, Call it) {
        Intrinsics.checkNotNullParameter(this_asFactory, "$this_asFactory");
        Intrinsics.checkNotNullParameter(it, "it");
        return this_asFactory;
    }

    public static final boolean i(String str) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        return f53573g.i(str);
    }

    public static final boolean j(HttpUrl httpUrl, HttpUrl other) {
        Intrinsics.checkNotNullParameter(httpUrl, "<this>");
        Intrinsics.checkNotNullParameter(other, "other");
        if (Intrinsics.areEqual(httpUrl.i(), other.i()) && httpUrl.o() == other.o() && Intrinsics.areEqual(httpUrl.s(), other.s())) {
            return true;
        }
        return false;
    }

    public static final int k(String name, long j10, TimeUnit timeUnit) {
        Intrinsics.checkNotNullParameter(name, "name");
        int i10 = (j10 > 0L ? 1 : (j10 == 0L ? 0 : -1));
        if (i10 >= 0) {
            if (timeUnit != null) {
                long millis = timeUnit.toMillis(j10);
                if (millis <= 2147483647L) {
                    if (millis == 0 && i10 > 0) {
                        throw new IllegalArgumentException((name + " too small.").toString());
                    }
                    return (int) millis;
                }
                throw new IllegalArgumentException((name + " too large.").toString());
            }
            throw new IllegalStateException("unit == null");
        }
        throw new IllegalStateException((name + " < 0").toString());
    }

    public static final void l(long j10, long j11, long j12) {
        if ((j11 | j12) >= 0 && j11 <= j10 && j10 - j11 >= j12) {
            return;
        }
        throw new ArrayIndexOutOfBoundsException();
    }

    public static final void m(Closeable closeable) {
        Intrinsics.checkNotNullParameter(closeable, "<this>");
        try {
            closeable.close();
        } catch (RuntimeException e10) {
            throw e10;
        } catch (Exception unused) {
        }
    }

    public static final void n(Socket socket) {
        Intrinsics.checkNotNullParameter(socket, "<this>");
        try {
            socket.close();
        } catch (AssertionError e10) {
            throw e10;
        } catch (RuntimeException e11) {
            if (Intrinsics.areEqual(e11.getMessage(), "bio == null")) {
                return;
            }
            throw e11;
        } catch (Exception unused) {
        }
    }

    public static final String[] o(String[] strArr, String value) {
        Intrinsics.checkNotNullParameter(strArr, "<this>");
        Intrinsics.checkNotNullParameter(value, "value");
        Object[] copyOf = Arrays.copyOf(strArr, strArr.length + 1);
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(this, newSize)");
        String[] strArr2 = (String[]) copyOf;
        strArr2[i.a0(strArr2)] = value;
        return strArr2;
    }

    public static final int p(String str, char c10, int i10, int i11) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        while (i10 < i11) {
            if (str.charAt(i10) == c10) {
                return i10;
            }
            i10++;
        }
        return i11;
    }

    public static final int q(String str, String delimiters, int i10, int i11) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        Intrinsics.checkNotNullParameter(delimiters, "delimiters");
        while (i10 < i11) {
            if (StringsKt.U(delimiters, str.charAt(i10), false, 2, null)) {
                return i10;
            }
            i10++;
        }
        return i11;
    }

    public static /* synthetic */ int r(String str, char c10, int i10, int i11, int i12, Object obj) {
        if ((i12 & 2) != 0) {
            i10 = 0;
        }
        if ((i12 & 4) != 0) {
            i11 = str.length();
        }
        return p(str, c10, i10, i11);
    }

    public static final boolean s(Source source, int i10, TimeUnit timeUnit) {
        Intrinsics.checkNotNullParameter(source, "<this>");
        Intrinsics.checkNotNullParameter(timeUnit, "timeUnit");
        try {
            return M(source, i10, timeUnit);
        } catch (IOException unused) {
            return false;
        }
    }

    public static final String t(String format, Object... args) {
        Intrinsics.checkNotNullParameter(format, "format");
        Intrinsics.checkNotNullParameter(args, "args");
        StringCompanionObject stringCompanionObject = StringCompanionObject.INSTANCE;
        Locale locale = Locale.US;
        Object[] copyOf = Arrays.copyOf(args, args.length);
        String format2 = String.format(locale, format, Arrays.copyOf(copyOf, copyOf.length));
        Intrinsics.checkNotNullExpressionValue(format2, "format(locale, format, *args)");
        return format2;
    }

    public static final boolean u(String[] strArr, String[] strArr2, Comparator comparator) {
        Intrinsics.checkNotNullParameter(strArr, "<this>");
        Intrinsics.checkNotNullParameter(comparator, "comparator");
        if (strArr.length != 0 && strArr2 != null && strArr2.length != 0) {
            for (String str : strArr) {
                Iterator it = ArrayIteratorKt.iterator(strArr2);
                while (it.hasNext()) {
                    if (comparator.compare(str, (String) it.next()) == 0) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    public static final long v(Response response) {
        Intrinsics.checkNotNullParameter(response, "<this>");
        String c10 = response.E0().c("Content-Length");
        if (c10 == null) {
            return -1L;
        }
        return X(c10, -1L);
    }

    public static final List w(Object... elements) {
        Intrinsics.checkNotNullParameter(elements, "elements");
        Object[] objArr = (Object[]) elements.clone();
        List unmodifiableList = Collections.unmodifiableList(CollectionsKt.o(Arrays.copyOf(objArr, objArr.length)));
        Intrinsics.checkNotNullExpressionValue(unmodifiableList, "unmodifiableList(listOf(*elements.clone()))");
        return unmodifiableList;
    }

    public static final int x(String[] strArr, String value, Comparator comparator) {
        Intrinsics.checkNotNullParameter(strArr, "<this>");
        Intrinsics.checkNotNullParameter(value, "value");
        Intrinsics.checkNotNullParameter(comparator, "comparator");
        int length = strArr.length;
        for (int i10 = 0; i10 < length; i10++) {
            if (comparator.compare(strArr[i10], value) == 0) {
                return i10;
            }
        }
        return -1;
    }

    public static final int y(String str) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        int length = str.length();
        for (int i10 = 0; i10 < length; i10++) {
            char charAt = str.charAt(i10);
            if (Intrinsics.compare((int) charAt, 31) <= 0 || Intrinsics.compare((int) charAt, 127) >= 0) {
                return i10;
            }
        }
        return -1;
    }

    public static final int z(String str, int i10, int i11) {
        Intrinsics.checkNotNullParameter(str, "<this>");
        while (i10 < i11) {
            char charAt = str.charAt(i10);
            if (charAt == '\t' || charAt == '\n' || charAt == '\f' || charAt == '\r' || charAt == ' ') {
                i10++;
            } else {
                return i10;
            }
        }
        return i11;
    }
}
