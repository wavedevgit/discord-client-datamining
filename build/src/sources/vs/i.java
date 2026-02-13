package vs;

import java.lang.reflect.Constructor;
import java.lang.reflect.Field;
import java.lang.reflect.Member;
import java.lang.reflect.Method;
import java.lang.reflect.Modifier;
import java.lang.reflect.Type;
import java.util.Arrays;
import java.util.List;
import kotlin.Unit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SpreadBuilder;
import vs.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class i implements vs.h {

    /* renamed from: e  reason: collision with root package name */
    public static final d f52404e = new d(null);

    /* renamed from: a  reason: collision with root package name */
    private final Member f52405a;

    /* renamed from: b  reason: collision with root package name */
    private final Type f52406b;

    /* renamed from: c  reason: collision with root package name */
    private final Class f52407c;

    /* renamed from: d  reason: collision with root package name */
    private final List f52408d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a extends i implements vs.g {

        /* renamed from: f  reason: collision with root package name */
        private final Object f52409f;

        /* JADX WARN: Illegal instructions before constructor call */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public a(java.lang.reflect.Constructor r8, java.lang.Object r9) {
            /*
                r7 = this;
                java.lang.String r0 = "constructor"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r8, r0)
                java.lang.Class r3 = r8.getDeclaringClass()
                java.lang.String r0 = "getDeclaringClass(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r3, r0)
                java.lang.reflect.Type[] r0 = r8.getGenericParameterTypes()
                java.lang.String r1 = "getGenericParameterTypes(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r0, r1)
                int r1 = r0.length
                r2 = 2
                if (r1 > r2) goto L1f
                r0 = 0
                java.lang.reflect.Type[] r0 = new java.lang.reflect.Type[r0]
                goto L26
            L1f:
                int r1 = r0.length
                r2 = 1
                int r1 = r1 - r2
                java.lang.Object[] r0 = kotlin.collections.i.r(r0, r2, r1)
            L26:
                r5 = r0
                java.lang.reflect.Type[] r5 = (java.lang.reflect.Type[]) r5
                r6 = 0
                r4 = 0
                r1 = r7
                r2 = r8
                r1.<init>(r2, r3, r4, r5, r6)
                r1.f52409f = r9
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: vs.i.a.<init>(java.lang.reflect.Constructor, java.lang.Object):void");
        }

        @Override // vs.h
        public Object call(Object[] args) {
            Intrinsics.checkNotNullParameter(args, "args");
            d(args);
            SpreadBuilder spreadBuilder = new SpreadBuilder(3);
            spreadBuilder.add(this.f52409f);
            spreadBuilder.addSpread(args);
            spreadBuilder.add(null);
            return ((Constructor) b()).newInstance(spreadBuilder.toArray(new Object[spreadBuilder.size()]));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends i {
        /* JADX WARN: Illegal instructions before constructor call */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public b(java.lang.reflect.Constructor r8) {
            /*
                r7 = this;
                java.lang.String r0 = "constructor"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r8, r0)
                java.lang.Class r3 = r8.getDeclaringClass()
                java.lang.String r0 = "getDeclaringClass(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r3, r0)
                java.lang.reflect.Type[] r0 = r8.getGenericParameterTypes()
                java.lang.String r1 = "getGenericParameterTypes(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r0, r1)
                int r1 = r0.length
                r2 = 0
                r4 = 1
                if (r1 > r4) goto L1f
                java.lang.reflect.Type[] r0 = new java.lang.reflect.Type[r2]
                goto L25
            L1f:
                int r1 = r0.length
                int r1 = r1 - r4
                java.lang.Object[] r0 = kotlin.collections.i.r(r0, r2, r1)
            L25:
                r5 = r0
                java.lang.reflect.Type[] r5 = (java.lang.reflect.Type[]) r5
                r6 = 0
                r4 = 0
                r1 = r7
                r2 = r8
                r1.<init>(r2, r3, r4, r5, r6)
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: vs.i.b.<init>(java.lang.reflect.Constructor):void");
        }

        @Override // vs.h
        public Object call(Object[] args) {
            Intrinsics.checkNotNullParameter(args, "args");
            d(args);
            SpreadBuilder spreadBuilder = new SpreadBuilder(2);
            spreadBuilder.addSpread(args);
            spreadBuilder.add(null);
            return ((Constructor) b()).newInstance(spreadBuilder.toArray(new Object[spreadBuilder.size()]));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends i implements vs.g {

        /* renamed from: f  reason: collision with root package name */
        private final Object f52410f;

        /* JADX WARN: Illegal instructions before constructor call */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public c(java.lang.reflect.Constructor r8, java.lang.Object r9) {
            /*
                r7 = this;
                java.lang.String r0 = "constructor"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r8, r0)
                java.lang.Class r3 = r8.getDeclaringClass()
                java.lang.String r0 = "getDeclaringClass(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r3, r0)
                java.lang.reflect.Type[] r5 = r8.getGenericParameterTypes()
                java.lang.String r0 = "getGenericParameterTypes(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r5, r0)
                r6 = 0
                r4 = 0
                r1 = r7
                r2 = r8
                r1.<init>(r2, r3, r4, r5, r6)
                r1.f52410f = r9
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: vs.i.c.<init>(java.lang.reflect.Constructor, java.lang.Object):void");
        }

        @Override // vs.h
        public Object call(Object[] args) {
            Intrinsics.checkNotNullParameter(args, "args");
            d(args);
            SpreadBuilder spreadBuilder = new SpreadBuilder(2);
            spreadBuilder.add(this.f52410f);
            spreadBuilder.addSpread(args);
            return ((Constructor) b()).newInstance(spreadBuilder.toArray(new Object[spreadBuilder.size()]));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class d {
        public /* synthetic */ d(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private d() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class e extends i {
        /* JADX WARN: Illegal instructions before constructor call */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public e(java.lang.reflect.Constructor r8) {
            /*
                r7 = this;
                java.lang.String r0 = "constructor"
                kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r8, r0)
                java.lang.Class r3 = r8.getDeclaringClass()
                java.lang.String r0 = "getDeclaringClass(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r3, r0)
                java.lang.Class r0 = r8.getDeclaringClass()
                java.lang.Class r1 = r0.getDeclaringClass()
                if (r1 == 0) goto L24
                int r0 = r0.getModifiers()
                boolean r0 = java.lang.reflect.Modifier.isStatic(r0)
                if (r0 != 0) goto L24
            L22:
                r4 = r1
                goto L26
            L24:
                r1 = 0
                goto L22
            L26:
                java.lang.reflect.Type[] r5 = r8.getGenericParameterTypes()
                java.lang.String r0 = "getGenericParameterTypes(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r5, r0)
                r6 = 0
                r1 = r7
                r2 = r8
                r1.<init>(r2, r3, r4, r5, r6)
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: vs.i.e.<init>(java.lang.reflect.Constructor):void");
        }

        @Override // vs.h
        public Object call(Object[] args) {
            Intrinsics.checkNotNullParameter(args, "args");
            d(args);
            return ((Constructor) b()).newInstance(Arrays.copyOf(args, args.length));
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class f extends i {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends f implements vs.g {

            /* renamed from: f  reason: collision with root package name */
            private final Object f52411f;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(Field field, Object obj) {
                super(field, false, null);
                Intrinsics.checkNotNullParameter(field, "field");
                this.f52411f = obj;
            }

            @Override // vs.i.f, vs.h
            public Object call(Object[] args) {
                Intrinsics.checkNotNullParameter(args, "args");
                d(args);
                return ((Field) b()).get(this.f52411f);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class b extends f implements vs.g {
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(Field field) {
                super(field, false, null);
                Intrinsics.checkNotNullParameter(field, "field");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class c extends f {
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(Field field) {
                super(field, true, null);
                Intrinsics.checkNotNullParameter(field, "field");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class d extends f {
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public d(Field field) {
                super(field, true, null);
                Intrinsics.checkNotNullParameter(field, "field");
            }

            @Override // vs.i
            public void d(Object[] args) {
                Intrinsics.checkNotNullParameter(args, "args");
                super.d(args);
                e(kotlin.collections.i.V(args));
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class e extends f {
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public e(Field field) {
                super(field, false, null);
                Intrinsics.checkNotNullParameter(field, "field");
            }
        }

        public /* synthetic */ f(Field field, boolean z10, DefaultConstructorMarker defaultConstructorMarker) {
            this(field, z10);
        }

        @Override // vs.h
        public Object call(Object[] args) {
            Object obj;
            Intrinsics.checkNotNullParameter(args, "args");
            d(args);
            Field field = (Field) b();
            if (f() != null) {
                obj = kotlin.collections.i.U(args);
            } else {
                obj = null;
            }
            return field.get(obj);
        }

        /* JADX WARN: Illegal instructions before constructor call */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private f(java.lang.reflect.Field r7, boolean r8) {
            /*
                r6 = this;
                java.lang.reflect.Type r2 = r7.getGenericType()
                java.lang.String r0 = "getGenericType(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r2, r0)
                if (r8 == 0) goto L11
                java.lang.Class r8 = r7.getDeclaringClass()
            Lf:
                r3 = r8
                goto L13
            L11:
                r8 = 0
                goto Lf
            L13:
                r8 = 0
                java.lang.reflect.Type[] r4 = new java.lang.reflect.Type[r8]
                r5 = 0
                r0 = r6
                r1 = r7
                r0.<init>(r1, r2, r3, r4, r5)
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: vs.i.f.<init>(java.lang.reflect.Field, boolean):void");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class g extends i {

        /* renamed from: f  reason: collision with root package name */
        private final boolean f52412f;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends g implements vs.g {

            /* renamed from: g  reason: collision with root package name */
            private final Object f52413g;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(Field field, boolean z10, Object obj) {
                super(field, z10, false, null);
                Intrinsics.checkNotNullParameter(field, "field");
                this.f52413g = obj;
            }

            @Override // vs.i.g, vs.h
            public Object call(Object[] args) {
                Intrinsics.checkNotNullParameter(args, "args");
                d(args);
                ((Field) b()).set(this.f52413g, kotlin.collections.i.U(args));
                return Unit.f32556a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class b extends g implements vs.g {
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(Field field, boolean z10) {
                super(field, z10, false, null);
                Intrinsics.checkNotNullParameter(field, "field");
            }

            @Override // vs.i.g, vs.h
            public Object call(Object[] args) {
                Intrinsics.checkNotNullParameter(args, "args");
                d(args);
                ((Field) b()).set(null, kotlin.collections.i.w0(args));
                return Unit.f32556a;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class c extends g {
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public c(Field field, boolean z10) {
                super(field, z10, true, null);
                Intrinsics.checkNotNullParameter(field, "field");
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class d extends g {
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public d(Field field, boolean z10) {
                super(field, z10, true, null);
                Intrinsics.checkNotNullParameter(field, "field");
            }

            @Override // vs.i.g, vs.i
            public void d(Object[] args) {
                Intrinsics.checkNotNullParameter(args, "args");
                super.d(args);
                e(kotlin.collections.i.V(args));
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class e extends g {
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public e(Field field, boolean z10) {
                super(field, z10, false, null);
                Intrinsics.checkNotNullParameter(field, "field");
            }
        }

        public /* synthetic */ g(Field field, boolean z10, boolean z11, DefaultConstructorMarker defaultConstructorMarker) {
            this(field, z10, z11);
        }

        @Override // vs.h
        public Object call(Object[] args) {
            Object obj;
            Intrinsics.checkNotNullParameter(args, "args");
            d(args);
            Field field = (Field) b();
            if (f() != null) {
                obj = kotlin.collections.i.U(args);
            } else {
                obj = null;
            }
            field.set(obj, kotlin.collections.i.w0(args));
            return Unit.f32556a;
        }

        @Override // vs.i
        public void d(Object[] args) {
            Intrinsics.checkNotNullParameter(args, "args");
            super.d(args);
            if (this.f52412f && kotlin.collections.i.w0(args) == null) {
                throw new IllegalArgumentException("null is not allowed as a value for this property.");
            }
        }

        /* JADX WARN: Illegal instructions before constructor call */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private g(java.lang.reflect.Field r8, boolean r9, boolean r10) {
            /*
                r7 = this;
                java.lang.String r0 = "TYPE"
                java.lang.Class r3 = java.lang.Void.TYPE
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r3, r0)
                if (r10 == 0) goto Lf
                java.lang.Class r10 = r8.getDeclaringClass()
            Ld:
                r4 = r10
                goto L11
            Lf:
                r10 = 0
                goto Ld
            L11:
                java.lang.reflect.Type r10 = r8.getGenericType()
                r0 = 1
                java.lang.reflect.Type[] r5 = new java.lang.reflect.Type[r0]
                r0 = 0
                r5[r0] = r10
                r6 = 0
                r1 = r7
                r2 = r8
                r1.<init>(r2, r3, r4, r5, r6)
                r1.f52412f = r9
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: vs.i.g.<init>(java.lang.reflect.Field, boolean, boolean):void");
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static abstract class h extends i {

        /* renamed from: f  reason: collision with root package name */
        private final boolean f52414f;

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class a extends h implements vs.g {

            /* renamed from: g  reason: collision with root package name */
            private final Object f52415g;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public a(Method method, Object obj) {
                super(method, false, null, 4, null);
                Intrinsics.checkNotNullParameter(method, "method");
                this.f52415g = obj;
            }

            @Override // vs.h
            public Object call(Object[] args) {
                Intrinsics.checkNotNullParameter(args, "args");
                d(args);
                return g(this.f52415g, args);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class b extends h implements vs.g {
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public b(Method method) {
                super(method, false, null, 4, null);
                Intrinsics.checkNotNullParameter(method, "method");
            }

            @Override // vs.h
            public Object call(Object[] args) {
                Intrinsics.checkNotNullParameter(args, "args");
                d(args);
                return g(null, args);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class c extends h implements vs.g {

            /* renamed from: g  reason: collision with root package name */
            private final boolean f52416g;

            /* renamed from: h  reason: collision with root package name */
            private final Object f52417h;

            /* JADX WARN: Illegal instructions before constructor call */
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public c(java.lang.reflect.Method r5, boolean r6, java.lang.Object r7) {
                /*
                    r4 = this;
                    java.lang.String r0 = "method"
                    kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r5, r0)
                    java.lang.reflect.Type[] r0 = r5.getGenericParameterTypes()
                    java.lang.String r1 = "getGenericParameterTypes(...)"
                    kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r0, r1)
                    int r1 = r0.length
                    r2 = 0
                    r3 = 1
                    if (r1 > r3) goto L16
                    java.lang.reflect.Type[] r0 = new java.lang.reflect.Type[r2]
                    goto L1b
                L16:
                    int r1 = r0.length
                    java.lang.Object[] r0 = kotlin.collections.i.r(r0, r3, r1)
                L1b:
                    java.lang.reflect.Type[] r0 = (java.lang.reflect.Type[]) r0
                    r1 = 0
                    r4.<init>(r5, r2, r0, r1)
                    r4.f52416g = r6
                    r4.f52417h = r7
                    return
                */
                throw new UnsupportedOperationException("Method not decompiled: vs.i.h.c.<init>(java.lang.reflect.Method, boolean, java.lang.Object):void");
            }

            @Override // vs.h
            public Object call(Object[] args) {
                Intrinsics.checkNotNullParameter(args, "args");
                d(args);
                SpreadBuilder spreadBuilder = new SpreadBuilder(2);
                spreadBuilder.add(this.f52417h);
                spreadBuilder.addSpread(args);
                return g(null, spreadBuilder.toArray(new Object[spreadBuilder.size()]));
            }

            public final Object h() {
                return this.f52417h;
            }

            public final boolean i() {
                return this.f52416g;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class d extends h implements vs.g {

            /* renamed from: g  reason: collision with root package name */
            private final Object[] f52418g;

            /* JADX WARN: Illegal instructions before constructor call */
            /*
                Code decompiled incorrectly, please refer to instructions dump.
                To view partially-correct add '--show-bad-code' argument
            */
            public d(java.lang.reflect.Method r4, java.lang.Object[] r5) {
                /*
                    r3 = this;
                    java.lang.String r0 = "method"
                    kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r4, r0)
                    java.lang.String r0 = "boundReceiverComponents"
                    kotlin.jvm.internal.Intrinsics.checkNotNullParameter(r5, r0)
                    java.lang.reflect.Type[] r0 = r4.getGenericParameterTypes()
                    java.lang.String r1 = "getGenericParameterTypes(...)"
                    kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r0, r1)
                    int r1 = r5.length
                    java.util.List r0 = kotlin.collections.i.Q(r0, r1)
                    java.util.Collection r0 = (java.util.Collection) r0
                    r1 = 0
                    java.lang.reflect.Type[] r2 = new java.lang.reflect.Type[r1]
                    java.lang.Object[] r0 = r0.toArray(r2)
                    java.lang.reflect.Type[] r0 = (java.lang.reflect.Type[]) r0
                    r2 = 0
                    r3.<init>(r4, r1, r0, r2)
                    r3.f52418g = r5
                    return
                */
                throw new UnsupportedOperationException("Method not decompiled: vs.i.h.d.<init>(java.lang.reflect.Method, java.lang.Object[]):void");
            }

            @Override // vs.h
            public Object call(Object[] args) {
                Intrinsics.checkNotNullParameter(args, "args");
                d(args);
                SpreadBuilder spreadBuilder = new SpreadBuilder(2);
                spreadBuilder.addSpread(this.f52418g);
                spreadBuilder.addSpread(args);
                return g(null, spreadBuilder.toArray(new Object[spreadBuilder.size()]));
            }

            public final Object[] h() {
                return this.f52418g;
            }

            public final int i() {
                return this.f52418g.length;
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class e extends h {
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public e(Method method) {
                super(method, false, null, 6, null);
                Intrinsics.checkNotNullParameter(method, "method");
            }

            @Override // vs.h
            public Object call(Object[] args) {
                Object[] r10;
                Intrinsics.checkNotNullParameter(args, "args");
                d(args);
                Object obj = args[0];
                if (args.length <= 1) {
                    r10 = new Object[0];
                } else {
                    r10 = kotlin.collections.i.r(args, 1, args.length);
                }
                return g(obj, r10);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class f extends h {
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public f(Method method) {
                super(method, true, null, 4, null);
                Intrinsics.checkNotNullParameter(method, "method");
            }

            @Override // vs.h
            public Object call(Object[] args) {
                Object[] r10;
                Intrinsics.checkNotNullParameter(args, "args");
                d(args);
                e(kotlin.collections.i.V(args));
                if (args.length <= 1) {
                    r10 = new Object[0];
                } else {
                    r10 = kotlin.collections.i.r(args, 1, args.length);
                }
                return g(null, r10);
            }
        }

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public static final class g extends h {
            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            public g(Method method) {
                super(method, false, null, 6, null);
                Intrinsics.checkNotNullParameter(method, "method");
            }

            @Override // vs.h
            public Object call(Object[] args) {
                Intrinsics.checkNotNullParameter(args, "args");
                d(args);
                return g(null, args);
            }
        }

        public /* synthetic */ h(Method method, boolean z10, Type[] typeArr, DefaultConstructorMarker defaultConstructorMarker) {
            this(method, z10, typeArr);
        }

        protected final Object g(Object obj, Object[] args) {
            Intrinsics.checkNotNullParameter(args, "args");
            Object invoke = ((Method) b()).invoke(obj, Arrays.copyOf(args, args.length));
            if (this.f52414f) {
                return Unit.f32556a;
            }
            return invoke;
        }

        public /* synthetic */ h(Method method, boolean z10, Type[] typeArr, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this(method, (i10 & 2) != 0 ? !Modifier.isStatic(method.getModifiers()) : z10, (i10 & 4) != 0 ? method.getGenericParameterTypes() : typeArr, null);
        }

        /* JADX WARN: Illegal instructions before constructor call */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private h(java.lang.reflect.Method r7, boolean r8, java.lang.reflect.Type[] r9) {
            /*
                r6 = this;
                java.lang.reflect.Type r2 = r7.getGenericReturnType()
                java.lang.String r0 = "getGenericReturnType(...)"
                kotlin.jvm.internal.Intrinsics.checkNotNullExpressionValue(r2, r0)
                if (r8 == 0) goto L11
                java.lang.Class r8 = r7.getDeclaringClass()
            Lf:
                r3 = r8
                goto L13
            L11:
                r8 = 0
                goto Lf
            L13:
                r5 = 0
                r0 = r6
                r1 = r7
                r4 = r9
                r0.<init>(r1, r2, r3, r4, r5)
                java.lang.reflect.Type r7 = r6.getReturnType()
                java.lang.Class r8 = java.lang.Void.TYPE
                boolean r7 = kotlin.jvm.internal.Intrinsics.areEqual(r7, r8)
                r0.f52414f = r7
                return
            */
            throw new UnsupportedOperationException("Method not decompiled: vs.i.h.<init>(java.lang.reflect.Method, boolean, java.lang.reflect.Type[]):void");
        }
    }

    public /* synthetic */ i(Member member, Type type, Class cls, Type[] typeArr, DefaultConstructorMarker defaultConstructorMarker) {
        this(member, type, cls, typeArr);
    }

    @Override // vs.h
    public List a() {
        return this.f52408d;
    }

    @Override // vs.h
    public final Member b() {
        return this.f52405a;
    }

    @Override // vs.h
    public boolean c() {
        return h.a.b(this);
    }

    public void d(Object[] objArr) {
        h.a.a(this, objArr);
    }

    protected final void e(Object obj) {
        if (obj != null && this.f52405a.getDeclaringClass().isInstance(obj)) {
            return;
        }
        throw new IllegalArgumentException("An object member requires the object instance passed as the first argument.");
    }

    public final Class f() {
        return this.f52407c;
    }

    @Override // vs.h
    public final Type getReturnType() {
        return this.f52406b;
    }

    /* JADX WARN: Code restructure failed: missing block: B:5:0x0025, code lost:
        if (r1 == null) goto L8;
     */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    private i(java.lang.reflect.Member r1, java.lang.reflect.Type r2, java.lang.Class r3, java.lang.reflect.Type[] r4) {
        /*
            r0 = this;
            r0.<init>()
            r0.f52405a = r1
            r0.f52406b = r2
            r0.f52407c = r3
            if (r3 == 0) goto L27
            kotlin.jvm.internal.SpreadBuilder r1 = new kotlin.jvm.internal.SpreadBuilder
            r2 = 2
            r1.<init>(r2)
            r1.add(r3)
            r1.addSpread(r4)
            int r2 = r1.size()
            java.lang.reflect.Type[] r2 = new java.lang.reflect.Type[r2]
            java.lang.Object[] r1 = r1.toArray(r2)
            java.util.List r1 = kotlin.collections.CollectionsKt.o(r1)
            if (r1 != 0) goto L2b
        L27:
            java.util.List r1 = kotlin.collections.i.R0(r4)
        L2b:
            r0.f52408d = r1
            return
        */
        throw new UnsupportedOperationException("Method not decompiled: vs.i.<init>(java.lang.reflect.Member, java.lang.reflect.Type, java.lang.Class, java.lang.reflect.Type[]):void");
    }
}
