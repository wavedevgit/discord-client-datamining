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
        private final byte[] f48484a;

        /* renamed from: b  reason: collision with root package name */
        private final String f48485b;

        /* renamed from: c  reason: collision with root package name */
        private final int f48486c;

        public a(byte[] bArr, String str, int i10) {
            this.f48484a = bArr;
            this.f48485b = str;
            this.f48486c = i10;
        }

        public byte[] a() {
            return this.f48484a;
        }

        public String b() {
            return this.f48485b;
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
        private final byte[] f48487a;

        /* renamed from: b  reason: collision with root package name */
        private final String f48488b;

        public d(byte[] bArr, String str) {
            this.f48487a = bArr;
            this.f48488b = str;
        }

        public byte[] a() {
            return this.f48487a;
        }

        public String b() {
            return this.f48488b;
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
