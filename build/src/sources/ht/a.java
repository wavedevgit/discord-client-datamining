package ht;

import at.h;
import at.l;
import at.n;
import at.o;
import ct.l;
import dt.g1;
import dt.h1;
import java.util.Collection;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;
import kotlin.collections.o0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import kotlinx.serialization.DeserializationStrategy;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class a implements l {

    /* renamed from: b  reason: collision with root package name */
    public static final C0368a f28142b = new C0368a(null);

    /* renamed from: a  reason: collision with root package name */
    private final gt.b f28143a;

    /* renamed from: ht.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0368a extends a {
        public /* synthetic */ C0368a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0368a() {
            super(gt.c.a(), null, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public abstract class b extends g1 {

        /* renamed from: c  reason: collision with root package name */
        private final Map f28144c;

        /* renamed from: d  reason: collision with root package name */
        private final gt.b f28145d;

        /* renamed from: e  reason: collision with root package name */
        private int f28146e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f28147f;

        /* renamed from: g  reason: collision with root package name */
        private final int f28148g;

        /* renamed from: h  reason: collision with root package name */
        final /* synthetic */ a f28149h;

        public b(a aVar, Map map, SerialDescriptor descriptor) {
            boolean z10;
            int d10;
            Intrinsics.checkNotNullParameter(map, "map");
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            this.f28149h = aVar;
            this.f28144c = map;
            this.f28145d = aVar.a();
            if (!Intrinsics.areEqual(descriptor.getKind(), l.b.f19854a) && !Intrinsics.areEqual(descriptor.getKind(), l.c.f19855a)) {
                z10 = false;
            } else {
                z10 = true;
            }
            this.f28147f = z10;
            if (z10) {
                d10 = Integer.MAX_VALUE;
            } else {
                d10 = descriptor.d();
            }
            this.f28148g = d10;
        }

        @Override // dt.q2, kotlinx.serialization.encoding.Decoder
        public final Object G(DeserializationStrategy deserializer) {
            String str;
            Intrinsics.checkNotNullParameter(deserializer, "deserializer");
            if (deserializer instanceof dt.b) {
                Object obj = this.f28144c.get(k0("type"));
                if (obj != null) {
                    str = obj.toString();
                } else {
                    str = null;
                }
                return h.b((dt.b) deserializer, this, str).deserialize(this);
            }
            return deserializer.deserialize(this);
        }

        @Override // kotlinx.serialization.encoding.Decoder, kotlinx.serialization.encoding.c
        public gt.b a() {
            return this.f28145d;
        }

        @Override // kotlinx.serialization.encoding.Decoder
        public final kotlinx.serialization.encoding.c b(SerialDescriptor descriptor) {
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            b p02 = p0(descriptor);
            K(p02);
            return p02;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // dt.q2
        /* renamed from: m0 */
        public final int S(String tag, SerialDescriptor enumDescriptor) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            Intrinsics.checkNotNullParameter(enumDescriptor, "enumDescriptor");
            Object j10 = o0.j(this.f28144c, tag);
            if (j10 instanceof Integer) {
                return ((Number) j10).intValue();
            }
            if (j10 instanceof String) {
                int c10 = enumDescriptor.c((String) j10);
                if (c10 != -3) {
                    return c10;
                }
                throw new n("Enum '" + enumDescriptor.h() + "' does not contain element with name '" + j10 + '\'');
            }
            throw new n("Value of enum entry '" + tag + "' is neither an Int nor a String");
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // dt.q2
        /* renamed from: n0 */
        public final Object a0(String tag) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            return o0.j(this.f28144c, tag);
        }

        @Override // kotlinx.serialization.encoding.c
        public final int o(SerialDescriptor descriptor) {
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            do {
                int i10 = this.f28146e;
                if (i10 < this.f28148g) {
                    this.f28146e = i10 + 1;
                    String c02 = c0(descriptor, i10);
                    Set<String> keySet = this.f28144c.keySet();
                    if (!(keySet instanceof Collection) || !keySet.isEmpty()) {
                        for (String str : keySet) {
                            if (StringsKt.P(str, c02, false, 2, null) && (str.length() == c02.length() || str.charAt(c02.length()) == '.')) {
                                return this.f28146e - 1;
                            }
                        }
                    }
                } else {
                    return -1;
                }
            } while (!this.f28147f);
            return -1;
        }

        protected final Map o0() {
            return this.f28144c;
        }

        protected abstract b p0(SerialDescriptor serialDescriptor);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class c extends b {

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ a f28150i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(a aVar, Map map, SerialDescriptor descriptor) {
            super(aVar, map, descriptor);
            Intrinsics.checkNotNullParameter(map, "map");
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            this.f28150i = aVar;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // dt.q2
        /* renamed from: q0 */
        public boolean O(String tag) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            return Boolean.parseBoolean((String) a0(tag));
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // dt.q2
        /* renamed from: r0 */
        public byte P(String tag) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            return Byte.parseByte((String) a0(tag));
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // dt.q2
        /* renamed from: s0 */
        public char Q(String tag) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            return StringsKt.w1((CharSequence) a0(tag));
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // dt.q2
        /* renamed from: t0 */
        public double R(String tag) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            return Double.parseDouble((String) a0(tag));
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // dt.q2
        /* renamed from: u0 */
        public float T(String tag) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            return Float.parseFloat((String) a0(tag));
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // dt.q2
        /* renamed from: v0 */
        public int V(String tag) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            return Integer.parseInt((String) a0(tag));
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // dt.q2
        /* renamed from: w0 */
        public long W(String tag) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            return Long.parseLong((String) a0(tag));
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // dt.q2
        /* renamed from: x0 */
        public short Y(String tag) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            return Short.parseShort((String) a0(tag));
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // ht.a.b
        /* renamed from: y0 */
        public c p0(SerialDescriptor descriptor) {
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            return new c(this.f28150i, o0(), descriptor);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class d extends e {
        public d() {
            super();
        }

        @Override // ht.a.e
        protected Object g0(Object value) {
            Intrinsics.checkNotNullParameter(value, "value");
            return value;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public abstract class e extends h1 {

        /* renamed from: b  reason: collision with root package name */
        private final gt.b f28152b;

        /* renamed from: c  reason: collision with root package name */
        private final Map f28153c = new LinkedHashMap();

        public e() {
            this.f28152b = a.this.a();
        }

        @Override // kotlinx.serialization.encoding.Encoder
        public gt.b a() {
            return this.f28152b;
        }

        protected abstract Object g0(Object obj);

        @Override // dt.r2, kotlinx.serialization.encoding.Encoder
        public final void h(o serializer, Object obj) {
            Intrinsics.checkNotNullParameter(serializer, "serializer");
            if (serializer instanceof dt.b) {
                Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.Any");
                o a10 = h.a((dt.b) serializer, this, obj);
                U(f0("type"), a10.getDescriptor().h());
                a10.serialize(this, obj);
                return;
            }
            serializer.serialize(this, obj);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // dt.r2
        /* renamed from: h0 */
        public void M(String tag, SerialDescriptor enumDescriptor, int i10) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            Intrinsics.checkNotNullParameter(enumDescriptor, "enumDescriptor");
            this.f28153c.put(tag, g0(enumDescriptor.e(i10)));
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // dt.r2
        /* renamed from: i0 */
        public void S(String tag) {
            Intrinsics.checkNotNullParameter(tag, "tag");
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // dt.r2
        /* renamed from: j0 */
        public void V(String tag, Object value) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            Intrinsics.checkNotNullParameter(value, "value");
            this.f28153c.put(tag, g0(value));
        }

        public final Map k0() {
            return this.f28153c;
        }
    }

    public /* synthetic */ a(gt.b bVar, Void r22, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, r22);
    }

    @Override // at.l
    public gt.b a() {
        return this.f28143a;
    }

    public final Object d(DeserializationStrategy deserializer, Map map) {
        Intrinsics.checkNotNullParameter(deserializer, "deserializer");
        Intrinsics.checkNotNullParameter(map, "map");
        return new c(this, map, deserializer.getDescriptor()).G(deserializer);
    }

    public final Map e(o serializer, Object obj) {
        Intrinsics.checkNotNullParameter(serializer, "serializer");
        d dVar = new d();
        dVar.h(serializer, obj);
        return dVar.k0();
    }

    private a(gt.b bVar, Void r22) {
        this.f28143a = bVar;
    }
}
