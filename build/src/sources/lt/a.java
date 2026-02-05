package lt;

import dt.h;
import dt.l;
import dt.n;
import dt.o;
import ft.l;
import gt.g1;
import gt.h1;
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
    public static final C0487a f37198b = new C0487a(null);

    /* renamed from: a  reason: collision with root package name */
    private final kt.b f37199a;

    /* renamed from: lt.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0487a extends a {
        public /* synthetic */ C0487a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private C0487a() {
            super(kt.c.a(), null, null);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public abstract class b extends g1 {

        /* renamed from: c  reason: collision with root package name */
        private final Map f37200c;

        /* renamed from: d  reason: collision with root package name */
        private final kt.b f37201d;

        /* renamed from: e  reason: collision with root package name */
        private int f37202e;

        /* renamed from: f  reason: collision with root package name */
        private final boolean f37203f;

        /* renamed from: g  reason: collision with root package name */
        private final int f37204g;

        /* renamed from: h  reason: collision with root package name */
        final /* synthetic */ a f37205h;

        public b(a aVar, Map map, SerialDescriptor descriptor) {
            boolean z10;
            int d10;
            Intrinsics.checkNotNullParameter(map, "map");
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            this.f37205h = aVar;
            this.f37200c = map;
            this.f37201d = aVar.a();
            if (!Intrinsics.areEqual(descriptor.getKind(), l.b.f23495a) && !Intrinsics.areEqual(descriptor.getKind(), l.c.f23496a)) {
                z10 = false;
            } else {
                z10 = true;
            }
            this.f37203f = z10;
            if (z10) {
                d10 = Integer.MAX_VALUE;
            } else {
                d10 = descriptor.d();
            }
            this.f37204g = d10;
        }

        @Override // gt.q2, kotlinx.serialization.encoding.Decoder
        public final Object G(DeserializationStrategy deserializer) {
            String str;
            Intrinsics.checkNotNullParameter(deserializer, "deserializer");
            if (deserializer instanceof gt.b) {
                Object obj = this.f37200c.get(k0("type"));
                if (obj != null) {
                    str = obj.toString();
                } else {
                    str = null;
                }
                return h.b((gt.b) deserializer, this, str).deserialize(this);
            }
            return deserializer.deserialize(this);
        }

        @Override // kotlinx.serialization.encoding.Decoder, kotlinx.serialization.encoding.c
        public kt.b a() {
            return this.f37201d;
        }

        @Override // kotlinx.serialization.encoding.Decoder
        public final kotlinx.serialization.encoding.c b(SerialDescriptor descriptor) {
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            b p02 = p0(descriptor);
            K(p02);
            return p02;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // gt.q2
        /* renamed from: m0 */
        public final int S(String tag, SerialDescriptor enumDescriptor) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            Intrinsics.checkNotNullParameter(enumDescriptor, "enumDescriptor");
            Object j10 = o0.j(this.f37200c, tag);
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
        @Override // gt.q2
        /* renamed from: n0 */
        public final Object a0(String tag) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            return o0.j(this.f37200c, tag);
        }

        @Override // kotlinx.serialization.encoding.c
        public final int o(SerialDescriptor descriptor) {
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            do {
                int i10 = this.f37202e;
                if (i10 < this.f37204g) {
                    this.f37202e = i10 + 1;
                    String c02 = c0(descriptor, i10);
                    Set<String> keySet = this.f37200c.keySet();
                    if (!(keySet instanceof Collection) || !keySet.isEmpty()) {
                        for (String str : keySet) {
                            if (StringsKt.P(str, c02, false, 2, null) && (str.length() == c02.length() || str.charAt(c02.length()) == '.')) {
                                return this.f37202e - 1;
                            }
                        }
                    }
                } else {
                    return -1;
                }
            } while (!this.f37203f);
            return -1;
        }

        protected final Map o0() {
            return this.f37200c;
        }

        protected abstract b p0(SerialDescriptor serialDescriptor);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class c extends b {

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ a f37206i;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(a aVar, Map map, SerialDescriptor descriptor) {
            super(aVar, map, descriptor);
            Intrinsics.checkNotNullParameter(map, "map");
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            this.f37206i = aVar;
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // gt.q2
        /* renamed from: q0 */
        public boolean O(String tag) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            return Boolean.parseBoolean((String) a0(tag));
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // gt.q2
        /* renamed from: r0 */
        public byte P(String tag) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            return Byte.parseByte((String) a0(tag));
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // gt.q2
        /* renamed from: s0 */
        public char Q(String tag) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            return StringsKt.w1((CharSequence) a0(tag));
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // gt.q2
        /* renamed from: t0 */
        public double R(String tag) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            return Double.parseDouble((String) a0(tag));
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // gt.q2
        /* renamed from: u0 */
        public float T(String tag) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            return Float.parseFloat((String) a0(tag));
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // gt.q2
        /* renamed from: v0 */
        public int V(String tag) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            return Integer.parseInt((String) a0(tag));
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // gt.q2
        /* renamed from: w0 */
        public long W(String tag) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            return Long.parseLong((String) a0(tag));
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // gt.q2
        /* renamed from: x0 */
        public short Y(String tag) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            return Short.parseShort((String) a0(tag));
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // lt.a.b
        /* renamed from: y0 */
        public c p0(SerialDescriptor descriptor) {
            Intrinsics.checkNotNullParameter(descriptor, "descriptor");
            return new c(this.f37206i, o0(), descriptor);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public final class d extends e {
        public d() {
            super();
        }

        @Override // lt.a.e
        protected Object g0(Object value) {
            Intrinsics.checkNotNullParameter(value, "value");
            return value;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public abstract class e extends h1 {

        /* renamed from: b  reason: collision with root package name */
        private final kt.b f37208b;

        /* renamed from: c  reason: collision with root package name */
        private final Map f37209c = new LinkedHashMap();

        public e() {
            this.f37208b = a.this.a();
        }

        @Override // kotlinx.serialization.encoding.Encoder
        public kt.b a() {
            return this.f37208b;
        }

        protected abstract Object g0(Object obj);

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // gt.r2
        /* renamed from: h0 */
        public void M(String tag, SerialDescriptor enumDescriptor, int i10) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            Intrinsics.checkNotNullParameter(enumDescriptor, "enumDescriptor");
            this.f37209c.put(tag, g0(enumDescriptor.e(i10)));
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // gt.r2
        /* renamed from: i0 */
        public void S(String tag) {
            Intrinsics.checkNotNullParameter(tag, "tag");
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // gt.r2
        /* renamed from: j0 */
        public void V(String tag, Object value) {
            Intrinsics.checkNotNullParameter(tag, "tag");
            Intrinsics.checkNotNullParameter(value, "value");
            this.f37209c.put(tag, g0(value));
        }

        public final Map k0() {
            return this.f37209c;
        }

        @Override // gt.r2, kotlinx.serialization.encoding.Encoder
        public final void y(o serializer, Object obj) {
            Intrinsics.checkNotNullParameter(serializer, "serializer");
            if (serializer instanceof gt.b) {
                Intrinsics.checkNotNull(obj, "null cannot be cast to non-null type kotlin.Any");
                o a10 = h.a((gt.b) serializer, this, obj);
                U(f0("type"), a10.getDescriptor().h());
                a10.serialize(this, obj);
                return;
            }
            serializer.serialize(this, obj);
        }
    }

    public /* synthetic */ a(kt.b bVar, Void r22, DefaultConstructorMarker defaultConstructorMarker) {
        this(bVar, r22);
    }

    @Override // dt.l
    public kt.b a() {
        return this.f37199a;
    }

    public final Object d(DeserializationStrategy deserializer, Map map) {
        Intrinsics.checkNotNullParameter(deserializer, "deserializer");
        Intrinsics.checkNotNullParameter(map, "map");
        return new c(this, map, deserializer.getDescriptor()).G(deserializer);
    }

    public final Map e(o serializer, Object obj) {
        Intrinsics.checkNotNullParameter(serializer, "serializer");
        d dVar = new d();
        dVar.y(serializer, obj);
        return dVar.k0();
    }

    private a(kt.b bVar, Void r22) {
        this.f37199a = bVar;
    }
}
