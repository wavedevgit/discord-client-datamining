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
    private final int f36096e;

    /* renamed from: f  reason: collision with root package name */
    private final byte[] f36097f;

    /* renamed from: g  reason: collision with root package name */
    private final DatagramPacket f36098g;

    /* renamed from: h  reason: collision with root package name */
    private Uri f36099h;

    /* renamed from: i  reason: collision with root package name */
    private DatagramSocket f36100i;

    /* renamed from: j  reason: collision with root package name */
    private MulticastSocket f36101j;

    /* renamed from: k  reason: collision with root package name */
    private InetAddress f36102k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f36103l;

    /* renamed from: m  reason: collision with root package name */
    private int f36104m;

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
        this.f36099h = uri;
        String str = (String) ne.a.e(uri.getHost());
        int port = this.f36099h.getPort();
        q(aVar);
        try {
            this.f36102k = InetAddress.getByName(str);
            InetSocketAddress inetSocketAddress = new InetSocketAddress(this.f36102k, port);
            if (this.f36102k.isMulticastAddress()) {
                MulticastSocket multicastSocket = new MulticastSocket(inetSocketAddress);
                this.f36101j = multicastSocket;
                multicastSocket.joinGroup(this.f36102k);
                this.f36100i = this.f36101j;
            } else {
                this.f36100i = new DatagramSocket(inetSocketAddress);
            }
            this.f36100i.setSoTimeout(this.f36096e);
            this.f36103l = true;
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
        this.f36099h = null;
        MulticastSocket multicastSocket = this.f36101j;
        if (multicastSocket != null) {
            try {
                multicastSocket.leaveGroup((InetAddress) ne.a.e(this.f36102k));
            } catch (IOException unused) {
            }
            this.f36101j = null;
        }
        DatagramSocket datagramSocket = this.f36100i;
        if (datagramSocket != null) {
            datagramSocket.close();
            this.f36100i = null;
        }
        this.f36102k = null;
        this.f36104m = 0;
        if (this.f36103l) {
            this.f36103l = false;
            p();
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f36099h;
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        if (i11 == 0) {
            return 0;
        }
        if (this.f36104m == 0) {
            try {
                ((DatagramSocket) ne.a.e(this.f36100i)).receive(this.f36098g);
                int length = this.f36098g.getLength();
                this.f36104m = length;
                o(length);
            } catch (SocketTimeoutException e10) {
                throw new a(e10, 2002);
            } catch (IOException e11) {
                throw new a(e11, 2001);
            }
        }
        int length2 = this.f36098g.getLength();
        int i12 = this.f36104m;
        int min = Math.min(i12, i11);
        System.arraycopy(this.f36097f, length2 - i12, bArr, i10, min);
        this.f36104m -= min;
        return min;
    }

    public d0(int i10) {
        this(i10, 8000);
    }

    public d0(int i10, int i11) {
        super(true);
        this.f36096e = i11;
        byte[] bArr = new byte[i10];
        this.f36097f = bArr;
        this.f36098g = new DatagramPacket(bArr, 0, i10);
    }
}
