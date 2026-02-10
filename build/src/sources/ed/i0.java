package ed;

import android.util.SparseArray;
import java.util.Collections;
import java.util.List;
import oe.s0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public interface i0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final String f21372a;

        /* renamed from: b  reason: collision with root package name */
        public final int f21373b;

        /* renamed from: c  reason: collision with root package name */
        public final byte[] f21374c;

        public a(String str, int i10, byte[] bArr) {
            this.f21372a = str;
            this.f21373b = i10;
            this.f21374c = bArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f21375a;

        /* renamed from: b  reason: collision with root package name */
        public final String f21376b;

        /* renamed from: c  reason: collision with root package name */
        public final List f21377c;

        /* renamed from: d  reason: collision with root package name */
        public final byte[] f21378d;

        public b(int i10, String str, List list, byte[] bArr) {
            List unmodifiableList;
            this.f21375a = i10;
            this.f21376b = str;
            if (list == null) {
                unmodifiableList = Collections.EMPTY_LIST;
            } else {
                unmodifiableList = Collections.unmodifiableList(list);
            }
            this.f21377c = unmodifiableList;
            this.f21378d = bArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface c {
        i0 a(int i10, b bVar);

        SparseArray b();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        private final String f21379a;

        /* renamed from: b  reason: collision with root package name */
        private final int f21380b;

        /* renamed from: c  reason: collision with root package name */
        private final int f21381c;

        /* renamed from: d  reason: collision with root package name */
        private int f21382d;

        /* renamed from: e  reason: collision with root package name */
        private String f21383e;

        public d(int i10, int i11) {
            this(Integer.MIN_VALUE, i10, i11);
        }

        private void d() {
            if (this.f21382d != Integer.MIN_VALUE) {
                return;
            }
            throw new IllegalStateException("generateNewId() must be called before retrieving ids.");
        }

        public void a() {
            int i10;
            int i11 = this.f21382d;
            if (i11 == Integer.MIN_VALUE) {
                i10 = this.f21380b;
            } else {
                i10 = i11 + this.f21381c;
            }
            this.f21382d = i10;
            this.f21383e = this.f21379a + this.f21382d;
        }

        public String b() {
            d();
            return this.f21383e;
        }

        public int c() {
            d();
            return this.f21382d;
        }

        public d(int i10, int i11, int i12) {
            String str;
            if (i10 != Integer.MIN_VALUE) {
                str = i10 + "/";
            } else {
                str = "";
            }
            this.f21379a = str;
            this.f21380b = i11;
            this.f21381c = i12;
            this.f21382d = Integer.MIN_VALUE;
            this.f21383e = "";
        }
    }

    void a(oe.h0 h0Var, int i10);

    void b();

    void c(s0 s0Var, uc.m mVar, d dVar);
}
