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
        public final String f22540a;

        /* renamed from: b  reason: collision with root package name */
        public final int f22541b;

        /* renamed from: c  reason: collision with root package name */
        public final byte[] f22542c;

        public a(String str, int i10, byte[] bArr) {
            this.f22540a = str;
            this.f22541b = i10;
            this.f22542c = bArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        public final int f22543a;

        /* renamed from: b  reason: collision with root package name */
        public final String f22544b;

        /* renamed from: c  reason: collision with root package name */
        public final List f22545c;

        /* renamed from: d  reason: collision with root package name */
        public final byte[] f22546d;

        public b(int i10, String str, List list, byte[] bArr) {
            List unmodifiableList;
            this.f22543a = i10;
            this.f22544b = str;
            if (list == null) {
                unmodifiableList = Collections.EMPTY_LIST;
            } else {
                unmodifiableList = Collections.unmodifiableList(list);
            }
            this.f22545c = unmodifiableList;
            this.f22546d = bArr;
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
        private final String f22547a;

        /* renamed from: b  reason: collision with root package name */
        private final int f22548b;

        /* renamed from: c  reason: collision with root package name */
        private final int f22549c;

        /* renamed from: d  reason: collision with root package name */
        private int f22550d;

        /* renamed from: e  reason: collision with root package name */
        private String f22551e;

        public d(int i10, int i11) {
            this(Integer.MIN_VALUE, i10, i11);
        }

        private void d() {
            if (this.f22550d != Integer.MIN_VALUE) {
                return;
            }
            throw new IllegalStateException("generateNewId() must be called before retrieving ids.");
        }

        public void a() {
            int i10;
            int i11 = this.f22550d;
            if (i11 == Integer.MIN_VALUE) {
                i10 = this.f22548b;
            } else {
                i10 = i11 + this.f22549c;
            }
            this.f22550d = i10;
            this.f22551e = this.f22547a + this.f22550d;
        }

        public String b() {
            d();
            return this.f22551e;
        }

        public int c() {
            d();
            return this.f22550d;
        }

        public d(int i10, int i11, int i12) {
            String str;
            if (i10 != Integer.MIN_VALUE) {
                str = i10 + "/";
            } else {
                str = "";
            }
            this.f22547a = str;
            this.f22548b = i11;
            this.f22549c = i12;
            this.f22550d = Integer.MIN_VALUE;
            this.f22551e = "";
        }
    }

    void a(oe.h0 h0Var, int i10);

    void b();

    void c(s0 s0Var, uc.m mVar, d dVar);
}
