package bd;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class a {

    /* renamed from: a  reason: collision with root package name */
    public final int f6512a;

    /* renamed from: bd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class C0097a extends a {

        /* renamed from: b  reason: collision with root package name */
        public final long f6513b;

        /* renamed from: c  reason: collision with root package name */
        public final List f6514c;

        /* renamed from: d  reason: collision with root package name */
        public final List f6515d;

        public C0097a(int i10, long j10) {
            super(i10);
            this.f6513b = j10;
            this.f6514c = new ArrayList();
            this.f6515d = new ArrayList();
        }

        public void d(C0097a c0097a) {
            this.f6515d.add(c0097a);
        }

        public void e(b bVar) {
            this.f6514c.add(bVar);
        }

        public C0097a f(int i10) {
            int size = this.f6515d.size();
            for (int i11 = 0; i11 < size; i11++) {
                C0097a c0097a = (C0097a) this.f6515d.get(i11);
                if (c0097a.f6512a == i10) {
                    return c0097a;
                }
            }
            return null;
        }

        public b g(int i10) {
            int size = this.f6514c.size();
            for (int i11 = 0; i11 < size; i11++) {
                b bVar = (b) this.f6514c.get(i11);
                if (bVar.f6512a == i10) {
                    return bVar;
                }
            }
            return null;
        }

        @Override // bd.a
        public String toString() {
            return a.a(this.f6512a) + " leaves: " + Arrays.toString(this.f6514c.toArray()) + " containers: " + Arrays.toString(this.f6515d.toArray());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends a {

        /* renamed from: b  reason: collision with root package name */
        public final h0 f6516b;

        public b(int i10, h0 h0Var) {
            super(i10);
            this.f6516b = h0Var;
        }
    }

    public a(int i10) {
        this.f6512a = i10;
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
        return a(this.f6512a);
    }
}
