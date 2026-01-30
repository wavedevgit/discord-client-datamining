package kotlinx.serialization.descriptors;

import at.b2;
import at.l;
import at.u1;
import ir.v;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Set;
import kotlin.Lazy;
import kotlin.collections.CollectionsKt;
import kotlin.collections.IndexedValue;
import kotlin.collections.i;
import kotlin.collections.o0;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.ranges.IntRange;
import kotlin.ranges.d;
import kotlinx.serialization.descriptors.SerialDescriptor;
import zs.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements SerialDescriptor, l {

    /* renamed from: a  reason: collision with root package name */
    private final String f36386a;

    /* renamed from: b  reason: collision with root package name */
    private final k f36387b;

    /* renamed from: c  reason: collision with root package name */
    private final int f36388c;

    /* renamed from: d  reason: collision with root package name */
    private final List f36389d;

    /* renamed from: e  reason: collision with root package name */
    private final Set f36390e;

    /* renamed from: f  reason: collision with root package name */
    private final String[] f36391f;

    /* renamed from: g  reason: collision with root package name */
    private final SerialDescriptor[] f36392g;

    /* renamed from: h  reason: collision with root package name */
    private final List[] f36393h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean[] f36394i;

    /* renamed from: j  reason: collision with root package name */
    private final Map f36395j;

    /* renamed from: k  reason: collision with root package name */
    private final SerialDescriptor[] f36396k;

    /* renamed from: l  reason: collision with root package name */
    private final Lazy f36397l;

    public a(String serialName, k kind, int i10, List typeParameters, zs.a builder) {
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        Intrinsics.checkNotNullParameter(kind, "kind");
        Intrinsics.checkNotNullParameter(typeParameters, "typeParameters");
        Intrinsics.checkNotNullParameter(builder, "builder");
        this.f36386a = serialName;
        this.f36387b = kind;
        this.f36388c = i10;
        this.f36389d = builder.c();
        this.f36390e = CollectionsKt.f1(builder.f());
        String[] strArr = (String[]) builder.f().toArray(new String[0]);
        this.f36391f = strArr;
        this.f36392g = u1.b(builder.e());
        this.f36393h = (List[]) builder.d().toArray(new List[0]);
        this.f36394i = CollectionsKt.c1(builder.g());
        Iterable<IndexedValue> g12 = i.g1(strArr);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(g12, 10));
        for (IndexedValue indexedValue : g12) {
            arrayList.add(v.a(indexedValue.d(), Integer.valueOf(indexedValue.c())));
        }
        this.f36395j = o0.u(arrayList);
        this.f36396k = u1.b(typeParameters);
        this.f36397l = ir.l.b(new Function0() { // from class: zs.f
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                int l10;
                l10 = kotlinx.serialization.descriptors.a.l(kotlinx.serialization.descriptors.a.this);
                return Integer.valueOf(l10);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final int l(a aVar) {
        return b2.a(aVar, aVar.f36396k);
    }

    private final int m() {
        return ((Number) this.f36397l.getValue()).intValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CharSequence n(a aVar, int i10) {
        return aVar.e(i10) + ": " + aVar.g(i10).h();
    }

    @Override // at.l
    public Set a() {
        return this.f36390e;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean b() {
        return SerialDescriptor.a.c(this);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int c(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        Integer num = (Integer) this.f36395j.get(name);
        if (num != null) {
            return num.intValue();
        }
        return -3;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int d() {
        return this.f36388c;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String e(int i10) {
        return this.f36391f[i10];
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        SerialDescriptor serialDescriptor = (SerialDescriptor) obj;
        if (!Intrinsics.areEqual(h(), serialDescriptor.h()) || !Arrays.equals(this.f36396k, ((a) obj).f36396k) || d() != serialDescriptor.d()) {
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
        return this.f36393h[i10];
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public SerialDescriptor g(int i10) {
        return this.f36392g[i10];
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List getAnnotations() {
        return this.f36389d;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public k getKind() {
        return this.f36387b;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String h() {
        return this.f36386a;
    }

    public int hashCode() {
        return m();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean i(int i10) {
        return this.f36394i[i10];
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean isInline() {
        return SerialDescriptor.a.b(this);
    }

    public String toString() {
        IntRange u10 = d.u(0, d());
        return CollectionsKt.x0(u10, ", ", h() + '(', ")", 0, null, new Function1() { // from class: zs.g
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                CharSequence n10;
                n10 = kotlinx.serialization.descriptors.a.n(kotlinx.serialization.descriptors.a.this, ((Integer) obj).intValue());
                return n10;
            }
        }, 24, null);
    }
}
