package hu;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import hu.d;
import java.io.Closeable;
import java.io.EOFException;
import java.io.IOException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.BufferedSource;
import okio.ByteString;
import okio.Source;
import okio.Timeout;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h implements Closeable {

    /* renamed from: p  reason: collision with root package name */
    public static final a f27120p = new a(null);

    /* renamed from: q  reason: collision with root package name */
    private static final Logger f27121q;

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSource f27122d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f27123e;

    /* renamed from: i  reason: collision with root package name */
    private final b f27124i;

    /* renamed from: o  reason: collision with root package name */
    private final d.a f27125o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Logger a() {
            return h.f27121q;
        }

        public final int b(int i10, int i11, int i12) {
            if ((i11 & 8) != 0) {
                i10--;
            }
            if (i12 <= i10) {
                return i10 - i12;
            }
            throw new IOException("PROTOCOL_ERROR padding " + i12 + " > remaining length " + i10);
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public interface c {
        void a(boolean z10, m mVar);

        void b(boolean z10, int i10, int i11, List list);

        void c(int i10, hu.b bVar, ByteString byteString);

        void d(int i10, long j10);

        void e(int i10, int i11, List list);

        void f();

        void g(boolean z10, int i10, BufferedSource bufferedSource, int i11);

        void h(boolean z10, int i10, int i11);

        void i(int i10, int i11, int i12, boolean z10);

        void j(int i10, hu.b bVar);
    }

    static {
        Logger logger = Logger.getLogger(e.class.getName());
        Intrinsics.checkNotNullExpressionValue(logger, "getLogger(Http2::class.java.name)");
        f27121q = logger;
    }

    public h(BufferedSource source, boolean z10) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f27122d = source;
        this.f27123e = z10;
        b bVar = new b(source);
        this.f27124i = bVar;
        this.f27125o = new d.a(bVar, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT, 0, 4, null);
    }

    private final void C0(c cVar, int i10, int i11, int i12) {
        int readInt;
        if (i12 == 0) {
            if ((i11 & 1) != 0) {
                if (i10 == 0) {
                    cVar.f();
                    return;
                }
                throw new IOException("FRAME_SIZE_ERROR ack frame should be empty!");
            } else if (i10 % 6 == 0) {
                m mVar = new m();
                kotlin.ranges.a s10 = kotlin.ranges.d.s(kotlin.ranges.d.u(0, i10), 6);
                int d10 = s10.d();
                int e10 = s10.e();
                int f10 = s10.f();
                if ((f10 > 0 && d10 <= e10) || (f10 < 0 && e10 <= d10)) {
                    while (true) {
                        int e11 = au.e.e(this.f27122d.readShort(), 65535);
                        readInt = this.f27122d.readInt();
                        if (e11 != 2) {
                            if (e11 != 3) {
                                if (e11 != 4) {
                                    if (e11 == 5 && (readInt < 16384 || readInt > 16777215)) {
                                        break;
                                    }
                                } else if (readInt >= 0) {
                                    e11 = 7;
                                } else {
                                    throw new IOException("PROTOCOL_ERROR SETTINGS_INITIAL_WINDOW_SIZE > 2^31 - 1");
                                }
                            } else {
                                e11 = 4;
                            }
                        } else if (readInt != 0 && readInt != 1) {
                            throw new IOException("PROTOCOL_ERROR SETTINGS_ENABLE_PUSH != 0 or 1");
                        }
                        mVar.h(e11, readInt);
                        if (d10 == e10) {
                            break;
                        }
                        d10 += f10;
                    }
                    throw new IOException("PROTOCOL_ERROR SETTINGS_MAX_FRAME_SIZE: " + readInt);
                }
                cVar.a(false, mVar);
                return;
            } else {
                throw new IOException("TYPE_SETTINGS length % 6 != 0: " + i10);
            }
        }
        throw new IOException("TYPE_SETTINGS streamId != 0");
    }

    private final void D0(c cVar, int i10, int i11, int i12) {
        if (i10 == 4) {
            long f10 = au.e.f(this.f27122d.readInt(), 2147483647L);
            if (f10 != 0) {
                cVar.d(i12, f10);
                return;
            }
            throw new IOException("windowSizeIncrement was 0");
        }
        throw new IOException("TYPE_WINDOW_UPDATE length !=4: " + i10);
    }

    private final void E(c cVar, int i10, int i11, int i12) {
        boolean z10;
        if (i12 != 0) {
            int i13 = 0;
            if ((i11 & 1) != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            if ((i11 & 8) != 0) {
                i13 = au.e.d(this.f27122d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
            }
            if ((i11 & 32) != 0) {
                L(cVar, i12);
                i10 -= 5;
            }
            cVar.b(z10, i12, -1, y(f27120p.b(i10, i11, i13), i13, i11, i12));
            return;
        }
        throw new IOException("PROTOCOL_ERROR: TYPE_HEADERS streamId == 0");
    }

    private final void F(c cVar, int i10, int i11, int i12) {
        if (i10 == 8) {
            if (i12 == 0) {
                int readInt = this.f27122d.readInt();
                int readInt2 = this.f27122d.readInt();
                boolean z10 = true;
                if ((i11 & 1) == 0) {
                    z10 = false;
                }
                cVar.h(z10, readInt, readInt2);
                return;
            }
            throw new IOException("TYPE_PING streamId != 0");
        }
        throw new IOException("TYPE_PING length != 8: " + i10);
    }

    private final void L(c cVar, int i10) {
        boolean z10;
        int readInt = this.f27122d.readInt();
        if ((Integer.MIN_VALUE & readInt) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        cVar.i(i10, readInt & Integer.MAX_VALUE, au.e.d(this.f27122d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY) + 1, z10);
    }

    private final void N(c cVar, int i10, int i11, int i12) {
        if (i10 == 5) {
            if (i12 != 0) {
                L(cVar, i12);
                return;
            }
            throw new IOException("TYPE_PRIORITY streamId == 0");
        }
        throw new IOException("TYPE_PRIORITY length: " + i10 + " != 5");
    }

    private final void V(c cVar, int i10, int i11, int i12) {
        int i13;
        if (i12 != 0) {
            if ((i11 & 8) != 0) {
                i13 = au.e.d(this.f27122d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
            } else {
                i13 = 0;
            }
            cVar.e(i12, this.f27122d.readInt() & Integer.MAX_VALUE, y(f27120p.b(i10 - 4, i11, i13), i13, i11, i12));
            return;
        }
        throw new IOException("PROTOCOL_ERROR: TYPE_PUSH_PROMISE streamId == 0");
    }

    private final void W(c cVar, int i10, int i11, int i12) {
        if (i10 == 4) {
            if (i12 != 0) {
                int readInt = this.f27122d.readInt();
                hu.b a10 = hu.b.f26998e.a(readInt);
                if (a10 != null) {
                    cVar.j(i12, a10);
                    return;
                }
                throw new IOException("TYPE_RST_STREAM unexpected error code: " + readInt);
            }
            throw new IOException("TYPE_RST_STREAM streamId == 0");
        }
        throw new IOException("TYPE_RST_STREAM length: " + i10 + " != 4");
    }

    private final void m(c cVar, int i10, int i11, int i12) {
        boolean z10;
        if (i12 != 0) {
            int i13 = 0;
            if ((i11 & 1) != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            if ((i11 & 32) == 0) {
                if ((i11 & 8) != 0) {
                    i13 = au.e.d(this.f27122d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                }
                cVar.g(z10, i12, this.f27122d, f27120p.b(i10, i11, i13));
                this.f27122d.skip(i13);
                return;
            }
            throw new IOException("PROTOCOL_ERROR: FLAG_COMPRESSED without SETTINGS_COMPRESS_DATA");
        }
        throw new IOException("PROTOCOL_ERROR: TYPE_DATA streamId == 0");
    }

    private final void o(c cVar, int i10, int i11, int i12) {
        if (i10 >= 8) {
            if (i12 == 0) {
                int readInt = this.f27122d.readInt();
                int readInt2 = this.f27122d.readInt();
                int i13 = i10 - 8;
                hu.b a10 = hu.b.f26998e.a(readInt2);
                if (a10 != null) {
                    ByteString byteString = ByteString.f44061p;
                    if (i13 > 0) {
                        byteString = this.f27122d.g1(i13);
                    }
                    cVar.c(readInt, a10, byteString);
                    return;
                }
                throw new IOException("TYPE_GOAWAY unexpected error code: " + readInt2);
            }
            throw new IOException("TYPE_GOAWAY streamId != 0");
        }
        throw new IOException("TYPE_GOAWAY length < 8: " + i10);
    }

    private final List y(int i10, int i11, int i12, int i13) {
        this.f27124i.m(i10);
        b bVar = this.f27124i;
        bVar.o(bVar.a());
        this.f27124i.y(i11);
        this.f27124i.k(i12);
        this.f27124i.E(i13);
        this.f27125o.k();
        return this.f27125o.e();
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f27122d.close();
    }

    public final boolean h(boolean z10, c handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        try {
            this.f27122d.U0(9L);
            int K = au.e.K(this.f27122d);
            if (K <= 16384) {
                int d10 = au.e.d(this.f27122d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                int d11 = au.e.d(this.f27122d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                int readInt = this.f27122d.readInt() & Integer.MAX_VALUE;
                Logger logger = f27121q;
                if (logger.isLoggable(Level.FINE)) {
                    logger.fine(e.f27044a.c(true, readInt, K, d10, d11));
                }
                if (z10 && d10 != 4) {
                    throw new IOException("Expected a SETTINGS frame but was " + e.f27044a.b(d10));
                }
                switch (d10) {
                    case 0:
                        m(handler, K, d11, readInt);
                        return true;
                    case 1:
                        E(handler, K, d11, readInt);
                        return true;
                    case 2:
                        N(handler, K, d11, readInt);
                        return true;
                    case 3:
                        W(handler, K, d11, readInt);
                        return true;
                    case 4:
                        C0(handler, K, d11, readInt);
                        return true;
                    case 5:
                        V(handler, K, d11, readInt);
                        return true;
                    case 6:
                        F(handler, K, d11, readInt);
                        return true;
                    case 7:
                        o(handler, K, d11, readInt);
                        return true;
                    case 8:
                        D0(handler, K, d11, readInt);
                        return true;
                    default:
                        this.f27122d.skip(K);
                        return true;
                }
            }
            throw new IOException("FRAME_SIZE_ERROR: " + K);
        } catch (EOFException unused) {
            return false;
        }
    }

    public final void k(c handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        if (this.f27123e) {
            if (!h(true, handler)) {
                throw new IOException("Required SETTINGS preface not received");
            }
            return;
        }
        BufferedSource bufferedSource = this.f27122d;
        ByteString byteString = e.f27045b;
        ByteString g12 = bufferedSource.g1(byteString.G());
        Logger logger = f27121q;
        if (logger.isLoggable(Level.FINE)) {
            logger.fine(au.e.t("<< CONNECTION " + g12.q(), new Object[0]));
        }
        if (Intrinsics.areEqual(byteString, g12)) {
            return;
        }
        throw new IOException("Expected a connection header but was " + g12.M());
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements Source {

        /* renamed from: d  reason: collision with root package name */
        private final BufferedSource f27126d;

        /* renamed from: e  reason: collision with root package name */
        private int f27127e;

        /* renamed from: i  reason: collision with root package name */
        private int f27128i;

        /* renamed from: o  reason: collision with root package name */
        private int f27129o;

        /* renamed from: p  reason: collision with root package name */
        private int f27130p;

        /* renamed from: q  reason: collision with root package name */
        private int f27131q;

        public b(BufferedSource source) {
            Intrinsics.checkNotNullParameter(source, "source");
            this.f27126d = source;
        }

        private final void h() {
            int i10 = this.f27129o;
            int K = au.e.K(this.f27126d);
            this.f27130p = K;
            this.f27127e = K;
            int d10 = au.e.d(this.f27126d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
            this.f27128i = au.e.d(this.f27126d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
            a aVar = h.f27120p;
            if (aVar.a().isLoggable(Level.FINE)) {
                aVar.a().fine(e.f27044a.c(true, this.f27129o, this.f27127e, d10, this.f27128i));
            }
            int readInt = this.f27126d.readInt() & Integer.MAX_VALUE;
            this.f27129o = readInt;
            if (d10 == 9) {
                if (readInt == i10) {
                    return;
                }
                throw new IOException("TYPE_CONTINUATION streamId changed");
            }
            throw new IOException(d10 + " != TYPE_CONTINUATION");
        }

        public final void E(int i10) {
            this.f27129o = i10;
        }

        public final int a() {
            return this.f27130p;
        }

        public final void k(int i10) {
            this.f27128i = i10;
        }

        public final void m(int i10) {
            this.f27130p = i10;
        }

        public final void o(int i10) {
            this.f27127e = i10;
        }

        @Override // okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            while (true) {
                int i10 = this.f27130p;
                if (i10 == 0) {
                    this.f27126d.skip(this.f27131q);
                    this.f27131q = 0;
                    if ((this.f27128i & 4) != 0) {
                        return -1L;
                    }
                    h();
                } else {
                    long read = this.f27126d.read(sink, Math.min(j10, i10));
                    if (read == -1) {
                        return -1L;
                    }
                    this.f27130p -= (int) read;
                    return read;
                }
            }
        }

        @Override // okio.Source
        public Timeout timeout() {
            return this.f27126d.timeout();
        }

        public final void y(int i10) {
            this.f27131q = i10;
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
        }
    }
}
