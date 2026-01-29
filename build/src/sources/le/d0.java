package le;

import android.net.Uri;
import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetAddress;
import java.net.InetSocketAddress;
import java.net.MulticastSocket;
import java.net.SocketTimeoutException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class d0 extends f {

    /* renamed from: e  reason: collision with root package name */
    private final int f37177e;

    /* renamed from: f  reason: collision with root package name */
    private final byte[] f37178f;

    /* renamed from: g  reason: collision with root package name */
    private final DatagramPacket f37179g;

    /* renamed from: h  reason: collision with root package name */
    private Uri f37180h;

    /* renamed from: i  reason: collision with root package name */
    private DatagramSocket f37181i;

    /* renamed from: j  reason: collision with root package name */
    private MulticastSocket f37182j;

    /* renamed from: k  reason: collision with root package name */
    private InetAddress f37183k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f37184l;

    /* renamed from: m  reason: collision with root package name */
    private int f37185m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends m {
        public a(Throwable th2, int i10) {
            super(th2, i10);
        }
    }

    public d0() {
        this(2000);
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public long b(com.google.android.exoplayer2.upstream.a aVar) {
        Uri uri = aVar.f14346a;
        this.f37180h = uri;
        String str = (String) ne.a.e(uri.getHost());
        int port = this.f37180h.getPort();
        q(aVar);
        try {
            this.f37183k = InetAddress.getByName(str);
            InetSocketAddress inetSocketAddress = new InetSocketAddress(this.f37183k, port);
            if (this.f37183k.isMulticastAddress()) {
                MulticastSocket multicastSocket = new MulticastSocket(inetSocketAddress);
                this.f37182j = multicastSocket;
                multicastSocket.joinGroup(this.f37183k);
                this.f37181i = this.f37182j;
            } else {
                this.f37181i = new DatagramSocket(inetSocketAddress);
            }
            this.f37181i.setSoTimeout(this.f37177e);
            this.f37184l = true;
            r(aVar);
            return -1L;
        } catch (IOException e10) {
            throw new a(e10, 2001);
        } catch (SecurityException e11) {
            throw new a(e11, 2006);
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public void close() {
        this.f37180h = null;
        MulticastSocket multicastSocket = this.f37182j;
        if (multicastSocket != null) {
            try {
                multicastSocket.leaveGroup((InetAddress) ne.a.e(this.f37183k));
            } catch (IOException unused) {
            }
            this.f37182j = null;
        }
        DatagramSocket datagramSocket = this.f37181i;
        if (datagramSocket != null) {
            datagramSocket.close();
            this.f37181i = null;
        }
        this.f37183k = null;
        this.f37185m = 0;
        if (this.f37184l) {
            this.f37184l = false;
            p();
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f37180h;
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        if (i11 == 0) {
            return 0;
        }
        if (this.f37185m == 0) {
            try {
                ((DatagramSocket) ne.a.e(this.f37181i)).receive(this.f37179g);
                int length = this.f37179g.getLength();
                this.f37185m = length;
                o(length);
            } catch (SocketTimeoutException e10) {
                throw new a(e10, 2002);
            } catch (IOException e11) {
                throw new a(e11, 2001);
            }
        }
        int length2 = this.f37179g.getLength();
        int i12 = this.f37185m;
        int min = Math.min(i12, i11);
        System.arraycopy(this.f37178f, length2 - i12, bArr, i10, min);
        this.f37185m -= min;
        return min;
    }

    public d0(int i10) {
        this(i10, 8000);
    }

    public d0(int i10, int i11) {
        super(true);
        this.f37177e = i11;
        byte[] bArr = new byte[i10];
        this.f37178f = bArr;
        this.f37179g = new DatagramPacket(bArr, 0, i10);
    }
}
