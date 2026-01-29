package qc;

import java.nio.ByteBuffer;
import lc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f extends qc.a {

    /* renamed from: e  reason: collision with root package name */
    public final c f47075e;

    /* renamed from: i  reason: collision with root package name */
    public ByteBuffer f47076i;

    /* renamed from: o  reason: collision with root package name */
    public boolean f47077o;

    /* renamed from: p  reason: collision with root package name */
    public long f47078p;

    /* renamed from: q  reason: collision with root package name */
    public ByteBuffer f47079q;

    /* renamed from: r  reason: collision with root package name */
    private final int f47080r;

    /* renamed from: s  reason: collision with root package name */
    private final int f47081s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends IllegalStateException {

        /* renamed from: d  reason: collision with root package name */
        public final int f47082d;

        /* renamed from: e  reason: collision with root package name */
        public final int f47083e;

        public a(int i10, int i11) {
            super("Buffer too small (" + i10 + " < " + i11 + ")");
            this.f47082d = i10;
            this.f47083e = i11;
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
        int i11 = this.f47080r;
        if (i11 == 1) {
            return ByteBuffer.allocate(i10);
        }
        if (i11 == 2) {
            return ByteBuffer.allocateDirect(i10);
        }
        ByteBuffer byteBuffer = this.f47076i;
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
        ByteBuffer byteBuffer = this.f47076i;
        if (byteBuffer != null) {
            byteBuffer.clear();
        }
        ByteBuffer byteBuffer2 = this.f47079q;
        if (byteBuffer2 != null) {
            byteBuffer2.clear();
        }
        this.f47077o = false;
    }

    public void u(int i10) {
        int i11 = i10 + this.f47081s;
        ByteBuffer byteBuffer = this.f47076i;
        if (byteBuffer == null) {
            this.f47076i = t(i11);
            return;
        }
        int capacity = byteBuffer.capacity();
        int position = byteBuffer.position();
        int i12 = i11 + position;
        if (capacity >= i12) {
            this.f47076i = byteBuffer;
            return;
        }
        ByteBuffer t10 = t(i12);
        t10.order(byteBuffer.order());
        if (position > 0) {
            byteBuffer.flip();
            t10.put(byteBuffer);
        }
        this.f47076i = t10;
    }

    public final void v() {
        ByteBuffer byteBuffer = this.f47076i;
        if (byteBuffer != null) {
            byteBuffer.flip();
        }
        ByteBuffer byteBuffer2 = this.f47079q;
        if (byteBuffer2 != null) {
            byteBuffer2.flip();
        }
    }

    public final boolean w() {
        return j(1073741824);
    }

    public void y(int i10) {
        ByteBuffer byteBuffer = this.f47079q;
        if (byteBuffer != null && byteBuffer.capacity() >= i10) {
            this.f47079q.clear();
        } else {
            this.f47079q = ByteBuffer.allocate(i10);
        }
    }

    public f(int i10, int i11) {
        this.f47075e = new c();
        this.f47080r = i10;
        this.f47081s = i11;
    }
}
