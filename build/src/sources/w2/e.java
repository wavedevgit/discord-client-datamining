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
    public static final a f53278a = new a(null);

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {

        /* renamed from: w2.e$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        static final class C0709a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f53279d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f53280e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ List f53281i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0709a(List list, Continuation continuation) {
                super(2, continuation);
                this.f53281i = list;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                C0709a c0709a = new C0709a(this.f53281i, continuation);
                c0709a.f53280e = obj;
                return c0709a;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                Object f10 = wr.b.f();
                int i10 = this.f53279d;
                if (i10 != 0) {
                    if (i10 == 1) {
                        kotlin.c.b(obj);
                    } else {
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                } else {
                    kotlin.c.b(obj);
                    a aVar = e.f53278a;
                    List list = this.f53281i;
                    this.f53279d = 1;
                    if (aVar.c(list, (i) this.f53280e, this) == f10) {
                        return f10;
                    }
                }
                return Unit.f32008a;
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: j */
            public final Object invoke(i iVar, Continuation continuation) {
                return ((C0709a) create(iVar, continuation)).invokeSuspend(Unit.f32008a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class b extends kotlin.coroutines.jvm.internal.d {

            /* renamed from: d  reason: collision with root package name */
            Object f53282d;

            /* renamed from: e  reason: collision with root package name */
            Object f53283e;

            /* renamed from: i  reason: collision with root package name */
            /* synthetic */ Object f53284i;

            /* renamed from: p  reason: collision with root package name */
            int f53286p;

            b(Continuation continuation) {
                super(continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                this.f53284i = obj;
                this.f53286p |= Integer.MIN_VALUE;
                return a.this.c(null, null, this);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            Object f53287d;

            /* renamed from: e  reason: collision with root package name */
            Object f53288e;

            /* renamed from: i  reason: collision with root package name */
            Object f53289i;

            /* renamed from: o  reason: collision with root package name */
            int f53290o;

            /* renamed from: p  reason: collision with root package name */
            /* synthetic */ Object f53291p;

            /* renamed from: q  reason: collision with root package name */
            final /* synthetic */ List f53292q;

            /* renamed from: r  reason: collision with root package name */
            final /* synthetic */ List f53293r;

            /* JADX INFO: Access modifiers changed from: package-private */
            /* renamed from: w2.e$a$c$a  reason: collision with other inner class name */
            /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
            public static final class C0710a extends kotlin.coroutines.jvm.internal.k implements Function1 {

                /* renamed from: d  reason: collision with root package name */
                int f53294d;

                C0710a(d dVar, Continuation continuation) {
                    super(1, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Continuation create(Continuation continuation) {
                    return new C0710a(null, continuation);
                }

                @Override // kotlin.coroutines.jvm.internal.a
                public final Object invokeSuspend(Object obj) {
                    wr.b.f();
                    int i10 = this.f53294d;
                    if (i10 != 0) {
                        if (i10 == 1) {
                            kotlin.c.b(obj);
                            return Unit.f32008a;
                        }
                        throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                    }
                    kotlin.c.b(obj);
                    this.f53294d = 1;
                    throw null;
                }

                @Override // kotlin.jvm.functions.Function1
                public final Object invoke(Continuation continuation) {
                    return ((C0710a) create(continuation)).invokeSuspend(Unit.f32008a);
                }
            }

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            c(List list, List list2, Continuation continuation) {
                super(2, continuation);
                this.f53292q = list;
                this.f53293r = list2;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                c cVar = new c(this.f53292q, this.f53293r, continuation);
                cVar.f53291p = obj;
                return cVar;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                List list;
                Iterator it;
                wr.b.f();
                int i10 = this.f53290o;
                if (i10 != 0) {
                    if (i10 != 1) {
                        if (i10 == 2) {
                            it = (Iterator) this.f53287d;
                            list = (List) this.f53291p;
                            kotlin.c.b(obj);
                        } else {
                            throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                        }
                    } else {
                        Object obj2 = this.f53289i;
                        android.support.v4.media.session.b.a(this.f53288e);
                        Iterator it2 = (Iterator) this.f53287d;
                        List list2 = (List) this.f53291p;
                        kotlin.c.b(obj);
                        if (!((Boolean) obj).booleanValue()) {
                            obj = obj2;
                            it = it2;
                            list = list2;
                        } else {
                            list2.add(new C0710a(null, null));
                            this.f53291p = list2;
                            this.f53287d = it2;
                            this.f53288e = null;
                            this.f53289i = null;
                            this.f53290o = 2;
                            throw null;
                        }
                    }
                } else {
                    kotlin.c.b(obj);
                    obj = this.f53291p;
                    list = this.f53293r;
                    it = this.f53292q.iterator();
                }
                if (!it.hasNext()) {
                    return obj;
                }
                android.support.v4.media.session.b.a(it.next());
                this.f53291p = list;
                this.f53287d = it;
                this.f53288e = null;
                this.f53289i = obj;
                this.f53290o = 1;
                throw null;
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: j */
            public final Object invoke(Object obj, Continuation continuation) {
                return ((c) create(obj, continuation)).invokeSuspend(Unit.f32008a);
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
                int r1 = r0.f53286p
                r2 = -2147483648(0xffffffff80000000, float:-0.0)
                r3 = r1 & r2
                if (r3 == 0) goto L13
                int r1 = r1 - r2
                r0.f53286p = r1
                goto L18
            L13:
                w2.e$a$b r0 = new w2.e$a$b
                r0.<init>(r9)
            L18:
                java.lang.Object r9 = r0.f53284i
                java.lang.Object r1 = wr.b.f()
                int r2 = r0.f53286p
                r3 = 2
                r4 = 1
                if (r2 == 0) goto L46
                if (r2 == r4) goto L3e
                if (r2 != r3) goto L36
                java.lang.Object r7 = r0.f53283e
                java.util.Iterator r7 = (java.util.Iterator) r7
                java.lang.Object r8 = r0.f53282d
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
                java.lang.Object r7 = r0.f53282d
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
                r0.f53282d = r9
                r0.f53286p = r4
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
                r0.f53282d = r8     // Catch: java.lang.Throwable -> L34
                r0.f53283e = r7     // Catch: java.lang.Throwable -> L34
                r0.f53286p = r3     // Catch: java.lang.Throwable -> L34
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
                qr.e.a(r2, r9)
                goto L6b
            L96:
                T r7 = r8.element
                java.lang.Throwable r7 = (java.lang.Throwable) r7
                if (r7 != 0) goto L9f
                kotlin.Unit r7 = kotlin.Unit.f32008a
                return r7
            L9f:
                throw r7
            */
            throw new UnsupportedOperationException("Method not decompiled: w2.e.a.c(java.util.List, w2.i, kotlin.coroutines.Continuation):java.lang.Object");
        }

        public final Function2 b(List migrations) {
            Intrinsics.checkNotNullParameter(migrations, "migrations");
            return new C0709a(migrations, null);
        }

        private a() {
        }
    }
}
