package c6;

import android.os.SystemClock;
import android.text.TextUtils;
import com.android.volley.b;
import com.android.volley.v;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.DataInputStream;
import java.io.EOFException;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.FilterInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class d implements com.android.volley.b {

    /* renamed from: a  reason: collision with root package name */
    private final Map f7237a;

    /* renamed from: b  reason: collision with root package name */
    private long f7238b;

    /* renamed from: c  reason: collision with root package name */
    private final c f7239c;

    /* renamed from: d  reason: collision with root package name */
    private final int f7240d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface c {
        File get();
    }

    public d(c cVar, int i10) {
        this.f7237a = new LinkedHashMap(16, 0.75f, true);
        this.f7238b = 0L;
        this.f7239c = cVar;
        this.f7240d = i10;
    }

    private String g(String str) {
        int length = str.length() / 2;
        String valueOf = String.valueOf(str.substring(0, length).hashCode());
        return valueOf + String.valueOf(str.substring(length).hashCode());
    }

    private void h() {
        if (!this.f7239c.get().exists()) {
            v.b("Re-initializing cache after external clearing.", new Object[0]);
            this.f7237a.clear();
            this.f7238b = 0L;
            initialize();
        }
    }

    private void i() {
        if (this.f7238b >= this.f7240d) {
            int i10 = 0;
            if (v.f8105b) {
                v.e("Pruning old cache entries.", new Object[0]);
            }
            long j10 = this.f7238b;
            long elapsedRealtime = SystemClock.elapsedRealtime();
            Iterator it = this.f7237a.entrySet().iterator();
            while (it.hasNext()) {
                a aVar = (a) ((Map.Entry) it.next()).getValue();
                if (f(aVar.f7242b).delete()) {
                    this.f7238b -= aVar.f7241a;
                } else {
                    String str = aVar.f7242b;
                    v.b("Could not delete cache entry for key=%s, filename=%s", str, g(str));
                }
                it.remove();
                i10++;
                if (((float) this.f7238b) < this.f7240d * 0.9f) {
                    break;
                }
            }
            if (v.f8105b) {
                v.e("pruned %d files, %d bytes, %d ms", Integer.valueOf(i10), Long.valueOf(this.f7238b - j10), Long.valueOf(SystemClock.elapsedRealtime() - elapsedRealtime));
            }
        }
    }

    private void j(String str, a aVar) {
        if (!this.f7237a.containsKey(str)) {
            this.f7238b += aVar.f7241a;
        } else {
            this.f7238b += aVar.f7241a - ((a) this.f7237a.get(str)).f7241a;
        }
        this.f7237a.put(str, aVar);
    }

    private static int k(InputStream inputStream) {
        int read = inputStream.read();
        if (read != -1) {
            return read;
        }
        throw new EOFException();
    }

    static List l(b bVar) {
        List arrayList;
        int m10 = m(bVar);
        if (m10 >= 0) {
            if (m10 == 0) {
                arrayList = Collections.EMPTY_LIST;
            } else {
                arrayList = new ArrayList();
            }
            for (int i10 = 0; i10 < m10; i10++) {
                arrayList.add(new com.android.volley.g(o(bVar).intern(), o(bVar).intern()));
            }
            return arrayList;
        }
        throw new IOException("readHeaderList size=" + m10);
    }

    static int m(InputStream inputStream) {
        return (k(inputStream) << 24) | k(inputStream) | (k(inputStream) << 8) | (k(inputStream) << 16);
    }

    static long n(InputStream inputStream) {
        return (k(inputStream) & 255) | ((k(inputStream) & 255) << 8) | ((k(inputStream) & 255) << 16) | ((k(inputStream) & 255) << 24) | ((k(inputStream) & 255) << 32) | ((k(inputStream) & 255) << 40) | ((k(inputStream) & 255) << 48) | ((255 & k(inputStream)) << 56);
    }

    static String o(b bVar) {
        return new String(r(bVar, n(bVar)), "UTF-8");
    }

    private void q(String str) {
        a aVar = (a) this.f7237a.remove(str);
        if (aVar != null) {
            this.f7238b -= aVar.f7241a;
        }
    }

    static byte[] r(b bVar, long j10) {
        long a10 = bVar.a();
        if (j10 >= 0 && j10 <= a10) {
            int i10 = (int) j10;
            if (i10 == j10) {
                byte[] bArr = new byte[i10];
                new DataInputStream(bVar).readFully(bArr);
                return bArr;
            }
        }
        throw new IOException("streamToBytes length=" + j10 + ", maxLength=" + a10);
    }

    static void s(List list, OutputStream outputStream) {
        if (list != null) {
            t(outputStream, list.size());
            Iterator it = list.iterator();
            while (it.hasNext()) {
                com.android.volley.g gVar = (com.android.volley.g) it.next();
                v(outputStream, gVar.a());
                v(outputStream, gVar.b());
            }
            return;
        }
        t(outputStream, 0);
    }

    static void t(OutputStream outputStream, int i10) {
        outputStream.write(i10 & SetSpanOperation.SPAN_MAX_PRIORITY);
        outputStream.write((i10 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY);
        outputStream.write((i10 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY);
        outputStream.write((i10 >> 24) & SetSpanOperation.SPAN_MAX_PRIORITY);
    }

    static void u(OutputStream outputStream, long j10) {
        outputStream.write((byte) j10);
        outputStream.write((byte) (j10 >>> 8));
        outputStream.write((byte) (j10 >>> 16));
        outputStream.write((byte) (j10 >>> 24));
        outputStream.write((byte) (j10 >>> 32));
        outputStream.write((byte) (j10 >>> 40));
        outputStream.write((byte) (j10 >>> 48));
        outputStream.write((byte) (j10 >>> 56));
    }

    static void v(OutputStream outputStream, String str) {
        byte[] bytes = str.getBytes("UTF-8");
        u(outputStream, bytes.length);
        outputStream.write(bytes, 0, bytes.length);
    }

    @Override // com.android.volley.b
    public synchronized b.a a(String str) {
        a aVar = (a) this.f7237a.get(str);
        if (aVar == null) {
            return null;
        }
        File f10 = f(str);
        try {
            b bVar = new b(new BufferedInputStream(d(f10)), f10.length());
            try {
                a b10 = a.b(bVar);
                if (!TextUtils.equals(str, b10.f7242b)) {
                    v.b("%s: key=%s, found=%s", f10.getAbsolutePath(), str, b10.f7242b);
                    q(str);
                    return null;
                }
                return aVar.c(r(bVar, bVar.a()));
            } finally {
                bVar.close();
            }
        } catch (IOException e10) {
            v.b("%s: %s", f10.getAbsolutePath(), e10.toString());
            p(str);
            return null;
        }
    }

    @Override // com.android.volley.b
    public synchronized void b(String str, boolean z10) {
        try {
            b.a a10 = a(str);
            if (a10 != null) {
                a10.f8044f = 0L;
                if (z10) {
                    a10.f8043e = 0L;
                }
                c(str, a10);
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // com.android.volley.b
    public synchronized void c(String str, b.a aVar) {
        BufferedOutputStream bufferedOutputStream;
        a aVar2;
        long j10 = this.f7238b;
        byte[] bArr = aVar.f8039a;
        long length = j10 + bArr.length;
        int i10 = this.f7240d;
        if (length > i10 && bArr.length > i10 * 0.9f) {
            return;
        }
        File f10 = f(str);
        try {
            bufferedOutputStream = new BufferedOutputStream(e(f10));
            aVar2 = new a(str, aVar);
        } catch (IOException unused) {
            if (!f10.delete()) {
                v.b("Could not clean up file %s", f10.getAbsolutePath());
            }
            h();
        }
        if (aVar2.d(bufferedOutputStream)) {
            bufferedOutputStream.write(aVar.f8039a);
            bufferedOutputStream.close();
            aVar2.f7241a = f10.length();
            j(str, aVar2);
            i();
            return;
        }
        bufferedOutputStream.close();
        v.b("Failed to write header for %s", f10.getAbsolutePath());
        throw new IOException();
    }

    InputStream d(File file) {
        return new FileInputStream(file);
    }

    OutputStream e(File file) {
        return new FileOutputStream(file);
    }

    public File f(String str) {
        return new File(this.f7239c.get(), g(str));
    }

    @Override // com.android.volley.b
    public synchronized void initialize() {
        long length;
        b bVar;
        File file = this.f7239c.get();
        if (!file.exists()) {
            if (!file.mkdirs()) {
                v.c("Unable to create cache dir %s", file.getAbsolutePath());
            }
            return;
        }
        File[] listFiles = file.listFiles();
        if (listFiles == null) {
            return;
        }
        for (File file2 : listFiles) {
            try {
                length = file2.length();
                bVar = new b(new BufferedInputStream(d(file2)), length);
            } catch (IOException unused) {
                file2.delete();
            }
            try {
                a b10 = a.b(bVar);
                b10.f7241a = length;
                j(b10.f7242b, b10);
                bVar.close();
            } catch (Throwable th2) {
                bVar.close();
                throw th2;
                break;
            }
        }
    }

    public synchronized void p(String str) {
        boolean delete = f(str).delete();
        q(str);
        if (!delete) {
            v.b("Could not delete cache entry for key=%s, filename=%s", str, g(str));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class b extends FilterInputStream {

        /* renamed from: d  reason: collision with root package name */
        private final long f7249d;

        /* renamed from: e  reason: collision with root package name */
        private long f7250e;

        b(InputStream inputStream, long j10) {
            super(inputStream);
            this.f7249d = j10;
        }

        long a() {
            return this.f7249d - this.f7250e;
        }

        @Override // java.io.FilterInputStream, java.io.InputStream
        public int read() {
            int read = super.read();
            if (read != -1) {
                this.f7250e++;
            }
            return read;
        }

        @Override // java.io.FilterInputStream, java.io.InputStream
        public int read(byte[] bArr, int i10, int i11) {
            int read = super.read(bArr, i10, i11);
            if (read != -1) {
                this.f7250e += read;
            }
            return read;
        }
    }

    public d(c cVar) {
        this(cVar, 5242880);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        long f7241a;

        /* renamed from: b  reason: collision with root package name */
        final String f7242b;

        /* renamed from: c  reason: collision with root package name */
        final String f7243c;

        /* renamed from: d  reason: collision with root package name */
        final long f7244d;

        /* renamed from: e  reason: collision with root package name */
        final long f7245e;

        /* renamed from: f  reason: collision with root package name */
        final long f7246f;

        /* renamed from: g  reason: collision with root package name */
        final long f7247g;

        /* renamed from: h  reason: collision with root package name */
        final List f7248h;

        private a(String str, String str2, long j10, long j11, long j12, long j13, List list) {
            this.f7242b = str;
            this.f7243c = "".equals(str2) ? null : str2;
            this.f7244d = j10;
            this.f7245e = j11;
            this.f7246f = j12;
            this.f7247g = j13;
            this.f7248h = list;
        }

        private static List a(b.a aVar) {
            List list = aVar.f8046h;
            if (list != null) {
                return list;
            }
            return e.g(aVar.f8045g);
        }

        static a b(b bVar) {
            if (d.m(bVar) == 538247942) {
                return new a(d.o(bVar), d.o(bVar), d.n(bVar), d.n(bVar), d.n(bVar), d.n(bVar), d.l(bVar));
            }
            throw new IOException();
        }

        b.a c(byte[] bArr) {
            b.a aVar = new b.a();
            aVar.f8039a = bArr;
            aVar.f8040b = this.f7243c;
            aVar.f8041c = this.f7244d;
            aVar.f8042d = this.f7245e;
            aVar.f8043e = this.f7246f;
            aVar.f8044f = this.f7247g;
            aVar.f8045g = e.h(this.f7248h);
            aVar.f8046h = Collections.unmodifiableList(this.f7248h);
            return aVar;
        }

        boolean d(OutputStream outputStream) {
            try {
                d.t(outputStream, 538247942);
                d.v(outputStream, this.f7242b);
                String str = this.f7243c;
                if (str == null) {
                    str = "";
                }
                d.v(outputStream, str);
                d.u(outputStream, this.f7244d);
                d.u(outputStream, this.f7245e);
                d.u(outputStream, this.f7246f);
                d.u(outputStream, this.f7247g);
                d.s(this.f7248h, outputStream);
                outputStream.flush();
                return true;
            } catch (IOException e10) {
                v.b("%s", e10.toString());
                return false;
            }
        }

        a(String str, b.a aVar) {
            this(str, aVar.f8040b, aVar.f8041c, aVar.f8042d, aVar.f8043e, aVar.f8044f, a(aVar));
        }
    }
}
