package dt;

import java.util.HashSet;
import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l0 extends t {

    /* renamed from: b  reason: collision with root package name */
    private final SerialDescriptor f20963b;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public l0(KSerializer eSerializer) {
        super(eSerializer);
        Intrinsics.checkNotNullParameter(eSerializer, "eSerializer");
        this.f20963b = new k0(eSerializer.getDescriptor());
    }

    @Override // dt.s, kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f20963b;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.a
    /* renamed from: q */
    public HashSet a() {
        return new HashSet();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.a
    /* renamed from: r */
    public int b(HashSet hashSet) {
        Intrinsics.checkNotNullParameter(hashSet, "<this>");
        return hashSet.size();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.a
    /* renamed from: s */
    public void c(HashSet hashSet, int i10) {
        Intrinsics.checkNotNullParameter(hashSet, "<this>");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.s
    /* renamed from: t */
    public void n(HashSet hashSet, int i10, Object obj) {
        Intrinsics.checkNotNullParameter(hashSet, "<this>");
        hashSet.add(obj);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.a
    /* renamed from: u */
    public HashSet k(Set set) {
        HashSet hashSet;
        Intrinsics.checkNotNullParameter(set, "<this>");
        if (set instanceof HashSet) {
            hashSet = (HashSet) set;
        } else {
            hashSet = null;
        }
        if (hashSet == null) {
            return new HashSet(set);
        }
        return hashSet;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.a
    /* renamed from: v */
    public Set l(HashSet hashSet) {
        Intrinsics.checkNotNullParameter(hashSet, "<this>");
        return hashSet;
    }
}
