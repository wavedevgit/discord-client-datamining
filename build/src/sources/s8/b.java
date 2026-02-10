package s8;

import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b implements b2.d {

    /* renamed from: a  reason: collision with root package name */
    public static final b f47863a = new b();

    /* renamed from: b  reason: collision with root package name */
    private static int f47864b = 16384;

    /* renamed from: c  reason: collision with root package name */
    private static final ThreadLocal f47865c = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends ThreadLocal {
        a() {
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // java.lang.ThreadLocal
        /* renamed from: a */
        public ByteBuffer initialValue() {
            return ByteBuffer.allocate(b.f47864b);
        }
    }

    public static int c() {
        return f47864b;
    }

    @Override // b2.d
    /* renamed from: b */
    public ByteBuffer acquire() {
        return (ByteBuffer) f47865c.get();
    }

    @Override // b2.d
    /* renamed from: d */
    public boolean release(ByteBuffer byteBuffer) {
        return true;
    }
}
