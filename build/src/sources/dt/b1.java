package dt;

import ct.l;
import java.util.Map;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
import kotlinx.serialization.KSerializer;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b1 extends s0 {

    /* renamed from: c  reason: collision with root package name */
    private final SerialDescriptor f20907c;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a implements Map.Entry, KMappedMarker {

        /* renamed from: d  reason: collision with root package name */
        private final Object f20908d;

        /* renamed from: e  reason: collision with root package name */
        private final Object f20909e;

        public a(Object obj, Object obj2) {
            this.f20908d = obj;
            this.f20909e = obj2;
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
            if (Intrinsics.areEqual(this.f20908d, aVar.f20908d) && Intrinsics.areEqual(this.f20909e, aVar.f20909e)) {
                return true;
            }
            return false;
        }

        @Override // java.util.Map.Entry
        public Object getKey() {
            return this.f20908d;
        }

        @Override // java.util.Map.Entry
        public Object getValue() {
            return this.f20909e;
        }

        @Override // java.util.Map.Entry
        public int hashCode() {
            int hashCode;
            Object obj = this.f20908d;
            int i10 = 0;
            if (obj == null) {
                hashCode = 0;
            } else {
                hashCode = obj.hashCode();
            }
            int i11 = hashCode * 31;
            Object obj2 = this.f20909e;
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
            return "MapEntry(key=" + this.f20908d + ", value=" + this.f20909e + ')';
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b1(final KSerializer keySerializer, final KSerializer valueSerializer) {
        super(keySerializer, valueSerializer, null);
        Intrinsics.checkNotNullParameter(keySerializer, "keySerializer");
        Intrinsics.checkNotNullParameter(valueSerializer, "valueSerializer");
        this.f20907c = ct.j.d("kotlin.collections.Map.Entry", l.c.f19855a, new SerialDescriptor[0], new Function1() { // from class: dt.a1
            @Override // kotlin.jvm.functions.Function1
            public final Object invoke(Object obj) {
                Unit g10;
                g10 = b1.g(KSerializer.this, valueSerializer, (ct.a) obj);
                return g10;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final Unit g(KSerializer kSerializer, KSerializer kSerializer2, ct.a buildSerialDescriptor) {
        Intrinsics.checkNotNullParameter(buildSerialDescriptor, "$this$buildSerialDescriptor");
        ct.a.b(buildSerialDescriptor, "key", kSerializer.getDescriptor(), null, false, 12, null);
        ct.a.b(buildSerialDescriptor, "value", kSerializer2.getDescriptor(), null, false, 12, null);
        return Unit.f32464a;
    }

    @Override // kotlinx.serialization.KSerializer, at.o, kotlinx.serialization.DeserializationStrategy
    public SerialDescriptor getDescriptor() {
        return this.f20907c;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.s0
    /* renamed from: h */
    public Object a(Map.Entry entry) {
        Intrinsics.checkNotNullParameter(entry, "<this>");
        return entry.getKey();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.s0
    /* renamed from: i */
    public Object c(Map.Entry entry) {
        Intrinsics.checkNotNullParameter(entry, "<this>");
        return entry.getValue();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // dt.s0
    /* renamed from: j */
    public Map.Entry e(Object obj, Object obj2) {
        return new a(obj, obj2);
    }
}
