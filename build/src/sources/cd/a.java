package cd;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import oe.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class a {

    /* renamed from: a  reason: collision with root package name */
    public final int f7353a;

    /* renamed from: cd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class C0147a extends a {

        /* renamed from: b  reason: collision with root package name */
        public final long f7354b;

        /* renamed from: c  reason: collision with root package name */
        public final List f7355c;

        /* renamed from: d  reason: collision with root package name */
        public final List f7356d;

        public C0147a(int i10, long j10) {
            super(i10);
            this.f7354b = j10;
            this.f7355c = new ArrayList();
            this.f7356d = new ArrayList();
        }

        public void d(C0147a c0147a) {
            this.f7356d.add(c0147a);
        }

        public void e(b bVar) {
            this.f7355c.add(bVar);
        }

        public C0147a f(int i10) {
            int size = this.f7356d.size();
            for (int i11 = 0; i11 < size; i11++) {
                C0147a c0147a = (C0147a) this.f7356d.get(i11);
                if (c0147a.f7353a == i10) {
                    return c0147a;
                }
            }
            return null;
        }

        public b g(int i10) {
            int size = this.f7355c.size();
            for (int i11 = 0; i11 < size; i11++) {
                b bVar = (b) this.f7355c.get(i11);
                if (bVar.f7353a == i10) {
                    return bVar;
                }
            }
            return null;
        }

        @Override // cd.a
        public String toString() {
            return a.a(this.f7353a) + " leaves: " + Arrays.toString(this.f7355c.toArray()) + " containers: " + Arrays.toString(this.f7356d.toArray());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends a {

        /* renamed from: b  reason: collision with root package name */
        public final h0 f7357b;

        public b(int i10, h0 h0Var) {
            super(i10);
            this.f7357b = h0Var;
        }
    }

    public a(int i10) {
        this.f7353a = i10;
    }

    public static String a(int i10) {
        return "" + ((char) ((i10 >> 24) & SetSpanOperation.SPAN_MAX_PRIORITY)) + ((char) ((i10 >> 16) & SetSpanOperation.SPAN_MAX_PRIORITY)) + ((char) ((i10 >> 8) & SetSpanOperation.SPAN_MAX_PRIORITY)) + ((char) (i10 & SetSpanOperation.SPAN_MAX_PRIORITY));
    }

    public static int b(int i10) {
        return i10 & 16777215;
    }

    public static int c(int i10) {
        return (i10 >> 24) & SetSpanOperation.SPAN_MAX_PRIORITY;
    }

    public String toString() {
        return a(this.f7353a);
    }
}
