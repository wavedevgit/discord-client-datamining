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
        public final String f21877a;

        /* renamed from: b  reason: collision with root package name */
        public final int f21878b;

        /* renamed from: c  reason: collision with root package name */
        public final byte[] f21879c;

        public a(String str, int i10, byte[] bArr) {
            this.f21877a = str;
            this.f21878b = i10;
            this.f21879c = bArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f21880a;

        /* renamed from: b  reason: collision with root package name */
        public final String f21881b;

        /* renamed from: c  reason: collision with root package name */
        public final List f21882c;

        /* renamed from: d  reason: collision with root package name */
        public final byte[] f21883d;

        public b(int i10, String str, List list, byte[] bArr) {
            List unmodifiableList;
            this.f21880a = i10;
            this.f21881b = str;
            if (list == null) {
                unmodifiableList = Collections.EMPTY_LIST;
            } else {
                unmodifiableList = Collections.unmodifiableList(list);
            }
            this.f21882c = unmodifiableList;
            this.f21883d = bArr;
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
        private final String f21884a;

        /* renamed from: b  reason: collision with root package name */
        private final int f21885b;

        /* renamed from: c  reason: collision with root package name */
        private final int f21886c;

        /* renamed from: d  reason: collision with root package name */
        private int f21887d;

        /* renamed from: e  reason: collision with root package name */
        private String f21888e;

        public d(int i10, int i11) {
            this(Integer.MIN_VALUE, i10, i11);
        }

        private void d() {
            if (this.f21887d != Integer.MIN_VALUE) {
                return;
            }
            throw new IllegalStateException("generateNewId() must be called before retrieving ids.");
        }

        public void a() {
            int i10;
            int i11 = this.f21887d;
            if (i11 == Integer.MIN_VALUE) {
                i10 = this.f21885b;
            } else {
                i10 = i11 + this.f21886c;
            }
            this.f21887d = i10;
            this.f21888e = this.f21884a + this.f21887d;
        }

        public String b() {
            d();
            return this.f21888e;
        }

        public int c() {
            d();
            return this.f21887d;
        }

        public d(int i10, int i11, int i12) {
            String str;
            if (i10 != Integer.MIN_VALUE) {
                str = i10 + "/";
            } else {
                str = "";
            }
            this.f21884a = str;
            this.f21885b = i11;
            this.f21886c = i12;
            this.f21887d = Integer.MIN_VALUE;
            this.f21888e = "";
        }
    }

    void a(s0 s0Var, tc.m mVar, d dVar);

    void b(ne.h0 h0Var, int i10);

    void c();
}
