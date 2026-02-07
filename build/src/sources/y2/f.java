package y2;

import androidx.datastore.preferences.protobuf.p0;
import androidx.datastore.preferences.protobuf.w;
import androidx.datastore.preferences.protobuf.w0;
import y2.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class f extends w implements p0 {
    public static final int BOOLEAN_FIELD_NUMBER = 1;
    private static final f DEFAULT_INSTANCE;
    public static final int DOUBLE_FIELD_NUMBER = 7;
    public static final int FLOAT_FIELD_NUMBER = 2;
    public static final int INTEGER_FIELD_NUMBER = 3;
    public static final int LONG_FIELD_NUMBER = 4;
    private static volatile w0 PARSER = null;
    public static final int STRING_FIELD_NUMBER = 5;
    public static final int STRING_SET_FIELD_NUMBER = 6;
    private int bitField0_;
    private int valueCase_ = 0;
    private Object value_;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends w.a implements p0 {
        /* synthetic */ a(c cVar) {
            this();
        }

        public a q(boolean z10) {
            k();
            ((f) this.f4285e).V(z10);
            return this;
        }

        public a r(double d10) {
            k();
            ((f) this.f4285e).W(d10);
            return this;
        }

        public a t(float f10) {
            k();
            ((f) this.f4285e).X(f10);
            return this;
        }

        public a u(int i10) {
            k();
            ((f) this.f4285e).Y(i10);
            return this;
        }

        public a v(long j10) {
            k();
            ((f) this.f4285e).Z(j10);
            return this;
        }

        public a w(String str) {
            k();
            ((f) this.f4285e).a0(str);
            return this;
        }

        public a x(e.a aVar) {
            k();
            ((f) this.f4285e).b0(aVar);
            return this;
        }

        private a() {
            super(f.DEFAULT_INSTANCE);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum b {
        BOOLEAN(1),
        FLOAT(2),
        INTEGER(3),
        LONG(4),
        STRING(5),
        STRING_SET(6),
        DOUBLE(7),
        VALUE_NOT_SET(0);
        

        /* renamed from: d  reason: collision with root package name */
        private final int f54937d;

        b(int i10) {
            this.f54937d = i10;
        }

        public static b a(int i10) {
            switch (i10) {
                case 0:
                    return VALUE_NOT_SET;
                case 1:
                    return BOOLEAN;
                case 2:
                    return FLOAT;
                case 3:
                    return INTEGER;
                case 4:
                    return LONG;
                case 5:
                    return STRING;
                case 6:
                    return STRING_SET;
                case 7:
                    return DOUBLE;
                default:
                    return null;
            }
        }
    }

    static {
        f fVar = new f();
        DEFAULT_INSTANCE = fVar;
        w.A(f.class, fVar);
    }

    private f() {
    }

    public static f L() {
        return DEFAULT_INSTANCE;
    }

    public static a U() {
        return (a) DEFAULT_INSTANCE.j();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void V(boolean z10) {
        this.valueCase_ = 1;
        this.value_ = Boolean.valueOf(z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void W(double d10) {
        this.valueCase_ = 7;
        this.value_ = Double.valueOf(d10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void X(float f10) {
        this.valueCase_ = 2;
        this.value_ = Float.valueOf(f10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void Y(int i10) {
        this.valueCase_ = 3;
        this.value_ = Integer.valueOf(i10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void Z(long j10) {
        this.valueCase_ = 4;
        this.value_ = Long.valueOf(j10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void a0(String str) {
        str.getClass();
        this.valueCase_ = 5;
        this.value_ = str;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public void b0(e.a aVar) {
        this.value_ = aVar.h();
        this.valueCase_ = 6;
    }

    public boolean K() {
        if (this.valueCase_ == 1) {
            return ((Boolean) this.value_).booleanValue();
        }
        return false;
    }

    public double M() {
        if (this.valueCase_ == 7) {
            return ((Double) this.value_).doubleValue();
        }
        return 0.0d;
    }

    public float N() {
        if (this.valueCase_ == 2) {
            return ((Float) this.value_).floatValue();
        }
        return 0.0f;
    }

    public int O() {
        if (this.valueCase_ == 3) {
            return ((Integer) this.value_).intValue();
        }
        return 0;
    }

    public long Q() {
        if (this.valueCase_ == 4) {
            return ((Long) this.value_).longValue();
        }
        return 0L;
    }

    public String R() {
        if (this.valueCase_ == 5) {
            return (String) this.value_;
        }
        return "";
    }

    public e S() {
        if (this.valueCase_ == 6) {
            return (e) this.value_;
        }
        return e.G();
    }

    public b T() {
        return b.a(this.valueCase_);
    }

    @Override // androidx.datastore.preferences.protobuf.w
    protected final Object m(w.d dVar, Object obj, Object obj2) {
        w0 w0Var;
        switch (c.f54926a[dVar.ordinal()]) {
            case 1:
                return new f();
            case 2:
                return new a(null);
            case 3:
                return w.x(DEFAULT_INSTANCE, "\u0001\u0007\u0001\u0001\u0001\u0007\u0007\u0000\u0000\u0000\u0001:\u0000\u00024\u0000\u00037\u0000\u00045\u0000\u0005;\u0000\u0006<\u0000\u00073\u0000", new Object[]{"value_", "valueCase_", "bitField0_", e.class});
            case 4:
                return DEFAULT_INSTANCE;
            case 5:
                w0 w0Var2 = PARSER;
                if (w0Var2 == null) {
                    synchronized (f.class) {
                        try {
                            w0Var = PARSER;
                            if (w0Var == null) {
                                w0Var = new w.b(DEFAULT_INSTANCE);
                                PARSER = w0Var;
                            }
                        } catch (Throwable th2) {
                            throw th2;
                        }
                    }
                    return w0Var;
                }
                return w0Var2;
            case 6:
                return (byte) 1;
            case 7:
                return null;
            default:
                throw new UnsupportedOperationException();
        }
    }
}
