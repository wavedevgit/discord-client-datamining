package com.withpersona.sdk2.inquiry.selfie.view;

import android.animation.Animator;
import android.animation.ValueAnimator;
import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.graphics.Path;
import android.util.AttributeSet;
import android.view.animation.AccelerateDecelerateInterpolator;
import android.view.animation.LinearInterpolator;
import android.widget.FrameLayout;
import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import com.withpersona.sdk2.inquiry.selfie.view.SelfieOverlayView;
import kotlin.Metadata;
import kotlin.enums.EnumEntries;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.Ref;
import kotlin.jvm.internal.SourceDebugExtension;
import or.p;
import org.jetbrains.annotations.NotNull;
@Metadata(d1 = {"\u0000\u0086\u0001\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0002\u0018\u0002\n\u0000\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\b\n\u0002\b\u0004\n\u0002\u0010\u0002\n\u0002\b\u0002\n\u0002\u0010\u000b\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0010\u0007\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0007\n\u0002\u0018\u0002\n\u0002\b\u000b\n\u0002\u0018\u0002\n\u0002\b\u0004\n\u0002\u0018\u0002\n\u0002\b@\n\u0002\u0018\u0002\n\u0002\b\u0003\n\u0002\u0018\u0002\n\u0002\b\u0005\n\u0002\u0018\u0002\n\u0002\b\n\n\u0002\u0018\u0002\n\u0002\b\u000f\u0018\u0000 \u009a\u00012\u00020\u0001:\n\u009b\u0001F\u009c\u0001\u009d\u0001C\u009e\u0001B\u001b\b\u0016\u0012\u0006\u0010\u0003\u001a\u00020\u0002\u0012\b\u0010\u0005\u001a\u0004\u0018\u00010\u0004¢\u0006\u0004\b\u0006\u0010\u0007J/\u0010\u000e\u001a\u00020\r2\u0006\u0010\t\u001a\u00020\b2\u0006\u0010\n\u001a\u00020\b2\u0006\u0010\u000b\u001a\u00020\b2\u0006\u0010\f\u001a\u00020\bH\u0014¢\u0006\u0004\b\u000e\u0010\u000fJ\u0015\u0010\u0012\u001a\u00020\r2\u0006\u0010\u0011\u001a\u00020\u0010¢\u0006\u0004\b\u0012\u0010\u0013J\u001f\u0010\u0017\u001a\u00020\r2\u0006\u0010\u0015\u001a\u00020\u00142\b\b\u0002\u0010\u0016\u001a\u00020\u0010¢\u0006\u0004\b\u0017\u0010\u0018J\u0017\u0010\u001b\u001a\u00020\r2\b\u0010\u001a\u001a\u0004\u0018\u00010\u0019¢\u0006\u0004\b\u001b\u0010\u001cJ\u0015\u0010\u001f\u001a\u00020\r2\u0006\u0010\u001e\u001a\u00020\u001d¢\u0006\u0004\b\u001f\u0010 J\u0017\u0010#\u001a\u00020\r2\u0006\u0010\"\u001a\u00020!H\u0014¢\u0006\u0004\b#\u0010$J\u001f\u0010\t\u001a\u00020\r2\u0006\u0010%\u001a\u00020\u00142\u0006\u0010\u0015\u001a\u00020\u0014H\u0002¢\u0006\u0004\b\t\u0010&J\u000f\u0010'\u001a\u00020\rH\u0002¢\u0006\u0004\b'\u0010(JS\u00102\u001a\u00020\r*\u00020)2\u0006\u0010*\u001a\u00020\u001d2\u0006\u0010+\u001a\u00020\u001d2\u0006\u0010,\u001a\u00020\u001d2\u0006\u0010-\u001a\u00020\u001d2\u0006\u0010.\u001a\u00020\u001d2\u0006\u0010/\u001a\u00020\u001d2\u0006\u00100\u001a\u00020\b2\u0006\u00101\u001a\u00020\u001dH\u0002¢\u0006\u0004\b2\u00103J\u000f\u00104\u001a\u00020\rH\u0002¢\u0006\u0004\b4\u0010(J\u000f\u00106\u001a\u000205H\u0002¢\u0006\u0004\b6\u00107J\u000f\u00108\u001a\u000205H\u0002¢\u0006\u0004\b8\u00107J\u000f\u00109\u001a\u000205H\u0002¢\u0006\u0004\b9\u00107J+\u0010>\u001a\u00020\r*\u00020:2\u0006\u0010;\u001a\u00020:2\u0006\u0010<\u001a\u00020:2\u0006\u0010=\u001a\u00020\u001dH\u0002¢\u0006\u0004\b>\u0010?J\u001b\u0010@\u001a\u00020:*\u00020:2\u0006\u0010\u001e\u001a\u00020\u001dH\u0002¢\u0006\u0004\b@\u0010AJ\u000f\u0010B\u001a\u00020\rH\u0002¢\u0006\u0004\bB\u0010(R\u0016\u0010E\u001a\u00020\u00148\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bC\u0010DR\u0016\u0010H\u001a\u00020\u001d8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bF\u0010GR\u0014\u0010J\u001a\u00020\b8\u0002X\u0082D¢\u0006\u0006\n\u0004\bI\u0010'R\u0014\u0010K\u001a\u00020\b8\u0002X\u0082D¢\u0006\u0006\n\u0004\b4\u0010'R\u0014\u0010L\u001a\u00020\b8\u0002X\u0082D¢\u0006\u0006\n\u0004\b@\u0010'R\u0014\u0010N\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bM\u0010'R\u0014\u0010O\u001a\u00020\b8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b>\u0010'R\u0014\u0010Q\u001a\u00020\u001d8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bP\u0010GR\u0014\u0010R\u001a\u00020\u001d8\u0002X\u0082D¢\u0006\u0006\n\u0004\b8\u0010GR\u0014\u0010S\u001a\u00020\u001d8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b6\u0010GR\u0014\u0010T\u001a\u00020\u001d8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b9\u0010GR\u0014\u0010U\u001a\u00020\u001d8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\t\u0010GR\u0014\u0010X\u001a\u00020)8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bV\u0010WR\u0014\u0010Z\u001a\u00020)8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bY\u0010WR\u0014\u0010\\\u001a\u00020)8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b[\u0010WR\u0014\u0010^\u001a\u00020)8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b]\u0010WR\u0014\u0010`\u001a\u00020)8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b_\u0010WR\u0014\u0010b\u001a\u00020)8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\ba\u0010WR\u0014\u0010d\u001a\u00020)8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bc\u0010WR\u0014\u0010e\u001a\u00020)8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b\u0017\u0010WR\u0014\u0010g\u001a\u0002058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bG\u0010fR\u0014\u0010i\u001a\u0002058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bh\u0010fR\u0014\u0010j\u001a\u0002058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bB\u0010fR\u0014\u0010k\u001a\u0002058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\b'\u0010fR\u0014\u0010m\u001a\u0002058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bl\u0010fR\u0014\u0010o\u001a\u0002058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bn\u0010fR\u0014\u0010q\u001a\u0002058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bp\u0010fR\u0014\u0010s\u001a\u0002058\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\br\u0010fR\u0016\u0010u\u001a\u00020\u001d8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bt\u0010GR\u0016\u0010w\u001a\u00020\u001d8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\bv\u0010GR\u0014\u0010z\u001a\u00020:8\u0002X\u0082\u0004¢\u0006\u0006\n\u0004\bx\u0010yR\u0018\u0010~\u001a\u0004\u0018\u00010{8\u0002@\u0002X\u0082\u000e¢\u0006\u0006\n\u0004\b|\u0010}R\u001b\u0010\u0082\u0001\u001a\u0004\u0018\u00010\u007f8\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b\u0080\u0001\u0010\u0081\u0001R\u001a\u0010\u0084\u0001\u001a\u0004\u0018\u00010{8\u0002@\u0002X\u0082\u000e¢\u0006\u0007\n\u0005\b\u0083\u0001\u0010}R\u001c\u0010\u0088\u0001\u001a\u0005\u0018\u00010\u0085\u00018\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b\u0086\u0001\u0010\u0087\u0001R\u001a\u0010\u008a\u0001\u001a\u0004\u0018\u00010{8\u0002@\u0002X\u0082\u000e¢\u0006\u0007\n\u0005\b\u0089\u0001\u0010}R\u0018\u0010\u001a\u001a\u00020\u00198\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b\u008b\u0001\u0010\u008c\u0001R\u0019\u0010\u008f\u0001\u001a\u00020\u00108\u0002@\u0002X\u0082\u000e¢\u0006\b\n\u0006\b\u008d\u0001\u0010\u008e\u0001R\u001b\u0010\u0092\u0001\u001a\u00030\u0090\u0001*\u00020\u00148BX\u0082\u0004¢\u0006\u0007\u001a\u0005\bM\u0010\u0091\u0001R\u001a\u0010\u0094\u0001\u001a\u00020\u0010*\u00020:8BX\u0082\u0004¢\u0006\u0007\u001a\u0005\bP\u0010\u0093\u0001R-\u0010\u0099\u0001\u001a\u00020\b*\u0002052\u0007\u0010\u0095\u0001\u001a\u00020\b8B@BX\u0082\u000e¢\u0006\u000f\u001a\u0006\b\u0096\u0001\u0010\u0097\u0001\"\u0005\bc\u0010\u0098\u0001¨\u0006\u009f\u0001"}, d2 = {"Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView;", "Landroid/widget/FrameLayout;", "Landroid/content/Context;", "context", "Landroid/util/AttributeSet;", "attrs", "<init>", "(Landroid/content/Context;Landroid/util/AttributeSet;)V", "", "w", "h", "oldw", "oldh", "", "onSizeChanged", "(IIII)V", "", "mirrored", "setIsPreviewMirrored", "(Z)V", "Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$e;", "newState", "animate", "E", "(Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$e;Z)V", "Lwn/a;", "brightnessInfo", "setCameraStreamBrightnessInfo", "(Lwn/a;)V", "", "intensity", "setIntensity", "(F)V", "Landroid/graphics/Canvas;", "canvas", "onDraw", "(Landroid/graphics/Canvas;)V", "oldState", "(Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$e;Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$e;)V", "I", "()V", "Landroid/graphics/Path;", ViewProps.LEFT, ViewProps.TOP, ViewProps.RIGHT, ViewProps.BOTTOM, "startAngle", "sweepAngle", "numTicks", "tickLength", "n", "(Landroid/graphics/Path;FFFFFFIF)V", "o", "Landroid/graphics/Paint;", "u", "()Landroid/graphics/Paint;", "t", "v", "Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$a;", ViewProps.START, ViewProps.END, "percent", "r", "(Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$a;Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$a;Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$a;F)V", "p", "(Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$a;F)Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$a;", "H", "d", "Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$e;", "state", "e", "F", "currentIntensity", "i", "colorOnSurface", ViewProps.SHADOW_COLOR, "accentColor", "q", "arcBaseColor", "arcHighlightColor", "s", "arcInset", "arcGapDegrees", "arcStrokeWidth", "arcDialStrokeWidth", "arcTickLength", "x", "Landroid/graphics/Path;", "arcTop", "y", "arcBottom", "z", "arcLeft", "A", "arcRight", "B", "arcDialLeft", "C", "arcDialRight", "D", "arcDialHighlightClipPathRight", "arcDialHighlightClipPathLeft", "Landroid/graphics/Paint;", "arcTopPaint", "G", "arcBottomPaint", "arcLeftPaint", "arcRightPaint", "J", "shadowPaint", "K", "arcDialLeftPaint", "L", "arcDialRightPaint", "M", "filledArcDialPaint", "N", "arcDialLeftIntensity", "O", "arcDialRightIntensity", "P", "Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$a;", "arcHoverState", "Landroid/animation/ValueAnimator;", "Q", "Landroid/animation/ValueAnimator;", "stateAnimator", "Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$f;", "R", "Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$f;", "stateAnimationState", "S", "intensityAnimator", "Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$d;", "T", "Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$d;", "intensityAnimationState", "U", "directionHintAnimator", "V", "Lwn/a;", "W", "Z", "isPreviewMirrored", "Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$c;", "(Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$e;)Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$c;", "endState", "(Lcom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView$a;)Z", "isIdentity", "value", "getShadowAlpha", "(Landroid/graphics/Paint;)I", "(Landroid/graphics/Paint;I)V", "shadowAlpha", "a0", "b", "c", "f", "a", "selfie_release"}, k = 1, mv = {2, 0, 0}, xi = 48)
@SourceDebugExtension({"SMAP\nSelfieOverlayView.kt\nKotlin\n*S Kotlin\n*F\n+ 1 SelfieOverlayView.kt\ncom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView\n+ 2 Animator.kt\nandroidx/core/animation/AnimatorKt\n+ 3 Canvas.kt\nandroidx/core/graphics/CanvasKt\n*L\n1#1,891:1\n890#1:952\n890#1:960\n890#1:967\n890#1:975\n890#1:982\n890#1:990\n890#1:994\n890#1:995\n890#1:996\n890#1:997\n890#1:998\n890#1:999\n890#1:1000\n890#1:1001\n890#1:1002\n890#1:1003\n890#1:1004\n890#1:1005\n890#1:1006\n890#1:1007\n890#1:1008\n29#2:892\n85#2,18:893\n29#2:911\n85#2,18:912\n85#2,18:930\n44#3,4:948\n49#3,3:953\n44#3,4:956\n49#3,3:961\n27#3,3:964\n31#3,3:968\n44#3,4:971\n49#3,3:976\n27#3,3:979\n31#3,3:983\n44#3,4:986\n49#3,3:991\n*S KotlinDebug\n*F\n+ 1 SelfieOverlayView.kt\ncom/withpersona/sdk2/inquiry/selfie/view/SelfieOverlayView\n*L\n552#1:952\n561#1:960\n589#1:967\n608#1:975\n626#1:982\n644#1:990\n678#1:994\n679#1:995\n680#1:996\n681#1:997\n682#1:998\n686#1:999\n787#1:1000\n788#1:1001\n790#1:1002\n791#1:1003\n793#1:1004\n794#1:1005\n796#1:1006\n797#1:1007\n799#1:1008\n222#1:892\n222#1:893,18\n298#1:911\n298#1:912,18\n394#1:930,18\n549#1:948,4\n549#1:953,3\n558#1:956,4\n558#1:961,3\n584#1:964,3\n584#1:968,3\n605#1:971,4\n605#1:976,3\n621#1:979,3\n621#1:983,3\n641#1:986,4\n641#1:991,3\n*E\n"})
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class SelfieOverlayView extends FrameLayout {

    /* renamed from: a0  reason: collision with root package name */
    public static final b f19489a0 = new b(null);
    private final Path A;
    private final Path B;
    private final Path C;
    private final Path D;
    private final Path E;
    private final Paint F;
    private final Paint G;
    private final Paint H;
    private final Paint I;
    private final Paint J;
    private final Paint K;
    private final Paint L;
    private final Paint M;
    private float N;
    private float O;
    private final a P;
    private ValueAnimator Q;
    private f R;
    private ValueAnimator S;
    private d T;
    private ValueAnimator U;
    private wn.a V;
    private boolean W;

    /* renamed from: d  reason: collision with root package name */
    private e f19490d;

    /* renamed from: e  reason: collision with root package name */
    private float f19491e;

    /* renamed from: i  reason: collision with root package name */
    private final int f19492i;

    /* renamed from: o  reason: collision with root package name */
    private final int f19493o;

    /* renamed from: p  reason: collision with root package name */
    private final int f19494p;

    /* renamed from: q  reason: collision with root package name */
    private final int f19495q;

    /* renamed from: r  reason: collision with root package name */
    private final int f19496r;

    /* renamed from: s  reason: collision with root package name */
    private final float f19497s;

    /* renamed from: t  reason: collision with root package name */
    private final float f19498t;

    /* renamed from: u  reason: collision with root package name */
    private final float f19499u;

    /* renamed from: v  reason: collision with root package name */
    private final float f19500v;

    /* renamed from: w  reason: collision with root package name */
    private final float f19501w;

    /* renamed from: x  reason: collision with root package name */
    private final Path f19502x;

    /* renamed from: y  reason: collision with root package name */
    private final Path f19503y;

    /* renamed from: z  reason: collision with root package name */
    private final Path f19504z;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private b() {
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c {

        /* renamed from: r  reason: collision with root package name */
        public static final c f19514r = new c("Center", 0, 1.0f, 1.0f, 1.0f, 1.0f, 0.0f, 0.0f);

        /* renamed from: s  reason: collision with root package name */
        public static final c f19515s = new c("Left", 1, 0.1f, 0.1f, 0.0f, 0.1f, 1.0f, 0.0f);

        /* renamed from: t  reason: collision with root package name */
        public static final c f19516t = new c("Right", 2, 0.1f, 0.1f, 0.1f, 0.0f, 0.0f, 1.0f);

        /* renamed from: u  reason: collision with root package name */
        public static final c f19517u = new c("None", 3, 0.1f, 0.1f, 0.1f, 0.1f, 0.0f, 0.0f);

        /* renamed from: v  reason: collision with root package name */
        public static final c f19518v = new c("Finalizing", 4, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f);

        /* renamed from: w  reason: collision with root package name */
        private static final /* synthetic */ c[] f19519w;

        /* renamed from: x  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f19520x;

        /* renamed from: d  reason: collision with root package name */
        private final float f19521d;

        /* renamed from: e  reason: collision with root package name */
        private final float f19522e;

        /* renamed from: i  reason: collision with root package name */
        private final float f19523i;

        /* renamed from: o  reason: collision with root package name */
        private final float f19524o;

        /* renamed from: p  reason: collision with root package name */
        private final float f19525p;

        /* renamed from: q  reason: collision with root package name */
        private final float f19526q;

        static {
            c[] a10 = a();
            f19519w = a10;
            f19520x = vr.a.a(a10);
        }

        private c(String str, int i10, float f10, float f11, float f12, float f13, float f14, float f15) {
            this.f19521d = f10;
            this.f19522e = f11;
            this.f19523i = f12;
            this.f19524o = f13;
            this.f19525p = f14;
            this.f19526q = f15;
        }

        private static final /* synthetic */ c[] a() {
            return new c[]{f19514r, f19515s, f19516t, f19517u, f19518v};
        }

        public static c valueOf(String str) {
            return (c) Enum.valueOf(c.class, str);
        }

        public static c[] values() {
            return (c[]) f19519w.clone();
        }

        public final float d() {
            return this.f19522e;
        }

        public final float e() {
            return this.f19525p;
        }

        public final float f() {
            return this.f19526q;
        }

        public final float g() {
            return this.f19523i;
        }

        public final float h() {
            return this.f19524o;
        }

        public final float i() {
            return this.f19521d;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d {

        /* renamed from: a  reason: collision with root package name */
        private float f19527a;

        /* renamed from: b  reason: collision with root package name */
        private float f19528b;

        /* renamed from: c  reason: collision with root package name */
        private float f19529c;

        public d(float f10, float f11, float f12) {
            this.f19527a = f10;
            this.f19528b = f11;
            this.f19529c = f12;
        }

        public final float a() {
            return this.f19529c;
        }

        public final float b() {
            return this.f19527a;
        }

        public final float c() {
            return this.f19528b;
        }

        public final void d(float f10) {
            this.f19527a = f10;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof d) {
                d dVar = (d) obj;
                return Float.compare(this.f19527a, dVar.f19527a) == 0 && Float.compare(this.f19528b, dVar.f19528b) == 0 && Float.compare(this.f19529c, dVar.f19529c) == 0;
            }
            return false;
        }

        public int hashCode() {
            return (((Float.hashCode(this.f19527a) * 31) + Float.hashCode(this.f19528b)) * 31) + Float.hashCode(this.f19529c);
        }

        public String toString() {
            float f10 = this.f19527a;
            float f11 = this.f19528b;
            float f12 = this.f19529c;
            return "IntensityAnimationState(progress=" + f10 + ", startIntensity=" + f11 + ", endIntensity=" + f12 + ")";
        }
    }

    /* JADX WARN: Failed to restore enum class, 'enum' modifier and super class removed */
    /* JADX WARN: Unknown enum class pattern. Please report as an issue! */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class e {

        /* renamed from: d  reason: collision with root package name */
        public static final e f19530d = new e("Center", 0);

        /* renamed from: e  reason: collision with root package name */
        public static final e f19531e = new e("Left", 1);

        /* renamed from: i  reason: collision with root package name */
        public static final e f19532i = new e("Right", 2);

        /* renamed from: o  reason: collision with root package name */
        public static final e f19533o = new e("None", 3);

        /* renamed from: p  reason: collision with root package name */
        public static final e f19534p = new e("Finalizing", 4);

        /* renamed from: q  reason: collision with root package name */
        private static final /* synthetic */ e[] f19535q;

        /* renamed from: r  reason: collision with root package name */
        private static final /* synthetic */ EnumEntries f19536r;

        static {
            e[] a10 = a();
            f19535q = a10;
            f19536r = vr.a.a(a10);
        }

        private e(String str, int i10) {
        }

        private static final /* synthetic */ e[] a() {
            return new e[]{f19530d, f19531e, f19532i, f19533o, f19534p};
        }

        public static e valueOf(String str) {
            return (e) Enum.valueOf(e.class, str);
        }

        public static e[] values() {
            return (e[]) f19535q.clone();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class f {

        /* renamed from: a  reason: collision with root package name */
        private final boolean f19537a;

        /* renamed from: b  reason: collision with root package name */
        private final e f19538b;

        /* renamed from: c  reason: collision with root package name */
        private final e f19539c;

        /* renamed from: d  reason: collision with root package name */
        private float f19540d;

        /* renamed from: e  reason: collision with root package name */
        private final float f19541e;

        /* renamed from: f  reason: collision with root package name */
        private final float f19542f;

        /* renamed from: g  reason: collision with root package name */
        private final float f19543g;

        /* renamed from: h  reason: collision with root package name */
        private final float f19544h;

        /* renamed from: i  reason: collision with root package name */
        private final float f19545i;

        /* renamed from: j  reason: collision with root package name */
        private final float f19546j;

        public f(boolean z10, e startState, e endState, float f10, float f11, float f12, float f13, float f14, float f15, float f16) {
            Intrinsics.checkNotNullParameter(startState, "startState");
            Intrinsics.checkNotNullParameter(endState, "endState");
            this.f19537a = z10;
            this.f19538b = startState;
            this.f19539c = endState;
            this.f19540d = f10;
            this.f19541e = f11;
            this.f19542f = f12;
            this.f19543g = f13;
            this.f19544h = f14;
            this.f19545i = f15;
            this.f19546j = f16;
        }

        public final boolean a() {
            return this.f19537a;
        }

        public final e b() {
            return this.f19539c;
        }

        public final float c() {
            return this.f19540d;
        }

        public final float d() {
            return this.f19542f;
        }

        public final float e() {
            return this.f19545i;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof f) {
                f fVar = (f) obj;
                return this.f19537a == fVar.f19537a && this.f19538b == fVar.f19538b && this.f19539c == fVar.f19539c && Float.compare(this.f19540d, fVar.f19540d) == 0 && Float.compare(this.f19541e, fVar.f19541e) == 0 && Float.compare(this.f19542f, fVar.f19542f) == 0 && Float.compare(this.f19543g, fVar.f19543g) == 0 && Float.compare(this.f19544h, fVar.f19544h) == 0 && Float.compare(this.f19545i, fVar.f19545i) == 0 && Float.compare(this.f19546j, fVar.f19546j) == 0;
            }
            return false;
        }

        public final float f() {
            return this.f19546j;
        }

        public final float g() {
            return this.f19543g;
        }

        public final float h() {
            return this.f19544h;
        }

        public int hashCode() {
            return (((((((((((((((((Boolean.hashCode(this.f19537a) * 31) + this.f19538b.hashCode()) * 31) + this.f19539c.hashCode()) * 31) + Float.hashCode(this.f19540d)) * 31) + Float.hashCode(this.f19541e)) * 31) + Float.hashCode(this.f19542f)) * 31) + Float.hashCode(this.f19543g)) * 31) + Float.hashCode(this.f19544h)) * 31) + Float.hashCode(this.f19545i)) * 31) + Float.hashCode(this.f19546j);
        }

        public final float i() {
            return this.f19541e;
        }

        public final void j(float f10) {
            this.f19540d = f10;
        }

        public String toString() {
            boolean z10 = this.f19537a;
            e eVar = this.f19538b;
            e eVar2 = this.f19539c;
            float f10 = this.f19540d;
            float f11 = this.f19541e;
            float f12 = this.f19542f;
            float f13 = this.f19543g;
            float f14 = this.f19544h;
            float f15 = this.f19545i;
            float f16 = this.f19546j;
            return "StateAnimationState(animating=" + z10 + ", startState=" + eVar + ", endState=" + eVar2 + ", progress=" + f10 + ", startArcTopAlpha=" + f11 + ", startArcBottomAlpha=" + f12 + ", startArcLeftAlpha=" + f13 + ", startArcRightAlpha=" + f14 + ", startArcDialLeftAlpha=" + f15 + ", startArcDialRightAlpha=" + f16 + ")";
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public /* synthetic */ class g {

        /* renamed from: a  reason: collision with root package name */
        public static final /* synthetic */ int[] f19547a;

        static {
            int[] iArr = new int[e.values().length];
            try {
                iArr[e.f19530d.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                iArr[e.f19531e.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                iArr[e.f19532i.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                iArr[e.f19533o.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                iArr[e.f19534p.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            f19547a = iArr;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class h implements Animator.AnimatorListener {

        /* renamed from: a  reason: collision with root package name */
        final /* synthetic */ Ref.BooleanRef f19548a;

        /* renamed from: b  reason: collision with root package name */
        final /* synthetic */ e f19549b;

        /* renamed from: c  reason: collision with root package name */
        final /* synthetic */ SelfieOverlayView f19550c;

        /* renamed from: d  reason: collision with root package name */
        final /* synthetic */ Ref.BooleanRef f19551d;

        public h(Ref.BooleanRef booleanRef, e eVar, SelfieOverlayView selfieOverlayView, Ref.BooleanRef booleanRef2) {
            this.f19548a = booleanRef;
            this.f19549b = eVar;
            this.f19550c = selfieOverlayView;
            this.f19551d = booleanRef2;
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
            this.f19551d.element = true;
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            if (!this.f19548a.element) {
                SelfieOverlayView.y(this.f19549b, this.f19550c);
            }
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationRepeat(Animator animator) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class i implements Animator.AnimatorListener {
        public i() {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            SelfieOverlayView.this.T = null;
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationRepeat(Animator animator) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class j implements Animator.AnimatorListener {
        public j() {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationCancel(Animator animator) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationEnd(Animator animator) {
            f fVar = SelfieOverlayView.this.R;
            if (fVar != null) {
                e eVar = SelfieOverlayView.this.f19490d;
                SelfieOverlayView.this.f19490d = fVar.b();
                SelfieOverlayView.this.w(eVar, fVar.b());
            }
            SelfieOverlayView.this.R = null;
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationRepeat(Animator animator) {
        }

        @Override // android.animation.Animator.AnimatorListener
        public void onAnimationStart(Animator animator) {
        }
    }

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public SelfieOverlayView(@NotNull Context context, AttributeSet attributeSet) {
        super(context, attributeSet);
        Intrinsics.checkNotNullParameter(context, "context");
        this.f19490d = e.f19530d;
        this.f19492i = -1;
        this.f19493o = -16777216;
        this.f19494p = -13910906;
        this.f19495q = -1;
        this.f19496r = -13910906;
        this.f19497s = (float) pp.h.a(48.0d);
        this.f19498t = 20.0f;
        this.f19499u = (float) pp.h.a(4.0d);
        this.f19500v = (float) pp.h.a(2.0d);
        this.f19501w = (float) pp.h.a(24.0d);
        this.f19502x = new Path();
        this.f19503y = new Path();
        this.f19504z = new Path();
        this.A = new Path();
        this.B = new Path();
        this.C = new Path();
        this.D = new Path();
        this.E = new Path();
        this.F = u();
        this.G = u();
        this.H = u();
        this.I = u();
        this.J = v();
        Paint t10 = t();
        t10.setAlpha(0);
        this.K = t10;
        Paint t11 = t();
        t11.setAlpha(0);
        this.L = t11;
        Paint t12 = t();
        t12.setColor(-13910906);
        this.M = t12;
        this.P = p(new a(0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 511, null), this.f19491e);
        this.V = new wn.a(null, 1, null);
        setWillNotDraw(false);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void A(SelfieOverlayView selfieOverlayView, a aVar, a aVar2, ValueAnimator it) {
        Intrinsics.checkNotNullParameter(it, "it");
        selfieOverlayView.r(selfieOverlayView.P, aVar, aVar2, it.getAnimatedFraction());
        selfieOverlayView.invalidate();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void B(SelfieOverlayView selfieOverlayView, ValueAnimator it) {
        Intrinsics.checkNotNullParameter(it, "it");
        d dVar = selfieOverlayView.T;
        if (dVar != null) {
            dVar.d(it.getAnimatedFraction());
        }
        selfieOverlayView.o();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void C(SelfieOverlayView selfieOverlayView, a aVar, a aVar2, ValueAnimator it) {
        Intrinsics.checkNotNullParameter(it, "it");
        selfieOverlayView.r(selfieOverlayView.P, aVar, aVar2, it.getAnimatedFraction());
        d dVar = selfieOverlayView.T;
        if (dVar != null) {
            dVar.d(it.getAnimatedFraction());
        }
        selfieOverlayView.o();
    }

    private final void D(Paint paint, int i10) {
        if (paint.getAlpha() == i10) {
            return;
        }
        paint.setShadowLayer(this.f19499u * 2, 0.0f, 0.0f, r1.c.l(this.f19493o, i10));
        paint.setAlpha(i10);
    }

    public static /* synthetic */ void F(SelfieOverlayView selfieOverlayView, e eVar, boolean z10, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            z10 = true;
        }
        selfieOverlayView.E(eVar, z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void G(SelfieOverlayView selfieOverlayView, ValueAnimator it) {
        Intrinsics.checkNotNullParameter(it, "it");
        f fVar = selfieOverlayView.R;
        if (fVar != null) {
            fVar.j(it.getAnimatedFraction());
        }
        selfieOverlayView.o();
    }

    private final void H() {
        float measuredWidth = getMeasuredWidth();
        float measuredHeight = getMeasuredHeight();
        float f10 = measuredWidth / 2.0f;
        float f11 = measuredHeight / 2.0f;
        Path path = this.E;
        float f12 = this.N * 45.0f;
        path.reset();
        path.moveTo(f10, f11);
        path.arcTo(0.0f, 0.0f, measuredWidth, measuredHeight, 180.0f - f12, f12 * 2.0f, false);
        path.close();
        Path path2 = this.D;
        float f13 = this.O * 45.0f;
        path2.reset();
        path2.moveTo(f10, f11);
        path2.arcTo(0.0f, 0.0f, measuredWidth, measuredHeight, -f13, f13 * 2.0f, false);
        path2.close();
    }

    private final void I() {
        int measuredWidth = getMeasuredWidth();
        int measuredHeight = getMeasuredHeight();
        float f10 = this.f19498t / 2.0f;
        this.f19502x.reset();
        Path path = this.f19502x;
        float f11 = this.f19497s;
        float f12 = measuredWidth;
        float f13 = measuredHeight;
        path.addArc(f11, f11, f12 - f11, f13 - f11, f10 + 225.0f, 90.0f - this.f19498t);
        this.f19503y.reset();
        Path path2 = this.f19503y;
        float f14 = this.f19497s;
        path2.addArc(f14, f14, f12 - f14, f13 - f14, f10 + 45.0f, 90.0f - this.f19498t);
        this.f19504z.reset();
        Path path3 = this.f19504z;
        float f15 = this.f19497s;
        float f16 = f10 + 135.0f;
        path3.addArc(f15, f15, f12 - f15, f13 - f15, f16, 90.0f - this.f19498t);
        this.A.reset();
        Path path4 = this.A;
        float f17 = this.f19497s;
        float f18 = f10 + 315.0f;
        path4.addArc(f17, f17, f12 - f17, f13 - f17, f18, 90.0f - this.f19498t);
        this.B.reset();
        Path path5 = this.B;
        float f19 = this.f19497s;
        n(path5, f19, f19, f12 - f19, f13 - f19, f16, 90.0f - this.f19498t, 30, this.f19501w);
        this.C.reset();
        Path path6 = this.C;
        float f20 = this.f19497s;
        n(path6, f20, f20, f12 - f20, f13 - f20, f18, 90.0f - this.f19498t, 30, this.f19501w);
        invalidate();
    }

    private final void n(Path path, float f10, float f11, float f12, float f13, float f14, float f15, int i10, float f16) {
        int i11 = i10;
        float f17 = (f12 - f10) / 2.0f;
        float f18 = f17 + f10;
        float f19 = f17 + f11;
        float f20 = f16 / 2;
        double radians = Math.toRadians(f14);
        double radians2 = Math.toRadians(f15) / (i11 - 1);
        int i12 = 0;
        while (i12 < i11) {
            double cos = Math.cos(radians);
            double sin = Math.sin(radians);
            double d10 = f17 - f20;
            float f21 = f18;
            float f22 = f19;
            float f23 = f20;
            double d11 = f17 + f20;
            path.moveTo(((float) (d10 * cos)) + f21, ((float) (d10 * sin)) + f22);
            path.lineTo(((float) (cos * d11)) + f21, ((float) (d11 * sin)) + f22);
            radians += radians2;
            i12++;
            f20 = f23;
            f17 = f17;
            f18 = f21;
            i11 = i10;
            f19 = f22;
        }
    }

    private final void o() {
        float i10;
        float d10;
        float g10;
        float h10;
        float e10;
        float f10;
        float f11;
        float f12;
        f fVar = this.R;
        d dVar = this.T;
        if (fVar != null) {
            float c10 = fVar.c();
            c q10 = q(fVar.b());
            float i11 = fVar.i();
            i10 = ((q10.i() - i11) * c10) + i11;
            float d11 = fVar.d();
            d10 = ((q10.d() - d11) * c10) + d11;
            float g11 = fVar.g();
            g10 = ((q10.g() - g11) * c10) + g11;
            float h11 = fVar.h();
            h10 = ((q10.h() - h11) * c10) + h11;
            float e11 = fVar.e();
            e10 = ((q10.e() - e11) * c10) + e11;
            float f13 = fVar.f();
            f10 = ((q10.f() - f13) * c10) + f13;
        } else {
            i10 = q(this.f19490d).i();
            d10 = q(this.f19490d).d();
            g10 = q(this.f19490d).g();
            h10 = q(this.f19490d).h();
            e10 = q(this.f19490d).e();
            f10 = q(this.f19490d).f();
        }
        if (dVar != null) {
            f12 = ((dVar.a() - dVar.c()) * dVar.b()) + dVar.c();
            this.f19491e = f12;
            f11 = (i10 - 0.1f) / 1.0f;
        } else {
            f11 = (i10 - 0.1f) / 1.0f;
            f12 = this.f19491e;
        }
        float f14 = ((d10 - 0.1f) / 1.0f) * f12;
        float f15 = ((g10 - 0.1f) / 1.0f) * f12;
        float f16 = ((h10 - 0.1f) / 1.0f) * f12;
        float f17 = ((e10 - 0.1f) / 1.0f) * f12;
        float f18 = ((f10 - 0.1f) / 1.0f) * f12;
        this.F.setColor(r1.c.c(this.f19495q, this.f19496r, f11 * f12));
        this.G.setColor(r1.c.c(this.f19495q, this.f19496r, f14));
        this.H.setColor(r1.c.c(this.f19495q, this.f19496r, f15));
        this.I.setColor(r1.c.c(this.f19495q, this.f19496r, f16));
        boolean z10 = (this.N == f17 && this.O == f18) ? false : true;
        this.N = f17;
        this.O = f18;
        Paint paint = this.F;
        float f19 = (float) SetSpanOperation.SPAN_MAX_PRIORITY;
        paint.setAlpha((int) (i10 * f19));
        this.G.setAlpha((int) (d10 * f19));
        this.H.setAlpha((int) (g10 * f19));
        this.I.setAlpha((int) (h10 * f19));
        this.K.setAlpha((int) (e10 * f19));
        this.L.setAlpha((int) (f10 * f19));
        this.F.setStrokeWidth(this.f19499u * this.P.i());
        this.G.setStrokeWidth(this.f19499u * this.P.i());
        this.H.setStrokeWidth(this.f19499u * this.P.i());
        this.I.setStrokeWidth(this.f19499u * this.P.i());
        if (z10) {
            H();
        }
        invalidate();
    }

    private final a p(a aVar, float f10) {
        float c10 = (float) pp.h.c(48.0d);
        aVar.s(0.0f);
        float f11 = c10 * f10;
        aVar.t(f11);
        aVar.l(0.0f);
        float f12 = (-c10) * f10;
        aVar.m(f12);
        aVar.n(f11);
        aVar.o(0.0f);
        aVar.p(f12);
        aVar.q(0.0f);
        aVar.r(f10 + 1.0f);
        return aVar;
    }

    private final c q(e eVar) {
        int i10 = g.f19547a[eVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4) {
                        if (i10 == 5) {
                            return c.f19518v;
                        }
                        throw new p();
                    }
                    return c.f19517u;
                }
                return c.f19516t;
            }
            return c.f19515s;
        }
        return c.f19514r;
    }

    private final void r(a aVar, a aVar2, a aVar3, float f10) {
        float j10 = aVar2.j();
        aVar.s(((aVar3.j() - j10) * f10) + j10);
        float k10 = aVar2.k();
        aVar.t(((aVar3.k() - k10) * f10) + k10);
        float c10 = aVar2.c();
        aVar.l(((aVar3.c() - c10) * f10) + c10);
        float d10 = aVar2.d();
        aVar.m(((aVar3.d() - d10) * f10) + d10);
        float e10 = aVar2.e();
        aVar.n(((aVar3.e() - e10) * f10) + e10);
        float f11 = aVar2.f();
        aVar.o(((aVar3.f() - f11) * f10) + f11);
        float g10 = aVar2.g();
        aVar.p(((aVar3.g() - g10) * f10) + g10);
        float h10 = aVar2.h();
        aVar.q(((aVar3.h() - h10) * f10) + h10);
        float i10 = aVar2.i();
        aVar.r(((aVar3.i() - i10) * f10) + i10);
    }

    private final boolean s(a aVar) {
        if (aVar.j() == 0.0f && aVar.k() == 0.0f && aVar.c() == 0.0f && aVar.d() == 0.0f && aVar.e() == 0.0f && aVar.f() == 0.0f && aVar.g() == 0.0f && aVar.h() == 0.0f && aVar.i() == 1.0f) {
            return true;
        }
        return false;
    }

    private final Paint t() {
        Paint u10 = u();
        u10.setStrokeWidth(this.f19500v);
        return u10;
    }

    private final Paint u() {
        Paint paint = new Paint();
        paint.setAntiAlias(true);
        paint.setColor(this.f19492i);
        paint.setStyle(Paint.Style.STROKE);
        paint.setStrokeWidth(this.f19499u);
        paint.setStrokeCap(Paint.Cap.ROUND);
        return paint;
    }

    private final Paint v() {
        Paint u10 = u();
        u10.setStrokeWidth(this.f19499u);
        u10.setColor(this.f19493o);
        u10.setShadowLayer(this.f19499u * 2, 0.0f, 0.0f, this.f19493o);
        return u10;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final void w(e eVar, e eVar2) {
        if (eVar == eVar2) {
            return;
        }
        ValueAnimator valueAnimator = this.U;
        if (valueAnimator != null) {
            valueAnimator.cancel();
            valueAnimator.removeAllUpdateListeners();
        }
        if (s(this.P)) {
            y(eVar2, this);
            return;
        }
        ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, 1.0f);
        ofFloat.setInterpolator(new LinearInterpolator());
        ofFloat.setStartDelay(0L);
        ofFloat.setRepeatCount(0);
        ofFloat.setDuration(250L);
        final a b10 = a.b(this.P, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 511, null);
        final a aVar = new a(0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 511, null);
        Ref.BooleanRef booleanRef = new Ref.BooleanRef();
        ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.withpersona.sdk2.inquiry.selfie.view.b
            @Override // android.animation.ValueAnimator.AnimatorUpdateListener
            public final void onAnimationUpdate(ValueAnimator valueAnimator2) {
                SelfieOverlayView.x(SelfieOverlayView.this, b10, aVar, valueAnimator2);
            }
        });
        Intrinsics.checkNotNull(ofFloat);
        ofFloat.addListener(new h(booleanRef, eVar2, this, booleanRef));
        ofFloat.start();
        this.U = ofFloat;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void x(SelfieOverlayView selfieOverlayView, a aVar, a aVar2, ValueAnimator it) {
        Intrinsics.checkNotNullParameter(it, "it");
        selfieOverlayView.r(selfieOverlayView.P, aVar, aVar2, it.getAnimatedFraction());
        selfieOverlayView.invalidate();
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void y(e eVar, final SelfieOverlayView selfieOverlayView) {
        int i10 = g.f19547a[eVar.ordinal()];
        if (i10 != 1) {
            if (i10 != 2) {
                if (i10 != 3) {
                    if (i10 != 4 && i10 != 5) {
                        throw new p();
                    }
                    return;
                }
                ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, 1.0f);
                ofFloat.setInterpolator(new AccelerateDecelerateInterpolator());
                ofFloat.setRepeatMode(2);
                ofFloat.setStartDelay(0L);
                ofFloat.setRepeatCount(-1);
                ofFloat.setDuration(700L);
                final a b10 = a.b(selfieOverlayView.P, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 511, null);
                final a aVar = new a(0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 511, null);
                aVar.p((float) pp.h.c(48.0d));
                ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.withpersona.sdk2.inquiry.selfie.view.d
                    @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                    public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                        SelfieOverlayView.A(SelfieOverlayView.this, b10, aVar, valueAnimator);
                    }
                });
                ofFloat.start();
                selfieOverlayView.U = ofFloat;
                return;
            }
            ValueAnimator ofFloat2 = ValueAnimator.ofFloat(0.0f, 1.0f);
            ofFloat2.setInterpolator(new AccelerateDecelerateInterpolator());
            ofFloat2.setRepeatMode(2);
            ofFloat2.setStartDelay(0L);
            ofFloat2.setRepeatCount(-1);
            ofFloat2.setDuration(700L);
            final a b11 = a.b(selfieOverlayView.P, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 511, null);
            final a aVar2 = new a(0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 511, null);
            aVar2.n(-((float) pp.h.c(48.0d)));
            ofFloat2.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.withpersona.sdk2.inquiry.selfie.view.c
                @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                public final void onAnimationUpdate(ValueAnimator valueAnimator) {
                    SelfieOverlayView.z(SelfieOverlayView.this, b11, aVar2, valueAnimator);
                }
            });
            ofFloat2.start();
            selfieOverlayView.U = ofFloat2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final void z(SelfieOverlayView selfieOverlayView, a aVar, a aVar2, ValueAnimator it) {
        Intrinsics.checkNotNullParameter(it, "it");
        selfieOverlayView.r(selfieOverlayView.P, aVar, aVar2, it.getAnimatedFraction());
        selfieOverlayView.o();
    }

    public final void E(e newState, boolean z10) {
        e eVar;
        Intrinsics.checkNotNullParameter(newState, "newState");
        f fVar = this.R;
        if (fVar != null && fVar.a()) {
            f fVar2 = this.R;
            if (fVar2 != null) {
                eVar = fVar2.b();
            } else {
                eVar = null;
            }
            if (eVar == newState) {
                return;
            }
        }
        f fVar3 = this.R;
        if ((fVar3 == null || !fVar3.a()) && this.f19490d == newState) {
            return;
        }
        ValueAnimator valueAnimator = this.Q;
        if (valueAnimator != null) {
            valueAnimator.cancel();
            valueAnimator.removeAllUpdateListeners();
        }
        if (z10) {
            this.R = new f(true, this.f19490d, newState, 0.0f, this.F.getAlpha() / 255.0f, this.G.getAlpha() / 255.0f, this.H.getAlpha() / 255.0f, this.I.getAlpha() / 255.0f, this.K.getAlpha() / 255.0f, this.L.getAlpha() / 255.0f);
            ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, 1.0f);
            ofFloat.setInterpolator(new LinearInterpolator());
            ofFloat.setStartDelay(0L);
            ofFloat.setRepeatCount(0);
            ofFloat.setDuration(400L);
            ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: op.q
                @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                public final void onAnimationUpdate(ValueAnimator valueAnimator2) {
                    SelfieOverlayView.G(SelfieOverlayView.this, valueAnimator2);
                }
            });
            Intrinsics.checkNotNull(ofFloat);
            ofFloat.addListener(new j());
            ofFloat.start();
            this.Q = ofFloat;
            return;
        }
        e eVar2 = this.f19490d;
        this.f19490d = newState;
        this.R = null;
        o();
        w(eVar2, newState);
    }

    @Override // android.view.View
    protected void onDraw(Canvas canvas) {
        float b10;
        float c10;
        int save;
        Intrinsics.checkNotNullParameter(canvas, "canvas");
        super.onDraw(canvas);
        float j10 = this.P.j();
        float k10 = this.P.k();
        int save2 = canvas.save();
        canvas.translate(j10, k10);
        try {
            if (this.V.d() > 0.5f) {
                D(this.J, (int) (this.F.getAlpha() * (((this.V.d() - 0.5f) * 0.66f) + 0.0f)));
                canvas.drawPath(this.f19502x, this.J);
            }
            canvas.drawPath(this.f19502x, this.F);
            canvas.restoreToCount(save2);
            float c11 = this.P.c();
            float d10 = this.P.d();
            int save3 = canvas.save();
            canvas.translate(c11, d10);
            try {
                if (this.V.a() > 0.5f) {
                    D(this.J, (int) (this.G.getAlpha() * (((this.V.a() - 0.5f) * 0.66f) + 0.0f)));
                    canvas.drawPath(this.f19503y, this.J);
                }
                canvas.drawPath(this.f19503y, this.G);
                canvas.restoreToCount(save3);
                if (this.W) {
                    b10 = this.V.c();
                } else {
                    b10 = this.V.b();
                }
                if (this.W) {
                    c10 = this.V.b();
                } else {
                    c10 = this.V.c();
                }
                if (this.K.getAlpha() > 0) {
                    save = canvas.save();
                    try {
                        canvas.translate(this.P.e(), this.P.f());
                        if (b10 > 0.5f) {
                            D(this.J, (int) (this.K.getAlpha() * (((b10 - 0.5f) * 0.66f) + 0.0f)));
                            canvas.drawPath(this.B, this.J);
                        }
                        canvas.drawPath(this.B, this.K);
                        canvas.clipPath(this.E);
                        canvas.drawPath(this.B, this.M);
                        canvas.restoreToCount(save);
                    } finally {
                    }
                }
                if (this.H.getAlpha() > 0) {
                    float e10 = this.P.e();
                    float f10 = this.P.f();
                    save2 = canvas.save();
                    canvas.translate(e10, f10);
                    if (b10 > 0.5f) {
                        try {
                            D(this.J, (int) (this.H.getAlpha() * (((b10 - 0.5f) * 0.66f) + 0.0f)));
                            canvas.drawPath(this.f19504z, this.J);
                        } finally {
                        }
                    }
                    canvas.drawPath(this.f19504z, this.H);
                    canvas.restoreToCount(save2);
                }
                if (this.L.getAlpha() > 0) {
                    int save4 = canvas.save();
                    try {
                        canvas.translate(this.P.g(), this.P.h());
                        if (c10 > 0.5f) {
                            D(this.J, (int) (this.L.getAlpha() * (((c10 - 0.5f) * 0.66f) + 0.0f)));
                            canvas.drawPath(this.C, this.J);
                        }
                        canvas.drawPath(this.C, this.L);
                        canvas.clipPath(this.D);
                        canvas.drawPath(this.C, this.M);
                        canvas.restoreToCount(save4);
                    } finally {
                        canvas.restoreToCount(save4);
                    }
                }
                if (this.I.getAlpha() > 0) {
                    float g10 = this.P.g();
                    float h10 = this.P.h();
                    save = canvas.save();
                    canvas.translate(g10, h10);
                    if (c10 > 0.5f) {
                        try {
                            D(this.J, (int) (this.I.getAlpha() * ((0.66f * (c10 - 0.5f)) + 0.0f)));
                            canvas.drawPath(this.A, this.J);
                        } finally {
                            canvas.restoreToCount(save);
                        }
                    }
                    canvas.drawPath(this.A, this.I);
                    canvas.restoreToCount(save);
                }
            } finally {
                canvas.restoreToCount(save3);
            }
        } finally {
            canvas.restoreToCount(save2);
        }
    }

    @Override // android.view.View
    protected void onSizeChanged(int i10, int i11, int i12, int i13) {
        super.onSizeChanged(i10, i11, i12, i13);
        I();
    }

    public final void setCameraStreamBrightnessInfo(wn.a aVar) {
        if (aVar == null) {
            aVar = new wn.a(null, 1, null);
        }
        this.V = aVar;
        invalidate();
    }

    public final void setIntensity(float f10) {
        if (this.f19491e == f10) {
            return;
        }
        float l10 = kotlin.ranges.d.l(f10, 0.0f, 1.0f);
        ValueAnimator valueAnimator = this.S;
        if (valueAnimator != null) {
            valueAnimator.cancel();
            valueAnimator.removeAllUpdateListeners();
        }
        this.T = new d(0.0f, this.f19491e, l10);
        ValueAnimator ofFloat = ValueAnimator.ofFloat(0.0f, 1.0f);
        ofFloat.setInterpolator(new LinearInterpolator());
        ofFloat.setStartDelay(0L);
        ofFloat.setRepeatCount(0);
        ofFloat.setDuration(200L);
        if (this.f19490d == e.f19530d) {
            final a b10 = a.b(this.P, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 511, null);
            final a p10 = p(new a(0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 0.0f, 511, null), l10);
            ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: com.withpersona.sdk2.inquiry.selfie.view.a
                @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                public final void onAnimationUpdate(ValueAnimator valueAnimator2) {
                    SelfieOverlayView.C(SelfieOverlayView.this, b10, p10, valueAnimator2);
                }
            });
        } else {
            ofFloat.addUpdateListener(new ValueAnimator.AnimatorUpdateListener() { // from class: op.p
                @Override // android.animation.ValueAnimator.AnimatorUpdateListener
                public final void onAnimationUpdate(ValueAnimator valueAnimator2) {
                    SelfieOverlayView.B(SelfieOverlayView.this, valueAnimator2);
                }
            });
        }
        Intrinsics.checkNotNull(ofFloat);
        ofFloat.addListener(new i());
        ofFloat.start();
        this.S = ofFloat;
    }

    public final void setIsPreviewMirrored(boolean z10) {
        if (this.W == z10) {
            return;
        }
        this.W = z10;
        invalidate();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private float f19505a;

        /* renamed from: b  reason: collision with root package name */
        private float f19506b;

        /* renamed from: c  reason: collision with root package name */
        private float f19507c;

        /* renamed from: d  reason: collision with root package name */
        private float f19508d;

        /* renamed from: e  reason: collision with root package name */
        private float f19509e;

        /* renamed from: f  reason: collision with root package name */
        private float f19510f;

        /* renamed from: g  reason: collision with root package name */
        private float f19511g;

        /* renamed from: h  reason: collision with root package name */
        private float f19512h;

        /* renamed from: i  reason: collision with root package name */
        private float f19513i;

        public a(float f10, float f11, float f12, float f13, float f14, float f15, float f16, float f17, float f18) {
            this.f19505a = f10;
            this.f19506b = f11;
            this.f19507c = f12;
            this.f19508d = f13;
            this.f19509e = f14;
            this.f19510f = f15;
            this.f19511g = f16;
            this.f19512h = f17;
            this.f19513i = f18;
        }

        public static /* synthetic */ a b(a aVar, float f10, float f11, float f12, float f13, float f14, float f15, float f16, float f17, float f18, int i10, Object obj) {
            if ((i10 & 1) != 0) {
                f10 = aVar.f19505a;
            }
            if ((i10 & 2) != 0) {
                f11 = aVar.f19506b;
            }
            if ((i10 & 4) != 0) {
                f12 = aVar.f19507c;
            }
            if ((i10 & 8) != 0) {
                f13 = aVar.f19508d;
            }
            if ((i10 & 16) != 0) {
                f14 = aVar.f19509e;
            }
            if ((i10 & 32) != 0) {
                f15 = aVar.f19510f;
            }
            if ((i10 & 64) != 0) {
                f16 = aVar.f19511g;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0) {
                f17 = aVar.f19512h;
            }
            if ((i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0) {
                f18 = aVar.f19513i;
            }
            float f19 = f17;
            float f20 = f18;
            float f21 = f15;
            float f22 = f16;
            float f23 = f14;
            float f24 = f12;
            return aVar.a(f10, f11, f24, f13, f23, f21, f22, f19, f20);
        }

        public final a a(float f10, float f11, float f12, float f13, float f14, float f15, float f16, float f17, float f18) {
            return new a(f10, f11, f12, f13, f14, f15, f16, f17, f18);
        }

        public final float c() {
            return this.f19507c;
        }

        public final float d() {
            return this.f19508d;
        }

        public final float e() {
            return this.f19509e;
        }

        public boolean equals(Object obj) {
            if (this == obj) {
                return true;
            }
            if (obj instanceof a) {
                a aVar = (a) obj;
                return Float.compare(this.f19505a, aVar.f19505a) == 0 && Float.compare(this.f19506b, aVar.f19506b) == 0 && Float.compare(this.f19507c, aVar.f19507c) == 0 && Float.compare(this.f19508d, aVar.f19508d) == 0 && Float.compare(this.f19509e, aVar.f19509e) == 0 && Float.compare(this.f19510f, aVar.f19510f) == 0 && Float.compare(this.f19511g, aVar.f19511g) == 0 && Float.compare(this.f19512h, aVar.f19512h) == 0 && Float.compare(this.f19513i, aVar.f19513i) == 0;
            }
            return false;
        }

        public final float f() {
            return this.f19510f;
        }

        public final float g() {
            return this.f19511g;
        }

        public final float h() {
            return this.f19512h;
        }

        public int hashCode() {
            return (((((((((((((((Float.hashCode(this.f19505a) * 31) + Float.hashCode(this.f19506b)) * 31) + Float.hashCode(this.f19507c)) * 31) + Float.hashCode(this.f19508d)) * 31) + Float.hashCode(this.f19509e)) * 31) + Float.hashCode(this.f19510f)) * 31) + Float.hashCode(this.f19511g)) * 31) + Float.hashCode(this.f19512h)) * 31) + Float.hashCode(this.f19513i);
        }

        public final float i() {
            return this.f19513i;
        }

        public final float j() {
            return this.f19505a;
        }

        public final float k() {
            return this.f19506b;
        }

        public final void l(float f10) {
            this.f19507c = f10;
        }

        public final void m(float f10) {
            this.f19508d = f10;
        }

        public final void n(float f10) {
            this.f19509e = f10;
        }

        public final void o(float f10) {
            this.f19510f = f10;
        }

        public final void p(float f10) {
            this.f19511g = f10;
        }

        public final void q(float f10) {
            this.f19512h = f10;
        }

        public final void r(float f10) {
            this.f19513i = f10;
        }

        public final void s(float f10) {
            this.f19505a = f10;
        }

        public final void t(float f10) {
            this.f19506b = f10;
        }

        public String toString() {
            float f10 = this.f19505a;
            float f11 = this.f19506b;
            float f12 = this.f19507c;
            float f13 = this.f19508d;
            float f14 = this.f19509e;
            float f15 = this.f19510f;
            float f16 = this.f19511g;
            float f17 = this.f19512h;
            float f18 = this.f19513i;
            return "ArcHoverState(arcTopTranslateX=" + f10 + ", arcTopTranslateY=" + f11 + ", arcBottomTranslateX=" + f12 + ", arcBottomTranslateY=" + f13 + ", arcLeftTranslateX=" + f14 + ", arcLeftTranslateY=" + f15 + ", arcRightTranslateX=" + f16 + ", arcRightTranslateY=" + f17 + ", arcThicknessMultiplier=" + f18 + ")";
        }

        public /* synthetic */ a(float f10, float f11, float f12, float f13, float f14, float f15, float f16, float f17, float f18, int i10, DefaultConstructorMarker defaultConstructorMarker) {
            this((i10 & 1) != 0 ? 0.0f : f10, (i10 & 2) != 0 ? 0.0f : f11, (i10 & 4) != 0 ? 0.0f : f12, (i10 & 8) != 0 ? 0.0f : f13, (i10 & 16) != 0 ? 0.0f : f14, (i10 & 32) != 0 ? 0.0f : f15, (i10 & 64) != 0 ? 0.0f : f16, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT) != 0 ? 0.0f : f17, (i10 & IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER) != 0 ? 1.0f : f18);
        }
    }
}
