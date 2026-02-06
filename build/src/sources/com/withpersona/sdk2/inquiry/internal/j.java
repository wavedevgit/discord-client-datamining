package com.withpersona.sdk2.inquiry.internal;

import android.content.Context;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.FrameLayout;
import androidx.appcompat.view.ContextThemeWrapper;
import androidx.fragment.app.Fragment;
import androidx.fragment.app.FragmentActivity;
import androidx.fragment.app.FragmentManager;
import androidx.fragment.app.p0;
import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleOwner;
import androidx.lifecycle.ViewModelProvider;
import androidx.lifecycle.ViewModelStore;
import androidx.lifecycle.q0;
import androidx.lifecycle.viewmodel.CreationExtras;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.withpersona.sdk2.inquiry.FallbackMode;
import com.withpersona.sdk2.inquiry.LocalStaticInquiryTemplate;
import com.withpersona.sdk2.inquiry.StaticInquiryTemplate;
import com.withpersona.sdk2.inquiry.internal.e;
import com.withpersona.sdk2.inquiry.internal.fallbackmode.c;
import com.withpersona.sdk2.inquiry.internal.n;
import com.withpersona.sdk2.inquiry.network.core.NetworkCoreModule;
import dn.e0;
import dn.i0;
import java.util.Map;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.o0;
import kotlin.coroutines.Continuation;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Lambda;
import kotlin.jvm.internal.Reflection;
import kotlin.jvm.internal.SourceDebugExtension;
import kotlin.text.StringsKt;
import kotlinx.coroutines.CoroutineScope;
import kotlinx.coroutines.flow.Flow;
import kotlinx.coroutines.flow.FlowCollector;
import kotlinx.coroutines.flow.MutableSharedFlow;
import kotlinx.coroutines.flow.MutableStateFlow;
import lq.a;
import uo.o2;
import vo.e;
@Metadata(d1 = {"\u0000\u0080\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0010\u0000\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u000e\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0006\n\u0002\u0010\b\n\u0002\b\u0006\u0018\u00002\u00020\u00012\u00020\u0002B\u0007¢\u0006\u0004\b\u0003\u0010\u0004J!\u0010\n\u001a\u00020\t2\u0006\u0010\u0006\u001a\u00020\u00052\b\u0010\b\u001a\u0004\u0018\u00010\u0007H\u0002¢\u0006\u0004\b\n\u0010\u000bJ\u000f\u0010\f\u001a\u00020\u0005H\u0002¢\u0006\u0004\b\f\u0010\rJ\u0011\u0010\u000f\u001a\u0004\u0018\u00010\u000eH\u0002¢\u0006\u0004\b\u000f\u0010\u0010J\u0017\u0010\u0013\u001a\u00020\t2\u0006\u0010\u0012\u001a\u00020\u0011H\u0016¢\u0006\u0004\b\u0013\u0010\u0014J\u0019\u0010\u0015\u001a\u00020\t2\b\u0010\b\u001a\u0004\u0018\u00010\u0007H\u0016¢\u0006\u0004\b\u0015\u0010\u0016J+\u0010\u001c\u001a\u00020\u001b2\u0006\u0010\u0018\u001a\u00020\u00172\b\u0010\u001a\u001a\u0004\u0018\u00010\u00192\b\u0010\b\u001a\u0004\u0018\u00010\u0007H\u0016¢\u0006\u0004\b\u001c\u0010\u001dJ!\u0010\u001f\u001a\u00020\t2\u0006\u0010\u001e\u001a\u00020\u001b2\b\u0010\b\u001a\u0004\u0018\u00010\u0007H\u0016¢\u0006\u0004\b\u001f\u0010 J\u000f\u0010!\u001a\u00020\tH\u0016¢\u0006\u0004\b!\u0010\u0004J\u000f\u0010\"\u001a\u00020\tH\u0016¢\u0006\u0004\b\"\u0010\u0004J\u000f\u0010#\u001a\u00020\tH\u0016¢\u0006\u0004\b#\u0010\u0004J\u000f\u0010$\u001a\u00020\tH\u0016¢\u0006\u0004\b$\u0010\u0004J\u000f\u0010%\u001a\u00020\tH\u0016¢\u0006\u0004\b%\u0010\u0004J\u0017\u0010'\u001a\u00020\t2\u0006\u0010&\u001a\u00020\u0007H\u0016¢\u0006\u0004\b'\u0010\u0016J\u0011\u0010(\u001a\u0004\u0018\u00010\u0011H\u0016¢\u0006\u0004\b(\u0010)J\u0017\u0010,\u001a\u00020\t2\u0006\u0010+\u001a\u00020*H\u0000¢\u0006\u0004\b,\u0010-R\u001b\u00103\u001a\u00020.8BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b/\u00100\u001a\u0004\b1\u00102R\u001b\u00108\u001a\u0002048BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b5\u00100\u001a\u0004\b6\u00107R\u001b\u0010=\u001a\u0002098BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b:\u00100\u001a\u0004\b;\u0010<R\u0016\u0010A\u001a\u00020>8\u0002@\u0002X\u0082.¢\u0006\u0006\n\u0004\b?\u0010@R\u0018\u0010E\u001a\u0004\u0018\u00010B8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bC\u0010DR\u0018\u0010H\u001a\u0004\u0018\u00010\u00118\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bF\u0010GR\u0014\u0010L\u001a\u00020I8BX\u0082\u0004¢\u0006\u0006\u001a\u0004\bJ\u0010KR\u0014\u0010N\u001a\u00020\u00058BX\u0082\u0004¢\u0006\u0006\u001a\u0004\bM\u0010\r¨\u0006O"}, d2 = {"Lcom/withpersona/sdk2/inquiry/internal/j;", "Landroidx/fragment/app/Fragment;", "", "<init>", "()V", "", "resetState", "Landroid/os/Bundle;", "savedInstanceState", "", "D", "(ZLandroid/os/Bundle;)V", "K", "()Z", "Lto/a;", "F", "()Lto/a;", "Landroid/content/Context;", "context", "onAttach", "(Landroid/content/Context;)V", "onCreate", "(Landroid/os/Bundle;)V", "Landroid/view/LayoutInflater;", "inflater", "Landroid/view/ViewGroup;", "container", "Landroid/view/View;", "onCreateView", "(Landroid/view/LayoutInflater;Landroid/view/ViewGroup;Landroid/os/Bundle;)Landroid/view/View;", "view", "onViewCreated", "(Landroid/view/View;Landroid/os/Bundle;)V", "onStart", "onResume", "onStop", "onDestroy", "onDetach", "outState", "onSaveInstanceState", "getContext", "()Landroid/content/Context;", "Lcom/withpersona/sdk2/inquiry/internal/n$b$a;", "cancelOutput", "J", "(Lcom/withpersona/sdk2/inquiry/internal/n$b$a;)V", "Lcom/withpersona/sdk2/inquiry/internal/h;", "d", "Lkotlin/Lazy;", "E", "()Lcom/withpersona/sdk2/inquiry/internal/h;", "args", "Lcom/withpersona/sdk2/inquiry/internal/m;", "e", "G", "()Lcom/withpersona/sdk2/inquiry/internal/m;", "viewModel", "Luo/o2;", "i", "H", "()Luo/o2;", "workflowStateViewModel", "Lwo/d;", "o", "Lwo/d;", "binding", "Luo/q;", "p", "Luo/q;", "component", "q", "Landroid/content/Context;", "themedContext", "", "getTheme", "()I", "theme", "I", "isInline", "inquiry-internal_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nInquiryFragment.kt\nKotlin\n*S Kotlin\n*F\n+ 1 InquiryFragment.kt\ncom/withpersona/sdk2/inquiry/internal/InquiryFragment\n+ 2 FragmentViewModelLazy.kt\nandroidx/fragment/app/FragmentViewModelLazyKt\n+ 3 _Sequences.kt\nkotlin/sequences/SequencesKt___SequencesKt\n*L\n1#1,532:1\n106#2,15:533\n106#2,15:548\n320#3,7:563\n*S KotlinDebug\n*F\n+ 1 InquiryFragment.kt\ncom/withpersona/sdk2/inquiry/internal/InquiryFragment\n*L\n70#1:533,15\n71#1:548,15\n502#1:563,7\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j extends Fragment {

    /* renamed from: r  reason: collision with root package name */
    public static final /* synthetic */ int f18904r = 0;

    /* renamed from: d  reason: collision with root package name */
    private final Lazy f18905d = qr.l.a(new Function0() { // from class: uo.t
        @Override // kotlin.jvm.functions.Function0
        public final Object invoke() {
            com.withpersona.sdk2.inquiry.internal.h C;
            C = com.withpersona.sdk2.inquiry.internal.j.C(com.withpersona.sdk2.inquiry.internal.j.this);
            return C;
        }
    });

    /* renamed from: e  reason: collision with root package name */
    private final Lazy f18906e;

    /* renamed from: i  reason: collision with root package name */
    private final Lazy f18907i;

    /* renamed from: o  reason: collision with root package name */
    private wo.d f18908o;

    /* renamed from: p  reason: collision with root package name */
    private uo.q f18909p;

    /* renamed from: q  reason: collision with root package name */
    private Context f18910q;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f18911d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ uo.q f18913i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* renamed from: com.withpersona.sdk2.inquiry.internal.j$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class C0238a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ j f18914d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ uo.q f18915e;

            C0238a(j jVar, uo.q qVar) {
                this.f18914d = jVar;
                this.f18915e = qVar;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            /* renamed from: a */
            public final Object emit(n.b bVar, Continuation continuation) {
                String str;
                String k10 = bVar.k();
                if (k10 != null) {
                    this.f18915e.d().h(k10);
                }
                this.f18914d.G().v().a();
                if (bVar instanceof n.b.C0244b) {
                    j jVar = this.f18914d;
                    String p10 = jVar.E().p();
                    Bundle bundle = new Bundle();
                    j jVar2 = this.f18914d;
                    bundle.putString("PERSONA_ACTIVITY_RESULT", "INQUIRY_COMPLETE");
                    n.b.C0244b c0244b = (n.b.C0244b) bVar;
                    bundle.putString("INQUIRY_ID_KEY", c0244b.b());
                    bundle.putString("INQUIRY_STATUS_KEY", c0244b.c());
                    bundle.putParcelable("FIELDS_MAP_KEY", new uo.s(c0244b.a()));
                    bundle.putParcelable("COLLECTED_DATA", uo.a.d(jVar2.G().j().c()));
                    String k11 = c0244b.k();
                    if (k11 != null) {
                        str = com.withpersona.sdk2.inquiry.internal.h.f18898b.a(k11);
                    } else {
                        str = null;
                    }
                    bundle.putString("SESSION_TOKEN_KEY", str);
                    Unit unit = Unit.f32008a;
                    androidx.fragment.app.v.a(jVar, p10, bundle);
                } else if (bVar instanceof n.b.d) {
                    n.b.d dVar = (n.b.d) bVar;
                    this.f18914d.G().o().o(dVar.a());
                    this.f18914d.G().x().o(dVar.k());
                    this.f18914d.G().D(true);
                } else if (bVar instanceof n.b.a) {
                    n.b.a aVar = (n.b.a) bVar;
                    if (aVar.b()) {
                        this.f18914d.J(aVar);
                    } else {
                        e.a aVar2 = vo.e.f52810i;
                        FragmentManager childFragmentManager = this.f18914d.getChildFragmentManager();
                        Intrinsics.checkNotNullExpressionValue(childFragmentManager, "getChildFragmentManager(...)");
                        aVar2.a(childFragmentManager, this.f18914d.getTheme(), aVar);
                    }
                } else if (bVar instanceof n.b.c) {
                    n.b.c cVar = (n.b.c) bVar;
                    String k12 = cVar.k();
                    if (k12 != null) {
                        this.f18915e.d().f(k12, cVar.a());
                    }
                    j jVar3 = this.f18914d;
                    String p11 = jVar3.E().p();
                    Bundle bundle2 = new Bundle();
                    bundle2.putString("PERSONA_ACTIVITY_RESULT", "INQUIRY_ERROR");
                    bundle2.putString("ERROR_DEBUG_MESSAGE_KEY", cVar.b());
                    bundle2.putParcelable("ERROR_CODE_KEY", cVar.c());
                    Unit unit2 = Unit.f32008a;
                    androidx.fragment.app.v.a(jVar3, p11, bundle2);
                } else {
                    throw new qr.p();
                }
                return Unit.f32008a;
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        a(uo.q qVar, Continuation continuation) {
            super(2, continuation);
            this.f18913i = qVar;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new a(this.f18913i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f18911d;
            if (i10 != 0) {
                if (i10 != 1) {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
                kotlin.c.b(obj);
            } else {
                kotlin.c.b(obj);
                rs.a0 t10 = j.this.G().t();
                C0238a c0238a = new C0238a(j.this, this.f18913i);
                this.f18911d = 1;
                if (t10.collect(c0238a, this) == f10) {
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

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b implements vp.e {

        /* renamed from: a  reason: collision with root package name */
        private final Flow f18916a;

        /* renamed from: b  reason: collision with root package name */
        private final MutableStateFlow f18917b;

        /* renamed from: c  reason: collision with root package name */
        private final MutableSharedFlow f18918c;

        /* renamed from: d  reason: collision with root package name */
        private final boolean f18919d;

        /* renamed from: e  reason: collision with root package name */
        private final boolean f18920e;

        b(j jVar) {
            this.f18916a = jVar.G().h();
            this.f18917b = jVar.G().u();
            this.f18918c = jVar.G().m();
            this.f18919d = jVar.E().A();
            this.f18920e = jVar.E().k();
        }

        @Override // vp.e
        public MutableSharedFlow a() {
            return this.f18918c;
        }

        @Override // vp.e
        public MutableStateFlow b() {
            return this.f18917b;
        }

        @Override // vp.e
        public Flow c() {
            return this.f18916a;
        }

        @Override // vp.e
        public boolean d() {
            return this.f18919d;
        }

        @Override // vp.e
        public boolean e() {
            return this.f18920e;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static final class c extends kotlin.coroutines.jvm.internal.k implements Function2 {

        /* renamed from: d  reason: collision with root package name */
        int f18921d;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ Bundle f18923i;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
        public static final class a implements FlowCollector {

            /* renamed from: d  reason: collision with root package name */
            final /* synthetic */ j f18924d;

            /* renamed from: e  reason: collision with root package name */
            final /* synthetic */ Bundle f18925e;

            a(j jVar, Bundle bundle) {
                this.f18924d = jVar;
                this.f18925e = bundle;
            }

            public final Object a(boolean z10, Continuation continuation) {
                this.f18924d.D(true, this.f18925e);
                return Unit.f32008a;
            }

            @Override // kotlinx.coroutines.flow.FlowCollector
            public /* bridge */ /* synthetic */ Object emit(Object obj, Continuation continuation) {
                return a(((Boolean) obj).booleanValue(), continuation);
            }
        }

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        c(Bundle bundle, Continuation continuation) {
            super(2, continuation);
            this.f18923i = bundle;
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Continuation create(Object obj, Continuation continuation) {
            return new c(this.f18923i, continuation);
        }

        @Override // kotlin.coroutines.jvm.internal.a
        public final Object invokeSuspend(Object obj) {
            Object f10 = wr.b.f();
            int i10 = this.f18921d;
            if (i10 != 0) {
                if (i10 == 1) {
                    kotlin.c.b(obj);
                } else {
                    throw new IllegalStateException("call to 'resume' before 'invoke' with coroutine");
                }
            } else {
                kotlin.c.b(obj);
                Flow m10 = rs.g.m(j.this.G().n(), 1);
                a aVar = new a(j.this, this.f18923i);
                this.f18921d = 1;
                if (m10.collect(aVar, this) == f10) {
                    return f10;
                }
            }
            return Unit.f32008a;
        }

        @Override // kotlin.jvm.functions.Function2
        public final Object invoke(CoroutineScope coroutineScope, Continuation continuation) {
            return ((c) create(coroutineScope, continuation)).invokeSuspend(Unit.f32008a);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Fragment f18926d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Lazy f18927e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public d(Fragment fragment, Lazy lazy) {
            super(0);
            this.f18926d = fragment;
            this.f18927e = lazy;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final ViewModelProvider.Factory invoke() {
            androidx.lifecycle.h hVar;
            ViewModelProvider.Factory defaultViewModelProviderFactory;
            q0 a10 = p0.a(this.f18927e);
            if (a10 instanceof androidx.lifecycle.h) {
                hVar = (androidx.lifecycle.h) a10;
            } else {
                hVar = null;
            }
            if (hVar != null && (defaultViewModelProviderFactory = hVar.getDefaultViewModelProviderFactory()) != null) {
                return defaultViewModelProviderFactory;
            }
            return this.f18926d.getDefaultViewModelProviderFactory();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Fragment f18928d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public e(Fragment fragment) {
            super(0);
            this.f18928d = fragment;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final Fragment invoke() {
            return this.f18928d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function0 f18929d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public f(Function0 function0) {
            super(0);
            this.f18929d = function0;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final q0 invoke() {
            return (q0) this.f18929d.invoke();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class g extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Lazy f18930d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public g(Lazy lazy) {
            super(0);
            this.f18930d = lazy;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final ViewModelStore invoke() {
            return p0.a(this.f18930d).getViewModelStore();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function0 f18931d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Lazy f18932e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public h(Function0 function0, Lazy lazy) {
            super(0);
            this.f18931d = function0;
            this.f18932e = lazy;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final CreationExtras invoke() {
            androidx.lifecycle.h hVar;
            CreationExtras creationExtras;
            Function0 function0 = this.f18931d;
            if (function0 != null && (creationExtras = (CreationExtras) function0.invoke()) != null) {
                return creationExtras;
            }
            q0 a10 = p0.a(this.f18932e);
            if (a10 instanceof androidx.lifecycle.h) {
                hVar = (androidx.lifecycle.h) a10;
            } else {
                hVar = null;
            }
            if (hVar != null) {
                return hVar.getDefaultViewModelCreationExtras();
            }
            return CreationExtras.b.f4985c;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Fragment f18933d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Lazy f18934e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public i(Fragment fragment, Lazy lazy) {
            super(0);
            this.f18933d = fragment;
            this.f18934e = lazy;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final ViewModelProvider.Factory invoke() {
            androidx.lifecycle.h hVar;
            ViewModelProvider.Factory defaultViewModelProviderFactory;
            q0 a10 = p0.a(this.f18934e);
            if (a10 instanceof androidx.lifecycle.h) {
                hVar = (androidx.lifecycle.h) a10;
            } else {
                hVar = null;
            }
            if (hVar != null && (defaultViewModelProviderFactory = hVar.getDefaultViewModelProviderFactory()) != null) {
                return defaultViewModelProviderFactory;
            }
            return this.f18933d.getDefaultViewModelProviderFactory();
        }
    }

    /* renamed from: com.withpersona.sdk2.inquiry.internal.j$j  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class C0239j extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Fragment f18935d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public C0239j(Fragment fragment) {
            super(0);
            this.f18935d = fragment;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final Fragment invoke() {
            return this.f18935d;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class k extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function0 f18936d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public k(Function0 function0) {
            super(0);
            this.f18936d = function0;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final q0 invoke() {
            return (q0) this.f18936d.invoke();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class l extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Lazy f18937d;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public l(Lazy lazy) {
            super(0);
            this.f18937d = lazy;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final ViewModelStore invoke() {
            return p0.a(this.f18937d).getViewModelStore();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class m extends Lambda implements Function0 {

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Function0 f18938d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ Lazy f18939e;

        /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
        public m(Function0 function0, Lazy lazy) {
            super(0);
            this.f18938d = function0;
            this.f18939e = lazy;
        }

        @Override // kotlin.jvm.functions.Function0
        /* renamed from: a */
        public final CreationExtras invoke() {
            androidx.lifecycle.h hVar;
            CreationExtras creationExtras;
            Function0 function0 = this.f18938d;
            if (function0 != null && (creationExtras = (CreationExtras) function0.invoke()) != null) {
                return creationExtras;
            }
            q0 a10 = p0.a(this.f18939e);
            if (a10 instanceof androidx.lifecycle.h) {
                hVar = (androidx.lifecycle.h) a10;
            } else {
                hVar = null;
            }
            if (hVar != null) {
                return hVar.getDefaultViewModelCreationExtras();
            }
            return CreationExtras.b.f4985c;
        }
    }

    public j() {
        e eVar = new e(this);
        qr.o oVar = qr.o.f48045i;
        Lazy b10 = qr.l.b(oVar, new f(eVar));
        this.f18906e = p0.b(this, Reflection.getOrCreateKotlinClass(com.withpersona.sdk2.inquiry.internal.m.class), new g(b10), new h(null, b10), new i(this, b10));
        Lazy b11 = qr.l.b(oVar, new k(new C0239j(this)));
        this.f18907i = p0.b(this, Reflection.getOrCreateKotlinClass(o2.class), new l(b11), new m(null, b11), new d(this, b11));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final com.withpersona.sdk2.inquiry.internal.h C(j jVar) {
        return new com.withpersona.sdk2.inquiry.internal.h(jVar.getArguments());
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void D(boolean z10, Bundle bundle) {
        String str;
        String str2;
        String str3;
        sp.a dVar;
        FallbackMode fallbackMode;
        LocalStaticInquiryTemplate localStaticInquiryTemplate;
        com.withpersona.sdk2.inquiry.internal.fallbackmode.a aVar;
        Map map;
        n.c c0245c;
        Context requireContext = requireContext();
        Intrinsics.checkNotNullExpressionValue(requireContext, "requireContext(...)");
        String packageName = requireContext.getPackageName();
        Intrinsics.checkNotNullExpressionValue(packageName, "getPackageName(...)");
        if (StringsKt.P(packageName, "com.withpersona", false, 2, null)) {
            str = E().r();
        } else {
            str = "https://withpersona.com";
        }
        String packageName2 = requireContext.getPackageName();
        Intrinsics.checkNotNullExpressionValue(packageName2, "getPackageName(...)");
        if (StringsKt.P(packageName2, "com.withpersona", false, 2, null)) {
            str2 = E().z();
        } else {
            str2 = "https://webrtc-consumer.withpersona.com";
        }
        String packageName3 = requireContext.getPackageName();
        Intrinsics.checkNotNullExpressionValue(packageName3, "getPackageName(...)");
        if (StringsKt.P(packageName3, "com.withpersona", false, 2, null)) {
            str3 = E().i();
        } else {
            str3 = "https://inquiry-fallback.withpersona.com";
        }
        if (E().q()) {
            dVar = G().j();
        } else {
            dVar = new sp.d();
        }
        if (!((Boolean) G().n().getValue()).booleanValue() && E().t() == null) {
            fallbackMode = E().h();
        } else {
            fallbackMode = FallbackMode.ALWAYS;
        }
        if (fallbackMode == FallbackMode.ALWAYS) {
            aVar = new com.withpersona.sdk2.inquiry.internal.fallbackmode.a(c.a.f18835a);
        } else {
            StaticInquiryTemplate t10 = E().t();
            if (t10 instanceof LocalStaticInquiryTemplate) {
                localStaticInquiryTemplate = (LocalStaticInquiryTemplate) t10;
            } else {
                localStaticInquiryTemplate = null;
            }
            if (localStaticInquiryTemplate != null) {
                aVar = new com.withpersona.sdk2.inquiry.internal.fallbackmode.a(new c.b(localStaticInquiryTemplate.getResourceId()));
            } else {
                aVar = new com.withpersona.sdk2.inquiry.internal.fallbackmode.a(c.a.f18835a);
            }
        }
        b bVar = new b(this);
        e.a a10 = com.withpersona.sdk2.inquiry.internal.e.a();
        FragmentActivity requireActivity = requireActivity();
        Intrinsics.checkNotNullExpressionValue(requireActivity, "requireActivity(...)");
        uo.q b10 = a10.j(new uo.l(requireActivity)).e(new cp.g(G().q(), G().l(), G().w())).f(new cp.o(G().k())).n(new cp.u(G().r())).m(new gp.g(G().p())).c(new cp.b(G().i())).l(new NetworkCoreModule(E().y(), E().g(), E().m())).d(new sp.b(dVar)).k(new com.withpersona.sdk2.inquiry.internal.network.f(str, str2, str3)).a(aVar).g(new vp.f(bVar)).p(new rp.v(E().c(), E().d())).o(new cp.a0(G().s())).h(new yo.c(fallbackMode, E().f(), H().e())).i(new wp.a(G().v())).b();
        this.f18909p = b10;
        a.C0486a c0486a = lq.a.f36504a;
        c0486a.b(b10.g());
        c0486a.a().b(bundle);
        String str4 = (String) G().o().f();
        String n10 = E().n();
        String str5 = (String) G().x().f();
        com.withpersona.sdk2.inquiry.internal.m G = G();
        Intrinsics.checkNotNull(b10);
        if (str4 != null) {
            c0245c = new n.c.a(str4, str5, E().g(), E().f(), E().w(), false, 32, null);
        } else if (n10 != null) {
            c0245c = new n.c.b(n10, E().f(), E().w(), false, 8, null);
        } else {
            String u10 = E().u();
            String v10 = E().v();
            String a11 = E().a();
            String o10 = E().o();
            uo.s j10 = E().j();
            if (j10 != null) {
                map = j10.a();
            } else {
                map = null;
            }
            c0245c = new n.c.C0245c(u10, v10, a11, o10, E().g(), map, E().x(), E().t(), E().f(), E().w(), false, IntBufferBatchMountItem.INSTRUCTION_UPDATE_OVERFLOW_INSET, null);
        }
        G.g(b10, c0245c, H(), z10);
        Context requireContext2 = requireContext();
        Intrinsics.checkNotNullExpressionValue(requireContext2, "requireContext(...)");
        i0 i0Var = new i0(requireContext2, null, 2, null);
        Lifecycle lifecycle = getLifecycle();
        Intrinsics.checkNotNullExpressionValue(lifecycle, "<get-lifecycle>(...)");
        i0.b(i0Var, lifecycle, G().C(H()), null, new dn.a0(o0.m(qr.v.a(e0.f20867a, G().E()), qr.v.a(aq.b.f6281b, b10.f()))), 4, null);
        wo.d dVar2 = this.f18908o;
        if (dVar2 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("binding");
            dVar2 = null;
        }
        dVar2.getRoot().removeAllViews();
        wo.d dVar3 = this.f18908o;
        if (dVar3 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("binding");
            dVar3 = null;
        }
        dVar3.getRoot().addView(i0Var);
        LifecycleOwner viewLifecycleOwner = getViewLifecycleOwner();
        Intrinsics.checkNotNullExpressionValue(viewLifecycleOwner, "getViewLifecycleOwner(...)");
        os.i.d(androidx.lifecycle.p.a(viewLifecycleOwner), null, null, new a(b10, null), 3, null);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final com.withpersona.sdk2.inquiry.internal.h E() {
        return (com.withpersona.sdk2.inquiry.internal.h) this.f18905d.getValue();
    }

    private final to.a F() {
        getParentFragment();
        getActivity();
        return null;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final com.withpersona.sdk2.inquiry.internal.m G() {
        return (com.withpersona.sdk2.inquiry.internal.m) this.f18906e.getValue();
    }

    private final o2 H() {
        return (o2) this.f18907i.getValue();
    }

    private final boolean I() {
        if (requireActivity().getClass() != InquiryActivity.class) {
            return true;
        }
        return false;
    }

    private final boolean K() {
        String s10 = E().s();
        if (s10 != null && StringsKt.U(s10, '\n', false, 2, null)) {
            String p10 = E().p();
            Bundle bundle = new Bundle();
            bundle.putString("PERSONA_ACTIVITY_RESULT", "INQUIRY_ERROR");
            bundle.putString("ERROR_DEBUG_MESSAGE_KEY", "Invalid session token.");
            bundle.putParcelable("ERROR_CODE_KEY", oq.d.f43336q);
            Unit unit = Unit.f32008a;
            androidx.fragment.app.v.a(this, p10, bundle);
            getParentFragmentManager().d1();
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final int getTheme() {
        if (I()) {
            Integer w10 = E().w();
            if (w10 != null && w10.intValue() != 0) {
                return w10.intValue();
            }
            return jp.f.f30819b;
        }
        return 0;
    }

    public final void J(n.b.a cancelOutput) {
        String str;
        uo.q qVar;
        uo.g d10;
        Intrinsics.checkNotNullParameter(cancelOutput, "cancelOutput");
        String k10 = cancelOutput.k();
        if (k10 != null && (qVar = this.f18909p) != null && (d10 = qVar.d()) != null) {
            d10.i(k10);
        }
        String p10 = E().p();
        Bundle bundle = new Bundle();
        bundle.putString("PERSONA_ACTIVITY_RESULT", "INQUIRY_CANCELED");
        if (rp.h.f(cancelOutput.c())) {
            bundle.putString("INQUIRY_ID_KEY", cancelOutput.c());
            String k11 = cancelOutput.k();
            if (k11 != null) {
                str = com.withpersona.sdk2.inquiry.internal.h.f18898b.a(k11);
            } else {
                str = null;
            }
            bundle.putString("SESSION_TOKEN_KEY", str);
        }
        Unit unit = Unit.f32008a;
        androidx.fragment.app.v.a(this, p10, bundle);
    }

    @Override // androidx.fragment.app.Fragment
    public Context getContext() {
        Context context = this.f18910q;
        if (context == null) {
            return super.getContext();
        }
        return context;
    }

    @Override // androidx.fragment.app.Fragment
    public void onAttach(Context context) {
        int i10;
        Intrinsics.checkNotNullParameter(context, "context");
        super.onAttach(context);
        if (I()) {
            Integer w10 = E().w();
            if (w10 != null && w10.intValue() != 0) {
                i10 = w10.intValue();
            } else {
                i10 = jp.f.f30819b;
            }
            this.f18910q = new ContextThemeWrapper(context, i10);
            return;
        }
        this.f18910q = context;
    }

    @Override // androidx.fragment.app.Fragment
    public void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        Context requireContext = requireContext();
        Intrinsics.checkNotNullExpressionValue(requireContext, "requireContext(...)");
        xo.c.a(requireContext);
        if (!E().e() && !E().b()) {
            return;
        }
        xo.c.d(requireContext, G().v().b());
    }

    @Override // androidx.fragment.app.Fragment
    public View onCreateView(LayoutInflater inflater, ViewGroup viewGroup, Bundle bundle) {
        Intrinsics.checkNotNullParameter(inflater, "inflater");
        super.onCreateView(inflater, viewGroup, bundle);
        wo.d c10 = wo.d.c(inflater, viewGroup, false);
        this.f18908o = c10;
        if (c10 == null) {
            Intrinsics.throwUninitializedPropertyAccessException("binding");
            c10 = null;
        }
        FrameLayout root = c10.getRoot();
        Intrinsics.checkNotNullExpressionValue(root, "getRoot(...)");
        return root;
    }

    @Override // androidx.fragment.app.Fragment
    public void onDestroy() {
        Context requireContext = requireContext();
        Intrinsics.checkNotNullExpressionValue(requireContext, "requireContext(...)");
        xo.c.e(requireContext);
        F();
        super.onDestroy();
        G().z();
    }

    @Override // androidx.fragment.app.Fragment
    public void onDetach() {
        super.onDetach();
        this.f18910q = null;
    }

    @Override // androidx.fragment.app.Fragment
    public void onResume() {
        super.onResume();
        G().A();
    }

    @Override // androidx.fragment.app.Fragment
    public void onSaveInstanceState(Bundle outState) {
        Intrinsics.checkNotNullParameter(outState, "outState");
        super.onSaveInstanceState(outState);
        lq.a.f36504a.a().e(outState);
    }

    @Override // androidx.fragment.app.Fragment
    public void onStart() {
        super.onStart();
        Context requireContext = requireContext();
        Intrinsics.checkNotNullExpressionValue(requireContext, "requireContext(...)");
        bo.c.d(requireContext);
    }

    @Override // androidx.fragment.app.Fragment
    public void onStop() {
        super.onStop();
        Context requireContext = requireContext();
        Intrinsics.checkNotNullExpressionValue(requireContext, "requireContext(...)");
        bo.c.f(requireContext);
    }

    @Override // androidx.fragment.app.Fragment
    public void onViewCreated(View view, Bundle bundle) {
        Intrinsics.checkNotNullParameter(view, "view");
        super.onViewCreated(view, bundle);
        try {
            if (!K()) {
                return;
            }
            G().y(this);
            G().o().o(E().l());
            G().x().o(E().s());
            LifecycleOwner viewLifecycleOwner = getViewLifecycleOwner();
            Intrinsics.checkNotNullExpressionValue(viewLifecycleOwner, "getViewLifecycleOwner(...)");
            os.i.d(androidx.lifecycle.p.a(viewLifecycleOwner), null, null, new c(bundle, null), 3, null);
            D(false, bundle);
            F();
        } catch (Exception e10) {
            if (E().b()) {
                if (E().e()) {
                    Context requireContext = requireContext();
                    Intrinsics.checkNotNullExpressionValue(requireContext, "requireContext(...)");
                    xo.c.c(requireContext).c(e10);
                }
                String p10 = E().p();
                Bundle bundle2 = new Bundle();
                bundle2.putString("PERSONA_ACTIVITY_RESULT", "INQUIRY_ERROR");
                bundle2.putString("ERROR_DEBUG_MESSAGE_KEY", "A fatal exception occurred.");
                bundle2.putParcelable("ERROR_CODE_KEY", oq.d.f43342w);
                Unit unit = Unit.f32008a;
                androidx.fragment.app.v.a(this, p10, bundle2);
                return;
            }
            throw e10;
        }
    }
}
