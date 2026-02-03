package us;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.MutablePropertyReference1Impl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class g0 {

    /* renamed from: a  reason: collision with root package name */
    public static final g0 f50882a = new g0();

    /* renamed from: b  reason: collision with root package name */
    private static final c f50883b;

    /* renamed from: c  reason: collision with root package name */
    private static final ws.b0 f50884c;

    /* renamed from: d  reason: collision with root package name */
    private static final ws.b0 f50885d;

    /* renamed from: e  reason: collision with root package name */
    private static final ws.b0 f50886e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements ws.m {

        /* renamed from: a  reason: collision with root package name */
        private final ws.x f50889a = new ws.x(new MutablePropertyReference1Impl() { // from class: us.g0.c.a
            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.KProperty1
            public Object get(Object obj) {
                return ((n0) obj).isNegative();
            }

            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.g
            public void set(Object obj, Object obj2) {
                ((n0) obj).l((Boolean) obj2);
            }
        });

        c() {
        }

        @Override // ws.m
        /* renamed from: b */
        public ws.x isNegative() {
            return this.f50889a;
        }

        @Override // ws.m
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
        f50883b = cVar;
        f50884c = new ws.b0(new ws.x(new MutablePropertyReference1Impl() { // from class: us.g0.d
            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.KProperty1
            public Object get(Object obj) {
                return ((n0) obj).b();
            }

            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.g
            public void set(Object obj, Object obj2) {
                ((n0) obj).q((Integer) obj2);
            }
        }), 0, 18, null, 0, cVar, 8, null);
        f50885d = new ws.b0(new ws.x(new MutablePropertyReference1Impl() { // from class: us.g0.a
            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.KProperty1
            public Object get(Object obj) {
                return ((n0) obj).k();
            }

            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.g
            public void set(Object obj, Object obj2) {
                ((n0) obj).m((Integer) obj2);
            }
        }), 0, 59, null, 0, cVar, 8, null);
        f50886e = new ws.b0(new ws.x(new MutablePropertyReference1Impl() { // from class: us.g0.b
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

    public final ws.b0 a() {
        return f50885d;
    }

    public final ws.b0 b() {
        return f50886e;
    }

    public final ws.b0 c() {
        return f50884c;
    }
}
