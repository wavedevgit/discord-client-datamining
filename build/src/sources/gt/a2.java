package gt;

import ft.l;
import java.lang.annotation.Annotation;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.Lazy;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.IntRange;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a2 implements SerialDescriptor, l {

    /* renamed from: a */
    private final String f25215a;

    /* renamed from: b */
    private final h0 f25216b;

    /* renamed from: c */
    private final int f25217c;

    /* renamed from: d */
    private int f25218d;

    /* renamed from: e */
    private final String[] f25219e;

    /* renamed from: f */
    private final List[] f25220f;

    /* renamed from: g */
    private List f25221g;

    /* renamed from: h */
    private final boolean[] f25222h;

    /* renamed from: i */
    private Map f25223i;

    /* renamed from: j */
    private final Lazy f25224j;

    /* renamed from: k */
    private final Lazy f25225k;

    /* renamed from: l */
    private final Lazy f25226l;

    public a2(String serialName, h0 h0Var, int i10) {
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        this.f25215a = serialName;
        this.f25216b = h0Var;
        this.f25217c = i10;
        this.f25218d = -1;
        String[] strArr = new String[i10];
        for (int i11 = 0; i11 < i10; i11++) {
            strArr[i11] = "[UNINITIALIZED]";
        }
        this.f25219e = strArr;
        int i12 = this.f25217c;
        this.f25220f = new List[i12];
        this.f25222h = new boolean[i12];
        this.f25223i = kotlin.collections.o0.i();
        or.o oVar = or.o.f44232e;
        this.f25224j = or.l.b(oVar, new Function0() { // from class: gt.x1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                KSerializer[] r10;
                r10 = a2.r(a2.this);
                return r10;
            }
        });
        this.f25225k = or.l.b(oVar, new Function0() { // from class: gt.y1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SerialDescriptor[] y10;
                y10 = a2.y(a2.this);
                return y10;
            }
        });
        this.f25226l = or.l.b(oVar, new Function0() { // from class: gt.z1
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int n10;
                n10 = a2.n(a2.this);
                return Integer.valueOf(n10);
            }
        });
    }

    public static final int n(a2 a2Var) {
        return b2.a(a2Var, a2Var.t());
    }

    public static /* synthetic */ void p(a2 a2Var, String str, boolean z10, int i10, Object obj) {
        if (obj == null) {
            if ((i10 & 2) != 0) {
                z10 = false;
            }
            a2Var.o(str, z10);
            return;
        }
        throw new UnsupportedOperationException("Super calls with default arguments not supported in this target, function: addElement");
    }

    private final Map q() {
        HashMap hashMap = new HashMap();
        int length = this.f25219e.length;
        for (int i10 = 0; i10 < length; i10++) {
            hashMap.put(this.f25219e[i10], Integer.valueOf(i10));
        }
        return hashMap;
    }

    public static final KSerializer[] r(a2 a2Var) {
        KSerializer[] childSerializers;
        h0 h0Var = a2Var.f25216b;
        if (h0Var != null && (childSerializers = h0Var.childSerializers()) != null) {
            return childSerializers;
        }
        return c2.f25242a;
    }

    private final KSerializer[] s() {
        return (KSerializer[]) this.f25224j.getValue();
    }

    private final int u() {
        return ((Number) this.f25226l.getValue()).intValue();
    }

    public static final CharSequence x(a2 a2Var, int i10) {
        return a2Var.e(i10) + ": " + a2Var.g(i10).h();
    }

    public static final SerialDescriptor[] y(a2 a2Var) {
        ArrayList arrayList;
        KSerializer[] typeParametersSerializers;
        h0 h0Var = a2Var.f25216b;
        if (h0Var != null && (typeParametersSerializers = h0Var.typeParametersSerializers()) != null) {
            arrayList = new ArrayList(typeParametersSerializers.length);
            for (KSerializer kSerializer : typeParametersSerializers) {
                arrayList.add(kSerializer.getDescriptor());
            }
        } else {
            arrayList = null;
        }
        return u1.b(arrayList);
    }

    @Override // gt.l
    public Set a() {
        return this.f25223i.keySet();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean b() {
        return SerialDescriptor.a.c(this);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int c(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        Integer num = (Integer) this.f25223i.get(name);
        if (num != null) {
            return num.intValue();
        }
        return -3;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public final int d() {
        return this.f25217c;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String e(int i10) {
        return this.f25219e[i10];
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a2)) {
            return false;
        }
        SerialDescriptor serialDescriptor = (SerialDescriptor) obj;
        if (!Intrinsics.areEqual(h(), serialDescriptor.h()) || !Arrays.equals(t(), ((a2) obj).t()) || d() != serialDescriptor.d()) {
            return false;
        }
        int d10 = d();
        for (int i10 = 0; i10 < d10; i10++) {
            if (!Intrinsics.areEqual(g(i10).h(), serialDescriptor.g(i10).h()) || !Intrinsics.areEqual(g(i10).getKind(), serialDescriptor.g(i10).getKind())) {
                return false;
            }
        }
        return true;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List f(int i10) {
        List list = this.f25220f[i10];
        if (list == null) {
            return CollectionsKt.l();
        }
        return list;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public SerialDescriptor g(int i10) {
        return s()[i10].getDescriptor();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List getAnnotations() {
        List list = this.f25221g;
        if (list == null) {
            return CollectionsKt.l();
        }
        return list;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public ft.k getKind() {
        return l.a.f23494a;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String h() {
        return this.f25215a;
    }

    public int hashCode() {
        return u();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean i(int i10) {
        return this.f25222h[i10];
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean isInline() {
        return SerialDescriptor.a.b(this);
    }

    public final void o(String name, boolean z10) {
        Intrinsics.checkNotNullParameter(name, "name");
        String[] strArr = this.f25219e;
        int i10 = this.f25218d + 1;
        this.f25218d = i10;
        strArr[i10] = name;
        this.f25222h[i10] = z10;
        this.f25220f[i10] = null;
        if (i10 == this.f25217c - 1) {
            this.f25223i = q();
        }
    }

    public final SerialDescriptor[] t() {
        return (SerialDescriptor[]) this.f25225k.getValue();
    }

    public String toString() {
        IntRange u10 = kotlin.ranges.d.u(0, this.f25217c);
        return CollectionsKt.x0(u10, ", ", h() + '(', ")", 0, null, new Function1() { // from class: gt.w1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                CharSequence x10;
                x10 = a2.x(a2.this, ((Integer) obj).intValue());
                return x10;
            }
        }, 24, null);
    }

    public final void v(Annotation annotation) {
        Intrinsics.checkNotNullParameter(annotation, "annotation");
        List list = this.f25220f[this.f25218d];
        if (list == null) {
            list = new ArrayList(1);
            this.f25220f[this.f25218d] = list;
        }
        list.add(annotation);
    }

    public final void w(Annotation a10) {
        Intrinsics.checkNotNullParameter(a10, "a");
        if (this.f25221g == null) {
            this.f25221g = new ArrayList(1);
        }
        List list = this.f25221g;
        Intrinsics.checkNotNull(list);
        list.add(a10);
    }

    public /* synthetic */ a2(String str, h0 h0Var, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(str, (i11 & 2) != 0 ? null : h0Var, i10);
    }
}
