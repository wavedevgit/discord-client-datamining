package ju;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.io.Closeable;
import java.io.EOFException;
import java.io.IOException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import ju.d;
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
    public static final a f31290p = new a(null);

    /* renamed from: q  reason: collision with root package name */
    private static final Logger f31291q;

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSource f31292d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f31293e;

    /* renamed from: i  reason: collision with root package name */
    private final b f31294i;

    /* renamed from: o  reason: collision with root package name */
    private final d.a f31295o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Logger a() {
            return h.f31291q;
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
        void a(boolean z10, int i10, int i11, List list);

        void b(int i10, long j10);

        void c(boolean z10, m mVar);

        void d(int i10, ju.b bVar);

        void e(int i10, int i11, List list);

        void f();

        void g(boolean z10, int i10, BufferedSource bufferedSource, int i11);

        void h(boolean z10, int i10, int i11);

        void i(int i10, int i11, int i12, boolean z10);

        void j(int i10, ju.b bVar, ByteString byteString);
    }

    static {
        Logger logger = Logger.getLogger(e.class.getName());
        Intrinsics.checkNotNullExpressionValue(logger, "getLogger(Http2::class.java.name)");
        f31291q = logger;
    }

    public h(BufferedSource source, boolean z10) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f31292d = source;
        this.f31293e = z10;
        b bVar = new b(source);
        this.f31294i = bVar;
        this.f31295o = new d.a(bVar, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT, 0, 4, null);
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
                i13 = cu.e.d(this.f31292d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
            } else {
                i13 = 0;
            }
            cVar.e(i12, this.f31292d.readInt() & Integer.MAX_VALUE, p(f31290p.b(i10 - 4, i11, i13), i13, i11, i12));
            return;
        }
        throw new IOException("PROTOCOL_ERROR: TYPE_PUSH_PROMISE streamId == 0");
    }

    private final void J(c cVar, int i10, int i11, int i12) {
        if (i10 == 4) {
            if (i12 != 0) {
                int readInt = this.f31292d.readInt();
                ju.b a10 = ju.b.f31168e.a(readInt);
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

    private final void P(c cVar, int i10, int i11, int i12) {
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
                        int e11 = cu.e.e(this.f31292d.readShort(), 65535);
                        readInt = this.f31292d.readInt();
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
                cVar.c(false, mVar);
                return;
            } else {
                throw new IOException("TYPE_SETTINGS length % 6 != 0: " + i10);
            }
        }
        throw new IOException("TYPE_SETTINGS streamId != 0");
    }

    private final void Y(c cVar, int i10, int i11, int i12) {
        if (i10 == 4) {
            long f10 = cu.e.f(this.f31292d.readInt(), 2147483647L);
            if (f10 != 0) {
                cVar.b(i12, f10);
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
                    i13 = cu.e.d(this.f31292d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                }
                cVar.g(z10, i12, this.f31292d, f31290p.b(i10, i11, i13));
                this.f31292d.skip(i13);
                return;
            }
            throw new IOException("PROTOCOL_ERROR: FLAG_COMPRESSED without SETTINGS_COMPRESS_DATA");
        }
        throw new IOException("PROTOCOL_ERROR: TYPE_DATA streamId == 0");
    }

    private final void n(c cVar, int i10, int i11, int i12) {
        if (i10 >= 8) {
            if (i12 == 0) {
                int readInt = this.f31292d.readInt();
                int readInt2 = this.f31292d.readInt();
                int i13 = i10 - 8;
                ju.b a10 = ju.b.f31168e.a(readInt2);
                if (a10 != null) {
                    ByteString byteString = ByteString.f43215p;
                    if (i13 > 0) {
                        byteString = this.f31292d.f1(i13);
                    }
                    cVar.j(readInt, a10, byteString);
                    return;
                }
                throw new IOException("TYPE_GOAWAY unexpected error code: " + readInt2);
            }
            throw new IOException("TYPE_GOAWAY streamId != 0");
        }
        throw new IOException("TYPE_GOAWAY length < 8: " + i10);
    }

    private final List p(int i10, int i11, int i12, int i13) {
        this.f31294i.m(i10);
        b bVar = this.f31294i;
        bVar.n(bVar.a());
        this.f31294i.p(i11);
        this.f31294i.k(i12);
        this.f31294i.s(i13);
        this.f31295o.k();
        return this.f31295o.e();
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
                i13 = cu.e.d(this.f31292d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
            }
            if ((i11 & 32) != 0) {
                z(cVar, i12);
                i10 -= 5;
            }
            cVar.a(z10, i12, -1, p(f31290p.b(i10, i11, i13), i13, i11, i12));
            return;
        }
        throw new IOException("PROTOCOL_ERROR: TYPE_HEADERS streamId == 0");
    }

    private final void y(c cVar, int i10, int i11, int i12) {
        if (i10 == 8) {
            if (i12 == 0) {
                int readInt = this.f31292d.readInt();
                int readInt2 = this.f31292d.readInt();
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

    private final void z(c cVar, int i10) {
        boolean z10;
        int readInt = this.f31292d.readInt();
        if ((Integer.MIN_VALUE & readInt) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        cVar.i(i10, readInt & Integer.MAX_VALUE, cu.e.d(this.f31292d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY) + 1, z10);
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f31292d.close();
    }

    public final boolean g(boolean z10, c handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        try {
            this.f31292d.U0(9L);
            int K = cu.e.K(this.f31292d);
            if (K <= 16384) {
                int d10 = cu.e.d(this.f31292d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                int d11 = cu.e.d(this.f31292d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                int readInt = this.f31292d.readInt() & Integer.MAX_VALUE;
                Logger logger = f31291q;
                if (logger.isLoggable(Level.FINE)) {
                    logger.fine(e.f31214a.c(true, readInt, K, d10, d11));
                }
                if (z10 && d10 != 4) {
                    throw new IOException("Expected a SETTINGS frame but was " + e.f31214a.b(d10));
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
                        P(handler, K, d11, readInt);
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
                        Y(handler, K, d11, readInt);
                        return true;
                    default:
                        this.f31292d.skip(K);
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
        if (this.f31293e) {
            if (!g(true, handler)) {
                throw new IOException("Required SETTINGS preface not received");
            }
            return;
        }
        BufferedSource bufferedSource = this.f31292d;
        ByteString byteString = e.f31215b;
        ByteString f12 = bufferedSource.f1(byteString.G());
        Logger logger = f31291q;
        if (logger.isLoggable(Level.FINE)) {
            logger.fine(cu.e.t("<< CONNECTION " + f12.q(), new Object[0]));
        }
        if (Intrinsics.areEqual(byteString, f12)) {
            return;
        }
        throw new IOException("Expected a connection header but was " + f12.M());
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements Source {

        /* renamed from: d  reason: collision with root package name */
        private final BufferedSource f31296d;

        /* renamed from: e  reason: collision with root package name */
        private int f31297e;

        /* renamed from: i  reason: collision with root package name */
        private int f31298i;

        /* renamed from: o  reason: collision with root package name */
        private int f31299o;

        /* renamed from: p  reason: collision with root package name */
        private int f31300p;

        /* renamed from: q  reason: collision with root package name */
        private int f31301q;

        public b(BufferedSource source) {
            Intrinsics.checkNotNullParameter(source, "source");
            this.f31296d = source;
        }

        private final void g() {
            int i10 = this.f31299o;
            int K = cu.e.K(this.f31296d);
            this.f31300p = K;
            this.f31297e = K;
            int d10 = cu.e.d(this.f31296d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
            this.f31298i = cu.e.d(this.f31296d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
            a aVar = h.f31290p;
            if (aVar.a().isLoggable(Level.FINE)) {
                aVar.a().fine(e.f31214a.c(true, this.f31299o, this.f31297e, d10, this.f31298i));
            }
            int readInt = this.f31296d.readInt() & Integer.MAX_VALUE;
            this.f31299o = readInt;
            if (d10 == 9) {
                if (readInt == i10) {
                    return;
                }
                throw new IOException("TYPE_CONTINUATION streamId changed");
            }
            throw new IOException(d10 + " != TYPE_CONTINUATION");
        }

        public final int a() {
            return this.f31300p;
        }

        public final void k(int i10) {
            this.f31298i = i10;
        }

        public final void m(int i10) {
            this.f31300p = i10;
        }

        public final void n(int i10) {
            this.f31297e = i10;
        }

        public final void p(int i10) {
            this.f31301q = i10;
        }

        @Override // okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            while (true) {
                int i10 = this.f31300p;
                if (i10 == 0) {
                    this.f31296d.skip(this.f31301q);
                    this.f31301q = 0;
                    if ((this.f31298i & 4) != 0) {
                        return -1L;
                    }
                    g();
                } else {
                    long read = this.f31296d.read(sink, Math.min(j10, i10));
                    if (read == -1) {
                        return -1L;
                    }
                    this.f31300p -= (int) read;
                    return read;
                }
            }
        }

        public final void s(int i10) {
            this.f31299o = i10;
        }

        @Override // okio.Source
        public Timeout timeout() {
            return this.f31296d.timeout();
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
        }
    }
}
