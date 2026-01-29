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
    public static final h.e f19023a = new c();

    /* renamed from: b  reason: collision with root package name */
    static final com.squareup.moshi.h f19024b = new d();

    /* renamed from: c  reason: collision with root package name */
    static final com.squareup.moshi.h f19025c = new e();

    /* renamed from: d  reason: collision with root package name */
    static final com.squareup.moshi.h f19026d = new f();

    /* renamed from: e  reason: collision with root package name */
    static final com.squareup.moshi.h f19027e = new g();

    /* renamed from: f  reason: collision with root package name */
    static final com.squareup.moshi.h f19028f = new h();

    /* renamed from: g  reason: collision with root package name */
    static final com.squareup.moshi.h f19029g = new i();

    /* renamed from: h  reason: collision with root package name */
    static final com.squareup.moshi.h f19030h = new j();

    /* renamed from: i  reason: collision with root package name */
    static final com.squareup.moshi.h f19031i = new k();

    /* renamed from: j  reason: collision with root package name */
    static final com.squareup.moshi.h f19032j = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a extends com.squareup.moshi.h {
        a() {
        }

        @Override // com.squareup.moshi.h
        /* renamed from: a */
        public String fromJson(com.squareup.moshi.m mVar) {
            return mVar.e1();
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
        static final /* synthetic */ int[] f19033a;

        static {
            int[] iArr = new int[m.c.values().length];
            f19033a = iArr;
            try {
                iArr[m.c.BEGIN_ARRAY.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f19033a[m.c.BEGIN_OBJECT.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f19033a[m.c.STRING.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f19033a[m.c.NUMBER.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f19033a[m.c.BOOLEAN.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f19033a[m.c.NULL.ordinal()] = 6;
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
                return y.f19024b;
            }
            if (type == Byte.TYPE) {
                return y.f19025c;
            }
            if (type == Character.TYPE) {
                return y.f19026d;
            }
            if (type == Double.TYPE) {
                return y.f19027e;
            }
            if (type == Float.TYPE) {
                return y.f19028f;
            }
            if (type == Integer.TYPE) {
                return y.f19029g;
            }
            if (type == Long.TYPE) {
                return y.f19030h;
            }
            if (type == Short.TYPE) {
                return y.f19031i;
            }
            if (type == Boolean.class) {
                return y.f19024b.nullSafe();
            }
            if (type == Byte.class) {
                return y.f19025c.nullSafe();
            }
            if (type == Character.class) {
                return y.f19026d.nullSafe();
            }
            if (type == Double.class) {
                return y.f19027e.nullSafe();
            }
            if (type == Float.class) {
                return y.f19028f.nullSafe();
            }
            if (type == Integer.class) {
                return y.f19029g.nullSafe();
            }
            if (type == Long.class) {
                return y.f19030h.nullSafe();
            }
            if (type == Short.class) {
                return y.f19031i.nullSafe();
            }
            if (type == String.class) {
                return y.f19032j.nullSafe();
            }
            if (type == Object.class) {
                return new m(wVar).nullSafe();
            }
            Class g10 = a0.g(type);
            com.squareup.moshi.h d10 = sm.c.d(wVar, type, g10);
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
            tVar.X0(b10.intValue() & SetSpanOperation.SPAN_MAX_PRIORITY);
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
            String e12 = mVar.e1();
            if (e12.length() <= 1) {
                return Character.valueOf(e12.charAt(0));
            }
            throw new com.squareup.moshi.j(String.format("Expected %s but was %s at path %s", "a char", '\"' + e12 + '\"', mVar.q()));
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
            tVar.U0(d10.doubleValue());
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
            tVar.d1(f10);
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
            tVar.X0(num.intValue());
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
            tVar.X0(l10.longValue());
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
            tVar.X0(sh2.intValue());
        }

        public String toString() {
            return "JsonAdapter(Short)";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class l extends com.squareup.moshi.h {

        /* renamed from: a  reason: collision with root package name */
        private final Class f19034a;

        /* renamed from: b  reason: collision with root package name */
        private final String[] f19035b;

        /* renamed from: c  reason: collision with root package name */
        private final Enum[] f19036c;

        /* renamed from: d  reason: collision with root package name */
        private final m.b f19037d;

        l(Class cls) {
            this.f19034a = cls;
            try {
                Enum[] enumArr = (Enum[]) cls.getEnumConstants();
                this.f19036c = enumArr;
                this.f19035b = new String[enumArr.length];
                int i10 = 0;
                while (true) {
                    Enum[] enumArr2 = this.f19036c;
                    if (i10 < enumArr2.length) {
                        String name = enumArr2[i10].name();
                        this.f19035b[i10] = sm.c.n(name, cls.getField(name));
                        i10++;
                    } else {
                        this.f19037d = m.b.a(this.f19035b);
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
            int C0 = mVar.C0(this.f19037d);
            if (C0 != -1) {
                return this.f19036c[C0];
            }
            String q10 = mVar.q();
            String e12 = mVar.e1();
            throw new com.squareup.moshi.j("Expected one of " + Arrays.asList(this.f19035b) + " but was " + e12 + " at path " + q10);
        }

        @Override // com.squareup.moshi.h
        /* renamed from: b */
        public void toJson(t tVar, Enum r32) {
            tVar.x1(this.f19035b[r32.ordinal()]);
        }

        public String toString() {
            return "JsonAdapter(" + this.f19034a.getName() + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class m extends com.squareup.moshi.h {

        /* renamed from: a  reason: collision with root package name */
        private final w f19038a;

        /* renamed from: b  reason: collision with root package name */
        private final com.squareup.moshi.h f19039b;

        /* renamed from: c  reason: collision with root package name */
        private final com.squareup.moshi.h f19040c;

        /* renamed from: d  reason: collision with root package name */
        private final com.squareup.moshi.h f19041d;

        /* renamed from: e  reason: collision with root package name */
        private final com.squareup.moshi.h f19042e;

        /* renamed from: f  reason: collision with root package name */
        private final com.squareup.moshi.h f19043f;

        m(w wVar) {
            this.f19038a = wVar;
            this.f19039b = wVar.c(List.class);
            this.f19040c = wVar.c(Map.class);
            this.f19041d = wVar.c(String.class);
            this.f19042e = wVar.c(Double.class);
            this.f19043f = wVar.c(Boolean.class);
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
            switch (b.f19033a[mVar.E().ordinal()]) {
                case 1:
                    return this.f19039b.fromJson(mVar);
                case 2:
                    return this.f19040c.fromJson(mVar);
                case 3:
                    return this.f19041d.fromJson(mVar);
                case 4:
                    return this.f19042e.fromJson(mVar);
                case 5:
                    return this.f19043f.fromJson(mVar);
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
            this.f19038a.e(a(cls), sm.c.f49079a).toJson(tVar, obj);
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
