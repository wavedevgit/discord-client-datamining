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
        public final String f21453a;

        /* renamed from: b  reason: collision with root package name */
        public final int f21454b;

        /* renamed from: c  reason: collision with root package name */
        public final byte[] f21455c;

        public a(String str, int i10, byte[] bArr) {
            this.f21453a = str;
            this.f21454b = i10;
            this.f21455c = bArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f21456a;

        /* renamed from: b  reason: collision with root package name */
        public final String f21457b;

        /* renamed from: c  reason: collision with root package name */
        public final List f21458c;

        /* renamed from: d  reason: collision with root package name */
        public final byte[] f21459d;

        public b(int i10, String str, List list, byte[] bArr) {
            List unmodifiableList;
            this.f21456a = i10;
            this.f21457b = str;
            if (list == null) {
                unmodifiableList = Collections.EMPTY_LIST;
            } else {
                unmodifiableList = Collections.unmodifiableList(list);
            }
            this.f21458c = unmodifiableList;
            this.f21459d = bArr;
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
        private final String f21460a;

        /* renamed from: b  reason: collision with root package name */
        private final int f21461b;

        /* renamed from: c  reason: collision with root package name */
        private final int f21462c;

        /* renamed from: d  reason: collision with root package name */
        private int f21463d;

        /* renamed from: e  reason: collision with root package name */
        private String f21464e;

        public d(int i10, int i11) {
            this(Integer.MIN_VALUE, i10, i11);
        }

        private void d() {
            if (this.f21463d != Integer.MIN_VALUE) {
                return;
            }
            throw new IllegalStateException("generateNewId() must be called before retrieving ids.");
        }

        public void a() {
            int i10;
            int i11 = this.f21463d;
            if (i11 == Integer.MIN_VALUE) {
                i10 = this.f21461b;
            } else {
                i10 = i11 + this.f21462c;
            }
            this.f21463d = i10;
            this.f21464e = this.f21460a + this.f21463d;
        }

        public String b() {
            d();
            return this.f21464e;
        }

        public int c() {
            d();
            return this.f21463d;
        }

        public d(int i10, int i11, int i12) {
            String str;
            if (i10 != Integer.MIN_VALUE) {
                str = i10 + "/";
            } else {
                str = "";
            }
            this.f21460a = str;
            this.f21461b = i11;
            this.f21462c = i12;
            this.f21463d = Integer.MIN_VALUE;
            this.f21464e = "";
        }
    }

    void a(s0 s0Var, tc.m mVar, d dVar);

    void b(ne.h0 h0Var, int i10);

    void c();
}
