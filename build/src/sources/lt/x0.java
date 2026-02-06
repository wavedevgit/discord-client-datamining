package lt;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.json.Json;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x0 extends kotlinx.serialization.encoding.b implements kt.q {

    /* renamed from: a  reason: collision with root package name */
    private final m f36734a;

    /* renamed from: b  reason: collision with root package name */
    private final Json f36735b;

    /* renamed from: c  reason: collision with root package name */
    private final e1 f36736c;

    /* renamed from: d  reason: collision with root package name */
    private final kt.q[] f36737d;

    /* renamed from: e  reason: collision with root package name */
    private final mt.b f36738e;

    /* renamed from: f  reason: collision with root package name */
    private final kt.d f36739f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f36740g;

    /* renamed from: h  reason: collision with root package name */
    private String f36741h;

    /* renamed from: i  reason: collision with root package name */
    private String f36742i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f36743a;

        static {
            int[] iArr = new int[e1.values().length];
            try {
                iArr[e1.f36651o.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[e1.f36652p.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[e1.f36653q.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f36743a = iArr;
        }
    }

    public x0(m composer, Json json, e1 mode, kt.q[] qVarArr) {
        Intrinsics.checkNotNullParameter(composer, "composer");
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(mode, "mode");
        this.f36734a = composer;
        this.f36735b = json;
        this.f36736c = mode;
        this.f36737d = qVarArr;
        this.f36738e = d().a();
        this.f36739f = d().e();
        int ordinal = mode.ordinal();
        if (qVarArr != null) {
            kt.q qVar = qVarArr[ordinal];
            if (qVar == null && qVar == this) {
                return;
            }
            qVarArr[ordinal] = this;
        }
    }

    private final void I(String str, String str2) {
        this.f36734a.c();
        F(str);
        this.f36734a.f(':');
        this.f36734a.p();
        F(str2);
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.CompositeEncoder
    public boolean A(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return this.f36739f.i();
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void B(int i10) {
        if (this.f36740g) {
            F(String.valueOf(i10));
        } else {
            this.f36734a.i(i10);
        }
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void F(String value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f36734a.n(value);
    }

    @Override // kotlinx.serialization.encoding.b
    public boolean G(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        int i11 = a.f36743a[this.f36736c.ordinal()];
        if (i11 != 1) {
            boolean z10 = false;
            if (i11 != 2) {
                if (i11 != 3) {
                    if (!this.f36734a.a()) {
                        this.f36734a.f(',');
                    }
                    this.f36734a.c();
                    F(i0.h(descriptor, d(), i10));
                    this.f36734a.f(':');
                    this.f36734a.p();
                } else {
                    if (i10 == 0) {
                        this.f36740g = true;
                    }
                    if (i10 == 1) {
                        this.f36734a.f(',');
                        this.f36734a.p();
                        this.f36740g = false;
                    }
                }
            } else if (!this.f36734a.a()) {
                if (i10 % 2 == 0) {
                    this.f36734a.f(',');
                    this.f36734a.c();
                    z10 = true;
                } else {
                    this.f36734a.f(':');
                    this.f36734a.p();
                }
                this.f36740g = z10;
            } else {
                this.f36740g = true;
                this.f36734a.c();
            }
        } else {
            if (!this.f36734a.a()) {
                this.f36734a.f(',');
            }
            this.f36734a.c();
        }
        return true;
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public mt.b a() {
        return this.f36738e;
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public CompositeEncoder b(SerialDescriptor descriptor) {
        kt.q qVar;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        e1 b10 = f1.b(d(), descriptor);
        char c10 = b10.f36656d;
        if (c10 != 0) {
            this.f36734a.f(c10);
            this.f36734a.b();
        }
        String str = this.f36741h;
        if (str != null) {
            String str2 = this.f36742i;
            if (str2 == null) {
                str2 = descriptor.h();
            }
            I(str, str2);
            this.f36741h = null;
            this.f36742i = null;
        }
        if (this.f36736c == b10) {
            return this;
        }
        kt.q[] qVarArr = this.f36737d;
        if (qVarArr != null && (qVar = qVarArr[b10.ordinal()]) != null) {
            return qVar;
        }
        return new x0(this.f36734a, d(), b10, this.f36737d);
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.CompositeEncoder
    public void c(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (this.f36736c.f36657e != 0) {
            this.f36734a.q();
            this.f36734a.d();
            this.f36734a.f(this.f36736c.f36657e);
        }
    }

    @Override // kt.q
    public Json d() {
        return this.f36735b;
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void f(double d10) {
        if (this.f36740g) {
            F(String.valueOf(d10));
        } else {
            this.f36734a.g(d10);
        }
        if (!this.f36739f.b()) {
            if (!Double.isInfinite(d10) && !Double.isNaN(d10)) {
                return;
            }
            throw g0.b(Double.valueOf(d10), this.f36734a.f36683a.toString());
        }
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void g(byte b10) {
        if (this.f36740g) {
            F(String.valueOf((int) b10));
        } else {
            this.f36734a.e(b10);
        }
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public void i(SerialDescriptor enumDescriptor, int i10) {
        Intrinsics.checkNotNullParameter(enumDescriptor, "enumDescriptor");
        F(enumDescriptor.e(i10));
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public Encoder j(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (y0.b(descriptor)) {
            m mVar = this.f36734a;
            if (!(mVar instanceof t)) {
                mVar = new t(mVar.f36683a, this.f36740g);
            }
            return new x0(mVar, d(), this.f36736c, (kt.q[]) null);
        } else if (y0.a(descriptor)) {
            m mVar2 = this.f36734a;
            if (!(mVar2 instanceof n)) {
                mVar2 = new n(mVar2.f36683a, this.f36740g);
            }
            return new x0(mVar2, d(), this.f36736c, (kt.q[]) null);
        } else if (this.f36741h != null) {
            this.f36742i = descriptor.h();
            return this;
        } else {
            return super.j(descriptor);
        }
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void k(long j10) {
        if (this.f36740g) {
            F(String.valueOf(j10));
        } else {
            this.f36734a.j(j10);
        }
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.CompositeEncoder
    public void l(SerialDescriptor descriptor, int i10, ft.o serializer, Object obj) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(serializer, "serializer");
        if (obj == null && !this.f36739f.j()) {
            return;
        }
        super.l(descriptor, i10, serializer, obj);
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public void n() {
        this.f36734a.k("null");
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void p(short s10) {
        if (this.f36740g) {
            F(String.valueOf((int) s10));
        } else {
            this.f36734a.l(s10);
        }
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void q(boolean z10) {
        if (this.f36740g) {
            F(String.valueOf(z10));
        } else {
            this.f36734a.m(z10);
        }
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void t(float f10) {
        if (this.f36740g) {
            F(String.valueOf(f10));
        } else {
            this.f36734a.h(f10);
        }
        if (!this.f36739f.b()) {
            if (!Float.isInfinite(f10) && !Float.isNaN(f10)) {
                return;
            }
            throw g0.b(Float.valueOf(f10), this.f36734a.f36683a.toString());
        }
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void u(char c10) {
        F(String.valueOf(c10));
    }

    /* JADX WARN: Code restructure failed: missing block: B:20:0x005f, code lost:
        if (kotlin.jvm.internal.Intrinsics.areEqual(r1, ht.l.d.f26492a) == false) goto L10;
     */
    /* JADX WARN: Code restructure failed: missing block: B:9:0x0029, code lost:
        if (d().e().f() != kt.a.f35491d) goto L24;
     */
    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void v(ft.o r4, java.lang.Object r5) {
        /*
            r3 = this;
            java.lang.String r0 = "serializer"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
            kotlinx.serialization.json.Json r0 = r3.d()
            kt.d r0 = r0.e()
            boolean r0 = r0.p()
            if (r0 == 0) goto L17
            r4.serialize(r3, r5)
            return
        L17:
            boolean r0 = r4 instanceof jt.b
            if (r0 == 0) goto L2c
            kotlinx.serialization.json.Json r1 = r3.d()
            kt.d r1 = r1.e()
            kt.a r1 = r1.f()
            kt.a r2 = kt.a.f35491d
            if (r1 == r2) goto L74
            goto L61
        L2c:
            kotlinx.serialization.json.Json r1 = r3.d()
            kt.d r1 = r1.e()
            kt.a r1 = r1.f()
            int[] r2 = lt.r0.a.f36713a
            int r1 = r1.ordinal()
            r1 = r2[r1]
            r2 = 1
            if (r1 == r2) goto L74
            r2 = 2
            if (r1 == r2) goto L74
            r2 = 3
            if (r1 != r2) goto L6e
            kotlinx.serialization.descriptors.SerialDescriptor r1 = r4.getDescriptor()
            ht.k r1 = r1.getKind()
            ht.l$a r2 = ht.l.a.f26489a
            boolean r2 = kotlin.jvm.internal.Intrinsics.areEqual(r1, r2)
            if (r2 != 0) goto L61
            ht.l$d r2 = ht.l.d.f26492a
            boolean r1 = kotlin.jvm.internal.Intrinsics.areEqual(r1, r2)
            if (r1 == 0) goto L74
        L61:
            kotlinx.serialization.descriptors.SerialDescriptor r1 = r4.getDescriptor()
            kotlinx.serialization.json.Json r2 = r3.d()
            java.lang.String r1 = lt.r0.c(r1, r2)
            goto L75
        L6e:
            qr.p r4 = new qr.p
            r4.<init>()
            throw r4
        L74:
            r1 = 0
        L75:
            if (r0 == 0) goto Lbb
            r0 = r4
            jt.b r0 = (jt.b) r0
            if (r5 == 0) goto L97
            ft.o r0 = ft.h.a(r0, r3, r5)
            if (r1 == 0) goto L85
            lt.r0.a(r4, r0, r1)
        L85:
            kotlinx.serialization.descriptors.SerialDescriptor r4 = r0.getDescriptor()
            ht.k r4 = r4.getKind()
            lt.r0.b(r4)
            java.lang.String r4 = "null cannot be cast to non-null type kotlinx.serialization.SerializationStrategy<T of kotlinx.serialization.json.internal.PolymorphicKt.encodePolymorphically>"
            kotlin.jvm.internal.Intrinsics.checkNotNull(r0, r4)
            r4 = r0
            goto Lbb
        L97:
            java.lang.StringBuilder r4 = new java.lang.StringBuilder
            r4.<init>()
            java.lang.String r5 = "Value for serializer "
            r4.append(r5)
            kotlinx.serialization.descriptors.SerialDescriptor r5 = r0.getDescriptor()
            r4.append(r5)
            java.lang.String r5 = " should always be non-null. Please report issue to the kotlinx.serialization tracker."
            r4.append(r5)
            java.lang.String r4 = r4.toString()
            java.lang.IllegalArgumentException r5 = new java.lang.IllegalArgumentException
            java.lang.String r4 = r4.toString()
            r5.<init>(r4)
            throw r5
        Lbb:
            if (r1 == 0) goto Lc9
            kotlinx.serialization.descriptors.SerialDescriptor r0 = r4.getDescriptor()
            java.lang.String r0 = r0.h()
            r3.f36741h = r1
            r3.f36742i = r0
        Lc9:
            r4.serialize(r3, r5)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: lt.x0.v(ft.o, java.lang.Object):void");
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public x0(z output, Json json, e1 mode, kt.q[] modeReuseCache) {
        this(v.a(output, json), json, mode, modeReuseCache);
        Intrinsics.checkNotNullParameter(output, "output");
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(mode, "mode");
        Intrinsics.checkNotNullParameter(modeReuseCache, "modeReuseCache");
    }
}
