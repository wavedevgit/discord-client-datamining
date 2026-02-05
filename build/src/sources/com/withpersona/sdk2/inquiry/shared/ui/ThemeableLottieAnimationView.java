package com.withpersona.sdk2.inquiry.shared.ui;

import android.content.Context;
import android.util.AttributeSet;
import com.airbnb.lottie.LottieAnimationView;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import java.io.InputStream;
import java.net.URL;
import java.util.LinkedHashMap;
import java.util.Map;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.jvm.internal.k;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.Job;
import kotlinx.coroutines.i;
import l5.a0;
import l5.z;
import ms.m0;
import ou.x;
import q5.e;
@Metadata(d1 = {"\u0000D\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0002\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000e\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0010%\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\u0018\u00002\u00020\u0001B\u001d\b\u0016\u0012\b\u0010\u0003\u001a\u0004\u0018\u00010\u0002\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0006\u0010\u0007J\u001d\u0010\f\u001a\u00020\u000b2\u0006\u0010\t\u001a\u00020\b2\u0006\u0010\n\u001a\u00020\b¢\u0006\u0004\b\f\u0010\rJ\u0015\u0010\u0011\u001a\u00020\u00102\u0006\u0010\u000f\u001a\u00020\u000e¢\u0006\u0004\b\u0011\u0010\u0012J\u000f\u0010\u0013\u001a\u00020\u000bH\u0014¢\u0006\u0004\b\u0013\u0010\u0014R \u0010\u0018\u001a\u000e\u0012\u0004\u0012\u00020\b\u0012\u0004\u0012\u00020\b0\u00158\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0016\u0010\u0017R\u0014\u0010\u001c\u001a\u00020\u00198\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u001a\u0010\u001b¨\u0006\u001d"}, d2 = {"Lcom/withpersona/sdk2/inquiry/shared/ui/ThemeableLottieAnimationView;", "Lcom/airbnb/lottie/LottieAnimationView;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "", "srcColor", "destColor", "", "I", "(II)V", "", "url", "Lkotlinx/coroutines/Job;", "J", "(Ljava/lang/String;)Lkotlinx/coroutines/Job;", "onDetachedFromWindow", "()V", "", "A", "Ljava/util/Map;", "srcColorToDestColor", "Lkotlinx/coroutines/CoroutineScope;", "B", "Lkotlinx/coroutines/CoroutineScope;", "scope", "shared_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class ThemeableLottieAnimationView extends LottieAnimationView {
    private final Map A;
    private final CoroutineScope B;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class a extends k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f19570d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ String f19571e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ ThemeableLottieAnimationView f19572i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0261a extends k implements Function2 {

            /* renamed from: d  reason: collision with root package name */
            int f19573d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ ThemeableLottieAnimationView f19574e;

            /* renamed from: i  reason: collision with root package name */
            final /* synthetic */ String f19575i;

            /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
            C0261a(ThemeableLottieAnimationView themeableLottieAnimationView, String str, Continuation continuation) {
                super(2, continuation);
                this.f19574e = themeableLottieAnimationView;
                this.f19575i = str;
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Continuation create(Object obj, Continuation continuation) {
                return new C0261a(this.f19574e, this.f19575i, continuation);
            }

            @Override // kotlin.coroutines.jvm.internal.a
            public final Object invokeSuspend(Object obj) {
                ur.b.f();
                if (this.f19573d == 0) {
                    kotlin.c.b(obj);
                    this.f19574e.A(this.f19575i, null);
                    return Unit.f31988a;
                }
                throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
            }

            @Override // kotlin.jvm.functions.Function2
            public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
                return ((C0261a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(String str, ThemeableLottieAnimationView themeableLottieAnimationView, Continuation continuation) {
            super(2, continuation);
            this.f19571e = str;
            this.f19572i = themeableLottieAnimationView;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public static final String k(String str) {
            try {
                InputStream openStream = new URL(str).openStream();
                Intrinsics.checkNotNull(openStream);
                String T1 = x.d(x.k(openStream)).T1();
                zr.c.a(openStream, null);
                return T1;
            } catch (Exception unused) {
                return null;
            }
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f19571e, this.f19572i, continuation);
        }

        /* JADX WARN: Code restructure failed: missing block: B:11:0x0032, code lost:
            if (r7 == r0) goto L16;
         */
        /* JADX WARN: Code restructure failed: missing block: B:16:0x004b, code lost:
            if (ms.g.g(r1, r3, r6) == r0) goto L16;
         */
        /* JADX WARN: Code restructure failed: missing block: B:17:0x004d, code lost:
            return r0;
         */
        @Override // kotlin.coroutines.jvm.internal.a
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final java.lang.Object invokeSuspend(java.lang.Object r7) {
            /*
                r6 = this;
                java.lang.Object r0 = ur.b.f()
                int r1 = r6.f19570d
                r2 = 2
                r3 = 1
                if (r1 == 0) goto L1e
                if (r1 == r3) goto L1a
                if (r1 != r2) goto L12
                kotlin.c.b(r7)
                goto L4e
            L12:
                java.lang.IllegalStateException r7 = new java.lang.IllegalStateException
                java.lang.String r0 = "call to 'resume' before 'invoke' with coroutine"
                r7.<init>(r0)
                throw r7
            L1a:
                kotlin.c.b(r7)
                goto L35
            L1e:
                kotlin.c.b(r7)
                kotlinx.coroutines.CoroutineDispatcher r7 = ms.m0.b()
                java.lang.String r1 = r6.f19571e
                com.withpersona.sdk2.inquiry.shared.ui.c r4 = new com.withpersona.sdk2.inquiry.shared.ui.c
                r4.<init>()
                r6.f19570d = r3
                java.lang.Object r7 = ms.x0.b(r7, r4, r6)
                if (r7 != r0) goto L35
                goto L4d
            L35:
                java.lang.String r7 = (java.lang.String) r7
                if (r7 == 0) goto L4e
                ms.c1 r1 = ms.m0.c()
                com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView$a$a r3 = new com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView$a$a
                com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView r4 = r6.f19572i
                r5 = 0
                r3.<init>(r4, r7, r5)
                r6.f19570d = r2
                java.lang.Object r7 = ms.g.g(r1, r3, r6)
                if (r7 != r0) goto L4e
            L4d:
                return r0
            L4e:
                kotlin.Unit r7 = kotlin.Unit.f31988a
                return r7
            */
            throw new UnsupportedOperationException("Method not decompiled: com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView.a.invokeSuspend(java.lang.Object):java.lang.Object");
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((a) create(coroutineScope, continuation)).invokeSuspend(Unit.f31988a);
        }
    }

    public ThemeableLottieAnimationView(Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        this.A = new LinkedHashMap();
        this.B = i.a(m0.a());
        j(new z() { // from class: zp.q
            @Override // l5.z
            public final void a(l5.i iVar) {
                ThemeableLottieAnimationView.G(ThemeableLottieAnimationView.this, iVar);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void G(ThemeableLottieAnimationView themeableLottieAnimationView, l5.i iVar) {
        themeableLottieAnimationView.k(new e("**"), a0.f36372a, new com.withpersona.sdk2.inquiry.shared.ui.a(themeableLottieAnimationView));
        themeableLottieAnimationView.k(new e("**"), a0.f36373b, new b(themeableLottieAnimationView));
    }

    public final void I(int i10, int i11) {
        this.A.put(Integer.valueOf(i10), Integer.valueOf(i11));
    }

    public final Job J(String url) {
        Job d10;
        Intrinsics.checkNotNullParameter(url, "url");
        d10 = ms.i.d(this.B, null, null, new a(url, this, null), 3, null);
        return d10;
    }

    @Override // android.widget.ImageView, android.view.View
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        i.f(this.B, null, 1, null);
    }
}
