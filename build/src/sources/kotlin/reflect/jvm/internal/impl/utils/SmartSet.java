package kotlin.reflect.jvm.internal.impl.utils;

import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;
import java.util.NoSuchElementException;
import java.util.Set;
import kotlin.collections.g;
import kotlin.collections.i;
import kotlin.collections.x0;
import kotlin.jvm.internal.ArrayIteratorKt;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.jvm.internal.TypeIntrinsics;
import kotlin.jvm.internal.markers.KMutableIterator;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nSmartSet.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SmartSet.kt\norg/jetbrains/kotlin/utils/SmartSet\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,110:1\n1#2:111\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class SmartSet<T> extends g {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: d  reason: collision with root package name */
    private Object f35290d;

    /* renamed from: e  reason: collision with root package name */
    private int f35291e;

    @SourceDebugExtension({"SMAP\nSmartSet.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SmartSet.kt\norg/jetbrains/kotlin/utils/SmartSet$Companion\n+ 2 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,110:1\n1#2:111\n*E\n"})
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        @NotNull
        public final <T> SmartSet<T> create() {
            return new SmartSet<>(null);
        }

        private Companion() {
        }

        @NotNull
        public final <T> SmartSet<T> create(@NotNull Collection<? extends T> set) {
            Intrinsics.checkNotNullParameter(set, "set");
            SmartSet<T> smartSet = new SmartSet<>(null);
            smartSet.addAll(set);
            return smartSet;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class a implements Iterator, KMutableIterator {

        /* renamed from: d  reason: collision with root package name */
        private final Iterator f35292d;

        public a(Object[] array) {
            Intrinsics.checkNotNullParameter(array, "array");
            this.f35292d = ArrayIteratorKt.iterator(array);
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public Void remove() {
            throw new UnsupportedOperationException();
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            return this.f35292d.hasNext();
        }

        @Override // java.util.Iterator
        public Object next() {
            return this.f35292d.next();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    private static final class b implements Iterator, KMutableIterator {

        /* renamed from: d  reason: collision with root package name */
        private final Object f35293d;

        /* renamed from: e  reason: collision with root package name */
        private boolean f35294e = true;

        public b(Object obj) {
            this.f35293d = obj;
        }

        @Override // java.util.Iterator
        /* renamed from: a */
        public Void remove() {
            throw new UnsupportedOperationException();
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            return this.f35294e;
        }

        @Override // java.util.Iterator
        public Object next() {
            if (this.f35294e) {
                this.f35294e = false;
                return this.f35293d;
            }
            throw new NoSuchElementException();
        }
    }

    public /* synthetic */ SmartSet(DefaultConstructorMarker defaultConstructorMarker) {
        this();
    }

    @NotNull
    public static final <T> SmartSet<T> create() {
        return Companion.create();
    }

    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Type inference failed for: r0v10, types: [java.util.AbstractCollection, java.util.LinkedHashSet] */
    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public boolean add(T t10) {
        Object[] objArr;
        if (size() == 0) {
            this.f35290d = t10;
        } else if (size() == 1) {
            if (Intrinsics.areEqual(this.f35290d, t10)) {
                return false;
            }
            this.f35290d = new Object[]{this.f35290d, t10};
        } else if (size() < 5) {
            Object obj = this.f35290d;
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.Array<T of org.jetbrains.kotlin.utils.SmartSet>");
            Object[] objArr2 = (Object[]) obj;
            if (i.N(objArr2, t10)) {
                return false;
            }
            if (size() == 4) {
                ?? f10 = x0.f(Arrays.copyOf(objArr2, objArr2.length));
                f10.add(t10);
                objArr = f10;
            } else {
                Object[] copyOf = Arrays.copyOf(objArr2, size() + 1);
                Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
                copyOf[copyOf.length - 1] = t10;
                objArr = copyOf;
            }
            this.f35290d = objArr;
        } else {
            Object obj2 = this.f35290d;
            Intrinsics.checkNotNull(obj2, "null cannot be cast to non-null type kotlin.collections.MutableSet<T of org.jetbrains.kotlin.utils.SmartSet>");
            if (!TypeIntrinsics.asMutableSet(obj2).add(t10)) {
                return false;
            }
        }
        setSize(size() + 1);
        return true;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public void clear() {
        this.f35290d = null;
        setSize(0);
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Set
    public boolean contains(Object obj) {
        if (size() == 0) {
            return false;
        }
        if (size() == 1) {
            return Intrinsics.areEqual(this.f35290d, obj);
        }
        if (size() < 5) {
            Object obj2 = this.f35290d;
            Intrinsics.checkNotNull(obj2, "null cannot be cast to non-null type kotlin.Array<T of org.jetbrains.kotlin.utils.SmartSet>");
            return i.N((Object[]) obj2, obj);
        }
        Object obj3 = this.f35290d;
        Intrinsics.checkNotNull(obj3, "null cannot be cast to non-null type kotlin.collections.Set<T of org.jetbrains.kotlin.utils.SmartSet>");
        return ((Set) obj3).contains(obj);
    }

    @Override // kotlin.collections.g
    public int getSize() {
        return this.f35291e;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable, java.util.Set
    @NotNull
    public Iterator<T> iterator() {
        if (size() == 0) {
            return Collections.EMPTY_SET.iterator();
        }
        if (size() == 1) {
            return new b(this.f35290d);
        }
        if (size() < 5) {
            Object obj = this.f35290d;
            Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.Array<T of org.jetbrains.kotlin.utils.SmartSet>");
            return new a((Object[]) obj);
        }
        Object obj2 = this.f35290d;
        Intrinsics.checkNotNull(obj2, "null cannot be cast to non-null type kotlin.collections.MutableSet<T of org.jetbrains.kotlin.utils.SmartSet>");
        return TypeIntrinsics.asMutableSet(obj2).iterator();
    }

    public void setSize(int i10) {
        this.f35291e = i10;
    }

    private SmartSet() {
    }
}
