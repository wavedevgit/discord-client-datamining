package tu;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
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
import tu.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h implements Closeable {

    /* renamed from: p  reason: collision with root package name */
    public static final a f50802p = new a(null);

    /* renamed from: q  reason: collision with root package name */
    private static final Logger f50803q;

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSource f50804d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f50805e;

    /* renamed from: i  reason: collision with root package name */
    private final b f50806i;

    /* renamed from: o  reason: collision with root package name */
    private final d.a f50807o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Logger a() {
            return h.f50803q;
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
        void a(int i10, tu.b bVar, ByteString byteString);

        void b(boolean z10, int i10, int i11, List list);

        void c(int i10, long j10);

        void d(int i10, tu.b bVar);

        void e(int i10, int i11, List list);

        void f();

        void g(boolean z10, m mVar);

        void h(boolean z10, int i10, BufferedSource bufferedSource, int i11);

        void i(boolean z10, int i10, int i11);

        void j(int i10, int i11, int i12, boolean z10);
    }

    static {
        Logger logger = Logger.getLogger(e.class.getName());
        Intrinsics.checkNotNullExpressionValue(logger, "getLogger(Http2::class.java.name)");
        f50803q = logger;
    }

    public h(BufferedSource source, boolean z10) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f50804d = source;
        this.f50805e = z10;
        b bVar = new b(source);
        this.f50806i = bVar;
        this.f50807o = new d.a(bVar, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT, 0, 4, null);
    }

    private final void C(c cVar, int i10, int i11, int i12) {
        if (i10 == 5) {
            if (i12 != 0) {
                z(cVar, i12);
                return;
            }
            throw new IOException("TYPE_PRIORITY streamId == 0");
        }
        throw new IOException("TYPE_PRIORITY length: " + i10 + " != 5");
    }

    private final void I(c cVar, int i10, int i11, int i12) {
        int i13;
        if (i12 != 0) {
            if ((i11 & 8) != 0) {
                i13 = mu.e.d(this.f50804d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
            } else {
                i13 = 0;
            }
            cVar.e(i12, this.f50804d.readInt() & Integer.MAX_VALUE, p(f50802p.b(i10 - 4, i11, i13), i13, i11, i12));
            return;
        }
        throw new IOException("PROTOCOL_ERROR: TYPE_PUSH_PROMISE streamId == 0");
    }

    private final void J(c cVar, int i10, int i11, int i12) {
        if (i10 == 4) {
            if (i12 != 0) {
                int readInt = this.f50804d.readInt();
                tu.b a10 = tu.b.f50680e.a(readInt);
                if (a10 != null) {
                    cVar.d(i12, a10);
                    return;
                }
                throw new IOException("TYPE_RST_STREAM unexpected error code: " + readInt);
            }
            throw new IOException("TYPE_RST_STREAM streamId == 0");
        }
        throw new IOException("TYPE_RST_STREAM length: " + i10 + " != 4");
    }

    private final void Q(c cVar, int i10, int i11, int i12) {
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
                        int e11 = mu.e.e(this.f50804d.readShort(), 65535);
                        readInt = this.f50804d.readInt();
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
                cVar.g(false, mVar);
                return;
            } else {
                throw new IOException("TYPE_SETTINGS length % 6 != 0: " + i10);
            }
        }
        throw new IOException("TYPE_SETTINGS streamId != 0");
    }

    private final void Z(c cVar, int i10, int i11, int i12) {
        if (i10 == 4) {
            long f10 = mu.e.f(this.f50804d.readInt(), 2147483647L);
            if (f10 != 0) {
                cVar.c(i12, f10);
                return;
            }
            throw new IOException("windowSizeIncrement was 0");
        }
        throw new IOException("TYPE_WINDOW_UPDATE length !=4: " + i10);
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
                    i13 = mu.e.d(this.f50804d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                }
                cVar.h(z10, i12, this.f50804d, f50802p.b(i10, i11, i13));
                this.f50804d.skip(i13);
                return;
            }
            throw new IOException("PROTOCOL_ERROR: FLAG_COMPRESSED without SETTINGS_COMPRESS_DATA");
        }
        throw new IOException("PROTOCOL_ERROR: TYPE_DATA streamId == 0");
    }

    private final void n(c cVar, int i10, int i11, int i12) {
        if (i10 >= 8) {
            if (i12 == 0) {
                int readInt = this.f50804d.readInt();
                int readInt2 = this.f50804d.readInt();
                int i13 = i10 - 8;
                tu.b a10 = tu.b.f50680e.a(readInt2);
                if (a10 != null) {
                    ByteString byteString = ByteString.f41161p;
                    if (i13 > 0) {
                        byteString = this.f50804d.h1(i13);
                    }
                    cVar.a(readInt, a10, byteString);
                    return;
                }
                throw new IOException("TYPE_GOAWAY unexpected error code: " + readInt2);
            }
            throw new IOException("TYPE_GOAWAY streamId != 0");
        }
        throw new IOException("TYPE_GOAWAY length < 8: " + i10);
    }

    private final List p(int i10, int i11, int i12, int i13) {
        this.f50806i.m(i10);
        b bVar = this.f50806i;
        bVar.n(bVar.a());
        this.f50806i.p(i11);
        this.f50806i.i(i12);
        this.f50806i.s(i13);
        this.f50807o.k();
        return this.f50807o.e();
    }

    private final void s(c cVar, int i10, int i11, int i12) {
        boolean z10;
        if (i12 != 0) {
            int i13 = 0;
            if ((i11 & 1) != 0) {
                z10 = true;
            } else {
                z10 = false;
            }
            if ((i11 & 8) != 0) {
                i13 = mu.e.d(this.f50804d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
            }
            if ((i11 & 32) != 0) {
                z(cVar, i12);
                i10 -= 5;
            }
            cVar.b(z10, i12, -1, p(f50802p.b(i10, i11, i13), i13, i11, i12));
            return;
        }
        throw new IOException("PROTOCOL_ERROR: TYPE_HEADERS streamId == 0");
    }

    private final void y(c cVar, int i10, int i11, int i12) {
        if (i10 == 8) {
            if (i12 == 0) {
                int readInt = this.f50804d.readInt();
                int readInt2 = this.f50804d.readInt();
                boolean z10 = true;
                if ((i11 & 1) == 0) {
                    z10 = false;
                }
                cVar.i(z10, readInt, readInt2);
                return;
            }
            throw new IOException("TYPE_PING streamId != 0");
        }
        throw new IOException("TYPE_PING length != 8: " + i10);
    }

    private final void z(c cVar, int i10) {
        boolean z10;
        int readInt = this.f50804d.readInt();
        if ((Integer.MIN_VALUE & readInt) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        cVar.j(i10, readInt & Integer.MAX_VALUE, mu.e.d(this.f50804d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY) + 1, z10);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f50804d.close();
    }

    public final boolean h(boolean z10, c handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        try {
            this.f50804d.U0(9L);
            int K = mu.e.K(this.f50804d);
            if (K <= 16384) {
                int d10 = mu.e.d(this.f50804d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                int d11 = mu.e.d(this.f50804d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                int readInt = this.f50804d.readInt() & Integer.MAX_VALUE;
                Logger logger = f50803q;
                if (logger.isLoggable(Level.FINE)) {
                    logger.fine(e.f50726a.c(true, readInt, K, d10, d11));
                }
                if (z10 && d10 != 4) {
                    throw new IOException("Expected a SETTINGS frame but was " + e.f50726a.b(d10));
                }
                switch (d10) {
                    case 0:
                        m(handler, K, d11, readInt);
                        return true;
                    case 1:
                        s(handler, K, d11, readInt);
                        return true;
                    case 2:
                        C(handler, K, d11, readInt);
                        return true;
                    case 3:
                        J(handler, K, d11, readInt);
                        return true;
                    case 4:
                        Q(handler, K, d11, readInt);
                        return true;
                    case 5:
                        I(handler, K, d11, readInt);
                        return true;
                    case 6:
                        y(handler, K, d11, readInt);
                        return true;
                    case 7:
                        n(handler, K, d11, readInt);
                        return true;
                    case 8:
                        Z(handler, K, d11, readInt);
                        return true;
                    default:
                        this.f50804d.skip(K);
                        return true;
                }
            }
            throw new IOException("FRAME_SIZE_ERROR: " + K);
        } catch (EOFException unused) {
            return false;
        }
    }

    public final void i(c handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        if (this.f50805e) {
            if (!h(true, handler)) {
                throw new IOException("Required SETTINGS preface not received");
            }
            return;
        }
        BufferedSource bufferedSource = this.f50804d;
        ByteString byteString = e.f50727b;
        ByteString h12 = bufferedSource.h1(byteString.G());
        Logger logger = f50803q;
        if (logger.isLoggable(Level.FINE)) {
            logger.fine(mu.e.t("<< CONNECTION " + h12.q(), new Object[0]));
        }
        if (Intrinsics.areEqual(byteString, h12)) {
            return;
        }
        throw new IOException("Expected a connection header but was " + h12.M());
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements Source {

        /* renamed from: d  reason: collision with root package name */
        private final BufferedSource f50808d;

        /* renamed from: e  reason: collision with root package name */
        private int f50809e;

        /* renamed from: i  reason: collision with root package name */
        private int f50810i;

        /* renamed from: o  reason: collision with root package name */
        private int f50811o;

        /* renamed from: p  reason: collision with root package name */
        private int f50812p;

        /* renamed from: q  reason: collision with root package name */
        private int f50813q;

        public b(BufferedSource source) {
            Intrinsics.checkNotNullParameter(source, "source");
            this.f50808d = source;
        }

        private final void h() {
            int i10 = this.f50811o;
            int K = mu.e.K(this.f50808d);
            this.f50812p = K;
            this.f50809e = K;
            int d10 = mu.e.d(this.f50808d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
            this.f50810i = mu.e.d(this.f50808d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
            a aVar = h.f50802p;
            if (aVar.a().isLoggable(Level.FINE)) {
                aVar.a().fine(e.f50726a.c(true, this.f50811o, this.f50809e, d10, this.f50810i));
            }
            int readInt = this.f50808d.readInt() & Integer.MAX_VALUE;
            this.f50811o = readInt;
            if (d10 == 9) {
                if (readInt == i10) {
                    return;
                }
                throw new IOException("TYPE_CONTINUATION streamId changed");
            }
            throw new IOException(d10 + " != TYPE_CONTINUATION");
        }

        public final int a() {
            return this.f50812p;
        }

        public final void i(int i10) {
            this.f50810i = i10;
        }

        public final void m(int i10) {
            this.f50812p = i10;
        }

        public final void n(int i10) {
            this.f50809e = i10;
        }

        public final void p(int i10) {
            this.f50813q = i10;
        }

        @Override // okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            while (true) {
                int i10 = this.f50812p;
                if (i10 == 0) {
                    this.f50808d.skip(this.f50813q);
                    this.f50813q = 0;
                    if ((this.f50810i & 4) != 0) {
                        return -1L;
                    }
                    h();
                } else {
                    long read = this.f50808d.read(sink, Math.min(j10, i10));
                    if (read == -1) {
                        return -1L;
                    }
                    this.f50812p -= (int) read;
                    return read;
                }
            }
        }

        public final void s(int i10) {
            this.f50811o = i10;
        }

        @Override // okio.Source
        public Timeout timeout() {
            return this.f50808d.timeout();
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
        }
    }
}
