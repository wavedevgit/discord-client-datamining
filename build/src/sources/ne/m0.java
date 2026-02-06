package ne;

import android.os.SystemClock;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.google.android.exoplayer2.upstream.j;
import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.util.Arrays;
import java.util.ConcurrentModificationException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class m0 {

    /* renamed from: a  reason: collision with root package name */
    private static final Object f38953a = new Object();

    /* renamed from: b  reason: collision with root package name */
    private static final Object f38954b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private static boolean f38955c = false;

    /* renamed from: d  reason: collision with root package name */
    private static long f38956d = 0;

    /* renamed from: e  reason: collision with root package name */
    private static String f38957e = "time.android.com";

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void a(IOException iOException);

        void b();
    }

    static /* synthetic */ long e() {
        return l();
    }

    private static void g(byte b10, byte b11, int i10, long j10) {
        if (b10 != 3) {
            if (b11 != 4 && b11 != 5) {
                throw new IOException("SNTP: Untrusted mode: " + ((int) b11));
            } else if (i10 != 0 && i10 <= 15) {
                if (j10 != 0) {
                    return;
                }
                throw new IOException("SNTP: Zero transmitTime");
            } else {
                throw new IOException("SNTP: Untrusted stratum: " + i10);
            }
        }
        throw new IOException("SNTP: Unsynchronized server");
    }

    public static long h() {
        long j10;
        synchronized (f38954b) {
            try {
                if (f38955c) {
                    j10 = f38956d;
                } else {
                    j10 = -9223372036854775807L;
                }
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return j10;
    }

    public static String i() {
        String str;
        synchronized (f38954b) {
            str = f38957e;
        }
        return str;
    }

    public static void j(com.google.android.exoplayer2.upstream.j jVar, b bVar) {
        if (k()) {
            if (bVar != null) {
                bVar.b();
                return;
            }
            return;
        }
        if (jVar == null) {
            jVar = new com.google.android.exoplayer2.upstream.j("SntpClient");
        }
        jVar.n(new d(), new c(bVar), 1);
    }

    public static boolean k() {
        boolean z10;
        synchronized (f38954b) {
            z10 = f38955c;
        }
        return z10;
    }

    private static long l() {
        InetAddress byName = InetAddress.getByName(i());
        DatagramSocket datagramSocket = new DatagramSocket();
        try {
            datagramSocket.setSoTimeout(10000);
            byte[] bArr = new byte[48];
            DatagramPacket datagramPacket = new DatagramPacket(bArr, 48, byName, 123);
            bArr[0] = 27;
            long currentTimeMillis = System.currentTimeMillis();
            long elapsedRealtime = SystemClock.elapsedRealtime();
            o(bArr, 40, currentTimeMillis);
            datagramSocket.send(datagramPacket);
            datagramSocket.receive(new DatagramPacket(bArr, 48));
            long elapsedRealtime2 = SystemClock.elapsedRealtime();
            long j10 = currentTimeMillis + (elapsedRealtime2 - elapsedRealtime);
            byte b10 = bArr[0];
            long n10 = n(bArr, 24);
            long n11 = n(bArr, 32);
            long n12 = n(bArr, 40);
            g((byte) ((b10 >> 6) & 3), (byte) (b10 & 7), bArr[1] & 255, n12);
            long j11 = (j10 + (((n11 - n10) + (n12 - j10)) / 2)) - elapsedRealtime2;
            datagramSocket.close();
            return j11;
        } catch (Throwable th2) {
            try {
                datagramSocket.close();
            } catch (Throwable th3) {
                th2.addSuppressed(th3);
            }
            throw th2;
        }
    }

    private static long m(byte[] bArr, int i10) {
        int i11 = bArr[i10];
        int i12 = bArr[i10 + 1];
        int i13 = bArr[i10 + 2];
        int i14 = bArr[i10 + 3];
        if ((i11 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
            i11 = (i11 & 127) + IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        }
        if ((i12 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
            i12 = (i12 & 127) + IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        }
        if ((i13 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
            i13 = (i13 & 127) + IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        }
        if ((i14 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) == 128) {
            i14 = (i14 & 127) + IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT;
        }
        return (i11 << 24) + (i12 << 16) + (i13 << 8) + i14;
    }

    private static long n(byte[] bArr, int i10) {
        long m10 = m(bArr, i10);
        long m11 = m(bArr, i10 + 4);
        if (m10 == 0 && m11 == 0) {
            return 0L;
        }
        return ((m10 - 2208988800L) * 1000) + ((m11 * 1000) / 4294967296L);
    }

    private static void o(byte[] bArr, int i10, long j10) {
        if (j10 == 0) {
            Arrays.fill(bArr, i10, i10 + 8, (byte) 0);
            return;
        }
        long j11 = j10 / 1000;
        long j12 = j10 - (j11 * 1000);
        long j13 = j11 + 2208988800L;
        bArr[i10] = (byte) (j13 >> 24);
        bArr[i10 + 1] = (byte) (j13 >> 16);
        bArr[i10 + 2] = (byte) (j13 >> 8);
        bArr[i10 + 3] = (byte) j13;
        long j14 = (j12 * 4294967296L) / 1000;
        bArr[i10 + 4] = (byte) (j14 >> 24);
        bArr[i10 + 5] = (byte) (j14 >> 16);
        bArr[i10 + 6] = (byte) (j14 >> 8);
        bArr[i10 + 7] = (byte) (Math.random() * 255.0d);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class d implements j.e {
        private d() {
        }

        @Override // com.google.android.exoplayer2.upstream.j.e
        public void b() {
            synchronized (m0.f38953a) {
                synchronized (m0.f38954b) {
                    if (m0.f38955c) {
                        return;
                    }
                    long e10 = m0.e();
                    synchronized (m0.f38954b) {
                        long unused = m0.f38956d = e10;
                        boolean unused2 = m0.f38955c = true;
                    }
                }
            }
        }

        @Override // com.google.android.exoplayer2.upstream.j.e
        public void c() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class c implements j.b {

        /* renamed from: d  reason: collision with root package name */
        private final b f38958d;

        public c(b bVar) {
            this.f38958d = bVar;
        }

        @Override // com.google.android.exoplayer2.upstream.j.b
        public void j(j.e eVar, long j10, long j11) {
            if (this.f38958d != null) {
                if (!m0.k()) {
                    this.f38958d.a(new IOException(new ConcurrentModificationException()));
                } else {
                    this.f38958d.b();
                }
            }
        }

        @Override // com.google.android.exoplayer2.upstream.j.b
        public j.c n(j.e eVar, long j10, long j11, IOException iOException, int i10) {
            b bVar = this.f38958d;
            if (bVar != null) {
                bVar.a(iOException);
            }
            return com.google.android.exoplayer2.upstream.j.f13428f;
        }

        @Override // com.google.android.exoplayer2.upstream.j.b
        public void i(j.e eVar, long j10, long j11, boolean z10) {
        }
    }
}
