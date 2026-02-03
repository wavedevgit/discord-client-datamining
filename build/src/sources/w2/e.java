package w2;

import java.util.Iterator;
import java.util.List;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class e {

    /* renamed from: a  reason: collision with root package name */
    public static final a f51623a = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: w2.e$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class C0697a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f51624d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f51625e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ List f51626i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0697a(List list, Continuation continuation) {
                super(2, continuation);
                this.f51626i = list;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                C0697a c0697a = new C0697a(this.f51626i, continuation);
                c0697a.f51625e = obj;
                return c0697a;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = pr.b.f();
                int i10 = this.f51624d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    a aVar = e.f51623a;
                    List list = this.f51626i;
                    this.f51624d = 1;
                    if (aVar.c(list, (i) this.f51625e, this) == f10) {
                        return f10;
                    }
                }
                return Unit.f33074a;
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: j */
            public final Object invoke(i iVar, Continuation continuation) {
                return ((C0697a) create(iVar, continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class b extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            Object f51627d;

            /* renamed from: e  reason: collision with root package name */
            Object f51628e;

            /* renamed from: i  reason: collision with root package name */
            /* synthetic */ Object f51629i;

            /* renamed from: p  reason: collision with root package name */
            int f51631p;

            b(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f51629i = obj;
                this.f51631p |= Integer.MIN_VALUE;
                return a.this.c(null, null, this);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            Object f51632d;

            /* renamed from: e  reason: collision with root package name */
            Object f51633e;

            /* renamed from: i  reason: collision with root package name */
            Object f51634i;

            /* renamed from: o  reason: collision with root package name */
            int f51635o;

            /* renamed from: p  reason: collision with root package name */
            /* synthetic */ Object f51636p;

            /* renamed from: q  reason: collision with root package name */
            final /* synthetic */ List f51637q;

            /* renamed from: r  reason: collision with root package name */
            final /* synthetic */ List f51638r;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: w2.e$a$c$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static final class C0698a extends kotlin.coroutines.jvm.internal.k implements Function1 {

                /* renamed from: d  reason: collision with root package name */
                int f51639d;

                C0698a(d dVar, Continuation continuation) {
                    super(1, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Continuation continuation) {
                    return new C0698a(null, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    pr.b.f();
                    int i10 = this.f51639d;
                    if (i10 != 0) {
                        if (i10 == 1) {
                            kotlin.c.b(obj);
                            return Unit.f33074a;
                        }
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                    kotlin.c.b(obj);
                    this.f51639d = 1;
                    throw null;
                }

                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Continuation continuation) {
                    return ((C0698a) create(continuation)).invokeSuspend(Unit.f33074a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(List list, List list2, Continuation continuation) {
                super(2, continuation);
                this.f51637q = list;
                this.f51638r = list2;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                c cVar = new c(this.f51637q, this.f51638r, continuation);
                cVar.f51636p = obj;
                return cVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                List list;
                Iterator it;
                pr.b.f();
                int i10 = this.f51635o;
                if (i10 != 0) {
                    if (i10 != 1) {
                        if (i10 == 2) {
                            it = (Iterator) this.f51632d;
                            list = (List) this.f51636p;
                            kotlin.c.b(obj);
                        } else {
                            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                        }
                    } else {
                        Object obj2 = this.f51634i;
                        android.support.v4.media.session.b.a(this.f51633e);
                        Iterator it2 = (Iterator) this.f51632d;
                        List list2 = (List) this.f51636p;
                        kotlin.c.b(obj);
                        if (!((Boolean) obj).booleanValue()) {
                            obj = obj2;
                            it = it2;
                            list = list2;
                        } else {
                            list2.add(new C0698a(null, null));
                            this.f51636p = list2;
                            this.f51632d = it2;
                            this.f51633e = null;
                            this.f51634i = null;
                            this.f51635o = 2;
                            throw null;
                        }
                    }
                } else {
                    kotlin.c.b(obj);
                    obj = this.f51636p;
                    list = this.f51638r;
                    it = this.f51637q.iterator();
                }
                if (!it.hasNext()) {
                    return obj;
                }
                android.support.v4.media.session.b.a(it.next());
                this.f51636p = list;
                this.f51632d = it;
                this.f51633e = null;
                this.f51634i = obj;
                this.f51635o = 1;
                throw null;
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: j */
            public final Object invoke(Object obj, Continuation continuation) {
                return ((c) create(obj, continuation)).invokeSuspend(Unit.f33074a);
            }
        }

        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        /* JADX WARN: Removed duplicated region for block: B:10:0x0024  */
        /* JADX WARN: Removed duplicated region for block: B:20:0x0046  */
        /* JADX WARN: Removed duplicated region for block: B:27:0x0071  */
        /* JADX WARN: Removed duplicated region for block: B:37:0x009c  */
        /* JADX WARN: Removed duplicated region for block: B:39:0x009f  */
        /* JADX WARN: Type inference failed for: r9v3, types: [java.lang.Throwable, T] */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:33:0x0088 -> B:25:0x006b). Please submit an issue!!! */
        /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:34:0x008b -> B:25:0x006b). Please submit an issue!!! */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object c(java.util.List r7, w2.i r8, kotlin.coroutines.Continuation r9) {
            /*
                r6 = this;
                boolean r0 = r9 instanceof w2.e.a.b
                if (r0 == 0) goto L13
                r0 = r9
                w2.e$a$b r0 = (w2.e.a.b) r0
                int r1 = r0.f51631p
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f51631p = r1
                goto L18
            L13:
                w2.e$a$b r0 = new w2.e$a$b
                r0.<init>(r9)
            L18:
                java.lang.Object r9 = r0.f51629i
                java.lang.Object r1 = pr.b.f()
                int r2 = r0.f51631p
                r3 = 2
                r4 = 1
                if (r2 == 0) goto L46
                if (r2 == r4) goto L3e
                if (r2 != r3) goto L36
                java.lang.Object r7 = r0.f51628e
                java.util.Iterator r7 = (java.util.Iterator) r7
                java.lang.Object r8 = r0.f51627d
                kotlin.jvm.internal.Ref$ObjectRef r8 = (kotlin.jvm.internal.Ref.ObjectRef) r8
                kotlin.c.b(r9)     // Catch: java.lang.Throwable -> L34
                goto L6b
            L34:
                r9 = move-exception
                goto L84
            L36:
                java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
                java.lang.String r8 = "call to 'resume' before 'invoke' with coroutine"
                r7.<init>(r8)
                throw r7
            L3e:
                java.lang.Object r7 = r0.f51627d
                java.util.List r7 = (java.util.List) r7
                kotlin.c.b(r9)
                goto L60
            L46:
                kotlin.c.b(r9)
                java.util.ArrayList r9 = new java.util.ArrayList
                r9.<init>()
                w2.e$a$c r2 = new w2.e$a$c
                r5 = 0
                r2.<init>(r7, r9, r5)
                r0.f51627d = r9
                r0.f51631p = r4
                java.lang.Object r7 = r8.a(r2, r0)
                if (r7 != r1) goto L5f
                goto L83
            L5f:
                r7 = r9
            L60:
                kotlin.jvm.internal.Ref$ObjectRef r8 = new kotlin.jvm.internal.Ref$ObjectRef
                r8.<init>()
                java.lang.Iterable r7 = (java.lang.Iterable) r7
                java.util.Iterator r7 = r7.iterator()
            L6b:
                boolean r9 = r7.hasNext()
                if (r9 == 0) goto L96
                java.lang.Object r9 = r7.next()
                kotlin.jvm.functions.Function1 r9 = (kotlin.jvm.functions.Function1) r9
                r0.f51627d = r8     // Catch: java.lang.Throwable -> L34
                r0.f51628e = r7     // Catch: java.lang.Throwable -> L34
                r0.f51631p = r3     // Catch: java.lang.Throwable -> L34
                java.lang.Object r9 = r9.invoke(r0)     // Catch: java.lang.Throwable -> L34
                if (r9 != r1) goto L6b
            L83:
                return r1
            L84:
                T r2 = r8.element
                if (r2 != 0) goto L8b
                r8.element = r9
                goto L6b
            L8b:
                kotlin.jvm.internal.Intrinsics.checkNotNull(r2)
                T r2 = r8.element
                java.lang.Throwable r2 = (java.lang.Throwable) r2
                jr.e.a(r2, r9)
                goto L6b
            L96:
                T r7 = r8.element
                java.lang.Throwable r7 = (java.lang.Throwable) r7
                if (r7 != 0) goto L9f
                kotlin.Unit r7 = kotlin.Unit.f33074a
                return r7
            L9f:
                throw r7
            */
            throw new UnsupportedOperationException("Method not decompiled: w2.e.a.c(java.util.List, w2.i, kotlin.coroutines.Continuation):java.lang.Object");
        }

        public final Function2 b(List migrations) {
            Intrinsics.checkNotNullParameter(migrations, "migrations");
            return new C0697a(migrations, null);
        }

        private a() {
        }
    }
}
