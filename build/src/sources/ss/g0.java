package ss;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.MutablePropertyReference1Impl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class g0 {

    /* renamed from: a  reason: collision with root package name */
    public static final g0 f49286a = new g0();

    /* renamed from: b  reason: collision with root package name */
    private static final c f49287b;

    /* renamed from: c  reason: collision with root package name */
    private static final us.b0 f49288c;

    /* renamed from: d  reason: collision with root package name */
    private static final us.b0 f49289d;

    /* renamed from: e  reason: collision with root package name */
    private static final us.b0 f49290e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements us.m {

        /* renamed from: a  reason: collision with root package name */
        private final us.x f49293a = new us.x(new MutablePropertyReference1Impl() { // from class: ss.g0.c.a
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

        @Override // us.m
        /* renamed from: b */
        public us.x isNegative() {
            return this.f49293a;
        }

        @Override // us.m
        /* renamed from: c */
        public boolean a(n0 obj) {
            int i10;
            int i11;
            int i12;
            Intrinsics.checkNotNullParameter(obj, "obj");
            Integer c10 = obj.c();
            if (c10 != null) {
                i10 = c10.intValue();
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
        f49287b = cVar;
        f49288c = new us.b0(new us.x(new MutablePropertyReference1Impl() { // from class: ss.g0.d
            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.KProperty1
            public Object get(Object obj) {
                return ((n0) obj).c();
            }

            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.g
            public void set(Object obj, Object obj2) {
                ((n0) obj).p((Integer) obj2);
            }
        }), 0, 18, null, 0, cVar, 8, null);
        f49289d = new us.b0(new us.x(new MutablePropertyReference1Impl() { // from class: ss.g0.a
            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.KProperty1
            public Object get(Object obj) {
                return ((n0) obj).k();
            }

            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.g
            public void set(Object obj, Object obj2) {
                ((n0) obj).m((Integer) obj2);
            }
        }), 0, 59, null, 0, cVar, 8, null);
        f49290e = new us.b0(new us.x(new MutablePropertyReference1Impl() { // from class: ss.g0.b
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

    public final us.b0 a() {
        return f49289d;
    }

    public final us.b0 b() {
        return f49290e;
    }

    public final us.b0 c() {
        return f49288c;
    }
}
