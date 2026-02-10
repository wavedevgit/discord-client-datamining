package d6;

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
    private final Map f20516a;

    /* renamed from: b  reason: collision with root package name */
    private long f20517b;

    /* renamed from: c  reason: collision with root package name */
    private final c f20518c;

    /* renamed from: d  reason: collision with root package name */
    private final int f20519d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface c {
        File get();
    }

    public d(c cVar, int i10) {
        this.f20516a = new LinkedHashMap(16, 0.75f, true);
        this.f20517b = 0L;
        this.f20518c = cVar;
        this.f20519d = i10;
    }

    private String g(String str) {
        int length = str.length() / 2;
        String valueOf = String.valueOf(str.substring(0, length).hashCode());
        return valueOf + String.valueOf(str.substring(length).hashCode());
    }

    private void h() {
        if (!this.f20518c.get().exists()) {
            v.b("Re-initializing cache after external clearing.", new Object[0]);
            this.f20516a.clear();
            this.f20517b = 0L;
            initialize();
        }
    }

    private void i() {
        if (this.f20517b >= this.f20519d) {
            int i10 = 0;
            if (v.f8245b) {
                v.e("Pruning old cache entries.", new Object[0]);
            }
            long j10 = this.f20517b;
            long elapsedRealtime = SystemClock.elapsedRealtime();
            Iterator it = this.f20516a.entrySet().iterator();
            while (it.hasNext()) {
                a aVar = (a) ((Map.Entry) it.next()).getValue();
                if (f(aVar.f20521b).delete()) {
                    this.f20517b -= aVar.f20520a;
                } else {
                    String str = aVar.f20521b;
                    v.b("Could not delete cache entry for key=%s, filename=%s", str, g(str));
                }
                it.remove();
                i10++;
                if (((float) this.f20517b) < this.f20519d * 0.9f) {
                    break;
                }
            }
            if (v.f8245b) {
                v.e("pruned %d files, %d bytes, %d ms", Integer.valueOf(i10), Long.valueOf(this.f20517b - j10), Long.valueOf(SystemClock.elapsedRealtime() - elapsedRealtime));
            }
        }
    }

    private void j(String str, a aVar) {
        if (!this.f20516a.containsKey(str)) {
            this.f20517b += aVar.f20520a;
        } else {
            this.f20517b += aVar.f20520a - ((a) this.f20516a.get(str)).f20520a;
        }
        this.f20516a.put(str, aVar);
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
        a aVar = (a) this.f20516a.remove(str);
        if (aVar != null) {
            this.f20517b -= aVar.f20520a;
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
        a aVar = (a) this.f20516a.get(str);
        if (aVar == null) {
            return null;
        }
        File f10 = f(str);
        try {
            b bVar = new b(new BufferedInputStream(d(f10)), f10.length());
            try {
                a b10 = a.b(bVar);
                if (!TextUtils.equals(str, b10.f20521b)) {
                    v.b("%s: key=%s, found=%s", f10.getAbsolutePath(), str, b10.f20521b);
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
                a10.f8184f = 0L;
                if (z10) {
                    a10.f8183e = 0L;
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
        long j10 = this.f20517b;
        byte[] bArr = aVar.f8179a;
        long length = j10 + bArr.length;
        int i10 = this.f20519d;
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
            bufferedOutputStream.write(aVar.f8179a);
            bufferedOutputStream.close();
            aVar2.f20520a = f10.length();
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
        return new File(this.f20518c.get(), g(str));
    }

    @Override // com.android.volley.b
    public synchronized void initialize() {
        long length;
        b bVar;
        File file = this.f20518c.get();
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
                b10.f20520a = length;
                j(b10.f20521b, b10);
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
        private final long f20528d;

        /* renamed from: e  reason: collision with root package name */
        private long f20529e;

        b(InputStream inputStream, long j10) {
            super(inputStream);
            this.f20528d = j10;
        }

        long a() {
            return this.f20528d - this.f20529e;
        }

        @Override // java.io.FilterInputStream, java.io.InputStream
        public int read() {
            int read = super.read();
            if (read != -1) {
                this.f20529e++;
            }
            return read;
        }

        @Override // java.io.FilterInputStream, java.io.InputStream
        public int read(byte[] bArr, int i10, int i11) {
            int read = super.read(bArr, i10, i11);
            if (read != -1) {
                this.f20529e += read;
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
        long f20520a;

        /* renamed from: b  reason: collision with root package name */
        final String f20521b;

        /* renamed from: c  reason: collision with root package name */
        final String f20522c;

        /* renamed from: d  reason: collision with root package name */
        final long f20523d;

        /* renamed from: e  reason: collision with root package name */
        final long f20524e;

        /* renamed from: f  reason: collision with root package name */
        final long f20525f;

        /* renamed from: g  reason: collision with root package name */
        final long f20526g;

        /* renamed from: h  reason: collision with root package name */
        final List f20527h;

        private a(String str, String str2, long j10, long j11, long j12, long j13, List list) {
            this.f20521b = str;
            this.f20522c = "".equals(str2) ? null : str2;
            this.f20523d = j10;
            this.f20524e = j11;
            this.f20525f = j12;
            this.f20526g = j13;
            this.f20527h = list;
        }

        private static List a(b.a aVar) {
            List list = aVar.f8186h;
            if (list != null) {
                return list;
            }
            return e.g(aVar.f8185g);
        }

        static a b(b bVar) {
            if (d.m(bVar) == 538247942) {
                return new a(d.o(bVar), d.o(bVar), d.n(bVar), d.n(bVar), d.n(bVar), d.n(bVar), d.l(bVar));
            }
            throw new IOException();
        }

        b.a c(byte[] bArr) {
            b.a aVar = new b.a();
            aVar.f8179a = bArr;
            aVar.f8180b = this.f20522c;
            aVar.f8181c = this.f20523d;
            aVar.f8182d = this.f20524e;
            aVar.f8183e = this.f20525f;
            aVar.f8184f = this.f20526g;
            aVar.f8185g = e.h(this.f20527h);
            aVar.f8186h = Collections.unmodifiableList(this.f20527h);
            return aVar;
        }

        boolean d(OutputStream outputStream) {
            try {
                d.t(outputStream, 538247942);
                d.v(outputStream, this.f20521b);
                String str = this.f20522c;
                if (str == null) {
                    str = "";
                }
                d.v(outputStream, str);
                d.u(outputStream, this.f20523d);
                d.u(outputStream, this.f20524e);
                d.u(outputStream, this.f20525f);
                d.u(outputStream, this.f20526g);
                d.s(this.f20527h, outputStream);
                outputStream.flush();
                return true;
            } catch (IOException e10) {
                v.b("%s", e10.toString());
                return false;
            }
        }

        a(String str, b.a aVar) {
            this(str, aVar.f8180b, aVar.f8181c, aVar.f8182d, aVar.f8183e, aVar.f8184f, a(aVar));
        }
    }
}
