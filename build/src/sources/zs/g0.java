package zs;

import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.MutablePropertyReference1Impl;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class g0 {

    /* renamed from: a  reason: collision with root package name */
    public static final g0 f56479a = new g0();

    /* renamed from: b  reason: collision with root package name */
    private static final c f56480b;

    /* renamed from: c  reason: collision with root package name */
    private static final bt.b0 f56481c;

    /* renamed from: d  reason: collision with root package name */
    private static final bt.b0 f56482d;

    /* renamed from: e  reason: collision with root package name */
    private static final bt.b0 f56483e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c implements bt.m {

        /* renamed from: a  reason: collision with root package name */
        private final bt.x f56486a = new bt.x(new MutablePropertyReference1Impl() { // from class: zs.g0.c.a
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

        @Override // bt.m
        /* renamed from: b */
        public bt.x isNegative() {
            return this.f56486a;
        }

        @Override // bt.m
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
        f56480b = cVar;
        f56481c = new bt.b0(new bt.x(new MutablePropertyReference1Impl() { // from class: zs.g0.d
            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.KProperty1
            public Object get(Object obj) {
                return ((n0) obj).b();
            }

            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.g
            public void set(Object obj, Object obj2) {
                ((n0) obj).o((Integer) obj2);
            }
        }), 0, 18, null, 0, cVar, 8, null);
        f56482d = new bt.b0(new bt.x(new MutablePropertyReference1Impl() { // from class: zs.g0.a
            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.KProperty1
            public Object get(Object obj) {
                return ((n0) obj).j();
            }

            @Override // kotlin.jvm.internal.MutablePropertyReference1Impl, kotlin.jvm.internal.MutablePropertyReference1, kotlin.reflect.g
            public void set(Object obj, Object obj2) {
                ((n0) obj).l((Integer) obj2);
            }
        }), 0, 59, null, 0, cVar, 8, null);
        f56483e = new bt.b0(new bt.x(new MutablePropertyReference1Impl() { // from class: zs.g0.b
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

    public final bt.b0 a() {
        return f56482d;
    }

    public final bt.b0 b() {
        return f56483e;
    }

    public final bt.b0 c() {
        return f56481c;
    }
}
