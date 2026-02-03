package com.squareup.moshi;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.squareup.moshi.h;
import com.squareup.moshi.m;
import java.lang.reflect.Type;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Set;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class y {

    /* renamed from: a  reason: collision with root package name */
    public static final h.e f18656a = new c();

    /* renamed from: b  reason: collision with root package name */
    static final com.squareup.moshi.h f18657b = new d();

    /* renamed from: c  reason: collision with root package name */
    static final com.squareup.moshi.h f18658c = new e();

    /* renamed from: d  reason: collision with root package name */
    static final com.squareup.moshi.h f18659d = new f();

    /* renamed from: e  reason: collision with root package name */
    static final com.squareup.moshi.h f18660e = new g();

    /* renamed from: f  reason: collision with root package name */
    static final com.squareup.moshi.h f18661f = new h();

    /* renamed from: g  reason: collision with root package name */
    static final com.squareup.moshi.h f18662g = new i();

    /* renamed from: h  reason: collision with root package name */
    static final com.squareup.moshi.h f18663h = new j();

    /* renamed from: i  reason: collision with root package name */
    static final com.squareup.moshi.h f18664i = new k();

    /* renamed from: j  reason: collision with root package name */
    static final com.squareup.moshi.h f18665j = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends com.squareup.moshi.h {
        a() {
        }

        @Override // com.squareup.moshi.h
        /* renamed from: a */
        public String fromJson(com.squareup.moshi.m mVar) {
            return mVar.f1();
        }

        @Override // com.squareup.moshi.h
        /* renamed from: b */
        public void toJson(t tVar, String str) {
            tVar.x1(str);
        }

        public String toString() {
            return "JsonAdapter(String)";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static /* synthetic */ class b {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f18666a;

        static {
            int[] iArr = new int[m.c.values().length];
            f18666a = iArr;
            try {
                iArr[m.c.BEGIN_ARRAY.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f18666a[m.c.BEGIN_OBJECT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f18666a[m.c.STRING.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f18666a[m.c.NUMBER.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f18666a[m.c.BOOLEAN.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f18666a[m.c.NULL.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class c implements h.e {
        c() {
        }

        @Override // com.squareup.moshi.h.e
        public com.squareup.moshi.h create(Type type, Set set, w wVar) {
            if (!set.isEmpty()) {
                return null;
            }
            if (type == Boolean.TYPE) {
                return y.f18657b;
            }
            if (type == Byte.TYPE) {
                return y.f18658c;
            }
            if (type == Character.TYPE) {
                return y.f18659d;
            }
            if (type == Double.TYPE) {
                return y.f18660e;
            }
            if (type == Float.TYPE) {
                return y.f18661f;
            }
            if (type == Integer.TYPE) {
                return y.f18662g;
            }
            if (type == Long.TYPE) {
                return y.f18663h;
            }
            if (type == Short.TYPE) {
                return y.f18664i;
            }
            if (type == Boolean.class) {
                return y.f18657b.nullSafe();
            }
            if (type == Byte.class) {
                return y.f18658c.nullSafe();
            }
            if (type == Character.class) {
                return y.f18659d.nullSafe();
            }
            if (type == Double.class) {
                return y.f18660e.nullSafe();
            }
            if (type == Float.class) {
                return y.f18661f.nullSafe();
            }
            if (type == Integer.class) {
                return y.f18662g.nullSafe();
            }
            if (type == Long.class) {
                return y.f18663h.nullSafe();
            }
            if (type == Short.class) {
                return y.f18664i.nullSafe();
            }
            if (type == String.class) {
                return y.f18665j.nullSafe();
            }
            if (type == Object.class) {
                return new m(wVar).nullSafe();
            }
            Class g10 = a0.g(type);
            com.squareup.moshi.h d10 = tm.c.d(wVar, type, g10);
            if (d10 != null) {
                return d10;
            }
            if (!g10.isEnum()) {
                return null;
            }
            return new l(g10).nullSafe();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class d extends com.squareup.moshi.h {
        d() {
        }

        @Override // com.squareup.moshi.h
        /* renamed from: a */
        public Boolean fromJson(com.squareup.moshi.m mVar) {
            return Boolean.valueOf(mVar.l());
        }

        @Override // com.squareup.moshi.h
        /* renamed from: b */
        public void toJson(t tVar, Boolean bool) {
            tVar.y1(bool.booleanValue());
        }

        public String toString() {
            return "JsonAdapter(Boolean)";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class e extends com.squareup.moshi.h {
        e() {
        }

        @Override // com.squareup.moshi.h
        /* renamed from: a */
        public Byte fromJson(com.squareup.moshi.m mVar) {
            return Byte.valueOf((byte) y.a(mVar, "a byte", -128, SetSpanOperation.SPAN_MAX_PRIORITY));
        }

        @Override // com.squareup.moshi.h
        /* renamed from: b */
        public void toJson(t tVar, Byte b10) {
            tVar.Y0(b10.intValue() & SetSpanOperation.SPAN_MAX_PRIORITY);
        }

        public String toString() {
            return "JsonAdapter(Byte)";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class f extends com.squareup.moshi.h {
        f() {
        }

        @Override // com.squareup.moshi.h
        /* renamed from: a */
        public Character fromJson(com.squareup.moshi.m mVar) {
            String f12 = mVar.f1();
            if (f12.length() <= 1) {
                return Character.valueOf(f12.charAt(0));
            }
            throw new com.squareup.moshi.j(String.format("Expected %s but was %s at path %s", "a char", '\"' + f12 + '\"', mVar.q()));
        }

        @Override // com.squareup.moshi.h
        /* renamed from: b */
        public void toJson(t tVar, Character ch2) {
            tVar.x1(ch2.toString());
        }

        public String toString() {
            return "JsonAdapter(Character)";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class g extends com.squareup.moshi.h {
        g() {
        }

        @Override // com.squareup.moshi.h
        /* renamed from: a */
        public Double fromJson(com.squareup.moshi.m mVar) {
            return Double.valueOf(mVar.nextDouble());
        }

        @Override // com.squareup.moshi.h
        /* renamed from: b */
        public void toJson(t tVar, Double d10) {
            tVar.V0(d10.doubleValue());
        }

        public String toString() {
            return "JsonAdapter(Double)";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class h extends com.squareup.moshi.h {
        h() {
        }

        @Override // com.squareup.moshi.h
        /* renamed from: a */
        public Float fromJson(com.squareup.moshi.m mVar) {
            float nextDouble = (float) mVar.nextDouble();
            if (!mVar.h() && Float.isInfinite(nextDouble)) {
                throw new com.squareup.moshi.j("JSON forbids NaN and infinities: " + nextDouble + " at path " + mVar.q());
            }
            return Float.valueOf(nextDouble);
        }

        @Override // com.squareup.moshi.h
        /* renamed from: b */
        public void toJson(t tVar, Float f10) {
            f10.getClass();
            tVar.e1(f10);
        }

        public String toString() {
            return "JsonAdapter(Float)";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class i extends com.squareup.moshi.h {
        i() {
        }

        @Override // com.squareup.moshi.h
        /* renamed from: a */
        public Integer fromJson(com.squareup.moshi.m mVar) {
            return Integer.valueOf(mVar.nextInt());
        }

        @Override // com.squareup.moshi.h
        /* renamed from: b */
        public void toJson(t tVar, Integer num) {
            tVar.Y0(num.intValue());
        }

        public String toString() {
            return "JsonAdapter(Integer)";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class j extends com.squareup.moshi.h {
        j() {
        }

        @Override // com.squareup.moshi.h
        /* renamed from: a */
        public Long fromJson(com.squareup.moshi.m mVar) {
            return Long.valueOf(mVar.nextLong());
        }

        @Override // com.squareup.moshi.h
        /* renamed from: b */
        public void toJson(t tVar, Long l10) {
            tVar.Y0(l10.longValue());
        }

        public String toString() {
            return "JsonAdapter(Long)";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class k extends com.squareup.moshi.h {
        k() {
        }

        @Override // com.squareup.moshi.h
        /* renamed from: a */
        public Short fromJson(com.squareup.moshi.m mVar) {
            return Short.valueOf((short) y.a(mVar, "a short", -32768, 32767));
        }

        @Override // com.squareup.moshi.h
        /* renamed from: b */
        public void toJson(t tVar, Short sh2) {
            tVar.Y0(sh2.intValue());
        }

        public String toString() {
            return "JsonAdapter(Short)";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class l extends com.squareup.moshi.h {

        /* renamed from: a  reason: collision with root package name */
        private final Class f18667a;

        /* renamed from: b  reason: collision with root package name */
        private final String[] f18668b;

        /* renamed from: c  reason: collision with root package name */
        private final Enum[] f18669c;

        /* renamed from: d  reason: collision with root package name */
        private final m.b f18670d;

        l(Class cls) {
            this.f18667a = cls;
            try {
                Enum[] enumArr = (Enum[]) cls.getEnumConstants();
                this.f18669c = enumArr;
                this.f18668b = new String[enumArr.length];
                int i10 = 0;
                while (true) {
                    Enum[] enumArr2 = this.f18669c;
                    if (i10 < enumArr2.length) {
                        String name = enumArr2[i10].name();
                        this.f18668b[i10] = tm.c.n(name, cls.getField(name));
                        i10++;
                    } else {
                        this.f18670d = m.b.a(this.f18668b);
                        return;
                    }
                }
            } catch (NoSuchFieldException e10) {
                throw new AssertionError("Missing field in " + cls.getName(), e10);
            }
        }

        @Override // com.squareup.moshi.h
        /* renamed from: a */
        public Enum fromJson(com.squareup.moshi.m mVar) {
            int D0 = mVar.D0(this.f18670d);
            if (D0 != -1) {
                return this.f18669c[D0];
            }
            String q10 = mVar.q();
            String f12 = mVar.f1();
            throw new com.squareup.moshi.j("Expected one of " + Arrays.asList(this.f18668b) + " but was " + f12 + " at path " + q10);
        }

        @Override // com.squareup.moshi.h
        /* renamed from: b */
        public void toJson(t tVar, Enum r32) {
            tVar.x1(this.f18668b[r32.ordinal()]);
        }

        public String toString() {
            return "JsonAdapter(" + this.f18667a.getName() + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class m extends com.squareup.moshi.h {

        /* renamed from: a  reason: collision with root package name */
        private final w f18671a;

        /* renamed from: b  reason: collision with root package name */
        private final com.squareup.moshi.h f18672b;

        /* renamed from: c  reason: collision with root package name */
        private final com.squareup.moshi.h f18673c;

        /* renamed from: d  reason: collision with root package name */
        private final com.squareup.moshi.h f18674d;

        /* renamed from: e  reason: collision with root package name */
        private final com.squareup.moshi.h f18675e;

        /* renamed from: f  reason: collision with root package name */
        private final com.squareup.moshi.h f18676f;

        m(w wVar) {
            this.f18671a = wVar;
            this.f18672b = wVar.c(List.class);
            this.f18673c = wVar.c(Map.class);
            this.f18674d = wVar.c(String.class);
            this.f18675e = wVar.c(Double.class);
            this.f18676f = wVar.c(Boolean.class);
        }

        private Class a(Class cls) {
            if (Map.class.isAssignableFrom(cls)) {
                return Map.class;
            }
            if (Collection.class.isAssignableFrom(cls)) {
                return Collection.class;
            }
            return cls;
        }

        @Override // com.squareup.moshi.h
        public Object fromJson(com.squareup.moshi.m mVar) {
            switch (b.f18666a[mVar.E().ordinal()]) {
                case 1:
                    return this.f18672b.fromJson(mVar);
                case 2:
                    return this.f18673c.fromJson(mVar);
                case 3:
                    return this.f18674d.fromJson(mVar);
                case 4:
                    return this.f18675e.fromJson(mVar);
                case 5:
                    return this.f18676f.fromJson(mVar);
                case 6:
                    return mVar.n();
                default:
                    throw new IllegalStateException("Expected a value but was " + mVar.E() + " at path " + mVar.q());
            }
        }

        @Override // com.squareup.moshi.h
        public void toJson(t tVar, Object obj) {
            Class<?> cls = obj.getClass();
            if (cls == Object.class) {
                tVar.l();
                tVar.E();
                return;
            }
            this.f18671a.e(a(cls), tm.c.f49933a).toJson(tVar, obj);
        }

        public String toString() {
            return "JsonAdapter(Object)";
        }
    }

    static int a(com.squareup.moshi.m mVar, String str, int i10, int i11) {
        int nextInt = mVar.nextInt();
        if (nextInt >= i10 && nextInt <= i11) {
            return nextInt;
        }
        throw new com.squareup.moshi.j(String.format("Expected %s but was %s at path %s", str, Integer.valueOf(nextInt), mVar.q()));
    }
}
