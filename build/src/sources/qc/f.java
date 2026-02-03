package qc;

import java.nio.ByteBuffer;
import lc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f extends qc.a {

    /* renamed from: e  reason: collision with root package name */
    public final c f47346e;

    /* renamed from: i  reason: collision with root package name */
    public ByteBuffer f47347i;

    /* renamed from: o  reason: collision with root package name */
    public boolean f47348o;

    /* renamed from: p  reason: collision with root package name */
    public long f47349p;

    /* renamed from: q  reason: collision with root package name */
    public ByteBuffer f47350q;

    /* renamed from: r  reason: collision with root package name */
    private final int f47351r;

    /* renamed from: s  reason: collision with root package name */
    private final int f47352s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends IllegalStateException {

        /* renamed from: d  reason: collision with root package name */
        public final int f47353d;

        /* renamed from: e  reason: collision with root package name */
        public final int f47354e;

        public a(int i10, int i11) {
            super("Buffer too small (" + i10 + " < " + i11 + ")");
            this.f47353d = i10;
            this.f47354e = i11;
        }
    }

    static {
        u.a("goog.exo.decoder");
    }

    public f(int i10) {
        this(i10, 0);
    }

    private ByteBuffer t(int i10) {
        int capacity;
        int i11 = this.f47351r;
        if (i11 == 1) {
            return ByteBuffer.allocate(i10);
        }
        if (i11 == 2) {
            return ByteBuffer.allocateDirect(i10);
        }
        ByteBuffer byteBuffer = this.f47347i;
        if (byteBuffer == null) {
            capacity = 0;
        } else {
            capacity = byteBuffer.capacity();
        }
        throw new a(capacity, i10);
    }

    public static f x() {
        return new f(0);
    }

    @Override // qc.a
    public void h() {
        super.h();
        ByteBuffer byteBuffer = this.f47347i;
        if (byteBuffer != null) {
            byteBuffer.clear();
        }
        ByteBuffer byteBuffer2 = this.f47350q;
        if (byteBuffer2 != null) {
            byteBuffer2.clear();
        }
        this.f47348o = false;
    }

    public void u(int i10) {
        int i11 = i10 + this.f47352s;
        ByteBuffer byteBuffer = this.f47347i;
        if (byteBuffer == null) {
            this.f47347i = t(i11);
            return;
        }
        int capacity = byteBuffer.capacity();
        int position = byteBuffer.position();
        int i12 = i11 + position;
        if (capacity >= i12) {
            this.f47347i = byteBuffer;
            return;
        }
        ByteBuffer t10 = t(i12);
        t10.order(byteBuffer.order());
        if (position > 0) {
            byteBuffer.flip();
            t10.put(byteBuffer);
        }
        this.f47347i = t10;
    }

    public final void v() {
        ByteBuffer byteBuffer = this.f47347i;
        if (byteBuffer != null) {
            byteBuffer.flip();
        }
        ByteBuffer byteBuffer2 = this.f47350q;
        if (byteBuffer2 != null) {
            byteBuffer2.flip();
        }
    }

    public final boolean w() {
        return k(1073741824);
    }

    public void y(int i10) {
        ByteBuffer byteBuffer = this.f47350q;
        if (byteBuffer != null && byteBuffer.capacity() >= i10) {
            this.f47350q.clear();
        } else {
            this.f47350q = ByteBuffer.allocate(i10);
        }
    }

    public f(int i10, int i11) {
        this.f47346e = new c();
        this.f47351r = i10;
        this.f47352s = i11;
    }
}
