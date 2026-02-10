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
        public final String f22539a;

        /* renamed from: b  reason: collision with root package name */
        public final int f22540b;

        /* renamed from: c  reason: collision with root package name */
        public final byte[] f22541c;

        public a(String str, int i10, byte[] bArr) {
            this.f22539a = str;
            this.f22540b = i10;
            this.f22541c = bArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f22542a;

        /* renamed from: b  reason: collision with root package name */
        public final String f22543b;

        /* renamed from: c  reason: collision with root package name */
        public final List f22544c;

        /* renamed from: d  reason: collision with root package name */
        public final byte[] f22545d;

        public b(int i10, String str, List list, byte[] bArr) {
            List unmodifiableList;
            this.f22542a = i10;
            this.f22543b = str;
            if (list == null) {
                unmodifiableList = Collections.EMPTY_LIST;
            } else {
                unmodifiableList = Collections.unmodifiableList(list);
            }
            this.f22544c = unmodifiableList;
            this.f22545d = bArr;
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
        private final String f22546a;

        /* renamed from: b  reason: collision with root package name */
        private final int f22547b;

        /* renamed from: c  reason: collision with root package name */
        private final int f22548c;

        /* renamed from: d  reason: collision with root package name */
        private int f22549d;

        /* renamed from: e  reason: collision with root package name */
        private String f22550e;

        public d(int i10, int i11) {
            this(Integer.MIN_VALUE, i10, i11);
        }

        private void d() {
            if (this.f22549d != Integer.MIN_VALUE) {
                return;
            }
            throw new IllegalStateException("generateNewId() must be called before retrieving ids.");
        }

        public void a() {
            int i10;
            int i11 = this.f22549d;
            if (i11 == Integer.MIN_VALUE) {
                i10 = this.f22547b;
            } else {
                i10 = i11 + this.f22548c;
            }
            this.f22549d = i10;
            this.f22550e = this.f22546a + this.f22549d;
        }

        public String b() {
            d();
            return this.f22550e;
        }

        public int c() {
            d();
            return this.f22549d;
        }

        public d(int i10, int i11, int i12) {
            String str;
            if (i10 != Integer.MIN_VALUE) {
                str = i10 + "/";
            } else {
                str = "";
            }
            this.f22546a = str;
            this.f22547b = i11;
            this.f22548c = i12;
            this.f22549d = Integer.MIN_VALUE;
            this.f22550e = "";
        }
    }

    void a(oe.h0 h0Var, int i10);

    void b();

    void c(s0 s0Var, uc.m mVar, d dVar);
}
