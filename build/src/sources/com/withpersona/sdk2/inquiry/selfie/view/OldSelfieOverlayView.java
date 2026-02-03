package com.withpersona.sdk2.inquiry.selfie.view;

import android.animation.Animator;
import android.animation.AnimatorListenerAdapter;
import android.content.Context;
import android.graphics.Color;
import android.graphics.drawable.Drawable;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewPropertyAnimator;
import android.widget.ImageView;
import androidx.constraintlayout.widget.ConstraintLayout;
import com.withpersona.sdk2.inquiry.network.dto.ui.components.RemoteImage;
import com.withpersona.sdk2.inquiry.network.dto.ui.styling.StepStyles;
import com.withpersona.sdk2.inquiry.selfie.view.OldSelfieOverlayView;
import com.withpersona.sdk2.inquiry.shared.ui.ThemeableLottieAnimationView;
import fp.v0;
import fp.y0;
import java.util.ArrayList;
import java.util.List;
import jr.l;
import jr.p;
import kotlin.Lazy;
import kotlin.Metadata;
import kotlin.Unit;
import kotlin.collections.CollectionsKt;
import kotlin.enums.EnumEntries;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.SourceDebugExtension;
import kp.h;
import kp.s;
import l5.i;
import l5.z;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0080\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0000\n\u0002\u0010\u000b\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\b\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0010\t\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\b\u0014\n\u0002\u0018\u0002\n\u0002\b\r\n\u0002\u0010!\n\u0002\b\u000b\u0018\u00002\u00020\u0001:\u0001^B'\b\u0007\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\n\b\u0002\u0010\u0005\u001a\u0004\u0018\u00010\u0004\u0012\b\b\u0002\u0010\u0007\u001a\u00020\u0006¢\u0006\u0004\b\b\u0010\tJ\u0015\u0010\r\u001a\u00020\f2\u0006\u0010\u000b\u001a\u00020\n¢\u0006\u0004\b\r\u0010\u000eJ\u0015\u0010\u0011\u001a\u00020\f2\u0006\u0010\u0010\u001a\u00020\u000f¢\u0006\u0004\b\u0011\u0010\u0012J1\u0010\u0019\u001a\u00020\f2\u0006\u0010\u0014\u001a\u00020\u00132\b\b\u0002\u0010\u0016\u001a\u00020\u00152\u0010\b\u0002\u0010\u0018\u001a\n\u0012\u0004\u0012\u00020\f\u0018\u00010\u0017¢\u0006\u0004\b\u0019\u0010\u001aJ\u0019\u0010\u001d\u001a\u00020\u00152\b\u0010\u001c\u001a\u0004\u0018\u00010\u001bH\u0016¢\u0006\u0004\b\u001d\u0010\u001eJ\r\u0010\u001f\u001a\u00020\u0015¢\u0006\u0004\b\u001f\u0010 J\u001b\u0010\"\u001a\u00020\f2\f\u0010!\u001a\b\u0012\u0004\u0012\u00020\f0\u0017¢\u0006\u0004\b\"\u0010#J-\u0010&\u001a\u00020\f*\u00020$2\b\b\u0001\u0010%\u001a\u00020\u00062\u000e\u0010\u0018\u001a\n\u0012\u0004\u0012\u00020\f\u0018\u00010\u0017H\u0002¢\u0006\u0004\b&\u0010'J#\u0010(\u001a\u00020\f*\u00020$2\u000e\u0010\u0018\u001a\n\u0012\u0004\u0012\u00020\f\u0018\u00010\u0017H\u0002¢\u0006\u0004\b(\u0010)J\u001d\u0010-\u001a\u00020,*\u00020\n2\b\b\u0002\u0010+\u001a\u00020*H\u0002¢\u0006\u0004\b-\u0010.J\u001d\u0010/\u001a\u00020,*\u00020\n2\b\b\u0002\u0010+\u001a\u00020*H\u0002¢\u0006\u0004\b/\u0010.J\u001d\u00103\u001a\u00020\f*\u0002002\b\u00102\u001a\u0004\u0018\u000101H\u0002¢\u0006\u0004\b3\u00104J\u0017\u00105\u001a\u00020\u00152\u0006\u0010\u0003\u001a\u00020\u0002H\u0002¢\u0006\u0004\b5\u00106R\u0014\u00109\u001a\u00020$8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b7\u00108R\u001d\u0010>\u001a\u0004\u0018\u0001018BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b:\u0010;\u001a\u0004\b<\u0010=R\u001d\u0010A\u001a\u0004\u0018\u0001018BX\u0082\u0084\u0002¢\u0006\f\n\u0004\b?\u0010;\u001a\u0004\b@\u0010=R\u0014\u0010C\u001a\u00020\u00068\u0002X\u0083\u0004¢\u0006\u0006\n\u0004\bB\u0010\u0019R\u0014\u0010E\u001a\u00020\u00068\u0002X\u0083\u0004¢\u0006\u0006\n\u0004\bD\u0010\u0019R$\u0010M\u001a\u0004\u0018\u00010F8\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\bG\u0010H\u001a\u0004\bI\u0010J\"\u0004\bK\u0010LR$\u0010Q\u001a\u0004\u0018\u00010F8\u0006@\u0006X\u0086\u000e¢\u0006\u0012\n\u0004\bN\u0010H\u001a\u0004\bO\u0010J\"\u0004\bP\u0010LR\u0016\u0010\u000b\u001a\u00020\n8\u0002@\u0002X\u0082.¢\u0006\u0006\n\u0004\bR\u0010SR \u0010W\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\f0\u00170T8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bU\u0010VR \u0010Y\u001a\u000e\u0012\n\u0012\b\u0012\u0004\u0012\u00020\f0\u00170T8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bX\u0010VR\u0018\u0010Z\u001a\u0004\u0018\u00010\n8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b-\u0010SR\u0018\u0010]\u001a\u0004\u0018\u00010\u00138\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b[\u0010\\¨\u0006_"}, d2 = {"Lcom/withpersona/sdk2/inquiry/selfie/view/OldSelfieOverlayView;", "Landroidx/constraintlayout/widget/ConstraintLayout;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "", "defStyleAttr", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;I)V", "Landroid/view/View;", "previewView", "", "setPreviewView", "(Landroid/view/View;)V", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$SelfieStepStyle;", "styles", "A", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/styling/StepStyles$SelfieStepStyle;)V", "Lcom/withpersona/sdk2/inquiry/selfie/view/OldSelfieOverlayView$b;", "viewState", "", "showProgress", "Lkotlin/Function0;", "onAnimationEnd", "I", "(Lcom/withpersona/sdk2/inquiry/selfie/view/OldSelfieOverlayView$b;ZLkotlin/jvm/functions/Function0;)V", "Landroid/view/MotionEvent;", "event", "onTouchEvent", "(Landroid/view/MotionEvent;)Z", "E", "()Z", "onComplete", "B", "(Lkotlin/jvm/functions/Function0;)V", "Lgp/b;", "rawRes", "M", "(Lgp/b;ILkotlin/jvm/functions/Function0;)V", "F", "(Lgp/b;Lkotlin/jvm/functions/Function0;)V", "", "duration", "Landroid/view/ViewPropertyAnimator;", "v", "(Landroid/view/View;J)Landroid/view/ViewPropertyAnimator;", "y", "Landroid/widget/ImageView;", "Landroid/graphics/drawable/Drawable;", "drawable", "R", "(Landroid/widget/ImageView;Landroid/graphics/drawable/Drawable;)V", "T", "(Landroid/content/Context;)Z", "d", "Lgp/b;", "binding", "e", "Lkotlin/Lazy;", "getDrawableLeft", "()Landroid/graphics/drawable/Drawable;", "drawableLeft", "i", "getDrawableRight", "drawableRight", "o", "leftPoseAnimation", "p", "rightPoseAnimation", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;", "q", "Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;", "getLeftPoseImage", "()Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;", "setLeftPoseImage", "(Lcom/withpersona/sdk2/inquiry/network/dto/ui/components/RemoteImage;)V", "leftPoseImage", "r", "getRightPoseImage", "setRightPoseImage", "rightPoseImage", "s", "Landroid/view/View;", "", "t", "Ljava/util/List;", "oneShotOnCompositionLoadedListeners", "u", "oneShotOnAnimationCompleteListeners", "remoteImageView", "w", "Lcom/withpersona/sdk2/inquiry/selfie/view/OldSelfieOverlayView$b;", "currentViewState", "b", "selfie_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nOldSelfieOverlayView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 OldSelfieOverlayView.kt\ncom/withpersona/sdk2/inquiry/selfie/view/OldSelfieOverlayView\n+ 2 _Collections.kt\nkotlin/collections/CollectionsKt___CollectionsKt\n*L\n1#1,423:1\n1863#2,2:424\n*S KotlinDebug\n*F\n+ 1 OldSelfieOverlayView.kt\ncom/withpersona/sdk2/inquiry/selfie/view/OldSelfieOverlayView\n*L\n96#1:424,2\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class OldSelfieOverlayView extends ConstraintLayout {

    /* renamed from: d */
    private final gp.b f20049d;

    /* renamed from: e */
    private final Lazy f20050e;

    /* renamed from: i */
    private final Lazy f20051i;

    /* renamed from: o */
    private final int f20052o;

    /* renamed from: p */
    private final int f20053p;

    /* renamed from: q */
    private RemoteImage f20054q;

    /* renamed from: r */
    private RemoteImage f20055r;

    /* renamed from: s */
    private View f20056s;

    /* renamed from: t */
    private final List f20057t;

    /* renamed from: u */
    private final List f20058u;

    /* renamed from: v */
    private View f20059v;

    /* renamed from: w */
    private b f20060w;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends AnimatorListenerAdapter {
        a() {
            OldSelfieOverlayView.this = r1;
        }

        @Override // android.animation.AnimatorListenerAdapter, android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animation) {
            Intrinsics.checkNotNullParameter(animation, "animation");
            List<Function0> h12 = CollectionsKt.h1(OldSelfieOverlayView.this.f20058u);
            OldSelfieOverlayView.this.f20058u.clear();
            for (Function0 function0 : h12) {
                function0.invoke();
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: d */
        public static final b f20062d = new b("CLEAR", 0);

        /* renamed from: e */
        public static final b f20063e = new b("CENTER", 1);

        /* renamed from: i */
        public static final b f20064i = new b("CENTER_COMPLETE", 2);

        /* renamed from: o */
        public static final b f20065o = new b("LOOK_LEFT_HINT", 3);

        /* renamed from: p */
        public static final b f20066p = new b("LOOK_LEFT", 4);

        /* renamed from: q */
        public static final b f20067q = new b("LOOK_LEFT_COMPLETE", 5);

        /* renamed from: r */
        public static final b f20068r = new b("LOOK_RIGHT_HINT", 6);

        /* renamed from: s */
        public static final b f20069s = new b("LOOK_RIGHT", 7);

        /* renamed from: t */
        public static final b f20070t = new b("LOOK_RIGHT_COMPLETE", 8);

        /* renamed from: u */
        public static final b f20071u = new b("FINALIZING", 9);

        /* renamed from: v */
        public static final b f20072v = new b("COMPLETE_WITH_CAPTURE", 10);

        /* renamed from: w */
        public static final b f20073w = new b("COMPLETE", 11);

        /* renamed from: x */
        private static final /* synthetic */ b[] f20074x;

        /* renamed from: y */
        private static final /* synthetic */ EnumEntries f20075y;

        static {
            b[] a10 = a();
            f20074x = a10;
            f20075y = qr.a.a(a10);
        }

        private b(String str, int i10) {
            super(str, i10);
        }

        private static final /* synthetic */ b[] a() {
            return new b[]{f20062d, f20063e, f20064i, f20065o, f20066p, f20067q, f20068r, f20069s, f20070t, f20071u, f20072v, f20073w};
        }

        public static b valueOf(String str) {
            return (b) Enum.valueOf(b.class, str);
        }

        public static b[] values() {
            return (b[]) f20074x.clone();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class c {

        /* renamed from: a */
        public static final /* synthetic */ int[] f20076a;

        static {
            int[] iArr = new int[b.values().length];
            try {
                iArr[b.f20062d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[b.f20063e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[b.f20064i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[b.f20065o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[b.f20066p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                iArr[b.f20067q.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                iArr[b.f20068r.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                iArr[b.f20069s.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                iArr[b.f20070t.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                iArr[b.f20071u.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                iArr[b.f20072v.ordinal()] = 11;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                iArr[b.f20073w.ordinal()] = 12;
            } catch (NoSuchFieldError unused12) {
            }
            f20076a = iArr;
        }
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public OldSelfieOverlayView(@NotNull Context context, AttributeSet attributeSet) {
        this(context, attributeSet, 0, 4, null);
        Intrinsics.checkNotNullParameter(context, "context");
    }

    public static final Drawable C(Context context) {
        Integer f10 = s.f(context, cp.a.f20623q, null, false, 6, null);
        if (f10 != null) {
            return androidx.core.content.a.e(context, f10.intValue());
        }
        return androidx.core.content.a.e(context, v0.f24963a);
    }

    public static final Drawable D(Context context) {
        Integer f10 = s.f(context, cp.a.f20625s, null, false, 6, null);
        if (f10 != null) {
            return androidx.core.content.a.e(context, f10.intValue());
        }
        return androidx.core.content.a.e(context, v0.f24964b);
    }

    private final void F(final gp.b bVar, final Function0 function0) {
        View blindsView = bVar.f27323b;
        Intrinsics.checkNotNullExpressionValue(blindsView, "blindsView");
        y(blindsView, 80L).withEndAction(new Runnable() { // from class: jp.k
            @Override // java.lang.Runnable
            public final void run() {
                OldSelfieOverlayView.G(OldSelfieOverlayView.this, bVar, function0);
            }
        });
    }

    public static final void G(OldSelfieOverlayView oldSelfieOverlayView, gp.b bVar, final Function0 function0) {
        View blindsView = bVar.f27323b;
        Intrinsics.checkNotNullExpressionValue(blindsView, "blindsView");
        oldSelfieOverlayView.v(blindsView, 80L).withEndAction(new Runnable() { // from class: jp.b
            @Override // java.lang.Runnable
            public final void run() {
                OldSelfieOverlayView.H(Function0.this);
            }
        });
    }

    public static final void H(Function0 function0) {
        if (function0 != null) {
            function0.invoke();
        }
    }

    public static /* synthetic */ void J(OldSelfieOverlayView oldSelfieOverlayView, b bVar, boolean z10, Function0 function0, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = true;
        }
        if ((i10 & 4) != 0) {
            function0 = null;
        }
        oldSelfieOverlayView.I(bVar, z10, function0);
    }

    public static final Unit K(OldSelfieOverlayView oldSelfieOverlayView, Function0 function0) {
        oldSelfieOverlayView.M(oldSelfieOverlayView.f20049d, y0.f25498a, function0);
        return Unit.f33074a;
    }

    public static final Unit L(OldSelfieOverlayView oldSelfieOverlayView, Function0 function0) {
        oldSelfieOverlayView.M(oldSelfieOverlayView.f20049d, y0.f25498a, function0);
        return Unit.f33074a;
    }

    private final void M(final gp.b bVar, int i10, final Function0 function0) {
        this.f20057t.add(new Function0() { // from class: jp.i
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit N;
                N = OldSelfieOverlayView.N(gp.b.this, this, function0);
                return N;
            }
        });
        bVar.f27325d.setAnimation(i10);
    }

    public static final Unit N(final gp.b bVar, OldSelfieOverlayView oldSelfieOverlayView, final Function0 function0) {
        bVar.f27325d.setFrame(0);
        ThemeableLottieAnimationView hintAnimation = bVar.f27325d;
        Intrinsics.checkNotNullExpressionValue(hintAnimation, "hintAnimation");
        z(oldSelfieOverlayView, hintAnimation, 0L, 1, null).withEndAction(new Runnable() { // from class: jp.l
            @Override // java.lang.Runnable
            public final void run() {
                OldSelfieOverlayView.O(OldSelfieOverlayView.this, bVar, function0);
            }
        });
        View hintOverlayView = bVar.f27327f;
        Intrinsics.checkNotNullExpressionValue(hintOverlayView, "hintOverlayView");
        z(oldSelfieOverlayView, hintOverlayView, 0L, 1, null);
        return Unit.f33074a;
    }

    public static final void O(OldSelfieOverlayView oldSelfieOverlayView, final gp.b bVar, final Function0 function0) {
        oldSelfieOverlayView.f20058u.add(new Function0() { // from class: jp.c
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Unit P;
                P = OldSelfieOverlayView.P(OldSelfieOverlayView.this, bVar, function0);
                return P;
            }
        });
        bVar.f27325d.playAnimation();
    }

    public static final Unit P(OldSelfieOverlayView oldSelfieOverlayView, gp.b bVar, final Function0 function0) {
        ThemeableLottieAnimationView hintAnimation = bVar.f27325d;
        Intrinsics.checkNotNullExpressionValue(hintAnimation, "hintAnimation");
        w(oldSelfieOverlayView, hintAnimation, 0L, 1, null).withEndAction(new Runnable() { // from class: jp.d
            @Override // java.lang.Runnable
            public final void run() {
                OldSelfieOverlayView.Q(Function0.this);
            }
        });
        View hintOverlayView = bVar.f27327f;
        Intrinsics.checkNotNullExpressionValue(hintOverlayView, "hintOverlayView");
        w(oldSelfieOverlayView, hintOverlayView, 0L, 1, null);
        return Unit.f33074a;
    }

    public static final void Q(Function0 function0) {
        if (function0 != null) {
            function0.invoke();
        }
    }

    private final void R(final ImageView imageView, Drawable drawable) {
        if (Intrinsics.areEqual(imageView.getDrawable(), drawable)) {
            return;
        }
        if (drawable == null) {
            w(this, imageView, 0L, 1, null).withEndAction(new Runnable() { // from class: jp.j
                @Override // java.lang.Runnable
                public final void run() {
                    OldSelfieOverlayView.S(imageView);
                }
            });
            return;
        }
        imageView.setImageDrawable(drawable);
        imageView.setAlpha(0.0f);
        z(this, imageView, 0L, 1, null);
    }

    public static final void S(ImageView imageView) {
        imageView.setImageDrawable(null);
    }

    private final boolean T(Context context) {
        Integer f10 = s.f(context, cp.a.f20623q, null, false, 6, null);
        Integer f11 = s.f(context, cp.a.f20625s, null, false, 6, null);
        if ((f10 == null || f11 == null) && this.f20054q == null && this.f20055r == null) {
            return true;
        }
        return false;
    }

    private final Drawable getDrawableLeft() {
        return (Drawable) this.f20050e.getValue();
    }

    private final Drawable getDrawableRight() {
        return (Drawable) this.f20051i.getValue();
    }

    public static void k(OldSelfieOverlayView oldSelfieOverlayView, i iVar) {
        List<Function0> h12 = CollectionsKt.h1(oldSelfieOverlayView.f20057t);
        oldSelfieOverlayView.f20057t.clear();
        for (Function0 function0 : h12) {
            function0.invoke();
        }
    }

    private final ViewPropertyAnimator v(final View view, long j10) {
        ViewPropertyAnimator withEndAction = view.animate().alpha(0.0f).setDuration(j10).withEndAction(new Runnable() { // from class: jp.m
            @Override // java.lang.Runnable
            public final void run() {
                OldSelfieOverlayView.x(view);
            }
        });
        Intrinsics.checkNotNullExpressionValue(withEndAction, "withEndAction(...)");
        return withEndAction;
    }

    static /* synthetic */ ViewPropertyAnimator w(OldSelfieOverlayView oldSelfieOverlayView, View view, long j10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            j10 = 200;
        }
        return oldSelfieOverlayView.v(view, j10);
    }

    public static final void x(View view) {
        view.setVisibility(4);
    }

    private final ViewPropertyAnimator y(View view, long j10) {
        if (view.getVisibility() != 0) {
            view.setAlpha(0.0f);
            view.setVisibility(0);
        }
        ViewPropertyAnimator duration = view.animate().alpha(1.0f).setDuration(j10);
        Intrinsics.checkNotNullExpressionValue(duration, "setDuration(...)");
        return duration;
    }

    static /* synthetic */ ViewPropertyAnimator z(OldSelfieOverlayView oldSelfieOverlayView, View view, long j10, int i10, Object obj) {
        if ((i10 & 1) != 0) {
            j10 = 200;
        }
        return oldSelfieOverlayView.y(view, j10);
    }

    public final void A(StepStyles.SelfieStepStyle styles) {
        Intrinsics.checkNotNullParameter(styles, "styles");
        Integer selfieCaptureFeedBoxBorderColorValue = styles.getSelfieCaptureFeedBoxBorderColorValue();
        if (selfieCaptureFeedBoxBorderColorValue != null) {
            this.f20049d.f27329h.setStrokeColor(selfieCaptureFeedBoxBorderColorValue.intValue());
        }
        Double selfieCaptureFeedBoxBorderWidthValue = styles.getSelfieCaptureFeedBoxBorderWidthValue();
        if (selfieCaptureFeedBoxBorderWidthValue != null) {
            this.f20049d.f27329h.setStrokeWidth((float) h.a(selfieCaptureFeedBoxBorderWidthValue.doubleValue()));
        }
        Integer selfieCaptureIconStrokeColor = styles.getSelfieCaptureIconStrokeColor();
        if (selfieCaptureIconStrokeColor != null) {
            int intValue = selfieCaptureIconStrokeColor.intValue();
            this.f20049d.f27325d.I(Color.parseColor("#022050"), intValue);
            this.f20049d.f27325d.I(Color.parseColor("#280087"), intValue);
        }
        Integer selfieCaptureIconFillColor = styles.getSelfieCaptureIconFillColor();
        if (selfieCaptureIconFillColor != null) {
            int intValue2 = selfieCaptureIconFillColor.intValue();
            this.f20049d.f27325d.I(Color.parseColor("#AA85FF"), intValue2);
            this.f20049d.f27325d.I(Color.parseColor("#8552FF"), intValue2);
        }
        Integer selfieCaptureIconBackgroundFillColor = styles.getSelfieCaptureIconBackgroundFillColor();
        if (selfieCaptureIconBackgroundFillColor != null) {
            this.f20049d.f27325d.I(Color.parseColor("#DBCCFF"), selfieCaptureIconBackgroundFillColor.intValue());
        }
    }

    public final void B(Function0 onComplete) {
        Intrinsics.checkNotNullParameter(onComplete, "onComplete");
        Pi2CircleMaskView.e(this.f20049d.f27324c, false, onComplete, 1, null);
    }

    public final boolean E() {
        return this.f20049d.f27324c.g();
    }

    public final void I(b viewState, boolean z10, final Function0 function0) {
        Intrinsics.checkNotNullParameter(viewState, "viewState");
        if (this.f20060w != viewState) {
            this.f20060w = viewState;
            removeView(this.f20059v);
            Context context = getContext();
            Intrinsics.checkNotNullExpressionValue(context, "getContext(...)");
            boolean T = T(context);
            gp.b bVar = this.f20049d;
            if (z10) {
                bVar.f27329h.setVisibility(0);
            } else {
                bVar.f27329h.setVisibility(8);
            }
            switch (c.f20076a[viewState.ordinal()]) {
                case 1:
                    bVar.f27324c.h();
                    bVar.f27329h.f(0.0f, function0);
                    return;
                case 2:
                    Pi2CircleMaskView.e(bVar.f27324c, false, null, 3, null);
                    bVar.f27329h.f(0.0f, function0);
                    return;
                case 3:
                    Pi2CircleMaskView.e(bVar.f27324c, false, null, 3, null);
                    Pi2ProgressArcView.g(bVar.f27329h, 0.0f, null, 2, null);
                    F(this.f20049d, function0);
                    return;
                case 4:
                    Pi2CircleMaskView.e(bVar.f27324c, false, null, 3, null);
                    Pi2ProgressArcView.g(bVar.f27329h, 0.0f, null, 2, null);
                    if (T) {
                        M(this.f20049d, this.f20052o, function0);
                        return;
                    } else if (function0 != null) {
                        function0.invoke();
                        return;
                    } else {
                        return;
                    }
                case 5:
                    Pi2CircleMaskView.e(bVar.f27324c, false, null, 3, null);
                    bVar.f27329h.f(0.0f, function0);
                    if (!T) {
                        RemoteImage remoteImage = this.f20054q;
                        if (remoteImage != null) {
                            this.f20059v = fq.b.b(remoteImage, this, true);
                            return;
                        }
                        bVar.f27328g.setVisibility(0);
                        ImageView hintImage = bVar.f27326e;
                        Intrinsics.checkNotNullExpressionValue(hintImage, "hintImage");
                        R(hintImage, getDrawableLeft());
                        return;
                    }
                    return;
                case 6:
                    Pi2CircleMaskView.e(bVar.f27324c, false, null, 3, null);
                    Pi2ProgressArcView.g(bVar.f27329h, 50.0f, null, 2, null);
                    F(this.f20049d, function0);
                    return;
                case 7:
                    Pi2CircleMaskView.e(bVar.f27324c, false, null, 3, null);
                    Pi2ProgressArcView.g(bVar.f27329h, 50.0f, null, 2, null);
                    if (T) {
                        M(this.f20049d, this.f20053p, function0);
                        return;
                    } else if (function0 != null) {
                        function0.invoke();
                        return;
                    } else {
                        return;
                    }
                case 8:
                    Pi2CircleMaskView.e(bVar.f27324c, false, null, 3, null);
                    bVar.f27329h.f(50.0f, function0);
                    if (!T) {
                        RemoteImage remoteImage2 = this.f20055r;
                        if (remoteImage2 != null) {
                            this.f20059v = fq.b.b(remoteImage2, this, true);
                            return;
                        }
                        bVar.f27328g.setVisibility(0);
                        ImageView hintImage2 = bVar.f27326e;
                        Intrinsics.checkNotNullExpressionValue(hintImage2, "hintImage");
                        R(hintImage2, getDrawableRight());
                        return;
                    }
                    return;
                case 9:
                    Pi2CircleMaskView.e(bVar.f27324c, false, null, 3, null);
                    Pi2ProgressArcView.g(bVar.f27329h, 100.0f, null, 2, null);
                    F(this.f20049d, function0);
                    return;
                case 10:
                    Pi2CircleMaskView.e(bVar.f27324c, false, null, 3, null);
                    bVar.f27329h.e();
                    return;
                case 11:
                    Pi2CircleMaskView.e(bVar.f27324c, false, null, 3, null);
                    Pi2ProgressArcView.g(bVar.f27329h, 100.0f, null, 2, null);
                    F(this.f20049d, new Function0() { // from class: jp.g
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit K;
                            K = OldSelfieOverlayView.K(OldSelfieOverlayView.this, function0);
                            return K;
                        }
                    });
                    return;
                case 12:
                    Pi2CircleMaskView.e(bVar.f27324c, false, null, 3, null);
                    bVar.f27329h.f(100.0f, new Function0() { // from class: jp.h
                        @Override // kotlin.jvm.functions.Function0
                        public final Object invoke() {
                            Unit L;
                            L = OldSelfieOverlayView.L(OldSelfieOverlayView.this, function0);
                            return L;
                        }
                    });
                    return;
                default:
                    throw new p();
            }
        }
    }

    public final RemoteImage getLeftPoseImage() {
        return this.f20054q;
    }

    public final RemoteImage getRightPoseImage() {
        return this.f20055r;
    }

    @Override // android.view.View
    public boolean onTouchEvent(MotionEvent motionEvent) {
        return false;
    }

    public final void setLeftPoseImage(RemoteImage remoteImage) {
        this.f20054q = remoteImage;
    }

    public final void setPreviewView(@NotNull View previewView) {
        Intrinsics.checkNotNullParameter(previewView, "previewView");
        this.f20056s = previewView;
    }

    public final void setRightPoseImage(RemoteImage remoteImage) {
        this.f20055r = remoteImage;
    }

    public /* synthetic */ OldSelfieOverlayView(Context context, AttributeSet attributeSet, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(context, (i11 & 2) != 0 ? null : attributeSet, (i11 & 4) != 0 ? 0 : i10);
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public OldSelfieOverlayView(final Context context, AttributeSet attributeSet, int i10) {
        super(context, attributeSet, i10);
        Intrinsics.checkNotNullParameter(context, "context");
        gp.b b10 = gp.b.b(LayoutInflater.from(context), this);
        Intrinsics.checkNotNullExpressionValue(b10, "inflate(...)");
        this.f20049d = b10;
        this.f20050e = l.b(new Function0() { // from class: jp.a
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Drawable C;
                C = OldSelfieOverlayView.C(context);
                return C;
            }
        });
        this.f20051i = l.b(new Function0() { // from class: jp.e
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                Drawable D;
                D = OldSelfieOverlayView.D(context);
                return D;
            }
        });
        Integer f10 = s.f(context, cp.a.f20624r, null, false, 6, null);
        this.f20052o = f10 != null ? f10.intValue() : y0.f25499b;
        Integer f11 = s.f(context, cp.a.f20624r, null, false, 6, null);
        this.f20053p = f11 != null ? f11.intValue() : y0.f25500c;
        this.f20057t = new ArrayList();
        this.f20058u = new ArrayList();
        ThemeableLottieAnimationView themeableLottieAnimationView = b10.f27325d;
        themeableLottieAnimationView.j(new z() { // from class: jp.f
            @Override // l5.z
            public final void a(l5.i iVar) {
                OldSelfieOverlayView.k(OldSelfieOverlayView.this, iVar);
            }
        });
        themeableLottieAnimationView.i(new a());
        int parseColor = Color.parseColor("#022050");
        Context context2 = b10.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context2, "getContext(...)");
        themeableLottieAnimationView.I(parseColor, s.d(context2, yg.b.f54343m, null, false, 6, null));
        int parseColor2 = Color.parseColor("#AA85FF");
        Context context3 = b10.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context3, "getContext(...)");
        themeableLottieAnimationView.I(parseColor2, s.d(context3, yg.b.f54344n, null, false, 6, null));
        int parseColor3 = Color.parseColor("#280087");
        Context context4 = b10.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context4, "getContext(...)");
        themeableLottieAnimationView.I(parseColor3, s.d(context4, yg.b.f54343m, null, false, 6, null));
        int parseColor4 = Color.parseColor("#8552FF");
        Context context5 = b10.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context5, "getContext(...)");
        themeableLottieAnimationView.I(parseColor4, s.d(context5, yg.b.f54344n, null, false, 6, null));
        Context context6 = b10.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context6, "getContext(...)");
        int d10 = s.d(context6, yg.b.f54344n, null, false, 6, null);
        Context context7 = b10.getRoot().getContext();
        Intrinsics.checkNotNullExpressionValue(context7, "getContext(...)");
        themeableLottieAnimationView.I(Color.parseColor("#DBCCFF"), r1.c.c(d10, s.d(context7, yg.b.f54345o, null, false, 6, null), 0.66f));
    }
}
