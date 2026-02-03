package ym;

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
        int f54693d;

        /* renamed from: e  reason: collision with root package name */
        private /* synthetic */ Object f54694e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ t f54695i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ EditText f54696o;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: ym.u$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0752a extends kotlin.coroutines.jvm.internal.k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f54697d;

            /* renamed from: e  reason: collision with root package name */
            /* synthetic */ Object f54698e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ EditText f54699i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0752a(EditText editText, Continuation continuation) {
                super(2, continuation);
                this.f54699i = editText;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                C0752a c0752a = new C0752a(this.f54699i, continuation);
                c0752a.f54698e = obj;
                return c0752a;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                rr.b.f();
                if (this.f54697d == 0) {
                    kotlin.c.b(obj);
                    String str = (String) this.f54698e;
                    if (!Intrinsics.areEqual(str, this.f54699i.getText().toString())) {
                        this.f54699i.setText(str);
                    }
                    return Unit.f32464a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            /* renamed from: j */
            public final Object invoke(String str, Continuation continuation) {
                return ((C0752a) create(str, continuation)).invokeSuspend(Unit.f32464a);
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class b extends Lambda implements Function1 {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ t f54700d;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            b(t tVar) {
                super(1);
                this.f54700d = tVar;
            }

            public final void a(CharSequence charSequence) {
                String obj;
                t tVar = this.f54700d;
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
                return Unit.f32464a;
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(t tVar, EditText editText, Continuation continuation) {
            super(2, continuation);
            this.f54695i = tVar;
            this.f54696o = editText;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            a aVar = new a(this.f54695i, this.f54696o, continuation);
            aVar.f54694e = obj;
            return aVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = rr.b.f();
            int i10 = this.f54693d;
            if (i10 != 0) {
                if (i10 != 1) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
            } else {
                kotlin.c.b(obj);
                ms.g.y(ms.g.C(this.f54695i.a(), new C0752a(this.f54696o, null)), (CoroutineScope) this.f54694e);
                EditText editText = this.f54696o;
                b bVar = new b(this.f54695i);
                this.f54693d = 1;
                if (u.c(editText, bVar, this) == f10) {
                    return f10;
                }
            }
            throw new lr.h();
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f32464a);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends kotlin.coroutines.jvm.internal.d {

        /* renamed from: d  reason: collision with root package name */
        Object f54701d;

        /* renamed from: e  reason: collision with root package name */
        Object f54702e;

        /* renamed from: i  reason: collision with root package name */
        /* synthetic */ Object f54703i;

        /* renamed from: o  reason: collision with root package name */
        int f54704o;

        b(Continuation continuation) {
            super(continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            this.f54703i = obj;
            this.f54704o |= Integer.MIN_VALUE;
            return u.c(null, null, this);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends Lambda implements Function1 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ TextView f54705d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ d f54706e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(TextView textView, d dVar) {
            super(1);
            this.f54705d = textView;
            this.f54706e = dVar;
        }

        @Override // kotlin.jvm.functions.Function1
        public /* bridge */ /* synthetic */ Object invoke(Object obj) {
            invoke((Throwable) obj);
            return Unit.f32464a;
        }

        public final void invoke(Throwable th2) {
            this.f54705d.removeTextChangedListener(this.f54706e);
        }
    }

    public static final void b(t tVar, EditText view) {
        x xVar;
        t a10;
        Job b10;
        Intrinsics.checkNotNullParameter(tVar, "<this>");
        Intrinsics.checkNotNullParameter(view, "view");
        Object tag = view.getTag(q.f54661a);
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
        view.setTag(q.f54661a, new x(tVar, d0.c(view, null, new a(tVar, view, null), 1, null)));
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
            boolean r0 = r6 instanceof ym.u.b
            if (r0 == 0) goto L13
            r0 = r6
            ym.u$b r0 = (ym.u.b) r0
            int r1 = r0.f54704o
            r2 = -2147483648(0xffffffff80000000, float:-0.0)
            r3 = r1 & r2
            if (r3 == 0) goto L13
            int r1 = r1 - r2
            r0.f54704o = r1
            goto L18
        L13:
            ym.u$b r0 = new ym.u$b
            r0.<init>(r6)
        L18:
            java.lang.Object r6 = r0.f54703i
            java.lang.Object r1 = rr.b.f()
            int r2 = r0.f54704o
            r3 = 1
            if (r2 == 0) goto L39
            if (r2 == r3) goto L2d
            java.lang.IllegalStateException r4 = new java.lang.IllegalStateException
            java.lang.String r5 = "call to 'resume' before 'invoke' with coroutine"
            r4.<init>(r5)
            throw r4
        L2d:
            java.lang.Object r4 = r0.f54702e
            kotlin.jvm.functions.Function1 r4 = (kotlin.jvm.functions.Function1) r4
            java.lang.Object r4 = r0.f54701d
            android.widget.TextView r4 = (android.widget.TextView) r4
            kotlin.c.b(r6)
            goto L6e
        L39:
            kotlin.c.b(r6)
            r0.f54701d = r4
            r0.f54702e = r5
            r0.f54704o = r3
            kotlinx.coroutines.e r6 = new kotlinx.coroutines.e
            kotlin.coroutines.Continuation r2 = rr.b.c(r0)
            r6.<init>(r2, r3)
            r6.H()
            ym.u$d r2 = new ym.u$d
            r2.<init>(r5)
            r4.addTextChangedListener(r2)
            ym.u$c r5 = new ym.u$c
            r5.<init>(r4, r2)
            r6.c(r5)
            java.lang.Object r4 = r6.B()
            java.lang.Object r5 = rr.b.f()
            if (r4 != r5) goto L6b
            kotlin.coroutines.jvm.internal.g.c(r0)
        L6b:
            if (r4 != r1) goto L6e
            return r1
        L6e:
            lr.h r4 = new lr.h
            r4.<init>()
            throw r4
        */
        throw new UnsupportedOperationException("Method not decompiled: ym.u.c(android.widget.TextView, kotlin.jvm.functions.Function1, kotlin.coroutines.Continuation):java.lang.Object");
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d implements TextWatcher {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function1 f54707d;

        d(Function1 function1) {
            this.f54707d = function1;
        }

        @Override // android.text.TextWatcher
        public void afterTextChanged(Editable s10) {
            Intrinsics.checkNotNullParameter(s10, "s");
        }

        @Override // android.text.TextWatcher
        public void onTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
            this.f54707d.invoke(charSequence);
        }

        @Override // android.text.TextWatcher
        public void beforeTextChanged(CharSequence charSequence, int i10, int i11, int i12) {
        }
    }
}
