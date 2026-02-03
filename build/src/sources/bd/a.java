package bd;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class a {

    /* renamed from: a  reason: collision with root package name */
    public final int f6326a;

    /* renamed from: bd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class C0109a extends a {

        /* renamed from: b  reason: collision with root package name */
        public final long f6327b;

        /* renamed from: c  reason: collision with root package name */
        public final List f6328c;

        /* renamed from: d  reason: collision with root package name */
        public final List f6329d;

        public C0109a(int i10, long j10) {
            super(i10);
            this.f6327b = j10;
            this.f6328c = new ArrayList();
            this.f6329d = new ArrayList();
        }

        public void d(C0109a c0109a) {
            this.f6329d.add(c0109a);
        }

        public void e(b bVar) {
            this.f6328c.add(bVar);
        }

        public C0109a f(int i10) {
            int size = this.f6329d.size();
            for (int i11 = 0; i11 < size; i11++) {
                C0109a c0109a = (C0109a) this.f6329d.get(i11);
                if (c0109a.f6326a == i10) {
                    return c0109a;
                }
            }
            return null;
        }

        public b g(int i10) {
            int size = this.f6328c.size();
            for (int i11 = 0; i11 < size; i11++) {
                b bVar = (b) this.f6328c.get(i11);
                if (bVar.f6326a == i10) {
                    return bVar;
                }
            }
            return null;
        }

        @Override // bd.a
        public String toString() {
            return a.a(this.f6326a) + " leaves: " + Arrays.toString(this.f6328c.toArray()) + " containers: " + Arrays.toString(this.f6329d.toArray());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends a {

        /* renamed from: b  reason: collision with root package name */
        public final h0 f6330b;

        public b(int i10, h0 h0Var) {
            super(i10);
            this.f6330b = h0Var;
        }
    }

    public a(int i10) {
        this.f6326a = i10;
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
        return a(this.f6326a);
    }
}
