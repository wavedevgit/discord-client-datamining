package ft;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.json.Json;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x0 extends kotlinx.serialization.encoding.b implements et.q {

    /* renamed from: a  reason: collision with root package name */
    private final m f24800a;

    /* renamed from: b  reason: collision with root package name */
    private final Json f24801b;

    /* renamed from: c  reason: collision with root package name */
    private final e1 f24802c;

    /* renamed from: d  reason: collision with root package name */
    private final et.q[] f24803d;

    /* renamed from: e  reason: collision with root package name */
    private final gt.b f24804e;

    /* renamed from: f  reason: collision with root package name */
    private final et.d f24805f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f24806g;

    /* renamed from: h  reason: collision with root package name */
    private String f24807h;

    /* renamed from: i  reason: collision with root package name */
    private String f24808i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f24809a;

        static {
            int[] iArr = new int[e1.values().length];
            try {
                iArr[e1.f24717o.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[e1.f24718p.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[e1.f24719q.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f24809a = iArr;
        }
    }

    public x0(m composer, Json json, e1 mode, et.q[] qVarArr) {
        Intrinsics.checkNotNullParameter(composer, "composer");
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(mode, "mode");
        this.f24800a = composer;
        this.f24801b = json;
        this.f24802c = mode;
        this.f24803d = qVarArr;
        this.f24804e = d().a();
        this.f24805f = d().e();
        int ordinal = mode.ordinal();
        if (qVarArr != null) {
            et.q qVar = qVarArr[ordinal];
            if (qVar == null && qVar == this) {
                return;
            }
            qVarArr[ordinal] = this;
        }
    }

    private final void I(String str, String str2) {
        this.f24800a.c();
        F(str);
        this.f24800a.f(':');
        this.f24800a.p();
        F(str2);
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void A(int i10) {
        if (this.f24806g) {
            F(String.valueOf(i10));
        } else {
            this.f24800a.i(i10);
        }
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void F(String value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f24800a.n(value);
    }

    @Override // kotlinx.serialization.encoding.b
    public boolean G(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        int i11 = a.f24809a[this.f24802c.ordinal()];
        if (i11 != 1) {
            boolean z10 = false;
            if (i11 != 2) {
                if (i11 != 3) {
                    if (!this.f24800a.a()) {
                        this.f24800a.f(',');
                    }
                    this.f24800a.c();
                    F(i0.h(descriptor, d(), i10));
                    this.f24800a.f(':');
                    this.f24800a.p();
                } else {
                    if (i10 == 0) {
                        this.f24806g = true;
                    }
                    if (i10 == 1) {
                        this.f24800a.f(',');
                        this.f24800a.p();
                        this.f24806g = false;
                    }
                }
            } else if (!this.f24800a.a()) {
                if (i10 % 2 == 0) {
                    this.f24800a.f(',');
                    this.f24800a.c();
                    z10 = true;
                } else {
                    this.f24800a.f(':');
                    this.f24800a.p();
                }
                this.f24806g = z10;
            } else {
                this.f24806g = true;
                this.f24800a.c();
            }
        } else {
            if (!this.f24800a.a()) {
                this.f24800a.f(',');
            }
            this.f24800a.c();
        }
        return true;
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public gt.b a() {
        return this.f24804e;
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public CompositeEncoder b(SerialDescriptor descriptor) {
        et.q qVar;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        e1 b10 = f1.b(d(), descriptor);
        char c10 = b10.f24722d;
        if (c10 != 0) {
            this.f24800a.f(c10);
            this.f24800a.b();
        }
        String str = this.f24807h;
        if (str != null) {
            String str2 = this.f24808i;
            if (str2 == null) {
                str2 = descriptor.h();
            }
            I(str, str2);
            this.f24807h = null;
            this.f24808i = null;
        }
        if (this.f24802c == b10) {
            return this;
        }
        et.q[] qVarArr = this.f24803d;
        if (qVarArr != null && (qVar = qVarArr[b10.ordinal()]) != null) {
            return qVar;
        }
        return new x0(this.f24800a, d(), b10, this.f24803d);
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.CompositeEncoder
    public void c(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (this.f24802c.f24723e != 0) {
            this.f24800a.q();
            this.f24800a.d();
            this.f24800a.f(this.f24802c.f24723e);
        }
    }

    @Override // et.q
    public Json d() {
        return this.f24801b;
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void f(double d10) {
        if (this.f24806g) {
            F(String.valueOf(d10));
        } else {
            this.f24800a.g(d10);
        }
        if (!this.f24805f.b()) {
            if (!Double.isInfinite(d10) && !Double.isNaN(d10)) {
                return;
            }
            throw g0.b(Double.valueOf(d10), this.f24800a.f24749a.toString());
        }
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void g(byte b10) {
        if (this.f24806g) {
            F(String.valueOf((int) b10));
        } else {
            this.f24800a.e(b10);
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:20:0x005f, code lost:
        if (kotlin.jvm.internal.Intrinsics.areEqual(r1, ct.l.d.f19856a) == false) goto L10;
     */
    /* JADX WARN: Code restructure failed: missing block: B:9:0x0029, code lost:
        if (d().e().f() != et.a.f22641d) goto L24;
     */
    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void h(at.o r4, java.lang.Object r5) {
        /*
            r3 = this;
            java.lang.String r0 = "serializer"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
            kotlinx.serialization.json.Json r0 = r3.d()
            et.d r0 = r0.e()
            boolean r0 = r0.p()
            if (r0 == 0) goto L17
            r4.serialize(r3, r5)
            return
        L17:
            boolean r0 = r4 instanceof dt.b
            if (r0 == 0) goto L2c
            kotlinx.serialization.json.Json r1 = r3.d()
            et.d r1 = r1.e()
            et.a r1 = r1.f()
            et.a r2 = et.a.f22641d
            if (r1 == r2) goto L74
            goto L61
        L2c:
            kotlinx.serialization.json.Json r1 = r3.d()
            et.d r1 = r1.e()
            et.a r1 = r1.f()
            int[] r2 = ft.r0.a.f24779a
            int r1 = r1.ordinal()
            r1 = r2[r1]
            r2 = 1
            if (r1 == r2) goto L74
            r2 = 2
            if (r1 == r2) goto L74
            r2 = 3
            if (r1 != r2) goto L6e
            kotlinx.serialization.descriptors.SerialDescriptor r1 = r4.getDescriptor()
            ct.k r1 = r1.getKind()
            ct.l$a r2 = ct.l.a.f19853a
            boolean r2 = kotlin.jvm.internal.Intrinsics.areEqual(r1, r2)
            if (r2 != 0) goto L61
            ct.l$d r2 = ct.l.d.f19856a
            boolean r1 = kotlin.jvm.internal.Intrinsics.areEqual(r1, r2)
            if (r1 == 0) goto L74
        L61:
            kotlinx.serialization.descriptors.SerialDescriptor r1 = r4.getDescriptor()
            kotlinx.serialization.json.Json r2 = r3.d()
            java.lang.String r1 = ft.r0.c(r1, r2)
            goto L75
        L6e:
            lr.p r4 = new lr.p
            r4.<init>()
            throw r4
        L74:
            r1 = 0
        L75:
            if (r0 == 0) goto Lbb
            r0 = r4
            dt.b r0 = (dt.b) r0
            if (r5 == 0) goto L97
            at.o r0 = at.h.a(r0, r3, r5)
            if (r1 == 0) goto L85
            ft.r0.a(r4, r0, r1)
        L85:
            kotlinx.serialization.descriptors.SerialDescriptor r4 = r0.getDescriptor()
            ct.k r4 = r4.getKind()
            ft.r0.b(r4)
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
            r3.f24807h = r1
            r3.f24808i = r0
        Lc9:
            r4.serialize(r3, r5)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: ft.x0.h(at.o, java.lang.Object):void");
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public void j(SerialDescriptor enumDescriptor, int i10) {
        Intrinsics.checkNotNullParameter(enumDescriptor, "enumDescriptor");
        F(enumDescriptor.e(i10));
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public Encoder k(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (y0.b(descriptor)) {
            m mVar = this.f24800a;
            if (!(mVar instanceof t)) {
                mVar = new t(mVar.f24749a, this.f24806g);
            }
            return new x0(mVar, d(), this.f24802c, (et.q[]) null);
        } else if (y0.a(descriptor)) {
            m mVar2 = this.f24800a;
            if (!(mVar2 instanceof n)) {
                mVar2 = new n(mVar2.f24749a, this.f24806g);
            }
            return new x0(mVar2, d(), this.f24802c, (et.q[]) null);
        } else if (this.f24807h != null) {
            this.f24808i = descriptor.h();
            return this;
        } else {
            return super.k(descriptor);
        }
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void l(long j10) {
        if (this.f24806g) {
            F(String.valueOf(j10));
        } else {
            this.f24800a.j(j10);
        }
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public void n() {
        this.f24800a.k("null");
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void p(short s10) {
        if (this.f24806g) {
            F(String.valueOf((int) s10));
        } else {
            this.f24800a.l(s10);
        }
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void q(boolean z10) {
        if (this.f24806g) {
            F(String.valueOf(z10));
        } else {
            this.f24800a.m(z10);
        }
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.CompositeEncoder
    public void s(SerialDescriptor descriptor, int i10, at.o serializer, Object obj) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(serializer, "serializer");
        if (obj == null && !this.f24805f.j()) {
            return;
        }
        super.s(descriptor, i10, serializer, obj);
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void t(float f10) {
        if (this.f24806g) {
            F(String.valueOf(f10));
        } else {
            this.f24800a.h(f10);
        }
        if (!this.f24805f.b()) {
            if (!Float.isInfinite(f10) && !Float.isNaN(f10)) {
                return;
            }
            throw g0.b(Float.valueOf(f10), this.f24800a.f24749a.toString());
        }
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void u(char c10) {
        F(String.valueOf(c10));
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.CompositeEncoder
    public boolean z(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return this.f24805f.i();
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public x0(z output, Json json, e1 mode, et.q[] modeReuseCache) {
        this(v.a(output, json), json, mode, modeReuseCache);
        Intrinsics.checkNotNullParameter(output, "output");
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(mode, "mode");
        Intrinsics.checkNotNullParameter(modeReuseCache, "modeReuseCache");
    }
}
