package gt;

import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f extends t {

    /* renamed from: b  reason: collision with root package name */
    private final SerialDescriptor f25256b;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public f(KSerializer element) {
        super(element);
        Intrinsics.checkNotNullParameter(element, "element");
        this.f25256b = new e(element.getDescriptor());
    }

    @Override // gt.s, kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f25256b;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: q */
    public ArrayList a() {
        return new ArrayList();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: r */
    public int b(ArrayList arrayList) {
        Intrinsics.checkNotNullParameter(arrayList, "<this>");
        return arrayList.size();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: s */
    public void c(ArrayList arrayList, int i10) {
        Intrinsics.checkNotNullParameter(arrayList, "<this>");
        arrayList.ensureCapacity(i10);
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
    public ArrayList k(List list) {
        ArrayList arrayList;
        Intrinsics.checkNotNullParameter(list, "<this>");
        if (list instanceof ArrayList) {
            arrayList = (ArrayList) list;
        } else {
            arrayList = null;
        }
        if (arrayList == null) {
            return new ArrayList(list);
        }
        return arrayList;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: v */
    public List l(ArrayList arrayList) {
        Intrinsics.checkNotNullParameter(arrayList, "<this>");
        return arrayList;
    }
}
