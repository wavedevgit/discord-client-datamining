package mt;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
import kotlinx.serialization.encoding.CompositeEncoder;
import kotlinx.serialization.encoding.Encoder;
import kotlinx.serialization.json.Json;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class x0 extends kotlinx.serialization.encoding.b implements lt.q {

    /* renamed from: a  reason: collision with root package name */
    private final m f37612a;

    /* renamed from: b  reason: collision with root package name */
    private final Json f37613b;

    /* renamed from: c  reason: collision with root package name */
    private final e1 f37614c;

    /* renamed from: d  reason: collision with root package name */
    private final lt.q[] f37615d;

    /* renamed from: e  reason: collision with root package name */
    private final nt.b f37616e;

    /* renamed from: f  reason: collision with root package name */
    private final lt.d f37617f;

    /* renamed from: g  reason: collision with root package name */
    private boolean f37618g;

    /* renamed from: h  reason: collision with root package name */
    private String f37619h;

    /* renamed from: i  reason: collision with root package name */
    private String f37620i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f37621a;

        static {
            int[] iArr = new int[e1.values().length];
            try {
                iArr[e1.f37529o.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[e1.f37530p.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[e1.f37531q.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            f37621a = iArr;
        }
    }

    public x0(m composer, Json json, e1 mode, lt.q[] qVarArr) {
        Intrinsics.checkNotNullParameter(composer, "composer");
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(mode, "mode");
        this.f37612a = composer;
        this.f37613b = json;
        this.f37614c = mode;
        this.f37615d = qVarArr;
        this.f37616e = d().a();
        this.f37617f = d().e();
        int ordinal = mode.ordinal();
        if (qVarArr != null) {
            lt.q qVar = qVarArr[ordinal];
            if (qVar == null && qVar == this) {
                return;
            }
            qVarArr[ordinal] = this;
        }
    }

    private final void I(String str, String str2) {
        this.f37612a.c();
        E(str);
        this.f37612a.f(':');
        this.f37612a.p();
        E(str2);
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void A(int i10) {
        if (this.f37618g) {
            E(String.valueOf(i10));
        } else {
            this.f37612a.i(i10);
        }
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void E(String value) {
        Intrinsics.checkNotNullParameter(value, "value");
        this.f37612a.n(value);
    }

    @Override // kotlinx.serialization.encoding.b
    public boolean G(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        int i11 = a.f37621a[this.f37614c.ordinal()];
        if (i11 != 1) {
            boolean z10 = false;
            if (i11 != 2) {
                if (i11 != 3) {
                    if (!this.f37612a.a()) {
                        this.f37612a.f(',');
                    }
                    this.f37612a.c();
                    E(i0.h(descriptor, d(), i10));
                    this.f37612a.f(':');
                    this.f37612a.p();
                } else {
                    if (i10 == 0) {
                        this.f37618g = true;
                    }
                    if (i10 == 1) {
                        this.f37612a.f(',');
                        this.f37612a.p();
                        this.f37618g = false;
                    }
                }
            } else if (!this.f37612a.a()) {
                if (i10 % 2 == 0) {
                    this.f37612a.f(',');
                    this.f37612a.c();
                    z10 = true;
                } else {
                    this.f37612a.f(':');
                    this.f37612a.p();
                }
                this.f37618g = z10;
            } else {
                this.f37618g = true;
                this.f37612a.c();
            }
        } else {
            if (!this.f37612a.a()) {
                this.f37612a.f(',');
            }
            this.f37612a.c();
        }
        return true;
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public nt.b a() {
        return this.f37616e;
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public CompositeEncoder b(SerialDescriptor descriptor) {
        lt.q qVar;
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        e1 b10 = f1.b(d(), descriptor);
        char c10 = b10.f37534d;
        if (c10 != 0) {
            this.f37612a.f(c10);
            this.f37612a.b();
        }
        String str = this.f37619h;
        if (str != null) {
            String str2 = this.f37620i;
            if (str2 == null) {
                str2 = descriptor.h();
            }
            I(str, str2);
            this.f37619h = null;
            this.f37620i = null;
        }
        if (this.f37614c == b10) {
            return this;
        }
        lt.q[] qVarArr = this.f37615d;
        if (qVarArr != null && (qVar = qVarArr[b10.ordinal()]) != null) {
            return qVar;
        }
        return new x0(this.f37612a, d(), b10, this.f37615d);
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.CompositeEncoder
    public void c(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (this.f37614c.f37535e != 0) {
            this.f37612a.q();
            this.f37612a.d();
            this.f37612a.f(this.f37614c.f37535e);
        }
    }

    @Override // lt.q
    public Json d() {
        return this.f37613b;
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void f(double d10) {
        if (this.f37618g) {
            E(String.valueOf(d10));
        } else {
            this.f37612a.g(d10);
        }
        if (!this.f37617f.b()) {
            if (!Double.isInfinite(d10) && !Double.isNaN(d10)) {
                return;
            }
            throw g0.b(Double.valueOf(d10), this.f37612a.f37561a.toString());
        }
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void g(byte b10) {
        if (this.f37618g) {
            E(String.valueOf((int) b10));
        } else {
            this.f37612a.e(b10);
        }
    }

    /* JADX WARN: Code restructure failed: missing block: B:20:0x005f, code lost:
        if (kotlin.jvm.internal.Intrinsics.areEqual(r1, jt.l.d.f30498a) == false) goto L10;
     */
    /* JADX WARN: Code restructure failed: missing block: B:9:0x0029, code lost:
        if (d().e().f() != lt.a.f36618d) goto L24;
     */
    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public void h(gt.o r4, java.lang.Object r5) {
        /*
            r3 = this;
            java.lang.String r0 = "serializer"
            kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
            kotlinx.serialization.json.Json r0 = r3.d()
            lt.d r0 = r0.e()
            boolean r0 = r0.p()
            if (r0 == 0) goto L17
            r4.serialize(r3, r5)
            return
        L17:
            boolean r0 = r4 instanceof kt.b
            if (r0 == 0) goto L2c
            kotlinx.serialization.json.Json r1 = r3.d()
            lt.d r1 = r1.e()
            lt.a r1 = r1.f()
            lt.a r2 = lt.a.f36618d
            if (r1 == r2) goto L74
            goto L61
        L2c:
            kotlinx.serialization.json.Json r1 = r3.d()
            lt.d r1 = r1.e()
            lt.a r1 = r1.f()
            int[] r2 = mt.r0.a.f37591a
            int r1 = r1.ordinal()
            r1 = r2[r1]
            r2 = 1
            if (r1 == r2) goto L74
            r2 = 2
            if (r1 == r2) goto L74
            r2 = 3
            if (r1 != r2) goto L6e
            kotlinx.serialization.descriptors.SerialDescriptor r1 = r4.getDescriptor()
            jt.k r1 = r1.getKind()
            jt.l$a r2 = jt.l.a.f30495a
            boolean r2 = kotlin.jvm.internal.Intrinsics.areEqual(r1, r2)
            if (r2 != 0) goto L61
            jt.l$d r2 = jt.l.d.f30498a
            boolean r1 = kotlin.jvm.internal.Intrinsics.areEqual(r1, r2)
            if (r1 == 0) goto L74
        L61:
            kotlinx.serialization.descriptors.SerialDescriptor r1 = r4.getDescriptor()
            kotlinx.serialization.json.Json r2 = r3.d()
            java.lang.String r1 = mt.r0.c(r1, r2)
            goto L75
        L6e:
            rr.p r4 = new rr.p
            r4.<init>()
            throw r4
        L74:
            r1 = 0
        L75:
            if (r0 == 0) goto Lbb
            r0 = r4
            kt.b r0 = (kt.b) r0
            if (r5 == 0) goto L97
            gt.o r0 = gt.h.a(r0, r3, r5)
            if (r1 == 0) goto L85
            mt.r0.a(r4, r0, r1)
        L85:
            kotlinx.serialization.descriptors.SerialDescriptor r4 = r0.getDescriptor()
            jt.k r4 = r4.getKind()
            mt.r0.b(r4)
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
            r3.f37619h = r1
            r3.f37620i = r0
        Lc9:
            r4.serialize(r3, r5)
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: mt.x0.h(gt.o, java.lang.Object):void");
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.CompositeEncoder
    public void i(SerialDescriptor descriptor, int i10, gt.o serializer, Object obj) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        Intrinsics.checkNotNullParameter(serializer, "serializer");
        if (obj == null && !this.f37617f.j()) {
            return;
        }
        super.i(descriptor, i10, serializer, obj);
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public void k(SerialDescriptor enumDescriptor, int i10) {
        Intrinsics.checkNotNullParameter(enumDescriptor, "enumDescriptor");
        E(enumDescriptor.e(i10));
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public Encoder l(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        if (y0.b(descriptor)) {
            m mVar = this.f37612a;
            if (!(mVar instanceof t)) {
                mVar = new t(mVar.f37561a, this.f37618g);
            }
            return new x0(mVar, d(), this.f37614c, (lt.q[]) null);
        } else if (y0.a(descriptor)) {
            m mVar2 = this.f37612a;
            if (!(mVar2 instanceof n)) {
                mVar2 = new n(mVar2.f37561a, this.f37618g);
            }
            return new x0(mVar2, d(), this.f37614c, (lt.q[]) null);
        } else if (this.f37619h != null) {
            this.f37620i = descriptor.h();
            return this;
        } else {
            return super.l(descriptor);
        }
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void m(long j10) {
        if (this.f37618g) {
            E(String.valueOf(j10));
        } else {
            this.f37612a.j(j10);
        }
    }

    @Override // kotlinx.serialization.encoding.Encoder
    public void o() {
        this.f37612a.k("null");
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void q(short s10) {
        if (this.f37618g) {
            E(String.valueOf((int) s10));
        } else {
            this.f37612a.l(s10);
        }
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void r(boolean z10) {
        if (this.f37618g) {
            E(String.valueOf(z10));
        } else {
            this.f37612a.m(z10);
        }
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void t(float f10) {
        if (this.f37618g) {
            E(String.valueOf(f10));
        } else {
            this.f37612a.h(f10);
        }
        if (!this.f37617f.b()) {
            if (!Float.isInfinite(f10) && !Float.isNaN(f10)) {
                return;
            }
            throw g0.b(Float.valueOf(f10), this.f37612a.f37561a.toString());
        }
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.Encoder
    public void u(char c10) {
        E(String.valueOf(c10));
    }

    @Override // kotlinx.serialization.encoding.b, kotlinx.serialization.encoding.CompositeEncoder
    public boolean z(SerialDescriptor descriptor, int i10) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        return this.f37617f.i();
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public x0(z output, Json json, e1 mode, lt.q[] modeReuseCache) {
        this(v.a(output, json), json, mode, modeReuseCache);
        Intrinsics.checkNotNullParameter(output, "output");
        Intrinsics.checkNotNullParameter(json, "json");
        Intrinsics.checkNotNullParameter(mode, "mode");
        Intrinsics.checkNotNullParameter(modeReuseCache, "modeReuseCache");
    }
}
