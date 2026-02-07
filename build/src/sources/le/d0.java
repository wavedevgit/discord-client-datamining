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
    private final int f36144e;

    /* renamed from: f  reason: collision with root package name */
    private final byte[] f36145f;

    /* renamed from: g  reason: collision with root package name */
    private final DatagramPacket f36146g;

    /* renamed from: h  reason: collision with root package name */
    private Uri f36147h;

    /* renamed from: i  reason: collision with root package name */
    private DatagramSocket f36148i;

    /* renamed from: j  reason: collision with root package name */
    private MulticastSocket f36149j;

    /* renamed from: k  reason: collision with root package name */
    private InetAddress f36150k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f36151l;

    /* renamed from: m  reason: collision with root package name */
    private int f36152m;

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
        Uri uri = aVar.f13265a;
        this.f36147h = uri;
        String str = (String) ne.a.e(uri.getHost());
        int port = this.f36147h.getPort();
        q(aVar);
        try {
            this.f36150k = InetAddress.getByName(str);
            InetSocketAddress inetSocketAddress = new InetSocketAddress(this.f36150k, port);
            if (this.f36150k.isMulticastAddress()) {
                MulticastSocket multicastSocket = new MulticastSocket(inetSocketAddress);
                this.f36149j = multicastSocket;
                multicastSocket.joinGroup(this.f36150k);
                this.f36148i = this.f36149j;
            } else {
                this.f36148i = new DatagramSocket(inetSocketAddress);
            }
            this.f36148i.setSoTimeout(this.f36144e);
            this.f36151l = true;
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
        this.f36147h = null;
        MulticastSocket multicastSocket = this.f36149j;
        if (multicastSocket != null) {
            try {
                multicastSocket.leaveGroup((InetAddress) ne.a.e(this.f36150k));
            } catch (IOException unused) {
            }
            this.f36149j = null;
        }
        DatagramSocket datagramSocket = this.f36148i;
        if (datagramSocket != null) {
            datagramSocket.close();
            this.f36148i = null;
        }
        this.f36150k = null;
        this.f36152m = 0;
        if (this.f36151l) {
            this.f36151l = false;
            p();
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f36147h;
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        if (i11 == 0) {
            return 0;
        }
        if (this.f36152m == 0) {
            try {
                ((DatagramSocket) ne.a.e(this.f36148i)).receive(this.f36146g);
                int length = this.f36146g.getLength();
                this.f36152m = length;
                o(length);
            } catch (SocketTimeoutException e10) {
                throw new a(e10, 2002);
            } catch (IOException e11) {
                throw new a(e11, 2001);
            }
        }
        int length2 = this.f36146g.getLength();
        int i12 = this.f36152m;
        int min = Math.min(i12, i11);
        System.arraycopy(this.f36145f, length2 - i12, bArr, i10, min);
        this.f36152m -= min;
        return min;
    }

    public d0(int i10) {
        this(i10, 8000);
    }

    public d0(int i10, int i11) {
        super(true);
        this.f36144e = i11;
        byte[] bArr = new byte[i10];
        this.f36145f = bArr;
        this.f36146g = new DatagramPacket(bArr, 0, i10);
    }
}
