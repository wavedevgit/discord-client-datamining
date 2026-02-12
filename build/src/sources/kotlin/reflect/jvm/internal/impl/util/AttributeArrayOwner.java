package kotlin.reflect.jvm.internal.impl.util;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.Map;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
@SourceDebugExtension({"SMAP\nAttributeArrayOwner.kt\nKotlin\n*S Kotlin\n*F\n+ 1 AttributeArrayOwner.kt\norg/jetbrains/kotlin/util/AttributeArrayOwner\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,103:1\n1573#2:104\n1604#2,3:105\n295#2,2:108\n1607#2:110\n*S KotlinDebug\n*F\n+ 1 AttributeArrayOwner.kt\norg/jetbrains/kotlin/util/AttributeArrayOwner\n*L\n76#1:104\n76#1:105,3\n77#1:108,2\n76#1:110\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class AttributeArrayOwner<K, T> extends AbstractArrayMapOwner<K, T> {

    /* renamed from: d  reason: collision with root package name */
    private ArrayMap f34760d;

    protected AttributeArrayOwner(ArrayMap arrayMap) {
        Intrinsics.checkNotNullParameter(arrayMap, "arrayMap");
        this.f34760d = arrayMap;
    }

    private final String f(ArrayMap arrayMap, int i10, String str) {
        T t10;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Race condition happened, the size of ArrayMap is " + i10 + " but it isn't an `" + str + '`');
        sb2.append('\n');
        StringBuilder sb3 = new StringBuilder();
        sb3.append("Type: ");
        sb3.append(arrayMap.getClass());
        sb2.append(sb3.toString());
        sb2.append('\n');
        StringBuilder sb4 = new StringBuilder();
        Map<String, Integer> allValuesThreadUnsafeForRendering = c().allValuesThreadUnsafeForRendering();
        sb4.append("[");
        sb4.append('\n');
        ArrayList arrayList = new ArrayList(CollectionsKt.w(arrayMap, 10));
        int i11 = 0;
        for (T t11 : arrayMap) {
            int i12 = i11 + 1;
            if (i11 < 0) {
                CollectionsKt.v();
            }
            Iterator<T> it = allValuesThreadUnsafeForRendering.entrySet().iterator();
            while (true) {
                if (it.hasNext()) {
                    t10 = it.next();
                    if (((Number) ((Map.Entry) t10).getValue()).intValue() == i11) {
                        break;
                    }
                } else {
                    t10 = null;
                    break;
                }
            }
            sb4.append("  " + ((Map.Entry) t10) + '[' + i11 + "]: " + t11);
            sb4.append('\n');
            arrayList.add(sb4);
            i11 = i12;
        }
        sb4.append("]");
        sb4.append('\n');
        String sb5 = sb4.toString();
        sb2.append("Content: " + sb5);
        sb2.append('\n');
        return sb2.toString();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // kotlin.reflect.jvm.internal.impl.util.AbstractArrayMapOwner
    public final ArrayMap b() {
        return this.f34760d;
    }

    /* JADX WARN: Multi-variable type inference failed */
    @Override // kotlin.reflect.jvm.internal.impl.util.AbstractArrayMapOwner
    protected final void d(String keyQualifiedName, Object value) {
        Intrinsics.checkNotNullParameter(keyQualifiedName, "keyQualifiedName");
        Intrinsics.checkNotNullParameter(value, "value");
        int id2 = c().getId(keyQualifiedName);
        int size = this.f34760d.getSize();
        if (size != 0) {
            if (size == 1) {
                ArrayMap arrayMap = this.f34760d;
                try {
                    Intrinsics.checkNotNull(arrayMap, "null cannot be cast to non-null type org.jetbrains.kotlin.util.OneElementArrayMap<T of org.jetbrains.kotlin.util.AttributeArrayOwner>");
                    OneElementArrayMap oneElementArrayMap = (OneElementArrayMap) arrayMap;
                    if (oneElementArrayMap.getIndex() == id2) {
                        this.f34760d = new OneElementArrayMap(value, id2);
                        return;
                    }
                    ArrayMapImpl arrayMapImpl = new ArrayMapImpl();
                    arrayMapImpl.set(oneElementArrayMap.getIndex(), oneElementArrayMap.getValue());
                    this.f34760d = arrayMapImpl;
                } catch (ClassCastException e10) {
                    throw new IllegalStateException(f(arrayMap, 1, "OneElementArrayMap"), e10);
                }
            }
            this.f34760d.set(id2, value);
            return;
        }
        ArrayMap arrayMap2 = this.f34760d;
        if (arrayMap2 instanceof EmptyArrayMap) {
            this.f34760d = new OneElementArrayMap(value, id2);
            return;
        }
        throw new IllegalStateException(f(arrayMap2, 0, "EmptyArrayMap"));
    }

    /* JADX WARN: Illegal instructions before constructor call */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public AttributeArrayOwner() {
        /*
            r2 = this;
            kotlin.reflect.jvm.internal.impl.util.EmptyArrayMap r0 = kotlin.reflect.jvm.internal.impl.util.EmptyArrayMap.INSTANCE
            java.lang.String r1 = "null cannot be cast to non-null type org.jetbrains.kotlin.util.ArrayMap<T of org.jetbrains.kotlin.util.AttributeArrayOwner>"
            kotlin.jvm.internal.Intrinsics.checkNotNull(r0, r1)
            r2.<init>(r0)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: kotlin.reflect.jvm.internal.impl.util.AttributeArrayOwner.<init>():void");
    }
}
