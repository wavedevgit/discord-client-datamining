package io.sentry;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import io.sentry.l6;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.nio.ByteBuffer;
import java.nio.ByteOrder;
import java.nio.charset.Charset;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.concurrent.Callable;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class l6 {

    /* renamed from: d  reason: collision with root package name */
    private static final Charset f28328d = Charset.forName("UTF-8");

    /* renamed from: a  reason: collision with root package name */
    private final m6 f28329a;

    /* renamed from: b  reason: collision with root package name */
    private final Callable f28330b;

    /* renamed from: c  reason: collision with root package name */
    private byte[] f28331c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private byte[] f28332a;

        /* renamed from: b  reason: collision with root package name */
        private final Callable f28333b;

        public a(Callable callable) {
            this.f28333b = callable;
        }

        private static byte[] b(byte[] bArr) {
            if (bArr != null) {
                return bArr;
            }
            return new byte[0];
        }

        public byte[] a() {
            Callable callable;
            if (this.f28332a == null && (callable = this.f28333b) != null) {
                this.f28332a = (byte[]) callable.call();
            }
            return b(this.f28332a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public l6(m6 m6Var, byte[] bArr) {
        this.f28329a = (m6) io.sentry.util.y.c(m6Var, "SentryEnvelopeItemHeader is required.");
        this.f28331c = bArr;
        this.f28330b = null;
    }

    public static l6 A(final b1 b1Var, final io.sentry.clientreport.c cVar) {
        io.sentry.util.y.c(b1Var, "ISerializer is required.");
        io.sentry.util.y.c(cVar, "ClientReport is required.");
        final a aVar = new a(new Callable() { // from class: io.sentry.t5
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return l6.d(b1.this, cVar);
            }
        });
        return new l6(new m6(v6.resolve(cVar), new Callable() { // from class: io.sentry.u5
            @Override // java.util.concurrent.Callable
            public final Object call() {
                Integer valueOf;
                valueOf = Integer.valueOf(l6.a.this.a().length);
                return valueOf;
            }
        }, "application/json", null), new Callable() { // from class: io.sentry.v5
            @Override // java.util.concurrent.Callable
            public final Object call() {
                byte[] a10;
                a10 = l6.a.this.a();
                return a10;
            }
        });
    }

    public static l6 B(final b1 b1Var, final e5 e5Var) {
        io.sentry.util.y.c(b1Var, "ISerializer is required.");
        io.sentry.util.y.c(e5Var, "SentryEvent is required.");
        final a aVar = new a(new Callable() { // from class: io.sentry.q5
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return l6.n(b1.this, e5Var);
            }
        });
        return new l6(new m6(v6.resolve(e5Var), new Callable() { // from class: io.sentry.r5
            @Override // java.util.concurrent.Callable
            public final Object call() {
                Integer valueOf;
                valueOf = Integer.valueOf(l6.a.this.a().length);
                return valueOf;
            }
        }, "application/json", null), new Callable() { // from class: io.sentry.s5
            @Override // java.util.concurrent.Callable
            public final Object call() {
                byte[] a10;
                a10 = l6.a.this.a();
                return a10;
            }
        });
    }

    public static l6 C(final b1 b1Var, final z6 z6Var) {
        io.sentry.util.y.c(b1Var, "ISerializer is required.");
        io.sentry.util.y.c(z6Var, "SentryLogEvents is required.");
        final a aVar = new a(new Callable() { // from class: io.sentry.w5
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return l6.s(b1.this, z6Var);
            }
        });
        return new l6(new m6(v6.Log, new Callable() { // from class: io.sentry.x5
            @Override // java.util.concurrent.Callable
            public final Object call() {
                Integer valueOf;
                valueOf = Integer.valueOf(l6.a.this.a().length);
                return valueOf;
            }
        }, "application/vnd.sentry.items.log+json", (String) null, (String) null, (String) null, Integer.valueOf(z6Var.a().size())), new Callable() { // from class: io.sentry.z5
            @Override // java.util.concurrent.Callable
            public final Object call() {
                byte[] a10;
                a10 = l6.a.this.a();
                return a10;
            }
        });
    }

    public static l6 D(final m3 m3Var, final b1 b1Var, final u0 u0Var) {
        final File q10 = m3Var.q();
        final a aVar = new a(new Callable() { // from class: io.sentry.e6
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return l6.u(q10, m3Var, u0Var, b1Var);
            }
        });
        return new l6(new m6(v6.ProfileChunk, new Callable() { // from class: io.sentry.f6
            @Override // java.util.concurrent.Callable
            public final Object call() {
                Integer valueOf;
                valueOf = Integer.valueOf(l6.a.this.a().length);
                return valueOf;
            }
        }, "application-json", q10.getName(), (String) null, m3Var.p(), (Integer) null), new Callable() { // from class: io.sentry.g6
            @Override // java.util.concurrent.Callable
            public final Object call() {
                byte[] a10;
                a10 = l6.a.this.a();
                return a10;
            }
        });
    }

    public static l6 E(final q3 q3Var, final long j10, final b1 b1Var) {
        final File C = q3Var.C();
        final a aVar = new a(new Callable() { // from class: io.sentry.k6
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return l6.o(C, j10, q3Var, b1Var);
            }
        });
        return new l6(new m6(v6.Profile, new Callable() { // from class: io.sentry.o5
            @Override // java.util.concurrent.Callable
            public final Object call() {
                Integer valueOf;
                valueOf = Integer.valueOf(l6.a.this.a().length);
                return valueOf;
            }
        }, "application-json", C.getName()), new Callable() { // from class: io.sentry.p5
            @Override // java.util.concurrent.Callable
            public final Object call() {
                byte[] a10;
                a10 = l6.a.this.a();
                return a10;
            }
        });
    }

    public static l6 F(final b1 b1Var, final ILogger iLogger, final l7 l7Var, final v3 v3Var, final boolean z10) {
        final File j02 = l7Var.j0();
        final a aVar = new a(new Callable() { // from class: io.sentry.a6
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return l6.c(b1.this, l7Var, v3Var, j02, iLogger, z10);
            }
        });
        return new l6(new m6(v6.ReplayVideo, new Callable() { // from class: io.sentry.b6
            @Override // java.util.concurrent.Callable
            public final Object call() {
                Integer valueOf;
                valueOf = Integer.valueOf(l6.a.this.a().length);
                return valueOf;
            }
        }, null, null), new Callable() { // from class: io.sentry.c6
            @Override // java.util.concurrent.Callable
            public final Object call() {
                byte[] a10;
                a10 = l6.a.this.a();
                return a10;
            }
        });
    }

    public static l6 G(final b1 b1Var, final z7 z7Var) {
        io.sentry.util.y.c(b1Var, "ISerializer is required.");
        io.sentry.util.y.c(z7Var, "Session is required.");
        final a aVar = new a(new Callable() { // from class: io.sentry.n5
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return l6.t(b1.this, z7Var);
            }
        });
        return new l6(new m6(v6.Session, new Callable() { // from class: io.sentry.y5
            @Override // java.util.concurrent.Callable
            public final Object call() {
                Integer valueOf;
                valueOf = Integer.valueOf(l6.a.this.a().length);
                return valueOf;
            }
        }, "application/json", null), new Callable() { // from class: io.sentry.d6
            @Override // java.util.concurrent.Callable
            public final Object call() {
                byte[] a10;
                a10 = l6.a.this.a();
                return a10;
            }
        });
    }

    private static byte[] N(Map map) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            byteArrayOutputStream.write((byte) (map.size() | IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT));
            for (Map.Entry entry : map.entrySet()) {
                byte[] bytes = ((String) entry.getKey()).getBytes(f28328d);
                int length = bytes.length;
                byteArrayOutputStream.write(-39);
                byteArrayOutputStream.write((byte) length);
                byteArrayOutputStream.write(bytes);
                byte[] bArr = (byte[]) entry.getValue();
                int length2 = bArr.length;
                byteArrayOutputStream.write(-58);
                byteArrayOutputStream.write(ByteBuffer.allocate(4).order(ByteOrder.BIG_ENDIAN).putInt(length2).array());
                byteArrayOutputStream.write(bArr);
            }
            byte[] byteArray = byteArrayOutputStream.toByteArray();
            byteArrayOutputStream.close();
            return byteArray;
        } catch (Throwable th2) {
            try {
                byteArrayOutputStream.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }

    public static /* synthetic */ byte[] c(b1 b1Var, l7 l7Var, v3 v3Var, File file, ILogger iLogger, boolean z10) {
        try {
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(byteArrayOutputStream, f28328d));
            try {
                LinkedHashMap linkedHashMap = new LinkedHashMap();
                b1Var.a(l7Var, bufferedWriter);
                linkedHashMap.put(v6.ReplayEvent.getItemType(), byteArrayOutputStream.toByteArray());
                byteArrayOutputStream.reset();
                if (v3Var != null) {
                    b1Var.a(v3Var, bufferedWriter);
                    linkedHashMap.put(v6.ReplayRecording.getItemType(), byteArrayOutputStream.toByteArray());
                    byteArrayOutputStream.reset();
                }
                if (file != null && file.exists()) {
                    byte[] b10 = io.sentry.util.i.b(file.getPath(), 10485760L);
                    if (b10.length > 0) {
                        linkedHashMap.put(v6.ReplayVideo.getItemType(), b10);
                    }
                }
                byte[] N = N(linkedHashMap);
                bufferedWriter.close();
                byteArrayOutputStream.close();
                if (file != null) {
                    if (z10) {
                        return N;
                    }
                }
                return N;
            } catch (Throwable th2) {
                try {
                    bufferedWriter.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
                throw th2;
            }
        } catch (Throwable th4) {
            try {
                iLogger.b(SentryLevel.ERROR, "Could not serialize replay recording", th4);
                if (file != null) {
                    if (z10) {
                        io.sentry.util.i.a(file.getParentFile());
                        return null;
                    }
                    file.delete();
                    return null;
                }
                return null;
            } finally {
                if (file != null) {
                    if (z10) {
                        io.sentry.util.i.a(file.getParentFile());
                    } else {
                        file.delete();
                    }
                }
            }
        }
    }

    public static /* synthetic */ byte[] d(b1 b1Var, io.sentry.clientreport.c cVar) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(byteArrayOutputStream, f28328d));
            b1Var.a(cVar, bufferedWriter);
            byte[] byteArray = byteArrayOutputStream.toByteArray();
            bufferedWriter.close();
            byteArrayOutputStream.close();
            return byteArray;
        } catch (Throwable th2) {
            try {
                byteArrayOutputStream.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }

    public static /* synthetic */ byte[] n(b1 b1Var, e5 e5Var) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(byteArrayOutputStream, f28328d));
            b1Var.a(e5Var, bufferedWriter);
            byte[] byteArray = byteArrayOutputStream.toByteArray();
            bufferedWriter.close();
            byteArrayOutputStream.close();
            return byteArray;
        } catch (Throwable th2) {
            try {
                byteArrayOutputStream.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }

    public static /* synthetic */ byte[] o(File file, long j10, q3 q3Var, b1 b1Var) {
        if (file.exists()) {
            String f10 = io.sentry.vendor.a.f(io.sentry.util.i.b(file.getPath(), j10), 3);
            if (!f10.isEmpty()) {
                q3Var.F(f10);
                q3Var.E();
                try {
                    try {
                        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
                        try {
                            BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(byteArrayOutputStream, f28328d));
                            b1Var.a(q3Var, bufferedWriter);
                            byte[] byteArray = byteArrayOutputStream.toByteArray();
                            bufferedWriter.close();
                            byteArrayOutputStream.close();
                            return byteArray;
                        } catch (Throwable th2) {
                            try {
                                byteArrayOutputStream.close();
                            } catch (Throwable th3) {
                                th2.addSuppressed(th3);
                            }
                            throw th2;
                        }
                    } catch (IOException e10) {
                        throw new io.sentry.exception.b(String.format("Failed to serialize profiling trace data\n%s", e10.getMessage()));
                    }
                } finally {
                    file.delete();
                }
            }
            throw new io.sentry.exception.b("Profiling trace file is empty");
        }
        throw new io.sentry.exception.b(String.format("Dropping profiling trace data, because the file '%s' doesn't exists", file.getName()));
    }

    public static /* synthetic */ byte[] s(b1 b1Var, z6 z6Var) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(byteArrayOutputStream, f28328d));
            b1Var.a(z6Var, bufferedWriter);
            byte[] byteArray = byteArrayOutputStream.toByteArray();
            bufferedWriter.close();
            byteArrayOutputStream.close();
            return byteArray;
        } catch (Throwable th2) {
            try {
                byteArrayOutputStream.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }

    public static /* synthetic */ byte[] t(b1 b1Var, z7 z7Var) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(byteArrayOutputStream, f28328d));
            b1Var.a(z7Var, bufferedWriter);
            byte[] byteArray = byteArrayOutputStream.toByteArray();
            bufferedWriter.close();
            byteArrayOutputStream.close();
            return byteArray;
        } catch (Throwable th2) {
            try {
                byteArrayOutputStream.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }

    public static /* synthetic */ byte[] u(File file, m3 m3Var, u0 u0Var, b1 b1Var) {
        if (file.exists()) {
            if ("java".equals(m3Var.p())) {
                if (!j2.b().equals(u0Var)) {
                    try {
                        m3Var.t(u0Var.a(file.getAbsolutePath()));
                    } catch (Exception e10) {
                        throw new io.sentry.exception.b("Profile conversion failed", e10);
                    }
                } else {
                    throw new io.sentry.exception.b("No ProfileConverter available, dropping chunk.");
                }
            } else {
                String f10 = io.sentry.vendor.a.f(io.sentry.util.i.b(file.getPath(), 52428800L), 3);
                if (!f10.isEmpty()) {
                    m3Var.s(f10);
                } else {
                    throw new io.sentry.exception.b("Profiling trace file is empty");
                }
            }
            try {
                try {
                    ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
                    try {
                        BufferedWriter bufferedWriter = new BufferedWriter(new OutputStreamWriter(byteArrayOutputStream, f28328d));
                        b1Var.a(m3Var, bufferedWriter);
                        byte[] byteArray = byteArrayOutputStream.toByteArray();
                        bufferedWriter.close();
                        byteArrayOutputStream.close();
                        return byteArray;
                    } catch (Throwable th2) {
                        try {
                            byteArrayOutputStream.close();
                        } catch (Throwable th3) {
                            th2.addSuppressed(th3);
                        }
                        throw th2;
                    }
                } catch (IOException e11) {
                    throw new io.sentry.exception.b(String.format("Failed to serialize profile chunk\n%s", e11.getMessage()));
                }
            } finally {
                file.delete();
            }
        }
        throw new io.sentry.exception.b(String.format("Dropping profile chunk, because the file '%s' doesn't exists", file.getName()));
    }

    public static /* synthetic */ byte[] x(b bVar, long j10, b1 b1Var, ILogger iLogger) {
        byte[] bArr;
        if (bVar.f() != null) {
            byte[] f10 = bVar.f();
            y(f10.length, j10, bVar.h());
            return f10;
        }
        if (bVar.j() != null) {
            byte[] c10 = io.sentry.util.q.c(b1Var, iLogger, bVar.j());
            if (c10 != null) {
                y(c10.length, j10, bVar.h());
                return c10;
            }
        } else if (bVar.i() != null) {
            return io.sentry.util.i.b(bVar.i(), j10);
        } else {
            if (bVar.e() != null && (bArr = (byte[]) bVar.e().call()) != null) {
                y(bArr.length, j10, bVar.h());
                return bArr;
            }
        }
        throw new io.sentry.exception.b(String.format("Couldn't attach the attachment %s.\nPlease check that either bytes, serializable, path or provider is set.", bVar.h()));
    }

    private static void y(long j10, long j11, String str) {
        if (j10 <= j11) {
            return;
        }
        throw new io.sentry.exception.b(String.format("Dropping attachment with filename '%s', because the size of the passed bytes with %d bytes is bigger than the maximum allowed attachment size of %d bytes.", str, Long.valueOf(j10), Long.valueOf(j11)));
    }

    public static l6 z(final b1 b1Var, final ILogger iLogger, final b bVar, final long j10) {
        final a aVar = new a(new Callable() { // from class: io.sentry.h6
            @Override // java.util.concurrent.Callable
            public final Object call() {
                return l6.x(b.this, j10, b1Var, iLogger);
            }
        });
        return new l6(new m6(v6.Attachment, new Callable() { // from class: io.sentry.i6
            @Override // java.util.concurrent.Callable
            public final Object call() {
                Integer valueOf;
                valueOf = Integer.valueOf(l6.a.this.a().length);
                return valueOf;
            }
        }, bVar.g(), bVar.h(), bVar.d()), new Callable() { // from class: io.sentry.j6
            @Override // java.util.concurrent.Callable
            public final Object call() {
                byte[] a10;
                a10 = l6.a.this.a();
                return a10;
            }
        });
    }

    public io.sentry.clientreport.c H(b1 b1Var) {
        m6 m6Var = this.f28329a;
        if (m6Var != null && m6Var.b() == v6.ClientReport) {
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new ByteArrayInputStream(I()), f28328d));
            try {
                io.sentry.clientreport.c cVar = (io.sentry.clientreport.c) b1Var.c(bufferedReader, io.sentry.clientreport.c.class);
                bufferedReader.close();
                return cVar;
            } catch (Throwable th2) {
                try {
                    bufferedReader.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
                throw th2;
            }
        }
        return null;
    }

    public byte[] I() {
        Callable callable;
        if (this.f28331c == null && (callable = this.f28330b) != null) {
            this.f28331c = (byte[]) callable.call();
        }
        return this.f28331c;
    }

    public SentryEvent J(b1 b1Var) {
        m6 m6Var = this.f28329a;
        if (m6Var != null && m6Var.b() == v6.Event) {
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new ByteArrayInputStream(I()), f28328d));
            try {
                SentryEvent sentryEvent = (SentryEvent) b1Var.c(bufferedReader, SentryEvent.class);
                bufferedReader.close();
                return sentryEvent;
            } catch (Throwable th2) {
                try {
                    bufferedReader.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
                throw th2;
            }
        }
        return null;
    }

    public m6 K() {
        return this.f28329a;
    }

    public z6 L(b1 b1Var) {
        m6 m6Var = this.f28329a;
        if (m6Var != null && m6Var.b() == v6.Log) {
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new ByteArrayInputStream(I()), f28328d));
            try {
                z6 z6Var = (z6) b1Var.c(bufferedReader, z6.class);
                bufferedReader.close();
                return z6Var;
            } catch (Throwable th2) {
                try {
                    bufferedReader.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
                throw th2;
            }
        }
        return null;
    }

    public io.sentry.protocol.d0 M(b1 b1Var) {
        m6 m6Var = this.f28329a;
        if (m6Var != null && m6Var.b() == v6.Transaction) {
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(new ByteArrayInputStream(I()), f28328d));
            try {
                io.sentry.protocol.d0 d0Var = (io.sentry.protocol.d0) b1Var.c(bufferedReader, io.sentry.protocol.d0.class);
                bufferedReader.close();
                return d0Var;
            } catch (Throwable th2) {
                try {
                    bufferedReader.close();
                } catch (Throwable th3) {
                    th2.addSuppressed(th3);
                }
                throw th2;
            }
        }
        return null;
    }

    l6(m6 m6Var, Callable callable) {
        this.f28329a = (m6) io.sentry.util.y.c(m6Var, "SentryEnvelopeItemHeader is required.");
        this.f28330b = (Callable) io.sentry.util.y.c(callable, "DataFactory is required.");
        this.f28331c = null;
    }
}
