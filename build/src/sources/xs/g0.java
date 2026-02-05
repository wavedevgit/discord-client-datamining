package xs;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.MutablePropertyReference1Impl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class g0 {

    /* renamed from: a  reason: collision with root package name */
    public static final g0 f54118a = new g0();

    /* renamed from: b  reason: collision with root package name */
    private static final c f54119b;

    /* renamed from: c  reason: collision with root package name */
    private static final zs.b0 f54120c;

    /* renamed from: d  reason: collision with root package name */
    private static final zs.b0 f54121d;

    /* renamed from: e  reason: collision with root package name */
    private static final zs.b0 f54122e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements zs.m {

        /* renamed from: a  reason: collision with root package name */
        private final zs.x f54125a = new zs.x(new MutablePropertyReference1Impl() { // from class: xs.g0.c.a
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

        @Override // zs.m
        /* renamed from: b */
        public zs.x isNegative() {
            return this.f54125a;
        }

        @Override // zs.m
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
                Integer j10 = obj.j();
                if (j10 != null) {
                    i11 = j10.intValue();
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
        f54119b = cVar;
        f54120c = new zs.b0(new zs.x(new MutablePropertyReference1Impl() { // from class: xs.g0.d
            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.KProperty1
            public Object get(Object obj) {
                return ((n0) obj).b();
            }

            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.g
            public void set(Object obj, Object obj2) {
                ((n0) obj).p((Integer) obj2);
            }
        }), 0, 18, null, 0, cVar, 8, null);
        f54121d = new zs.b0(new zs.x(new MutablePropertyReference1Impl() { // from class: xs.g0.a
            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.KProperty1
            public Object get(Object obj) {
                return ((n0) obj).j();
            }

            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.g
            public void set(Object obj, Object obj2) {
                ((n0) obj).m((Integer) obj2);
            }
        }), 0, 59, null, 0, cVar, 8, null);
        f54122e = new zs.b0(new zs.x(new MutablePropertyReference1Impl() { // from class: xs.g0.b
            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.KProperty1
            public Object get(Object obj) {
                return ((n0) obj).v();
            }

            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.g
            public void set(Object obj, Object obj2) {
                ((n0) obj).q((Integer) obj2);
            }
        }), 0, 59, null, 0, cVar, 8, null);
    }

    private g0() {
    }

    public final zs.b0 a() {
        return f54121d;
    }

    public final zs.b0 b() {
        return f54122e;
    }

    public final zs.b0 c() {
        return f54120c;
    }
}
