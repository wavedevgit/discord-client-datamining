package kotlinx.serialization.descriptors;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Set;
import jt.k;
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
import kt.b2;
import kt.l;
import kt.u1;
import rr.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements SerialDescriptor, l {

    /* renamed from: a  reason: collision with root package name */
    private final String f34853a;

    /* renamed from: b  reason: collision with root package name */
    private final k f34854b;

    /* renamed from: c  reason: collision with root package name */
    private final int f34855c;

    /* renamed from: d  reason: collision with root package name */
    private final List f34856d;

    /* renamed from: e  reason: collision with root package name */
    private final Set f34857e;

    /* renamed from: f  reason: collision with root package name */
    private final String[] f34858f;

    /* renamed from: g  reason: collision with root package name */
    private final SerialDescriptor[] f34859g;

    /* renamed from: h  reason: collision with root package name */
    private final List[] f34860h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean[] f34861i;

    /* renamed from: j  reason: collision with root package name */
    private final Map f34862j;

    /* renamed from: k  reason: collision with root package name */
    private final SerialDescriptor[] f34863k;

    /* renamed from: l  reason: collision with root package name */
    private final Lazy f34864l;

    public a(String serialName, k kind, int i10, List typeParameters, jt.a builder) {
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        Intrinsics.checkNotNullParameter(kind, "kind");
        Intrinsics.checkNotNullParameter(typeParameters, "typeParameters");
        Intrinsics.checkNotNullParameter(builder, "builder");
        this.f34853a = serialName;
        this.f34854b = kind;
        this.f34855c = i10;
        this.f34856d = builder.c();
        this.f34857e = CollectionsKt.f1(builder.f());
        String[] strArr = (String[]) builder.f().toArray(new String[0]);
        this.f34858f = strArr;
        this.f34859g = u1.b(builder.e());
        this.f34860h = (List[]) builder.d().toArray(new List[0]);
        this.f34861i = CollectionsKt.c1(builder.g());
        Iterable<IndexedValue> g12 = i.g1(strArr);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(g12, 10));
        for (IndexedValue indexedValue : g12) {
            arrayList.add(v.a(indexedValue.d(), Integer.valueOf(indexedValue.c())));
        }
        this.f34862j = o0.u(arrayList);
        this.f34863k = u1.b(typeParameters);
        this.f34864l = rr.l.a(new Function0() { // from class: jt.f
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
        return b2.a(aVar, aVar.f34863k);
    }

    private final int m() {
        return ((Number) this.f34864l.getValue()).intValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CharSequence n(a aVar, int i10) {
        return aVar.e(i10) + ": " + aVar.g(i10).h();
    }

    @Override // kt.l
    public Set a() {
        return this.f34857e;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean b() {
        return SerialDescriptor.a.c(this);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int c(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        Integer num = (Integer) this.f34862j.get(name);
        if (num != null) {
            return num.intValue();
        }
        return -3;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int d() {
        return this.f34855c;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String e(int i10) {
        return this.f34858f[i10];
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        SerialDescriptor serialDescriptor = (SerialDescriptor) obj;
        if (!Intrinsics.areEqual(h(), serialDescriptor.h()) || !Arrays.equals(this.f34863k, ((a) obj).f34863k) || d() != serialDescriptor.d()) {
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
        return this.f34860h[i10];
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public SerialDescriptor g(int i10) {
        return this.f34859g[i10];
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List getAnnotations() {
        return this.f34856d;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public k getKind() {
        return this.f34854b;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String h() {
        return this.f34853a;
    }

    public int hashCode() {
        return m();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean i(int i10) {
        return this.f34861i[i10];
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean isInline() {
        return SerialDescriptor.a.b(this);
    }

    public String toString() {
        IntRange u10 = d.u(0, d());
        return CollectionsKt.x0(u10, ", ", h() + '(', ")", 0, null, new Function1() { // from class: jt.g
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                CharSequence n10;
                n10 = kotlinx.serialization.descriptors.a.n(kotlinx.serialization.descriptors.a.this, ((Integer) obj).intValue());
                return n10;
            }
        }, 24, null);
    }
}
