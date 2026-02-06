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
        public final String f20483a;

        /* renamed from: b  reason: collision with root package name */
        public final int f20484b;

        /* renamed from: c  reason: collision with root package name */
        public final byte[] f20485c;

        public a(String str, int i10, byte[] bArr) {
            this.f20483a = str;
            this.f20484b = i10;
            this.f20485c = bArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f20486a;

        /* renamed from: b  reason: collision with root package name */
        public final String f20487b;

        /* renamed from: c  reason: collision with root package name */
        public final List f20488c;

        /* renamed from: d  reason: collision with root package name */
        public final byte[] f20489d;

        public b(int i10, String str, List list, byte[] bArr) {
            List unmodifiableList;
            this.f20486a = i10;
            this.f20487b = str;
            if (list == null) {
                unmodifiableList = Collections.EMPTY_LIST;
            } else {
                unmodifiableList = Collections.unmodifiableList(list);
            }
            this.f20488c = unmodifiableList;
            this.f20489d = bArr;
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
        private final String f20490a;

        /* renamed from: b  reason: collision with root package name */
        private final int f20491b;

        /* renamed from: c  reason: collision with root package name */
        private final int f20492c;

        /* renamed from: d  reason: collision with root package name */
        private int f20493d;

        /* renamed from: e  reason: collision with root package name */
        private String f20494e;

        public d(int i10, int i11) {
            this(Integer.MIN_VALUE, i10, i11);
        }

        private void d() {
            if (this.f20493d != Integer.MIN_VALUE) {
                return;
            }
            throw new IllegalStateException("generateNewId() must be called before retrieving ids.");
        }

        public void a() {
            int i10;
            int i11 = this.f20493d;
            if (i11 == Integer.MIN_VALUE) {
                i10 = this.f20491b;
            } else {
                i10 = i11 + this.f20492c;
            }
            this.f20493d = i10;
            this.f20494e = this.f20490a + this.f20493d;
        }

        public String b() {
            d();
            return this.f20494e;
        }

        public int c() {
            d();
            return this.f20493d;
        }

        public d(int i10, int i11, int i12) {
            String str;
            if (i10 != Integer.MIN_VALUE) {
                str = i10 + "/";
            } else {
                str = "";
            }
            this.f20490a = str;
            this.f20491b = i11;
            this.f20492c = i12;
            this.f20493d = Integer.MIN_VALUE;
            this.f20494e = "";
        }
    }

    void a(s0 s0Var, tc.m mVar, d dVar);

    void b(ne.h0 h0Var, int i10);

    void c();
}
