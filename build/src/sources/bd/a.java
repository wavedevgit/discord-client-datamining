package bd;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class a {

    /* renamed from: a  reason: collision with root package name */
    public final int f6372a;

    /* renamed from: bd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class C0100a extends a {

        /* renamed from: b  reason: collision with root package name */
        public final long f6373b;

        /* renamed from: c  reason: collision with root package name */
        public final List f6374c;

        /* renamed from: d  reason: collision with root package name */
        public final List f6375d;

        public C0100a(int i10, long j10) {
            super(i10);
            this.f6373b = j10;
            this.f6374c = new ArrayList();
            this.f6375d = new ArrayList();
        }

        public void d(C0100a c0100a) {
            this.f6375d.add(c0100a);
        }

        public void e(b bVar) {
            this.f6374c.add(bVar);
        }

        public C0100a f(int i10) {
            int size = this.f6375d.size();
            for (int i11 = 0; i11 < size; i11++) {
                C0100a c0100a = (C0100a) this.f6375d.get(i11);
                if (c0100a.f6372a == i10) {
                    return c0100a;
                }
            }
            return null;
        }

        public b g(int i10) {
            int size = this.f6374c.size();
            for (int i11 = 0; i11 < size; i11++) {
                b bVar = (b) this.f6374c.get(i11);
                if (bVar.f6372a == i10) {
                    return bVar;
                }
            }
            return null;
        }

        @Override // bd.a
        public String toString() {
            return a.a(this.f6372a) + " leaves: " + Arrays.toString(this.f6374c.toArray()) + " containers: " + Arrays.toString(this.f6375d.toArray());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends a {

        /* renamed from: b  reason: collision with root package name */
        public final h0 f6376b;

        public b(int i10, h0 h0Var) {
            super(i10);
            this.f6376b = h0Var;
        }
    }

    public a(int i10) {
        this.f6372a = i10;
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
        return a(this.f6372a);
    }
}
