package ku;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.io.Closeable;
import java.io.IOException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import ku.d;
import okio.Buffer;
import okio.BufferedSink;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j implements Closeable {

    /* renamed from: r  reason: collision with root package name */
    public static final a f35422r = new a(null);

    /* renamed from: s  reason: collision with root package name */
    private static final Logger f35423s = Logger.getLogger(e.class.getName());

    /* renamed from: d  reason: collision with root package name */
    private final BufferedSink f35424d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f35425e;

    /* renamed from: i  reason: collision with root package name */
    private final Buffer f35426i;

    /* renamed from: o  reason: collision with root package name */
    private int f35427o;

    /* renamed from: p  reason: collision with root package name */
    private boolean f35428p;

    /* renamed from: q  reason: collision with root package name */
    private final d.b f35429q;

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
        this.f35424d = sink;
        this.f35425e = z10;
        Buffer buffer = new Buffer();
        this.f35426i = buffer;
        this.f35427o = 16384;
        this.f35429q = new d.b(0, false, buffer, 3, null);
    }

    private final void Z(int i10, long j10) {
        int i11;
        while (j10 > 0) {
            long min = Math.min(this.f35427o, j10);
            j10 -= min;
            int i12 = (int) min;
            if (j10 == 0) {
                i11 = 4;
            } else {
                i11 = 0;
            }
            n(i10, i12, 9, i11);
            this.f35424d.u0(this.f35426i, min);
        }
    }

    public final synchronized void C(int i10, int i11, List requestHeaders) {
        int i12;
        Intrinsics.checkNotNullParameter(requestHeaders, "requestHeaders");
        if (!this.f35428p) {
            this.f35429q.g(requestHeaders);
            long size = this.f35426i.size();
            int min = (int) Math.min(this.f35427o - 4, size);
            int i13 = min + 4;
            long j10 = min;
            int i14 = (size > j10 ? 1 : (size == j10 ? 0 : -1));
            if (i14 == 0) {
                i12 = 4;
            } else {
                i12 = 0;
            }
            n(i10, i13, 5, i12);
            this.f35424d.writeInt(i11 & Integer.MAX_VALUE);
            this.f35424d.u0(this.f35426i, j10);
            if (i14 > 0) {
                Z(i10, size - j10);
            }
        } else {
            throw new IOException("closed");
        }
    }

    public final synchronized void I(int i10, b errorCode) {
        Intrinsics.checkNotNullParameter(errorCode, "errorCode");
        if (!this.f35428p) {
            if (errorCode.d() != -1) {
                n(i10, 4, 3, 0);
                this.f35424d.writeInt(errorCode.d());
                this.f35424d.flush();
            } else {
                throw new IllegalArgumentException("Failed requirement.");
            }
        } else {
            throw new IOException("closed");
        }
    }

    public final synchronized void J(m settings) {
        int i10;
        try {
            Intrinsics.checkNotNullParameter(settings, "settings");
            if (!this.f35428p) {
                n(0, settings.i() * 6, 4, 0);
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
                        this.f35424d.writeShort(i10);
                        this.f35424d.writeInt(settings.a(i11));
                    }
                }
                this.f35424d.flush();
            } else {
                throw new IOException("closed");
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final synchronized void Q(int i10, long j10) {
        if (!this.f35428p) {
            if (j10 != 0 && j10 <= 2147483647L) {
                n(i10, 4, 8, 0);
                this.f35424d.writeInt((int) j10);
                this.f35424d.flush();
            } else {
                throw new IllegalArgumentException(("windowSizeIncrement == 0 || windowSizeIncrement > 0x7fffffffL: " + j10).toString());
            }
        } else {
            throw new IOException("closed");
        }
    }

    public final synchronized void a(m peerSettings) {
        try {
            Intrinsics.checkNotNullParameter(peerSettings, "peerSettings");
            if (!this.f35428p) {
                this.f35427o = peerSettings.e(this.f35427o);
                if (peerSettings.b() != -1) {
                    this.f35429q.e(peerSettings.b());
                }
                n(0, 0, 4, 1);
                this.f35424d.flush();
            } else {
                throw new IOException("closed");
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        this.f35428p = true;
        this.f35424d.close();
    }

    public final synchronized void flush() {
        if (!this.f35428p) {
            this.f35424d.flush();
        } else {
            throw new IOException("closed");
        }
    }

    public final synchronized void g() {
        try {
            if (!this.f35428p) {
                if (!this.f35425e) {
                    return;
                }
                Logger logger = f35423s;
                if (logger.isLoggable(Level.FINE)) {
                    logger.fine(du.e.t(">> CONNECTION " + e.f35307b.q(), new Object[0]));
                }
                this.f35424d.Y1(e.f35307b);
                this.f35424d.flush();
                return;
            }
            throw new IOException("closed");
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final synchronized void k(boolean z10, int i10, Buffer buffer, int i11) {
        if (!this.f35428p) {
            m(i10, z10 ? 1 : 0, buffer, i11);
        } else {
            throw new IOException("closed");
        }
    }

    public final void m(int i10, int i11, Buffer buffer, int i12) {
        n(i10, i12, 0, i11);
        if (i12 > 0) {
            BufferedSink bufferedSink = this.f35424d;
            Intrinsics.checkNotNull(buffer);
            bufferedSink.u0(buffer, i12);
        }
    }

    public final void n(int i10, int i11, int i12, int i13) {
        int i14;
        int i15;
        int i16;
        int i17;
        Logger logger = f35423s;
        if (logger.isLoggable(Level.FINE)) {
            i14 = i10;
            i15 = i11;
            i16 = i12;
            i17 = i13;
            logger.fine(e.f35306a.c(false, i14, i15, i16, i17));
        } else {
            i14 = i10;
            i15 = i11;
            i16 = i12;
            i17 = i13;
        }
        if (i15 <= this.f35427o) {
            if ((Integer.MIN_VALUE & i14) == 0) {
                du.e.c0(this.f35424d, i15);
                this.f35424d.writeByte(i16 & SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f35424d.writeByte(i17 & SetSpanOperation.SPAN_MAX_PRIORITY);
                this.f35424d.writeInt(Integer.MAX_VALUE & i14);
                return;
            }
            throw new IllegalArgumentException(("reserved bit set: " + i14).toString());
        }
        throw new IllegalArgumentException(("FRAME_SIZE_ERROR length > " + this.f35427o + ": " + i15).toString());
    }

    public final synchronized void p(int i10, b errorCode, byte[] debugData) {
        try {
            Intrinsics.checkNotNullParameter(errorCode, "errorCode");
            Intrinsics.checkNotNullParameter(debugData, "debugData");
            if (!this.f35428p) {
                if (errorCode.d() != -1) {
                    boolean z10 = false;
                    n(0, debugData.length + 8, 7, 0);
                    this.f35424d.writeInt(i10);
                    this.f35424d.writeInt(errorCode.d());
                    if (debugData.length == 0) {
                        z10 = true;
                    }
                    if (!z10) {
                        this.f35424d.write(debugData);
                    }
                    this.f35424d.flush();
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

    public final synchronized void s(boolean z10, int i10, List headerBlock) {
        int i11;
        Intrinsics.checkNotNullParameter(headerBlock, "headerBlock");
        if (!this.f35428p) {
            this.f35429q.g(headerBlock);
            long size = this.f35426i.size();
            long min = Math.min(this.f35427o, size);
            int i12 = (size > min ? 1 : (size == min ? 0 : -1));
            if (i12 == 0) {
                i11 = 4;
            } else {
                i11 = 0;
            }
            if (z10) {
                i11 |= 1;
            }
            n(i10, (int) min, 1, i11);
            this.f35424d.u0(this.f35426i, min);
            if (i12 > 0) {
                Z(i10, size - min);
            }
        } else {
            throw new IOException("closed");
        }
    }

    public final int y() {
        return this.f35427o;
    }

    public final synchronized void z(boolean z10, int i10, int i11) {
        if (!this.f35428p) {
            n(0, 8, 6, z10 ? 1 : 0);
            this.f35424d.writeInt(i10);
            this.f35424d.writeInt(i11);
            this.f35424d.flush();
        } else {
            throw new IOException("closed");
        }
    }
}
