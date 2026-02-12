package rc;

import java.nio.ByteBuffer;
import mc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f extends rc.a {

    /* renamed from: e  reason: collision with root package name */
    public final c f46229e;

    /* renamed from: i  reason: collision with root package name */
    public ByteBuffer f46230i;

    /* renamed from: o  reason: collision with root package name */
    public boolean f46231o;

    /* renamed from: p  reason: collision with root package name */
    public long f46232p;

    /* renamed from: q  reason: collision with root package name */
    public ByteBuffer f46233q;

    /* renamed from: r  reason: collision with root package name */
    private final int f46234r;

    /* renamed from: s  reason: collision with root package name */
    private final int f46235s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends IllegalStateException {

        /* renamed from: d  reason: collision with root package name */
        public final int f46236d;

        /* renamed from: e  reason: collision with root package name */
        public final int f46237e;

        public a(int i10, int i11) {
            super("Buffer too small (" + i10 + " < " + i11 + ")");
            this.f46236d = i10;
            this.f46237e = i11;
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
        int i11 = this.f46234r;
        if (i11 == 1) {
            return ByteBuffer.allocate(i10);
        }
        if (i11 == 2) {
            return ByteBuffer.allocateDirect(i10);
        }
        ByteBuffer byteBuffer = this.f46230i;
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

    @Override // rc.a
    public void h() {
        super.h();
        ByteBuffer byteBuffer = this.f46230i;
        if (byteBuffer != null) {
            byteBuffer.clear();
        }
        ByteBuffer byteBuffer2 = this.f46233q;
        if (byteBuffer2 != null) {
            byteBuffer2.clear();
        }
        this.f46231o = false;
    }

    public void u(int i10) {
        int i11 = i10 + this.f46235s;
        ByteBuffer byteBuffer = this.f46230i;
        if (byteBuffer == null) {
            this.f46230i = t(i11);
            return;
        }
        int capacity = byteBuffer.capacity();
        int position = byteBuffer.position();
        int i12 = i11 + position;
        if (capacity >= i12) {
            this.f46230i = byteBuffer;
            return;
        }
        ByteBuffer t10 = t(i12);
        t10.order(byteBuffer.order());
        if (position > 0) {
            byteBuffer.flip();
            t10.put(byteBuffer);
        }
        this.f46230i = t10;
    }

    public final void v() {
        ByteBuffer byteBuffer = this.f46230i;
        if (byteBuffer != null) {
            byteBuffer.flip();
        }
        ByteBuffer byteBuffer2 = this.f46233q;
        if (byteBuffer2 != null) {
            byteBuffer2.flip();
        }
    }

    public final boolean w() {
        return k(1073741824);
    }

    public void y(int i10) {
        ByteBuffer byteBuffer = this.f46233q;
        if (byteBuffer != null && byteBuffer.capacity() >= i10) {
            this.f46233q.clear();
        } else {
            this.f46233q = ByteBuffer.allocate(i10);
        }
    }

    public f(int i10, int i11) {
        this.f46229e = new c();
        this.f46234r = i10;
        this.f46235s = i11;
    }
}
