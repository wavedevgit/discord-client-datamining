package dt;

import java.util.LinkedHashSet;
import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class w0 extends t {

    /* renamed from: b  reason: collision with root package name */
    private final SerialDescriptor f21028b;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public w0(KSerializer eSerializer) {
        super(eSerializer);
        Intrinsics.checkNotNullParameter(eSerializer, "eSerializer");
        this.f21028b = new v0(eSerializer.getDescriptor());
    }

    @Override // dt.s, kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f21028b;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.a
    /* renamed from: q */
    public LinkedHashSet a() {
        return new LinkedHashSet();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.a
    /* renamed from: r */
    public int b(LinkedHashSet linkedHashSet) {
        Intrinsics.checkNotNullParameter(linkedHashSet, "<this>");
        return linkedHashSet.size();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.a
    /* renamed from: s */
    public void c(LinkedHashSet linkedHashSet, int i10) {
        Intrinsics.checkNotNullParameter(linkedHashSet, "<this>");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.s
    /* renamed from: t */
    public void n(LinkedHashSet linkedHashSet, int i10, Object obj) {
        Intrinsics.checkNotNullParameter(linkedHashSet, "<this>");
        linkedHashSet.add(obj);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.a
    /* renamed from: u */
    public LinkedHashSet k(Set set) {
        LinkedHashSet linkedHashSet;
        Intrinsics.checkNotNullParameter(set, "<this>");
        if (set instanceof LinkedHashSet) {
            linkedHashSet = (LinkedHashSet) set;
        } else {
            linkedHashSet = null;
        }
        if (linkedHashSet == null) {
            return new LinkedHashSet(set);
        }
        return linkedHashSet;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.a
    /* renamed from: v */
    public Set l(LinkedHashSet linkedHashSet) {
        Intrinsics.checkNotNullParameter(linkedHashSet, "<this>");
        return linkedHashSet;
    }
}
