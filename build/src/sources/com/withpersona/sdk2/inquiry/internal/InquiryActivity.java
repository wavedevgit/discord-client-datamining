package com.withpersona.sdk2.inquiry.internal;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.os.Parcelable;
import android.view.LayoutInflater;
import androidx.activity.ComponentActivity;
import androidx.appcompat.app.AppCompatActivity;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.FragmentTransaction;
import androidx.fragment.app.i0;
import androidx.lifecycle.ViewModelProvider;
import androidx.lifecycle.ViewModelStore;
import androidx.lifecycle.p0;
import androidx.lifecycle.viewmodel.CreationExtras;
import com.withpersona.sdk2.inquiry.internal.InquiryActivity;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import uo.f2;
@Metadata(d1 = {"\u0000:\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0005\b\u0000\u0018\u00002\u00020\u0001B\u0007¢\u0006\u0004\b\u0002\u0010\u0003J\u0019\u0010\u0007\u001a\u00020\u00062\b\u0010\u0005\u001a\u0004\u0018\u00010\u0004H\u0002¢\u0006\u0004\b\u0007\u0010\bJ\u000f\u0010\n\u001a\u00020\tH\u0002¢\u0006\u0004\b\n\u0010\u000bJ\u0017\u0010\u000e\u001a\u00020\u00062\u0006\u0010\r\u001a\u00020\fH\u0014¢\u0006\u0004\b\u000e\u0010\u000fJ\u0019\u0010\u0010\u001a\u00020\u00062\b\u0010\u0005\u001a\u0004\u0018\u00010\u0004H\u0014¢\u0006\u0004\b\u0010\u0010\bJ\u000f\u0010\u0011\u001a\u00020\u0006H\u0014¢\u0006\u0004\b\u0011\u0010\u0003J\u000f\u0010\u0012\u001a\u00020\u0006H\u0014¢\u0006\u0004\b\u0012\u0010\u0003J\u000f\u0010\u0013\u001a\u00020\u0006H\u0014¢\u0006\u0004\b\u0013\u0010\u0003R\u001b\u0010\u0019\u001a\u00020\u00148BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\u0015\u0010\u0016\u001a\u0004\b\u0017\u0010\u0018R\u001b\u0010\u001e\u001a\u00020\u001a8BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b\u001b\u0010\u0016\u001a\u0004\b\u001c\u0010\u001d¨\u0006\u001f"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/InquiryActivity;", "Landroidx/appcompat/app/AppCompatActivity;", "<init>", "()V", "Landroid/os/Bundle;", "savedInstanceState", "", "F", "(Landroid/os/Bundle;)V", "", "H", "()Z", "Landroid/content/Context;", "base", "attachBaseContext", "(Landroid/content/Context;)V", "onCreate", "onPause", "onDestroy", "onResume", "Lcom/withpersona/sdk2/inquiry/internal/h;", "d", "Lkotlin/Lazy;", "D", "()Lcom/withpersona/sdk2/inquiry/internal/h;", "args", "Lcom/withpersona/sdk2/inquiry/internal/m;", "e", "E", "()Lcom/withpersona/sdk2/inquiry/internal/m;", "viewModel", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nInquiryActivity.kt\nKotlin\n*S Kotlin\n*F\n+ 1 InquiryActivity.kt\ncom/withpersona/sdk2/inquiry/internal/InquiryActivity\n+ 2 ActivityViewModelLazy.kt\nandroidx/activity/ActivityViewModelLazyKt\n+ 3 fake.kt\nkotlin/jvm/internal/FakeKt\n+ 4 FragmentManager.kt\nandroidx/fragment/app/FragmentManagerKt\n*L\n1#1,153:1\n70#2,11:154\n1#3:165\n28#4,12:166\n*S KotlinDebug\n*F\n+ 1 InquiryActivity.kt\ncom/withpersona/sdk2/inquiry/internal/InquiryActivity\n*L\n31#1:154,11\n88#1:166,12\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class InquiryActivity extends AppCompatActivity {

    /* renamed from: d  reason: collision with root package name */
    private final Lazy f18672d = qr.l.a(new Function0() { // from class: uo.j
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            com.withpersona.sdk2.inquiry.internal.h C;
            C = InquiryActivity.C(InquiryActivity.this);
            return C;
        }
    });

    /* renamed from: e  reason: collision with root package name */
    private final Lazy f18673e = new p0(Reflection.getOrCreateKotlinClass(m.class), new b(this), new a(this), new c(null, this));

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ComponentActivity f18674d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public a(ComponentActivity componentActivity) {
            super(0);
            this.f18674d = componentActivity;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final ViewModelProvider.Factory invoke() {
            return this.f18674d.getDefaultViewModelProviderFactory();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ ComponentActivity f18675d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public b(ComponentActivity componentActivity) {
            super(0);
            this.f18675d = componentActivity;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final ViewModelStore invoke() {
            return this.f18675d.getViewModelStore();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function0 f18676d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ ComponentActivity f18677e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public c(Function0 function0, ComponentActivity componentActivity) {
            super(0);
            this.f18676d = function0;
            this.f18677e = componentActivity;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final CreationExtras invoke() {
            CreationExtras creationExtras;
            Function0 function0 = this.f18676d;
            if (function0 != null && (creationExtras = (CreationExtras) function0.invoke()) != null) {
                return creationExtras;
            }
            return this.f18677e.getDefaultViewModelCreationExtras();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final h C(InquiryActivity inquiryActivity) {
        return new h(inquiryActivity.getIntent().getExtras());
    }

    private final h D() {
        return (h) this.f18672d.getValue();
    }

    private final m E() {
        return (m) this.f18673e.getValue();
    }

    private final void F(Bundle bundle) {
        String str;
        if (!H()) {
            return;
        }
        Intent intent = new Intent();
        intent.putExtra("PERSONA_ACTIVITY_RESULT", "INQUIRY_CANCELED");
        intent.putExtra("INQUIRY_ID_KEY", D().l());
        String s10 = D().s();
        if (s10 != null) {
            str = h.f18898b.a(s10);
        } else {
            str = null;
        }
        intent.putExtra("SESSION_TOKEN_KEY", str);
        Unit unit = Unit.f32008a;
        setResult(0, intent);
        Integer w10 = D().w();
        if (w10 != null) {
            setTheme(w10.intValue());
        }
        wo.c c10 = wo.c.c(LayoutInflater.from(this));
        Intrinsics.checkNotNullExpressionValue(c10, "inflate(...)");
        setContentView(c10.getRoot());
        if (bundle == null) {
            FragmentManager supportFragmentManager = getSupportFragmentManager();
            Intrinsics.checkNotNullExpressionValue(supportFragmentManager, "getSupportFragmentManager(...)");
            FragmentTransaction r10 = supportFragmentManager.r();
            int i10 = f2.f51915d;
            j jVar = new j();
            jVar.setArguments(getIntent().getExtras());
            r10.n(i10, jVar);
            r10.g();
        }
        getSupportFragmentManager().w1(D().p(), this, new i0() { // from class: uo.k
            @Override // androidx.fragment.app.i0
            public final void a(String str2, Bundle bundle2) {
                InquiryActivity.G(InquiryActivity.this, str2, bundle2);
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void G(InquiryActivity inquiryActivity, String str, Bundle bundle) {
        Intrinsics.checkNotNullParameter(str, "<unused var>");
        Intrinsics.checkNotNullParameter(bundle, "bundle");
        Intent intent = new Intent();
        intent.putExtras(bundle);
        Unit unit = Unit.f32008a;
        inquiryActivity.setResult(-1, intent);
        inquiryActivity.finish();
    }

    private final boolean H() {
        String s10 = D().s();
        if (s10 != null && StringsKt.U(s10, '\n', false, 2, null)) {
            Intent intent = new Intent();
            intent.putExtra("PERSONA_ACTIVITY_RESULT", "INQUIRY_ERROR");
            intent.putExtra("ERROR_DEBUG_MESSAGE_KEY", "Invalid session token.");
            oq.d dVar = oq.d.f43336q;
            Intrinsics.checkNotNull(dVar, "null cannot be cast to non-null type android.os.Parcelable");
            intent.putExtra("ERROR_CODE_KEY", (Parcelable) dVar);
            Unit unit = Unit.f32008a;
            setResult(0, intent);
            finish();
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.app.AppCompatActivity, android.app.Activity, android.view.ContextThemeWrapper, android.content.ContextWrapper
    public void attachBaseContext(Context base) {
        Intrinsics.checkNotNullParameter(base, "base");
        super.attachBaseContext(base);
        cq.c.a(this);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.fragment.app.FragmentActivity, androidx.activity.ComponentActivity, androidx.core.app.ComponentActivity, android.app.Activity
    public void onCreate(Bundle bundle) {
        androidx.activity.n.b(this, null, null, 3, null);
        super.onCreate(bundle);
        try {
            F(bundle);
        } catch (Exception e10) {
            if (D().b()) {
                if (D().e()) {
                    xo.c.c(this).c(e10);
                }
                Intent intent = new Intent();
                intent.putExtra("PERSONA_ACTIVITY_RESULT", "INQUIRY_ERROR");
                intent.putExtra("ERROR_DEBUG_MESSAGE_KEY", "A fatal exception occurred.");
                oq.d dVar = oq.d.f43342w;
                Intrinsics.checkNotNull(dVar, "null cannot be cast to non-null type android.os.Parcelable");
                intent.putExtra("ERROR_CODE_KEY", (Parcelable) dVar);
                Unit unit = Unit.f32008a;
                setResult(0, intent);
                finish();
                return;
            }
            throw e10;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.appcompat.app.AppCompatActivity, androidx.fragment.app.FragmentActivity, android.app.Activity
    public void onDestroy() {
        super.onDestroy();
        E().z();
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.fragment.app.FragmentActivity, android.app.Activity
    public void onPause() {
        super.onPause();
        if (isFinishing()) {
            xo.c.e(this);
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.fragment.app.FragmentActivity, android.app.Activity
    public void onResume() {
        super.onResume();
        E().A();
    }
}
