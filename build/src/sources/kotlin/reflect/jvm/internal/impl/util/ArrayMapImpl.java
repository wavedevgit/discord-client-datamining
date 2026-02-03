package kotlin.reflect.jvm.internal.impl.util;

import java.util.Arrays;
import java.util.Iterator;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import org.jetbrains.annotations.NotNull;
@SourceDebugExtension({"SMAP\nArrayMap.kt\nKotlin\n*S Kotlin\n*F\n+ 1 ArrayMap.kt\norg/jetbrains/kotlin/util/ArrayMapImpl\n+ 2 _Arrays.kt\nkotlin/collections/ArraysKt___ArraysKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n*L\n1#1,145:1\n11408#2,11:146\n13537#2,2:157\n13539#2:160\n11419#2:161\n1#3:159\n*S KotlinDebug\n*F\n+ 1 ArrayMap.kt\norg/jetbrains/kotlin/util/ArrayMapImpl\n*L\n140#1:146,11\n140#1:157,2\n140#1:160\n140#1:161\n140#1:159\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class ArrayMapImpl<T> extends ArrayMap<T> {
    @NotNull
    public static final Companion Companion = new Companion(null);

    /* renamed from: d  reason: collision with root package name */
    private Object[] f35842d;

    /* renamed from: e  reason: collision with root package name */
    private int f35843e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class Companion {
        public /* synthetic */ Companion(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private Companion() {
        }
    }

    private ArrayMapImpl(Object[] objArr, int i10) {
        super(null);
        this.f35842d = objArr;
        this.f35843e = i10;
    }

    private final void b(int i10) {
        Object[] objArr = this.f35842d;
        if (objArr.length > i10) {
            return;
        }
        int length = objArr.length;
        do {
            length *= 2;
        } while (length <= i10);
        Object[] copyOf = Arrays.copyOf(this.f35842d, length);
        Intrinsics.checkNotNullExpressionValue(copyOf, "copyOf(...)");
        this.f35842d = copyOf;
    }

    @Override // kotlin.reflect.jvm.internal.impl.util.ArrayMap
    public T get(int i10) {
        return (T) kotlin.collections.i.c0(this.f35842d, i10);
    }

    @Override // kotlin.reflect.jvm.internal.impl.util.ArrayMap
    public int getSize() {
        return this.f35843e;
    }

    @Override // kotlin.reflect.jvm.internal.impl.util.ArrayMap, java.lang.Iterable
    @NotNull
    public Iterator<T> iterator() {
        return new kotlin.collections.c() { // from class: kotlin.reflect.jvm.internal.impl.util.ArrayMapImpl$iterator$1

            /* renamed from: i  reason: collision with root package name */
            private int f35844i = -1;

            @Override // kotlin.collections.c
            protected void a() {
                Object[] objArr;
                Object[] objArr2;
                Object[] objArr3;
                Object[] objArr4;
                do {
                    int i10 = this.f35844i + 1;
                    this.f35844i = i10;
                    objArr = ArrayMapImpl.this.f35842d;
                    if (i10 >= objArr.length) {
                        break;
                    }
                    objArr4 = ArrayMapImpl.this.f35842d;
                } while (objArr4[this.f35844i] == null);
                int i11 = this.f35844i;
                objArr2 = ArrayMapImpl.this.f35842d;
                if (i11 < objArr2.length) {
                    objArr3 = ArrayMapImpl.this.f35842d;
                    Object obj = objArr3[this.f35844i];
                    Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type T of org.jetbrains.kotlin.util.ArrayMapImpl");
                    c(obj);
                    return;
                }
                b();
            }
        };
    }

    @Override // kotlin.reflect.jvm.internal.impl.util.ArrayMap
    public void set(int i10, @NotNull T value) {
        Intrinsics.checkNotNullParameter(value, "value");
        b(i10);
        if (this.f35842d[i10] == null) {
            this.f35843e = getSize() + 1;
        }
        this.f35842d[i10] = value;
    }

    public ArrayMapImpl() {
        this(new Object[20], 0);
    }
}
