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
    private final int f36776e;

    /* renamed from: f  reason: collision with root package name */
    private final byte[] f36777f;

    /* renamed from: g  reason: collision with root package name */
    private final DatagramPacket f36778g;

    /* renamed from: h  reason: collision with root package name */
    private Uri f36779h;

    /* renamed from: i  reason: collision with root package name */
    private DatagramSocket f36780i;

    /* renamed from: j  reason: collision with root package name */
    private MulticastSocket f36781j;

    /* renamed from: k  reason: collision with root package name */
    private InetAddress f36782k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f36783l;

    /* renamed from: m  reason: collision with root package name */
    private int f36784m;

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
        Uri uri = aVar.f12943a;
        this.f36779h = uri;
        String str = (String) ne.a.e(uri.getHost());
        int port = this.f36779h.getPort();
        q(aVar);
        try {
            this.f36782k = InetAddress.getByName(str);
            InetSocketAddress inetSocketAddress = new InetSocketAddress(this.f36782k, port);
            if (this.f36782k.isMulticastAddress()) {
                MulticastSocket multicastSocket = new MulticastSocket(inetSocketAddress);
                this.f36781j = multicastSocket;
                multicastSocket.joinGroup(this.f36782k);
                this.f36780i = this.f36781j;
            } else {
                this.f36780i = new DatagramSocket(inetSocketAddress);
            }
            this.f36780i.setSoTimeout(this.f36776e);
            this.f36783l = true;
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
        this.f36779h = null;
        MulticastSocket multicastSocket = this.f36781j;
        if (multicastSocket != null) {
            try {
                multicastSocket.leaveGroup((InetAddress) ne.a.e(this.f36782k));
            } catch (IOException unused) {
            }
            this.f36781j = null;
        }
        DatagramSocket datagramSocket = this.f36780i;
        if (datagramSocket != null) {
            datagramSocket.close();
            this.f36780i = null;
        }
        this.f36782k = null;
        this.f36784m = 0;
        if (this.f36783l) {
            this.f36783l = false;
            p();
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f36779h;
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        if (i11 == 0) {
            return 0;
        }
        if (this.f36784m == 0) {
            try {
                ((DatagramSocket) ne.a.e(this.f36780i)).receive(this.f36778g);
                int length = this.f36778g.getLength();
                this.f36784m = length;
                o(length);
            } catch (SocketTimeoutException e10) {
                throw new a(e10, 2002);
            } catch (IOException e11) {
                throw new a(e11, 2001);
            }
        }
        int length2 = this.f36778g.getLength();
        int i12 = this.f36784m;
        int min = Math.min(i12, i11);
        System.arraycopy(this.f36777f, length2 - i12, bArr, i10, min);
        this.f36784m -= min;
        return min;
    }

    public d0(int i10) {
        this(i10, 8000);
    }

    public d0(int i10, int i11) {
        super(true);
        this.f36776e = i11;
        byte[] bArr = new byte[i10];
        this.f36777f = bArr;
        this.f36778g = new DatagramPacket(bArr, 0, i10);
    }
}
