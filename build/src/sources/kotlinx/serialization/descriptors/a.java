package kotlinx.serialization.descriptors;

import ct.k;
import dt.b2;
import dt.l;
import dt.u1;
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
import lr.v;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements SerialDescriptor, l {

    /* renamed from: a  reason: collision with root package name */
    private final String f35552a;

    /* renamed from: b  reason: collision with root package name */
    private final k f35553b;

    /* renamed from: c  reason: collision with root package name */
    private final int f35554c;

    /* renamed from: d  reason: collision with root package name */
    private final List f35555d;

    /* renamed from: e  reason: collision with root package name */
    private final Set f35556e;

    /* renamed from: f  reason: collision with root package name */
    private final String[] f35557f;

    /* renamed from: g  reason: collision with root package name */
    private final SerialDescriptor[] f35558g;

    /* renamed from: h  reason: collision with root package name */
    private final List[] f35559h;

    /* renamed from: i  reason: collision with root package name */
    private final boolean[] f35560i;

    /* renamed from: j  reason: collision with root package name */
    private final Map f35561j;

    /* renamed from: k  reason: collision with root package name */
    private final SerialDescriptor[] f35562k;

    /* renamed from: l  reason: collision with root package name */
    private final Lazy f35563l;

    public a(String serialName, k kind, int i10, List typeParameters, ct.a builder) {
        Intrinsics.checkNotNullParameter(serialName, "serialName");
        Intrinsics.checkNotNullParameter(kind, "kind");
        Intrinsics.checkNotNullParameter(typeParameters, "typeParameters");
        Intrinsics.checkNotNullParameter(builder, "builder");
        this.f35552a = serialName;
        this.f35553b = kind;
        this.f35554c = i10;
        this.f35555d = builder.c();
        this.f35556e = CollectionsKt.f1(builder.f());
        String[] strArr = (String[]) builder.f().toArray(new String[0]);
        this.f35557f = strArr;
        this.f35558g = u1.b(builder.e());
        this.f35559h = (List[]) builder.d().toArray(new List[0]);
        this.f35560i = CollectionsKt.c1(builder.g());
        Iterable<IndexedValue> g12 = i.g1(strArr);
        ArrayList arrayList = new ArrayList(CollectionsKt.w(g12, 10));
        for (IndexedValue indexedValue : g12) {
            arrayList.add(v.a(indexedValue.d(), Integer.valueOf(indexedValue.c())));
        }
        this.f35561j = o0.u(arrayList);
        this.f35562k = u1.b(typeParameters);
        this.f35563l = lr.l.a(new Function0() { // from class: ct.f
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
        return b2.a(aVar, aVar.f35562k);
    }

    private final int m() {
        return ((Number) this.f35563l.getValue()).intValue();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final CharSequence n(a aVar, int i10) {
        return aVar.e(i10) + ": " + aVar.g(i10).h();
    }

    @Override // dt.l
    public Set a() {
        return this.f35556e;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean b() {
        return SerialDescriptor.a.c(this);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int c(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        Integer num = (Integer) this.f35561j.get(name);
        if (num != null) {
            return num.intValue();
        }
        return -3;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int d() {
        return this.f35554c;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String e(int i10) {
        return this.f35557f[i10];
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof a)) {
            return false;
        }
        SerialDescriptor serialDescriptor = (SerialDescriptor) obj;
        if (!Intrinsics.areEqual(h(), serialDescriptor.h()) || !Arrays.equals(this.f35562k, ((a) obj).f35562k) || d() != serialDescriptor.d()) {
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
        return this.f35559h[i10];
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public SerialDescriptor g(int i10) {
        return this.f35558g[i10];
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List getAnnotations() {
        return this.f35555d;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public k getKind() {
        return this.f35553b;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String h() {
        return this.f35552a;
    }

    public int hashCode() {
        return m();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean i(int i10) {
        return this.f35560i[i10];
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean isInline() {
        return SerialDescriptor.a.b(this);
    }

    public String toString() {
        IntRange u10 = d.u(0, d());
        return CollectionsKt.x0(u10, ", ", h() + '(', ")", 0, null, new Function1() { // from class: ct.g
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                CharSequence n10;
                n10 = kotlinx.serialization.descriptors.a.n(kotlinx.serialization.descriptors.a.this, ((Integer) obj).intValue());
                return n10;
            }
        }, 24, null);
    }
}
