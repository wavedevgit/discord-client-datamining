package cd;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import oe.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class a {

    /* renamed from: a  reason: collision with root package name */
    public final int f8034a;

    /* renamed from: cd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class C0130a extends a {

        /* renamed from: b  reason: collision with root package name */
        public final long f8035b;

        /* renamed from: c  reason: collision with root package name */
        public final List f8036c;

        /* renamed from: d  reason: collision with root package name */
        public final List f8037d;

        public C0130a(int i10, long j10) {
            super(i10);
            this.f8035b = j10;
            this.f8036c = new ArrayList();
            this.f8037d = new ArrayList();
        }

        public void d(C0130a c0130a) {
            this.f8037d.add(c0130a);
        }

        public void e(b bVar) {
            this.f8036c.add(bVar);
        }

        public C0130a f(int i10) {
            int size = this.f8037d.size();
            for (int i11 = 0; i11 < size; i11++) {
                C0130a c0130a = (C0130a) this.f8037d.get(i11);
                if (c0130a.f8034a == i10) {
                    return c0130a;
                }
            }
            return null;
        }

        public b g(int i10) {
            int size = this.f8036c.size();
            for (int i11 = 0; i11 < size; i11++) {
                b bVar = (b) this.f8036c.get(i11);
                if (bVar.f8034a == i10) {
                    return bVar;
                }
            }
            return null;
        }

        @Override // cd.a
        public String toString() {
            return a.a(this.f8034a) + " leaves: " + Arrays.toString(this.f8036c.toArray()) + " containers: " + Arrays.toString(this.f8037d.toArray());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends a {

        /* renamed from: b  reason: collision with root package name */
        public final h0 f8038b;

        public b(int i10, h0 h0Var) {
            super(i10);
            this.f8038b = h0Var;
        }
    }

    public a(int i10) {
        this.f8034a = i10;
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
        return a(this.f8034a);
    }
}
