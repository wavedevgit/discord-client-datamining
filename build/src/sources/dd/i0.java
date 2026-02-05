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
        public final String f20528a;

        /* renamed from: b  reason: collision with root package name */
        public final int f20529b;

        /* renamed from: c  reason: collision with root package name */
        public final byte[] f20530c;

        public a(String str, int i10, byte[] bArr) {
            this.f20528a = str;
            this.f20529b = i10;
            this.f20530c = bArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f20531a;

        /* renamed from: b  reason: collision with root package name */
        public final String f20532b;

        /* renamed from: c  reason: collision with root package name */
        public final List f20533c;

        /* renamed from: d  reason: collision with root package name */
        public final byte[] f20534d;

        public b(int i10, String str, List list, byte[] bArr) {
            List unmodifiableList;
            this.f20531a = i10;
            this.f20532b = str;
            if (list == null) {
                unmodifiableList = Collections.EMPTY_LIST;
            } else {
                unmodifiableList = Collections.unmodifiableList(list);
            }
            this.f20533c = unmodifiableList;
            this.f20534d = bArr;
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
        private final String f20535a;

        /* renamed from: b  reason: collision with root package name */
        private final int f20536b;

        /* renamed from: c  reason: collision with root package name */
        private final int f20537c;

        /* renamed from: d  reason: collision with root package name */
        private int f20538d;

        /* renamed from: e  reason: collision with root package name */
        private String f20539e;

        public d(int i10, int i11) {
            this(Integer.MIN_VALUE, i10, i11);
        }

        private void d() {
            if (this.f20538d != Integer.MIN_VALUE) {
                return;
            }
            throw new IllegalStateException("generateNewId() must be called before retrieving ids.");
        }

        public void a() {
            int i10;
            int i11 = this.f20538d;
            if (i11 == Integer.MIN_VALUE) {
                i10 = this.f20536b;
            } else {
                i10 = i11 + this.f20537c;
            }
            this.f20538d = i10;
            this.f20539e = this.f20535a + this.f20538d;
        }

        public String b() {
            d();
            return this.f20539e;
        }

        public int c() {
            d();
            return this.f20538d;
        }

        public d(int i10, int i11, int i12) {
            String str;
            if (i10 != Integer.MIN_VALUE) {
                str = i10 + "/";
            } else {
                str = "";
            }
            this.f20535a = str;
            this.f20536b = i11;
            this.f20537c = i12;
            this.f20538d = Integer.MIN_VALUE;
            this.f20539e = "";
        }
    }

    void a(s0 s0Var, tc.m mVar, d dVar);

    void b(ne.h0 h0Var, int i10);

    void c();
}
