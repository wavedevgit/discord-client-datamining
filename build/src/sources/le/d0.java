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
    private final int f37307e;

    /* renamed from: f  reason: collision with root package name */
    private final byte[] f37308f;

    /* renamed from: g  reason: collision with root package name */
    private final DatagramPacket f37309g;

    /* renamed from: h  reason: collision with root package name */
    private Uri f37310h;

    /* renamed from: i  reason: collision with root package name */
    private DatagramSocket f37311i;

    /* renamed from: j  reason: collision with root package name */
    private MulticastSocket f37312j;

    /* renamed from: k  reason: collision with root package name */
    private InetAddress f37313k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f37314l;

    /* renamed from: m  reason: collision with root package name */
    private int f37315m;

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
        Uri uri = aVar.f13975a;
        this.f37310h = uri;
        String str = (String) ne.a.e(uri.getHost());
        int port = this.f37310h.getPort();
        q(aVar);
        try {
            this.f37313k = InetAddress.getByName(str);
            InetSocketAddress inetSocketAddress = new InetSocketAddress(this.f37313k, port);
            if (this.f37313k.isMulticastAddress()) {
                MulticastSocket multicastSocket = new MulticastSocket(inetSocketAddress);
                this.f37312j = multicastSocket;
                multicastSocket.joinGroup(this.f37313k);
                this.f37311i = this.f37312j;
            } else {
                this.f37311i = new DatagramSocket(inetSocketAddress);
            }
            this.f37311i.setSoTimeout(this.f37307e);
            this.f37314l = true;
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
        this.f37310h = null;
        MulticastSocket multicastSocket = this.f37312j;
        if (multicastSocket != null) {
            try {
                multicastSocket.leaveGroup((InetAddress) ne.a.e(this.f37313k));
            } catch (IOException unused) {
            }
            this.f37312j = null;
        }
        DatagramSocket datagramSocket = this.f37311i;
        if (datagramSocket != null) {
            datagramSocket.close();
            this.f37311i = null;
        }
        this.f37313k = null;
        this.f37315m = 0;
        if (this.f37314l) {
            this.f37314l = false;
            p();
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f37310h;
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        if (i11 == 0) {
            return 0;
        }
        if (this.f37315m == 0) {
            try {
                ((DatagramSocket) ne.a.e(this.f37311i)).receive(this.f37309g);
                int length = this.f37309g.getLength();
                this.f37315m = length;
                o(length);
            } catch (SocketTimeoutException e10) {
                throw new a(e10, 2002);
            } catch (IOException e11) {
                throw new a(e11, 2001);
            }
        }
        int length2 = this.f37309g.getLength();
        int i12 = this.f37315m;
        int min = Math.min(i12, i11);
        System.arraycopy(this.f37308f, length2 - i12, bArr, i10, min);
        this.f37315m -= min;
        return min;
    }

    public d0(int i10) {
        this(i10, 8000);
    }

    public d0(int i10, int i11) {
        super(true);
        this.f37307e = i11;
        byte[] bArr = new byte[i10];
        this.f37308f = bArr;
        this.f37309g = new DatagramPacket(bArr, 0, i10);
    }
}
