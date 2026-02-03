package dt;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.json.Json;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x0 extends kotlinx.serialization.encoding.b implements ct.q {

    /* renamed from: a  reason: collision with root package name */
    private final m f22482a;

    /* renamed from: b  reason: collision with root package name */
    private final Json f22483b;

    /* renamed from: c  reason: collision with root package name */
    private final e1 f22484c;

    /* renamed from: d  reason: collision with root package name */
    private final ct.q[] f22485d;

    /* renamed from: e  reason: collision with root package name */
    private final et.b f22486e;

    /* renamed from: f  reason: collision with root package name */
    private final ct.d f22487f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f22488g;

    /* renamed from: h  reason: collision with root package name */
    private String f22489h;

    /* renamed from: i  reason: collision with root package name */
    private String f22490i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f22491a;

        static {
            int[] iArr = new int[e1.values().length];
            try {
                iArr[e1.f22399o.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[e1.f22400p.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[e1.f22401q.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f22491a = iArr;
        }
    }

    public x0(m composer, Json json, e1 mode, ct.q[] qVarArr) {
        Intrinsics.checkNotNullParameter(composer, "composer");
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(mode, "mode");
        this.f22482a = composer;
        this.f22483b = json;
        this.f22484c = mode;
        this.f22485d = qVarArr;
        this.f22486e = d().a();
        this.f22487f = d().e();
        int ordinal = mode.ordinal();
        if (qVarArr != null) {
            ct.q qVar = qVarArr[ordinal];
            if (qVar == null && qVar == this) {
                return;
            }
            qVarArr[ordinal] = this;
        }
    }

    private final void I(String str, String str2) {
        this.f22482a.c();
        F(str);
        this.f22482a.f(':');
        this.f22482a.p();
        F(str2);
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void A(int i10) {
        if (this.f22488g) {
            F(String.valueOf(i10));
        } else {
            this.f22482a.i(i10);
        }
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.CompositeEncoder
    public void B(SerialDescriptor descriptor, int i10, ys.o serializer, Object obj) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(serializer, "serializer");
        if (obj == null && !this.f22487f.j()) {
            return;
        }
        super.B(descriptor, i10, serializer, obj);
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void F(String value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f22482a.n(value);
    }

    @Override // kotlinx.serialization.encoding.b
    public boolean G(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        int i11 = a.f22491a[this.f22484c.ordinal()];
        if (i11 != 1) {
            boolean z10 = false;
            if (i11 != 2) {
                if (i11 != 3) {
                    if (!this.f22482a.a()) {
                        this.f22482a.f(',');
                    }
                    this.f22482a.c();
                    F(i0.h(descriptor, d(), i10));
                    this.f22482a.f(':');
                    this.f22482a.p();
                } else {
                    if (i10 == 0) {
                        this.f22488g = true;
                    }
                    if (i10 == 1) {
                        this.f22482a.f(',');
                        this.f22482a.p();
                        this.f22488g = false;
                    }
                }
            } else if (!this.f22482a.a()) {
                if (i10 % 2 == 0) {
                    this.f22482a.f(',');
                    this.f22482a.c();
                    z10 = true;
                } else {
                    this.f22482a.f(':');
                    this.f22482a.p();
                }
                this.f22488g = z10;
            } else {
                this.f22488g = true;
                this.f22482a.c();
            }
        } else {
            if (!this.f22482a.a()) {
                this.f22482a.f(',');
            }
            this.f22482a.c();
        }
        return true;
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public et.b a() {
        return this.f22486e;
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public CompositeEncoder b(SerialDescriptor descriptor) {
        ct.q qVar;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        e1 b10 = f1.b(d(), descriptor);
        char c10 = b10.f22404d;
        if (c10 != 0) {
            this.f22482a.f(c10);
            this.f22482a.b();
        }
        String str = this.f22489h;
        if (str != null) {
            String str2 = this.f22490i;
            if (str2 == null) {
                str2 = descriptor.h();
            }
            I(str, str2);
            this.f22489h = null;
            this.f22490i = null;
        }
        if (this.f22484c == b10) {
            return this;
        }
        ct.q[] qVarArr = this.f22485d;
        if (qVarArr != null && (qVar = qVarArr[b10.ordinal()]) != null) {
            return qVar;
        }
        return new x0(this.f22482a, d(), b10, this.f22485d);
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.CompositeEncoder
    public void c(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (this.f22484c.f22405e != 0) {
            this.f22482a.q();
            this.f22482a.d();
            this.f22482a.f(this.f22484c.f22405e);
        }
    }

    @Override // ct.q
    public Json d() {
        return this.f22483b;
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void f(double d10) {
        if (this.f22488g) {
            F(String.valueOf(d10));
        } else {
            this.f22482a.g(d10);
        }
        if (!this.f22487f.b()) {
            if (!Double.isInfinite(d10) && !Double.isNaN(d10)) {
                return;
            }
            throw g0.b(Double.valueOf(d10), this.f22482a.f22431a.toString());
        }
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void g(byte b10) {
        if (this.f22488g) {
            F(String.valueOf((int) b10));
        } else {
            this.f22482a.e(b10);
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
            m mVar = this.f22482a;
            if (!(mVar instanceof t)) {
                mVar = new t(mVar.f22431a, this.f22488g);
            }
            return new x0(mVar, d(), this.f22484c, (ct.q[]) null);
        } else if (y0.a(descriptor)) {
            m mVar2 = this.f22482a;
            if (!(mVar2 instanceof n)) {
                mVar2 = new n(mVar2.f22431a, this.f22488g);
            }
            return new x0(mVar2, d(), this.f22484c, (ct.q[]) null);
        } else if (this.f22489h != null) {
            this.f22490i = descriptor.h();
            return this;
        } else {
            return super.j(descriptor);
        }
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void k(long j10) {
        if (this.f22488g) {
            F(String.valueOf(j10));
        } else {
            this.f22482a.j(j10);
        }
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public void n() {
        this.f22482a.k("null");
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void p(short s10) {
        if (this.f22488g) {
            F(String.valueOf((int) s10));
        } else {
            this.f22482a.l(s10);
        }
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void q(boolean z10) {
        if (this.f22488g) {
            F(String.valueOf(z10));
        } else {
            this.f22482a.m(z10);
        }
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void s(float f10) {
        if (this.f22488g) {
            F(String.valueOf(f10));
        } else {
            this.f22482a.h(f10);
        }
        if (!this.f22487f.b()) {
            if (!Float.isInfinite(f10) && !Float.isNaN(f10)) {
                return;
            }
            throw g0.b(Float.valueOf(f10), this.f22482a.f22431a.toString());
        }
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void t(char c10) {
        F(String.valueOf(c10));
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.CompositeEncoder
    public boolean y(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return this.f22487f.i();
    }

    /* JADX WARN: Code restructure failed: missing block: B:20:0x005f, code lost:
        if (kotlin.jvm.internal.Intrinsics.areEqual(r1, at.l.d.f6092a) == false) goto L10;
     */
    /* JADX WARN: Code restructure failed: missing block: B:9:0x0029, code lost:
        if (d().e().f() != ct.a.f20795d) goto L24;
     */
    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void z(ys.o r4, java.lang.Object r5) {
        /*
            r3 = this;
            java.lang.String r0 = "serializer"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
            kotlinx.serialization.json.Json r0 = r3.d()
            ct.d r0 = r0.e()
            boolean r0 = r0.p()
            if (r0 == 0) goto L17
            r4.serialize(r3, r5)
            return
        L17:
            boolean r0 = r4 instanceof bt.b
            if (r0 == 0) goto L2c
            kotlinx.serialization.json.Json r1 = r3.d()
            ct.d r1 = r1.e()
            ct.a r1 = r1.f()
            ct.a r2 = ct.a.f20795d
            if (r1 == r2) goto L74
            goto L61
        L2c:
            kotlinx.serialization.json.Json r1 = r3.d()
            ct.d r1 = r1.e()
            ct.a r1 = r1.f()
            int[] r2 = dt.r0.a.f22461a
            int r1 = r1.ordinal()
            r1 = r2[r1]
            r2 = 1
            if (r1 == r2) goto L74
            r2 = 2
            if (r1 == r2) goto L74
            r2 = 3
            if (r1 != r2) goto L6e
            kotlinx.serialization.descriptors.SerialDescriptor r1 = r4.getDescriptor()
            at.k r1 = r1.getKind()
            at.l$a r2 = at.l.a.f6089a
            boolean r2 = kotlin.jvm.internal.Intrinsics.areEqual(r1, r2)
            if (r2 != 0) goto L61
            at.l$d r2 = at.l.d.f6092a
            boolean r1 = kotlin.jvm.internal.Intrinsics.areEqual(r1, r2)
            if (r1 == 0) goto L74
        L61:
            kotlinx.serialization.descriptors.SerialDescriptor r1 = r4.getDescriptor()
            kotlinx.serialization.json.Json r2 = r3.d()
            java.lang.String r1 = dt.r0.c(r1, r2)
            goto L75
        L6e:
            jr.p r4 = new jr.p
            r4.<init>()
            throw r4
        L74:
            r1 = 0
        L75:
            if (r0 == 0) goto Lbb
            r0 = r4
            bt.b r0 = (bt.b) r0
            if (r5 == 0) goto L97
            ys.o r0 = ys.h.b(r0, r3, r5)
            if (r1 == 0) goto L85
            dt.r0.a(r4, r0, r1)
        L85:
            kotlinx.serialization.descriptors.SerialDescriptor r4 = r0.getDescriptor()
            at.k r4 = r4.getKind()
            dt.r0.b(r4)
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
            r3.f22489h = r1
            r3.f22490i = r0
        Lc9:
            r4.serialize(r3, r5)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: dt.x0.z(ys.o, java.lang.Object):void");
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public x0(z output, Json json, e1 mode, ct.q[] modeReuseCache) {
        this(v.a(output, json), json, mode, modeReuseCache);
        Intrinsics.checkNotNullParameter(output, "output");
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(mode, "mode");
        Intrinsics.checkNotNullParameter(modeReuseCache, "modeReuseCache");
    }
}
