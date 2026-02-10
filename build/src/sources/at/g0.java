package at;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.MutablePropertyReference1Impl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class g0 {

    /* renamed from: a  reason: collision with root package name */
    public static final g0 f6057a = new g0();

    /* renamed from: b  reason: collision with root package name */
    private static final c f6058b;

    /* renamed from: c  reason: collision with root package name */
    private static final ct.b0 f6059c;

    /* renamed from: d  reason: collision with root package name */
    private static final ct.b0 f6060d;

    /* renamed from: e  reason: collision with root package name */
    private static final ct.b0 f6061e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements ct.m {

        /* renamed from: a  reason: collision with root package name */
        private final ct.x f6064a = new ct.x(new MutablePropertyReference1Impl() { // from class: at.g0.c.a
            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.KProperty1
            public Object get(Object obj) {
                return ((n0) obj).isNegative();
            }

            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.g
            public void set(Object obj, Object obj2) {
                ((n0) obj).k((Boolean) obj2);
            }
        });

        c() {
        }

        @Override // ct.m
        /* renamed from: b */
        public ct.x isNegative() {
            return this.f6064a;
        }

        @Override // ct.m
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
                Integer c10 = obj.c();
                if (c10 != null) {
                    i11 = c10.intValue();
                } else {
                    i11 = 0;
                }
                if (i11 == 0) {
                    Integer v10 = obj.v();
                    if (v10 != null) {
                        i12 = v10.intValue();
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
        f6058b = cVar;
        f6059c = new ct.b0(new ct.x(new MutablePropertyReference1Impl() { // from class: at.g0.d
            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.KProperty1
            public Object get(Object obj) {
                return ((n0) obj).b();
            }

            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.g
            public void set(Object obj, Object obj2) {
                ((n0) obj).o((Integer) obj2);
            }
        }), 0, 18, null, 0, cVar, 8, null);
        f6060d = new ct.b0(new ct.x(new MutablePropertyReference1Impl() { // from class: at.g0.a
            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.KProperty1
            public Object get(Object obj) {
                return ((n0) obj).c();
            }

            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.g
            public void set(Object obj, Object obj2) {
                ((n0) obj).l((Integer) obj2);
            }
        }), 0, 59, null, 0, cVar, 8, null);
        f6061e = new ct.b0(new ct.x(new MutablePropertyReference1Impl() { // from class: at.g0.b
            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.KProperty1
            public Object get(Object obj) {
                return ((n0) obj).v();
            }

            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.g
            public void set(Object obj, Object obj2) {
                ((n0) obj).p((Integer) obj2);
            }
        }), 0, 59, null, 0, cVar, 8, null);
    }

    private g0() {
    }

    public final ct.b0 a() {
        return f6060d;
    }

    public final ct.b0 b() {
        return f6061e;
    }

    public final ct.b0 c() {
        return f6059c;
    }
}
