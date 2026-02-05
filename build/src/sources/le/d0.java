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
    private final int f36703e;

    /* renamed from: f  reason: collision with root package name */
    private final byte[] f36704f;

    /* renamed from: g  reason: collision with root package name */
    private final DatagramPacket f36705g;

    /* renamed from: h  reason: collision with root package name */
    private Uri f36706h;

    /* renamed from: i  reason: collision with root package name */
    private DatagramSocket f36707i;

    /* renamed from: j  reason: collision with root package name */
    private MulticastSocket f36708j;

    /* renamed from: k  reason: collision with root package name */
    private InetAddress f36709k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f36710l;

    /* renamed from: m  reason: collision with root package name */
    private int f36711m;

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
        Uri uri = aVar.f13328a;
        this.f36706h = uri;
        String str = (String) ne.a.e(uri.getHost());
        int port = this.f36706h.getPort();
        q(aVar);
        try {
            this.f36709k = InetAddress.getByName(str);
            InetSocketAddress inetSocketAddress = new InetSocketAddress(this.f36709k, port);
            if (this.f36709k.isMulticastAddress()) {
                MulticastSocket multicastSocket = new MulticastSocket(inetSocketAddress);
                this.f36708j = multicastSocket;
                multicastSocket.joinGroup(this.f36709k);
                this.f36707i = this.f36708j;
            } else {
                this.f36707i = new DatagramSocket(inetSocketAddress);
            }
            this.f36707i.setSoTimeout(this.f36703e);
            this.f36710l = true;
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
        this.f36706h = null;
        MulticastSocket multicastSocket = this.f36708j;
        if (multicastSocket != null) {
            try {
                multicastSocket.leaveGroup((InetAddress) ne.a.e(this.f36709k));
            } catch (IOException unused) {
            }
            this.f36708j = null;
        }
        DatagramSocket datagramSocket = this.f36707i;
        if (datagramSocket != null) {
            datagramSocket.close();
            this.f36707i = null;
        }
        this.f36709k = null;
        this.f36711m = 0;
        if (this.f36710l) {
            this.f36710l = false;
            p();
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f36706h;
    }

    @Override // le.j
    public int read(byte[] bArr, int i10, int i11) {
        if (i11 == 0) {
            return 0;
        }
        if (this.f36711m == 0) {
            try {
                ((DatagramSocket) ne.a.e(this.f36707i)).receive(this.f36705g);
                int length = this.f36705g.getLength();
                this.f36711m = length;
                o(length);
            } catch (SocketTimeoutException e10) {
                throw new a(e10, 2002);
            } catch (IOException e11) {
                throw new a(e11, 2001);
            }
        }
        int length2 = this.f36705g.getLength();
        int i12 = this.f36711m;
        int min = Math.min(i12, i11);
        System.arraycopy(this.f36704f, length2 - i12, bArr, i10, min);
        this.f36711m -= min;
        return min;
    }

    public d0(int i10) {
        this(i10, 8000);
    }

    public d0(int i10, int i11) {
        super(true);
        this.f36703e = i11;
        byte[] bArr = new byte[i10];
        this.f36704f = bArr;
        this.f36705g = new DatagramPacket(bArr, 0, i10);
    }
}
