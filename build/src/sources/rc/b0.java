package rc;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import mc.t1;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface b0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private final byte[] f48108a;

        /* renamed from: b  reason: collision with root package name */
        private final String f48109b;

        /* renamed from: c  reason: collision with root package name */
        private final int f48110c;

        public a(byte[] bArr, String str, int i10) {
            this.f48108a = bArr;
            this.f48109b = str;
            this.f48110c = i10;
        }

        public byte[] a() {
            return this.f48108a;
        }

        public String b() {
            return this.f48109b;
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
        private final byte[] f48111a;

        /* renamed from: b  reason: collision with root package name */
        private final String f48112b;

        public d(byte[] bArr, String str) {
            this.f48111a = bArr;
            this.f48112b = str;
        }

        public byte[] a() {
            return this.f48111a;
        }

        public String b() {
            return this.f48112b;
        }
    }

    Map a(byte[] bArr);

    d b();

    byte[] c();

    void d(byte[] bArr, byte[] bArr2);

    void e(byte[] bArr);

    void f(b bVar);

    int g();

    qc.b h(byte[] bArr);

    boolean i(byte[] bArr, String str);

    void j(byte[] bArr);

    byte[] k(byte[] bArr, byte[] bArr2);

    a l(byte[] bArr, List list, int i10, HashMap hashMap);

    void release();

    default void m(byte[] bArr, t1 t1Var) {
    }
}
