package dn;

import android.text.Editable;
import android.text.TextWatcher;
import android.widget.EditText;
import android.widget.TextView;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function1;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class u {

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f20958d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f20959e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t f20960i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ EditText f20961o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: dn.u$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0276a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f20962d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f20963e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ EditText f20964i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0276a(EditText editText, Continuation continuation) {
                super(2, continuation);
                this.f20964i = editText;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                C0276a c0276a = new C0276a(this.f20964i, continuation);
                c0276a.f20963e = obj;
                return c0276a;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                wr.b.f();
                if (this.f20962d == 0) {
                    kotlin.c.b(obj);
                    String str = (String) this.f20963e;
                    if (!Intrinsics.areEqual(str, this.f20964i.getText().toString())) {
                        this.f20964i.setText(str);
                    }
                    return Unit.f32008a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: j */
            public final Object invoke(String str, Continuation continuation) {
                return ((C0276a) create(str, continuation)).invokeSuspend(Unit.f32008a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t f20965d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(t tVar) {
                super(1);
                this.f20965d = tVar;
            }

            public final void a(CharSequence charSequence) {
                String obj;
                t tVar = this.f20965d;
                if (charSequence == null) {
                    obj = null;
                } else {
                    obj = charSequence.toString();
                }
                if (obj == null) {
                    obj = "";
                }
                tVar.c(obj);
            }

            @Override // kotlin.jvm.functions.Function1
            public /* bridge */ /* synthetic */ Object invoke(Object obj) {
                a((CharSequence) obj);
                return Unit.f32008a;
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(t tVar, EditText editText, Continuation continuation) {
            super(2, continuation);
            this.f20960i = tVar;
            this.f20961o = editText;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f20960i, this.f20961o, continuation);
            aVar.f20959e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f20958d;
            if (i10 != 0) {
                if (i10 != 1) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
            } else {
                kotlin.c.b(obj);
                rs.g.y(rs.g.C(this.f20960i.a(), new C0276a(this.f20961o, null)), (CoroutineScope) this.f20959e);
                EditText editText = this.f20961o;
                b bVar = new b(this.f20960i);
                this.f20958d = 1;
                if (u.c(editText, bVar, this) == f10) {
                    return f10;
                }
            }
            throw new qr.h();
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f20966d;

        /* renamed from: e  reason: collision with root package name */
        Object f20967e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f20968i;

        /* renamed from: o  reason: collision with root package name */
        int f20969o;

        b(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f20968i = obj;
            this.f20969o |= Integer.MIN_VALUE;
            return u.c(null, null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ TextView f20970d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d f20971e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(TextView textView, d dVar) {
            super(1);
            this.f20970d = textView;
            this.f20971e = dVar;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f32008a;
        }

        public final void invoke(Throwable th2) {
            this.f20970d.removeTextChangedListener(this.f20971e);
        }
    }

    public static final void b(t tVar, EditText view) {
        x xVar;
        t a10;
        Job b10;
        Intrinsics.checkNotNullParameter(tVar, "<this>");
        Intrinsics.checkNotNullParameter(view, "view");
        Object tag = view.getTag(q.f20926a);
        if (tag instanceof x) {
            xVar = (x) tag;
        } else {
            xVar = null;
        }
        if (xVar == null) {
            a10 = null;
        } else {
            a10 = xVar.a();
        }
        if (a10 == tVar && xVar.b().a()) {
            return;
        }
        if (xVar != null && (b10 = xVar.b()) != null) {
            Job.a.a(b10, null, 1, null);
        }
        view.setText(tVar.b());
        view.setTag(q.f20926a, new x(tVar, d0.c(view, null, new a(tVar, view, null), 1, null)));
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Removed duplicated region for block: B:10:0x0023  */
    /* JADX WARN: Removed duplicated region for block: B:14:0x0039  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static final java.lang.Object c(android.widget.TextView r4, kotlin.jvm.functions.Function1 r5, kotlin.coroutines.Continuation r6) {
        /*
            boolean r0 = r6 instanceof dn.u.b
            if (r0 == 0) goto L13
            r0 = r6
            dn.u$b r0 = (dn.u.b) r0
            int r1 = r0.f20969o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f20969o = r1
            goto L18
        L13:
            dn.u$b r0 = new dn.u$b
            r0.<init>(r6)
        L18:
            java.lang.Object r6 = r0.f20968i
            java.lang.Object r1 = wr.b.f()
            int r2 = r0.f20969o
            r3 = 1
            if (r2 == 0) goto L39
            if (r2 == r3) goto L2d
            java.lang.IllegalStateException r4 = new java.lang.IllegalStateException
            java.lang.String r5 = "call to 'resume' before 'invoke' with coroutine"
            r4.<init>(r5)
            throw r4
        L2d:
            java.lang.Object r4 = r0.f20967e
            kotlin.jvm.functions.Function1 r4 = (kotlin.jvm.functions.Function1) r4
            java.lang.Object r4 = r0.f20966d
            android.widget.TextView r4 = (android.widget.TextView) r4
            kotlin.c.b(r6)
            goto L6e
        L39:
            kotlin.c.b(r6)
            r0.f20966d = r4
            r0.f20967e = r5
            r0.f20969o = r3
            kotlinx.coroutines.e r6 = new kotlinx.coroutines.e
            kotlin.coroutines.Continuation r2 = wr.b.c(r0)
            r6.<init>(r2, r3)
            r6.H()
            dn.u$d r2 = new dn.u$d
            r2.<init>(r5)
            r4.addTextChangedListener(r2)
            dn.u$c r5 = new dn.u$c
            r5.<init>(r4, r2)
            r6.c(r5)
            java.lang.Object r4 = r6.B()
            java.lang.Object r5 = wr.b.f()
            if (r4 != r5) goto L6b
            kotlin.coroutines.jvm.internal.g.c(r0)
        L6b:
            if (r4 != r1) goto L6e
            return r1
        L6e:
            qr.h r4 = new qr.h
            r4.<init>()
            throw r4
        */
        throw new UnsupportedOperationException("Method not decompiled: dn.u.c(android.widget.TextView, kotlin.jvm.functions.Function1, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements TextWatcher {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function1 f20972d;

        d(Function1 function1) {
            this.f20972d = function1;
        }

        @Override // android.text.TextWatcher
        public void afterTextChanged(Editable s10) {
            Intrinsics.checkNotNullParameter(s10, "s");
        }

        @Override // android.text.TextWatcher
        public void onTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
            this.f20972d.invoke(charSequence);
        }

        @Override // android.text.TextWatcher
        public void beforeTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }
    }
}
