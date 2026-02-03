package cu;

import androidx.recyclerview.widget.RecyclerView;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import cu.d;
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
    public static final a f20962p = new a(null);

    /* renamed from: q  reason: collision with root package name */
    private static final Logger f20963q;

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSource f20964d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f20965e;

    /* renamed from: i  reason: collision with root package name */
    private final b f20966i;

    /* renamed from: o  reason: collision with root package name */
    private final d.a f20967o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Logger a() {
            return h.f20963q;
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

        void c(int i10, cu.b bVar, ByteString byteString);

        void d(int i10, int i11, List list);

        void e(boolean z10, m mVar);

        void f();

        void g(int i10, cu.b bVar);

        void h(boolean z10, int i10, BufferedSource bufferedSource, int i11);

        void i(boolean z10, int i10, int i11);

        void j(int i10, int i11, int i12, boolean z10);
    }

    static {
        Logger logger = Logger.getLogger(e.class.getName());
        Intrinsics.checkNotNullExpressionValue(logger, "getLogger(Http2::class.java.name)");
        f20963q = logger;
    }

    public h(BufferedSource source, boolean z10) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f20964d = source;
        this.f20965e = z10;
        b bVar = new b(source);
        this.f20966i = bVar;
        this.f20967o = new d.a(bVar, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT, 0, 4, null);
    }

    private final List B(int i10, int i11, int i12, int i13) {
        this.f20966i.n(i10);
        b bVar = this.f20966i;
        bVar.x(bVar.a());
        this.f20966i.B(i11);
        this.f20966i.l(i12);
        this.f20966i.E(i13);
        this.f20967o.k();
        return this.f20967o.e();
    }

    private final void D0(c cVar, int i10, int i11, int i12) {
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
                        int e11 = vt.e.e(this.f20964d.readShort(), 65535);
                        readInt = this.f20964d.readInt();
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
                cVar.e(false, mVar);
                return;
            } else {
                throw new IOException("TYPE_SETTINGS length % 6 != 0: " + i10);
            }
        }
        throw new IOException("TYPE_SETTINGS streamId != 0");
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
                i13 = vt.e.d(this.f20964d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
            }
            if ((i11 & 32) != 0) {
                L(cVar, i12);
                i10 -= 5;
            }
            cVar.a(z10, i12, -1, B(f20962p.b(i10, i11, i13), i13, i11, i12));
            return;
        }
        throw new IOException("PROTOCOL_ERROR: TYPE_HEADERS streamId == 0");
    }

    private final void E0(c cVar, int i10, int i11, int i12) {
        if (i10 == 4) {
            long f10 = vt.e.f(this.f20964d.readInt(), 2147483647L);
            if (f10 != 0) {
                cVar.b(i12, f10);
                return;
            }
            throw new IOException("windowSizeIncrement was 0");
        }
        throw new IOException("TYPE_WINDOW_UPDATE length !=4: " + i10);
    }

    private final void F(c cVar, int i10, int i11, int i12) {
        if (i10 == 8) {
            if (i12 == 0) {
                int readInt = this.f20964d.readInt();
                int readInt2 = this.f20964d.readInt();
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

    private final void L(c cVar, int i10) {
        boolean z10;
        int readInt = this.f20964d.readInt();
        if ((Integer.MIN_VALUE & readInt) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        cVar.j(i10, readInt & Integer.MAX_VALUE, vt.e.d(this.f20964d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY) + 1, z10);
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
                i13 = vt.e.d(this.f20964d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
            } else {
                i13 = 0;
            }
            cVar.d(i12, this.f20964d.readInt() & Integer.MAX_VALUE, B(f20962p.b(i10 - 4, i11, i13), i13, i11, i12));
            return;
        }
        throw new IOException("PROTOCOL_ERROR: TYPE_PUSH_PROMISE streamId == 0");
    }

    private final void n(c cVar, int i10, int i11, int i12) {
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
                    i13 = vt.e.d(this.f20964d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                }
                cVar.h(z10, i12, this.f20964d, f20962p.b(i10, i11, i13));
                this.f20964d.skip(i13);
                return;
            }
            throw new IOException("PROTOCOL_ERROR: FLAG_COMPRESSED without SETTINGS_COMPRESS_DATA");
        }
        throw new IOException("PROTOCOL_ERROR: TYPE_DATA streamId == 0");
    }

    private final void t0(c cVar, int i10, int i11, int i12) {
        if (i10 == 4) {
            if (i12 != 0) {
                int readInt = this.f20964d.readInt();
                cu.b a10 = cu.b.f20840e.a(readInt);
                if (a10 != null) {
                    cVar.g(i12, a10);
                    return;
                }
                throw new IOException("TYPE_RST_STREAM unexpected error code: " + readInt);
            }
            throw new IOException("TYPE_RST_STREAM streamId == 0");
        }
        throw new IOException("TYPE_RST_STREAM length: " + i10 + " != 4");
    }

    private final void x(c cVar, int i10, int i11, int i12) {
        if (i10 >= 8) {
            if (i12 == 0) {
                int readInt = this.f20964d.readInt();
                int readInt2 = this.f20964d.readInt();
                int i13 = i10 - 8;
                cu.b a10 = cu.b.f20840e.a(readInt2);
                if (a10 != null) {
                    ByteString byteString = ByteString.f44508p;
                    if (i13 > 0) {
                        byteString = this.f20964d.g1(i13);
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

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f20964d.close();
    }

    public final boolean h(boolean z10, c handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        try {
            this.f20964d.U0(9L);
            int K = vt.e.K(this.f20964d);
            if (K <= 16384) {
                int d10 = vt.e.d(this.f20964d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                int d11 = vt.e.d(this.f20964d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                int readInt = this.f20964d.readInt() & Integer.MAX_VALUE;
                Logger logger = f20963q;
                if (logger.isLoggable(Level.FINE)) {
                    logger.fine(e.f20886a.c(true, readInt, K, d10, d11));
                }
                if (z10 && d10 != 4) {
                    throw new IOException("Expected a SETTINGS frame but was " + e.f20886a.b(d10));
                }
                switch (d10) {
                    case 0:
                        n(handler, K, d11, readInt);
                        return true;
                    case 1:
                        E(handler, K, d11, readInt);
                        return true;
                    case 2:
                        N(handler, K, d11, readInt);
                        return true;
                    case 3:
                        t0(handler, K, d11, readInt);
                        return true;
                    case 4:
                        D0(handler, K, d11, readInt);
                        return true;
                    case 5:
                        V(handler, K, d11, readInt);
                        return true;
                    case 6:
                        F(handler, K, d11, readInt);
                        return true;
                    case 7:
                        x(handler, K, d11, readInt);
                        return true;
                    case 8:
                        E0(handler, K, d11, readInt);
                        return true;
                    default:
                        this.f20964d.skip(K);
                        return true;
                }
            }
            throw new IOException("FRAME_SIZE_ERROR: " + K);
        } catch (EOFException unused) {
            return false;
        }
    }

    public final void l(c handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        if (this.f20965e) {
            if (!h(true, handler)) {
                throw new IOException("Required SETTINGS preface not received");
            }
            return;
        }
        BufferedSource bufferedSource = this.f20964d;
        ByteString byteString = e.f20887b;
        ByteString g12 = bufferedSource.g1(byteString.G());
        Logger logger = f20963q;
        if (logger.isLoggable(Level.FINE)) {
            logger.fine(vt.e.t("<< CONNECTION " + g12.q(), new Object[0]));
        }
        if (Intrinsics.areEqual(byteString, g12)) {
            return;
        }
        throw new IOException("Expected a connection header but was " + g12.M());
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements Source {

        /* renamed from: d  reason: collision with root package name */
        private final BufferedSource f20968d;

        /* renamed from: e  reason: collision with root package name */
        private int f20969e;

        /* renamed from: i  reason: collision with root package name */
        private int f20970i;

        /* renamed from: o  reason: collision with root package name */
        private int f20971o;

        /* renamed from: p  reason: collision with root package name */
        private int f20972p;

        /* renamed from: q  reason: collision with root package name */
        private int f20973q;

        public b(BufferedSource source) {
            Intrinsics.checkNotNullParameter(source, "source");
            this.f20968d = source;
        }

        private final void h() {
            int i10 = this.f20971o;
            int K = vt.e.K(this.f20968d);
            this.f20972p = K;
            this.f20969e = K;
            int d10 = vt.e.d(this.f20968d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
            this.f20970i = vt.e.d(this.f20968d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
            a aVar = h.f20962p;
            if (aVar.a().isLoggable(Level.FINE)) {
                aVar.a().fine(e.f20886a.c(true, this.f20971o, this.f20969e, d10, this.f20970i));
            }
            int readInt = this.f20968d.readInt() & Integer.MAX_VALUE;
            this.f20971o = readInt;
            if (d10 == 9) {
                if (readInt == i10) {
                    return;
                }
                throw new IOException("TYPE_CONTINUATION streamId changed");
            }
            throw new IOException(d10 + " != TYPE_CONTINUATION");
        }

        public final void B(int i10) {
            this.f20973q = i10;
        }

        public final void E(int i10) {
            this.f20971o = i10;
        }

        public final int a() {
            return this.f20972p;
        }

        public final void l(int i10) {
            this.f20970i = i10;
        }

        public final void n(int i10) {
            this.f20972p = i10;
        }

        @Override // okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            while (true) {
                int i10 = this.f20972p;
                if (i10 == 0) {
                    this.f20968d.skip(this.f20973q);
                    this.f20973q = 0;
                    if ((this.f20970i & 4) != 0) {
                        return -1L;
                    }
                    h();
                } else {
                    long read = this.f20968d.read(sink, Math.min(j10, i10));
                    if (read == -1) {
                        return -1L;
                    }
                    this.f20972p -= (int) read;
                    return read;
                }
            }
        }

        @Override // okio.Source
        public Timeout timeout() {
            return this.f20968d.timeout();
        }

        public final void x(int i10) {
            this.f20969e = i10;
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
        }
    }
}
