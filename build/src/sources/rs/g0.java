package rs;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.MutablePropertyReference1Impl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class g0 {

    /* renamed from: a  reason: collision with root package name */
    public static final g0 f48489a = new g0();

    /* renamed from: b  reason: collision with root package name */
    private static final c f48490b;

    /* renamed from: c  reason: collision with root package name */
    private static final ts.b0 f48491c;

    /* renamed from: d  reason: collision with root package name */
    private static final ts.b0 f48492d;

    /* renamed from: e  reason: collision with root package name */
    private static final ts.b0 f48493e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements ts.m {

        /* renamed from: a  reason: collision with root package name */
        private final ts.x f48496a = new ts.x(new MutablePropertyReference1Impl() { // from class: rs.g0.c.a
            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.KProperty1
            public Object get(Object obj) {
                return ((n0) obj).isNegative();
            }

            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.g
            public void set(Object obj, Object obj2) {
                ((n0) obj).m((Boolean) obj2);
            }
        });

        c() {
        }

        @Override // ts.m
        /* renamed from: b */
        public ts.x isNegative() {
            return this.f48496a;
        }

        @Override // ts.m
        /* renamed from: c */
        public boolean a(n0 obj) {
            int i10;
            int i11;
            int i12;
            Intrinsics.checkNotNullParameter(obj, "obj");
            Integer b10 = obj.b();
            if (b10 != null) {
                i10 = b10.intValue();
            } else {
                i10 = 0;
            }
            if (i10 == 0) {
                Integer k10 = obj.k();
                if (k10 != null) {
                    i11 = k10.intValue();
                } else {
                    i11 = 0;
                }
                if (i11 == 0) {
                    Integer w10 = obj.w();
                    if (w10 != null) {
                        i12 = w10.intValue();
                    } else {
                        i12 = 0;
                    }
                    if (i12 == 0) {
                        return true;
                    }
                }
            }
            return false;
        }
    }

    static {
        c cVar = new c();
        f48490b = cVar;
        f48491c = new ts.b0(new ts.x(new MutablePropertyReference1Impl() { // from class: rs.g0.d
            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.KProperty1
            public Object get(Object obj) {
                return ((n0) obj).b();
            }

            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.g
            public void set(Object obj, Object obj2) {
                ((n0) obj).q((Integer) obj2);
            }
        }), 0, 18, null, 0, cVar, 8, null);
        f48492d = new ts.b0(new ts.x(new MutablePropertyReference1Impl() { // from class: rs.g0.a
            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.KProperty1
            public Object get(Object obj) {
                return ((n0) obj).k();
            }

            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.g
            public void set(Object obj, Object obj2) {
                ((n0) obj).n((Integer) obj2);
            }
        }), 0, 59, null, 0, cVar, 8, null);
        f48493e = new ts.b0(new ts.x(new MutablePropertyReference1Impl() { // from class: rs.g0.b
            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.KProperty1
            public Object get(Object obj) {
                return ((n0) obj).w();
            }

            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.g
            public void set(Object obj, Object obj2) {
                ((n0) obj).r((Integer) obj2);
            }
        }), 0, 59, null, 0, cVar, 8, null);
    }

    private g0() {
    }

    public final ts.b0 a() {
        return f48492d;
    }

    public final ts.b0 b() {
        return f48493e;
    }

    public final ts.b0 c() {
        return f48491c;
    }
}
