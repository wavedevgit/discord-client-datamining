package bu;

import androidx.recyclerview.widget.RecyclerView;
import bu.d;
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
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class h implements Closeable {

    /* renamed from: p  reason: collision with root package name */
    public static final a f7964p = new a(null);

    /* renamed from: q  reason: collision with root package name */
    private static final Logger f7965q;

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSource f7966d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f7967e;

    /* renamed from: i  reason: collision with root package name */
    private final b f7968i;

    /* renamed from: o  reason: collision with root package name */
    private final d.a f7969o;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final Logger a() {
            return h.f7965q;
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

        void d(int i10, bu.b bVar, ByteString byteString);

        void e(int i10, int i11, List list);

        void f();

        void g(boolean z10, int i10, BufferedSource bufferedSource, int i11);

        void h(boolean z10, int i10, int i11);

        void i(int i10, int i11, int i12, boolean z10);

        void j(int i10, bu.b bVar);
    }

    static {
        Logger logger = Logger.getLogger(e.class.getName());
        Intrinsics.checkNotNullExpressionValue(logger, "getLogger(Http2::class.java.name)");
        f7965q = logger;
    }

    public h(BufferedSource source, boolean z10) {
        Intrinsics.checkNotNullParameter(source, "source");
        this.f7966d = source;
        this.f7967e = z10;
        b bVar = new b(source);
        this.f7968i = bVar;
        this.f7969o = new d.a(bVar, RecyclerView.ItemAnimator.FLAG_APPEARED_IN_PRE_LAYOUT, 0, 4, null);
    }

    private final void A0(c cVar, int i10, int i11, int i12) {
        if (i10 == 4) {
            if (i12 != 0) {
                int readInt = this.f7966d.readInt();
                bu.b a10 = bu.b.f7842e.a(readInt);
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

    private final List B(int i10, int i11, int i12, int i13) {
        this.f7968i.n(i10);
        b bVar = this.f7968i;
        bVar.x(bVar.a());
        this.f7968i.B(i11);
        this.f7968i.l(i12);
        this.f7968i.E(i13);
        this.f7969o.k();
        return this.f7969o.e();
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
                        int e11 = ut.e.e(this.f7966d.readShort(), 65535);
                        readInt = this.f7966d.readInt();
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

    private final void D0(c cVar, int i10, int i11, int i12) {
        if (i10 == 4) {
            long f10 = ut.e.f(this.f7966d.readInt(), 2147483647L);
            if (f10 != 0) {
                cVar.b(i12, f10);
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
                i13 = ut.e.d(this.f7966d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
            }
            if ((i11 & 32) != 0) {
                L(cVar, i12);
                i10 -= 5;
            }
            cVar.a(z10, i12, -1, B(f7964p.b(i10, i11, i13), i13, i11, i12));
            return;
        }
        throw new IOException("PROTOCOL_ERROR: TYPE_HEADERS streamId == 0");
    }

    private final void F(c cVar, int i10, int i11, int i12) {
        if (i10 == 8) {
            if (i12 == 0) {
                int readInt = this.f7966d.readInt();
                int readInt2 = this.f7966d.readInt();
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
        int readInt = this.f7966d.readInt();
        if ((Integer.MIN_VALUE & readInt) != 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        cVar.i(i10, readInt & Integer.MAX_VALUE, ut.e.d(this.f7966d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY) + 1, z10);
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
                i13 = ut.e.d(this.f7966d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
            } else {
                i13 = 0;
            }
            cVar.e(i12, this.f7966d.readInt() & Integer.MAX_VALUE, B(f7964p.b(i10 - 4, i11, i13), i13, i11, i12));
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
                    i13 = ut.e.d(this.f7966d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                }
                cVar.g(z10, i12, this.f7966d, f7964p.b(i10, i11, i13));
                this.f7966d.skip(i13);
                return;
            }
            throw new IOException("PROTOCOL_ERROR: FLAG_COMPRESSED without SETTINGS_COMPRESS_DATA");
        }
        throw new IOException("PROTOCOL_ERROR: TYPE_DATA streamId == 0");
    }

    private final void x(c cVar, int i10, int i11, int i12) {
        if (i10 >= 8) {
            if (i12 == 0) {
                int readInt = this.f7966d.readInt();
                int readInt2 = this.f7966d.readInt();
                int i13 = i10 - 8;
                bu.b a10 = bu.b.f7842e.a(readInt2);
                if (a10 != null) {
                    ByteString byteString = ByteString.f44364p;
                    if (i13 > 0) {
                        byteString = this.f7966d.f1(i13);
                    }
                    cVar.d(readInt, a10, byteString);
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
        this.f7966d.close();
    }

    public final boolean h(boolean z10, c handler) {
        Intrinsics.checkNotNullParameter(handler, "handler");
        try {
            this.f7966d.T0(9L);
            int K = ut.e.K(this.f7966d);
            if (K <= 16384) {
                int d10 = ut.e.d(this.f7966d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                int d11 = ut.e.d(this.f7966d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
                int readInt = this.f7966d.readInt() & Integer.MAX_VALUE;
                Logger logger = f7965q;
                if (logger.isLoggable(Level.FINE)) {
                    logger.fine(e.f7888a.c(true, readInt, K, d10, d11));
                }
                if (z10 && d10 != 4) {
                    throw new IOException("Expected a SETTINGS frame but was " + e.f7888a.b(d10));
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
                        A0(handler, K, d11, readInt);
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
                        x(handler, K, d11, readInt);
                        return true;
                    case 8:
                        D0(handler, K, d11, readInt);
                        return true;
                    default:
                        this.f7966d.skip(K);
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
        if (this.f7967e) {
            if (!h(true, handler)) {
                throw new IOException("Required SETTINGS preface not received");
            }
            return;
        }
        BufferedSource bufferedSource = this.f7966d;
        ByteString byteString = e.f7889b;
        ByteString f12 = bufferedSource.f1(byteString.G());
        Logger logger = f7965q;
        if (logger.isLoggable(Level.FINE)) {
            logger.fine(ut.e.t("<< CONNECTION " + f12.q(), new Object[0]));
        }
        if (Intrinsics.areEqual(byteString, f12)) {
            return;
        }
        throw new IOException("Expected a connection header but was " + f12.M());
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements Source {

        /* renamed from: d  reason: collision with root package name */
        private final BufferedSource f7970d;

        /* renamed from: e  reason: collision with root package name */
        private int f7971e;

        /* renamed from: i  reason: collision with root package name */
        private int f7972i;

        /* renamed from: o  reason: collision with root package name */
        private int f7973o;

        /* renamed from: p  reason: collision with root package name */
        private int f7974p;

        /* renamed from: q  reason: collision with root package name */
        private int f7975q;

        public b(BufferedSource source) {
            Intrinsics.checkNotNullParameter(source, "source");
            this.f7970d = source;
        }

        private final void h() {
            int i10 = this.f7973o;
            int K = ut.e.K(this.f7970d);
            this.f7974p = K;
            this.f7971e = K;
            int d10 = ut.e.d(this.f7970d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
            this.f7972i = ut.e.d(this.f7970d.readByte(), SetSpanOperation.SPAN_MAX_PRIORITY);
            a aVar = h.f7964p;
            if (aVar.a().isLoggable(Level.FINE)) {
                aVar.a().fine(e.f7888a.c(true, this.f7973o, this.f7971e, d10, this.f7972i));
            }
            int readInt = this.f7970d.readInt() & Integer.MAX_VALUE;
            this.f7973o = readInt;
            if (d10 == 9) {
                if (readInt == i10) {
                    return;
                }
                throw new IOException("TYPE_CONTINUATION streamId changed");
            }
            throw new IOException(d10 + " != TYPE_CONTINUATION");
        }

        public final void B(int i10) {
            this.f7975q = i10;
        }

        public final void E(int i10) {
            this.f7973o = i10;
        }

        public final int a() {
            return this.f7974p;
        }

        public final void l(int i10) {
            this.f7972i = i10;
        }

        public final void n(int i10) {
            this.f7974p = i10;
        }

        @Override // okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            while (true) {
                int i10 = this.f7974p;
                if (i10 == 0) {
                    this.f7970d.skip(this.f7975q);
                    this.f7975q = 0;
                    if ((this.f7972i & 4) != 0) {
                        return -1L;
                    }
                    h();
                } else {
                    long read = this.f7970d.read(sink, Math.min(j10, i10));
                    if (read == -1) {
                        return -1L;
                    }
                    this.f7974p -= (int) read;
                    return read;
                }
            }
        }

        @Override // okio.Source
        public Timeout timeout() {
            return this.f7970d.timeout();
        }

        public final void x(int i10) {
            this.f7971e = i10;
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
        }
    }
}
