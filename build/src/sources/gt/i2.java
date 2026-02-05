package gt;

import java.util.ArrayList;
import java.util.Iterator;
import kotlin.jvm.internal.ArrayIteratorKt;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class i2 extends s {

    /* renamed from: b  reason: collision with root package name */
    private final KClass f25273b;

    /* renamed from: c  reason: collision with root package name */
    private final SerialDescriptor f25274c;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i2(KClass kClass, KSerializer eSerializer) {
        super(eSerializer, null);
        Intrinsics.checkNotNullParameter(kClass, "kClass");
        Intrinsics.checkNotNullParameter(eSerializer, "eSerializer");
        this.f25273b = kClass;
        this.f25274c = new d(eSerializer.getDescriptor());
    }

    @Override // gt.s, kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f25274c;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: o */
    public ArrayList a() {
        return new ArrayList();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: p */
    public int b(ArrayList arrayList) {
        Intrinsics.checkNotNullParameter(arrayList, "<this>");
        return arrayList.size();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: q */
    public void c(ArrayList arrayList, int i10) {
        Intrinsics.checkNotNullParameter(arrayList, "<this>");
        arrayList.ensureCapacity(i10);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: r */
    public Iterator d(Object[] objArr) {
        Intrinsics.checkNotNullParameter(objArr, "<this>");
        return ArrayIteratorKt.iterator(objArr);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: s */
    public int e(Object[] objArr) {
        Intrinsics.checkNotNullParameter(objArr, "<this>");
        return objArr.length;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.s
    /* renamed from: t */
    public void n(ArrayList arrayList, int i10, Object obj) {
        Intrinsics.checkNotNullParameter(arrayList, "<this>");
        arrayList.add(i10, obj);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: u */
    public ArrayList k(Object[] objArr) {
        Intrinsics.checkNotNullParameter(objArr, "<this>");
        return new ArrayList(kotlin.collections.i.e(objArr));
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: v */
    public Object[] l(ArrayList arrayList) {
        Intrinsics.checkNotNullParameter(arrayList, "<this>");
        return t1.r(arrayList, this.f25273b);
    }
}
