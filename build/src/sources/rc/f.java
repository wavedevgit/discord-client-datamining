package rc;

import java.nio.ByteBuffer;
import mc.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f extends rc.a {

    /* renamed from: e  reason: collision with root package name */
    public final c f46228e;

    /* renamed from: i  reason: collision with root package name */
    public ByteBuffer f46229i;

    /* renamed from: o  reason: collision with root package name */
    public boolean f46230o;

    /* renamed from: p  reason: collision with root package name */
    public long f46231p;

    /* renamed from: q  reason: collision with root package name */
    public ByteBuffer f46232q;

    /* renamed from: r  reason: collision with root package name */
    private final int f46233r;

    /* renamed from: s  reason: collision with root package name */
    private final int f46234s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends IllegalStateException {

        /* renamed from: d  reason: collision with root package name */
        public final int f46235d;

        /* renamed from: e  reason: collision with root package name */
        public final int f46236e;

        public a(int i10, int i11) {
            super("Buffer too small (" + i10 + " < " + i11 + ")");
            this.f46235d = i10;
            this.f46236e = i11;
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
        int i11 = this.f46233r;
        if (i11 == 1) {
            return ByteBuffer.allocate(i10);
        }
        if (i11 == 2) {
            return ByteBuffer.allocateDirect(i10);
        }
        ByteBuffer byteBuffer = this.f46229i;
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
        ByteBuffer byteBuffer = this.f46229i;
        if (byteBuffer != null) {
            byteBuffer.clear();
        }
        ByteBuffer byteBuffer2 = this.f46232q;
        if (byteBuffer2 != null) {
            byteBuffer2.clear();
        }
        this.f46230o = false;
    }

    public void u(int i10) {
        int i11 = i10 + this.f46234s;
        ByteBuffer byteBuffer = this.f46229i;
        if (byteBuffer == null) {
            this.f46229i = t(i11);
            return;
        }
        int capacity = byteBuffer.capacity();
        int position = byteBuffer.position();
        int i12 = i11 + position;
        if (capacity >= i12) {
            this.f46229i = byteBuffer;
            return;
        }
        ByteBuffer t10 = t(i12);
        t10.order(byteBuffer.order());
        if (position > 0) {
            byteBuffer.flip();
            t10.put(byteBuffer);
        }
        this.f46229i = t10;
    }

    public final void v() {
        ByteBuffer byteBuffer = this.f46229i;
        if (byteBuffer != null) {
            byteBuffer.flip();
        }
        ByteBuffer byteBuffer2 = this.f46232q;
        if (byteBuffer2 != null) {
            byteBuffer2.flip();
        }
    }

    public final boolean w() {
        return k(1073741824);
    }

    public void y(int i10) {
        ByteBuffer byteBuffer = this.f46232q;
        if (byteBuffer != null && byteBuffer.capacity() >= i10) {
            this.f46232q.clear();
        } else {
            this.f46232q = ByteBuffer.allocate(i10);
        }
    }

    public f(int i10, int i11) {
        this.f46228e = new c();
        this.f46233r = i10;
        this.f46234s = i11;
    }
}
