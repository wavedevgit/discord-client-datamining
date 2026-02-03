package dd;

import android.util.SparseArray;
import java.util.Collections;
import java.util.List;
import ne.s0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface i0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final String f20312a;

        /* renamed from: b  reason: collision with root package name */
        public final int f20313b;

        /* renamed from: c  reason: collision with root package name */
        public final byte[] f20314c;

        public a(String str, int i10, byte[] bArr) {
            this.f20312a = str;
            this.f20313b = i10;
            this.f20314c = bArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f20315a;

        /* renamed from: b  reason: collision with root package name */
        public final String f20316b;

        /* renamed from: c  reason: collision with root package name */
        public final List f20317c;

        /* renamed from: d  reason: collision with root package name */
        public final byte[] f20318d;

        public b(int i10, String str, List list, byte[] bArr) {
            List unmodifiableList;
            this.f20315a = i10;
            this.f20316b = str;
            if (list == null) {
                unmodifiableList = Collections.EMPTY_LIST;
            } else {
                unmodifiableList = Collections.unmodifiableList(list);
            }
            this.f20317c = unmodifiableList;
            this.f20318d = bArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface c {
        SparseArray a();

        i0 b(int i10, b bVar);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        private final String f20319a;

        /* renamed from: b  reason: collision with root package name */
        private final int f20320b;

        /* renamed from: c  reason: collision with root package name */
        private final int f20321c;

        /* renamed from: d  reason: collision with root package name */
        private int f20322d;

        /* renamed from: e  reason: collision with root package name */
        private String f20323e;

        public d(int i10, int i11) {
            this(Integer.MIN_VALUE, i10, i11);
        }

        private void d() {
            if (this.f20322d != Integer.MIN_VALUE) {
                return;
            }
            throw new IllegalStateException("generateNewId() must be called before retrieving ids.");
        }

        public void a() {
            int i10;
            int i11 = this.f20322d;
            if (i11 == Integer.MIN_VALUE) {
                i10 = this.f20320b;
            } else {
                i10 = i11 + this.f20321c;
            }
            this.f20322d = i10;
            this.f20323e = this.f20319a + this.f20322d;
        }

        public String b() {
            d();
            return this.f20323e;
        }

        public int c() {
            d();
            return this.f20322d;
        }

        public d(int i10, int i11, int i12) {
            String str;
            if (i10 != Integer.MIN_VALUE) {
                str = i10 + "/";
            } else {
                str = "";
            }
            this.f20319a = str;
            this.f20320b = i11;
            this.f20321c = i12;
            this.f20322d = Integer.MIN_VALUE;
            this.f20323e = "";
        }
    }

    void a(s0 s0Var, tc.m mVar, d dVar);

    void b(ne.h0 h0Var, int i10);

    void c();
}
