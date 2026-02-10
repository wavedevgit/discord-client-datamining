package me;

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
    private final int f36974e;

    /* renamed from: f  reason: collision with root package name */
    private final byte[] f36975f;

    /* renamed from: g  reason: collision with root package name */
    private final DatagramPacket f36976g;

    /* renamed from: h  reason: collision with root package name */
    private Uri f36977h;

    /* renamed from: i  reason: collision with root package name */
    private DatagramSocket f36978i;

    /* renamed from: j  reason: collision with root package name */
    private MulticastSocket f36979j;

    /* renamed from: k  reason: collision with root package name */
    private InetAddress f36980k;

    /* renamed from: l  reason: collision with root package name */
    private boolean f36981l;

    /* renamed from: m  reason: collision with root package name */
    private int f36982m;

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
        Uri uri = aVar.f13405a;
        this.f36977h = uri;
        String str = (String) oe.a.e(uri.getHost());
        int port = this.f36977h.getPort();
        q(aVar);
        try {
            this.f36980k = InetAddress.getByName(str);
            InetSocketAddress inetSocketAddress = new InetSocketAddress(this.f36980k, port);
            if (this.f36980k.isMulticastAddress()) {
                MulticastSocket multicastSocket = new MulticastSocket(inetSocketAddress);
                this.f36979j = multicastSocket;
                multicastSocket.joinGroup(this.f36980k);
                this.f36978i = this.f36979j;
            } else {
                this.f36978i = new DatagramSocket(inetSocketAddress);
            }
            this.f36978i.setSoTimeout(this.f36974e);
            this.f36981l = true;
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
        this.f36977h = null;
        MulticastSocket multicastSocket = this.f36979j;
        if (multicastSocket != null) {
            try {
                multicastSocket.leaveGroup((InetAddress) oe.a.e(this.f36980k));
            } catch (IOException unused) {
            }
            this.f36979j = null;
        }
        DatagramSocket datagramSocket = this.f36978i;
        if (datagramSocket != null) {
            datagramSocket.close();
            this.f36978i = null;
        }
        this.f36980k = null;
        this.f36982m = 0;
        if (this.f36981l) {
            this.f36981l = false;
            p();
        }
    }

    @Override // com.google.android.exoplayer2.upstream.DataSource
    public Uri m() {
        return this.f36977h;
    }

    @Override // me.j
    public int read(byte[] bArr, int i10, int i11) {
        if (i11 == 0) {
            return 0;
        }
        if (this.f36982m == 0) {
            try {
                ((DatagramSocket) oe.a.e(this.f36978i)).receive(this.f36976g);
                int length = this.f36976g.getLength();
                this.f36982m = length;
                o(length);
            } catch (SocketTimeoutException e10) {
                throw new a(e10, 2002);
            } catch (IOException e11) {
                throw new a(e11, 2001);
            }
        }
        int length2 = this.f36976g.getLength();
        int i12 = this.f36982m;
        int min = Math.min(i12, i11);
        System.arraycopy(this.f36975f, length2 - i12, bArr, i10, min);
        this.f36982m -= min;
        return min;
    }

    public d0(int i10) {
        this(i10, 8000);
    }

    public d0(int i10, int i11) {
        super(true);
        this.f36974e = i11;
        byte[] bArr = new byte[i10];
        this.f36975f = bArr;
        this.f36976g = new DatagramPacket(bArr, 0, i10);
    }
}
