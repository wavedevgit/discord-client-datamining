package eu;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import eu.d;
import java.io.Closeable;
import java.io.IOException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import okio.Buffer;
import okio.BufferedSink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j implements Closeable {

    /* renamed from: r  reason: collision with root package name */
    public static final a f22848r = new a(null);

    /* renamed from: s  reason: collision with root package name */
    private static final Logger f22849s = Logger.getLogger(e.class.getName());

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSink f22850d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f22851e;

    /* renamed from: i  reason: collision with root package name */
    private final Buffer f22852i;

    /* renamed from: o  reason: collision with root package name */
    private int f22853o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f22854p;

    /* renamed from: q  reason: collision with root package name */
    private final d.b f22855q;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    public j(BufferedSink sink, boolean z10) {
        Intrinsics.checkNotNullParameter(sink, "sink");
        this.f22850d = sink;
        this.f22851e = z10;
        Buffer buffer = new Buffer();
        this.f22852i = buffer;
        this.f22853o = 16384;
        this.f22855q = new d.b(0, false, buffer, 3, null);
    }

    private final void D0(int i10, long j10) {
        int i11;
        while (j10 > 0) {
            long min = Math.min(this.f22853o, j10);
            j10 -= min;
            int i12 = (int) min;
            if (j10 == 0) {
                i11 = 4;
            } else {
                i11 = 0;
            }
            x(i10, i12, 9, i11);
            this.f22850d.t0(this.f22852i, min);
        }
    }

    public final synchronized void A0(m settings) {
        int i10;
        try {
            Intrinsics.checkNotNullParameter(settings, "settings");
            if (!this.f22854p) {
                x(0, settings.i() * 6, 4, 0);
                for (int i11 = 0; i11 < 10; i11++) {
                    if (settings.f(i11)) {
                        if (i11 != 4) {
                            if (i11 != 7) {
                                i10 = i11;
                            } else {
                                i10 = 4;
                            }
                        } else {
                            i10 = 3;
                        }
                        this.f22850d.writeShort(i10);
                        this.f22850d.writeInt(settings.a(i11));
                    }
                }
                this.f22850d.flush();
            } else {
                throw new IOException("closed");
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final synchronized void B(int i10, b errorCode, byte[] debugData) {
        try {
            Intrinsics.checkNotNullParameter(errorCode, "errorCode");
            Intrinsics.checkNotNullParameter(debugData, "debugData");
            if (!this.f22854p) {
                if (errorCode.d() != -1) {
                    boolean z10 = false;
                    x(0, debugData.length + 8, 7, 0);
                    this.f22850d.writeInt(i10);
                    this.f22850d.writeInt(errorCode.d());
                    if (debugData.length == 0) {
                        z10 = true;
                    }
                    if (!z10) {
                        this.f22850d.write(debugData);
                    }
                    this.f22850d.flush();
                } else {
                    throw new IllegalArgumentException("errorCode.httpCode == -1");
                }
            } else {
                throw new IOException("closed");
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final synchronized void C0(int i10, long j10) {
        if (!this.f22854p) {
            if (j10 != 0 && j10 <= 2147483647L) {
                x(i10, 4, 8, 0);
                this.f22850d.writeInt((int) j10);
                this.f22850d.flush();
            } else {
                throw new IllegalArgumentException(("windowSizeIncrement == 0 || windowSizeIncrement > 0x7fffffffL: " + j10).toString());
            }
        } else {
            throw new IOException("closed");
        }
    }

    public final synchronized void E(boolean z10, int i10, List headerBlock) {
        int i11;
        Intrinsics.checkNotNullParameter(headerBlock, "headerBlock");
        if (!this.f22854p) {
            this.f22855q.g(headerBlock);
            long size = this.f22852i.size();
            long min = Math.min(this.f22853o, size);
            int i12 = (size > min ? 1 : (size == min ? 0 : -1));
            if (i12 == 0) {
                i11 = 4;
            } else {
                i11 = 0;
            }
            if (z10) {
                i11 |= 1;
            }
            x(i10, (int) min, 1, i11);
            this.f22850d.t0(this.f22852i, min);
            if (i12 > 0) {
                D0(i10, size - min);
            }
        } else {
            throw new IOException("closed");
        }
    }

    public final int F() {
        return this.f22853o;
    }

    public final synchronized void L(boolean z10, int i10, int i11) {
        if (!this.f22854p) {
            x(0, 8, 6, z10 ? 1 : 0);
            this.f22850d.writeInt(i10);
            this.f22850d.writeInt(i11);
            this.f22850d.flush();
        } else {
            throw new IOException("closed");
        }
    }

    public final synchronized void N(int i10, int i11, List requestHeaders) {
        int i12;
        Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
        if (!this.f22854p) {
            this.f22855q.g(requestHeaders);
            long size = this.f22852i.size();
            int min = (int) Math.min(this.f22853o - 4, size);
            int i13 = min + 4;
            long j10 = min;
            int i14 = (size > j10 ? 1 : (size == j10 ? 0 : -1));
            if (i14 == 0) {
                i12 = 4;
            } else {
                i12 = 0;
            }
            x(i10, i13, 5, i12);
            this.f22850d.writeInt(i11 & Integer.MAX_VALUE);
            this.f22850d.t0(this.f22852i, j10);
            if (i14 > 0) {
                D0(i10, size - j10);
            }
        } else {
            throw new IOException("closed");
        }
    }

    public final synchronized void V(int i10, b errorCode) {
        Intrinsics.checkNotNullParameter(errorCode, "errorCode");
        if (!this.f22854p) {
            if (errorCode.d() != -1) {
                x(i10, 4, 3, 0);
                this.f22850d.writeInt(errorCode.d());
                this.f22850d.flush();
            } else {
                throw new IllegalArgumentException("Failed requirement.");
            }
        } else {
            throw new IOException("closed");
        }
    }

    public final synchronized void a(m peerSettings) {
        try {
            Intrinsics.checkNotNullParameter(peerSettings, "peerSettings");
            if (!this.f22854p) {
                this.f22853o = peerSettings.e(this.f22853o);
                if (peerSettings.b() != -1) {
                    this.f22855q.e(peerSettings.b());
                }
                x(0, 0, 4, 1);
                this.f22850d.flush();
            } else {
                throw new IOException("closed");
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        this.f22854p = true;
        this.f22850d.close();
    }

    public final synchronized void flush() {
        if (!this.f22854p) {
            this.f22850d.flush();
        } else {
            throw new IOException("closed");
        }
    }

    public final synchronized void h() {
        try {
            if (!this.f22854p) {
                if (!this.f22851e) {
                    return;
                }
                Logger logger = f22849s;
                if (logger.isLoggable(Level.FINE)) {
                    logger.fine(xt.e.t(">> CONNECTION " + e.f22733b.q(), new Object[0]));
                }
                this.f22850d.a2(e.f22733b);
                this.f22850d.flush();
                return;
            }
            throw new IOException("closed");
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final synchronized void l(boolean z10, int i10, Buffer buffer, int i11) {
        if (!this.f22854p) {
            n(i10, z10 ? 1 : 0, buffer, i11);
        } else {
            throw new IOException("closed");
        }
    }

    public final void n(int i10, int i11, Buffer buffer, int i12) {
        x(i10, i12, 0, i11);
        if (i12 > 0) {
            BufferedSink bufferedSink = this.f22850d;
            Intrinsics.checkNotNull(buffer);
            bufferedSink.t0(buffer, i12);
        }
    }

    public final void x(int i10, int i11, int i12, int i13) {
        int i14;
        int i15;
        int i16;
        int i17;
        Logger logger = f22849s;
        if (logger.isLoggable(Level.FINE)) {
            i14 = i10;
            i15 = i11;
            i16 = i12;
            i17 = i13;
            logger.fine(e.f22732a.c(false, i14, i15, i16, i17));
        } else {
            i14 = i10;
            i15 = i11;
            i16 = i12;
            i17 = i13;
        }
        if (i15 <= this.f22853o) {
            if ((Integer.MIN_VALUE & i14) == 0) {
                xt.e.c0(this.f22850d, i15);
                this.f22850d.writeByte(i16 & SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f22850d.writeByte(i17 & SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f22850d.writeInt(Integer.MAX_VALUE & i14);
                return;
            }
            throw new IllegalArgumentException(("reserved bit set: " + i14).toString());
        }
        throw new IllegalArgumentException(("FRAME_SIZE_ERROR length > " + this.f22853o + ": " + i15).toString());
    }
}
