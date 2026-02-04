package r8;

import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b implements b2.d {

    /* renamed from: a  reason: collision with root package name */
    public static final b f48580a = new b();

    /* renamed from: b  reason: collision with root package name */
    private static int f48581b = 16384;

    /* renamed from: c  reason: collision with root package name */
    private static final ThreadLocal f48582c = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends ThreadLocal {
        a() {
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // java.lang.ThreadLocal
        /* renamed from: a */
        public ByteBuffer initialValue() {
            return ByteBuffer.allocate(b.f48581b);
        }
    }

    public static int c() {
        return f48581b;
    }

    @Override // b2.d
    /* renamed from: b */
    public ByteBuffer acquire() {
        return (ByteBuffer) f48582c.get();
    }

    @Override // b2.d
    /* renamed from: d */
    public boolean release(ByteBuffer byteBuffer) {
        return true;
    }
}
