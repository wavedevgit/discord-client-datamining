package s8;

import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b implements b2.d {

    /* renamed from: a  reason: collision with root package name */
    public static final b f49547a = new b();

    /* renamed from: b  reason: collision with root package name */
    private static int f49548b = 16384;

    /* renamed from: c  reason: collision with root package name */
    private static final ThreadLocal f49549c = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    class a extends ThreadLocal {
        a() {
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // java.lang.ThreadLocal
        /* renamed from: a */
        public ByteBuffer initialValue() {
            return ByteBuffer.allocate(b.f49548b);
        }
    }

    public static int c() {
        return f49548b;
    }

    @Override // b2.d
    /* renamed from: b */
    public ByteBuffer acquire() {
        return (ByteBuffer) f49549c.get();
    }

    @Override // b2.d
    /* renamed from: d */
    public boolean release(ByteBuffer byteBuffer) {
        return true;
    }
}
