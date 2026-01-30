package at;

import java.util.Map;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
import zs.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b1 extends s0 {

    /* renamed from: c  reason: collision with root package name */
    private final SerialDescriptor f6777c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Map.Entry, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final Object f6778d;

        /* renamed from: e  reason: collision with root package name */
        private final Object f6779e;

        public a(Object obj, Object obj2) {
            this.f6778d = obj;
            this.f6779e = obj2;
        }

        @Override // java.util.Map.Entry
        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (!(obj instanceof a)) {
                return false;
            }
            a aVar = (a) obj;
            if (Intrinsics.areEqual(this.f6778d, aVar.f6778d) && Intrinsics.areEqual(this.f6779e, aVar.f6779e)) {
                return true;
            }
            return false;
        }

        @Override // java.util.Map.Entry
        public Object getKey() {
            return this.f6778d;
        }

        @Override // java.util.Map.Entry
        public Object getValue() {
            return this.f6779e;
        }

        @Override // java.util.Map.Entry
        public int hashCode() {
            int hashCode;
            Object obj = this.f6778d;
            int i10 = 0;
            if (obj == null) {
                hashCode = 0;
            } else {
                hashCode = obj.hashCode();
            }
            int i11 = hashCode * 31;
            Object obj2 = this.f6779e;
            if (obj2 != null) {
                i10 = obj2.hashCode();
            }
            return i11 + i10;
        }

        @Override // java.util.Map.Entry
        public Object setValue(Object obj) {
            throw new UnsupportedOperationException("Operation is not supported for read-only collection");
        }

        public String toString() {
            return "MapEntry(key=" + this.f6778d + ", value=" + this.f6779e + ')';
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b1(final KSerializer keySerializer, final KSerializer valueSerializer) {
        super(keySerializer, valueSerializer, null);
        Intrinsics.checkNotNullParameter(keySerializer, "keySerializer");
        Intrinsics.checkNotNullParameter(valueSerializer, "valueSerializer");
        this.f6777c = zs.j.d("kotlin.collections.Map.Entry", l.c.f56120a, new SerialDescriptor[0], new Function1() { // from class: at.a1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit g10;
                g10 = b1.g(KSerializer.this, valueSerializer, (zs.a) obj);
                return g10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g(KSerializer kSerializer, KSerializer kSerializer2, zs.a buildSerialDescriptor) {
        Intrinsics.checkNotNullParameter(buildSerialDescriptor, "$this$buildSerialDescriptor");
        zs.a.b(buildSerialDescriptor, "key", kSerializer.getDescriptor(), null, false, 12, null);
        zs.a.b(buildSerialDescriptor, "value", kSerializer2.getDescriptor(), null, false, 12, null);
        return Unit.f33298a;
    }

    @Override // kotlinx.serialization.KSerializer, xs.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f6777c;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // at.s0
    /* renamed from: h */
    public Object a(Map.Entry entry) {
        Intrinsics.checkNotNullParameter(entry, "<this>");
        return entry.getKey();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // at.s0
    /* renamed from: i */
    public Object c(Map.Entry entry) {
        Intrinsics.checkNotNullParameter(entry, "<this>");
        return entry.getValue();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // at.s0
    /* renamed from: j */
    public Map.Entry e(Object obj, Object obj2) {
        return new a(obj, obj2);
    }
}
