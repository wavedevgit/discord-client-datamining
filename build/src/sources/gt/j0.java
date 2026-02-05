package gt;

import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j0 extends d1 {

    /* renamed from: c  reason: collision with root package name */
    private final SerialDescriptor f25277c;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public j0(KSerializer kSerializer, KSerializer vSerializer) {
        super(kSerializer, vSerializer, null);
        Intrinsics.checkNotNullParameter(kSerializer, "kSerializer");
        Intrinsics.checkNotNullParameter(vSerializer, "vSerializer");
        this.f25277c = new i0(kSerializer.getDescriptor(), vSerializer.getDescriptor());
    }

    @Override // gt.d1, kotlinx.serialization.KSerializer, dt.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f25277c;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: q */
    public HashMap a() {
        return new HashMap();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: r */
    public int b(HashMap hashMap) {
        Intrinsics.checkNotNullParameter(hashMap, "<this>");
        return hashMap.size() * 2;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: s */
    public void c(HashMap hashMap, int i10) {
        Intrinsics.checkNotNullParameter(hashMap, "<this>");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: t */
    public Iterator d(Map map) {
        Intrinsics.checkNotNullParameter(map, "<this>");
        return map.entrySet().iterator();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: u */
    public int e(Map map) {
        Intrinsics.checkNotNullParameter(map, "<this>");
        return map.size();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: v */
    public HashMap k(Map map) {
        HashMap hashMap;
        Intrinsics.checkNotNullParameter(map, "<this>");
        if (map instanceof HashMap) {
            hashMap = (HashMap) map;
        } else {
            hashMap = null;
        }
        if (hashMap == null) {
            return new HashMap(map);
        }
        return hashMap;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // gt.a
    /* renamed from: w */
    public Map l(HashMap hashMap) {
        Intrinsics.checkNotNullParameter(hashMap, "<this>");
        return hashMap;
    }
}
