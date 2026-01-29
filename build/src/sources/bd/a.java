package bd;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import ne.h0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class a {

    /* renamed from: a  reason: collision with root package name */
    public final int f7275a;

    /* renamed from: bd.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class C0110a extends a {

        /* renamed from: b  reason: collision with root package name */
        public final long f7276b;

        /* renamed from: c  reason: collision with root package name */
        public final List f7277c;

        /* renamed from: d  reason: collision with root package name */
        public final List f7278d;

        public C0110a(int i10, long j10) {
            super(i10);
            this.f7276b = j10;
            this.f7277c = new ArrayList();
            this.f7278d = new ArrayList();
        }

        public void d(C0110a c0110a) {
            this.f7278d.add(c0110a);
        }

        public void e(b bVar) {
            this.f7277c.add(bVar);
        }

        public C0110a f(int i10) {
            int size = this.f7278d.size();
            for (int i11 = 0; i11 < size; i11++) {
                C0110a c0110a = (C0110a) this.f7278d.get(i11);
                if (c0110a.f7275a == i10) {
                    return c0110a;
                }
            }
            return null;
        }

        public b g(int i10) {
            int size = this.f7277c.size();
            for (int i11 = 0; i11 < size; i11++) {
                b bVar = (b) this.f7277c.get(i11);
                if (bVar.f7275a == i10) {
                    return bVar;
                }
            }
            return null;
        }

        @Override // bd.a
        public String toString() {
            return a.a(this.f7275a) + " leaves: " + Arrays.toString(this.f7277c.toArray()) + " containers: " + Arrays.toString(this.f7278d.toArray());
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    static final class b extends a {

        /* renamed from: b  reason: collision with root package name */
        public final h0 f7279b;

        public b(int i10, h0 h0Var) {
            super(i10);
            this.f7279b = h0Var;
        }
    }

    public a(int i10) {
        this.f7275a = i10;
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
        return a(this.f7275a);
    }
}
