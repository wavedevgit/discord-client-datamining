package kt;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.MutablePropertyReference1Impl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class g0 {

    /* renamed from: a  reason: collision with root package name */
    public static final g0 f35189a = new g0();

    /* renamed from: b  reason: collision with root package name */
    private static final c f35190b;

    /* renamed from: c  reason: collision with root package name */
    private static final mt.b0 f35191c;

    /* renamed from: d  reason: collision with root package name */
    private static final mt.b0 f35192d;

    /* renamed from: e  reason: collision with root package name */
    private static final mt.b0 f35193e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements mt.m {

        /* renamed from: a  reason: collision with root package name */
        private final mt.x f35196a = new mt.x(new MutablePropertyReference1Impl() { // from class: kt.g0.c.a
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

        @Override // mt.m
        /* renamed from: b */
        public mt.x isNegative() {
            return this.f35196a;
        }

        @Override // mt.m
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
        f35190b = cVar;
        f35191c = new mt.b0(new mt.x(new MutablePropertyReference1Impl() { // from class: kt.g0.d
            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.KProperty1
            public Object get(Object obj) {
                return ((n0) obj).b();
            }

            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.g
            public void set(Object obj, Object obj2) {
                ((n0) obj).p((Integer) obj2);
            }
        }), 0, 18, null, 0, cVar, 8, null);
        f35192d = new mt.b0(new mt.x(new MutablePropertyReference1Impl() { // from class: kt.g0.a
            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.KProperty1
            public Object get(Object obj) {
                return ((n0) obj).c();
            }

            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.g
            public void set(Object obj, Object obj2) {
                ((n0) obj).m((Integer) obj2);
            }
        }), 0, 59, null, 0, cVar, 8, null);
        f35193e = new mt.b0(new mt.x(new MutablePropertyReference1Impl() { // from class: kt.g0.b
            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.KProperty1
            public Object get(Object obj) {
                return ((n0) obj).w();
            }

            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.g
            public void set(Object obj, Object obj2) {
                ((n0) obj).q((Integer) obj2);
            }
        }), 0, 59, null, 0, cVar, 8, null);
    }

    private g0() {
    }

    public final mt.b0 a() {
        return f35192d;
    }

    public final mt.b0 b() {
        return f35193e;
    }

    public final mt.b0 c() {
        return f35191c;
    }
}
