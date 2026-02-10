package sc;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import nc.t1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface b0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final byte[] f49599a;

        /* renamed from: b  reason: collision with root package name */
        private final String f49600b;

        /* renamed from: c  reason: collision with root package name */
        private final int f49601c;

        public a(byte[] bArr, String str, int i10) {
            this.f49599a = bArr;
            this.f49600b = str;
            this.f49601c = i10;
        }

        public byte[] a() {
            return this.f49599a;
        }

        public String b() {
            return this.f49600b;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        void a(b0 b0Var, byte[] bArr, int i10, int i11, byte[] bArr2);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface c {
        b0 a(UUID uuid);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        private final byte[] f49602a;

        /* renamed from: b  reason: collision with root package name */
        private final String f49603b;

        public d(byte[] bArr, String str) {
            this.f49602a = bArr;
            this.f49603b = str;
        }

        public byte[] a() {
            return this.f49602a;
        }

        public String b() {
            return this.f49603b;
        }
    }

    Map a(byte[] bArr);

    d b();

    byte[] c();

    void d(byte[] bArr, byte[] bArr2);

    void e(b bVar);

    void f(byte[] bArr);

    int g();

    rc.b h(byte[] bArr);

    boolean j(byte[] bArr, String str);

    void k(byte[] bArr);

    byte[] l(byte[] bArr, byte[] bArr2);

    a m(byte[] bArr, List list, int i10, HashMap hashMap);

    void release();

    default void i(byte[] bArr, t1 t1Var) {
    }
}
